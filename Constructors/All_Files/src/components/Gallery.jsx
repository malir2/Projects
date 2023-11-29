import React from "react";
import Gallery_Headrer from "./gallery_components/Gallery_Headrer";
import Gallery_Content from "./gallery_components/Gallery_Content";

function Gallery() {
  return (
    <div className="w-full">
      <Gallery_Headrer />
      <Gallery_Content />
    </div>
  );
}

export default Gallery;
