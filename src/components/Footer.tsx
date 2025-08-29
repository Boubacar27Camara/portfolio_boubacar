// import './Footer.css';

const Footer = () => {
    return (
        <footer className="bg-accent p-10 w-100% text-white">
            <ul className="flex justify-center md:justify-between items-center p-4">
                <li><a href="#Home" className="btn btn-ghost">Accueil</a></li>
                <li><a href="#About" className="btn btn-ghost">A Propos</a></li>
                <li><a href="#Experiences" className="btn btn-ghost">Mes experiences</a></li>
                <li><a href="#Projects" className="btn  btn-ghost">Mes projets</a></li>

            </ul>

            <div className="text-center mt-10">
                <small className="font-bold">Copy&copy;right - 2022</small>
            </div>
        </footer>
    )
}
export default Footer;