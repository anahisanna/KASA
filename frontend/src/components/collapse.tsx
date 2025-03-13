import { useState } from "react";
import "./Collapse.css";

type CollapseProps = {
    title: string;
    content: string;
};

const Collapse = ({ title, content }: CollapseProps) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="collapse">
            <div className="collapse-header" onClick={() => setIsOpen(!isOpen)}>
                <span>{title}</span>
                <span className={`arrow ${isOpen ? "open" : ""}`}></span>
            </div>
            {isOpen && (
                <div className="collapse-content">
                    {content}
                </div>
            )}
        </div>
    );
};

export default Collapse;
