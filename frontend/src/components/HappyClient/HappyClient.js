import React from "react"
import { ArrowRight } from "lucide-react"
import dropboxImage from "../../assest/icon/dropbox.png";
import pinterestImage from "../../assest/icon/pinterest.png";
import ShopifyImage from "../../assest/icon/shopify.png";
import MicrosoftImage from "../../assest/icon/microsoft.png";
import GitLabImage from "../../assest/icon/gitlab.png";
import TrelloImage from "../../assest/icon/trello.png";
import AsanaImage from "../../assest/icon/asana.png";
import AirTableImage from "../../assest/icon/airtable.png";
import FreshbookImage from "../../assest/icon/freshbook.png";
import MangoImage from "../../assest/icon/mango.png";
import SketchImage from "../../assest/icon/sketch.png";
import TwilioImage from "../../assest/icon/twilio.png";
import UdemyImage from "../../assest/icon/udemy.png";
import SkyscannerImage from "../../assest/icon/skyscanner.png";
import HerokuImage from "../../assest/icon/heroku.png";
import MailchimpImage from "../../assest/icon/mailchimp.png";

export default function HappyClients() {
  const clients = [
    {
      name: "Dropbox",
      logo:   dropboxImage,
    },
    {
      name: "Pinterest",
      logo:  pinterestImage,
    },
    {
      name: "Shopify",
      logo:  ShopifyImage,
    },
    {
      name: "Microsoft",
      logo:  MicrosoftImage,
    },
    {
      name: "GitLab",
      logo:  GitLabImage,
    },
    {
      name: "Trello",
      logo:  TrelloImage,
    },
    {
      name: "Air Table",
      logo:  AirTableImage,
    },
    {
      name: "Freshbook",
      logo:  FreshbookImage,
    },
    {
      name: "Mango",
      logo:  MangoImage,
    },
    {
      name: "Twilio",
      logo:  TwilioImage,
    },
    {
      name: "Sketch",
      logo:  SketchImage,
    },
    {
      name: "Udemy",
      logo:  UdemyImage,
    },
    {
      name: "Asana",
      logo:  AsanaImage,
    },
    {
      name: "Sky Scanner",
      logo:  SkyscannerImage,
    },
    {
      name: "Heroku",
      logo:  HerokuImage,
    },
    {
        name: "Mail Chimp",
        logo:  MailchimpImage,
      },
  ]

  return (
    <section className="py-5">
      <div className="container">
        {/* Header */}
        <div className="text-center mb-5">
          <h2 className="fw-bold mb-3">Our Happy Clients</h2>
          <p className="text-muted mx-auto" style={{ maxWidth: "800px" }}>
            Professionally cultivate one-to-one customer service with robust ideas. Dynamically innovate
            resource-leveling customer service for state of the art customer service.
          </p>
        </div>

        {/* Client Logos Grid */}
        <div className="row g-4 justify-content-center mb-4">
          {clients.map((client, index) => (
            <div key={index} className="col-4 col-md-3 col-lg-2">
              <div className="d-flex align-items-center justify-content-center">
                <div className="bg-white rounded-circle">
                  <img
                    src={client.logo || "/placeholder.svg"}
                    alt={`${client.name} logo`}
                    width={60}
                    height={60}
                    className="img-fluid opacity-75 hover:opacity-100 transition-opacity"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Show More Button */}
        <div className="text-center">
          <button className="btn btn-link text-primary text-decoration-none d-inline-flex align-items-center gap-2">
            Show more
            <ArrowRight size={20} />
          </button>
        </div>
      </div>
    </section>
  )
}

