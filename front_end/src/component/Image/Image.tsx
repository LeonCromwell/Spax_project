import React, { useState, forwardRef, ImgHTMLAttributes } from "react";

import images from "../../assets/images";

interface ImageProps extends ImgHTMLAttributes<HTMLImageElement> {
  src: string;
  alt: string;
  fallback?: string;
}

const Image = forwardRef<HTMLImageElement, ImageProps>(
  (
    {
      src,
      alt,
      fallback: customFallback = images.noImages,
      className,
      ...props
    },
    ref
  ) => {
    const [fallbackSrc, setFallbackSrc] = useState("");

    const onError = () => {
      setFallbackSrc(customFallback);
    };

    return (
      <img
        ref={ref}
        className={
          "w-full h-full object-cover" + (className ? ` ${className}` : "")
        }
        src={fallbackSrc || src}
        alt={alt}
        {...props}
        onError={onError}
      />
    );
  }
);

export default Image;
