import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { AppComponent } from './main/app.component';

import { HeroesComponent } from './hero/heroes/heroes.component';
import { HeroDetailComponent } from './hero/hero-detail/hero-detail.component';
import { DashboardComponent } from './dashboard/dashboard.component';

import { HeroService } from './services/hero.service';

import { AppRoutingModule } from './app-routing.module';

@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        AppRoutingModule
    ],
    declarations: [
        AppComponent,
        HeroDetailComponent,
        HeroesComponent,
        DashboardComponent
    ],
    providers: [
        HeroService
    ],
    bootstrap: [
        AppComponent
    ]
})
export class AppModule { }
