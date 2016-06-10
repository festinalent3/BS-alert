FactoryGirl.define do
  factory :domain do
    weburl { FFaker::Internet.http_url }
  end
end