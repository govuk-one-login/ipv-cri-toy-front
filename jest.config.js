module.exports = {
  clearMocks: true,
  modulePaths: ["<rootDir>/src"],
  collectCoverageFrom: ["<rootDir>/src/**/*"],
  testMatch: ["<rootDir>/src/**/*.test.js"],
  coveragePathIgnorePatterns: [
    "src/assets/.*",
    "src/app/.*/fields.js",
    "src/app/.*/steps.js",
    "src/app/.*/index.js",
    "src/app.js",
  ],
  coverageThreshold: {
    global: {
      statements: 29,
      branches: 0,
      functions: 50,
      lines: 29,
    },
  },
};
