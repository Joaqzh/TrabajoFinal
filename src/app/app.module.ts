import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'; // Para usar forms

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './usuario/login/login.component';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { BusquedaComponent } from './busqueda/busqueda.component';
import { BusquedaCriteriaComponent } from './busqueda/busqueda-criteria/busqueda-criteria.component';
import { BusquedaResultComponent } from './busqueda/busqueda-result/busqueda-result.component';
import { BlogComponent } from './blog/blog.component';
import { ContactoComponent } from './contacto/contacto.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// Imports de Material Angular
import {MatToolbarModule} from '@angular/material/toolbar'; //Header
import {MatGridListModule} from '@angular/material/grid-list'; // Para grillas
import {MatCardModule } from '@angular/material/card';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import {MatExpansionModule} from '@angular/material/expansion';

// Para http request
import { HttpClientModule } from '@angular/common/http';
import { CreatePostComponent } from './blog/create-post/create-post.component';
import { ListPostComponent } from './blog/list-post/list-post.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    HeaderComponent,
    BusquedaComponent,
    BusquedaCriteriaComponent,
    BusquedaResultComponent,
    BlogComponent,
    CreatePostComponent,
    ListPostComponent,
    ContactoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatGridListModule,
    MatCardModule,
    FormsModule,
    MatInputModule,
    MatButtonModule,
    HttpClientModule,
    MatExpansionModule
  ],
  providers: [/*BusquedaService*/],
  bootstrap: [AppComponent]
})
export class AppModule { }

