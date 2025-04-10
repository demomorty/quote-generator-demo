
const quoteContainer = document.getElementById("quote-container");
const quoteText = document.getElementById("quote");
const authorText = document.getElementById("author");
const twitterBtn = document.getElementById("twitter");
const newQuoteBtn = document.getElementById("new-quote");

// Fetch a new quote from API or fallback to local
async function getQuote() {
  try {
    const response = await fetch("/api/quote");

    if (!response.ok) throw new Error("API error");

    const data = await response.json();
    const quote = data[0];

    displayQuote({ text: quote.quote, author: quote.author });
  } catch (error) {
    console.warn("API failed. Loading local quote...");
    loadLocalQuote();
  }
}

// Load a random quote from the local-quotes.js array
function loadLocalQuote() {
  const index = Math.floor(Math.random() * localQuotes.length);
  const quote = localQuotes[index];
  displayQuote(quote);
}

// Display quote on page
function displayQuote(quote) {
  authorText.innerText = quote.author || "Unknown";

  if (quote.text.length > 100) {
    quoteText.classList.add("long-quote");
  } else {
    quoteText.classList.remove("long-quote");
  }

  quoteText.innerText = quote.text;
}

// Tweet the current quote
function tweetQuote() {
  const twitterUrl = `https://twitter.com/intent/tweet?text=${quoteText.textContent} - ${authorText.textContent}`;
  window.open(twitterUrl, "_blank");
}

// Event listeners
newQuoteBtn.addEventListener("click", getQuote);
twitterBtn.addEventListener("click", tweetQuote);

// Initial load
getQuote();
