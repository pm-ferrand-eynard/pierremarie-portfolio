import Link from "next/link";
import React from "react";
import ThemeSwitch from "./ThemeSwitch";


const Navigation = () => {
  return (
    <div className="sticky top-0 z-20 py-2 bg-white md:py-6 md:mb-6 dark:bg-black">


      <div className="container px-4 mx-auto lg:max-w-4xl flex items-center justify-between ">
          {[
              ['Home','/','"#F3E753'],
              ['About me', '/about','#B6D3B9'],
              ['Projects', '/projects','#81C3D1'],
              ['Get in touch', '/contact','#BA597E'],
          ].map(([title,url])=>(
              <a href={url} className={
                "font-inconsolata-medium tracking-wider transition-colors text-gray-900 hover:text-sky-500 uppercase dark:text-white dark:hover:text-blue"
              } > {title}</a>
          ))}
        
        <ThemeSwitch />
      </div>
    </div>
  );
};

export default Navigation;
