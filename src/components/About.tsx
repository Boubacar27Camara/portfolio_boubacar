import Title from "./Title";
import img from '../assets/assets/img4.png.jpeg';
import { CalendarSync, LetterText, Paintbrush } from "lucide-react";


const aboutSections = [
    {
        id: 1,
        title: "Developpeur Frontend",
        description: "Je suis un developpeur frontend avec une bonne experience.",
        icon: <LetterText className="text-accent scale-150" />
    },

    {
        id: 2,
        title: "Developpeur Backend",
        description: "Je maitrise les bases du developpement backend pour creer des APIs robusts.",
        icon: <CalendarSync className="text-accent scale-150" />
    },
    {
        id: 3,
        title: "Pasionne par l'UI/UI",
        description: "Creer des interfaces utilisateur attrayantes et fonctionnelles est ma propriete. ",
        icon: <Paintbrush className="text-accent scale-150" />
    },



]

const About = () => {
    return (
        <div className="bg-base-300 p-10 mb-10 md:mb-32" id="About">
            <Title title="A propos" />
            <div className="md:h-screen flex justify-center items-center">
                <div className="hidden md:block">
                    <img src={img} alt="" className="w-96 object-cover
                     rounded-xl"
                    />
                </div>

                <div className="md:ml-4 space-y-4">
                    {
                        aboutSections.map((section) => (
                            <div key={section.id} className="flex flex-col md:flex-row items-center bg-base-100 md:p-5 
                            rounded-xl md:w-96 shadow-xl">
                                <div className="mb-2 md:mb-0">
                                    {section.icon}
                                </div>
                                <div className="md:ml-4 text-center md:text-left">
                                    <h2 className="text-xl font-bold mb-1">
                                        {section.title}
                                    </h2>
                                    <p className="text-sm">
                                        {section.description}
                                    </p>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    )

}
export default About;