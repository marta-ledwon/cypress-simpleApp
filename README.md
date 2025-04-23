# Cypress Simple App

This is a simple Cypress project with separate test suites for API, BDD, and E2E testing.

## Installation

Install project dependencies:

```bash
npm install
```

## Available Scripts

- `npm run cy:open`  
  Open the Cypress Test Runner for all tests.

- `npm run cy:run`  
  Run all Cypress tests in headless mode.

- `npm run cy:api:open`  
  Open Cypress Inspector for **API-tests** (in `cypress/e2e/API-tests`).

- `npm run cy:api:run`  
  Run **API-tests** only.

- `npm run cy:bdd:open`  
  Open Cypress Inspector for **BDD-tests** (in `cypress/e2e/BDD-tests`).

- `npm run cy:bdd:run`  
  Run **BDD-tests** only.

- `npm run cy:e2e:open`  
  Open Cypress Inspector for **E2E-tests** (in `cypress/e2e/E2E-tests`).

- `npm run cy:e2e:run`  
  Run **E2E-tests** only.

## Folder Structure

```
cypress/
  e2e/
    API-tests/     # API test files
    BDD-tests/     # BDD feature & step definitions
    E2E-tests/     # Standard end-to-end tests
```

> **Note:** You can also use `yarn` instead of `npm` to run these scripts. 