// Dashboard Calender
import { useContext, useState, useMemo, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ThemeContext } from '../../../context/ThemeContext';
import useWindowSize from '../../../hooks/useWindowSize';
import Transition from '../../../hooks/useTransition';
// redux hooks
import { useAppSelector } from '../../../redux/reduxHooks.ts';
import type { RootState } from '../../../redux/store.ts';
//import bcrypt from 'bcryptjs';
//avatars
import { createAvatar } from '@dicebear/core';
import { pixelArt } from '@dicebear/collection';

const D_Settings_User = () => {
  const { isMobile, isMobileMD } = useWindowSize();
  const { state } = useContext(ThemeContext);
  const darkMode = state.darkMode;

  /** User from redux store */
  const getUser = useAppSelector((state:RootState) => state?.dashboard?.user);
  //console.log("getUser:", getUser);
  
  /** empty user placeholder values*/
  const emptyUser = {
    _ID: '',
    _CREATED_AT: new Date,
    _UPDATED_AT: new Date,
    _ACCESS_TOKEN: '',
    _FIRST_LOGIN: false,
    _ADMIN: false,
    _SUBSCRIPTION: "[1000, 'Unknown']",
    _IP_ADDRESS: '',
    _PASSCODE: '',
    _PASSCODE_CONFIRMED: false,
    _EMAIL: '',
    _EMAIL_CONFIRMED: false,
    _EMAIL_PASSCODE: '',
    _PASSWORD: '',
    _DEFAULT_LANGUAGE: '',
    _DEFAULT_ROUTE: '',
    _POINTS_TOTAL: 0,
    _POINTS_JAVASCRIPT: 0,
    _POINTS_JAVA: 0 ,
    _POINTS_PYTHON: 0,
    _COURSES: '',
  }

  /**created userobj from redux data store*/
  const userObj = () => { 
    if(getUser !== undefined) {
      //console.log("getUser:", getUser)
      if(Object.keys(getUser).length !== 0) {
        //console.log("user");
        return getUser
      } else {
      //console.log("no user");
      return emptyUser
    }
    } else {
      //console.log("no user");
      return emptyUser
    }
  };

  /** set values from user obj*/
  const initialUser = userObj();
  //console.log("initialUser", initialUser);
  /**User Id */
  const userId = useRef(initialUser._ID);
  const userIdHide = "********-****-****-****-************";
  const [ userIdReveal, setUserIdReveal ]= useState(false);
  const userIdRevealButton = (e) => {
    e.preventDefault();
    setUserIdReveal(!userIdReveal);
  };
  /**User Dates */
  const userCreatedDate = new Date(initialUser._CREATED_AT).toDateString();
  const userCreated = useRef(userCreatedDate);
  const userUpdatedDate = new Date(initialUser._UPDATED_AT).toDateString();
  const userUpdated = useRef(userUpdatedDate);
  /**User Subscription */
  const sub = initialUser._SUBSCRIPTION.split(',')[1];
  const subType = sub.charAt(0).toUpperCase() + sub.slice(1);
  const userSubType = useRef(subType);
  /**User Email */
  const userEmail = useRef(initialUser._EMAIL);
  const userRevealButton = (e) => {
    e.preventDefault();
    console.log("Password Reset");
  };

  /**Generate Avatar */
  const avatar = useMemo(() => {
    return createAvatar(pixelArt , {
      size: 128,
      // ... other options
    }).toDataUriSync();
  }, []);

  return (
    <div className={`${darkMode ? '[&_main>ul]:tw-text-campfire-blue [&_main>h4]:tw-text-campfire-neutral-300' : 
    '[&_main]:tw-text-campfire-neutral-700 [&_main>h4]:tw-text-campfire-neutral-600'} tw-w-full tw-h-full tw-p-2`}>
      <div className={`${darkMode ? 'tw-bg-campfire-neutral-600 tw-opacity-70 ' : 
      'tw-bg-campfire-neutral-300 tw-opacity-70 '} tw-w-full tw-h-full `}>
      <article className={`${darkMode ? '[&>main>ul]:tw-border-campfire-neutral-900': '[&>main>ul]:tw-border-campfire-blue'} 
       tw-pt-4 tw-pb-1 tw-h-full tw-w-full tw-flex tw-flex-col tw-items-left
      [&>main>ul]:tw-h-fit [&>main>ul]:tw-px-2 [&>main>ul]:tw-border-l-2 [&>main>ul]:tw-ml-4 
      [&>main>ul]:tw-flex [&>main>ul]:tw-flex-col [&>main>ul]:tw-gap-2 [&>main]:tw-px-2`}>
        <Transition>
          <h4 className={`${darkMode ? 'tw-text-campfire-neutral-300' : 'tw-text-campfire-neutral-700'} tw-border-campfire-purple-light
            tw-border-b tw-text-2xl tw-h-[36px] tw-w-full tw-pl-2 `}>
            Settings: User
          </h4>
        </Transition>
        
        {initialUser._ID.length === 0 ?
          <Transition> 
          <main className={`${darkMode ? "tw-text-campfire-neutral-300" : ""} tw-pl-2.5`}>Want to save your progress? 
          <span className={`${darkMode ? "hover:tw-text-campfire-neutral-300" : "hover:tw-text-campfire-neutral-700"} tw-text-campfire-blue tw-px-2`}><Link to="/auth/guest/login">Login</Link></span>or<span className={`${darkMode ? "hover:tw-text-campfire-neutral-300" : "hover:tw-text-campfire-neutral-700"} tw-text-campfire-blue tw-pl-2`}><Link to="/auth/guest/signup">Register</Link></span></main>
          </Transition> 
          :
          <main className={`${darkMode ? 'tw-text-campfire-neutral-300' : 'tw-text-campfire-neutral-700'}
          tw-overflow-auto tw-pt-2 tw-flex tw-flex-col tw-gap-y-4 tw-h-full tw-w-full`}>
            {/** */}
            <Transition>
            <section className={`${darkMode ? "" : ""} ${isMobile ? "tw-basis-1/2" : "tw-basis-2/3"} ${isMobileMD ? "tw-flex-col [&>p]:tw-basis-5/12 [&>table]:tw-basis-7/12" 
            : "tw-flex-row [&>p]:tw-w-[20em] [&>table]:"} tw-flex `}>
              {/* {isMobile ? <p className={`tw-self-center tw-py-2`}><img src={avatar} alt="Avatar"/></p> 
              :<p className={`tw-self-center tw-py-2`}><img src={avatar} alt="Avatar" /></p> } */}
              <div className="tw-pt-4">
                <table className={`${darkMode ? "[&>tbody>tr>th]:tw-bg-campfire-neutral-500 [&>tbody>tr>th]:" : "[&>tbody>tr>th]:tw-border-campfire-neutral-500  [&>tbody>tr>th]:tw-bg-campfire-neutral-100"} 
                ${isMobile ? "[&>tbody>tr]:tw-flex-col [&>tbody>tr]:tw-flex [&>tbody>tr>td]:tw-pt-1 [&>tbody>tr>td]:tw-pb-4 [&>tbody>tr>th]:tw-py-1 tw-justify-center tw-m-auto" : 
                "[&>tbody>tr]:tw-flex-row [&>tbody>tr>td]:tw-pl-2 [&>tbody>tr>td]:tw-py-2 [&>tbody>tr>th]:tw-py-2 "}  
                tw-h-fit tw-min-w-fit tw-text-base tw-text-left tw-table-fixed [&>tbody>tr>td]:tw-text-sm [&>tbody>tr>th]:tw-pl-2
                [&>tbody>tr>th]:tw-border-b `}>
                  <tbody>
                    <tr>
                      <th>User ID</th>
                      <td className="">{userIdReveal === true ? <span>{userIdHide}</span> : <span>{userId.current}</span>}&nbsp;
                        <button onClick={(e) => userIdRevealButton(e)} 
                        className={`${darkMode ? "hover:tw-bg-campfire-neutral-500" : "tw-border-campfire-neutral-700 hover:tw-bg-campfire-neutral-400/40"} 
                        tw-font-space_mono tw-border tw-py-0.5 tw-px-3`}>
                        {userIdReveal === true ? <span>Show</span> : <span>Hide</span> }
                        </button>
                      </td>
                    </tr>
                    <tr>
                      <th>User Mode</th>
                      <td>{userSubType.current}</td>
                    </tr>
                    <tr>
                      <th>User Created</th>
                      <td>{userCreated.current}</td>
                    </tr>
                    <tr>
                      <th>User Last Login</th>
                      <td>{userUpdated.current}</td>
                    </tr>
                    <tr>
                      <th>User Email</th>
                      <td>{userEmail.current}</td>
                    </tr>
                    <tr>
                      <th>User Password</th>
                      <td className={`${isMobile ? "[&>button]:tw-my-1 [&>button]:tw-py-1" : ""}`}>
                        <button onClick={(e) =>userRevealButton(e)} className={`${darkMode ? "hover:tw-bg-campfire-neutral-500 hover:tw-text-campfire-neutral-100 tw-border-campfire-purple-300 tw-text-campfire-purple-300" 
                        : "hover:tw-bg-campfire-neutral-400/30 hover:tw-text-campfire-neutral-200 tw-border-campfire-purple-400 tw-text-campfire-purple-400"}  
                        ${isMobile ? "tw-w-full" : ""}  tw-font-space_mono tw-border tw-py-0.5 tw-px-3 tw-mr-2`}>
                          Update Password
                        </button>
                        <button onClick={(e) =>userRevealButton(e)} className={`${darkMode ? "hover:tw-bg-campfire-neutral-500" : "tw-border-campfire-neutral-700 hover:tw-bg-campfire-neutral-400/40"}  ${isMobile ? "tw-w-full" : ""} hover:tw-text-red-400 tw-font-space_mono tw-border tw-py-0.5 tw-px-3`}>
                          Reset Password
                        </button>
                      </td>
                    </tr>
                  </tbody>
                </table>
                <div className={`${isMobile ? "tw-pt-4" : "tw-pt-10"} tw-w-full `}>
                  <button className={`${darkMode ? "hover:tw-bg-campfire-neutral-400/50 hover:tw-text-campfire-neutral-50"
                  : "hover:tw-bg-campfire-neutral-400/50 hover:tw-text-campfire-neutral-100"} tw-w-full tw-border tw-border-red-400 tw-font-space_mono tw-text-lg tw-text-red-400`}>Account Deletion</button>
                  <p className="tw-w-full tw-text-center">🚨!!!Warning!!! This Action Is Permanent🚨</p>
                </div>
              </div>
            </section>
            </Transition>
            <section className={`${darkMode ? "custom-bg-waves-neutral-darkest-inverse tw-opacity-30 tw-border-neutral-500" : "custom-bg-waves-neutral-lighest tw-opacity-40 tw-border-campfire-neutral-700"} ${isMobile ? "tw-basis-1/3" : "tw-basis-1/2"}
            tw-h-full tw-w-full tw-flex tw-flex-col tw-rounded`}>
            </section>
          </main>
        }
      </article>
      </div>
    </div>
  )
}

export default D_Settings_User
