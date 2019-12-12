import React, {useState, useEffect} from "react";
import PictureCard from "./pictureCard";
import axios from "axios";
function PictureList() {
    const [nasaImg, setNasaImg] = useState([]);
    useEffect(() => {
      axios.get(`https://api.nasa.gov/planetary/apod?api_key=udVjhfQZLeOOaaedqNUclbbNNiBtxW0ueTuE006K`)
        .then(response => {
          console.log(response.data);
          setNasaImg(response.data);
        })
        .catch(error => {
          console.log("the data was not return", error);
        });
    }, []);
    return (
      <div className="App">
        <PictureCard title={nasaImg.title} url={nasaImg.url} explanation={nasaImg.explanation} date={nasaImg.date}/>
      </div>
    );
}

export default PictureList; 