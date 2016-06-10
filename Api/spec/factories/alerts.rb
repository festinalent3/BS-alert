FactoryGirl.define do
  factory :alert do
    ipaddress { FFaker::Internet.ip_v4_address }
  end
end