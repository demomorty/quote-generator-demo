# Quote Generator (Practice Version)

This is a modified version of the [original project](https://github.com/ymw0331/vanilla-javascript-20-projects/tree/master/001-quote-generator) by [ymw0331](https://github.com/ymw0331).

## 🔧 What I Changed

- The original API used for fetching quotes was not working, so I replaced it with a working one from [API Ninjas](https://api-ninjas.com/api/quotes).
- Separated the API key into a `config.js` file for better security (this file is not included in the repo).
- Cleaned up the code and ensured the quote displays properly when the button is clicked.

## 📚 What I Learned

- How to make an API call using `fetch()`.
- How to take JSON data from an API response and display it on the page.
- How to use basic DOM manipulation (e.g., `innerText`, `querySelector`) to update content dynamically.
- How to protect API keys in public projects using `.gitignore`.

## 🔐 How to Use This Project

This project uses the [API Ninjas Quote API](https://api-ninjas.com/api/quotes), which requires an API key.

To run the project:

1. Go to https://api-ninjas.com/api/quotes and sign up for a free account.
2. Get your API key from your profile/dashboard.
3. Create a new file in the project directory called `config.js`.
4. Inside `config.js`, add the following:

   ```js
   const API_KEY = "your-api-key-here";
   const API_URL = "https://api.api-ninjas.com/v1/quotes";
   ```

5. In your `index.html`, make sure to include `config.js` **before** `script.js` like this:

   ```html
   <script src="config.js"></script>
   <script src="script.js"></script>
   ```

6. Make sure `config.js` is listed in `.gitignore` so it doesn't get uploaded to GitHub.

## 🔗 Credits

Original project by [ymw0331](https://github.com/ymw0331), part of the "Vanilla JavaScript 20 Projects" series.