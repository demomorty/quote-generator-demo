// script.js

const quoteContainer = document.getElementById("quote-container");
const quoteText = document.getElementById("quote");
const authorText = document.getElementById("author");
const twitterBtn = document.getElementById("twitter");
const newQuoteBtn = document.getElementById("new-quote");

// Fetch a new quote from your secure Vercel API route
async function getQuote() {
  try {
    const response = await fetch("/api/quote"); // Calls serverless function
    const data = await response.json();
    const quote = data[0];

    authorText.innerText = quote.author || "Unknown";

    if (quote.quote.length > 100) {
      quoteText.classList.add("long-quote");
    } else {
      quoteText.classList.remove("long-quote");
    }

    quoteText.innerText = quote.quote;
  } catch (error) {
    quoteText.innerText = "Failed to fetch quote.";
    authorText.innerText = "";
    console.error("Error fetching quote:", error);
  }
}

// Tweet Quote
function tweetQuote() {
  const twitterUrl = `https://twitter.com/intent/tweet?text=${quoteText.textContent} - ${authorText.textContent}`;
  window.open(twitterUrl, "_blank");
}

// Event listeners
newQuoteBtn.addEventListener("click", getQuote);
twitterBtn.addEventListener("click", tweetQuote);

// On load
getQuote();
