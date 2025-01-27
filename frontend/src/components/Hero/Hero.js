import React, { useState } from "react"
import { Check } from "lucide-react"

export default function Hero() {
  const [email, setEmail] = useState("")

  const handleSubmit = (e) => {
    e.preventDefault()
    // Handle email submission here
    console.log("Email submitted:", email)
    setEmail("")
  }

  const features = ["Instant results", "User-friendly interface", "Personalized customization"]

  return (
    <div
      className="d-flex align-items-center py-5"
      style={{
        background: "linear-gradient(120deg, #ff9933 0%, #1B4B79 100%)",
        padding: "0",
      }}
    >
      <div className="container">
        <div className="row justify-content-center text-center" style={{ marginTop: 0, marginBottom: 0 }}>
          <div className="col-12 col-md-10 col-lg-8">
            <div className="mb-4 mt-5">
              <span
                className="text-white text-uppercase fw-semibold"
                style={{ letterSpacing: "1px", fontSize: "0.9rem" }}
              >
                1% OF THE INDUSTRY
              </span>
            </div>

            <h2 className="fw-bold text-white mb-4">Welcome to your new digital reality. Now.</h2>

            <form onSubmit={handleSubmit} className="mb-5">
              <div className="input-group">
                <input
                  type="email"
                  className="form-control form-control-lg py-3 px-4"
                  placeholder="Enter Your Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  style={{ borderRadius: "8px 0 0 8px" }}
                />
                <button
                  className="btn btn-warning btn-lg px-4"
                  type="submit"
                  style={{
                    borderRadius: "0 8px 8px 0",
                    backgroundColor: "#ff9933",
                    borderColor: "#ff9933",
                  }}
                >
                  Submit
                </button>
              </div>
            </form>

            <div className="d-flex flex-wrap justify-content-center gap-4 mb-5">
              {features.map((feature, index) => (
                <div key={index} className="d-flex align-items-center text-white">
                  <div
                    className="d-flex align-items-center justify-content-center rounded-circle bg-white bg-opacity-25 me-2"
                    style={{ width: "24px", height: "24px" }}
                  >
                    <Check className="text-white" size={14} />
                  </div>
                  <span>{feature}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
