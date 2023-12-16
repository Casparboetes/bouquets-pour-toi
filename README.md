# Bouquets App

This is a [Next.js](https://nextjs.org/) fullstack project bootstrapped. It's an e-commerce application for buying
flowers.

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing
purposes.

### Prerequisites

-   Node.js
-   Yarn

## Installation

1. Clone the repository to your local machine.
2. Open the project in JetBrains WebStorm/VSC/...
3. Install the project dependencies by running `yarn install` in the terminal.

## Running the Project

-   To start the development server, run `yarn dev` in the terminal.
-   To build the project for production, run `yarn build`.
-   To lint the project, run `yarn lint`.
-   To format the source code, run `yarn format`.
-   To fix the source code, run `yarn format:fix`.

## Routes

-   `/` - Displays the homepage.
-   `/products-list` - Displays the product overview.
-   `/product-details/:id` - Displays the details of a specific product.
-   `/:pathMatch(.*)*` - Displays a 404 page for any unmatched routes.

## Dependencies

This project uses several dependencies, including:

-   React
-   Tailwind
-   DaisyUi
-   ESLint and Prettier for linting and formatting
-   TypeScript

For a full list of dependencies, refer to the `package.json` file.

## Author

-   **Caspar Boetes**

## Version

0.1.0

Please feel free to submit issues and pull requests. Enjoy coding! 😊

## Learn More

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and
load Inter, a custom Google Font.

To learn more about Next.js, take a look at the following resources:

-   [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
-   [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions
are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use
the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme)
from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
