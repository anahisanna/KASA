import '@testing-library/jest-dom';

// Mock automatique pour tous les imports CSS
vi.stubGlobal('CSS', class { });
