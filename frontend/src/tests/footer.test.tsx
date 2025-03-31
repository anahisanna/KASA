import { describe, test, expect } from 'vitest';
import { render, screen } from "@testing-library/react";
vi.mock('./footer.css', () => ({}));
import Footer from "../components/Footer";


describe("Footer component", () => {
    test("renders the Kasa logo", () => {
        render(<Footer />);
        const logo = screen.getByAltText("Kasa Logo");
        expect(logo).toBeInTheDocument();
    });

    test("renders the copyright", () => {
        render(<Footer />);
        expect(screen.getByText(/© 2020 Kasa/i)).toBeInTheDocument();
    });
});
