import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductsComponent } from './products/products.component';
import { DashComponent } from './dash/dash.component';
import { LoginComponent } from './login/login.component';
import { UsersComponent } from './users/users.component';
import { ClientsComponent } from './clients/clients.component';
import { OrdersComponent } from './orders/orders.component';
import { ExpedicoesComponent } from './expedicoes/expedicoes.component';
import { FornecedoresComponent } from './fornecedores/fornecedores.component';
import { EstoquesComponent } from './estoques/estoques.component';


const routes: Routes = [
  {path: '', component: OrdersComponent},
  {path: 'dashboard', component: DashComponent},
  {path: 'produtos', component: ProductsComponent},
  {path: 'usuarios', component: UsersComponent},
  {path: 'login', component: LoginComponent},
  {path: 'clientes', component: ClientsComponent},
  {path: 'pedidos', component: OrdersComponent},
  {path: 'expedicoes', component: ExpedicoesComponent},
  {path: 'fornecedores', component: FornecedoresComponent},
  {path:'estoques', component:EstoquesComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
