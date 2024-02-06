# frontend-III
## Documentación:
* Next: https://nextjs.org/docs/getting-started/installation
* Documentación Clases: https://www.notion.so/Next-JS-DH-ff70c9cbe3d5471090e8ed12b70bfda8
* CSR: https://www.patterns.dev/posts/client-side-rendering
* SSR: https://www.patterns.dev/posts/server-side-rendering
* Comparación entre SSR y SSG: https://tsh.io/blog/ssr-vs-ssg-in-nextjs/

## Recursos:
* Validador de HTML: https://validator.w3.org/#validate-by-input
* Obtener types de la api: https://app.quicktype.io/

## Extensiones:
* Console Ninja
* NEXTJS Snippets tsx and jsx

## Notas: 
# Next JS DH

Es un framework para crear contenido estático y generado del lado del servidor, basado en React y es un Marco de Trabajo

## Notas importantes y pequeños tips

## Crear el proyecto npx create-next-app@latest

Es importante que los archivos que están dentro de la carpeta pages 📁 sean “export default function” ejemplo

```jsx
export default function Home() {}
```

En Next Js se busca el archivo index.js que esta en la pagina de pages para mostrar el contenido lo cual nos permite tener un ruteo por file system

Si necesito usar con contexto para mi aplicación lo puedo colocar en el archivo _app.js

![next-folders.png](Next%20JS%20DH%20ff70c9cbe3d5471090e8ed12b70bfda8/next-folders.png)

## Document vs. app

En el contexto de aplicaciones web desarrolladas con Next.js, los archivos **`_app.js`** y **`_document.js`** son dos componentes especiales que se utilizan para personalizar y configurar ciertos aspectos de la aplicación.

1. **`_app.js`**:
El archivo **`_app.js`** es un componente especial que actúa como punto de entrada para tu aplicación Next.js. Es el componente de más alto nivel que envuelve todas las páginas de la aplicación. Puedes utilizar este archivo para agregar componentes y estilos globales, establecer diseños comunes, agregar lógica global y gestionar eventos compartidos entre todas las páginas.

Este componente se utiliza para mantener un estado común en toda la aplicación y, a menudo, se utiliza para inicializar librerías y configuraciones que deben estar disponibles en todas las páginas. Es similar al **`App`** component en una aplicación React estándar, pero en Next.js se utiliza para tareas específicas relacionadas con el enrutamiento y el servidor.

1. **`_document.js`**:
El archivo **`_document.js`** es otro componente especial en Next.js que se utiliza para personalizar el documento HTML que se envía al navegador. Específicamente, se utiliza para modificar el contenido del elemento **`<head>`** del documento, como agregar estilos globales, metaetiquetas, scripts personalizados o configurar el diseño de la página.

Es importante destacar que el **`_document.js`** solo se ejecuta en el servidor y no se ejecuta en el lado del cliente en la navegación entre páginas. Esto lo diferencia del **`_app.js`**, que se ejecuta tanto en el servidor como en el cliente.

Diferencias clave:

- **`_app.js`** se ejecuta tanto en el servidor como en el cliente, mientras que **`_document.js`** solo se ejecuta en el servidor.
- **`_app.js`** es el punto de entrada de la aplicación que envuelve todas las páginas, mientras que **`_document.js`** se utiliza para personalizar el documento HTML que se envía al cliente.

En resumen, **`_app.js`** se utiliza para lógica global y configuraciones de enrutamiento, mientras que **`_document.js`** se utiliza para personalizar el HTML del documento para todas las páginas de la aplicación.

## Componentes de Next

Link:

El componente **`Link`** se utiliza para navegar entre páginas de forma client-side sin necesidad de recargar toda la página. Al utilizar **`Link`**, la navegación entre páginas se convierte en una transición suave y rápida, ya que solo se carga y actualiza el contenido relevante, mejorando la experiencia del usuario.

Beneficios:

- Carga de página más rápida: Al navegar con **`Link`**, solo se actualiza el contenido relevante en lugar de recargar toda la página, lo que acelera la transición entre páginas.
- Mejora la experiencia del usuario: La transición sin problemas entre páginas proporciona una experiencia de usuario más fluida y agradable.
- SEO amigable: **`Link`** está optimizado para motores de búsqueda y utiliza técnicas como pre-carga para mejorar la indexación de las páginas en los motores de búsqueda.

```jsx
import Link from 'next/link';

const HomePage = () => {
  return (
    <div>
      <h1>Welcome to the Home Page!</h1>
      <Link href="/about">
        <a>About Us</a>
      </Link>
    </div>
  );
};

export default HomePage;
```

Image:

