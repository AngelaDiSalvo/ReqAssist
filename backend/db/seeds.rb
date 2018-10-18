# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

100.times do
  User.create(
    email: Faker::Internet.email,
    password: "password",
    user_type: "applicant")
end

100.times do |n|
  JobProfile.create(
    name: Faker::FunnyName.two_word_name,
    phone: Faker::Number.number(10),
    home_zip: 77027,
    travel_radius: 15,
    position_type: ["construction", "plumbing"],
    experience: Faker::Number.between(0,10),
    min_wage_rate: Faker::Number.between(10,50),
    language: "español",
    user_id: n )
end

10.times do
  User.create(
    email: Faker::Internet.email,
    password: "password",
    user_type: "employer")
end

JobStatus.create(status: "open")
JobStatus.create(status: "closed")
JobStatus.create(status: "pending")

10.times do
  Job.create(
    company_name: Faker::Company.name,
    phone: Faker::Number.number(10),
    position: "construction",
    position_description: Faker::Simpsons.quote,
    job_zip: 77027,
    requirements: Faker::RuPaul.queen,
    comments: Faker::Simpsons.quote,
    employer_id: Faker::Number.between(101,110),
    job_status_id: 1)
end

50.times do
  JobApp.create(
    job_profile_id: Faker::Number.between(1,100),
    job_id: Faker::Number.between(1,10))
end

User.create(
  email: 'angela@example.com',
  password: "asdf",
  user_type: "client"
)




#
