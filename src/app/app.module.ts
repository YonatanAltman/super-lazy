import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {RouterModule, Routes} from "@angular/router";
import {LayoutModule} from '@super-lazy/layout';

const routes: Routes = [
    {
        path: 'home',
        loadChildren: () => import('@super-lazy/home').then(m => m.HomeModule)
    }, {
        path: 'pdf',
        loadChildren: () => import('@super-lazy/pdf').then(m => m.PdfModule)
    }, {
        path: 'pptx',
        loadChildren: () => import('@super-lazy/pptx').then(m => m.PptxModule)
    }, {
        path: 'some',
        loadChildren: () => import('@super-lazy/home').then(m => m.HomeModule)
    },
];


@NgModule({
    declarations: [AppComponent],
    imports: [BrowserModule,
        RouterModule.forRoot(routes),
        LayoutModule],
    providers: [],
    bootstrap: [AppComponent],
})
export class AppModule {
}
