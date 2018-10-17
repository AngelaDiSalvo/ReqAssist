class Adapter {

  static async createNewUser(args) {
    const {user_type, email, password} = args

    let result = await fetch('http://localhost:3001/users', {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        user: {
          email,
          password,
          user_type
        }
      })
    })
  }

  static async createNewJobProfile(args) {
    const {user_id, name, phone, home_zip, travel_radius, experience, min_wage_rate} = args
    console.log(args);


    let result = await fetch('http://localhost:3001/job_profiles', {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        job_profile: {
          user_id,
          name,
          phone,
          home_zip,
          travel_radius,
          experience,
          min_wage_rate
        }
      })
    })
  }

  static async createNewJob(args) {
    const {company_name, phone, position, position_description, job_zip, requirements, comments, employer_id} = args

    let result = await fetch('http://localhost:3001/jobs', {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        job: {
          company_name,
          phone,
          position,
          position_description,
          job_zip,
          requirements,
          comments,
          employer_id,
          job_status_id: 1
        }
      })
    })
  }

}

export default Adapter
