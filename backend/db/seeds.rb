# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

200.times do
  User.create(
    email: Faker::Internet.email,
    password: "asdf",
    user_type: "applicant")
end

200.times do |n|
  JobProfile.create(
    name: Faker::FunnyName.two_word_name,
    phone: Faker::PhoneNumber.cell_phone,
    home_zip:  [77008,77007,77010,77009,77012,77011,77014,77013,77016,77015,77018,77017,77020,77019,77022,77021,77024,77023,77083,77086,77085,77088,77087,77090,77089,77268,77271,77284,77289,77336,77339,77338,77345,77346,77357,77373,77375,77547,77562,77571,77586,77587].sample,
    travel_radius: [10, 25, 50].sample,
    position_type: ['construction','electrician','HVAC','tiling','roofing','plumbing','manufacturing','sanitation','custodial','mining','warehousing','commercial fishing','oil field work','waste disposal','mechanic','maintenance','recycling'].sample(3),
    experience: Faker::Number.between(0,15),
    min_wage_rate: Faker::Number.between(10,50),
    language: "english",
    user_id: n )
end

5.times do
  User.create(
    email: Faker::Internet.email,
    password: "asdf",
    user_type: "employer")
end

JobStatus.create(status: "open")
JobStatus.create(status: "closed")
JobStatus.create(status: "pending")

20.times do
  Job.create(
    company_name: Faker::Company.name,
    phone: Faker::PhoneNumber.cell_phone,
    position: ['construction','electrician','HVAC','tiling','roofing','plumbing','manufacturing','sanitation','custodial','mining','warehousing','commercial fishing','oil field work','waste disposal','mechanic','maintenance','recycling'].sample,
    position_description: Faker::Simpsons.quote,
    job_zip: [77008,77007,77010,77009,77012,77011,77014,77013,77016,77015,77018,77017,77020,77019,77022,77021,77024,77023,77083,77086,77085,77088,77087,77090,77089,77268,77271,77284,77289,77336,77339,77338,77345,77346,77357,77373,77375,77547,77562,77571,77586,77587].sample,
    requirements: Faker::RuPaul.quote,
    comments: Faker::Movie.quote,
    employer_id: Faker::Number.between(201,205),
    job_status_id: 1)
end

300.times do
  JobApp.create(
    job_profile_id: Faker::Number.between(1,200),
    job_id: Faker::Number.between(1,20))
end

User.create(
  email: 'angela@example.com',
  password: "asdf",
  user_type: "client"
)




#
