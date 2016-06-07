url ||= @url

if url != nil 

	json.url_id url['id']
	json.name url['name']

else
	render json:{error: "message: resource not found"}
end