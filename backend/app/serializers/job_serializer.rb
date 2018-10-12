class JobSerializer < ActiveModel::Serializer
  attributes :id, :position, :job_zip, :requirements, :comments, :employer, :job_status, :applicants

end
