import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutUsComponent } from './about-us/about-us.component';
import { BookingComponent } from './booking/booking.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { LoginComponent } from './login/login.component';
import { MenuComponent } from './menu/menu.component';
import { RegistrationComponent } from './registration/registration.component';
import { SearchResultComponent } from './search-result/search-result.component';


const routes: Routes = [
  { path:"", component: BookingComponent},
  { path: 'menu', component: MenuComponent},
  { path:'login',component : LoginComponent},
  { path:'login/Register',component : RegistrationComponent},
  { path: 'About', component: AboutUsComponent},
  { path: 'Contact', component: ContactUsComponent},
  { path: 'Search', component: SearchResultComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }