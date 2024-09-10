import NextAuth from 'next-auth';
import { authConfig } from './auth.config';

export default NextAuth(authConfig).auth;
// Exportamos de manera global y default el objeto auth

/**
 * Auth en este caso es un objeto con toda la informacion de la sesion, tanto si esta iniciada, como si no
 * y si esta quien la inicio etc. Lo que permite despues poder acceder a todos estos datos desde
 * cualquier parte del codigo
 */

/**
 *
 * Nosotros tecnicamente ya configuramos NextAuth para que
 * utilice tanto la configuracion como el Credentials (o proveedor)
 * para que entienda como manejar las autenticaciones y atorizaciones
 * Entonces una vez dado eso dentro del middleware, como recibe cualquier solicitud, va a agarrar NextAuth con la configuracion q le pasemos y verificar si el usuario esta loggeado o no, dado que no sea el caso, te redirige automaticamente a la pagina de logging
 * Si no, te hace entrar directo
 */

export const config = {
  // https://nextjs.org/docs/app/building-your-application/routing/middleware#matcher
  matcher: ['/((?!api|_next/static|_next/image|.*\\.png$).*)'],
  // Es un regex para que la API no actue aca
  // En este caso no funciona para paths -> api, _next/static, _next/image
  // y cualquier terminacion .png
};
