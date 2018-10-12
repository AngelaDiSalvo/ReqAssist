# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

100.times do
  Applicant.create(
    name: Faker::FunnyName.two_word_name,
    phone: Faker::Number.number(10),
    email: Faker::Internet.email,
    password: "password",
    home_zip: 77027,
    travel_radius: 10,
    position_type: "construction",
    experience: Faker::Number.between(0,10),
    min_wage_rate: Faker::Number.between(10,50),
    language: "english")
end

100.times do
  Applicant.create(
    name: Faker::FunnyName.two_word_name,
    phone: Faker::Number.number(10),
    email: Faker::Internet.email,
    password: "password",
    home_zip: 77027,
    travel_radius: 15,
    position_type: "construction",
    experience: Faker::Number.between(0,10),
    min_wage_rate: Faker::Number.between(10,50),
    language: "español")
end

5.times do
  Employer.create(
    email: Faker::Internet.email,
    password: "password",
    company_name: Faker::Company.name,
    phone: Faker::Number.number(10))
end

JobStatus.create(status: "open")
JobStatus.create(status: "closed")
JobStatus.create(status: "pending")

Client.create(email: Faker::Internet.email, password: "password")

2.times do
  Job.create(
    position: "construction",
    job_zip: 77027,
    requirements: Faker::RuPaul.queen,
    comments: Faker::Simpsons.quote,
    employer_id: Faker::Number.between(1,5),
    job_status_id: Faker::Number.between(1,3))
end

50.times do
  JobApp.create(
    job_id: Faker::Number.between(1,5),
    applicant_id: Faker::Number.between(1,200))
end





#
