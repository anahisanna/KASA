import { useState } from "react";
import "./Collapse.css";
import vectorCollapse from "../assets/vector-collapse.svg";

type CollapseProps = {
    title: string;
    content: React.ReactNode;
};

const Collapse = ({ title, content }: CollapseProps) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="collapse">
            <div className="collapse-header" onClick={() => setIsOpen(!isOpen)}>
                <span>{title}</span>
                <img
                    src={vectorCollapse}
                    alt="flèche"
                    className={`arrow ${isOpen ? "open" : ""}`}
                />
            </div>

            <div className={`collapse-content ${isOpen ? "open" : ""}`}>
                {content}
            </div>
        </div>
    );
};

export default Collapse;
