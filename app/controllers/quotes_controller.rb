class QuotesController < ApplicationController
    # before_action :find_quote, only: [:update]
    
    def index
        quotes = Quote.all
        render json: QuoteSerializer.new(quotes)
    end 

    def create
        quote = Quote.new(quote_params)
        if quote.save
            render json: QuoteSerializer.new(quote), status: :accepted
        else 
            render json: {errors: quote.errors.full_messages}
        end 
    end 

    def update 
        quote.update(quote_params)
        if quote.save 
            render json: quote, status: 200
        else 
            render json: {errors: quote.errors.full_messages}
        end 
    end 

    def destroy
        quote = Quote.find(params[:id])
        quote.destroy
    end 
    
    
    private

    def quote_params
        params.require(:quote).permit(:content, :category_id)
    end 

    def find_quote 
        quote = Quote.find(params[:id])
    end 


end
