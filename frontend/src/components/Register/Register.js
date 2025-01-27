import React from "react"
import { FileText, Wallet, UserCog, Mail } from "lucide-react"

export default function ProcessSteps() {
  const steps = [
    {
      icon: FileText,
      title: "Fill up Application Form",
      bgColor: "bg-danger",
    },
    {
      icon: Wallet,
      title: "Make Online Payment",
      bgColor: "bg-success",
    },
    {
      icon: UserCog,
      title: "Executive will Process Application",
      bgColor: "bg-warning",
    },
    {
      icon: Mail,
      title: "Get Confirm Mail",
      bgColor: "bg-secondary",
    },
  ]

  return (
    <section className="py-4 bg-warning bg-opacity-75">
      <div className="container">
        <div className="row g-4 position-relative">
          {/* Connection Lines */}
          <div className="position-absolute top-50 start-0 end-0 d-none d-md-block">
            <div className="border-top border-2 border-white opacity-50" style={{ marginTop: "40px" }}></div>
          </div>

          {/* Steps */}
          {steps.map((step, index) => (
            <div key={index} className="col-12 col-md-6 col-lg-3">
              <div className="d-flex align-items-center gap-3 justify-content-center justify-content-md-start">
                <div
                  className={`rounded-circle ${step.bgColor} p-3 position-relative`}
                  style={{ width: "56px", height: "56px" }}
                >
                  <step.icon className="text-white position-absolute top-50 start-50 translate-middle" size={24} />
                </div>
                <h3 className="h6 mb-0 fw-semibold text-dark">{step.title}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

