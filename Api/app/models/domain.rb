class Domain < ApplicationRecord
  has_many :alerts, dependent: :destroy

  validates :weburl, presence: true

  def alerts_count
    self.alerts.count
  end
end
