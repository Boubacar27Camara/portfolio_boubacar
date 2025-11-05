import { Mail } from "lucide-react";
import img from '../assets/assets/img.jpg';
import CV from '../assets/assets/CV_Boubacar.pdf';

const Home = () => {

    return (
        <div className="flex flex-col-reverse md:flex-row justify-center items-center md:my-32 my-10" id="Home">
            <div className="flex flex-col">
                <h1 className="text-5xl md:text-6xl font-bold text-center md:text-left mt-4 md:mt-0">
                    Bonjour, <br /> je suis {" "}
                    <span className="text-accent">Boubacar CAMARA</span>
                </h1>
                <p className="my-4 text-md text-center md:text-left">
                    Je suis un developpeur fullstack
                    <br />
                    avec 1 ans d'experience, utilisant React, Angular <br />
                    et String boot.
                    Contactez-moi si vous avez besoin de mes services
                </p>
                <div className="space-x-2">
                    <a href="#Access" className="btn btn-accent md:w-fit">
                        <Mail className="w-5 h-5" />
                        Contactez-moi
                    </a>
                    <a href={CV} download className='btn btn-accent md:w-fit'>
                        Téléchager mon CV
                    </a>
                </div>
            </div>
            <div className="md:ml-60">
                <img src={img} alt="" className="w-96 h-96 object-cover 
                border-8 border-accent shadow-xl"
                    style={{
                        borderRadius: "150px"
                    }} />
            </div>
        </div>
    )

}
export default Home; 