import { useEffect, useState } from 'react';
import IconMoon from '../assets/icons/icon-moon';
import IconSun from '../assets/icons/icon-sun';

export default function Header() {
   const [isDark, setIsDark] = useState(false);

   const toggleTheme = () => {
      setIsDark(!isDark);
      document.documentElement.classList.toggle('dark');
   };

   useEffect(() => {
      const mq = window.matchMedia('(prefers-color-scheme: dark)');

      if (mq.matches) {
         setIsDark(true);
         document.documentElement.classList.add('dark');
      }

      // This callback will fire if the perferred color scheme changes without a reload
      mq.addEventListener('change', (evt) => setIsDark(evt.matches));
   }, []);

   return (
      <>
         <img
            src={
               isDark
                  ? '/assets/images/bg-desktop-dark.jpg'
                  : '/assets/images/bg-desktop-light.jpg'
            }
            alt="banner"
            className="w-full min-h-[340px] aspect-auto absolute top-0 left-0 z-[-8] hidden sm:block"
         />
         <img
            src={
               isDark
                  ? '/assets/images/bg-mobile-dark.jpg'
                  : '/assets/images/bg-mobile-light.jpg'
            }
            alt="banner"
            className="w-full min-h-[340px] aspect-auto absolute top-0 left-0 z-[-10] sm:hidden"
         />
         <div className="flex justify-between w-[80%] max-w-screen-sm ml-auto mr-auto mt-[5rem] mb-[0.5rem]">
            <h1 className="text-[2.5rem] text-white tracking-[0.5rem] font-bold">
               TODO
            </h1>
            <button className="bg-transparent" onClick={toggleTheme}>
               {isDark ? <IconMoon /> : <IconSun />}
            </button>
         </div>
         <div className="z-[-999] fixed bg-background w-full h-full" />
      </>
   );
}
