// Image loader utility to ensure images load correctly
export const preloadImage = (src: string): Promise<void> => {
  return new Promise((resolve, reject) => {
    const img = new Image();
    img.onload = () => resolve();
    img.onerror = () => reject(new Error(`Failed to load image: ${src}`));
    img.src = src;
  });
};

export const getImageUrl = (src: string): string => {
  // Ensure the image URL is correct
  if (!src) {
    console.error('Image source is undefined');
    return '';
  }
  return src;
};
