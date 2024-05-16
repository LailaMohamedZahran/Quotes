
var quotes = [
  {
    quote: `"A friend is someone who knows all about you and still loves you."`,
    author: "Elbert Hubbard"
  },
  {
    quote: `"To live is the rarest thing in the world. Most people exist, that is all."`,
    author: "Oscar Wilde"
  },
  {
    quote: `"Always forgive your enemies; nothing annoys them so much."`,
    author: "Oscar Wilde"
  },
  {
    quote: `"Live as if you were to die tomorrow. Learn as if you were to live forever."`,
    author: "Mahatma Gandhi"
  },
  {
    quote: `"Resentment is like drinking poison and waiting for your enemies to die."`,
    author: "Nelson Mandela"
  },
  {
    quote: `"It is better to be hated for what you are than to be loved for what you are not."`,
    author: "Andre Gide, Autumn Leaves"
  },
];

var previousQuoteIndex = -1;

function generateRandomQuote() {
  var randomIndex = Math.floor(Math.random() * quotes.length);
  while (randomIndex === previousQuoteIndex) {
    randomIndex = Math.floor(Math.random() * quotes.length);
  }

  var randomQuote = quotes[randomIndex].quote;
  var randomAuthor = quotes[randomIndex].author;

  document.getElementById("randomText").innerHTML = randomQuote + "<br>--" + randomAuthor;

  previousQuoteIndex = randomIndex;
}