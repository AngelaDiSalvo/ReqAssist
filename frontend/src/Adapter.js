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

}

export default Adapter
