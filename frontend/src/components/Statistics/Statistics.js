import React from "react"
import { useEffect, useState } from "react"

export default function Statistics() {
  const [animated, setAnimated] = useState(false)

  const stats = [
    { number: "1M", label: "CUSTOMERS", color: "#8B98B4" },
    { number: "12", label: "YEARS OF EXCELLENCE", color: "#E87B96" },
    { number: "41", label: "R&D ENGINEERS", color: "#8B6E5C" },
    { number: "78", label: "COUNTRIES", color: "#E8A44D" },
    { number: "3287", label: "PARTNERS", color: "#E8A44D" },
    { number: "41", label: "AWARDS RECEIVED", color: "#8B6E5C" },
  ]

  useEffect(() => {
    const handleScroll = () => {
      const element = document.getElementById("stats-section")
      if (element) {
        const position = element.getBoundingClientRect()
        if (position.top < window.innerHeight && position.bottom >= 0) {
          setAnimated(true)
        }
      }
    }

    window.addEventListener("scroll", handleScroll)
    handleScroll() // Check on initial load

    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <div className="container py-5" id="stats-section">
      <div className="text-center mb-5">
        <span className="text-warning">WHY REGISTER KARO</span>
        <h2 className="mt-2" style={{ color: "#4A2B2B",  }}>
          Some Numbers are important
        </h2>
      </div>

      <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-4 justify-content-center">
        {stats.map((stat, index) => (
          <div key={index} className="col text-center">
            <div className="p-3">
              <div
                className={`display-4 fw-bold mb-2 ${animated ? "opacity-100" : "opacity-0"}`}
                style={{
                  color: stat.color,
                  transition: "opacity 0.5s ease-in-out",
                  transitionDelay: `${index * 0.1}s`,
                }}
              >
                {stat.number}
                <sup>+</sup>
              </div>
              <div
                className={`text-muted ${animated ? "opacity-100" : "opacity-0"}`}
                style={{
                  transition: "opacity 0.5s ease-in-out",
                  transitionDelay: `${index * 0.1}s`,
                }}
              >
                {stat.label}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

