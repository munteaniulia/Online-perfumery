import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/pages/home/home.component';
import { MenComponent } from './components/pages/men/men.component';
import { AboutComponent } from './components/pages/about/about.component';
import { RoomComponent } from './components/pages/room/room.component';
import { WomenComponent } from './components/pages/women/women.component';
import { ShoppingCartComponent } from './components/pages/shopping-cart/shopping-cart.component';

const routes: Routes = [ 
{path:'', component:HomeComponent},
{path:'men', component:MenComponent},
{path:'about', component:AboutComponent},
{path:'room',component:RoomComponent},
{path:'women', component:WomenComponent},
{path:'home', component:HomeComponent},
{path:'shopping_cart', component:ShoppingCartComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
 
})
export class AppRoutingModule { }
