"use client";

import React, { ComponentRef, useRef, useState } from "react";
import classes from "./image-picker.module.css";
import Image from "next/image";

interface ImagePickerProp {
  label: string;
  name: string;
}

function ImagePicker({ label, name }: ImagePickerProp) {
  const imageInput = useRef<ComponentRef<"input">>(null);
  const [pickedImage, setPickedImage] = useState<string | null>(null);

  // const [pickedImage, setPickedImage] = useState<ArrayBuffer | string | null>(
  //   null,
  // );

  function handlePickClick() {
    imageInput.current?.click();
  }

  function handleSelectedImage(event: React.ChangeEvent<HTMLInputElement>) {
    const file = event?.target?.files?.[0];

    if (!file) {
      setPickedImage(null);
      return;
    }

    // Main solutoin
    // const fileReader = new FileReader();

    // fileReader.onload = () => setPickedImage(fileReader?.result);

    // fileReader.readAsDataURL(file);

    /**
     * temporary solution
     */
    const localUrl = URL.createObjectURL(file);

    setPickedImage(localUrl);
  }

  return (
    <div className={classes.picker}>
      <label htmlFor="name">{label}</label>
      <div className={classes.controls}>
        <div className={classes.preview}>
          {!pickedImage && <p>No image selected</p>}

          {pickedImage && (
            <Image src={pickedImage} alt="Image Selected by user" fill />
          )}
        </div>

        <input
          required
          ref={imageInput}
          id={name}
          name={name}
          className={classes.input}
          type="file"
          accept="image/png, image/jpeg"
          onChange={handleSelectedImage}
        />
        <button
          type="button"
          className={classes.button}
          onClick={handlePickClick}
        >
          Pick an Image
        </button>
      </div>
    </div>
  );
}

export default ImagePicker;
