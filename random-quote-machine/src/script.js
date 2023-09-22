let arrayIndex = 0;
let currentIndex = 0;

const generateQuote = function() {
    const quotes = [
    {
        quote: "The trees that are slow to grow bear the best fruit.",
        author: "Moliere"
    },
    {
        quote: "Opera is when a guy gets stabbed in the back and, instead of bleeding, he sings.",
        author: "Ed Gardner"
    },
    {
        quote: "A man cannot be comfortable without his own approval.",
        author: "Mark Twain"
    },
      {
        quote: "The words that enlighten the soul are more precious than jewels.",
        author: "Hazrat Inayat Khan"
    },
    {
        quote: "The minute one utters a certainty, the opposite comes to mind.",
        author: "May Sarton"
    },
      {
        quote: "Our deeds determine us, as much as we determine our deeds.",
        author: "Marian Evans"
    },
    {
        quote: "A little drama wins more friends than boring.",
        author: "Scott Westerfeld"
    }
];
  
  do {
    arrayIndex = Math.floor(Math.random() * quotes.length);
} while (arrayIndex == currentIndex);
  
  currentIndex = arrayIndex;

  document.getElementById("text").innerHTML = quotes[arrayIndex].quote;
  document.getElementById("author").innerHTML = quotes[arrayIndex].author;
};

window.onload = function() {
    generateQuote();
    document.getElementById("new-quote").addEventListener('click', generateQuote);
}