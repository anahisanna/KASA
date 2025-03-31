import Banner from "../components/banner";
import Collapse from "../components/collapse";
import aboutData from "../about.json";
import aboutBanner from "../assets/a_propos.jpg";
import "./About.css";

const About = () => {
    return (
        <div className="about">
            <Banner image={aboutBanner} className="about-banner" />
            <div className="about-container">
                {aboutData.map((item, index) => (
                    <Collapse key={index} title={item.title} content={item.content} />
                ))}
            </div>
        </div>
    );
};

export default About;
