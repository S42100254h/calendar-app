class Api::V1::SchedulesController < Api::V1::ApiController
  def index
    schedules = Schedule.all
    render json: schedules
  end
end
