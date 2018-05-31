import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgxsModule } from '@ngxs/store';
import { UserComponent } from './user/user.component';
import { UsersRoutingModule } from './users-routing.module';
import { UsersState } from './users.state';

@NgModule({
  imports: [
    CommonModule,
    UsersRoutingModule,
    FormsModule,
    NgxsModule.forFeature([UsersState])
  ],
  declarations: [UserComponent]
})
export class UsersModule { }
