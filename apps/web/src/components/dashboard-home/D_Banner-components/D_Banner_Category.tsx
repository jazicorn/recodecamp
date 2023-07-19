import { ThemeContext } from '../../context/ThemeContext';

export const D_Banner_Category = () => {
  //const { isMobile, isDesktopMDLG, isDesktopXL } = useWindowSize();
  const { state } = useContext(ThemeContext);
  const darkMode = state.darkMode;
  return (
    <section className={`${darkMode ? '' : '' } tw-ml-8 tw-mt-1`}>
    <h4 className="tw-text-3xl">Category</h4>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
    </p>
  </section> 
  )
}