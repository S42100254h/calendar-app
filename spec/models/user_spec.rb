require "rails_helper"

RSpec.describe User, type: :model do
  describe "正常系テスト" do
    context "name, email, passwordが入力されている" do
      let(:user) { build(:user) }
      it "ユーザーが作られる" do
        expect(user.valid?).to eq true
      end
    end
  end

  describe "異常系テスト" do
    describe "nameにつにて" do
      context "nameが入力されていない" do
        let(:user) { build(:user, name: nil) }
        it "エラーする" do
          user.valid?
          expect(user.errors.messages[:name]).to include "can't be blank"
        end
      end

      context "nameが51文字以上" do
        let(:user) { build(:user, name: "a" * 51) }
        it "エラーする" do
          user.valid?
          expect(user.errors.messages[:name]).to include "is too long (maximum is 50 characters)"
        end
      end
    end

    describe "emailについて" do
      context "emailが入力されていない" do
        let(:user) { build(:user, email: nil) }
        it "エラーする" do
          user.valid?
          expect(user.errors.messages[:email]).to include "can't be blank"
        end
      end

      context "同名のemailが存在する" do
        before { create(:user, email: "neko@example.com") }

        let(:user) { build(:user, email: "neko@example.com") }
        it "エラーする" do
          user.valid?
          expect(user.errors.messages[:email]).to include "has already been taken"
        end
      end
    end

    describe "passwordについて" do
      context "passwordが入力されていない" do
        let(:user) { build(:user, password: nil) }
        it "エラーする" do
          user.valid?
          expect(user.errors.messages[:password]).to include "can't be blank"
        end
      end

      context "passwordが6字未満" do
        let(:user) { build(:user, password: "a" * 5) }
        it "エラーする" do
          user.valid?
          expect(user.errors.messages[:password]).to include "is too short (minimum is 6 characters)"
        end
      end

      context "passwordが129文字以上" do
        let(:user) { build(:user, password: "a" * 129) }
        it "エラーする" do
          user.valid?
          expect(user.errors.messages[:password]).to include "is too long (maximum is 128 characters)"
        end
      end
    end
  end
end