El componente **`Image`** proporciona una forma optimizada de mostrar imágenes en una aplicación Next.js. Además de admitir imágenes estáticas, también puede cargar imágenes de forma lazy (carga diferida) y realizar optimizaciones automáticas para mejorar el rendimiento y la experiencia del usuario.

Beneficios:

- Carga diferida (lazy loading): Las imágenes se cargan solo cuando son visibles en la ventana gráfica del navegador, lo que mejora el tiempo de carga inicial de la página.
- Optimizaciones automáticas: Next.js realiza automáticamente optimizaciones de imágenes, como el ajuste del tamaño, la compresión y la selección del formato de imagen más adecuado para el navegador del usuario.
- Soporte para fuentes de imagen: **`Image`** es compatible con múltiples fuentes de imagen, lo que significa que puedes proporcionar varias resoluciones de una imagen y Next.js seleccionará la más adecuada según las capacidades del dispositivo del usuario.

```jsx
import Image from 'next/image';

const AboutPage = () => {
  return (
    <div>
      <h1>About Us</h1>
      <Image
        src="/about-us.jpg"
        alt="About Us"
        width={800}
        height={600}
      />
    </div>
  );
};

export default AboutPage;
```

**Head**

El componente **`Head`** se utiliza para modificar el contenido del elemento **`<head>`** del documento HTML. Con **`Head`**, puedes agregar metaetiquetas, títulos personalizados, enlaces a hojas de estilos, scripts personalizados y otros elementos que afecten el encabezado del documento.

## Data Fetching

