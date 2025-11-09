import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { ContectsComponent } from './contects/contects.component';
import { LoginComponent } from './login/login.component';
import { ReactiveFormsModuleComponent } from './reactive-forms-module/reactive-forms-module.component';
import { DropdownComponent } from './dropdown/dropdown.component';
import { RegstrionFormComponent } from './regstrion-form/regstrion-form.component';
import { registerAppScopedDispatcher } from '@angular/core/primitives/event-dispatch';
import { EpaperComponent } from './epaper/Epaper.component';


export const routes: Routes = [

    { path: 'Home', component: HomeComponent, title: 'Home' },
    { path: 'Aboutus', component: AboutusComponent, title: 'Abouts' },
    { path: 'Contects', component: ContectsComponent, title: 'Contects' },
    {path:'Login',component:LoginComponent,title:'UserLogin'},
    {path:'ReactiveForm',component:ReactiveFormsModuleComponent,title:'Reactive form'},
    {path:'Dropdowan',component:DropdownComponent,title:'Dropdowan'},
    {path: 'RegstrionForm',component:RegstrionFormComponent,title:'Regstrion Form'},
    {path:'epaper',component:EpaperComponent,title:'Epaper'}
    
];
