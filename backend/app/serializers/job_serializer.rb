class JobSerializer < ActiveModel::Serializer
  attributes :id, :company_name, :phone, :position, :position_description, :job_zip, :requirements, :comments, :job_status, :user, :job_profiles

end
