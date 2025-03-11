import "./Card.css";

type CardProps = {
    title: string;
    cover: string;
};

const Card = ({ title, cover }: CardProps) => {
    return (
        <div className="card">
            <img src={cover} alt={title} className="card-img" />
            <div className="card-overlay">
                <h4>{title}</h4>
            </div>
        </div>
    );
};

export default Card;
