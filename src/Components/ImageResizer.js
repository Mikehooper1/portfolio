import React, { useState } from 'react';
import Resizer from 'react-image-file-resizer';

const ImageResizer = () => {
  const [originalImage, setOriginalImage] = useState(null);
  const [resizedImage, setResizedImage] = useState(null);

  const resizeImage = (file) => {
    return new Promise((resolve) => {
      
      Resizer.imageFileResizer(
        file,
        500, // Maximum width
        500, // Maximum height
        'JPEG', // Choose output format (JPEG, PNG, etc.)
        100, // Quality (0-100)
        0, // Rotation in degrees (optional)
        (uri) => {
          resolve(uri);
        },
        'PNG' // Output format (base64, blob, etc.)
      );
    });
  };

  const handleFileChange = async (event) => {
    const file = event.target.files[0];
    setOriginalImage(file);

    try {
      const resizedImageUri = await resizeImage(file);
      setResizedImage(resizedImageUri);
    } catch (error) {
      console.error('Error resizing image:', error);
    }
  };

  return (
    
    <div className="image-resizer">
      <input type="file" accept='image/*' className="form-control" onChange={handleFileChange}  id="inputGroupFile04" aria-describedby="inputGroupFileAddon04" aria-label="Upload"/>
      {originalImage && (
        <div className="original-image">
          <img src={URL.createObjectURL(originalImage)} alt="Original " />
        </div>
      )}
      {resizedImage && (
        <div className="resized-image">
          <img src={resizedImage} alt="Resized " />
        </div>
      )}
    </div>
  );
};

export default ImageResizer;
