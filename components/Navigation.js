
import Link from "next/link"
import React from "react"
import ThemeSwitch from "./ThemeSwitch";
import { Transition } from '@headlessui/react'

const Navigation = ({ isShowing }) => {
    return (
        <div className="sticky top-0 z-20 py-2 bg-white md:py-6 md:mb-6 dark:bg-black">
            <div className="container px-4 mx-auto lg:max-w-4xl flex items-center justify-between">
                <Link href="/">
                    <Transition
                        appear={true}
                        show={true}
                        enter="transition-opacity duration-75"
                        enterFrom="opacity-0"
                        enterTo="opacity-100"
                        leave="transition-opacity duration-1500"
                        leaveFrom="opacity-100"
                        leaveTo="opacity-0"
                    >
                        <a
                            className={"font-medium tracking-wider transition-colors text-gray-900 hover:text-sky-500 uppercase dark:text-white"}
                        >
                            Pierre-Marie Ferrand-Eynard
                        </a>
                    </Transition>
                </Link>
                
                <ThemeSwitch />
            </div>
        </div>
    )
}

export default Navigation;