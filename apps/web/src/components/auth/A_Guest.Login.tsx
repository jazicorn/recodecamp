import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { ThemeContext } from '../../context/ThemeContext';
// hooks
import useWindowSize from '../../hooks/useWindowSize';
import Transition from '../../hooks/useTransition';
// images
import { ReactComponent as Logo } from '../../assets/icons/logos/campfire-2-svgrepo-com.svg';

//const prodURL = import.meta.env.PROD;

interface FormInputs {
  multipleErrorInput: string
}

const SignIn = () => {
  const { isMobile } = useWindowSize();
  const { state } = useContext(ThemeContext);
  const darkMode = state.darkMode;

  const {
    register,
    handleSubmit,
  } = useForm<FormInputs>({
    criteriaMode: "all",
  })
  const onSubmit = handleSubmit((data) => {
    guestLogin(data);
  });

  /** Guest Login */
  const guestLogin = async (data) => {
    try {
      let url;
      if(import.meta.env.PROD) {
        url = `${baseURL}/guest/login`;
      } else {
        url = `/api/guest/login`;
      }
      await fetch(url, { 
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
      }).then(function(response) {
          console.log(response)
          if(response.status === 200) {
            console.log("🎉 Guest Logged In!");
            return response;
          }
      });
    } catch(error) {
      console.log("❌ Guest Creation Failed")
      console.log(error);
    }
  };

  return (
    <>
      <div className={`${darkMode ? '' : ''} tw-h-full tw-w-full tw-px-6
      tw-flex tw-flex-col tw-place-items-center tw-place-content-center`}>
        <Transition>
          <div className={`${darkMode ? 'tw-bg-gray-400/70 tw-border-campfire-blue-600' : 'tw-bg-gray-200/80 tw-border-campfire-blue-200'} ${isMobile ? 'tw-w-[24em]' : 'tw-w-[30em]'} tw-pt-2 tw-pb-6
          [&>div]:tw-h-[3em] [&>div]:tw-flex tw-h-full
           tw-border-2 `}>
            <div className={`${darkMode ? '' : ''} tw-flex tw-flex-row tw-place-items-baseline tw-place-content-end tw-w-full tw-pb-4 tw-px-2 tw-mb-4 `}>
              <p className="tw-w-fit tw-text-xs">
                New User?:&nbsp;
                <Link to={'/auth/guest/register'} className={`${darkMode ? 'hover:tw-text-campfire-neutral-200' : 'hover:tw-text-campfire-neutral-700'} tw-text-campfire-blue-300 tw-font-space_mono_bold`}>
                  Register
                </Link>
              </p>
            </div>
            <div to={`/`} className="tw-flex tw-flex-row tw-place-content-center tw-font-space_mono">
                <span className="tw-pt-1 ">
                    <Logo style={{ height: 28, width: 28 }} />
                </span>
                <h5 className={`tw-text-3xl tw-px-2 tw-pt-1 ${darkMode ? 'hover:tw-text-campfire-neutral-300' : 'hover:tw-text-campfire-blue'}`}>
                    ReCodeCamp
                </h5>
            </div>
            <div className={`${darkMode ? '' : ''} tw-flex tw-flex-row tw-place-items-baseline tw-place-content-between tw-border-campfire-purple-light tw-border-b tw-h-[52px] tw-w-full tw-pt-4 tw-px-2 tw-my-4 `}>
              <h4 className="tw-text-xl tw-w-fit tw-place-self-left">
                Guest Login
              </h4>
            </div>
            <form onSubmit={onSubmit}>
              <ul className={`${darkMode ? '[&>li>label]:tw-bg-campfire-neutral-300 [&>li>input]:tw-bg-campfire-neutral-200' : ''} [&>li]:tw-flex [&>li]:tw-flex-col 
              [&>li]:tw-p-2 [&>li>input]:tw-h-[1.6em]
              [&>li>label]:tw-px-1 [&>li>label]:tw-w-full [&>li>label]:tw-border-campfire-blue-200
              [&>li>label]:tw-w-[10em] [&>li>label]:tw-bg-neutral-100 [&>li>label]:tw-border-y `}>
                <li className="">
                  <label className="tw-text-campfire-blue">Email:</label>
                  <input type="email" {...register('_GUEST_EMAIL')}/>
                </li>
                <li className="">
                  <label>Password:</label>
                  <input type="email" {...register('_GUEST_PASSWORD')}/>
                </li>
                <li className={`${darkMode ? 'hover:tw-bg-campfire-neutral-400/70' : 'hover:tw-bg-campfire-neutral-300/70'} tw-w-full 
                tw-border-y tw-border-campfire-purple-light`}>
                  <button type="submit" className={`tw-font-roboto_mono tw-text-base tw-w-full`}>
                    Login
                  </button>
                </li>
              </ul>
            </form>
          </div>
        </Transition>
      </div>
    </>
  )
}

export default SignIn
