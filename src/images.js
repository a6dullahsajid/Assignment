// Import local images
import image1 from './assets/galleryImages/image1.jpg';
import image2 from './assets/galleryImages/image2.jpg';
import image3 from './assets/galleryImages/image3.jpeg';
import image4 from './assets/galleryImages/image4.jpg';
import image5 from './assets/galleryImages/image5.jpg';

export const galleryImages = [
  {
    id: 1,
    src: image1,
    alt: 'image1',
    title: 'image1'
  },
  {
    id: 2,
    src: image2,
    alt: 'image2',
    title: 'image2'
  },
  {
    id: 3,
    src: image3,
    alt: 'image3',
    title: 'image3'
  },
  {
    id: 4,
    src: image4,
    alt: 'image4',
    title: 'image4'
  },
  {
    id: 5,
    src: image5,
    alt: 'image5',
    title: 'image5'
  }
];

export const addNewImage = (currentImages, file) => {
  const imageUrl = URL.createObjectURL(file);
  
  const newImage = {
    id: currentImages.length + 1,
    src: imageUrl,
    alt: file.name || `image ${currentImages.length + 1}`,
    title: file.name || `image ${currentImages.length + 1}`
  };
  
  return [...currentImages, newImage];
};
