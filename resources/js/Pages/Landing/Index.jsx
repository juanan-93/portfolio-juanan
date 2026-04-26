import { Link } from "@inertiajs/react";
import "../../../css/landing.css";


export default function Index() {
    return (
        <div className="landing-page">

            {/* NAVBAR */}
            <nav className="navbar">
                <div className="navbar-left">
                    <a href="#">Sobre mí</a>
                    <a href="#">Portfolio</a>
                </div>
                <div className="navbar-right">
                    <a href="#">GitHub</a>
                    <a href="#">LinkedIn</a>
                    <div className="apps-icon">⋮⋮⋮</div>
                    <div className="avatar">JA</div>
                </div>
            </nav>

            {/* MAIN */}
            <main className="main">
                <h1 className="logo">Juanan</h1>

                <div className="search-wrapper">
                    <input
                        type="text"
                        className="search-input"
                        placeholder=""
                        value="Quien es Juanan?"
                    />
                    <div className="search-icons">
                        <span className="material-icons">search</span>
               
                    </div>
                </div>

                <div className="buttons">
                    <Link href={route("search")} className="btn">Buscar sobre mí</Link>
                    <button className="btn">Voy a tener suerte</button>
                </div>

                <p className="idiomas">
                    Ofrecido en: <a href="#">Proyectos</a> <a href="#">Sobre mí</a> <a href="#">Contacto</a>
                </p>
            </main>

            {/* FOOTER */}
            <footer className="footer">
                <div className="footer-country">
                    <span>España</span>
                </div>
                <div className="footer-links">
                    <div className="footer-left">
                        <a href="#">Publicidad</a>
                        <a href="#">Empresa</a>
                        <a href="#">Cómo funciona</a>
                    </div>
                    <div className="footer-right">
                        <a href="#">Privacidad</a>
                        <a href="#">Términos</a>
                        <a href="#">Configuración</a>
                    </div>
                </div>
            </footer>

        </div>
    );
}