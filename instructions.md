Enrutado:

La aplicacion comienza con un /
cada que quieras ingresar a un nuevo componente
vas a necesitar una carpeta para este componente
y crear su propio page.tsx

use client y use server

La cuestion es que los componentes se pueden renderizar tanto desde el servidor como desde el cliente

La idea es usar use client o user server dependiendo que
caracteristicas necesites usar de cada uno

Desde el client se puede sacar el path por ejemplo
y desde el server se puede sacar el objeto request por ejemplo

metodos:

usePathname = extrae el path url
useSearchParams = extrae los parametros de la URL
URLSearchParams = te permite en base a una url ajustar los parametros
useRouter = te permite ajustar el enrutando
useDebouncedCallback = Espera la pausa del input de un usuario para ejecutar algo

revalidatePath = refresca una pagina (evita el cache)
redirect = redirecciona al usuario

'use server' = Todo lo que este debajo en un propio archivo va a ser exclusivo
del servidor y no se van a pasar los datos al cliente.
(Permite acceder a distintos metodos, librerias etc del propio servidor)

'use client' = El archivo va a tener acceso a todo el DOM para su modificacion
como asi hooks etc

Los datos si se van a mostrar dentro del cliente

Default Pages :

error.tsx = Funciona como un catch all
not-found = en conjunto con la funcion notFound (de next/navigation) hacemos que al haber un 404 se redireccione a ese archivo

[something] = basicamente estamos creando un archiuvo que es una URL con parametro. Por ejemplo = smt/[id]/edit

cuando un page esta por debajo de un file-param recibe como prop el parametro
de la URL

Loading.tsx = archivo por defecto de cuando algo no carga

<Suspense> = para esperar de forma asincrona los datos de un archivo
(con su correspondiente fallback)

los paes pueden acceder a los searchParams de una URL
