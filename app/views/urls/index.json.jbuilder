json.urls @urls, partial: 'urls/show', as: :url
json.total_count @urls.respond_to?(:total_entries) ?
@urls.total_entries : @urls.to_a.count
