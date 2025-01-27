import React from "react"
import { Building2, BarChart3, Users, Package2, ShoppingCart, Speaker } from "lucide-react"

export default function Services() {
  const services = [
    {
      icon: Building2,
      title: "Company Formation",
      description: "Build web-based solutions that enhance customer experience.",
      link: "#",
    },
    {
      icon: BarChart3,
      title: "Company Secretarial Services",
      description: "Make data-driven decisions and utilize technology to reach business goals.",
      link: "#",
    },
    {
      icon: Users,
      title: "Virtual Office Address",
      description: "Foster customer relationships by effectively serving your market.",
      link: "#",
    },
    {
      icon: Package2,
      title: "Annual Compliance Services",
      description: "Turn your ideas into modern products with our design experts.",
      link: "#",
    },
    {
      icon: ShoppingCart,
      title: "Payroll Services",
      description: "Expand your business across the globe with minimal effort.",
      link: "#",
    },
    {
      icon: Speaker,
      title: "Bookkeeping Services",
      description: "Steering user behaviours with creative design, data insights & technology.",
      link: "#",
    },
  ]

  return (
    <section className="py-5">
      <div className="container">
        <div className="text-center mb-5">
          <p className="text-warning mb-2">WELCOME TO REGISTERKARO.IN</p>
          <h2 className="fw-bold">Explore Our Services</h2>
        </div>

        <div className="row g-4" style={{textAlign:"center"}}>
          {services.map((service, index) => (
            <div key={index} className="col-12 col-md-6 col-lg-4">
              <div className="card h-100 border-0 p-4">
                <div className="text-warning mb-4">
                  <service.icon size={48} strokeWidth={1.5} />
                </div>
                <h3 className="h4 mb-3">{service.title}</h3>
                <p className="text-muted mb-4">{service.description}</p>
                <div className="mt-auto">
                  <a href={service.link} className="btn btn-link text-dark text-decoration-none p-0">
                    Learn more →
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-5">
          <button className="btn btn-primary px-4 py-2">See All Services</button>
        </div>
      </div>
    </section>
  )
}

