class Alert < ApplicationRecord
  belongs_to :domain

  validates :ipaddress, presence: true
end
