# Events
Para empesar hay que crearse una base de datos en postgreSQL con el nombre de "event", ya sea por terminal de postgreSQL o pgadmin
despues crear un archivo .env con los siguientes datos:
    DB_USER=postgres
    DB_PASSWORD= (contrasena)
    DB_HOST=localhost

Para ejecutar el servidor: npm start
Para ejecutar los test: npm test

Exiten dos modelos Event y User que se relacionan entre si  de muchos a muchos en una tabla intermedia que se llama  'suscripcion', es decir un evento puede tener muchos usuarios y muchos usuarios pueden estar en muchos eventos.
Dentro de los usurarios existen dos Roles, 'admin' y 'user'. 
A travez de los endpoint vas a poder registrarte y/o loguearte, en el registro podes elejir tu rol ya sea 'admin' o 'user'. Siendo 'user' vas a poder ver todos los eventos pasados, completados e inscribirte a los eventos futuros que esten activos. Y siendo 'admin, vas a poder crear, editar y elimiar los eventos, con este rol vas a poder visualizar todos los eventos, ya sean activos, completados o en borrador

Tambien con cualquiera de los dos roles pueden suscribirce a los eventos

REGESTRARSE
Para registrarte tenes que usar el siguiente endpoint POST"http://localhost:4000/sign/singup"
y por body mandar lo siguiente:
{
  "name":"nombre",
  "lastname":"apellido",
  "email":"email",
  "password":"contrasena",
  "rol":"rol a elejir"
}


LOGUEARSE
Para ingresar/loguearse se usa el siguiente endpoint POST"http://localhost:4000/sign/singin"
y por body mandar lo siguiente:
{
  "email":"email",
  "password":"contrasena",
}


Una vez logueado como 'admin' podes, crear, modificar, eliminar los eventos

CREAR POST "http://localhost:4000/event"
mandar por body
{
  "titulo":"titulo del evento",
  "descripcionCorta":"pequena descripcion",
  "descripcionLarga":"descripcion",
  "organizador":"nombre del organizador",
  "publicado":"publicado"/"borrador",
  "estado":"completado"/"activo",
  "fecha":"fecla del evento(2022-09-01)"
}

MODIFICAR para modificar se hace con el "id" del evento PUT "http://localhost:4000/event/:id"
mandar por body con los nuevos datos modificados
{
  "titulo":"titulo del evento",
  "descripcionCorta":"pequena descripcion",
  "descripcionLarga":"descripcion",
  "organizador":"nombre del organizador",
  "publicado":"publicado"/"borrador",
  "estado":"completado"/"activo",
  "fecha":"fecla del evento(2022-09-01)"
}

ELIMINAR en el PUT /event/:id hay que agreagar un nuevo atriburo que se llama 
"stateBinary":"true/false" siendo false eliminado


SUSCRIBIRSE para ello hay que usar el endpoint POST"http://localhost:4000/event/suscribe"
y mandar lo sigueinte por body
{
    "email":"email",
    "rol":"user"/"admin",
    "id":"id"
}

ESTADO, para saber el estado de los eventos se usa el endpoint POST"http://localhost:4000/event/estado"
mandando por body
{

  "estado":"completado"/"activo"

}