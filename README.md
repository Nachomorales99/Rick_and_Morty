# Rick and Morty App

- Rick and Morty App es un proyeto de integracion creado durante la cursada del Bootcamp `Soy Henry`. El mismo busca crear una SPA donde se puedan conocer los personajes de este genial serie creada por Dan Harmon. La misma busca crear una interfaz divertida y una buena experiencia de usuario.

## Navigate 🏄🏽

- **'/'** Aqui encontraremos un login al cual accederemos con los siguientes datos:
  `Mail: hola@gmail.com`
  `Pasword: 123456`

> Para una mejor experiecia en esta demo el state acces es true DISFUTEN.

- **'/home'** Nos encontraremos con un home vacio de personajes en el cual hay una imagen que no indica tocar el logo de la nav, el cual es in generador de personajes de manera random y sin repetir. Ademas, podremos buscar personajes por numero en la barra de buqueda. Hay un total de 826 personajes, no se pueden agregar repetidos y numeros que no existe. Podremos agregarlos a favoritos o cerrar las cards. Si tocamos el nombre de un personaje accederemos a sus detalles.

- **'/favorites'** Aquí veremos todos aquellos personajes que agreguemos a favoritos con el boton `Favorite` desde el home. Aquí podremos ordenarlos de manera ascendente o descendente, segun el numero de ID, según la logica del servidor, sería su orden de aparición en la serie. Además podremos filtrarlos por género. Si no hay nada nos mostrará un cartel que nos indica porque esta vacio la page....

- **'/character/:id'** Aquí podremos conocer aun más a nuestros personajes, obteniendo su nombre, origen, localización actual (si es que se sabe), su foto, la cantidad de capitulos que tuvo aparición, su especie, género y su estado de vida, con un boton para volver a home.

- **'/about**

- Por último tenemos un boton Logout, tanto en la nav como en el footer, el cual no redirecciona a **'/'** y cierra sesión.

### Componentes

- `About` Un poco de informacion de mi y del proyecto.

- `Cards` Card valora si el state Characters esta vacio o no para mostrar un gif de bienvenida y si agrego personajes los agrega.

- `Card` Renderiza las cartas de los personajes, hasta 826 sin repetir.

- `Detail` Rederiza el detalle de los personajes.

- `Error 404` Muestra un gif de error 404, con una leyenda y un boton para volver a home, pero solo si se entra al patch **'/404'** .

- `Favorite` Posee la logica para agregar y quitar personajes de favoritos, filtrarlos y ordenarlos a gusto.

- `Footer` Posee un poco de informacion del proyecto, las tecnologias que se usaron, el mapa del sitio y redes sociales del creador.

- `Form` Posee el login para ingresar con sus respectivas validaciones y logout.

- `Nav` La barra de navegacion para volver a todos los componentes y que sten conectados todo el tiempo.

- `SearchBar` Con ella podes buscar personajes y agregarlos a la pagina principal.

## Tecnologias utilizadas

> HTML

> CSS

> Java Script

> React

> Redux

> Bootstrap con Bootswach

## Listos? Comencemos

![Rick i'm in](https://media.tenor.com/hQU3ltzIjCsAAAAC/rick-and-morty-heist.gif)
