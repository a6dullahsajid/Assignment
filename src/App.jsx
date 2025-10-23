import { useState } from "react";
import "./App.css";
import questionMark from "./assets/questionMark.svg";
import previousIcon from "./assets/arrow.svg";
import nextIcon from "./assets/arrow2.svg";
import plusIcon from "./assets/plus.svg";
import { galleryImages, addNewImage } from "./images.js";
import { tabContent } from "./tabContent.js";

export default function App() {
  const [activeTab, setActiveTab] = useState("about");
  const [galleryImagesList, setGalleryImagesList] = useState(galleryImages);
  
  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };
  
  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      setGalleryImagesList(addNewImage(galleryImagesList, file));
    }
  };

  const handlePrevious = () => {
    const galleryContainer = document.querySelector('.gallery-images-container');
    if (galleryContainer) {
      galleryContainer.scrollBy({
        left: -210,
        behavior: 'smooth'
      });
    }
  };

  const handleNext = () => {
    const galleryContainer = document.querySelector('.gallery-images-container');
    if (galleryContainer) {
      galleryContainer.scrollBy({
        left: 210,
        behavior: 'smooth'
      });
    }
    console.log('Next');
  };

  return (
    <main>
      <section className="left-section"></section>
      <section className="right-section">
        <div className="right-section-content">
          <div className="widget-container">
            <div className="widget-left">
              <img src={questionMark} alt="questionMark" />
              <div className="grid-container">
                <div className="grid-item"></div>
                <div className="grid-item"></div>
                <div className="grid-item"></div>
                <div className="grid-item"></div>
                <div className="grid-item"></div>
                <div className="grid-item"></div>
              </div>
            </div>
            <div className="widget-right">
              <div className={`widget-header ${activeTab}-active`}>
                <h1
                  className={activeTab === "about" ? "active" : ""}
                  onClick={() => handleTabClick("about")}
                >
                  About Me
                </h1>
                <h1
                  className={activeTab === "experiences" ? "active" : ""}
                  onClick={() => handleTabClick("experiences")}
                >
                  Experiences
                </h1>
                <h1
                  className={activeTab === "recommended" ? "active" : ""}
                  onClick={() => handleTabClick("recommended")}
                >
                  Recommended
                </h1>
              </div>
              <div className="widget-content">
                {tabContent[activeTab].map((paragraph, index) => (
                  <p key={index}>{paragraph}</p>
                ))}
              </div>
            </div>
          </div>
          <div className="line"></div>
          <div className="widget-container">
            <div className="widget-left">
              <img src={questionMark} alt="questionMark" />
              <div className="grid-container">
                <div className="grid-item"></div>
                <div className="grid-item"></div>
                <div className="grid-item"></div>
                <div className="grid-item"></div>
                <div className="grid-item"></div>
                <div className="grid-item"></div>
              </div>
            </div>
            <div className="widget-right">
              <div className="gallery-header">
                <div className="gallery-header-text">Gallery</div>
                <div className="gallery-header-buttons">
                  <label className="add-button" htmlFor="file-input">
                    <img src={plusIcon} alt="plusIcon" />Add Image
                    <input
                      id="file-input"
                      type="file"
                      accept="image/*"
                      onChange={handleFileChange}
                      style={{ display: 'none' }}
                    />
                  </label>
                  <div className="gallery-navigation">
                    <div className="gallery-header-button-prev" onClick={handlePrevious}>
                      <img src={previousIcon} alt="previousIcon" />
                    </div>
                    <div className="gallery-header-button-next" onClick={handleNext}>
                      <img src={nextIcon} alt="nextIcon" />
                    </div>
                  </div>
                </div>
              </div>
              <div className="gallery-images-container">
                {galleryImagesList.map((image) => (
                    <img key={image.id} src={image.src} alt={image.alt} title={image.title} />
                ))}
              </div>
            </div>
          </div>
          <div className="line"></div>
        </div>
      </section>
    </main>
  );
}
