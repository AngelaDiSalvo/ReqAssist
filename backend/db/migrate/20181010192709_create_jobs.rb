class CreateJobs < ActiveRecord::Migration[5.2]
  def change
    create_table :jobs do |t|
      t.string :company_name
      t.string :phone
      t.string :position
      t.string :position_description
      t.integer :job_zip
      t.text :requirements
      t.text :comments
      t.integer :employer_id, index: true, foreign_key: true
      t.belongs_to :job_status, foreign_key: true

      t.timestamps
    end
  end
end
