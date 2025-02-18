import { useRef } from "react";
import Image from "next/image";  // Import the Image component from next/image
import styles from "./ImageGrid1.module.css";

const ImageGrid1 = () => {
  const videoRef = useRef<HTMLVideoElement | null>(null);

  return (
    <div className={styles.imageGridContainer}>
      <div className={styles.videoWrapper}>
        <video 
          ref={videoRef} 
          className={styles.video} 
          muted 
          loop 
          autoPlay 
          playsInline
        >
          <source src="/Logo_video_cropped.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
      <div className={styles.imageContainer}>
        <Image
          src="/Gallery/EI2.jpg"
          alt="Image 1"
          className={styles.image}
          width={500}  // Specify a width
          height={300} // Specify a height
        />
        <Image
          src="/Gallery/EI3.jpg"
          alt="Image 2"
          className={styles.image}
          width={500}  // Specify a width
          height={300} // Specify a height
        />
        <Image
          src="/Gallery/EI4.jpg"
          alt="Image 3"
          className={styles.image}
          width={500}  // Specify a width
          height={300} // Specify a height
        />
        <Image
          src="/Gallery/EI5.jpg"
          alt="Image 4"
          className={styles.image}
          width={500}  // Specify a width
          height={300} // Specify a height
        />
      </div>
    </div>
  );
};

export default ImageGrid1;