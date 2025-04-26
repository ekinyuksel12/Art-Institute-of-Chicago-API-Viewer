# Art Institute of Chicago API Viewer

A React + TypeScript web application for browsing artworks from the [Art Institute of Chicago API](https://api.artic.edu/docs/).

## Live Demo

Check out the published version of the project [here](https://art.toprakyuksel.fun).

## Features

- Browse and search artworks from the Art Institute of Chicago collection
- Responsive UI built with Tailwind CSS
- Artwork detail pages with images and metadata
- Dockerized deployment and GitHub Actions workflow

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v16+ recommended)
- [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/)
- [Docker](https://www.docker.com/) (for deployment)

### Installation

1. **Clone the repository:**
   ```sh
   git clone https://github.com/yourusername/art-institute-of-chicago.git
   cd art-institute-of-chicago
   ```

2. **Install dependencies:**
   ```sh
   npm install
   # or
   yarn install
   ```

3. **Run the development server:**
   ```sh
   npm run dev
   # or
   yarn dev
   ```

4. **Build for production:**
   ```sh
   npm run build
   # or
   yarn build
   ```

5. **Preview the production build:**
   ```sh
   npm run preview
   # or
   yarn preview
   ```


This project includes a GitHub Actions workflow for Dockerized deployment.  
The workflow automates building, packaging, and deploying the application as a Docker container.  
It consists of three main jobs: **Build**, **Upload**, and **Deploy**.  
For more details, see the [Dockerized Application Deployment Workflow](.github/workflows/dockerized-deployment.md).


## Project Structure

```
src/
  components/        # React components
  contexts/          # React context providers
  models/            # TypeScript interfaces
  services/          # API service classes
  assets/            # Static assets
public/              # Public static files
```

## License

[GNU GPLv3](LICENSE)

---

## Credits

- [Art Institute of Chicago API](https://api.artic.edu/docs/)
- Built with [React](https://react.dev/), [Vite](https://vitejs.dev/), [Tailwind CSS](https://tailwindcss.com/), and [TypeScript](https://www.typescriptlang.org/)
