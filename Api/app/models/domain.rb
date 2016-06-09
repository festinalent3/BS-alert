class Domain < ApplicationRecord
  has_many :alerts

  validates :weburl, presence: true
end
