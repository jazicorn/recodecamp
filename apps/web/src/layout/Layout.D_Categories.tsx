// Categories
import { useContext } from 'react'
import { ThemeContext } from '../context/ThemeContext'
// hooks
import useWindowSize from '../hooks/useWindowSize';
import Transition from '../hooks/useTransition';
// components
import ErrorDashboard from '../components/dashboard/error';
import LoadingDashboard from '../components/dashboard/loading';
// components
import D_Category from '../components/dashboard-categories/D_Category';
import D_Instructions_Category from '../components/dashboard-categories/D_Instructions_Category';
/**React Query */
import { useQuery, QueryClient } from "@tanstack/react-query";

//const baseURL = import.meta.env.VITE_API_BASE_URL;

const Layout_D_Categories = () => {
  const { isDesktopMDLG, isDesktopXL } = useWindowSize();
  const { state } = useContext(ThemeContext);
  const darkMode = state.darkMode;

  async function getCategories() {
    try {
      const res = await fetch(`/api/categories`);
      const resJSON = res.json();
      //setStuff(resJSON);
      return resJSON;
    } catch(error) {
      console.log(error);
    }
  };

  /** Generate Categories */
  const queryCache = new QueryClient();
  queryCache.clear();
  const { isLoading, isError, error, data} = useQuery(['categoriesData'], getCategories, {
    refetchOnWindowFocus: false,
  });

  if (isLoading) return <LoadingDashboard/>

  if (isError) return <ErrorDashboard error={error.message}/>

  return (
    <div className="tw-h-full">
      <Transition>
      {/**Page Content | Position: Relative */}
        {isDesktopMDLG || isDesktopXL ? 
        <main className={`${darkMode ? '[&>*]:tw-backdrop-brightness-25 ' : '[&>*]:tw-backdrop-brightness-65'} 
          tw-bg-transparent tw-pb-1 tw-w-full tw-h-[85vh] tw-overflow-y-hidden [&>*]:tw-backdrop-blur-sm
          tw-grid tw-grid-rows-[2.5em_auto] tw-gap-1 [&>*]:tw-rounded tw-border tw-border-transparent`}>
            <D_Instructions_Category/>
            {
              data.data !== undefined && data?.data.map((category, i) => {
                return (<section key={i} className=''><D_Category category={category}/></section>)
              })
            }
        </main>
        :
        <main className={`${darkMode ? '[&>*]:tw-backdrop-brightness-25 ' : '[&>*]:tw-backdrop-brightness-65'} 
          tw-bg-transparent tw-pb-1 tw-w-full tw-h-full tw-grow [&>*]:tw-backdrop-blur-sm
          tw-grid tw-grid-rows-[5em_auto] tw-gap-1 [&>*]:tw-rounded tw-border tw-border-transparent`}>
            <D_Instructions_Category/>
            {
              data.data !== undefined && data?.data.map((category, i) => {
                return (<section key={i} className=''><D_Category  category={category}/></section>)
              })
            }
        </main>
        }
      </Transition>
    </div>
  )
}

export default Layout_D_Categories
 