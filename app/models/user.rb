# frozen_string_literal: true

class User < ApplicationRecord
  extend Devise::Models
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable, :trackable and :omniauthable
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :validatable
  include DeviseTokenAuth::Concerns::User
  has_many :schedules, dependent: :destroy
  validates :name, presence: true, length: { maximum: 50 }
  # devise_token_authにより、emailの形式とpasswordの長さは下記のように設定されている。
  # email_regexp = /\A[^@\s]+@[^@\s]+\z/
  # password_length = 6..128
end
