json.extract! news, :id, :image, :desc, :created_at, :updated_at
json.url news_url(news, format: :json)
