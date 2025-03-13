import "./Banner.css";

type BannerProps = {
    image: string;
    title?: string;
    className?: string;
};

const Banner = ({ image, title, className = "" }: BannerProps) => {
    return (
        <div className={`banner ${className}`}>
            <img src={image} alt="Banner" className="banner-img" />
            {title && <h1 className="banner-title">{title}</h1>}
        </div>
    );
};

export default Banner;
