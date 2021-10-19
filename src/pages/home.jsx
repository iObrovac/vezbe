import React, { useEffect, useState } from "react";
import Slider from "../components/slider/slider";

import API from "../API";

export default function Home() {
  const [photos, setPhotos] = useState([]);

  useEffect(() => {
    API.get("search?query=people")
      .then((ress) => {
        setPhotos(ress.data.photos);
        // console.log(ress.data.photos);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="page-content">
      <Slider photos={photos} />
    </div>
  );
}
