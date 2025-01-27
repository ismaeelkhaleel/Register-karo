import React from "react"
import coinbaseImage from '../../assest/image/coinbase.png';
import zoomImage from '../../assest/image/zoom.png';
import spotifyImage from '../../assest/image/spotify.png';
import slackImage from '../../assest/image/slack.png';
import dropboxImage from '../../assest/image/dropbox.png';
import webflowImage from '../../assest/image/webflow.png';
export default function PartnerLogos() {
  const partners = [
    {
      name: "Coinbase",
      logo:  coinbaseImage,
      style: { maxWidth: "120px" },
    },
    {
      name: "Spotify",
      logo:  spotifyImage,
      style: { maxWidth: "120px" },
    },
    {
      name: "Slack",
      logo:  slackImage,
      style: { maxWidth: "120px" },
    },
    {
      name: "Dropbox",
      logo: dropboxImage,
      style: { maxWidth: "120px" },
    },
    {
      name: "Webflow",
      logo:  webflowImage,
      style: { maxWidth: "120px" },
    },
    {
      name: "Zoom",
      logo:  zoomImage,
      style: { maxWidth: "120px" },
    },
  ]

  return (
    <div className="container py-5">
      <div className="row justify-content-center align-items-center">
        <div className="col-12">
          <div
            className="d-flex flex-wrap justify-content-center align-items-center gap-4 gap-md-5"
            style={{ margin: "0 -1rem" }}
          >
            {partners.map((partner, index) => (
              <div
                key={index}
                className="p-3 partner-logo"
                style={{cursor:"pointer"}}
              >
                <img
                  src={partner.logo || "/placeholder.svg"}
                  alt={`${partner.name} logo`}
                  style={{
                    ...partner.style,
                    height: "auto",
                  }}
                  className="img-fluid"
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      <style jsx>{`
        .partner-logo:hover {
          opacity: 1;
        }
        .partner-logo:hover img {
          filter: grayscale(0%);
        }
      `}</style>
    </div>
  )
}

