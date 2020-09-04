# CV Builder

## Command Reference

**Run dev server**

```
docker-compose up -d
```

**Run build on dev environment**

```
docker-compose run app build
```

**Get a shell in the dev server**

```
docker-compose run --service-ports app sh
```

**Build production image**

```
COMPOSE_FILE=docker-compose.prod.yml docker-compose build
```

**Run production image**

```
COMPOSE_FILE=docker-compose.prod.yml docker-compose up -d
```

**Clean**

```
docker-compose down
```
