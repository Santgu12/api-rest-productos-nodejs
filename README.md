# Product REST API

REST API developed using Node.js, Express and MySQL for product management.

## Features

- List products
- Create products
- Update products
- Delete products
- MySQL integration
- Environment variable configuration
- Tested with Postman

## Technologies

- Node.js
- Express
- MySQL
- Postman

## Installation

```bash
git clone https://github.com/Santgu12/NOMBRE-REPO.git
cd NOMBRE-REPO
npm install
```

Create a .env file:

```env
DB_HOST=
DB_USER=
DB_PASSWORD=
DB_NAME=
PORT=
```

Run:

```bash
npm start
```

## API Endpoints

### Get Products

```http
GET /products
```

### Create Product

```http
POST /products
```

### Update Product

```http
PUT /products/:id
```

### Delete Product

```http
DELETE /products/:id
```

## Author

Santiago Gutierrez
