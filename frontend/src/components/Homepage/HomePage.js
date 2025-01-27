import React from "react"
import { Star } from "lucide-react"
import GroupImage from "../../assest/image/Group 3.png"

export default function Hero() {
  return (
    <div className="bg-light py-5">
      <div className="container">
        {/* Google Rating */}
        <div className="d-flex align-items-center gap-2 mb-4">
          <Star className="text-warning" fill="currentColor" />
          <span className="fw-bold">Google Rating</span>
          {[...Array(5)].map((_, i) => (
            <Star key={i} className="text-warning" fill="currentColor" size={16} />
          ))}
        </div>

        <div className="row align-items-center">
          {/* Left Content */}
          <div className="col-lg-6">
            <h1 className="title mb-4">
              Your trusted partner
              <br />
              for compliance business needs
            </h1>

            <p className="lead text-muted mb-4">
              An online business compliance platform that helps entrepreneurs and other individuals with various,{" "}
              <span className="fw-medium">registrations, tax filings</span>, and other{" "}
              <span className="fw-medium">legal matters</span>.
            </p>

            {/* Statistics */}
            <div className="row g-4 mb-5 mt-4">
              <div className="col-sm-4">
                <div className="d-flex align-items-center gap-2">
                  <div className="p-2 bg-white rounded shadow-sm">
                    <i className="bi bi-star-fill text-warning"></i>
                  </div>
                  <div>
                    <h3 className="fw-bold mb-0">4.5+</h3>
                    <p className="small text-muted mb-0">Customer Rating</p>
                  </div>
                </div>
              </div>
              <div className="col-sm-4">
                <div className="d-flex align-items-center gap-2">
                  <div className="p-2 bg-white rounded shadow-sm">
                    <i className="bi bi-people-fill text-primary"></i>
                  </div>
                  <div>
                    <h3 className="fw-bold mb-0">20,000+</h3>
                    <p className="small text-muted mb-0">Clients</p>
                  </div>
                </div>
              </div>
              <div className="col-sm-4">
                <div className="d-flex align-items-center gap-2">
                  <div className="p-2 bg-white rounded shadow-sm">
                    <i className="bi bi-graph-up-arrow text-success"></i>
                  </div>
                  <div>
                    <h3 className="fw-bold mb-0">99.8%</h3>
                    <p className="small text-muted mb-0">Financial Stability</p>
                  </div>
                </div>
              </div>
            </div>

            {/* CTAs */}
            <div className="d-flex gap-3 flex-wrap">
              <button className="btn btn-primary px-4 py-2">Talk An Expert</button>
              <button className="btn btn-outline-primary px-4 py-2">
                <i className="bi bi-play-circle me-2"></i>
                See how it works
              </button>
            </div>
          </div>

          {/* Right Content */}
          <div className="col-lg-6 mt-5 mt-lg-0 position-relative">
            <img
              src={GroupImage}
              alt="Business Compliance Illustration"
              width={600}
              height={500}
              className="img-fluid"
            />

            {/* Floating Cards */}
            <div className="position-absolute top-0 end-0 d-none d-lg-block">
              <div className="d-flex flex-column gap-3">
                {["Annual Compliance", "Payroll Services", "Company Formation","Annual Compliance"].map((service) => (
                  <div key={service} className="card shadow-sm">
                    <div className="card-body py-2 px-3">
                      <small className="fw-medium">{service}</small>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      <style>{`
      .title {
      font-size:2.4rem;
       font-weight:600;
      }
       .lead {
       font-size:1.4rem;
       font-weight:400;
       }
      
      `}</style>
    </div>
  )
}

