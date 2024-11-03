# GitHub Profile

A React + TypeScript application that fetches and displays GitHub profiles along with their repositories. Built with modern web technologies, including Vite, ShadCN UI components, and tested using Vitest and Cypress for a robust and reliable user experience.

## 📸 Demo

![Demo](link-to-your-demo.gif)

## 🚀 Features

- **GitHub Profile Lookup**: Search for GitHub users by username to view their profile information.
- **Repositories List**: Display a list of public repositories with additional details.
- **Interactive UI**: Modern, accessible, and responsive design using ShadCN components.
- **Testing Suite**: Comprehensive testing using Vitest and Cypress for unit and end-to-end tests.
- **Error Handling**: Graceful handling of network errors and non-existent profiles.

## 🛠️ Tech Stack

- **Frontend**: [React](https://reactjs.org/) + [TypeScript](https://www.typescriptlang.org/)
- **Styling**: [ShadCN](https://shadcn.dev/)
- **Build Tool**: [Vite](https://vitejs.dev/)
- **Testing**: [Vitest](https://vitest.dev/) for unit tests, [Cypress](https://www.cypress.io/) for end-to-end tests

## 📦 Installation

1. **Clone the repository**:
    ```bash
    git clone https://github.com/ValentinOsvaldo/github-profile.git
    cd github-profile
    ```

2. **Install dependencies**:
    ```bash
    npm install
    ```

3. **Run the project**:
    ```bash
    npm run dev
    ```

4. **Access the app**:
    Open your browser and go to `http://localhost:3000`.

## 🧪 Running Tests

- **Unit Tests** (using Vitest):
    ```bash
    npm run test
    ```

- **End-to-End Tests** (using Cypress):
    ```bash
    npm run test:e2e:dev
    ```

## ⚙️ Project Structure

```plaintext
src/
├── components/         # Reusable UI components
├── pages/              # Page components
├── hooks/              # Custom hooks
└── App.tsx             # Main app component
