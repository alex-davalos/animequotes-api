// API Connect with Fetch Method
fetch('https://animechan.vercel.app/api/quotes')
  .then((response) => {
    return response.json()
  })
  .then((data) => {
    data.forEach((quotes) => {
    // Create a div with a card class
    const card = document.createElement('div')
    card.setAttribute('class','card')

      // Create an h1 and set the text content to the character 
      const h1 = document.createElement('h1')
      h1.textContent = quotes.character + ` - (${quotes.anime})` 

      // Create a p and set the text content to the film's description -- quote
      const p = document.createElement('p')
      quotes.quote = quotes.quote.substring(0, 300) // Limit to 300 chars
      p.textContent = `${quotes.quote}...` // End with an ellipses

      // Append the cards to the container element
      container.appendChild(card)

      // Each card will contain an h1 and a p
      card.appendChild(h1)
      card.appendChild(p)
})
  })
  .catch((err) => {
    console.log(err)
  })


// DOM 
const app = document.getElementById('root')

// Create logo
const logo = document.createElement('img')
logo.src = 'logo.png'

// Create container
const container = document.createElement('div')
container.setAttribute('class', 'container')

// Append elements to root
app.appendChild(logo)
app.appendChild(container)
