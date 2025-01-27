import React from "react"
import { ArrowRight } from "lucide-react"
import aboutImage from "../../assest/image/about.png";
export default function About() {
  return (
    <section className="py-5 position-relative overflow-hidden">
      {/* Background decoration */}
      <div className="position-absolute end-0 top-50 translate-middle-y">
        <div className="bg-warning opacity-10 rounded-circle" style={{ width: "400px", height: "400px" }}></div>
      </div>

      <div className="container position-relative">
        <div className="row align-items-center g-5">
          {/* Left Content */}
          <div className="col-lg-6">
            <div className="pe-lg-5">
              <p className="text-warning mb-2">WELCOME TO REGISTERKARO.IN</p>

              <h2 className="display-5 fw-bold mb-4">
                About <span className="text-warning">Register Karo</span>
              </h2>

              <div className="mb-4">
                <p className="text-muted mb-4">
                  We have been using Intelegencia as our DevOps vendor for our field service applications over the last
                  couple of years and I'm extremely pleased with their performance, ability to execute, and willingness
                  to adapt in our ever changing environment. Perry is an outstanding leader who is fanatical about
                  customer satisfaction. He has built a solid team which has consistently delivered on projects thereby
                  exceeding everyone's expectations.
                </p>

                <p className="text-muted mb-4">
                  I would strongly recommend their services to any organization that is looking for solid, reliable, and
                  predictable outcomes.
                </p>
              </div>

              <button className="btn btn-primary d-inline-flex align-items-center gap-2">
                Learn More
                <ArrowRight size={20} />
              </button>
            </div>
          </div>

          {/* Right Image */}
          <div className="col-lg-6">
            <div className="position-relative">
              {/* Orange border decoration */}
              <div className="position-absolute end-0 bottom-0 translate-middle-x translate-middle-y">
                <div
                  className="border border-warning border-5 rounded"
                  style={{ width: "100%", height: "100%", transform: "rotate(-5deg)" }}
                ></div>
              </div>

              {/* Main image */}
              <div className="position-relative rounded overflow-hidden shadow-lg">
                <img
                  src={aboutImage}
                  alt="RegisterKaro Team"
                  width={800}
                  height={600}
                  className="img-fluid rounded"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

