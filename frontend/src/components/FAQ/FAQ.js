import React, { useState } from "react";
import { ChevronRight } from "lucide-react";

const faqs = [
  {
    id: 1,
    question: "Can I recover deleted files from desktop with this software?",
    answer:
      "Yes, our software can help you recover deleted files from your desktop. It supports various file types and uses advanced scanning algorithms to locate and restore your deleted files.",
  },
  {
    id: 2,
    question: "Can I recover deleted files from desktop with this software?",
    answer:
      "Yes, our software can help you recover deleted files from your desktop. It supports various file types and uses advanced scanning algorithms to locate and restore your deleted files.",
  },
  {
    id: 3,
    question: "Can I recover deleted files from desktop with this software?",
    answer:
      "Yes, our software can help you recover deleted files from your desktop. It supports various file types and uses advanced scanning algorithms to locate and restore your deleted files.",
  },
  {
    id: 4,
    question: "Can I recover deleted files from desktop with this software?",
    answer:
      "Yes, our software can help you recover deleted files from your desktop. It supports various file types and uses advanced scanning algorithms to locate and restore your deleted files.",
  },
  {
    id: 5,
    question: "Can I recover deleted files from desktop with this software?",
    answer:
      "Yes, our software can help you recover deleted files from your desktop. It supports various file types and uses advanced scanning algorithms to locate and restore your deleted files.",
  },
];

export default function FAQ() {
  const [expandedId, setExpandedId] = useState(null);
  const [showAll, setShowAll] = useState(false);

  const visibleFaqs = showAll ? faqs : faqs.slice(0, 5);

  const toggleQuestion = (id) => {
    setExpandedId(expandedId === id ? null : id);
  };

  return (
    <div className="container py-5">
      <div className="text-center mb-5">
        <span className="text-warning fw-semibold">FAQ</span>
        <h2 className="mt-2" style={{ color: "#4A2B2B" }}>
          Frequent Ask Questions
        </h2>
      </div>

      <div className="row justify-content-center">
        <div className="col-12 col-lg-10">
          <div className="accordion" id="faqAccordion">
            {visibleFaqs.map((faq) => (
              <div
                key={faq.id}
                className="card border-0 mb-3"
                style={{
                  boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1), 0px 1px 3px rgba(0, 0, 0, 0.06)", // Box shadow for all sides
                  borderRadius: "8px",  
                }}
              >
                <div
                  className="card-header bg-white border-0 shadow-sm rounded cursor-pointer"
                  onClick={() => toggleQuestion(faq.id)}
                  style={{ cursor: "pointer" }}
                >
                  <div className="d-flex justify-content-between align-items-center p-3">
                    <h3 className="mb-0 fs-6 fw-normal">{faq.question}</h3>
                    <ChevronRight
                      className={`transition-transform ${
                        expandedId === faq.id ? "rotate-90" : ""
                      }`}
                      style={{
                        transition: "transform 0.2s ease-in-out",
                        transform: expandedId === faq.id ? "rotate(90deg)" : "rotate(0deg)",
                      }}
                    />
                  </div>
                </div>
                {expandedId === faq.id && (
                  <div className="card-body px-4 py-3">
                    <p className="mb-0 text-muted">{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>

          {faqs.length > 5 && (
            <div className="text-center mt-4">
              <button
                className="btn btn-primary px-4 py-2"
                onClick={() => setShowAll(!showAll)}
                style={{ backgroundColor: "#1B4B79", borderColor: "#1B4B79" }}
              >
                {showAll ? "Show less" : "Show more"}
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
