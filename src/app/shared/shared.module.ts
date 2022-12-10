import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../material.module';
import { NavbarComponent } from './navbar/navbar.component';
import { RouterModule } from '@angular/router';
import { HomeComponent } from '../core/home/home/home.component';
import { DashboardComponent } from '../core/home/dashboard/dashboard.component';
@NgModule({
  declarations: [
    NavbarComponent,
    HomeComponent,
    DashboardComponent
  ],
  imports: [CommonModule, MaterialModule, RouterModule],
  exports: [CommonModule, MaterialModule,NavbarComponent, RouterModule,HomeComponent,DashboardComponent],
})
export class SharedModule {}
