import React, { useState } from "react";
import { ChevronLeft, ChevronRight, Star, StarHalf, Quote } from "lucide-react";
import TestimonialImage from "../../assest/image/testimonial.png";

const testimonials = [
  {
    id: 1,
    name: "Chris",
    role: "President and CEO, PrintReach, USA",
    content:
      "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat aute irure sint amet occaecat cupidatat non proident ea commodo consequat aute irure sint amet occaecat cupidatat non proident",
    rating: 4.5,
    image:
       TestimonialImage,
  },
  {
    id: 2,
    name: "John",
    role: "CTO, ExampleCorp, UK",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    rating: 4,
    image:
       TestimonialImage,
  },
  {
    id: 3,
    name: "Anna",
    role: "CMO, Startup XYZ, Canada",
    content:
      "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
    rating: 5,
    image:
       TestimonialImage,
  },
  {
    id: 4,
    name: "Sarah",
    role: "VP of Marketing, BigCorp, USA",
    content:
      "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    rating: 3.5,
    image:
       TestimonialImage,
  },
];

export default function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0);

  const nextSlide = () => {
    setActiveIndex((current) => (current + 2) % testimonials.length);
  };

  const prevSlide = () => {
    setActiveIndex(
      (current) => (current - 2 + testimonials.length) % testimonials.length
    );
  };

  const renderStars = (rating) => {
    return [...Array(5)].map((_, index) => {
      if (index + 1 <= Math.floor(rating)) {
        return <Star key={index} className="text-warning ms-1" fill="currentColor" />;
      } else if (index + 0.5 <= rating) {
        return <StarHalf key={index} className="text-warning ms-1" fill="currentColor" />;
      }
      return <Star key={index} className="text-muted ms-1" />;
    });
  };

  return (
    <div className="container-fluid bg-primary py-5">
      <div className="container">
        <h2 className="text-white text-center mb-5">What people say about us</h2>

        <div className="position-relative">
          <div className="row justify-content-center">
             
            {[0, 1].map((offset) => {
              const testimonialIndex = (activeIndex + offset) % testimonials.length;
              const testimonial = testimonials[testimonialIndex];

              return (
                <div className="col-md-5 mx-2" key={testimonial.id}>
                  <div
                    className="card border-0 shadow-lg d-flex flex-column justify-content-between"
                    style={{ height: "100%" }}
                  >
                    <div className="card-body p-4">
                      <div className="d-flex justify-content-between align-items-start mb-3">
                         
                        <Quote className="text-warning" />
                         
                        <div>{renderStars(testimonial.rating)}</div>
                      </div>

                      <blockquote className="mb-4" style={{ fontSize: "1rem" }}>
                        {testimonial.content}
                      </blockquote>

                      <div className="d-flex align-items-center">
                        <img
                          src={testimonial.image || "/placeholder.svg"}
                          alt={testimonial.name}
                          className="rounded-circle me-3"
                          width={60}
                          height={60}
                        />
                        <div>
                          <h5 className="mb-1">{testimonial.name}</h5>
                          <p className="text-muted mb-0">{testimonial.role}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          <button
            className="btn btn-light  position-absolute top-50 start-0 translate-middle-y d-none d-md-block"
            onClick={prevSlide}
            aria-label="Previous testimonials"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          <button
            className="btn btn-light   position-absolute top-50 end-0 translate-middle-y d-none d-md-block"
            onClick={nextSlide}
            aria-label="Next testimonials"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>
      </div>
    </div>
  );
}
