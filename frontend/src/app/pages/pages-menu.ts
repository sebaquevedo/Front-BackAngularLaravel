import { NbMenuItem } from '@nebular/theme';

export const MENU_ITEMS: NbMenuItem[] = [
  {
    title: 'Dashboard',
    icon: 'nb-home',
    link: '/pages/dashboard',
    home: true,
  },
  {
    title: 'Áreas Planificadas',
    icon: 'nb-location',
    link: '/pages/areas',
    children: [
      {
        title: 'Lista de Áreas',
        link: '/pages/areas',
      },
      {
        title: 'Nueva Área Planificada',
        link: '/pages/areas/nueva',
      },
    ],
  },
  {
    title: 'Mis Cambios',
    icon: 'nb-compose',
    link: '/pages/miscambios',
  },
  {
    title: 'Usuarios',
    icon: 'nb-person',
    link: '/pages/usuarios',
    children: [
      {
        title: 'Usuarios Registrados',
        link: '/pages/usuarios',
      },
      {
        title: 'Crear Nuevo Usuario',
        link: '/pages/usuarios/nuevo',
      },
    ],
  }
];