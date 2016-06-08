describe Api::V1::UsersController do
  before(:each) { request.headers['Accept'] = "application/localhost:3000.v1" }

  describe "GET #show" do
    before(:each) do
      @user = FactoryGirl.create :user
      # get :show, params: { id: @user.id, format: :json }, session: { user_id: 1 }
      p request
    end

    it "returns user as JSON object" do
      expect(:get => "/api/users/#{@user.id}").to route_to("default"=>{"format"=>:json}, :controller => "api/v1/users", :action => "show", id: @user.id.to_s)
      p response.body
      user_response = JSON.parse(response.body, symbolize_names: true)
      expect(user_response[:email]).to eq(@user.email)
    end

    xit { expect(response.status).to eq(200) }
  end
end