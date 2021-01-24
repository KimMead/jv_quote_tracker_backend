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
        <button type="like-quote-button" onClick="clickCounter()">Like</button><p>Likes: <a id="likes">0</a></p>
        
         
    </div>
    <br></br>`;

    }

renderUpdateForm() {
 return `
    <form data-id=${this.id}>
        <h4>Edit Your Quote</h4>
        <label>Content</label>
        <textarea id='input-content' name="content" placeholder="Enter your quote"></textarea>
        <label>Choose a Category</label>
            <select id="categories" name="categories">
                <option value="1">Motivational</option>
                <option value="2">Funny</option>
                <option value="3">From A Friend</option>
            </select>
        <br><br>
        <input id= 'edit-button' type="submit" value="Edit Quote" class="submit">

    </form>
    `;
    }
}

Quote.all = [];
















