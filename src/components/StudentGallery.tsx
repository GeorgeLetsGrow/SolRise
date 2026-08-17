"use client";

import { useCallback, useEffect, useState } from "react";

const photos = [
  { src: "/solrise-team-peace.jpeg", alt: "Dianne and Yamilka smiling and making peace signs", caption: "The SolRise team brings warmth to learning" },
  { src: "/solrise-team-laughing.jpeg", alt: "Dianne and Yamilka sharing a laugh", caption: "Joy is part of the learning process" },
  { src: "/solrise-team-joy.jpeg", alt: "Dianne and Yamilka laughing together", caption: "Educators who lead with heart" },
  { src: "/solrise-gallery-group.jpg", alt: "SolRise educator smiling with a group of young learners", caption: "Learning and growing together" },
  { src: "/solrise-gallery-library-practice.jpg", alt: "Two students practicing math with whiteboards at the library", caption: "Focused practice in the community" },
  { src: "/solrise-gallery-library-group.jpg", alt: "Three students smiling during a library learning session", caption: "Confidence worth celebrating" },
  { src: "/solrise-gallery-student-visit.jpg", alt: "SolRise educator visiting with two students", caption: "Connections beyond the classroom" },
  { src: "/solrise-gallery-student-success.jpg", alt: "SolRise educator celebrating completed math work with two students", caption: "Proud of every breakthrough" },
  { src: "/solrise-gallery-whiteboard-session.jpg", alt: "SolRise educator and two students smiling beside a whiteboard filled with math practice", caption: "Making math visible and memorable" },
  { src: "/solrise-gallery-one-on-one-fun.jpg", alt: "SolRise educator and student enjoying a one-on-one math session", caption: "Joy belongs in every lesson" },
  { src: "/solrise-gallery-one-on-one-success.jpg", alt: "SolRise educator and student smiling after working through math problems", caption: "One-on-one support that builds confidence" },
  { src: "/gallery-vocabulary-practice.jpg", alt: "SolRise student working through a vocabulary activity", caption: "Building vocabulary with purpose" },
  { src: "/gallery-whiteboard-math.jpg", alt: "SolRise student solving a math problem on a whiteboard", caption: "Thinking made visible" },
  { src: "/gallery-hands-on-math.jpg", alt: "SolRise student using dice and a whiteboard during math practice", caption: "Hands-on math practice" },
  { src: "/gallery-guided-activity.jpg", alt: "SolRise educator guiding young learners through an activity", caption: "Encouragement at every step" },
  { src: "/gallery-collaborative-learning.jpg", alt: "Two SolRise students learning together with vocabulary cards", caption: "Learning better together" },
  { src: "/gallery-group-guidance.jpg", alt: "SolRise educator guiding a group through a hands-on activity", caption: "Growing through guided discovery" },
  { src: "/gallery-language-partners.jpg", alt: "Two SolRise students practicing language skills on whiteboards", caption: "Language practice with a partner" },
  { src: "/gallery-language-confidence.jpg", alt: "SolRise student matching a Spanish word card to an answer", caption: "Confidence in every answer" },
  { src: "/gallery-peer-learning.jpg", alt: "Two SolRise students taking turns during a learning activity", caption: "Taking turns, learning together" },
  { src: "/gallery-spanish-numbers.jpg", alt: "SolRise student practicing Spanish numbers", caption: "Spanish skills in action" },
  { src: "/gallery-online-math.jpg", alt: "SolRise student solving a math problem online", caption: "Personalized math support online" },
  { src: "/gallery-online-reading.jpg", alt: "SolRise educator and student practicing sight words online", caption: "Reading practice that connects" },
  { src: "/gallery-online-writing.jpg", alt: "SolRise student practicing writing online", caption: "Focused learning from home" },
  { src: "/gallery-educator-connection.jpg", alt: "SolRise educator and student smiling together", caption: "Relationships that make learning meaningful" },
];

export default function StudentGallery() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const previous = useCallback(() => setActiveIndex((index) => (index - 1 + photos.length) % photos.length), []);
  const next = useCallback(() => setActiveIndex((index) => (index + 1) % photos.length), []);

  useEffect(() => {
    if (isPaused || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const timer = window.setInterval(next, 5000);
    return () => window.clearInterval(timer);
  }, [isPaused, next]);

  return (
    <div className="gallery-slideshow" role="region" aria-roledescription="carousel" aria-label="SolRise student moments"
      onMouseEnter={() => setIsPaused(true)} onMouseLeave={() => setIsPaused(false)}
      onFocusCapture={() => setIsPaused(true)}
      onBlurCapture={(event) => { if (!event.currentTarget.contains(event.relatedTarget)) setIsPaused(false); }}>
      <div className="gallery-stage" aria-live="polite">
        {photos.map((photo, index) => (
          <figure className={`gallery-slide${index === activeIndex ? " is-active" : ""}`} key={photo.src} aria-hidden={index !== activeIndex}>
            <img className="gallery-slide-backdrop" src={photo.src} alt="" aria-hidden="true" loading="lazy" />
            <img className="gallery-slide-image" src={photo.src} alt={index === activeIndex ? photo.alt : ""} loading={index === 0 ? "eager" : "lazy"} />
            <figcaption><span>{String(index + 1).padStart(2, "0")} / {String(photos.length).padStart(2, "0")}</span><strong>{photo.caption}</strong></figcaption>
          </figure>
        ))}
        <button className="gallery-control gallery-control-previous" type="button" onClick={previous} aria-label="Previous photo">‹</button>
        <button className="gallery-control gallery-control-next" type="button" onClick={next} aria-label="Next photo">›</button>
      </div>
      <div className="gallery-dots" aria-label="Choose a photo">
        {photos.map((photo, index) => (
          <button className={index === activeIndex ? "is-active" : ""} type="button" key={photo.src} onClick={() => setActiveIndex(index)}
            aria-label={`Show photo ${index + 1}: ${photo.caption}`} aria-current={index === activeIndex ? "true" : undefined} />
        ))}
      </div>
    </div>
  );
}
