const endPoint = "http://localhost:3000/quotes";

document.addEventListener('DOMContentLoaded', () => {
    getQuotes()
    
    const createQuoteForm = document.querySelector("#new-quote-form")
    
    createQuoteForm.addEventListener("submit", (e) => createFormHandler(e))

})

function getQuotes() {
    fetch(endPoint)
    .then(response => response.json())
    .then(quotes => {
        quotes.data.forEach(quote => {
        
        let newQuote = new Quote(quote, quote.attributes)

        document.querySelector('#quote-container').innerHTML += newQuote.renderQuoteCard()

        })
    })
}

function createFormHandler(e) {
    e.preventDefault()
    const contentInput = document.querySelector('#input-content').value 
    const categoryId = parseInt(document.querySelector('#categories').value)
    postFetch(contentInput, categoryId)
  
}

function postFetch(content, category_id) {
    const bodyData = {content, category_id}
    fetch(endPoint, {
        method: "POST",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify(bodyData)
            
    })
    .then(response => response.json())
    .then(quote => {
        console.log(quote);
        const quoteData = quote.data 
        let newQuote = new Quote(quoteData, quoteData.attributes)
    document.querySelector('#quote-container').innerHTML += newQuote.renderQuoteCard()
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
// function updateQuote(content, category_id) {
//     let quoteId = parseInt(event.target.dataset.id)
//     let quote = Quote.findById(id);
//     let id = event.target.dataset.id;
//    const bodyJSON = {content, category_id} 
//    fetch(`http://localhost:3000/quotes/${quoteId}`, {
//        method: 'PATCH',
//        headers: {'Content-Type': 'application/json'},
//        body: JSON.stringify(bodyJSON)
//    })
//    .then(response => response.json())
//    .then(updatedQuote =>
//     console.log(updatedQuote));

//     document.querySelector('#update-quote').innerHTML = quote.renderUpdateForm();
//     document.querySelector('#update-quote').addEventListener('submit', event => updateFormHandler(event))
// }

// function updateFormHandler(event) {
//     event.preventDefault();
//     let id = event.target.dataset.id;
//     let quote = Quote.findById(id);
//     const content = event.target.querySelector('#update-content').value;
//     const category_id = parseInt(event.target.querySelctor('#categories').value);
//     patchQuote(content, category_id)
// }




