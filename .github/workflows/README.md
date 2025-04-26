# Dockerized Application Deployment Workflow

This document explains the GitHub Actions workflow defined in [`dockerized-deployment.yml`](./dockerized-deployment.yml) for building, packaging, and deploying the Art Institute of Chicago API Viewer as a Docker container.

## Workflow Overview

The workflow is triggered manually (`workflow_dispatch`) or when a new release is created. It consists of three main jobs:

1. **Build:**  
   - Installs dependencies and builds the app.
   - Packages the build output as a Docker image.
   - Compresses the Docker image for transfer.
   - Uploads the build and Docker image as artifacts.

2. **Upload:**  
   - Downloads the compressed Docker image artifact.
   - Uploads it to a remote server via SCP.

3. **Deploy:**  
   - SSHs into the remote server.
   - Stops and removes any running Docker container with the same name.
   - Loads the new Docker image and starts a new container.

## Secrets and Variables

- **Secrets:**  
  - `USERNAME`, `HOST`, `SSH_KEY`, `SSH_PASSPHRASE`: Used for secure SSH/SCP access to the deployment server.

- **Variables:**  
  - `DOCKER_IMG_NAME`: Name of the Docker image.
  - `DOCKER_IMG_PATH`: Path on the server where the image will be uploaded.
  - `DOCKER_CONTAINER_NAME`: Name of the running Docker container.
  - `PORT`: Port to expose the application.

## Steps Breakdown

### Build Job

- **Checkout repository:**  
  Uses `actions/checkout` to get the code.

- **Cache npm dependencies:**  
  Speeds up builds by caching `node_modules`.

- **Build App:**  
  Runs `npm install` and `npm run build`.

- **Upload Build as Artifact:**  
  Uploads the `dist` folder for reference.

- **Build Docker Image:**  
  Builds the Docker image and saves it as a `.tar` file.

- **Compress Docker Image:**  
  Uses `7zr` to compress the Docker image for faster upload.

- **Upload artifact:**  
  Uploads the compressed Docker image.

### Upload Job

- **Download artifact:**  
  Downloads the compressed Docker image.

- **Upload to Server:**  
  Uses `appleboy/scp-action` to securely copy the image to the server.

### Deploy Job

- **Stop and Remove Old Container:**  
  SSHs into the server and stops/removes any existing container.

- **Deploy Docker Image:**  
  - Extracts the Docker image.
  - Loads it into Docker.
  - Runs a new container on the specified port.
  - Cleans up temporary files.

## Customization

- Adjust the Docker image name, container name, and port by changing the workflow variables.
- Ensure your server has Docker and `p7zip-full` installed (the workflow installs `p7zip-full` if missing).

## References

- [GitHub Actions Documentation](https://docs.github.com/en/actions)
- [appleboy/ssh-action](https://github.com/appleboy/ssh-action)
- [appleboy/scp-action](https://github.com/appleboy/scp-action)

---