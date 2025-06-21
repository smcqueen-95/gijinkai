/* Responsive testing script */

document.addEventListener('DOMContentLoaded', function() {
  console.log('Running responsive testing script...');
  
  // Log viewport size
  function logViewportSize() {
    console.log(`Current viewport: ${window.innerWidth}px × ${window.innerHeight}px`);
  }
  
  // Test responsive breakpoints
  function testBreakpoints() {
    const breakpoints = [
      { name: 'Mobile S', width: 320 },
      { name: 'Mobile M', width: 375 },
      { name: 'Mobile L', width: 425 },
      { name: 'Tablet', width: 768 },
      { name: 'Laptop', width: 1024 },
      { name: 'Laptop L', width: 1440 },
      { name: 'Desktop', width: 1920 }
    ];
    
    console.log('Testing responsive breakpoints:');
    breakpoints.forEach(bp => {
      const mediaQuery = window.matchMedia(`(min-width: ${bp.width}px)`);
      console.log(`${bp.name} (${bp.width}px): ${mediaQuery.matches ? 'Active' : 'Inactive'}`);
    });
  }
  
  // Check for overflow issues
  function checkOverflowIssues() {
    const body = document.body;
    const html = document.documentElement;
    
    const bodyWidth = body.scrollWidth;
    const viewportWidth = window.innerWidth;
    
    if (bodyWidth > viewportWidth) {
      console.warn('Possible horizontal overflow detected!');
      console.log(`Body width: ${bodyWidth}px, Viewport width: ${viewportWidth}px`);
      
      // Find elements that might be causing overflow
      const allElements = document.querySelectorAll('*');
      const overflowingElements = Array.from(allElements).filter(el => {
        const rect = el.getBoundingClientRect();
        return rect.right > viewportWidth || rect.width > viewportWidth;
      });
      
      console.log('Potentially overflowing elements:');
      overflowingElements.forEach(el => {
        console.log(el, `Width: ${el.getBoundingClientRect().width}px`);
      });
    } else {
      console.log('No horizontal overflow issues detected.');
    }
  }
  
  // Check image responsiveness
  function checkImageResponsiveness() {
    const images = document.querySelectorAll('img');
    console.log(`Testing ${images.length} images for responsiveness...`);
    
    images.forEach(img => {
      if (!img.classList.contains('responsive-img') && 
          !img.style.maxWidth && 
          img.style.width !== '100%') {
        console.warn('Image may not be responsive:', img);
      }
    });
  }
  
  // Check touch targets for mobile
  function checkTouchTargets() {
    if (window.innerWidth <= 640) {
      const interactiveElements = document.querySelectorAll('a, button, input, select, textarea');
      console.log(`Testing ${interactiveElements.length} interactive elements for touch target size...`);
      
      interactiveElements.forEach(el => {
        const rect = el.getBoundingClientRect();
        if (rect.width < 44 || rect.height < 44) {
          console.warn('Element may be too small for touch interaction:', el);
        }
      });
    }
  }
  
  // Run tests
  logViewportSize();
  testBreakpoints();
  checkOverflowIssues();
  checkImageResponsiveness();
  checkTouchTargets();
  
  // Listen for resize events
  window.addEventListener('resize', function() {
    console.log('Window resized!');
    logViewportSize();
  });
  
  console.log('Responsive testing complete!');
});
