//Quote class created here. Every new instance of Quote is run through this constructor
class Quote {
    constructor(quote, quoteAttributes) {
        this.id = quote.id 
        this.content = quoteAttributes.content 
        this.category = quoteAttributes.category
        Quote.all.push(this)
        console.log(this)
        
    }


 renderQuoteCard() {
    return `
    <div class="card-body">
        <h4 class="card-title">"${this.content}"</h3>
        <h6 class="card-title">${this.category.name}</h4>
        <button type="delete-quote-button" onClick="deleteQuote()" data-id=${this.id}>Delete</button>
            
    </div>
    <br></br>`;

    }

// renderUpdateForm() {
//     return `
//     <div class="card-body">
//         <form data-id=${this.id}>
//         <h4 class="card-title">"${this.content}"</h3>
//         <h6 class="card-title">${this.category.name}</h4>
//         <button id="edit-quote-button" type="submit">Edit</button>
//     `
//     }
}

Quote.all = [];














