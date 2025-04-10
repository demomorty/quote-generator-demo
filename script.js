

const quoteContainer = document.getElementById("quote-container");
const quoteText = document.getElementById("quote");
const authorText = document.getElementById("author");
const twitterBtn = document.getElementById("twitter");
const newQuoteBtn = document.getElementById("new-quote");
// const loader = document.getElementById("loader"); // Uncomment if you use loader



// Fetch a new quote from API Ninjas
async function getQuote() {

  try {
    const response = await fetch(API_URL, {
      headers: { "X-Api-Key": API_KEY },
    });

    const data = await response.json();
    const quote = data[0];

    // Handle empty author
    authorText.innerText = quote.author || "Unknown";

    // Handle long quote styling
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
  removeLoadingSpinner();
}

// Tweet Quote
function tweetQuote() {
  const twitterUrl = `https://twitter.com/intent/tweet?text=${quoteText.textContent} - ${authorText.textContent}`;
  window.open(twitterUrl, "_blank");
}

// Event listeners
newQuoteBtn.addEventListener("click", getQuote);
twitterBtn.addEventListener("click", tweetQuote);

// On initial load
getQuote();
