class CreateJobs < ActiveRecord::Migration[5.2]
  def change
    create_table :jobs do |t|
      t.string :position
      t.integer :job_zip
      t.text :requirements
      t.text :comments
      t.belongs_to :employer, foreign_key: true
      t.belongs_to :job_status, foreign_key: true

      t.timestamps
    end
  end
end
