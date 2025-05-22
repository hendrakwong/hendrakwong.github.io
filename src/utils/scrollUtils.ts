/**
 * Utility function to scroll to a specific element on the page
 * @param elementId - The ID of the element to scroll to
 * @param offset - Optional offset from the top of the element (default: 0)
 */
export const scrollToElement = (elementId: string, offset = 0): void => {
  const element = document.getElementById(elementId);
  
  if (element) {
    const elementPosition = element.getBoundingClientRect().top;
    const offsetPosition = elementPosition + window.pageYOffset - offset;
    
    window.scrollTo({
      top: offsetPosition,
      behavior: 'smooth'
    });
  }
};

/**
 * Check if an element is in the viewport
 * @param element - The element to check
 * @param offset - Optional offset (default: 0)
 */
export const isElementInViewport = (element: Element, offset = 0): boolean => {
  const rect = element.getBoundingClientRect();
  
  return (
    rect.top <= (window.innerHeight || document.documentElement.clientHeight) - offset &&
    rect.bottom >= 0 + offset
  );
};