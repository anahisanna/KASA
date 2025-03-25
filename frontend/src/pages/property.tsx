import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Slideshow from "../components/Slideshow";
import Collapse from "../components/Collapse";
import "./Property.css";

type PropertyData = {
    id: string;
    title: string;
    pictures: string[];
    description: string;
    host: { name: string; picture: string };
    rating: string;
    location: string;
    equipments: string[];
    tags: string[];
};

const Property = () => {
    const { id } = useParams(); //  Obtiene el ID de la URL
    const [property, setProperty] = useState<PropertyData | null>(null);

    useEffect(() => {
        if (!id) {
            console.error("Error: ID no encontrado en la URL.");
            return;
        }

        fetch(`http://localhost:8080/api/properties/${id}`)
            .then((response) => {
                if (!response.ok) throw new Error("Error al cargar la propiedad");
                return response.json();
            })
            .then((data) => setProperty(data))
            .catch((error) => console.error("Erreur lors du chargement des détails:", error));
    }, [id]);

    if (!property) {
        return <div>Chargement...</div>;
    }

    return (
        <div className="property">
            {/* Slideshow */}
            <Slideshow images={property.pictures} />

            {/* Contenedor de título, ubicación, anfitrión y rating */}
            <div className="property-info">
                <div className="property-details">
                    <h3>{property.title}</h3>
                    <p className="property-location ">{property.location}</p>

                    {/* Etiquetas (Tags) */}
                    <div className="tags">
                        {property.tags.map((tag, index) => (
                            <span key={index} className="tag">{tag}</span>
                        ))}
                    </div>
                </div>

                {/* Host y Rating */}
                <div className="host-rating">
                    {/* Anfitrión */}
                    <div className="host">
                        <p>{property.host.name}</p>
                        <img src={property.host.picture} alt={property.host.name} className="host-img" />
                    </div>

                    {/* Rating en estrellas */}
                    <div className="rating">
                        {[...Array(5)].map((_, index) => (
                            <span key={index} className={index < Number(property.rating) ? "star filled" : "star"}>★</span>
                        ))}
                    </div>
                </div>
            </div>


            {/* 🔥 Contenedor de los Collapse en dos columnas */}
            <div className="collapses">
                <Collapse title="Description" content={property.description} />
                <Collapse title="Équipements" content={property.equipments.length > 0 ? property.equipments.join(", ") : "Aucun équipement disponible"} />
            </div>
        </div>
    );
};

export default Property;
