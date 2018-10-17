class JobSerializer < ActiveModel::Serializer
  attributes :id, :company_name, :phone, :position, :position_description, :job_zip, :requirements, :comments, :job_profiles, :job_status, :user, :created_at, :updated_at

end
