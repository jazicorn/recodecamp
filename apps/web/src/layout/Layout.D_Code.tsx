import { useContext } from 'react'
import { ThemeContext } from '../context/ThemeContext'
//import { useAppSelector } from '../redux/reduxHooks.ts';
//import type { RootState } from '../redux/store.ts'
// hooks
import useWindowSize from '../hooks/useWindowSize';
import Transition from '../hooks/useTransition';
// components
import D_Editor from '../components/dashboard-code/D_Editor';
import D_Problem from '../components/dashboard-code/D_Problem';
import D_Console from '../components/dashboard-code/D_Console';

const Layout_D_Code = () => {
  const { isDesktopMDLG, isDesktopXL } = useWindowSize();
  const { state } = useContext(ThemeContext);
  const darkMode = state.darkMode;
  //const menuItem = useAppSelector((state:RootState) => state?.dashboard?.value);

  return (
    <div className="tw-h-full">
      <Transition>
      {/**Page Content | Position: Relative */}
        {isDesktopMDLG || isDesktopXL ? 
        <main className={`${darkMode ? '[&>*]:tw-backdrop-brightness-25 ' : '[&>*]:tw-backdrop-brightness-65'} 
          tw-bg-transparent tw-pb-1 tw-mt-1 tw-w-full tw-h-[82vh] tw-overflow-y-hidden [&>*]:tw-backdrop-blur-sm
          tw-grid tw-grid-rows-layout-dashboard-code tw-grid-cols-layout-dashboard-code tw-gap-1 tw-px-2 [&>*]:tw-rounded tw-border tw-border-transparent`}>
            <section className='tw-col-start-1 tw-col-end-1 tw-row-start-1 tw-row-end-3'>
                <D_Problem/>
            </section>
            <section className='tw-col-start-2 tw-col-end-3 tw-row-start-1 tw-row-end-1'>
                <D_Editor/>
            </section>
            <section className='tw-col-start-2 tw-col-end-3 tw-row-start-2 tw-row-end-3'>
                <D_Console/>
            </section>
        </main>
        :
        <main className={`${darkMode ? '[&>*]:tw-backdrop-brightness-25 ' : '[&>*]:tw-backdrop-brightness-65'} 
          tw-bg-transparent tw-pb-1 tw-mt-1 tw-w-full tw-h-full tw-grow [&>*]:tw-backdrop-blur-sm
          tw-grid tw-grid-rows-layout-dashboard-code-mobile tw-grid-cols-layout-dashboard-code-mobile tw-gap-1 tw-px-5 [&>*]:tw-rounded tw-border tw-border-transparent`}>
            {/** z index can't go higher than 50 to work*/}
            <section className='tw-row-start-1 tw-row-end-1'>
                <D_Problem/>
            </section>
             <section className='tw-row-start-2 tw-row-end-2'>
                <D_Editor/>
            </section>
            <section className='tw-row-start-3 tw-row-end-3'>
                <D_Console/>
            </section>
        </main>
        }
      </Transition>
    </div>
  )
}

export default Layout_D_Code
 