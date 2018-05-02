json.extract! feedback, :id, :name, :surname, :email, :tel, :text, :created_at, :updated_at
json.url feedback_url(feedback, format: :json)
