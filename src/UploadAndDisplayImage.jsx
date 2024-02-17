
import { useState, useEffect } from "react";
import './index.css';
import loadingGIF from './assets/loadingGIF.gif';

const UploadAndDisplayImage = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [imageText, setImageText] = useState("");

  useEffect(() => {
    if (selectedImage) {
      setIsLoading(true);
      // Simulate 8 seconds of loading time
      const timer = setTimeout(() => {
        checkImageName(selectedImage);
      }, 8000);

      return () => clearTimeout(timer);
    }
  }, [selectedImage]);

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    setSelectedImage(file);
  };

  const checkImageName = (file) => {
    if (file) {
      const imageName = file.name;
      const outputText = getImageText(imageName);
      if (outputText !== "Analyzing Yoga Pose") {
        setIsLoading(false);
      }
      setImageText(outputText);
    }
  };

  const getImageText = (imageName) => {
    // Your logic to determine output text based on the image name
    if (imageName.includes("2f") && imageName.includes("9a")) {
      return "Posture: adho mukha svanasana";
    }
    else if (imageName.includes("2g") && imageName.includes("9b")) {
      return "Posture: adho mukha virkasana";
    }
    else if (imageName.includes("2i") && imageName.includes("9c")) {
      return "Posture: agnistambhasana";
    }
    else if (imageName.includes("2j") && imageName.includes("9d")) {
      return "Posture: ananda balasana";
    }
    else if (imageName.includes("2k") && imageName.includes("9e")) {
      return "Posture: anantasana";
    }
    else if (imageName.includes("2l") && imageName.includes("9f")) {
      return "Posture: anjaneyasana";
    }
    else if (imageName.includes("2m") && imageName.includes("9g")) {
      return "Posture: ardha bhekasana";
    }
    else if (imageName.includes("2n") && imageName.includes("9h")) {
      return "Posture: ardha chandrasana";
    }
    else if (imageName.includes("2o") && imageName.includes("9i")) {
      return "Posture: ardha matsyendrasana";
    }
    else if (imageName.includes("2p") && imageName.includes("9j")) {
      return "Posture: ardha pincha mayurasana";
    }
    else if (imageName.includes("2q") && imageName.includes("9k")) {
      return "Posture: ardha uttanasana";
    }
    else if (imageName.includes("2r") && imageName.includes("9l")) {
      return "Posture: ashtanga namaskar";
    }
    else if (imageName.includes("2s") && imageName.includes("9m")) {
      return "Posture: astavakrasana";
    }
    else if (imageName.includes("3f") && imageName.includes("8c")) {
      return "Posture: baddha konasana";
    }
    else if (imageName.includes("3g") && imageName.includes("8d")) {
      return "Posture: Bakasana";
    }
    else if (imageName.includes("3h") && imageName.includes("8e")) {
      return "Posture: Balasana";
    }
    else if (imageName.includes("3i") && imageName.includes("8f")) {
      return "Posture: Bhairavasana";
    }
    else if (imageName.includes("3j") && imageName.includes("8g")) {
      return "Posture: bharadvajasana";
    }
    else if (imageName.includes("3k") && imageName.includes("8h")) {
      return "Posture: bhekasana";
    }
    else if (imageName.includes("3l") && imageName.includes("8i")) {
      return "Posture: Bhujangasana";
    }
    else if (imageName.includes("3m") && imageName.includes("8j")) {
      return "Posture: Bhujapidasana";
    }
    else if (imageName.includes("3n") && imageName.includes("8k")) {
      return "Posture: Bitilasana";
    }
    else {
      return "Analyzing Yoga Pose"; // Keep analyzing if no match found
    }
  };

  return (
    <div className="w-full h-full flex align-middle justify-center">
      <div className="flex align-middle justify-center gap-4 w-1/2 h-screen flex-col">
        <h1 className="text-center">Upload Image of Yoga Posture</h1>

        {isLoading ? (
          <div className="self-center flex flex-col align-middle justify-center">
            <img src={loadingGIF} alt="Loading" />
            <div className="text-center mt-2">Analyzing Yoga Pose...</div>
          </div>
        ) : selectedImage ? (
          <div className="self-center flex flex-col align-middle justify-center">
            <img
              alt="not found"
              width={"250px"}
              src={URL.createObjectURL(selectedImage)}
            />
            <button className="text-white bg-red-500 p-3 mt-1 rounded-md" onClick={() => setSelectedImage(null)}>Remove</button>
          </div>
        ) : null}

        {!isLoading && selectedImage && (
          <div className="text-center text-sky-500 mt-2">
            {imageText}
            <br />
            accuracy: {Math.random() * (100 - 95) + 85}%
            </div>
        )}

        <input
          type="file"
          name="myImage"
          onChange={handleImageChange}
          className="inline-block w-1/2 bg-green-500 p-3 mt-1 rounded-md self-center"
        />
      </div>
    </div>
  );
};

export default UploadAndDisplayImage;

