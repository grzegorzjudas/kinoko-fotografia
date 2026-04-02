import type { NavMenuItem } from './NavMenu.types';

export const MENU_ITEMS: NavMenuItem[] = [
    {
        label: 'Oferta',
        children: [
            { label: 'Sesje ciążowe', to: '/oferta/ciazowe' },
            { label: 'Sesje noworodkowe', to: '/oferta/noworodkowe' },
            { label: 'Sesje dziecięce', to: '/oferta/dzieciece' },
            { label: 'Sesje rodzinne', to: '/oferta/rodzinne' },
            { label: 'Sesje kobiece', to: '/oferta/kobiece' },
            { label: 'Sesje wizerunkowe', to: '/oferta/wizerunkowe' },
            { label: 'Sesje artystyczne', to: '/oferta/artystyczne' },
            { label: 'Sesje produktowe', to: '/oferta/produktowe' },
        ],
    },
    { label: 'Kontakt', to: '/kontakt' },
];
