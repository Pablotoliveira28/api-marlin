import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListarTodosComponent } from './listar-todos/listar-todos.component';
import { CreateComponent } from './create/create.component';
import { ViewComponent } from './view/view.component';

const routes: Routes = [
  {
    path: 'listar',
    component: ListarTodosComponent,
  },
  {
    path: '',
    component: ListarTodosComponent,
  },
  {
    path: 'novo',
    component: CreateComponent,
  },
  {
    path: 'view/:id',
    component: ViewComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
