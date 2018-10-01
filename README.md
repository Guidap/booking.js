# booking.js
A public library used to import GUIDAP reservation module on your website 🚀

## How to

### Develop

#### With docker :
> **Note:** you must have **Docker** and **Docker-compose** installed if you want to use the provided dev environment

Launch this command in your favorite terminal:
```sh
docker-compose up -d --build # download dependencies, build and host the project
```

Then, you can access the exposed files at [http://localhost:8081/](http://localhost:8081/).

You can acces the container with the following command:
```sh
docker exec -it booking.js-node /bin/bash
```

You can restart the dev environment by restarting the Docker container :
```sh
docker restart booking.js-node
```

You can stop the container with the following command:
```sh
docker-compose down
```

#### Without docker :

Run the following commands:
```sh
yarn
yarn build-dev
yarn serve
```

### Build for development :
```sh
yarn build-dev
```

### Serve the generated content :
```sh
yarn serve
```
> Will host with Webpack Dev Server on localhost:8080 (8081 if you are using the Docker dev environment)

### Build for production :
```sh
yarn build-prod
```

### Release in production :
> **Note:** this process will be reviewed soon to be more simple 👍

```sh
yarn build-prod
git add dist/
git cm "{new version message}"
yarn version # It will create a Git tag and update the package.json version
git push {remote} --tags
git push {remote}
```
