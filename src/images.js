// Gallery images data
export const galleryImages = [
  {
    id: 1,
    src: 'https://picsum.photos/150/100?random=1',
    alt: 'Architecture 1',
    title: 'Modern Building'
  },
  {
    id: 2,
    src: 'https://picsum.photos/150/100?random=2',
    alt: 'Architecture 2',
    title: 'Urban Design'
  },
  {
    id: 3,
    src: 'https://picsum.photos/150/100?random=3',
    alt: 'Architecture 3',
    title: 'Contemporary Structure'
  },
  {
    id: 4,
    src: 'https://picsum.photos/150/100?random=4',
    alt: 'Architecture 4',
    title: 'Glass Facade'
  },
  {
    id: 5,
    src: 'https://picsum.photos/150/100?random=5',
    alt: 'Architecture 5',
    title: 'Skyline View'
  },
  {
    id: 6,
    src: 'https://picsum.photos/150/100?random=6',
    alt: 'Architecture 6',
    title: 'Industrial Design'
  }
];

// Simple function to add a new image from file
export const addNewImage = (currentImages, file) => {
  // Create a URL for the selected file
  const imageUrl = URL.createObjectURL(file);
  
  // Create new image object
  const newImage = {
    id: currentImages.length + 1,
    src: imageUrl,
    alt: file.name || `image ${currentImages.length + 1}`,
    title: file.name || `image ${currentImages.length + 1}`
  };
  
  // Return the current images plus the new one
  return [...currentImages, newImage];
};
