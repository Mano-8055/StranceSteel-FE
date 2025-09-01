import React from "react";
import "./testimonialsection.css";

// Dummy reviews data (replace thumbnail, name, and company as needed)
const reviews = [
  {
    videoThumbnail: "/videos/thumb1.jpg",
    videoUrl: "#",
    title: "KURAINDA OTHA COMMITMENT",
    stars: 5,
    name: "Lokesh",
    company: "Alphacap Trade Platform Private Limited"
  },
  {
    videoThumbnail: "/videos/thumb2.jpg",
    videoUrl: "#",
    title: "COIMBATORE SPEAKS RAW MAT EVENT",
    stars: 4,
    name: "Raw Mat Event 2024",
    company: "Coimbatore"
  },
  {
    videoThumbnail: "/videos/thumb3.jpg",
    videoUrl: "#",
    title: "SARIYANA STEEL, SAMMIYANA PRICE THAAN!!",
    stars: 4.5,
    name: "Ruson",
    company: "Celsair Cooling Private Limited"
  }
];

export default function TestimonialSection() {
  return (
    <section className="testimonial-section">
      <h2 className="testimonial-title">
        Here is what our customers say about us
        <div className="testimonial-underline"></div>
      </h2>
      <div className="testimonial-grid">
        {reviews.map((review, i) => (
          <div className="testimonial-card" key={review.name + i}>
            <div className="testimonial-video">
              {/* 
                Use an image as video background with a play button overlay,
                or embed the video if you have it.
                Replace src with your thumbnail image paths.
              */}
              <a href={review.videoUrl} className="testimonial-video-link" tabIndex={0}>
                <img
                  src={review.videoThumbnail}
                  alt={review.title}
                  className="testimonial-thumb"
                />
                <button className="testimonial-play">
                  <svg width="29" height="29" viewBox="0 0 29 29">
                    <circle cx="14.5" cy="14.5" r="14.5" fill="#fff" opacity="0.92" />
                    <polygon points="12,9 22,14.5 12,20" fill="#2636D9" />
                  </svg>
                </button>
              </a>
            </div>
            <div className="testimonial-body">
              <div className="testimonial-stars">
                {Array.from({ length: Math.floor(review.stars) }).map((_, i) => (
                  <span key={i} className="star">&#9733;</span>
                ))}
                {(review.stars % 1 !== 0) && <span className="star half">&#9733;</span>}
              </div>
              <div className="testimonial-person">{review.name}</div>
              <div className="testimonial-company">{review.company}</div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
