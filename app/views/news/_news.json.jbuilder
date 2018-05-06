json.extract! news, :id, :newspic, :desc, :created_at, :updated_at
json.url news_url(news, format: :json)
