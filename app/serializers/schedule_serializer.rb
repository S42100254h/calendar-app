class ScheduleSerializer < ActiveModel::Serializer
  attributes :id, :title, :location, :description, :date
  belongs_to :user
end
