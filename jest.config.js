module.exports = {
  clearMocks: true,
  modulePaths: ["<rootDir>/src"],
  collectCoverageFrom: ["<rootDir>/src/**/*"],
  testMatch: ["<rootDir>/src/**/*.test.js"],
  coverageThreshold: {
    global: {
      statements: 8,
      branches: 0,
      functions: 40,
      lines: 8,
    },
  },
};
