import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PptxComponent } from './pptx/pptx.component';
import {RouterModule} from "@angular/router";

@NgModule({
  imports: [CommonModule,RouterModule.forChild([{path:'',component:PptxComponent}])],
  declarations: [PptxComponent],
})
export class PptxModule {}
