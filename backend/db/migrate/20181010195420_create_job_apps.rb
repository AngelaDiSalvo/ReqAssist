class CreateJobApps < ActiveRecord::Migration[5.2]
  def change
    create_table :job_apps do |t|
      t.belongs_to :job_profile, foreign_key: true
      t.belongs_to :job, foreign_key: true

      t.timestamps
    end
  end
end
