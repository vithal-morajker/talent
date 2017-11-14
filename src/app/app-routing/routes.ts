import { Routes } from '@angular/router';
//imporing the components which were created by us using angular cli
import { MenuComponent } from '../menu/menu.component';
import { DishdetailComponent } from '../dishdetail/dishdetail.component'
import { HomeComponent } from '../home/home.component';
import { AboutComponent } from '../about/about.component';
import { ContactComponent } from '../contact/contact.component';
import { JoblistingComponent } from '../joblisting/joblisting.component';
export const routes:Routes=[
{path:'home',component:HomeComponent},
{path:'menu',component:MenuComponent},
{path:'dishdetail/:id',component:DishdetailComponent},
{path:'about',component:AboutComponent},
{path:'contactus',component:ContactComponent},
{path:'',redirectTo:'/home',pathMatch:'full'},
{path:'joblisting',component:JoblistingComponent},
];
