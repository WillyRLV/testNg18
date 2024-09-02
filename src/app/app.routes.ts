import { Routes } from '@angular/router';
import { TimeComponentComponent } from './time-component/time-component.component';
import { TableComponent } from './table/table.component';
import { CustomHooksComponent } from './custom-hooks/custom-hooks.component';

export const routes: Routes = [
    { path: 'datatable', component: TableComponent },
    { path: 'hooks', component: CustomHooksComponent },
];
