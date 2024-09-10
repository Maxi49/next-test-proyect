import type { NextAuthConfig } from 'next-auth';

export const authConfig = {
  pages: {
    signIn: '/login',
  },
  callbacks: {
    // Este objeto se usa una vez se haya devuelvo una respuesta por parte de NextAuth (No es literal, si no que NextAuth lo maneja por su cuenta)
    authorized({ auth, request: { nextUrl } }) {
      /*
        Authorize toma -> 
        Auth: Tiene la sesion del usuario
        request: Tiene la peticion a resolver (no se usa porque tecnicamente ya se le pasa a la funcion directamente)
      */
      const isOnDashboard = nextUrl.pathname.startsWith('/dashboard');
      // Agarramos el pathname del dashboard
      const isLoggedIn = !!auth?.user;
      // Si el usuario esta o no loggeado

      if (isOnDashboard) {
        if (isLoggedIn) {
          return true;
        }
        return false;

        //Si esta en el dashboard
        // y si esta loggeado retorna true
        // Si no se redirige a a la pagina de logging
      } else if (isLoggedIn) {
        //Si ya estaba loggeado de antes, te redirige al dashboard
        return Response.redirect(new URL('/dashboard', nextUrl));
      }

      return true;
      //Retorna true autorizado, de lo contrario chau
    },
  },
  providers: [], // Add providers with an empty array for now
} satisfies NextAuthConfig;

/**
 * El signo de exclamacion siempre convierte un valor a booleano y lo niega
 * Usar 2 signos de exclamacion permite convertir cualquier valor a booleano sin cambiar su valor original
 */
