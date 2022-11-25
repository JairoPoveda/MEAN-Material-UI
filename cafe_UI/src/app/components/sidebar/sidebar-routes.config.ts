import {  RouteInfo } from './sidebar.metadata';

export const ROUTES: RouteInfo[] = [
    { path: 'dashboard', title: 'All Sales and Satistics',  icon: 'dashboard', class: '' },
    { path: 'table-list', title: 'All Lastest Orders',  icon:'person', class: '' },
    { path: 'user-profile', title: 'Overview(All)',  icon:'content_paste', class: '' },
    { path: 'maps', title: 'Maps',  icon:'location_on', class: '' },
    { path: 'logout', title: 'Logout', icon: 'unarchive', class:''},

	//{ path: 'typography', title: 'Typography',  icon:'library_books', class: '' },
   // { path: 'icons', title: 'Icons',  icon:'bubble_chart', class: '' },
   // { path: 'notifications', title: 'Notifications',  icon:'notifications', class: '' },
   // { path: 'upgrade', title: 'Upgrade to PRO',  icon:'unarchive', class: 'active-pro' },
];
