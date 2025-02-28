// Get Button element from HTML
const btn = document.getElementById("promptBtn");
// Array of 10 famous quotes
const quotes = [
  "I'm not here to be perfect, I'm here to be real. - Lady Gaga",
  "I'm not interested in money. I just want to be wonderful. - Marilyn Monroe",
  "The only thing that feels better than winning is winning when nobody thought you could. - Hank Aaron",
  "Success is not final, failure is not fatal: It is the courage to continue that counts. - Winston Churchill",
  "If you can dream it, you can do it. - Walt Disney",
  "If you want something done, ask a busy person to do it. - Laura Ingalls Wilder",
  "If your actions inspire others to dream more, learn more, do more and become more, you are a leader. - John Quincy Adams",
  "The best way to find out if you can trust somebody is to trust them. - Ernest Hemingway",
  "The only Limit to our realization of tomorrow will be our doubts of today. - Franklin D. Roosevelt",
  "We may encounter many defeats but we must not be defeated. - Maya Angelou",
];
// Function to generate a random quote from the array and display it as an alert
function generateQuote() {
  const index = Math.floor(Math.random() * 10);
  alert(quotes[index]);
}
// Add event listener to the button
btn.addEventListener("click", generateQuote);
