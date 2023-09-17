import { GalleryItem, GalleryImg } from './ImageGalleryItem.styled';

export const ImageGalleryItem = ({
  webformatURL,
  largeImageURL,
  getModalPhoto,
  tags,
}) => {
  return (
    <GalleryItem onClick={() => getModalPhoto(largeImageURL)}>
      <GalleryImg src={webformatURL} alt={tags} />
    </GalleryItem>
  );
};
