const baseURL = "http://localhost:8000";

async function loadItems(searchTerm = "") {
  try {
    const res = await fetch(`${baseURL}/items`);
    const data = await res.json();
    const list = document.getElementById("itemList");
    if (!list) return; // Guard clause if element doesn't exist
    list.innerHTML = "";

    const filteredItems = data.filter(item =>
      item.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    const itemCount = document.getElementById("itemCount");
    if (itemCount) {
      itemCount.textContent = `Total items: ${filteredItems.length}`;
    }

    filteredItems.forEach(item => {
      const li = document.createElement("li");
      li.textContent = `${item.name}: ${item.description}`;
      const del = document.createElement("button");
      del.textContent = "Delete";
      del.onclick = () => deleteItem(item._id);
      li.appendChild(del);
      list.appendChild(li);
    });
  } catch (err) {
    console.error("Error loading items:", err);
  }
}

async function deleteItem(id) {
  try {
    // Changed POST to DELETE since we're deleting an item
    await fetch(`${baseURL}/items/${id}`, { method: "DELETE" });
    loadItems(document.getElementById("search").value);
  } catch (err) {
    console.error("Error deleting item:", err);
  }
}

const searchInput = document.getElementById("search");
if (searchInput) {
  searchInput.addEventListener("input", (e) => {
    loadItems(e.target.value);
  });
}

const itemForm = document.getElementById("itemForm");
if (itemForm) {
  itemForm.addEventListener("submit", async (e) => {
    e.preventDefault();
    try {
      const name = document.getElementById("name").value;
      const description = document.getElementById("description").value;
      await fetch(`${baseURL}/items`, {
        method: "POST",
        headers: { "Content-Type": "application/json" }, // Fixed content type
        body: JSON.stringify({ name, description })
      });
      e.target.reset();
      loadItems(document.getElementById("search").value);
    } catch (err) {
      console.error("Error adding item:", err);
    }
  });
}

loadItems();