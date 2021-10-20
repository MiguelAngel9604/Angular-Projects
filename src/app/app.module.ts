import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';


//Routes
import { APP_ROUTING } from './app.routes';

//Components
import { AppComponent } from './app.component';
import { FooterComponent } from './components/footer/footer.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { HeroesComponent } from './components/heroes/heroes.component';

//Services
import { HeroesService } from './components/Services/heroes.services';
import { HeroeComponent } from './components/heroe/heroe.component';
import { HeroebusquedaComponent } from './components/heroebusqueda/heroebusqueda.component';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    NavbarComponent,
    HomeComponent,
    AboutComponent,
    HeroesComponent,
    HeroeComponent,
    HeroebusquedaComponent
  ],
  imports: [
    BrowserModule,
    APP_ROUTING
  ],
  providers: [
    HeroesService
  ],
  bootstrap: [AppComponent],
})
export class AppModule { }
