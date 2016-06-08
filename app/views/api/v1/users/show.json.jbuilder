user ||= @user

if user != nil 

  json.id user['id']
  json.email user['email']
  json.created_at user['created_at']

else
  render json:{error: "message: resource not found"}
end