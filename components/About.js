import React from "react"
import Image from "next/image"
import profile from "../public/profile.jpg"

const About = () => {
    return (
        <div className="container px-4 mx-auto">
            <div className="lg:space-x-5 lg:flex lg:flex-row item-center lg:-mx-4 flex flex-col-reverse text-center lg:text-left">
                <div className="lg:px-4 lg:mt-12 ">
                    <h1 className="text-2xl font-bold text-gray-900 lg:text-5xl dark:text-white">
                        Hey there,
                    </h1>
                    <div className="mt-6 text-gray-800 dark:text-white">
                        <p className="mb-4">
                            Après plusieurs années à voyager, découvrir des métiers divers et variés, je me retrouve enfin dans un domaine qui me correspond :
                            l'informatique, et plus précisément le développement web.
                            De nature curieux et persévérant, j'ai fini par trouver une formation complète chez O'Clock (certifiée Grande École du Numérique), moderne et intensive,
                            pour apprendre le développement web.
                            5 mois intensifs à manipuler du HTML, CSS, JS & SQL dont 1 mois en spécialisation REACT.
                            <br/>Actuellement à la recherche d'un poste en tant que développeur Front-End, n'hésitez pas à me contacter :
                        </p>
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
    )
}

export default About;