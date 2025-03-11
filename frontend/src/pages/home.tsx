import { useState, useEffect } from "react";
import Banner from "../components/Banner";
import Card from "../components/Card";
import "./Home.css";

type Property = {
    id: string;
    title: string;
    cover: string;
};

const Home = () => {
    const [properties, setProperties] = useState<Property[]>([]);

    useEffect(() => {
        fetch("http://localhost:8080/api/properties") // URL del backend
            .then((response) => response.json())
            .then((data) => setProperties(data))
            .catch((error) => console.error("Erreur lors de la récupération des propriétés:", error));
    }, []);

    return (
        <div className="home">
            <Banner />
            <div className="gallery">
                <div className="gallery-container">
                    {properties.map((property) => (
                        <Card key={property.id} title={property.title} cover={property.cover} />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Home;
