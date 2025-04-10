
# 🧠 Quote Generator (Practice Version)

🔗 **Live Demo:** [quote-generator-demo.vercel.app](https://quote-generator-demo.vercel.app)

This is a modified version of the [original project](https://github.com/ymw0331/vanilla-javascript-20-projects/tree/master/001-quote-generator) by [ymw0331](https://github.com/ymw0331).

## 🔧 What I Changed

- Replaced the broken quote API with a working one from [API Ninjas](https://api-ninjas.com/api/quotes)
- Implemented a **Vercel serverless function** (`/api/quote`) to securely fetch quotes using an environment variable for the API key
- Updated the frontend (`script.js`) to call this internal API route instead of making direct external API calls
- Added a local fallback quote system using a `local-quotes.js` file if the API fails or the quota is used up
- Cleaned up structure and added a GitHub link in the UI

## 📚 What I Learned

- How to secure API keys in front-end projects using Vercel serverless functions
- How to make internal API calls (`/api/quote`) from the frontend using `fetch()`
- How to use a local JS file as a fallback for offline/failed API scenarios
- DOM manipulation with JavaScript
- Basic styling and layout improvements

## 🚀 How It Works

- On load or when the "New Quote" button is clicked, the app tries to fetch a quote from `/api/quote`
- This API route is a Vercel serverless function that contacts the external quote API using a hidden key
- If the API call fails (due to quota limits or errors), the app loads a random quote from a local fallback array (`local-quotes.js`)

## 🔐 How to Run Locally

1. Clone the repo:
   ```
   git clone https://github.com/demomorty/quote-generator-demo.git
   ```

2. Get a free API key from [API Ninjas](https://api-ninjas.com/api/quotes)

3. In your Vercel dashboard, go to **Settings → Environment Variables** and add:

   | Key      | Value            |
   |----------|------------------|
   | `API_KEY` | your-api-key-here |

4. Make sure your file structure looks like this:

```
quote-generator-demo/
├── api/
│   └── quote.js          # serverless function
├── local-quotes.js       # fallback quote array
├── script.js
├── index.html
├── style.css
├── .gitignore
└── README.md
```

5. Deploy to Vercel or run locally using `live-server` or similar

## 📝 Credits

Original project by [ymw0331](https://github.com/ymw0331), part of the "Vanilla JavaScript 20 Projects" series.
Modifications by [@demomorty](https://github.com/demomorty)