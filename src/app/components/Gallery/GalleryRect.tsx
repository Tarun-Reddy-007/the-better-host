import styles from './GalleryRect.module.css';

const imageData = [
  {
    src: "https://images.unsplash.com/photo-1631451095765-2c91616fc9e6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxNDU4OXwwfDF8cmFuZG9tfHx8fHx8fHx8MTYzNDA0OTI3Nw&ixlib=rb-1.2.1&q=80&w=400",
    alt: "Volcano and lava field against a stormy sky",
    caption: "Mountains and volcanos"
  },
  {
    src: "https://images.unsplash.com/photo-1633621533308-8760aefb5521?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxNDU4OXwwfDF8cmFuZG9tfHx8fHx8fHx8MTYzNDA1MjAyMQ&ixlib=rb-1.2.1&q=80&w=400",
    alt: "Guy on a bike ok a wooden bridge with a forest backdrop",
    caption: "Adventure getaways"
  },
  {
    src: "https://images.unsplash.com/photo-1633635146842-12d386e64058?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxNDU4OXwwfDF8cmFuZG9tfHx8fHx8fHx8MTYzNDA1MjA5OA&ixlib=rb-1.2.1&q=80&w=400",
    alt: "Person standing alone in a misty forest",
    caption: "Forest escapes"
  },
  {
    src: "https://images.unsplash.com/photo-1568444438385-ece31a33ce78?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxNDU4OXwwfDF8cmFuZG9tfHx8fHx8fHx8MTYzNDA1MjA5OA&ixlib=rb-1.2.1&q=80&w=400",
    alt: "Person hiking on a trail through mountains while taking a photo with phone",
    caption: "Hiking trails"
  },
  {
    src: "https://images.unsplash.com/photo-1633515257379-5fda985bd57a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxNDU4OXwwfDF8cmFuZG9tfHx8fHx8fHx8MTYzNDA1MjA5OA&ixlib=rb-1.2.1&q=80&w=400",
    alt: "Street scene with person walking and others on motorbikes, all wearing masks",
    caption: "Street scenes"
  },
  {
    src: "https://images.unsplash.com/photo-1633209931146-260ce0d16e22?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxNDU4OXwwfDF8cmFuZG9tfHx8fHx8fHx8MTYzNDA1MjA5OA&ixlib=rb-1.2.1&q=80&w=400",
    alt: "Fashionable-looking girl with blond hair and pink sunglasses",
    caption: "Trending"
  }
];

export default function GalleryRect() {
  return (
    <ul className={styles.gallery}>
      {imageData.map((image, index) => (
        <li key={index} className={styles.galleryItem}>
          <a href="#" className={styles.galleryLink}>
            <figure className={styles.figure}>
              <img
                src={image.src}
                alt={image.alt}
                className={styles.image}
              />
              <figcaption className={styles.caption}>{image.caption}</figcaption>
            </figure>
          </a>
        </li>
      ))}
    </ul>
  );
}
