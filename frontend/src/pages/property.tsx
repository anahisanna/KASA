import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Slideshow from "../components/Slideshow";
import Collapse from "../components/Collapse";
import "./Property.css";

// Type des données de propriété
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
    const { id } = useParams(); // Récupère l'ID de l'URL
    const navigate = useNavigate(); // Permet de rediriger l'utilisateur
    const [property, setProperty] = useState<PropertyData | null>(null);

    useEffect(() => {
        if (!id) return;

        fetch(`http://localhost:8080/api/properties/${id}`)
            .then((response) => {
                if (!response.ok) {
                    // Si l'ID est invalide, on redirige vers la page 404
                    navigate("/404", { replace: true });
                    throw new Error("Propriété non trouvée");
                }
                return response.json();
            })
            .then((data) => setProperty(data))
            .catch((error) => console.error("Erreur de chargement :", error));
    }, [id, navigate]);

    // ⏳ En attendant les données
    if (!property) {
        return <div>Chargement...</div>;
    }

    return (
        <div className="property">
            <Slideshow images={property.pictures} />

            <div className="property-info">
                <div className="property-details">
                    <h3>{property.title}</h3>
                    <p className="property-location">{property.location}</p>

                    <div className="tags">
                        {property.tags.map((tag, index) => (
                            <span key={index} className="tag">{tag}</span>
                        ))}
                    </div>
                </div>

                <div className="host-rating">
                    <div className="host">
                        <img src={property.host.picture} alt={property.host.name} className="host-img" />
                        <div className="host-name">
                            {property.host.name.split(' ').map((word, index) => (
                                <p key={index}>{word}</p>
                            ))}
                        </div>
                    </div>

                    <div className="rating">
                        {[...Array(5)].map((_, index) => (
                            <span key={index} className={index < Number(property.rating) ? "star filled" : "star"}>★</span>
                        ))}
                    </div>
                </div>

            </div>

            <div className="collapses">
                <Collapse title="Description" content={property.description} />
                <Collapse title="Équipements" content={property.equipments.join(", ")} />
            </div>
        </div>
    );
};

export default Property;
