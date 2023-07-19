# Practice sale Angular 

Proyecto en cual destaco mi forma de trabajar proyectos de angular donde pongo a prueba mis habilidades para desarrollar interfaces de usuarios intuitivas como las buenas practicas haciendo uso de librerias que ayudan para agilizar el desarrollo como lo es [tailwind css](https://tailwindcss.com/) para los estilos del sitio como el manejo de estado global para mantener la informacion del usuario accesible en todos los componentes y paginas usando [ngrx](https://ngrx.io/)

## Inicializar el proyecto

1. clona el repositorio 
```sh
git clone https://github.com/DenisValladares19/practice-sale-angular.git
```

2. instalar dependencias
```sh
  npm install
```

3. ejecuta el proyecto
```sh
  npm start
```

Funcionalidades utilizadas que proporciona angular 
* pipes
* services
* lazy loading

## Custom service API
Servicio de angular parametrizado para que hacer las peticiones a la api.

parametros que recibe en el objeto de configuración:

| clave | valor | es requerido |
| --- | ----- | ------------ |
|method | methodEnum `` GET, POST, DELETE, PUT, PATCH`` | SI |
| url | url sin el origin por ejemplo ``/product``  que al procesarlo el servicio le va aregar el origin por ejemplo ``http://localhost:8080/product`` esto que se le agrega antes de la url se toma de los enviroments con key ``BASE_URL`` | SI |
| params | esto es un objeto de clave valor en string ```{[k: string]: string} ``` ejemplo `` {page: '0', size: '10'}`` el servicio es capaz de traducirlo a [QueryParams](https://en.wikipedia.org/wiki/Query_string) al final se convertira en una URL parecida a esto ``http://localhost:8080/product?page=0&size=10`` | NO |
| data | objeto que se enviara cuando sean los metodos ``POST, PUT, PATCH`` | NO |


Los types tambien pueden ser parametrizados tanto para el response como para el request en el caso que se necesite enviar un objeto especifico de un type 


Para tipar el response al momento de inyectar el servicio se pude asignar el tipo de datos 

```ts
constructor(private api: ApiService<ProductDTO[]>) {}

```

para tipar el objeto que deseas enviar en el body de la peticion seria de esta forma 
```ts
this.api.fetch<ProductDTO>({ url: "/product", method: methodEnum.POST, data: productData })

```
