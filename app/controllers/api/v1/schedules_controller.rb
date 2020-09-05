class Api::V1::SchedulesController < Api::V1::ApiController
  before_action :set_schedule, only: [:update, :destroy]

  def create
    schedule = current_user.schedules.create!(schedule_params)
    render json: schedule
  end

  def index
    schedules = Schedule.all
    render json: schedules
  end

  def show
    schedule = Schedule.find(params[:id])
    render json: schedule
  end

  def update
    @schedule.update!(schedule_params)
    render json: @schedule
  end

  def destroy
    @schedule.destroy!
    render json: @schedule
  end

  private

    def schedule_params
      params.require(:schedule).permit(:title, :location, :description, :date)
    end

    def set_schedule
      @schedule = current_user.schedules.find(params[:id])
    end
end
