require "rails_helper"

RSpec.describe Schedule, type: :model do
  describe "正常系テスト" do
    context "title, dateが入力されている" do
      before { create(:user) }

      let(:schedule) { build(:schedule) }
      it "スケジュールが作られる" do
        schedule.valid?
        expect(schedule.valid?).to eq true
      end
    end
  end

  describe "異常系テスト" do
    describe "titleについて" do
      context "titleが入力されていない" do
        let(:schedule) { build(:schedule, title: nil) }
        it "エラーする" do
          schedule.valid?
          expect(schedule.errors.messages[:title]).to include "can't be blank"
        end
      end

      context "titleが51文字以上" do
        let(:schedule) { build(:schedule, title: "a" * 51) }
        it "エラーする" do
          schedule.valid?
          expect(schedule.errors.messages[:title]).to include "is too long (maximum is 50 characters)"
        end
      end
    end

    describe "dateについて" do
      context "dateが入力されていない" do
        let(:schedule) { build(:schedule, date: nil) }
        it "エラーする" do
          schedule.valid?
          expect(schedule.errors.messages[:date]).to include "can't be blank"
        end
      end
    end

    describe "locationについて" do
      context "locationが51文字以上" do
        let(:schedule) { build(:schedule, location: "a" * 51) }
        it "エラーする" do
          schedule.valid?
          expect(schedule.errors.messages[:location]).to include "is too long (maximum is 50 characters)"
        end
      end
    end

    describe "descriptionについて" do
      context "description401が文字以上" do
        let(:schedule) { build(:schedule, description: "a" * 401) }
        it "エラーする" do
          schedule.valid?
          expect(schedule.errors.messages[:description]).to include "is too long (maximum is 400 characters)"
        end
      end
    end
  end
end
