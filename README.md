# LeetCode Solutions in TypeScript

This repository contains solutions to LeetCode problems written in TypeScript. Each solution is accompanied by tests to ensure correctness.

## Project Structure

```
leetcode/
│
├── src/                   # Source code
│ ├── problems/            # LeetCode problem solutions
│ │ ├── problem1.ts        # Example: Two Sum
│ │ ├── problem2.ts        # Example: Reverse String
│ │ └── ...                # Other solutions
│ ├── utils/               # Utility functions (if any)
│ └── index.ts             # Entry point (optional)
│
├── tests/                 # Test cases
│ ├── problem1.test.ts     # Tests for Two Sum
│ ├── problem2.test.ts     # Tests for Reverse String
│ └── ...                  # Other tests
│
├── .gitignore             # Ignored files
├── package.json           # Dependencies and scripts
├── tsconfig.json          # TypeScript configuration
└── README.md              # This file
```

## Installation

1. Ensure you have Node.js installed (recommended version 18+).
2. Clone the repository:
   ```sh
   git clone git@github.com:Nikxxx007/LeetCode.git
   cd leetcode
   ```
3. Install dependencies:
   ```sh
   npm install
   ```

## Running Solutions

You can execute any solution using `ts-node`:

```sh
npx ts-node src/problems/problem1.ts
```

## Running Tests

The project uses [Jest](https://jestjs.io/) for testing. To run tests, use the following command:

```sh
npm test
```

## Adding a New Solution

1. Create a new file in `src/problems/`, e.g., `problemX.ts`.
2. Implement the solution inside this file.
3. Create tests in `tests/problemX.test.ts`.
4. Run tests to ensure correctness.

## Useful Commands

- `npm test` - Run Jest tests

## License

This project is licensed under the MIT License.


