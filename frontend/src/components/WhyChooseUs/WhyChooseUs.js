import React from "react"
import { Shield, Check, SmilePlus, UserCog } from "lucide-react"

export default function WhyChoose() {
  const features = [
    {
      icon: Shield,
      title: "Confidential & Safe",
      description: "All your private information is safe with us",
      bgColor: "bg-danger bg-opacity-10",
    },
    {
      icon: Check,
      title: "No Hidden Fee",
      description: "Everything is put before you with no hidden charges or conditions",
      bgColor: "bg-success bg-opacity-10",
    },
    {
      icon: SmilePlus,
      title: "Guaranteed Satisfaction",
      description: "We ensure that you stay 100% satisfied with our offered services",
      bgColor: "bg-primary bg-opacity-10",
    },
    {
      icon: UserCog,
      title: "Expert CA/CS Assistance",
      description: "Prompt support from our in-house expert professionals",
      bgColor: "bg-danger bg-opacity-10",
    },
    {
      icon: Shield,
      title: "Confidential & Safe",
      description: "All your private information is safe with us",
      bgColor: "bg-success bg-opacity-10",
    },
  ]

  return (
    <section className="py-5">
      <div className="container">
        {/* Header */}
        <div className="mb-5">
          <p className="text-warning mb-2">WHY REGISTERKARO.IN</p>
          <h2 className="fw-bold mb-4">Why Choose Register Karo</h2>
          <p className="text-muted">
            It is with consistent services and results that build trust with the people and that in turn help us to
            serve the business better.
          </p>
        </div>

        {/* Features Grid */}
        <div className="row g-4">
          {features.map((feature, index) => (
            <div key={index} className="col-md-6 col-lg-4">
              <div className={`card border-0 h-100 ${feature.bgColor}`}>
                <div className="card-body p-4">
                  <div
                    className="d-inline-flex p-3 rounded-circle mb-3"
                    style={{ backgroundColor: "rgba(255,255,255,0.5)" }}
                  >
                    <feature.icon size={24} />
                  </div>
                  <h3 className="h5 mb-3">{feature.title}</h3>
                  <p className="text-muted mb-0">{feature.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

