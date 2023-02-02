import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {PdfComponent} from './pdf/pdf.component';
import {RouterModule} from "@angular/router";

@NgModule({
    imports: [CommonModule, RouterModule.forChild([{path: '', component: PdfComponent}])],
    declarations: [PdfComponent],
})
export class PdfModule {
}
