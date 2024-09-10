import RevenueChart from '@/app/ui/dashboard/revenue-chart';
import LatestInvoices from '@/app/ui/dashboard/latest-invoices';
import { lusitana } from '@/app/ui/fonts';
import { Suspense } from 'react';
import {
  CardSkeleton,
  LatestInvoicesSkeleton,
  RevenueChartSkeleton,
} from '../ui/skeletons';
import CardWrapper from '../ui/dashboard/cards';
import { auth } from '@/auth';

export default async function Page() {
  const session = await auth();
  console.log(session);
  return (
    <main>
      <h1 className={`${lusitana.className} mb-4 text-xl md:text-2xl`}>
        Dashboard
      </h1>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        <Suspense fallback={<CardSkeleton />}>
          <CardWrapper />
        </Suspense>
      </div>
      <div className="mt-6 grid grid-cols-1 gap-6 md:grid-cols-4 lg:grid-cols-8">
        <Suspense fallback={<RevenueChartSkeleton />}>
          <RevenueChart />
        </Suspense>
        <Suspense fallback={<LatestInvoicesSkeleton />}>
          <LatestInvoices />
        </Suspense>
      </div>
    </main>
  );
}
// File system routing
/**
 * Basicamente enruta la aplicacion basandose en los archivos
 * (esto ya de por si solo funciona bld ajjaja)
 * Tiene que devolver si o si un export default
 */

/**
 * Streaming: Hay dos tipos de renderizados, static rendering, y dynamic rendering. La idea es usar uno u otro dependiendo el contexto
 * Cuando se trata de contenido dionamico por ejemplo o estatico que tarda en cargar podemos hacer algo llamado streaming
 * La idea del streaming es ir cargando la pagina a medida que vamos teniendo los datos
 *
 * Lo bueno de Next es que se puede hacer un fetching de datos dentro de un propio componente, entonces podriamos hacer que
 * ese componente se renderice unicamente cuando los datos esten listos sin tener que frenar la renderizacion de datos que ya existen mucho mas rapido
 *
 * En este caso usamos el componente suspense, que espera de forma asincrona al componente y en el mientras se puede agregar un fallback
 * El fallback permite renderizar otro tipo de componentes en el mientras tanto, en este caso un esqueleto del componente que se esta esperando
 *
 *
 */
