FactoryBot.define do
  factory :schedule do
    title { Faker::Lorem.characters(number: Random.new.rand(1..50))}
    location {Faker::Address.city}
    description { Faker::Lorem.paragraph }
    date { Faker::Date.forward(days: 30)}
    user
  end
end
