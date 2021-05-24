import {AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, Component} from '@angular/core';
import {DataService} from "./data.service";
import {FormArray, FormBuilder, FormControl, FormGroup} from "@angular/forms";
import {IData} from "./IData";

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent<T> implements AfterViewChecked, AfterContentChecked, AfterContentInit, AfterViewInit {

    constructor(public service: DataService) {
    }

    get detailFormsControls() {
        const fa = this.service.getFormElement('detail') as FormArray;
        return fa.controls;
    }

    ngDoCheck() {
        console.count('ngDoCheck');
    }

    ngAfterViewChecked() {
        console.count('ngAfterViewCheckedx');
    }

    ngAfterContentChecked() {
        console.count('ngAfterContentChecked');
    }

    ngAfterContentInit() {
        console.count('ngAfterContentInit');
    }

    ngAfterViewInit() {
        console.count('ngAfterViewInit');
    }
}
