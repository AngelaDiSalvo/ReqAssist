class CreateEmployers < ActiveRecord::Migration[5.2]
  def change
    create_table :employers do |t|
      t.string :email
      t.string :password_digest
      t.string :company_name
      t.string :phone

      t.timestamps
    end
  end
end
