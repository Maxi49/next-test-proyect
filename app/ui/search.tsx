'use client';

import { MagnifyingGlassIcon } from '@heroicons/react/24/outline';
import { usePathname, useSearchParams, useRouter } from 'next/navigation';
import { useDebouncedCallback } from 'use-debounce';
/**
 * useDebounceCallBack
 *
 * Cuando tenemos un search params lo que suele pasar es que
 * se hacen consultas a medida que el usuario escribe.
 * El problema con esto es que son demasiadas consultas
 * al mismo tiempo.
 *
 * Por lo que useDebounceCallBack espera a que el input del
 * usuario deje de actualizarse por unos segundos y recien ahi
 * ejecuta la funcion que le sigue
 */

export default function Search({ placeholder }: { placeholder: string }) {
  const searchParams = useSearchParams();
  console.log(searchParams);
  // Extrae los parametros de la URL (extrae en realida la URL en si) y espera cualquier cambio que se haga en esta (inclusive aunque no haya un parametro)

  const pathName = usePathname();
  /* Extraemos el pathName para trabajar con este */
  const { replace } = useRouter();
  /**Extrameos la funcion replace para modificar la URL */

  const handleSearch = useDebouncedCallback((term) => {
    console.log('Seaching...', term);
    const params = new URLSearchParams(searchParams);
    /**
     * Despues pasamos esa URL a URLSearchParams y esto nos permite
     * poder moficarla a nuestro propio gusto
     */
    params.set('page', '1');
    if (term) {
      params.set('query', term);
      /*Aplicamos el valor que se nos pasa desde el search
      y la convertimos en query
      */
    } else {
      params.delete('query');
    }
    replace(`${pathName}?${params.toString()}`);
    console.log(searchParams.get('query'));
    /**
     * Aca reemplazamos la URL con el path actual que ya tenemos
     * y hacemos una query basada en los parametros que seteamos
     */
  }, 300);

  /**
   * Como funciona? :
   * searchParams() agarra los valores de la url, la query basicamente.
   * Lo que hago es pasarle estos valores a URLSearchParams
   * para poder modificar
   *
   */

  return (
    <div className="relative flex flex-1 flex-shrink-0">
      <label htmlFor="search" className="sr-only">
        Search
      </label>
      <input
        onChange={(e) => handleSearch(e.target.value)}
        className="peer block w-full rounded-md border border-gray-200 py-[9px] pl-10 text-sm outline-2 placeholder:text-gray-500"
        placeholder={placeholder}
        defaultValue={searchParams.get('query')?.toString()}
        // Esto hace que se sincronice el valor del input con el de la URL
      />
      <MagnifyingGlassIcon className="absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 peer-focus:text-gray-900" />
    </div>
  );
}
