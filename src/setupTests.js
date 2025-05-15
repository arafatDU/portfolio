import '@testing-library/jest-dom';

// Mock IntersectionObserver for all tests
global.IntersectionObserver = class {
  constructor() {}
  observe() {}
  unobserve() {}
  disconnect() {}
};
