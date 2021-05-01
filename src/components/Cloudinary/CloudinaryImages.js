import { Image, CloudinaryContext } from 'cloudinary-react';
import React from 'react';

export default CloudinaryImages 
function CloudinaryImages() {

  const id ="v1619087662/HomePage/"

  return (
  
  <CloudinaryContext cloudName="sophieknits">
    <Image publicId={id + "sk_3.jpg"} width="100%" />
  </CloudinaryContext>
  
  )}


