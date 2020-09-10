import { NgModule } from '@angular/core';
import {MatButtonModule } from '@angular/material/button'
import { MatButtonToggleModule} from '@angular/material/button-toggle'
import {MatToolbarModule } from '@angular/material/toolbar'
import {MatIconModule } from '@angular/material/icon'


const MaterialComponents = [
  MatButtonModule,
  MatButtonToggleModule,
  MatToolbarModule,
  MatIconModule


]




@NgModule({
  
  imports: [MaterialComponents
    
  ],
  exports: MaterialComponents
})
export class MaterialModule { }
