import '@testing-library/jest-dom';

if (typeof global.import === 'undefined') {
  global.import = { meta: { env: { BASE_URL: '/' } } };
};

Object.defineProperty(window, 'matchMedia', {
  writable: true,
  value: jest.fn().mockImplementation(query => ({
    matches: false,
    media: query,
    onchange: null,
    addListener: jest.fn(), // для старых браузеров
    removeListener: jest.fn(), // для старых браузеров
    addEventListener: jest.fn(),
    removeEventListener: jest.fn(),
    dispatchEvent: jest.fn(),
  })),
});