import {ChangeDetectionStrategy, Component} from '@angular/core';
import {HomeService} from "./home.service";

@Component({
    selector: 'super-lazy-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    providers: [HomeService]
})
export class HomeComponent {
    user$ = this.home.get();

    constructor(private home: HomeService) {
    }


}
