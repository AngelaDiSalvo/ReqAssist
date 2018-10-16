class CreateJobProfiles < ActiveRecord::Migration[5.2]
  def change
    create_table :job_profiles do |t|
      t.string :name
      t.string :phone
      t.integer :home_zip
      t.integer :travel_radius
      t.string :position_type
      t.float :experience
      t.integer :min_wage_rate
      t.string :language
      t.belongs_to :user, foreign_key: true

      t.timestamps
    end
  end
end
