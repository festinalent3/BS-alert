class AddAlertToDomains < ActiveRecord::Migration[5.0]
  def change
    add_reference :alerts, :domain, foreign_key: true
  end
end
