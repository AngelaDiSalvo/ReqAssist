class ApplicantSerializer < ActiveModel::Serializer
  attributes :id, :name, :phone, :email, :home_zip, :travel_radius, :position_type, :experience, :min_wage_rate, :language, :jobs

end
