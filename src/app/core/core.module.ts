import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthService } from './auth.service';
import { SharedModule } from '../shared/shared.module';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material/card';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { LayoutModule } from '@angular/cdk/layout';

@NgModule({
  declarations: [
  ],
  imports: [
    CommonModule,
    SharedModule,
    MatGridListModule,
    MatCardModule,
    MatMenuModule,
    MatCardModule,
    MatIconModule,
    MatButtonModule,
    LayoutModule,
  ],
  providers: [AuthService]
})
export class CoreModule { }
