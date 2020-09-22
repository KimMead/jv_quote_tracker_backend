class QuoteSerializer
    include FastJsonapi::ObjectSerializer
    attributes :content, :category_id, :category 
    belongs_to :category 
  end
  