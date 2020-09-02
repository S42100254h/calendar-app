class Schedule < ApplicationRecord
  belongs_to :user
  validates :title, presence: true, length: { maximum: 50 }
  validates :location, length: { maximum: 50 }
  validates :description, length: { maximum: 400 }
  validates :date, presence: true
end
