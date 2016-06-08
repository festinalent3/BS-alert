describe Api::V1::UsersController do
  before(:each) { request.headers['Accept'] = "application/json" }

  describe "GET #show" do
    before(:each) do
      @user = FactoryGirl.create :user
      # get :show, params: { id: @user.id, format: :json }, session: { user_id: 1 }
      # p request
    end

    it "returns user as JSON object" do
      expect(:get => "/api/users/#{@user.id}").to route_to("default"=>{"format"=>:json}, :controller => "api/v1/users", :action => "show", id: @user.id.to_s)
      p response.body
      user_response = JSON.parse(response.body, symbolize_names: true)
      expect(user_response[:email]).to eq(@user.email)
    end

    xit { expect(response.status).to eq(200) }
  end

  describe "POST #create" do

    context "when is successfully created" do
      before(:each) do
        @user_attributes = FactoryGirl.attributes_for :user
        post :create, { user: @user_attributes }, format: :json
      end

      it "renders the json representation for the user record just created" do
        user_response = JSON.parse(response.body, symbolize_names: true)
        expect(user_response[:email]).to eql @user_attributes[:email]
      end

      it { should respond_with 201 }
    end

    context "when is not created" do
      before(:each) do
        @invalid_user_attributes = { password: "12345678",
                                     password_confirmation: "12345678" }
        post :create, { user: @invalid_user_attributes }, format: :json
      end

      it "renders an errors json" do
        user_response = JSON.parse(response.body, symbolize_names: true)
        expect(user_response).to have_key(:errors)
      end

      it "renders the json errors on why the user could not be created" do
        user_response = JSON.parse(response.body, symbolize_names: true)
        expect(user_response[:errors][:email]).to include "can't be blank"
      end

      it { should respond_with 422 }
    end
  end
end