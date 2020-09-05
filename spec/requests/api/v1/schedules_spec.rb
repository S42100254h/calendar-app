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

  describe "POST /api/v1/schedules" do
    subject { post(api_v1_schedules_path, params: params)}

    before do
      allow_any_instance_of(Api::V1::ApiController).to receive(:current_user).and_return(current_user)
    end

    let(:params) {{ schedule: attributes_for(:schedule) }}
    let(:current_user) { create(:user) }

    it "current_userに紐づけられたスケジュールが作成される" do
      expect { subject }.to change { current_user.schedules.count }.by(1)
      expect(response).to have_http_status(:ok)
    end
  end

  describe "PATCH /api/v1/schedules/:id" do
    subject { patch(api_v1_schedule_path(schedule_id), params: params)}

    before do
      allow_any_instance_of(Api::V1::ApiController).to receive(:current_user).and_return(current_user)
    end

    let(:params) {{ schedule: { description: Faker::Lorem.paragraph }}}
    let(:schedule) { create(:schedule, user: current_user) }
    let(:schedule_id) { schedule.id }
    let(:current_user) { create(:user) }

    it "current_userに紐づけられたスケジュールを修正できる" do
      expect { subject }.to change { Schedule.find(schedule.id).description }.from(schedule.description).to(params[:schedule][:description]) &
                            not_change { Schedule.find(schedule.id).title } &
                            not_change { Schedule.find(schedule.id).location } &
                            not_change { Schedule.find(schedule.id).date }
      expect(response).to have_http_status(:ok)
    end
  end

  describe "DELETE /api/v1/scheudles/:id" do
    subject { delete(api_v1_schedule_path(schedule_id))}
    
    before do
      allow_any_instance_of(Api::V1::ApiController).to receive(:current_user).and_return(current_user)
    end

    let!(:schedule) {create(:schedule, user: current_user)}
    let(:schedule_id) { schedule.id }
    let(:current_user) { create(:user)}

    it "current_userに紐づけられたスケジュールを削除できる" do
      expect { subject }.to change { current_user.schedules.count }.by(-1)
      expect(response).to have_http_status(:ok)
    end
  end
end
