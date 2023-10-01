// Page: Dashboard Documentation
/**React */
import { useContext } from 'react';
//import { useContext, useState, useEffect } from 'react';
// import { useContext, useState, useMemo, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ThemeContext } from '../../../context/ThemeContext';
/**Custom Hooks */
//import useWindowSize from '../../../hooks/useWindowSize';
import Transition from '../../../hooks/useTransition';
/**Redux Hooks */
//import { useAppSelector } from '../../../redux/reduxHooks.ts';
//import type { RootState } from '../../../redux/store.ts';
//import { DEFAULT_USER } from '../../../utils/constants';
/**Custom Helpers */
import { detectTokenFromLocalStorage } from '../../../utils/common';

const D_Plans = () => {
  /**Detect Auth */
  const detectUser = detectTokenFromLocalStorage();
  /**Custom Hooks */
  //const { isMobile, isDesktopMDLG, isDesktopXL } = useWindowSize();
  const { state } = useContext(ThemeContext);
  const darkMode = state.darkMode;
  /** Reduc Store: User */
  // const getUser = useAppSelector((state:RootState) => state?.dashboard?.user);
  // const [ user, setUser ] = useState(DEFAULT_USER);
  
  // useEffect(() => {
  //   if(getUser !== undefined || Object.keys(getUser).length > 0) {
  //     setUser(getUser);
  //   }
  // },[getUser]);
  
  return (
    <div className={`${darkMode ? '[&_main>ul]:tw-text-campfire-blue [&_main>h4]:tw-text-campfire-neutral-300' : 
    '[&_main]:tw-text-campfire-neutral-700 [&_main>h4]:tw-text-campfire-neutral-600'} tw-w-full tw-h-full tw-p-2`}>
      <div className={`${darkMode ? 'tw-bg-campfire-neutral-600 tw-opacity-70 ' : 
      'tw-bg-campfire-neutral-300 tw-opacity-70 '} tw-w-full tw-h-full `}>
      <section className={`${darkMode ? '[&>main>ul]:tw-border-campfire-neutral-900': '[&>main>ul]:tw-border-campfire-blue'} 
       tw-py-4 tw-h-full tw-w-full tw-flex tw-flex-col tw-items-left
      [&>main>ul]:tw-h-fit [&>main>ul]:tw-px-2 [&>main>ul]:tw-border-l-2 [&>main>ul]:tw-ml-4 
      [&>main>ul]:tw-flex [&>main>ul]:tw-flex-col [&>main>ul]:tw-gap-2`}>
        <Transition>
          <h4 className={`${darkMode ? 'tw-text-campfire-neutral-300' : 'tw-text-campfire-neutral-700'}
          tw-border-campfire-purple-light tw-border-b tw-text-2xl tw-h-[36px] tw-w-full tw-pl-2 tw-mb-4`}>
          Search
          </h4>
        </Transition>
        {!detectUser ?
          <Transition> 
          <main className={`${darkMode ? "tw-text-campfire-neutral-300" : ""} tw-pl-2.5`}>Want to save your progress? 
          <span className={`${darkMode ? "hover:tw-text-campfire-neutral-300" : "hover:tw-text-campfire-neutral-700"} tw-text-campfire-blue tw-px-2`}><Link to="/auth/guest/login">Login</Link></span>or<span className={`${darkMode ? "hover:tw-text-campfire-neutral-300" : "hover:tw-text-campfire-neutral-700"} tw-text-campfire-blue tw-pl-2`}><Link to="/auth/guest/signup">Register</Link></span></main>
          </Transition> 
          :
           <main className="tw-px-4">
            <h4 className="tw-text-xl tw-text-campfire-blue">🏗️&nbsp;Coming Soon...</h4>
          </main>
        }
      </section>
      </div>
    </div>
  )
}

export default D_Plans