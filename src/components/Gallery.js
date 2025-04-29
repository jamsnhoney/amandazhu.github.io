// GalleryGrid.js

import React from 'react';

const GalleryGrid = ({ items }) => {
  return (
    <div className="gallery-grid">
      {items.map((item, index) => (
        <GalleryLinkedPage
          key={index}
          imageSrc={item.imageSrc}
          hoverImageSrc={item.hoverImageSrc}
          altText={item.altText}
        />
      ))}
    </div>
  );
};

export default GalleryGrid;
