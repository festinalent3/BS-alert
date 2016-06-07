class AddAlertToUrl < ActiveRecord::Migration
  def change
    add_reference :alerts, :url, foreign_key: true
  end
end
