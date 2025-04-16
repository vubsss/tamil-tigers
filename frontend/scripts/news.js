const rssConverter = "https://api.rss2json.com/v1/api.json?rss_url=";
const feeds = [
  { name: "bbc", url: "http://feeds.bbci.co.uk/news/world/rss.xml" },
  { name: "guardian", url: "https://www.theguardian.com/international/rss" }
];
let allArticles = [];

async function loadNews(searchTerm = "", source = "all", reset = false) {
  const list = document.getElementById("newsList");
  const loading = document.getElementById("loading");
  
  if (!list || !loading) return; // Guard clause for missing elements
  
  if (reset) {
    allArticles = [];
    list.innerHTML = "";
  }
  
  loading.style.display = "block";
  
  try {
    const selectedFeeds = source === "all" ? feeds : feeds.filter(f => f.name === source);
    
    for (const feed of selectedFeeds) {
      const res = await fetch(`${rssConverter}${encodeURIComponent(feed.url)}`, {
        mode: 'cors', // Added CORS mode
        headers: {
          'Accept': 'application/json'
        }
      });
      if (!res.ok) throw new Error(`Failed to fetch ${feed.name}`);
      const data = await res.json();
      
      const articles = (data.items || []).map(item => ({
        title: item.title || "No title",
        description: item.description || "No description",
        url: item.link || "#",
        source: feed.name.toUpperCase(),
        pubDate: item.pubDate ? new Date(item.pubDate).toLocaleDateString() : "Unknown"
      }));
      
      allArticles.push(...articles);
    }
    
    const filteredArticles = searchTerm
      ? allArticles.filter(article =>
          article.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
          article.description.toLowerCase().includes(searchTerm.toLowerCase())
        )
      : allArticles;
    
    const articleCount = document.getElementById("articleCount");
    if (articleCount) {
      articleCount.textContent = `Total articles: ${filteredArticles.length}`;
    }
    
    list.innerHTML = "";
    filteredArticles.forEach(article => {
      const div = document.createElement("div");
      div.className = "news-item";
      div.innerHTML = `
        <h3><a href="${article.url}" target="_blank">${article.title}</a></h3>
        <p><strong>Source:</strong> ${article.source} | 
           <strong>Date:</strong> ${article.pubDate}</p>
        <p>${article.description}</p>
      `;
      list.appendChild(div);
    });
    
  } catch (err) {
    list.innerHTML += `<p style="color: red;">Error: ${err.message}</p>`;
  } finally {
    loading.style.display = "none";
  }
}

// Add event listeners for search and source selection
const searchInput = document.getElementById("search");
const sourceSelect = document.getElementById("source");

if (searchInput) {
  searchInput.addEventListener("input", (e) => {
    loadNews(e.target.value, sourceSelect?.value || "all", true);
  });
}

if (sourceSelect) {
  sourceSelect.addEventListener("change", (e) => {
    loadNews(searchInput?.value || "", e.target.value, true);
  });
}

loadNews();