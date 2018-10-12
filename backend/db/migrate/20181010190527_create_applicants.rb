class CreateApplicants < ActiveRecord::Migration[5.2]
  def change
    create_table :applicants do |t|
      t.string :name
      t.string :phone
      t.string :email
      t.string :password_digest
      t.integer :home_zip
      t.integer :travel_radius
      t.string :position_type
      t.float :experience
      t.integer :min_wage_rate
      t.string :language

      t.timestamps
    end
  end
end