- **[Static Generation (Recommended)](https://nextjs.org/docs/basic-features/pages#static-generation-recommended)**: The HTML is generated at **build time** and will be reused on each request. “Cuando el contenido es el Mismo no cambia en mucho tiempo”
- **[Server-side Rendering](https://nextjs.org/docs/basic-features/pages#server-side-rendering)**: The HTML is generated on **each request**. “Se genera cada vez que el cliente hace una solicitud”

Mi app puede funcionar si deshabilito JS  con React esto no se puede lo cual es bueno para el SEO

[https://nextjs.org/docs/basic-features/layouts](https://nextjs.org/docs/basic-features/layouts)

Agregar imagen con URLS externos  configurar  el archivo next.config.js ejemplo:

```jsx
/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,
	images: {
		/* Domino URL imagenes externas */
		domains: ["raw.githubusercontent.com"],
	},
};

module.exports = nextConfig;
```

[Data Fetching: Overview | Next.js](https://nextjs.org/docs/basic-features/data-fetching/overview)

## SSG: Static Side Generation

Cuando ya se de antemano la información que voy a mostrar o cantidad de paginas, es la opción recomendada por Next “Se genera en el Build Time”

```jsx
// SSG: Server Side Generated
// You should use getStaticProps when:
//- The data required to render the page is available at build time ahead of a user’s request.
//- The data comes from a headless CMS.
//- The data can be publicly cached (not user-specific).
//- The page must be pre-rendered (for SEO) and be very fast — getStaticProps generates HTML and JSON files, both of which can be cached by a CDN for performance.
// Esta funcion se ejecuta solo del lado del servidor y en Build time solo se puede usar en PAGES.
export const getStaticProps: GetStaticProps = async (ctx) => {
	console.log("Hola Mundo");

	return {
		props: {},
	};
};
```

### Ventajas:

1. **Generación de Páginas Estáticas**: **`getStaticProps`** permite generar páginas estáticas durante la compilación, lo que mejora significativamente el rendimiento al reducir la carga en el servidor y disminuir los tiempos de carga para los usuarios. Esto es ideal para contenido que no cambia con frecuencia, como páginas de inicio, páginas de documentación, blogs, etc.
2. **SEO Mejorado**: Al generar páginas estáticas, el contenido se vuelve más accesible para los motores de búsqueda, lo que puede mejorar el SEO de tu sitio web. Los motores de búsqueda suelen indexar y clasificar mejor las páginas estáticas en comparación con las generadas dinámicamente en el cliente.
3. **Mayor Rendimiento**: Las páginas generadas estáticamente se almacenan en caché en el servidor y se distribuyen a través de una CDN (Red de Distribución de Contenido), lo que reduce la carga en el servidor y mejora la velocidad de carga para los usuarios en diferentes ubicaciones geográficas.
4. **Menos Carga del Servidor**: Al generar páginas estáticas, el servidor no necesita procesar solicitudes de forma dinámica cada vez que un usuario accede a una página. Esto libera recursos del servidor para manejar otras tareas y solicitudes.
5. **Experiencia del Usuario Mejorada**: Las páginas estáticas se cargan más rápido, lo que mejora la experiencia del usuario y reduce la tasa de rebote, lo que puede tener un impacto positivo en la retención de usuarios.
6. **Offline Support**: Dado que las páginas estáticas se almacenan en caché, los usuarios pueden acceder a ellas incluso cuando están fuera de línea o experimentan problemas de conectividad.
7. **Fácil Integración de Datos**: **`getStaticProps`** permite obtener y preprocesar datos antes de que se genere la página, lo que facilita la integración de datos externos, como API, bases de datos u otros servicios.
8. **No Requiere JavaScript en el Cliente**: Las páginas generadas estáticamente no dependen de la ejecución de JavaScript en el cliente para mostrarse, lo que puede ser beneficioso en situaciones en las que el JavaScript está deshabilitado o no se carga correctamente.

### ****Uso de rutas dinámicas y getStaticPaths****

**Descripción:**

Cuando utilizas rutas dinámicas, puedes crear una plantilla de página y generar varias páginas en función de diferentes valores de parámetros en la URL. Por ejemplo, podrías tener una página de detalle de producto con una URL como **`/productos/[id]`**, donde **`[id]`** es el parámetro que cambia para cada producto.

La función **`getStaticPaths`** se encarga de generar las rutas posibles en función de los parámetros disponibles. Luego, **`getStaticProps`** se ejecuta para cada una de estas rutas, permitiéndote obtener datos específicos para esa página.

**Ejemplo:**

Supongamos que estás construyendo un sitio web de libros y quieres crear páginas de detalle para cada libro. Aquí tienes un ejemplo de cómo podrías hacerlo usando rutas dinámicas con **`getStaticPaths`** y **`getStaticProps`**:

1. Crear un archivo llamado **`[id].js`** en la carpeta **`pages/libros`**. Este archivo se encargará de renderizar la página de detalle de cada libro.
2. En el archivo **`[id].js`**, definir la función **`getStaticPaths`** para generar las rutas de los libros disponibles:

```jsx
import React from 'react';

export async function getStaticPaths() {
  // Obtener la lista de IDs de libros desde algún servicio o fuente de datos
  const bookIds = ['1', '2', '3'];

  // Generar las rutas en función de los IDs de los libros
  const paths = bookIds.map((id) => ({
    params: { id: id },
  }));

  return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
  // Obtener los datos del libro en función del ID proporcionado
  const bookId = params.id;
  // Realizar una consulta a una API o fuente de datos para obtener los detalles del libro

  return {
    props: {
      // Datos del libro
      book: {
        id: bookId,
        title: 'Título del Libro',
        author: 'Autor del Libro',
        // Otros datos...
      },
    },
  };
}

function BookDetail({ book }) {
  return (
    <div>
      <h1>{book.title}</h1>
      <p>Autor: {book.author}</p>
      {/* Otros detalles del libro */}
    </div>
  );
}

export default BookDetail;
```

En este ejemplo, **`getStaticPaths`** genera las rutas para cada ID de libro disponible, y **`getStaticProps`** obtiene los detalles del libro correspondiente. Luego, la página de detalle del libro (**`[id].js`**) se renderiza con los datos obtenidos.

Para obtener los paths dimamicos de cada pagina por ID utilizo getStaticPaths

[https://nextjs.org/docs/basic-features/data-fetching/get-static-paths](https://nextjs.org/docs/basic-features/data-fetching/get-static-paths)

Para tipar el id que viene por params a GetStaticProps

```jsx
const {id} = params as {id: string};
```

Importante se combina  getStaticProps + getStaticPaths

Importante  getStaticProps puede estar sin getStaticPaths

### ****Incremental Static Regeneration****

ISR es una función de Next.js que te permite generar y actualizar páginas estáticas de forma incremental. A diferencia de la generación de páginas estáticas estándar, donde todas las páginas se generan de antemano en el momento de la compilación, ISR te permite generar páginas estáticas bajo demanda cuando se solicitan por primera vez, y luego actualizarlas periódicamente según una programación predefinida.

Al utilizar ISR, puedes obtener beneficios como:

Tiempo de generación inicial rápido: Las páginas se generan y se sirven de forma rápida en la primera solicitud.

Actualizaciones automáticas: Puedes configurar un tiempo de "revalidación" para que las páginas estáticas se regeneren y actualicen automáticamente en segundo plano según una programación predefinida.

Páginas siempre disponibles: Incluso durante las actualizaciones en segundo plano, las páginas existentes se sirven desde la caché, lo que garantiza que los usuarios siempre tengan contenido disponible.

Datos dinámicos: Puedes combinar ISR con solicitudes de datos dinámicos para actualizar solo partes específicas de una página, en lugar de regenerar la página completa.

Ahora, te explicaré los conceptos clave relacionados con ISR en Next.js:

getStaticProps: Es una función que puedes exportar en tus páginas de Next.js. Utilizas getStaticProps para obtener los datos necesarios para generar la página estática. Puedes realizar solicitudes a una API, acceder a una base de datos, o realizar cualquier operación asincrónica dentro de getStaticProps.

```jsx
// pages/product/[id].js

export default function Product({ data }) {
  return (
    <div>
      <h1>{data.title}</h1>
      <p>{data.description}</p>
    </div>
  );
}

export async function getStaticProps({ params }) {
  // Obtener los datos del producto según el parámetro de ruta 'id'
  const productId = params.id;
  const res = await fetch(`https://api.example.com/products/${productId}`);
  const data = await res.json();

  return {
    props: {
      data,
    },
    revalidate: 60, // Revalidar y regenerar la página cada 60 segundos
  };
}

export async function getStaticPaths() {
  // Obtener los ID de todos los productos disponibles
  const res = await fetch(`https://api.example.com/products`);
  const data = await res.json();

  const paths = data.map((product) => ({
    params: { id: product.id },
  }));

  return {
    paths,
    fallback: true,
  };
}
```

revalidate: Es una opción que puedes incluir en getStaticProps. Define el tiempo de revalidación (en segundos) para la página estática. Después de ese tiempo, la página se regenerará automáticamente en segundo plano en la siguiente solicitud.

fallback: Es una opción que puedes incluir en la función getStaticPaths. Puedes establecer fallback: true para permitir que Next.js genere páginas estáticas bajo demanda para rutas que no se generaron de antemano. Esto significa que si un usuario solicita una página que no se generó estáticamente, Next.js generará la página dinámicamente en ese momento y la almacenará en caché para futuras solicitudes.

Cuando defines **`fallback`** en la configuración de **`getStaticPaths`**, tienes tres posibles valores:

1. **fallback: false**: Este es el valor por defecto cuando no especificas el atributo **`fallback`**. Significa que todas las rutas deben ser generadas estáticamente en el momento de la compilación. Si un usuario solicita una ruta que no se generó estáticamente, Next.js devuelve una página 404 (no encontrada).

```jsx
return {
  paths: paths,
  fallback: false,
};

```

2. **fallback: true**: Al establecer **`fallback: true`**, permites que Next.js genere páginas estáticas bajo demanda para rutas que no se generaron de antemano. Esto significa que si un usuario solicita una ruta que no se generó estáticamente, Next.js generará la página dinámicamente en ese momento y la almacenará en caché para futuras solicitudes. En este caso, no se mostrará una página 404.

```jsx
return {
  paths: paths,
  fallback: true,
};
```

3. **fallback: "blocking"**: Al establecer **`fallback: "blocking"`**, Next.js generará la página estática bajo demanda al igual que con **`fallback: true`**. Sin embargo, a diferencia de **`fallback: true`**, cuando se genera una página bajo demanda, el servidor esperará a que se complete la generación antes de responder a la solicitud. Esto significa que el usuario experimentará una respuesta de carga más lenta, pero siempre se le servirá una página completamente generada en lugar de una página vacía con un esqueleto de carga.

```jsx
return {
  paths: paths,
  fallback: "blocking",
};
```

La elección entre **`fallback: true`** y **`fallback: "blocking"`** depende de tus necesidades y del comportamiento que desees lograr en tu aplicación.

Aquí hay algunos puntos a considerar para ayudarte a decidir cuál opción es mejor para ti:

1. **Velocidad de carga inicial**: Con **`fallback: true`**, las páginas que no se generaron estáticamente se generarán dinámicamente bajo demanda, lo que permite una carga inicial más rápida para el usuario. Esto es útil si tienes muchas páginas y solo deseas generar estáticamente las más visitadas o las más importantes.
2. **Experiencia del usuario**: Con **`fallback: "blocking"`**, aunque la carga inicial puede ser más lenta, el usuario verá una página completamente generada en lugar de una página vacía con un esqueleto de carga. Esto proporciona una mejor experiencia visual para el usuario, ya que no se muestra contenido en blanco mientras se genera la página.
3. **SEO y rendimiento**: Si te preocupa el SEO y el rendimiento, generar todas las páginas estáticamente durante la compilación (usando **`fallback: false`**) es la opción más recomendada. Esto garantiza que todas las páginas estén disponibles de inmediato y puedan ser indexadas por los motores de búsqueda sin tener que esperar a que se generen dinámicamente.

En resumen, si deseas priorizar la velocidad de carga inicial y no te importa mostrar páginas vacías con un esqueleto de carga, puedes optar por **`fallback: true`**. Si valoras una experiencia visual más completa y no te importa una carga inicial ligeramente más lenta, puedes optar por **`fallback: "blocking"`**. Sin embargo, si el SEO y el rendimiento son tus principales preocupaciones, es recomendable generar todas las páginas estáticamente usando **`fallback: false`**.

Revalidate

En Next.js, puedes utilizar **`getStaticProps`** para obtener datos necesarios para generar páginas estáticas. La opción **`revalidate`** te permite establecer un tiempo de revalidación (en segundos) para la página estática generada. Indica a Next.js cuándo debe intentar regenerar automáticamente la página estática para mantenerla actualizada.

Ejemplo de cómo utilizar **`revalidate`** en **`getStaticProps`**:

```jsx
export async function getStaticProps() {
  // Obtener los datos para generar la página estática
  const data = await fetch("https://api.example.com/data");
  const jsonData = await data.json();

  return {
    props: {
      data: jsonData,
    },
    revalidate: 60, // Revalidar y regenerar la página cada 60 segundos
  };
}
```

En este ejemplo, hemos establecido **`revalidate`** en 60 segundos. Esto significa que después de la generación inicial de la página estática, Next.js intentará regenerar automáticamente la página cada 60 segundos. Esto se hace en segundo plano, sin afectar la entrega de la página al usuario.

Al regenerar la página, Next.js realizará una nueva llamada a **`getStaticProps`** para obtener los datos actualizados y generar una nueva versión de la página estática. Si hay cambios en los datos, la página se actualizará con los nuevos datos en la próxima solicitud.

El uso de **`revalidate`** es especialmente útil cuando tienes datos que cambian con el tiempo, pero no con demasiada frecuencia. Puedes establecer un tiempo de revalidación adecuado según la frecuencia con la que deseas que se actualice la página.

Es importante destacar que **`revalidate`** solo funciona en el entorno de producción. Durante el desarrollo local, las páginas siempre se regenerarán con cada solicitud.

En resumen, la opción **`revalidate`** en **`getStaticProps`** te permite establecer un tiempo de revalidación para regenerar automáticamente páginas estáticas y mantenerlas actualizadas. Es útil cuando tienes datos que cambian con el tiempo, pero no con demasiada frecuencia.

## SSR: Server Side Rendering

Cuando necesito tener información que se va actualizando 

## SSR (Server-Side Rendering, o renderizado en el lado del servidor)

es una técnica utilizada en Next.js para generar y enviar páginas HTML completamente renderizadas desde el servidor al cliente. Esto permite que el contenido inicial se cargue rápidamente y sea accesible para los motores de búsqueda, mejorando la experiencia del usuario y el SEO.

En Next.js, el SSR se implementa utilizando la función **`getServerSideProps`** en una página. Esta función se ejecuta en el servidor cada vez que se realiza una solicitud a esa página y se utiliza para obtener los datos necesarios para renderizar la página.

```jsx
// pages/index.js

import React from 'react';

function HomePage({ data }) {
  return (
    <div>
      <h1>My Server-Side Rendered Page</h1>
      <p>{data}</p>
    </div>
  );
}

export async function getServerSideProps() {
  // Aquí puedes realizar llamadas a API u obtener datos necesarios para renderizar la página
  const response = await fetch('https://api.example.com/data');
  const data = await response.json();

  return {
    props: {
      data: data,
    },
  };
}

export default HomePage;
```

En este ejemplo, la función **`getServerSideProps`** se utiliza para obtener datos de una API (**`https://api.example.com/data`**) y se pasan como propiedades (**`props`**) a la página **`HomePage`**. Luego, esos datos se pueden usar en el componente **`HomePage`**.

Algunos casos de uso comunes de SSR en Next.js incluyen:

1. Carga inicial rápida: Al renderizar la página en el servidor, se envía contenido HTML completo al cliente, lo que permite que la página se muestre rápidamente, incluso en conexiones lentas.
2. SEO (Optimización para motores de búsqueda): Al proporcionar contenido renderizado en el servidor, los motores de búsqueda pueden indexar y comprender mejor el contenido de tu página, lo que puede mejorar la clasificación en los resultados de búsqueda.
3. Datos personalizados por solicitud: Puedes utilizar **`getServerSideProps`** para obtener datos específicos de cada solicitud y personalizar la página en función de esos datos. Esto es útil para mostrar contenido dinámico, como datos de usuario o resultados filtrados.

Algunas buenas prácticas al usar SSR en Next.js son:

- Limitar la cantidad de datos que se recuperan en **`getServerSideProps`** para mejorar el rendimiento.
- Utilizar la función **`getServerSideProps`** solo en las páginas que realmente lo necesiten. Para páginas estáticas o con contenido estático, se puede utilizar el enfoque de generación estática (**`getStaticProps`**).
- Evitar realizar operaciones costosas en el servidor, como cálculos complejos o llamadas a bases de datos lentas. En su lugar, considera almacenar en caché los resultados cuando sea posible.

Recuerda que SSR es solo una opción en Next.js, y también puedes utilizar la generación estática o la generación de páginas dinámicas según tus necesidades específicas.

Al implementar SSR (Server-Side Rendering) en Next.js, puedes utilizar encabezados de almacenamiento en caché para mejorar el rendimiento y la eficiencia de las solicitudes repetidas a tus páginas renderizadas en el servidor. Los encabezados de almacenamiento en caché permiten a los clientes, como navegadores web o proxies, almacenar en caché una copia de la respuesta del servidor y reutilizarla en futuras solicitudes, evitando así la necesidad de volver a solicitar los mismos recursos al servidor.

Aquí hay una explicación de cómo implementar el uso de encabezados de almacenamiento en caché en SSR en Next.js, junto con algunas buenas prácticas y ejemplos:

1. **Configuración de los encabezados de almacenamiento en caché**: Puedes establecer los encabezados de almacenamiento en caché en la respuesta del servidor utilizando el objeto **`res`** en la función **`getServerSideProps`**. Los encabezados de almacenamiento en caché más comunes son **`Cache-Control`** y **`Expires`**. A continuación, se muestra un ejemplo:

```jsx
export async function getServerSideProps({ res }) {
  // Realizar lógica para obtener datos necesarios para la página

  // Establecer encabezados de almacenamiento en caché
  res.setHeader('Cache-Control', 'public, max-age=3600'); // Caché durante 1 hora
  res.setHeader('Expires', new Date(Date.now() + 3600000).toUTCString()); // Expira en 1 hora

  // Devolver los datos como propiedades para renderizar la página
  return {
    props: {
      // Datos para la página
    },
  };
}
```

En este ejemplo, se establecen dos encabezados de almacenamiento en caché: **`Cache-Control`** y **`Expires`**. **`Cache-Control`** indica al cliente que puede almacenar en caché la respuesta durante 1 hora (3600 segundos). **`Expires`** proporciona una fecha y hora de vencimiento para cuando la respuesta dejará de ser válida (en este caso, 1 hora en el futuro).

1. **Buenas prácticas y consideraciones**:
- Utiliza valores adecuados para **`Cache-Control`** y **`Expires`** según tus necesidades y la frecuencia con la que los datos cambian en tu aplicación.
- Si los datos cambian con frecuencia y necesitas que la respuesta se actualice constantemente, puedes establecer **`Cache-Control: no-cache`** para indicar al cliente que siempre verifique la respuesta con el servidor antes de usar la versión en caché.
- Considera utilizar **`Cache-Control: private`** si el contenido es específico del usuario y no debe almacenarse en caché en servidores proxy compartidos.
- Si estás utilizando un sistema de caché compartido, como Redis, puedes establecer los encabezados de almacenamiento en caché en el sistema de caché en lugar de en la respuesta directamente.

### **Cache-Control**

Si deseas aplicar el encabezado de almacenamiento en caché **`Cache-Control`** con la directiva **`stale-while-revalidate`** en una página dinámica en Next.js, puedes hacerlo dentro de la función **`getServerSideProps`**. La directiva **`stale-while-revalidate`** permite al cliente mostrar una respuesta en caché mientras se está revalidando con el servidor en segundo plano. Esto mejora la velocidad de carga y la experiencia del usuario al mostrar contenido almacenado en caché mientras se actualiza.

```jsx
// pages/dynamic.js

import React from 'react';

function DynamicPage({ data }) {
  return (
    <div>
      <h1>Dynamic Page</h1>
      <p>{data}</p>
    </div>
  );
}

export async function getServerSideProps({ res }) {
  // Obtener datos dinámicos de la API
  const response = await fetch('https://api.example.com/data');
  const data = await response.json();

  // Establecer encabezado de almacenamiento en caché con la directiva stale-while-revalidate
  res.setHeader('Cache-Control', 's-maxage=10, stale-while-revalidate');

  return {
    props: {
      data,
    },
  };
}

export default DynamicPage;
```

En este ejemplo, la página **`DynamicPage`** muestra datos dinámicos obtenidos de una API. En la función **`getServerSideProps`**, realizamos una solicitud a la API para obtener los datos. Luego, establecemos el encabezado de almacenamiento en caché **`Cache-Control`** con la directiva **`s-maxage=10, stale-while-revalidate`**. Esto indica que la respuesta puede almacenarse en caché durante 10 segundos (**`s-maxage=10`**), y durante ese tiempo, el cliente puede utilizar la versión en caché mientras el servidor está revalidando (**`stale-while-revalidate`**).

Con esta configuración, la primera vez que se acceda a la página, se realizará una solicitud a la API para obtener los datos y se almacenará en caché durante 10 segundos. Si otro usuario o el mismo usuario accede a la página dentro de esos 10 segundos, se mostrará la versión en caché mientras se realiza una nueva solicitud al servidor para revalidar los datos.

Recuerda ajustar el valor **`s-maxage`** según tus necesidades. Puedes establecer un valor más largo si los datos no cambian con frecuencia, o un valor más corto si los datos se actualizan con mayor frecuencia.

Al utilizar la directiva **`stale-while-revalidate`**, puedes lograr una combinación de velocidad de carga rápida y datos actualizados en tiempo real en páginas dinámicas.

## Casos en los que puedo necesitar utilizar el req de getServerSideProps

El parámetro **`req`** en la función **`getServerSideProps`** de Next.js proporciona acceso al objeto de solicitud HTTP entrante. Puedes utilizarlo cuando necesites obtener información específica de la solicitud o realizar lógica adicional basada en esa información.

```jsx
import { Layout } from '@/components/Layout';

const ExamplePage = ({ userAgent }) => {
  return (
    <Layout title="Example Page">
      <h1>Example Page</h1>
      <p>User Agent: {userAgent}</p>
    </Layout>
  );
};

export async function getServerSideProps({ req }) {
  const userAgent = req.headers['user-agent'] || '';

  return {
    props: {
      userAgent,
    },
  };
}

export default ExamplePage;
```

En este ejemplo, estamos obteniendo el valor del encabezado "User-Agent" de la solicitud HTTP utilizando **`req.headers['user-agent']`**. Luego, pasamos ese valor como prop **`userAgent`** a la página **`ExamplePage`** para mostrarlo en el componente.

El objeto **`req`** también proporciona otras propiedades y métodos útiles, como **`req.method`** para obtener el método HTTP utilizado en la solicitud (GET, POST, etc.), **`req.url`** para obtener la URL de la solicitud, y **`req.cookies`** para obtener las cookies de la solicitud.

Puedes utilizar **`req`** en **`getServerSideProps`** para realizar acciones adicionales, como autenticación basada en cookies, enrutamiento condicional basado en la URL o personalización de los datos recuperados según la información de la solicitud.

Recuerda que **`getServerSideProps`** se ejecuta en el servidor para cada solicitud, por lo que puedes acceder a la información de la solicitud y realizar lógica específica del servidor antes de renderizar la página.

## API Route

El API Route es útil en varias situaciones, como:

1. Crear puntos finales personalizados para acceder a datos o funcionalidades específicas de tu aplicación.
2. Implementar servicios web o integraciones con API externas.
3. Realizar operaciones de servidor antes de renderizar una página.
4. Crear puntos finales para comunicarse con una base de datos u otro sistema de almacenamiento.

Ahora, veamos algunas mejores prácticas al utilizar el API Route de Next.js:

1. Organización de archivos: Se recomienda crear una carpeta dedicada para los API Routes en tu proyecto. Por ejemplo, puedes crear una carpeta llamada "api" en el directorio raíz de tu aplicación. Dentro de esa carpeta, puedes tener archivos separados para diferentes rutas o agruparlos por funcionalidad.
2. Estructura de archivos: Cada archivo dentro de la carpeta de API Routes representa un punto final y debe exportar una función con los objetos **`req`** (la solicitud HTTP) y **`res`** (la respuesta HTTP) como parámetros. Puedes utilizar las mismas técnicas que usarías para crear una ruta en Express.js.
3. Manejo de métodos HTTP: Puedes utilizar condicionales para manejar diferentes métodos HTTP en el mismo punto final. Por ejemplo, puedes utilizar un condicional **`if`** para verificar si la solicitud es de tipo GET, POST, PUT o DELETE y responder en consecuencia.
4. Validación de datos: Si recibes datos en una solicitud POST o PUT, es importante realizar una validación adecuada antes de procesarlos. Puedes utilizar bibliotecas como Joi o Yup para definir esquemas de validación y asegurarte de que los datos cumplan con ciertos criterios.
5. Uso de TypeScript: Si estás utilizando TypeScript en tu proyecto, puedes aprovechar sus beneficios al crear API Routes. Puedes agregar tipos a los parámetros **`req`** y **`res`** para tener una mejor autocompletado y verificación de tipos. También puedes definir interfaces para los datos que recibes o envías en las solicitudes.

Aquí hay una guía rápida para crear un API Route con TypeScript:

1. Crea un nuevo archivo en la carpeta de API Routes. Por ejemplo, **`api/example.ts`**.
2. Exporta una función con los parámetros **`req`** y **`res`** y utiliza los tipos **`NextApiRequest`** y **`NextApiResponse`** proporcionados por Next.js para tener una mejor autocompletado y verificación de tipos.
3. Define la lógica de tu punto final utilizando los métodos y propiedades disponibles en **`req`** y **`res`**.
4. Importa y usa cualquier biblioteca o servicio externo necesario para tu punto final.
5. Exporta la función y guarda el archivo.

```jsx
// api/example.ts

import { NextApiRequest, NextApiResponse } from 'next';

type Data = {
  message: string;
};

export default function handler(req: NextApiRequest, res: NextApiResponse<Data>) {
  if (req.method === 'GET') {
    res.status(200).json({ message: 'Hello from API!' });
  } else {
    res.status(405).json({ message: 'Method Not Allowed' });
  }
}
```

## Serverless

Los serverless, también conocidos como computación sin servidor o Function as a Service (FaaS), son un modelo de computación en la nube en el cual el proveedor de servicios en la nube es responsable de administrar y ejecutar el código del usuario en respuesta a eventos específicos, sin que el usuario tenga que preocuparse por la infraestructura subyacente.

En un entorno serverless, los desarrolladores pueden escribir y cargar su código en la nube, y el proveedor de servicios se encarga de ejecutarlo en función de los eventos desencadenantes. Estos eventos pueden ser solicitudes HTTP, actualizaciones en bases de datos, cambios en el sistema de archivos, eventos de tiempo, entre otros. Cuando se produce un evento, el proveedor de servicios ejecuta automáticamente el código asociado a ese evento y proporciona la respuesta correspondiente.

La principal ventaja de la computación serverless es que permite a los desarrolladores enfocarse en la lógica de su aplicación sin tener que preocuparse por la administración de servidores, escalabilidad, aprovisionamiento o mantenimiento de la infraestructura. Los recursos se asignan dinámicamente según la demanda, lo que permite un uso eficiente de los recursos y un escalado automático para manejar picos de carga.

Además, los servicios serverless suelen tener un modelo de precios basado en el consumo de recursos y la ejecución de código, lo que permite pagar solo por los recursos utilizados en lugar de mantener servidores en funcionamiento continuo.

Ejemplos populares de servicios serverless incluyen AWS Lambda de Amazon Web Services, Azure Functions de Microsoft Azure y Google Cloud Functions de Google Cloud. Estos servicios ofrecen la posibilidad de ejecutar código en varios lenguajes de programación y se integran con otros servicios en la nube para construir aplicaciones escalables y reactivas.

## Serverless con Vercel

Los serverless con Vercel se refieren a una forma de desarrollar y desplegar aplicaciones en la nube sin tener que preocuparse por la administración de servidores o infraestructura subyacente. Vercel es una plataforma de alojamiento y despliegue de aplicaciones web que permite a los desarrolladores implementar sus aplicaciones de manera rápida y sencilla.

El enfoque serverless implica que el desarrollador solo se ocupa de escribir el código de la aplicación, sin tener que preocuparse por la gestión del servidor o la escalabilidad. Vercel se encarga de proporcionar una infraestructura escalable y segura en la nube, así como de gestionar aspectos como el escalado automático, el equilibrio de carga y la distribución global de la aplicación.

Cuando se utiliza Vercel para desarrollar aplicaciones serverless, el código se ejecuta en funciones individuales que se activan en respuesta a eventos, como solicitudes HTTP. Cada función se ejecuta de forma independiente y aísla su estado, lo que permite un alto nivel de escalabilidad y rendimiento.

Además, Vercel ofrece integración con diferentes lenguajes de programación, frameworks y herramientas populares, lo que facilita el desarrollo y despliegue de aplicaciones web en diferentes entornos. También proporciona funcionalidades como la generación de vistas previas, la implementación de actualizaciones en vivo (live updates) y la gestión de dominios personalizados.

En resumen, los serverless con Vercel permiten a los desarrolladores centrarse en escribir el código de sus aplicaciones sin preocuparse por la infraestructura subyacente, lo que agiliza el desarrollo y el despliegue de aplicaciones web de manera escalable y segura.
