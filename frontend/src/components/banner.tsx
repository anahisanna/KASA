import "./Banner.css"; // Importar estilos
import bannerImg from "../assets/banner.jpg";
const Banner = () => {
    return (
        <div className="banner">
            <img src={bannerImg} alt="Paysage bannière" className="banner-img" />
            <h1 className="banner-title">Chez vous, partout et ailleurs</h1>
        </div>
    );
};

export default Banner;
