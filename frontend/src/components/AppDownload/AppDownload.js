import React from "react";
import { Apple, PlayCircle } from "lucide-react";
import PhoneImage from "../../assest/image/Phone.png";

export default function AppDownload() {
  return (
    <div
      className="container-fluid py-3 position-relative"
      style={{
        backgroundColor: "#1B4B79",
      }}
    >
      <div className="container">
        <div className="row align-items-center">
          {/* Left Content Section */}
          <div className="col-lg-6 text-white mb-5 mb-lg-0">
            <h1 className="display-6 fw-bold mb-4">
              Manage Your Services by your Mobile Phone
            </h1>
            <p className="lead mb-5">
              Download our app to manage and track your services. Our app
              enables you to stay in touch with our experts and aids you in
              tracking your progress.
            </p>
            <h4>Get the App</h4>
            <div className="d-flex flex-wrap gap-3 mt-4">
              <a href="#" className="text-decoration-none">
                <div className="bg-white rounded-3 px-4 py-2 d-flex align-items-center">
                  <Apple className="text-dark me-2" size={24} />
                  <div>
                    <div className="text-dark" style={{ fontSize: "12px" }}>
                      Get it on
                    </div>
                    <div className="text-dark fw-bold">App Store</div>
                  </div>
                </div>
              </a>

              <a href="#" className="text-decoration-none">
                <div className="bg-white rounded-3 px-4 py-2 d-flex align-items-center">
                  <PlayCircle className="text-dark me-2" size={24} />
                  <div>
                    <div className="text-dark" style={{ fontSize: "12px" }}>
                      Get it on
                    </div>
                    <div className="text-dark fw-bold">Google Play</div>
                  </div>
                </div>
              </a>
            </div>
          </div>

          {/* Right Mobile Mockups Section */}
          <div
            className="col-lg-6 position-relative"
            style={{
              height: "600px",
            }}
          >
            {/* First Phone Mockup */}
            <div
              className="position-absolute"
              style={{
                left: "5%",
                bottom: "0",
                width: "280px",
                zIndex: 1,
              }}
            >
              <img
                src={PhoneImage}
                alt="RegisterKaro Mobile App"
                className="img-fluid"
              />
            </div>

            {/* Second Phone Mockup - Bigger and Positioned Over the First */}
            <div
              className="position-absolute"
              style={{
                right: "0%",
                bottom: "-10%", // Slight overlap with the section bottom
                width: "336px", // 1.2x of 280px
                zIndex: 2, // Higher z-index to place it over the first phone
              }}
            >
              <img
                src={PhoneImage}
                alt="RegisterKaro Mobile App Features"
                className="img-fluid position-relative"
                style={{
                  transform: "scale(1.2)", // Make the image bigger
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
