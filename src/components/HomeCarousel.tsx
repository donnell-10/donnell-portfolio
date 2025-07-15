import React, { useState } from "react";

type Image = {
  src: string;
  description: string;
};

type HomeCarouselProps = {
  images: Image[];
};

const HomeCarousel: React.FC<HomeCarouselProps> = ({ images }) => {
  const [index, setIndex] = useState(0);

  const goToNext = () => {
    setIndex((prev) => (prev + 1) % images.length);
  };

  const goToPrev = () => {
    setIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  const currentImage = images[index];

  return (
    <div
      className="image-carousel"
      style={{
        width: "100%",
        maxWidth: "600px",
        aspectRatio: "3 / 2",
        position: "relative",
        overflow: "hidden",
        margin: "0 auto",
        borderRadius: "12px",
        boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
      }}
    >
      <img
        src={currentImage.src}
        alt={currentImage.description}
        style={{
          width: "100%",
          height: "100%",
          objectFit: "cover",
          display: "block",
        }}
      />

      {/* Description Overlay */}
      <div
        style={{
          position: "absolute",
          bottom: 0,
          left: 0,
          width: "100%",
          background: "rgba(0, 0, 0, 0.5)",
          color: "white",
          padding: "0.5rem",
          fontSize: "0.95rem",
          textAlign: "center",
        }}
      >
        {currentImage.description}
      </div>

      {/* Navigation Buttons */}
      <button
        onClick={goToPrev}
        style={{
          position: "absolute",
          top: "50%",
          left: "0.5rem",
          transform: "translateY(-50%)",
          background: "rgba(0, 0, 0, 0.4)",
          color: "white",
          border: "none",
          padding: "0.5rem 1rem",
          borderRadius: "9999px",
          fontSize: "1rem",
        }}
      >
        ‹
      </button>
      <button
        onClick={goToNext}
        style={{
          position: "absolute",
          top: "50%",
          right: "0.5rem",
          transform: "translateY(-50%)",
          background: "rgba(0, 0, 0, 0.4)",
          color: "white",
          border: "none",
          padding: "0.5rem 1rem",
          borderRadius: "9999px",
          fontSize: "1rem",
        }}
      >
        ›
      </button>
    </div>
  );
};

export default HomeCarousel;
