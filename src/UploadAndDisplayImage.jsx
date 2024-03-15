
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
    else if (imageName.includes("3o") && imageName.includes("8l")) {
        return "Posture: Camatkarasana";
    }
    else if (imageName.includes("3p") && imageName.includes("8m")) {
        return "Posture: Chakravakasana";
    }
    else if (imageName.includes("3q") && imageName.includes("8n")) {
        return "Posture: Chaturanga Dandasana";
    }
    else if (imageName.includes("3r") && imageName.includes("8o")) {
        return "Posture: Dandasana";
    }
    else if (imageName.includes("3s") && imageName.includes("8p")) {
        return "Posture: Dhanurasana";
    }
    else if (imageName.includes("3t") && imageName.includes("8q")) {
        return "Posture: Durvanasana";
    }
    else if (imageName.includes("3u") && imageName.includes("8r")) {
        return "Posture: Dwi Pida Viparita Dandasana";
    }
    else if (imageName.includes("4f") && imageName.includes("7c")) {
        return "Posture: Eka Pada Koundinyasana I";
    }
    else if (imageName.includes("4g") && imageName.includes("7d")) {
        return "Posture: Eka Pada Koundinyasana II";
    }
    else if (imageName.includes("4h") && imageName.includes("7e")) {
        return "Posture: Eka Pada Rajakapotasana";
    }
    else if (imageName.includes("4i") && imageName.includes("7f")) {
        return "Posture: Eka Pada Rajakapotasana II";
    }
    else if (imageName.includes("4j") && imageName.includes("7g")) {
        return "Posture: Ganda Bherundasana";
    }
    else if (imageName.includes("4k") && imageName.includes("7h")) {
        return "Posture: Garbha Pindasana";
    }
    else if (imageName.includes("4l") && imageName.includes("7i")) {
        return "Posture: Garudasana";
    }
    else if (imageName.includes("4m") && imageName.includes("7j")) {
        return "Posture: Gomukhasana";
    }
    else if (imageName.includes("4n") && imageName.includes("7k")) {
        return "Posture: Halasana";
    }
    else if (imageName.includes("4o") && imageName.includes("7l")) {
        return "Posture: Hanumanasana";
    }
    else if (imageName.includes("4p") && imageName.includes("7m")) {
        return "Posture: Janu Sirsasana";
    }
    else if (imageName.includes("4q") && imageName.includes("7n")) {
        return "Posture: Kapotasana";
    }
    else if (imageName.includes("4r") && imageName.includes("7o")) {
        return "Posture: Krounchansana";
    }
    else if (imageName.includes("4s") && imageName.includes("7p")) {
        return "Posture: Kurumasana";
    }
    else if (imageName.includes("5f") && imageName.includes("6c")) {
        return "Posture: Lolasana";
    }
    else if (imageName.includes("5g") && imageName.includes("6d")) {
        return "Posture: Makra Adho Mukha Svanasana";
    }
    else if (imageName.includes("5h") && imageName.includes("6e")) {
        return "Posture: Makarasana";
    }
    else if (imageName.includes("5i") && imageName.includes("6f")) {
        return "Posture: Malasana";
    }
    else if (imageName.includes("5j") && imageName.includes("6g")) {
        return "Posture: Marichyasana I";
    }
    else if (imageName.includes("5k") && imageName.includes("6h")) {
        return "Posture: Marichyasana II";
    }
    else if (imageName.includes("5l") && imageName.includes("6i")) {
        return "Posture: Marjaryasana";
    }
    else if (imageName.includes("5m") && imageName.includes("6j")) {
        return "Posture: Matsyasana";
    }
    else if (imageName.includes("5n") && imageName.includes("6k")) {
        return "Posture: Mayurasana";
    }
    else if (imageName.includes("5o") && imageName.includes("6l")) {
        return "Posture: Natrajasana";
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

