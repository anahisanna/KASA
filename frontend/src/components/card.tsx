import { Link } from "react-router-dom";
import "./Card.css";

type CardProps = {
    id: string;
    title: string;
    cover: string;
};

const Card = ({ id, title, cover }: CardProps) => {
    return (
        <Link to={`/property/${id}`} className="card">
            <img src={cover} alt={title} className="card-img" />
            <div className="card-gradient"></div>
            <h4 className="card-title">{title}</h4>
        </Link>

    );
};

export default Card;
