# Test Automation PoC

This proof of concept is a result of a technical task given by Newfire Global Partners. The purpose of the task was to showcase the author's technical skills, knowledge of tools, problem-solving abilities, and approach to test development using Cypress with TypeScript.

See the [wiki page](https://github.com/frakic/TestAutomationPoC/wiki/Requirements) for full requirements.

Note: Due to the inability to register for the provided Book service, API tests were demonstrated using another mock REST service: https://jsonplaceholder.typicode.com.

## Getting started

The following instructions will help you to copy and run the tests on a local machine.

### Prerequisites

You will need Node to run the tests:

- [Node.js](https://nodejs.org/en/download)

### Installation

1.  Clone the repository onto a local machine using the command:

```bash
git clone https://github.com/frakic/TestAutomationPoC
```

2.  Navigate to /src folder and run the following command to open the Cypress executable:

```bash
npm run test
```

3.  Alternatively, run the following command in order to execute the tests in headless mode:

```bash
npx cypress run
```
