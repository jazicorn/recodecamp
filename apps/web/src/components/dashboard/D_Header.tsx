import { useContext, useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { ThemeContext } from '../../context/ThemeContext'
//icons
import {
  IconHome,
} from '@tabler/icons-react';
// redux hooks
import { useAppSelector } from '../../redux/reduxHooks.ts';
import type { RootState } from '../../redux/store.ts';

const HeaderDashboard = () => {
  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;
  const account = useAppSelector((state:RootState) => state?.dashboard?.user);
  //console.log("account", account);
  const [ accountType, setAccountType] = useState('');
  const accountSub = () => {
    if(account !== undefined ) {
      if(Object.keys(account).length !== 0) {
        const sub = account._SUBSCRIPTION.split(',')[1];
        const subType = sub.charAt(0).toUpperCase() + sub.slice(1);
        //console.log(subType)
        setAccountType(subType);
      }
    } else {
      setAccountType('No Account');
    }
  }
  useEffect(() => {
    accountSub();
  });

  return (
    <div className={`${darkMode ? '[&>*]:tw-backdrop-brightness-25' : '[&>*]:tw-backdrop-brightness-85 [&>*]:tw-backdrop-blur-sm'
      } tw-font-mono tw-flex tw-flex-col tw-w-full tw-px-5 tw-mt-2 tw-relative tw-min-h-[44px] `}>
      <header
        className={`${darkMode ? "tw-text-campfire-neutral-500" : ""} tw-grow-0 tw-h-full tw-w-full tw-pl-4 tw-backdrop-brightness-65 tw-px-2 tw-w-full tw-flex tw-flex-row tw-gap-2 tw-justify-start tw-items-center tw-rounded`}
      >
        <h5 className="tw-font-space_grotesk_medium tw-pt-1.5 tw-text-base">
          Mode : <span className={`${darkMode ? "tw-text-campfire-purple-300" : "tw-text-campfire-purple-400"} tw-pl-1`}>{accountType}</span>
        </h5>
      </header>
    </div>
  )
}

export default HeaderDashboard
