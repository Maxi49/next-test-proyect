import SideNav from '@/app/ui/dashboard/sidenav';

export const experimental_ppr = true;
/**
 * Lo que hace el partial pre rendering es basicamente hacer un
 * improvment en el renreizado de componentes al
 * directamente cargar los datos estaticos y esperar a los datos  dinamicos
 */

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex h-screen flex-col md:flex-row md:overflow-hidden">
      <div className="w-full flex-none md:w-64">
        <SideNav />
      </div>
      <div className="flex-grow p-6 md:overflow-y-auto md:p-12">{children}</div>
    </div>
  );
}

/**
 * Server Actions: Te permite hacer llamadas al servidor
 * o cualquier cosa relacionada sin tener que por ejemplo
 * crear endpoints o API's sin vulnerar el codigo en el front
 */
// Para que nos sirve crear otro layout, por ejemplo en el caso de tener un sidebar que querramos mostrar unicamente en esta pagina podemos usar el layout

// Esto hace que el sidebar se quede fijo y no se re-renderice
