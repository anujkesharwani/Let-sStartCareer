import { registerLocaleData } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { GalleryComponent } from './gallery/gallery.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import {ClassXIIComponent} from './class-xii/class-xii.component';
import {ClassXIComponent} from  './class-xi/class-xi.component'
import {ClassXComponent} from  './class-x/class-x.component'
import { GraduationComponent } from './graduation/graduation.component';


const routes: Routes = [
  {path:"",component:HomeComponent},
  // {path:"home",component:HomeComponent},
  {path:"classXII",component:ClassXIIComponent},
  {path:"classXI",component:ClassXIComponent},
  {path:"classX",component:ClassXComponent},
  {path:"graduation",component:GraduationComponent},
  {path:"about",component:AboutComponent},
  {path:"contact",component:ContactComponent},
  {path:"gallery",component:GalleryComponent},
  {path:"login",component:LoginComponent},
  {path:"register",component:RegisterComponent},
  {path:"**",component:HomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
