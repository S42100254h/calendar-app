require "rails_helper"

RSpec.describe "Api::V1::Schedules", type: :request do
  describe "GET /api/v1/schedules" do
    subject { get(api_v1_schedules_path) }

    before do
      create_list(:schedule, 2)
    end

    it "スケジュールの一覧を取得できる" do
      subject
      res = JSON.parse(response.body)
      expect(res.length).to eq 2
      expect(res[0].keys).to eq ["id", "title", "location", "description", "date", "user"]
      expect(response).to have_http_status(:ok)
    end
  end
end
