import { useState } from "react";
import "./Slideshow.css";

const Slideshow = ({ images = [], title, location }: { images: string[]; title: string; location: string }) => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const nextSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    };

    const prevSlide = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === 0 ? images.length - 1 : prevIndex - 1
        );
    };

    if (!images.length) {
        return <p>No hay imágenes disponibles</p>;
    }

    return (
        <div className="slideshow">
            {/* Botones de navegación SOLO si hay más de una imagen */}
            {images.length > 1 && (
                <button className="prev" onClick={prevSlide}>&#10094;</button>
            )}

            <img
                src={images[currentIndex]}
                alt={`Slide ${currentIndex + 1}`}
                className="slideshow-img"
            />

            {images.length > 1 && (
                <button className="next" onClick={nextSlide}>&#10095;</button>
            )}

            {/* Indicador de Slide */}
            {images.length > 1 && (
                <div className="slide-indicator">
                    {currentIndex + 1} / {images.length}
                </div>
            )}

            {/* Título y ubicación */}
            <div className="slideshow-info">
                <h2>{title}</h2>
                <p>{location}</p>
            </div>
        </div>
    );
};

export default Slideshow;

