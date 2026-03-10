import axios from "axios"
import { useState } from "react"

function Reg() {
  const [data, setdata] = useState({
    username: "",
    email: "",
    password: ""
  })

  const changeName = (e) => {
    setdata({ ...data, [e.target.name]: e.target.value })
  }

  const submit = async () => {
    try {
      const apiUrl = process.env.REACT_APP_API_URL || "https://cabsystemsms-1.onrender.com"
      const res = await axios.post(`${apiUrl}/register`, data)
      alert(res.data)
    } catch (xyz) {
      alert(xyz.response?.data || "Error occurred")
    }
  }

  return (
    <>
      <h1>Register</h1>
      <input onChange={changeName} name="username" placeholder="enter username" />
      <input onChange={changeName} name="email" placeholder="enter email" />
      <input onChange={changeName} name="password" type="password" placeholder="enter password" />
      <button onClick={submit}>Register</button>
    </>
  )
}

export default Reg
