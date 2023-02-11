import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './usuario/login/login.component';
import { BusquedaComponent } from './busqueda/busqueda.component';
import { BlogComponent } from './blog/blog.component';
import { ContactoComponent } from './contacto/contacto.component';

const routes: Routes = [
  {path: '', redirectTo: 'home', pathMatch: 'full'}, //redirige a home cuando no hay informacion luego del slash
  {path:'home', component: HomeComponent},  // si yo entro a /home rediregeme al compomente home
  {path:'blog', component: BlogComponent}, // si yo entro a /blog rediregeme al compomente login
  {path:'login', component: LoginComponent}, // si yo entro a /login rediregeme al compomente login
  {path:'busqueda', component: BusquedaComponent},
  {path:'contacto', component: ContactoComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
