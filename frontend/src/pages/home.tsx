import { useState, useEffect } from "react";
import Banner from "../components/banner";
import Card from "../components/card";
import homeBanner from "../assets/banner.jpg";
import "./Home.css";

type Property = {
    id: string;
    title: string;
    cover: string;
};

const Home = () => {
    const [properties, setProperties] = useState<Property[]>([]);

    useEffect(() => {
        fetch("http://localhost:8080/api/properties")
            .then((response) => response.json())
            .then((data) => setProperties(data))
            .catch((error) => console.error("Erreur lors de la récupération des propriétés:", error));
    }, []);

    return (
        <div className="home">
            <Banner image={homeBanner} title="Chez vous, partout et ailleurs" />
            <div className="gallery">
                <div className="gallery-container">
                    {properties.map((property) => (
                        <Card key={property.id} id={property.id} title={property.title} cover={property.cover} />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Home;
