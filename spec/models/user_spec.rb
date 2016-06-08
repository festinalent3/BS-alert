require 'rails_helper'

describe User, :type => :model do
  before { @user = FactoryGirl.build(:user) }

  subject { @user }

  it { expect(subject).to respond_to(:email) }
  it { expect(subject).to respond_to(:password) }
  it { expect(subject).to respond_to(:password_confirmation) }

  it { expect(subject).to be_valid }

  describe "when email is not present" do
    before { @user.email = " " }
    it { expect(subject).to_not be_valid }
  end
end
