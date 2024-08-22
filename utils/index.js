export const checkImageURL = (url) => {
  if (!url) return false;

  // Check if the URL is a valid HTTP/HTTPS URL
  const isValidHttpUrl = (string) => {
    try {
      new URL(string);
      return true;
    } catch (error) {
      return false;
    }
  };

  // Check if the URL has a valid image extension or is a valid URL
  const pattern = new RegExp(
    "^https?:\\/\\/.+\\.(png|jpg|jpeg|bmp|gif|webp)$",
    "i"
  );

  return pattern.test(url) || isValidHttpUrl(url);
};
