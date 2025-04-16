### Fixing the Buggy Code

- This code has 30 issues out of which 1 is no code in style.css . 
- The total marks for the entire codebase is 40, some issues have more marks than the other one. Style.css is of 5 marks. It will get scaled down to 20. All team members will get equal marks.
- You are suppose to work in teams of 4 or 5
- Each team member has to identify atleast 4 issues and fix atleast 4 issue. If someone doesn't do this, their marks get deducted.
- You are suppose to work on a git repository as collaborators

### What kind of bugs are there

- Bugs which will break your code
- Bugs might be a single word
- Bugs might be section of removed code
- Bugs might be section of unnecessary code
- Bugs might be useless files
- Bugs might be in the UI/UX of the pages
- Bugs might be in the api calls
- Bugs might be in the dependencies  

### submission format

- Make submissions on moodle
- Do not remove .git folder 
- Only 1 submission per team
- Submit it as Corrected_Code.zip

### Add the names of the members and roll numbers of your team below

- Name : Roll Number

### Table to keep track

| ID  | Issue Description                        | Identified By | Fixed By     |
|-----|------------------------------------------|---------------|--------------|
| 1   | Style.css is not filled                                    |         Narain |     Whole Team     |
| 2   | In index.html character encoding is ISO 8859-1 it Should be UTF-8 to include special characters emojis etc.                                        |   Navey            | Navey             |
| 3   | In quiz.py, missing data validation for `/answer` input (resolved by adding a Pydantic model).                                        | Aashuthosh             | Aashuthosh             |
| 4   | in profile.html script is given as "styles/profile.js" changed to "scripts/profile.js"                                        |  Vibhu             |   Vibhu          |
| 5   | in index.html Removed outdated XHTML 1.0 Strict DOCTYPE, replaced with HTML5 DOCTYPE                                     |       Navey        |    Navey          |
| 7   |  in index.html Added active class for current page indication                                   |      Navey         |   Navey           |
| 8   |    Replace question = questions[1] with question = random.choice(questions) to select random questions for variety.                                     |   Aashuthosh            |  Aashuthosh            |
| 9   |       hi            man                       |               |              |
| 10  |                                          |               |              |
| 11  |                                          |               |              |
| 12  |                                          |               |              |
| 13  |                                          |               |              |
| 14  | Item class does not inherit from BaseModel                                         | Dev   | Dev             |
| 15  | Item name has datatype int intstead of str                                         | Dev              | Dev             |
| 16  |                                          |               |              |
| 17  |                 in items.html missing container added it                          |              Navey |       Navey      |                          Navey
| 18  |   In quiz.py, the submit_answer endpoint uses @router.get("/answer") but expects a body, so it should be changed to @router.post("/answer") with a Pydantic model for input validation.                                      |  Aashuthosh             |  Aashuthosh            |
| 19  |    In quiz.py, the submit_answer endpoint doesn't verify if the answer is valid, so add a check to ensure the answer is in the question's options before processing it.                                      |   Aashuthosh            |  Aashuthosh            |
| 20  |  IN users.py, changed @router.post("/") to @router.get("/") for get_users to use the correct HTTP method.                                        |  Aashuthosh             |  Aashuthosh            |
| 21  | In users.py, changed result = await collection.delete_all() to result = await collection.delete_one({"_id": ObjectId(user_id)}) in delete_user to delete only the specified user.                                         | Aashuthosh              |  Aashuthosh            |
| 22  | In users.py, added try: and except ValueError: raise HTTPException(status_code=400, detail="Invalid user ID format") in delete_user to handle invalid user_id formats.                                         |  Aashuthosh             |  Aashuthosh            |
| 23  |                                          |               |              |
| 24  |                                          |               |              |
| 25  |                                          |               |              |
| 26  |                                          |               |              |
| 27  |                                          |               |              |
| 28  |  baseURL not defined in profile.js                                        |    Vibhu           |       Vibhu       |
| 29  |  changed userCount to userCounts in profile.js                                        | Vibhu              |  Vibhu           |
| 30  |                                          |               |              |
