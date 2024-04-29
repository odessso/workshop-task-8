let quote = '';

function setup() {
  createCanvas(windowWidth, windowHeight);
  textAlign(CENTER, CENTER);
}

async function generateQuote() {
  const searchTerm = document.getElementById('search').value;
  const url = `https://quote-garden.onrender.com/api/v3/quotes?query=${searchTerm}`;

  try {
    const response = await fetch(url);
    const data = await response.json();
    const quotes = data.data;

    if (quotes.length > 0) {
      const randomIndex = floor(random(quotes.length));
      quote = `"${quotes[randomIndex].quoteText}" - ${quotes[randomIndex].quoteAuthor}`;
    } else {
      quote = "No relevant quote found.";
    }
  } catch (error) {
    console.error('Error fetching data:', error);
    quote = "Error fetching data. Please try again.";
  }
}

function draw() {
  background(255);
  fill(0);

  let fontSize = 20; 
  textSize(fontSize);

  let words = quote.split(' ');
  let lines = [];
  let currentLine = '';

  for (let i = 0; i < words.length; i++) {
    currentLine += words[i] + ' ';
    if ((i + 1) % 10 === 0 || i === words.length - 1) {
      lines.push(currentLine.trim()); 
      currentLine = '';
    }
  }

  let y = height / 2 - (lines.length - 1) * textAscent() / 2;
  for (let line of lines) {
    text(line, width/2, y);
    y += textAscent();
  }
}



