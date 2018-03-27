json.extract! employee, :id, :name, :desc, :created_at, :updated_at
json.url employee_url(employee, format: :json)