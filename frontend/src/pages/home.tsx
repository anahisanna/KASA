import { useState, useEffect } from "react";
import Banner from "../components/Banner";
import Card from "../components/Card";
import "./Home.css";

// Définition du type Property qui représente les données de chaque propriété
type Property = {
    id: string; // Identifiant unique de la propriété
    title: string; // Titre de la propriété
    cover: string; // URL de l'image de couverture de la propriété
};

const Home = () => {
    // Déclaration d'un état pour stocker les propriétés récupérées depuis le backend
    const [properties, setProperties] = useState<Property[]>([]);

    // useEffect est utilisé pour exécuter le code après le rendu initial du composant
    useEffect(() => {
        // Récupération des données du backend via une requête HTTP GET
        fetch("http://localhost:8080/api/properties") // URL de l'API backend
            .then((response) => response.json()) // Conversion de la réponse en JSON
            .then((data) => setProperties(data)) // Mise à jour de l'état avec les données récupérées
            .catch((error) => console.error("Erreur lors de la récupération des propriétés:", error)); // Gestion des erreurs
    }, []); // Le tableau vide [] signifie que ce code s'exécute une seule fois après le montage du composant

    return (
        <div className="home">
            <Banner />
            <div className="gallery">
                <div className="gallery-container">
                    {/* Boucle sur les propriétés pour afficher chaque carte */}
                    {properties.map((property) => (
                        <Card key={property.id} title={property.title} cover={property.cover} />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Home; // Exportation du composant Home pour être utilisé dans l'application

