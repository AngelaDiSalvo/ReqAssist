class EmployerSerializer < ActiveModel::Serializer
  attributes :id, :email, :company_name, :phone, :jobs

end
