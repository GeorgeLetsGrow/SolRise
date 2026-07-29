"use client";

import { useEffect, useState } from "react";

const photos = [
  { src: "/gallery-vocabulary-practice.jpg", alt: "SolRise student working through a vocabulary activity", caption: "Building vocabulary with purpose" },
  { src: "/gallery-whiteboard-math.jpg", alt: "SolRise student solving a math problem on a whiteboard", caption: "Thinking made visible" },
  { src: "/gallery-hands-on-math.jpg", alt: "SolRise student using dice and a whiteboard during math practice", caption: "Hands-on math practice" },
  { src: "/gallery-guided-activity.jpg", alt: "SolRise educator guiding young learners through an activity", caption: "Encouragement at every step" },
  { src: "/gallery-collaborative-learning.jpg", alt: "Two SolRise students learning together with vocabulary cards", caption: "Learning better together" },
  { src: "/gallery-group-guidance.jpg", alt: "SolRise educator guiding a group of young learners through a hands-on activity", caption: "Growing through guided discovery" },
  { src: "/gallery-language-partners.jpg", alt: "Two SolRise students practicing language skills on whiteboards", caption: "Language practice with a partner" },
  { src: "/gallery-language-confidence.jpg", alt: "SolRise student matching a Spanish word card to a whiteboard answer", caption: "Confidence in every answer" },
  { src: "/gallery-peer-learning.jpg", alt: "Two SolRise students taking turns during a learning activity", caption: "Taking turns, learning together" },
  { src: "/gallery-spanish-numbers.jpg", alt: "SolRise student matching the Spanish word diez with the number ten", caption: "Spanish skills in action" },
  { src: "/gallery-online-math.jpg", alt: "SolRise student solving a math problem during an online tutoring session", caption: "Personalized math support online" },
  { src: "/gallery-online-reading.jpg", alt: "SolRise educator and student practicing sight words online", caption: "Reading practice that connects" },
  { src: "/gallery-online-writing.jpg", alt: "SolRise student practicing writing during an online learning session", caption: "Focused learning from home" },
  { src: "/gallery-educator-connection.jpg", alt: "SolRise educator and student smiling together", caption: "Relationships that make learning meaningful" },
];

export default function StudentGallery() {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  const selected = selectedIndex === null ? null : photos[selectedIndex];

  const close = () => setSelectedIndex(null);
  const previous = () => setSelectedIndex((index) => index === null ? null : (index - 1 + photos.length) % photos.length);
  const next = () => setSelectedIndex((index) => index === null ? null : (index + 1) % photos.length);

  useEffect(() => {
    if (selectedIndex === null) return;
    const handleKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") close();
      if (event.key === "ArrowLeft") previous();
      if (event.key === "ArrowRight") next();
    };
    document.body.classList.add("gallery-open");
    window.addEventListener("keydown", handleKey);
    return () => {
      document.body.classList.remove("gallery-open");
      window.removeEventListener("keydown", handleKey);
    };
  }, [selectedIndex]);

  return (
    <>
      <div className="gallery-grid">
        {photos.map((photo, index) => (
          <button className="gallery-tile" type="button" key={photo.src} onClick={() => setSelectedIndex(index)} aria-label={`Open photo: ${photo.caption}`}>
            <img src={photo.src} alt={photo.alt} loading="lazy" />
            <span><strong>{photo.caption}</strong><small>View photo</small></span>
          </button>
        ))}
      </div>

      {selected && (
        <div className="gallery-lightbox" role="dialog" aria-modal="true" aria-label="Student photo gallery" onClick={close}>
          <button className="gallery-close" type="button" onClick={close} aria-label="Close gallery">×</button>
          <button className="gallery-arrow gallery-previous" type="button" onClick={(event) => { event.stopPropagation(); previous(); }} aria-label="Previous photo">‹</button>
          <figure className="gallery-dialog" onClick={(event) => event.stopPropagation()}>
            <img src={selected.src} alt={selected.alt} />
            <figcaption>
              <span>{selectedIndex! + 1} / {photos.length}</span>
              <strong>{selected.caption}</strong>
            </figcaption>
          </figure>
          <button className="gallery-arrow gallery-next" type="button" onClick={(event) => { event.stopPropagation(); next(); }} aria-label="Next photo">›</button>
        </div>
      )}
    </>
  );
}
