# API aws

## Requisitos

- Node JS v20.0.0
- npm
- Postman | Thunder client | Insomnia

## Instalacion

1. Clonar repositorio

   ```bash
      git clone https://github.com/xavii07/api-aws
   ```

2. Ingresar al proyecto

   ```bash
      cd aws-api
   ```

3. Instalar dependencias

   ```bash
      npm install
   ```

4. Crear base de datos en mysql
   o ejecutar archivo docker-compose.yaml

   ```bash
      CREATE DATABASE productos;
   ```

   ```bash
      docker-compose up -d
   ```

5. Crear archivo `.env` en la raiz del proyecto para manejar las variables de entorno

   ```env
      NODE_ENV=development
      PORT=3000

      DB_HOST=localhost
      USER_DB=admin
      PASSWORD_DB=123456
      NAME_DB=productosdb
      DB_PORT=3306
   ```

6. Migraciones de la base de datos

   ```bash
      npm run migrate
   ```

7. Iniciar el servidor

   ```bash
      npm run dev #desarrollo
      npm start  #produccion
   ```

8. Ingresar en navegador a `http://localhost:3000/api/productos`
