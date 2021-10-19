import React, { useState } from "react";

export default function Slider({ photos }) {
  const [activePhotoIndex, setActivePhotoIndex] = useState(0);
  const numberOfPhotos = photos.length;

  const setNextPic = () => {
    if (activePhotoIndex >= numberOfPhotos - 1) return;

    setActivePhotoIndex((prevState) => prevState + 1);
  };
  const setPreviousPic = () => {
    if (activePhotoIndex <= 0) return;

    setActivePhotoIndex((prevState) => prevState - 1);
  };

  const sliderWidth = 100 * numberOfPhotos;
  const imgWrapperWidth = 100 / numberOfPhotos;

  return (
    <div className="slider-wrapper">
      {photos.length === 0 && "We don't have any photos to show."}

      <div className="slider-case">
        <div
          className="slider"
          style={{
            width: `${sliderWidth}%`,
            transform: `translateX(-${imgWrapperWidth * activePhotoIndex}%)`,
          }}
        >
          {photos.map((photo) => (
            <div
              className="img-wrapper"
              key={photo.id}
              style={{ width: `${imgWrapperWidth}%` }}
            >
              <img
                src={photo.src.large}
                alt={`photographer: ${photo.photographer}`}
              />
              <a href={photo.photographer_url} target="_blank" rel="noreferrer">
                {photo.photographer}
              </a>
            </div>
          ))}
        </div>

        <button className="slider_btn slider_btn--next" onClick={setNextPic}>
          next
        </button>
        <button
          className="slider_btn slider_btn--previous"
          onClick={setPreviousPic}
        >
          previous
        </button>
      </div>

      <div className="slider-dots">
        {photos.map((photo, photoIndex) => (
          <button
            key={`btn-${photo.id}`}
            onClick={() => setActivePhotoIndex(photoIndex)}
            className={`slider-dot ${
              photoIndex === activePhotoIndex && "slider-dot--active"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
