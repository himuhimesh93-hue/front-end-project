import axios from "axios"
import { useState } from "react"
import { useNavigate } from "react-router-dom"

function Login() {
  const [data, setdata] = useState({
    email: "",
    password: ""
  })
  const [loading, setloading] = useState(false)
  const [error, seterror] = useState("")

  const navigate = useNavigate()

  const changeName = (e) => {
    setdata({ ...data, [e.target.name]: e.target.value })
    seterror("")
  }

  const submit = async () => {
    try {
      setloading(true)
      seterror("")
      const apiUrl = process.env.REACT_APP_API_URL || "https://cabsystemsms-1.onrender.com"
      const res = await axios.post(`${apiUrl}/login`, data)
      
      // Store token in localStorage
      localStorage.setItem("authToken", res.data.token || res.data)
      localStorage.setItem("userEmail", data.email)
      
      alert("Login successful!")
      navigate("/")
    } catch (xyz) {
      const errorMsg = xyz.response?.data || "Login failed. Please try again."
      seterror(errorMsg)
      alert(errorMsg)
    } finally {
      setloading(false)
    }
  }

  return (
    <>
      <h1>Login</h1>
      {error && <p style={{ color: "red" }}>{error}</p>}
      <input 
        onChange={changeName} 
        name="email" 
        placeholder="enter email" 
        type="email"
        disabled={loading}
      />
      <input 
        onChange={changeName} 
        name="password" 
        type="password" 
        placeholder="enter password"
        disabled={loading}
      />
      <button onClick={submit} disabled={loading}>
        {loading ? "Logging in..." : "Login"}
      </button>
      <p>Don't have an account? <a href="/reg">Register here</a></p>
    </>
  )
}

export default Login
