import React from "react"
import { ArrowRight, ArrowUpRight } from "lucide-react"
import BlogImage from "../../assest/image/blog.png";
import BlogImage1 from "../../assest/image/blog1.png";
import BlogImage2 from "../../assest/image/blog2.png";
import BlogImage3 from "../../assest/image/blog3.png";
import BlogImage4 from "../../assest/image/blog4.png";
import BlogImage5 from "../../assest/image/blog5.png";


export default function BlogSection() {
  const blogs = [
    {
      image: BlogImage,
      author: "Prabhash Mishra",
      date: "1 Jan 2023",
      title: "Small business & Startup",
      description: "Like to know the secrets of transforming a 2-14 team into a 3x Super Bowl winning Dynasty?",
      tags: ["Tax & Audit", "Management"],
    },
    {
      image:  BlogImage1,
      author: "Mahesh Kumar",
      date: "1 Jan 2023",
      title: "Scale-Up Company Offer",
      description: "Mental models are simple expressions of complex processes or relationships.",
      tags: ["Tax", "Research", "Complience"],
    },
    {
      image:  BlogImage2,
      author: "Rakhi Verma",
      date: "1 Jan 2023",
      title: "Growing Business Package",
      description: "Introduction to Wireframing and its Principles. Learn from the best in the industry.",
      tags: ["Audit", "Money Back"],
    },
    {
      image: BlogImage3,
      author: "Karan Kumar",
      date: "1 Jan 2023",
      title: "Scale-Up Company Offer",
      description: "Collaboration can make our teams stronger, and our individual designs better.",
      tags: ["Money", "Management"],
    },
    {
      image:  BlogImage4,
      author: "Richa Singh",
      date: "1 Jan 2023",
      title: "Scale-Up Company Offer",
      description: "JavaScript frameworks make development easy with extensive features and functionalities.",
      tags: ["Tax Return", "News", "Audit"],
    },
    {
      image: BlogImage5,
      author: "Miss Nora",
      date: "1 Jan 2023",
      title: "Scale-Up Company Offer",
      description: "Starting a community doesn't need to be complicated, but how do you get started?",
      tags: ["Private Limited Company", "Customer Success"],
    },
  ]

  return (
    <section className="py-5">
      <div className="container">
        {/* Header */}
        <div className="text-center mb-5">
          <p className="text-warning mb-2">EXPLORE OUR BLOGS</p>
          <h2 className=" fw-bold">Accelerate Digital Transformation</h2>
        </div>

        {/* Blog Grid */}
        <div className="row g-4">
          {blogs.map((blog, index) => (
            <div key={index} className="col-12 col-md-6 col-lg-4" >
              <article className="card h-100 border-0 shadow-sm">
                {/* Image */}
                <div className="position-relative">
                  <img
                    src={blog.image || "/placeholder.svg"}
                    alt={blog.title}
                    width={400}
                    height={250}
                    className="card-img-top"
                  />
                </div>

                <div className="card-body">
                  {/* Author & Date */}
                  <div className="d-flex gap-2 mb-3">
                    <span className="text-muted">{blog.author}</span>
                    <span className="text-muted">•</span>
                    <span className="text-muted">{blog.date}</span>
                  </div>

                  {/* Title */}
                  <h3 className="h5 mb-3">
                    <a href="#" className="text-decoration-none text-dark d-flex align-items-center gap-2">
                      {blog.title}
                      <ArrowUpRight size={18} />
                    </a>
                  </h3>

                  {/* Description */}
                  <p className="text-muted mb-3">{blog.description}</p>

                  {/* Tags */}
                  <div className="d-flex flex-wrap gap-2">
                    {blog.tags.map((tag, tagIndex) => (
                      <span key={tagIndex} className="badge rounded-pill bg-light text-dark">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </article>
            </div>
          ))}
        </div>

        {/* Show More Button */}
        <div className="text-center mt-5">
          <button className="btn btn-primary d-inline-flex align-items-center gap-2">
            Show more blogs
            <ArrowRight size={20} />
          </button>
        </div>
      </div>
    </section>
  )
}

