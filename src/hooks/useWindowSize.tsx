import { useEffect, useState } from 'react';

export default function useWindowSize() {
  const [windowSize, setWindowSize] = useState<{
    width: number | undefined;
    height: number | undefined;
  }>({
    width: undefined,
    height: undefined,
  });

  useEffect(() => {
    // Handler to call on window resize
    function handleResize() {
      // Set window width/height to state
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    }

    // Add event listener
    window.addEventListener('resize', handleResize);

    // Call handler right away so state gets updated with initial window size
    handleResize();

    // Remove event listener on cleanup
    return () => window.removeEventListener('resize', handleResize);
  }, []); // Empty array ensures that effect is only run on mount

  return {
    windowSize,
    isMobile: typeof windowSize?.width === 'number' && windowSize?.width < 768,
    isMobileMD: typeof windowSize?.width === 'number' && windowSize?.width < 968,
    isDesktop: typeof windowSize?.width === 'number' && windowSize?.width >= 768,
    isDesktopMDLG: typeof windowSize?.width === 'number' && windowSize?.width >= 768 && windowSize?.width < 968,
    isDesktopMDXL: typeof windowSize?.width === 'number' && windowSize?.width >= 768 && windowSize?.width < 1280,
    isDesktopLG: typeof windowSize?.width === 'number' && windowSize?.width >= 968,
    isDesktopLGXL: typeof windowSize?.width === 'number' && windowSize?.width >= 968 && windowSize?.width < 1280,
    isDesktopXL: typeof windowSize?.width === 'number' && windowSize?.width >= 1280,
    isHMobile: typeof windowSize?.height === 'number' && windowSize?.height < 768,
    isHDesktop: typeof windowSize?.height === 'number' && windowSize?.height >= 768,
    isHDesktopMDLG: typeof windowSize?.height === 'number' && windowSize?.height >= 768 && windowSize?.height < 1280,
    isHDesktopXL: typeof windowSize?.height === 'number' && windowSize?.height >= 1280,
  };
}
