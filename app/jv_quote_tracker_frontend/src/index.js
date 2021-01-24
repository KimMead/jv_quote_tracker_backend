const endPoint = "http://localhost:3000/quotes";
// First event to happen to load the page
document.addEventListener('DOMContentLoaded', () => {
    getQuotes()
    
    const createQuoteForm = document.querySelector("#new-quote-form")
    // When an event happens, listen for the event (submit).  
    createQuoteForm.addEventListener("submit", (e) => createFormHandler(e))

    //EDIT 
    const quoteContainer = document.querySelector('#quote-container')
    quoteContainer.addEventListener('click', e => {
        const id = parseInt(e.target.dataset.id);
        const quote = quote.data
        document.querySelector('#update-quote').innerHTML = quote.renderUpdateForm();
    });

    document.querySelector('#update-quote').addEventListener('submit', e => updateFormHandler(e))
})


function getQuotes() { // index method
    fetch(endPoint) // get '/quotes'
    .then(response => response.json()) 
    .then(quotes => { // quotes = Quote.all
        quotes.data.sort((a, b) => (a.attributes.content.toUpperCase() > b.attributes.content.toUpperCase()) ? 1 : -1);
        quotes.data.forEach(quote => { // quotes.each do |quote|
        let newQuote = new Quote(quote, quote.attributes) // how to create a new instance of the quote class
        
        document.querySelector('#quote-container').innerHTML += newQuote.renderQuoteCard() // happens in view page in ruby
       
        })  
    })
}

function createFormHandler(e) {
    // Prevent refresh default
    e.preventDefault()
    const contentInput = document.querySelector('#input-content').value 
    const categoryId = parseInt(document.querySelector('#categories').value)
    postFetch(contentInput, categoryId)
  
}
// Send data to the server - user input
function postFetch(content, category_id) {  // create method
    const bodyData = {content, category_id}  // params
    fetch(endPoint, { // post '/quotes'
        method: "POST",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify(bodyData)
            
    })
    .then(response => response.json())
    .then(quote => { 
        console.log(quote);
        const quoteData = quote.data 
        let newQuote = new Quote(quoteData, quoteData.attributes) // quote = Quote.create(params)
    document.querySelector('#quote-container').innerHTML += newQuote.renderQuoteCard() // 
    })
}

function deleteQuote() {
    let quoteId = parseInt(event.target.dataset.id)
    fetch(`http://localhost:3000/quotes/${quoteId}`, {
        method: 'DELETE'
    })
    event.target.parentElement.remove()
}

// ATTEMPT AT UPDATE QUOTE - NOT WORKING
// add event listener to EDIT button - associated with corresponding quote (params)
// render updateQuote form with the content and category of the quote
// submit the form by making a PATCH request to the server to update the quote and render quote index view

function patchQuote(content, category_id) { // update method
    const bodyData = {content, categoy_id}
    fetch(`http://localhost:3000/quotes/${quoteId}`, {
       method: 'PATCH',
       headers: {
           'Content-Type': 'application/json',
           Accept: 'application/json',
       },
       body: JSON.stringify(bodyData)
})
    then(response => response.json())
   .then(updatedQuote => {
    console.log(updatedQuote);
   });
}
   

function updateFormHandler(e) {
    e.preventDefault();
    const id = e.target.dataset.id;
    const quote = quote.data;
    const content = e.target.querySelector('#input-content').value;
    const category_id = parseInt(event.target.querySelctor('#categories').value);
    patchQuote(content, category_id)
}

var likes = 0;

function clickCounter() {
likes += 1;
  if (typeof(Storage) !== "undefined") {
    if (localStorage.clickcount) {
      localStorage.clickcount = Number(localStorage.clickcount)+1;
    } else {
      localStorage.clickcount = 1;
    }
  document.getElementById("likes").innerHTML = localStorage.clickcount;
} 
};




