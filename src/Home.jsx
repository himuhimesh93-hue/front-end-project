import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"

function Home() {
  const [userEmail, setuserEmail] = useState("")
  const navigate = useNavigate()

  useEffect(() => {
    const email = localStorage.getItem("userEmail")
    if (email) {
      setuserEmail(email)
    }
  }, [])

  const handleLogout = () => {
    localStorage.removeItem("authToken")
    localStorage.removeItem("userEmail")
    setuserEmail("")
    alert("Logged out successfully")
  }

  return (
    <>
      <h1>Welcome to Cab System SMS</h1>
      <p>Book your ride with ease</p>
      
      {userEmail ? (
        <>
          <p>Logged in as: <strong>{userEmail}</strong></p>
          <button onClick={handleLogout}>Logout</button>
        </>
      ) : (
        <>
          <button onClick={() => navigate("/login")}>Login</button>
          <button onClick={() => navigate("/reg")}>Register</button>
        </>
      )}
    </>
  )
}

export default Home
