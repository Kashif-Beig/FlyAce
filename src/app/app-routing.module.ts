import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutUsComponent } from './about-us/about-us.component';
import { BookingDetailsComponent } from './booking-details/booking-details.component';
import { BookingComponent } from './booking/booking.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { LoginComponent } from './login/login.component';
import { MenuComponent } from './menu/menu.component';
import { PassengerDetailsComponent } from './passenger-details/passenger-details.component';
import { PaymentComponent } from './payment/payment.component';
import { RegistrationComponent } from './registration/registration.component';
import { SearchResultComponent } from './search-result/search-result.component';
import { SelectSeatsComponent } from './select-seats/select-seats.component';
import { UserDetailsComponent } from './user-details/user-details.component';
import { ViewTicketComponent } from './view-ticket/view-ticket.component';
import { YourTicketsComponent } from './your-tickets/your-tickets.component';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { AdminHomeComponent } from './admin-home/admin-home.component';
import { AdminViewscheduleComponent } from './admin-viewschedule/admin-viewschedule.component';
import { AdminAddflightsComponent } from './admin-addflights/admin-addflights.component';


const routes: Routes = [
  { path:"", component: BookingComponent},
  { path: 'menu', component: MenuComponent},
  { path:'login',component : LoginComponent},
  { path:'login/Register',component : RegistrationComponent},
  { path: 'About', component: AboutUsComponent},
  { path: 'Contact', component: ContactUsComponent},
  { path: 'Search', component: SearchResultComponent},
  { path: 'SelectSeats', component: SelectSeatsComponent},
  { path: 'bookindDetails', component: BookingDetailsComponent},
  { path: 'payment', component: PaymentComponent},
  { path: 'tickets', component: YourTicketsComponent},
  { path: 'viewTicket', component: ViewTicketComponent},
  { path: 'userDetails', component: UserDetailsComponent},
  { path: 'passengerDetails', component: PassengerDetailsComponent},
  { path: 'adminloginpage', component: AdminLoginComponent},
  { path: 'adminloginpage/adminhome', component: AdminHomeComponent,
  children:[
    { 
      path:"", component: AdminAddflightsComponent,
    },
    {
        path:"viewschedule",component:AdminViewscheduleComponent,
    },
   {
      path:"addflight",component:AdminAddflightsComponent,
   },
],
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
