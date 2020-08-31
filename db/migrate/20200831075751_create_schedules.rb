class CreateSchedules < ActiveRecord::Migration[5.2]
  def change
    create_table :schedules do |t|
      t.string :title
      t.text :description
      t.string :location
      t.date :date
      t.references :user, foreign_key: true

      t.timestamps
    end
  end
end
