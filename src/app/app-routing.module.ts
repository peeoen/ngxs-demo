import { FoodComponent } from './food/food.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


const routes: Routes = [
    { path: '', redirectTo: '/foods', pathMatch: 'full' },
    {
        path: 'foods', component: FoodComponent
    },
    {
        path: 'users', loadChildren: './users/users.module#UsersModule'
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
})
export class AppRoutingModule { }
