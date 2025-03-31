import { describe, test, expect } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import Collapse from '../components/collapse';

describe('Collapse component', () => {
    const title = 'Mon titre';
    const content = <p>Contenu secret</p>;

    test('affiche le titre', () => {
        render(<Collapse title={title} content={content} />);
        expect(screen.getByText('Mon titre')).toBeInTheDocument();
    });

    test('n\'affiche pas le contenu au départ', () => {
        render(<Collapse title={title} content={content} />);
        const contentElement = screen.queryByText('Contenu secret');
        expect(contentElement).not.toHaveClass('open');
    });

    test('affiche le contenu après clic', () => {
        render(<Collapse title={title} content={content} />);
        const header = screen.getByText('Mon titre');
        fireEvent.click(header); // simule un clic

        const contentElement = screen.getByText('Contenu secret');
        expect(contentElement.parentElement).toHaveClass('open'); // classe dynamique
    });
});
