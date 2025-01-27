import React from "react"
import { Lightbulb, MessageCircle } from "lucide-react"
import videoImage from "../../assest/image/video.png";
export default function VideoSection() {
  return (
    <section className="py-5 bg-primary text-white">
      <div className="container">
        <div className="row align-items-center g-5">
          {/* Left Content */}
          <div className="col-lg-6">
            <h2 className="fw-bold mb-4">Our Video Introductions</h2>
            <p className="text-white-50 mb-5">
              Velit purus egestas tellus phasellus. Mattis eget sed faucibus magna vulputate pellentesque a diam
              tincidunt apis dui.
            </p>

            {/* Features */}
            <div className="d-flex flex-column gap-4">
              <div className="d-flex gap-3">
                <div className="bg-warning rounded-circle p-3">
                  <Lightbulb size={46} className="text-white" />
                </div>
                <div>
                  <h3 className="h5 mb-2">Explore ideas together</h3>
                  <p className="text-white-50 mb-0">
                    Engage audience segments and finally create actionable insights. Amplify vertical integration.
                  </p>
                </div>
              </div>

              <div className="d-flex gap-3">
                <div className="bg-warning rounded-circle p-3">
                  <MessageCircle size={46} className="text-white" />
                </div>
                <div>
                  <h3 className="h5 mb-2">Bring those ideas to life</h3>
                  <p className="text-white-50 mb-0">
                    Engage audience segments and finally create actionable insights. Amplify vertical integration.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Video */}
          <div className="col-lg-6">
            <div className="position-relative rounded-4 overflow-hidden">
              <img
                src={videoImage}
                alt="Video Thumbnail"
                width={800}
                height={600}
                className="img-fluid"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

