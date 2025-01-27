import React from "react"
import { ArrowUp } from "lucide-react"

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  const footerLinks = {
    "START A BUSINESS": {
      links: ["Features", "Solutions", "Integrations", "Enterprise", "Solutions"],
    },
    "GOVERNMENT REGISTRATION": {
      links: ["Partners", "Community", "Developers", "App", "Blog"],
    },
    "COMPLIANCE & TAX": {
      links: ["Channels", "Scale", "Watch the Demo", "Our Competition"],
    },
    "BIS & CDSCO": {
      links: ["About Us", "News", "Leadership", "Media Kit"],
    },
  }

  return (
    <footer className="text-white py-5" style={{ backgroundColor: "#003366" }}>
      <div className="container">
        <div className="row gy-4">
          <div className="col-12 col-lg-3 mb-4 mb-lg-0">
            <p className="mb-4">Design outstanding interfaces with advanced Figma features in a matter of minutes.</p>
            <div className="d-flex gap-3">
              <a href="#" className="text-white">
                <i className="bi bi-facebook fs-5"></i>
              </a>
              <a href="#" className="text-white">
                <i className="bi bi-google fs-5"></i>
              </a>
              <a href="#" className="text-white">
                <i className="bi bi-apple fs-5"></i>
              </a>
              <a href="#" className="text-white">
                <i className="bi bi-instagram fs-5"></i>
              </a>
            </div>
          </div>

          {/* Navigation Columns */}
          {Object.entries(footerLinks).map(([title, { links }]) => (
            <div key={title} className="col-6 col-md-3 col-lg-2">
              <h6 className="text-warning mb-3" style={{ fontSize: "1rem" }}>
                {title}
              </h6>
              <ul className="list-unstyled">
                {links.map((link) => (
                  <li key={link} className="mb-2">
                    <a
                      href="#"
                      className="text-white-50 text-decoration-none hover-white"
                      style={{ transition: "color 0.3s ease" }}
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Scroll to Top Button */}
        <div className="text-center position-relative my-4">
          <button
            onClick={scrollToTop}
            className="btn btn-warning rounded-circle p-2"
            style={{ width: "40px", height: "40px" }}
            aria-label="Scroll to top"
          >
            <ArrowUp size={20} />
          </button>
        </div>

        {/* Copyright */}
        <div className="text-center text-white-50 mt-4">© 2024 Registerkaro. All Rights Reserved.</div>
      </div>

      <style jsx>{`
        .hover-white:hover {
          color: white !important;
        }
      `}</style>
    </footer>
  )
}
