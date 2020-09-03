class Api::V1::SchedulesController < Api::V1::ApiController
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
    schedule = Schedule.find(params[:id])
    schedule.update!(user_params)
    render json: schedule
  end

  def destroy
    schedule = Schedule.find(params[:id])
    schedule.destroy!
    render json: schedule
  end

  private
    def schedule_params
      params.require(:schedule).permit(:title, :location, :description, :date)
    end
end
