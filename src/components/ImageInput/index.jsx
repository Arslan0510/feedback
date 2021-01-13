import React from "react";

const ImageInput = ({ getPhoto, image }) => {
  console.log("🚀 ~ file: index.jsx ~ line 4 ~ ImageInput ~ image", image);
  return (
    <label className='imageInput'>
      {image ? <img src={image} alt='' /> : <i class='fa fa-camera fa-10x' />}

      <input
        type='file'
        name='logofile'
        style={{ display: "none" }}
        onChange={(e) => getPhoto(e)}
      />
    </label>
  );
};

export default ImageInput;
