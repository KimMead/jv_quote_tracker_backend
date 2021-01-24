# Convert data into a format that can be easily transferred across a network as a string and reconstructed later.  
class QuoteSerializer
    include FastJsonapi::ObjectSerializer
    attributes :content, :category_id, :category 
    belongs_to :category 
  end
  