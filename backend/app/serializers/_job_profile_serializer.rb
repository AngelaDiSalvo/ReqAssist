class JobProfileSerializer < ActiveModel::Serializer
  attributes :id, :language, :phone, :position_type, :travel_radius, :experience,  :user, :created_at, :updated_at

end
