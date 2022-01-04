import React from "react";
import Image from "next/image";
import profile from "../public/profile.jpg";
import { RoughNotation, RoughNotationGroup } from "react-rough-notation";
import { RainbowHighlight } from "./RainbowHighlight";
import { CircleHighlight } from "./CircleHighlight";
import {
  LightBulbIcon,
  LibraryIcon,
  ChartBarIcon,
  ShareIcon,
} from "@heroicons/react/outline";

import { Transition } from "@headlessui/react";
const About = () => {
  const colors = ["#B6D3B9", "#81C3D1", "#BA597E"];

  return (
    <div className="container px-4 mx-auto">
      <div className="lg:space-x-5 lg:flex lg:flex-row item-center lg:-mx-4 flex flex-col-reverse text-center lg:text-left">
        <div className=" p-1 lg:px-4 lg:mt-12 ">
          <Transition
            appear={true}
            show={true}
            enter="transform-transition duration-[1700ms]"
            enterFrom="opacity-0 -translate-x-80 "
            enterTo="opacity-100 translate-x-1"
            leave="transition duration-[150ms]"
            leaveFrom="opacity-0 translate-x-0"
            leaveTo="opacity-0 translate-x-0"
          >
            <h1 className="font-inconsolata pb-2 text-4xl  text-gray-900 lg:text-5xl dark:text-white">
              Pierre-Marie Ferrand-Eynard
            </h1>
          </Transition>
          <RoughNotationGroup show={true} order={1}>
            <RainbowHighlight color={colors[1]}>
              <h2 className="font-inconsolata text-3xl  text-gray-900 lg:text-4xl lg:mt-1 dark:text-white">
                Developpeur Web FullStack
              </h2>
            </RainbowHighlight>
          </RoughNotationGroup>
          <div className="mt-6 text-gray-800 dark:text-white flex-col ">
            <div className="font-inconsolata text-sm flex-row   ">
              <p className="mb-4 inline-block text-justify wid ">
                <span className="inline-flex items-baseline">
                  <LightBulbIcon className="h-8 w-8 mr-2 text-yellow  " />
                </span>
                Après plusieurs années à voyager, découvrir des métiers divers
                et variés, je me retrouve dans un domaine qui me correspond: le
                développement web.
              </p>
            </div>
            <div className="font-inconsolata text-sm flex-row">
              <p className="mb-4 inline-block text-justify ">
                <span className="inline-flex items-baseline">
                  <LibraryIcon className="h-8 w-8 mr-2 text-green" />
                </span>
                De nature curieux et persévérant, j'ai fini par trouver une
                formation complète chez O'Clock (certifiée Grande École du
                Numérique), moderne et intensive, pour apprendre le
                développement web.
              </p>
            </div>

            <div className="font-inconsolata text-sm flex-row">
              <p className="mb-4 inline-block text-justify ">
                <span className="inline-flex items-baseline">
                  <ChartBarIcon className="h-8 w-8 mr-2 text-blue" />
                </span>
                5 mois intensifs à manipuler du HTML, CSS, JS & SQL dont 1 mois
                en spécialisation REACT.
              </p>
            </div>
            <div className="font-inconsolata text-sm flex-row">
              <p className="mb-4 inline-block text-justify ">
                <span className="inline-flex items-baseline">
                  <ShareIcon className="h-8 w-8 mr-2 text-pink" />
                </span>
                Actuellement à la recherche d'un poste en tant que développeur
                Front-End, n'hésitez pas à me contacter
                <RoughNotationGroup show={true} order={2}>
                  <a href="/contact" className="hover:text-pink font-bold ml-6  lg:ml-2">
                    <CircleHighlight color={colors[2]}  >
                        Juste ici !
                    </CircleHighlight>
                  </a>
                </RoughNotationGroup>
              </p>
            </div>
          </div>
        </div>
        <div className="flex-shrink-0 lg:mt-12 lg:px-4 mb-10">
          <Image
            src={profile}
            alt="Profile"
            priority={true}
            className="rounded-full"
            width={250}
            height={250}
            placeholder="blur"
          />
        </div>
      </div>
    </div>
  );
};

export default About;
