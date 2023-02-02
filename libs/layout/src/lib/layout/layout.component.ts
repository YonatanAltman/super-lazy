import {ChangeDetectionStrategy, Component} from '@angular/core';

@Component({
    selector: 'super-lazy-layout',
    templateUrl: './layout.component.html',
    styleUrls: ['./layout.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class LayoutComponent {
    navs = [
        {label: 'home', routerLink: 'home'},
        {label: 'pdf', routerLink: 'pdf'},
        {label: 'pptx', routerLink: 'pptx'},
        {label: 'employee', routerLink: 'employee'},
    ]
}
