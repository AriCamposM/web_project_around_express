# web_project_around_express

## Descripción del Proyecto / Project Description

Este proyecto es una API basada en el framework Express que simula un sistema de gestión de usuarios y tarjetas (users y cards). Permite realizar peticiones HTTP para obtener datos JSON de usuarios y tarjetas desde archivos locales almacenados en formato JSON. El proyecto también incluye un manejo básico de errores, como la verificación de usuarios inexistentes y la gestión de rutas no encontradas (404).

This project is an Express-based API that simulates a user and card management system. It allows HTTP requests to retrieve JSON data for users and cards from locally stored JSON files. The project also includes basic error handling, such as verifying non-existent users and handling 404 not-found routes.

### Funcionalidad Principal / Main Functionality:

- Obtener un listado de usuarios y tarjetas desde rutas específicas.
- Verificar si un usuario existe en el sistema y devolver su información o un error si no existe.
- Manejo de errores 404 cuando los recursos solicitados no se encuentran disponibles.

- Fetch a list of users and cards from specific routes.
- Verify whether a user exists in the system and return their information or an error if they don't.
- Handle 404 errors when requested resources are unavailable.

---

## Tecnologías y Técnicas Utilizadas / Technologies and Techniques Used

- **Node.js**: El entorno de ejecución para el servidor. / The runtime environment for the server.
- **Express.js**: Framework para el manejo de rutas y creación del servidor web. / Framework for routing and creating the web server.
- **File System (fs)**: Módulo de Node.js para la lectura de archivos del sistema, usado para cargar los datos de usuarios y tarjetas desde archivos JSON.  
  Node.js module for reading files, used to load user and card data from JSON files.
- **Middlewares**: Utilizados para verificar la existencia de usuarios y manejar errores, incluyendo la respuesta para recursos no encontrados (404).  
  Used for verifying the existence of users and managing errors, including handling 404 not-found responses.
- **Rutas (Routes)**: Se implementaron rutas para obtener listas completas de usuarios y tarjetas, así como rutas dinámicas para obtener un usuario específico según su ID.  
  Routes were implemented to fetch complete lists of users and cards, as well as dynamic routes to retrieve specific users by ID.

---

## Estructura del Proyecto / Project Structure

### `app.js`

- Crea el servidor Express.  
  Creates the Express server.
- Define las rutas para obtener usuarios y tarjetas, importadas desde `users.js` y `cards.js`.  
  Defines routes for retrieving users and cards, imported from `users.js` and `cards.js`.
- Implementa un middleware para manejar errores 404 si se solicita una ruta no existente.  
  Implements middleware to handle 404 errors for non-existent routes.

### `cards.js`

- Define la ruta `/cards` que devuelve un listado de tarjetas en formato JSON desde el archivo `cards.json`.  
  Defines the `/cards` route that returns a list of cards in JSON format from the `cards.json` file.
- Se maneja un error en caso de que ocurra algún problema al leer el archivo.  
  Handles errors in case of issues reading the file.

### `users.js`

- Define la ruta `/users` que devuelve un listado de usuarios en formato JSON desde el archivo `users.json`.  
  Defines the `/users` route that returns a list of users in JSON format from the `users.json` file.
- Implementa un middleware `UserVerification` para verificar la existencia de un usuario basado en su ID.  
  Implements the `UserVerification` middleware to verify the existence of a user based on their ID.
- La ruta `/users/:_id` utiliza este middleware para devolver la información de un usuario si se encuentra en el sistema, o un error 404 si no existe.  
  The `/users/:_id` route uses this middleware to return user information if the user is found, or a 404 error if not.

---

## Endpoints Definidos / Defined Endpoints

- `GET /users`: Devuelve un listado de todos los usuarios.  
  Returns a list of all users.
- `GET /cards`: Devuelve un listado de todas las tarjetas.  
  Returns a list of all cards.
- `GET /users/:_id`: Devuelve la información de un usuario específico si existe.  
  Returns information for a specific user if they exist.
- `GET /`: Devuelve un error 404 con un mensaje de "Recurso solicitado no encontrado".  
  Returns a 404 error with a message "Requested resource not found".
