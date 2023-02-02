import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HomeComponent} from './home/home.component';
import {RouterModule} from '@angular/router';
import {HttpClientModule} from "@angular/common/http";

@NgModule({
    imports: [
        CommonModule,
        HttpClientModule,
        RouterModule.forChild([{path: '', component: HomeComponent}])],
    declarations: [HomeComponent],
})
export class HomeModule {
}
