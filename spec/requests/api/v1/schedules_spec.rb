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

  describe "GET /api/v1/schedules/:id" do
    subject { get(api_v1_schedule_path(schedule_id))}

    context "指定したidのスケジュールが存在する場合" do
      let(:schedule) { create(:schedule, id: 1)}
      let(:schedule_id) { schedule.id }

      it "スケジュールを取得できる" do
        subject
        res = JSON.parse(response.body)
        expect(res["id"]).to eq 1
        expect(res["title"]).to eq schedule.title
        expect(res["location"]).to eq schedule.location
        expect(res["description"]).to eq schedule.description
        expect(res["date"]).to eq schedule.date.strftime("%Y-%m-%d")
        expect(response).to have_http_status(:ok)
      end
    end

    context "指定したidのスケジュールが存在しない場合" do
      let(:schedule_id) { 99999 }

      it "スケジュールを取得できない" do
        expect { subject }.to raise_error ActiveRecord::RecordNotFound
      end
    end
  end
end
