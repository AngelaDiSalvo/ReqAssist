class Adapter {

  static async createNewUser(args) {
    const {user_type, email, password} = args

    let result = await fetch('http://localhost:3001/users', {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
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

  static async createNewJobApp(user, job_id) {
    const job_profile_id = user.user.job_profiles[0].id

    let result = await fetch('http://localhost:3001/job_apps', {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        job_app: {
          job_profile_id: job_profile_id,
          job_id: job_id
        }
      })
    })
    return result
  }

  static async destroyJobApp(args) {
    const id = args[0]
    const job_profile_id = args[1]

    const url = `http://localhost:3001/jobs/${id}/remove`
    let result = await fetch(url, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        job: {
          job_profile_id
        }
      })
    })
    return result
  }

  static async createNewJobProfile(args) {
    const {user_id, name, phone, home_zip, travel_radius, experience, min_wage_rate} = args

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


  static async clientEditJobProfile(args) {
    const {id, score} = args

    const url = `http://localhost:3001/job_profiles/${id}`
    let result = await fetch(url, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        job_profile: {
          score
        }
      })
    })
  }

}

export default Adapter
