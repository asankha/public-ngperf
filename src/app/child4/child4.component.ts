import {Component, Input, OnInit} from '@angular/core';
import {FormArray, FormGroup} from "@angular/forms";
import {DataService} from "../data.service";

@Component({
    selector: 'app-child4',
    templateUrl: './child4.component.html',
    styleUrls: ['./child4.component.css']
})
export class Child4Component implements OnInit {

    // form: FormGroup;
    @Input() i: number = 0;

    constructor(private service: DataService) {
        // this.form = service.form;
    }

    get formGroup() {
        const fa = this.service.getFormElement('detail') as FormArray;
        return fa.controls[this.i] as FormGroup;
    }

    get c1() {
        // @ts-ignore
        return this.formGroup.controls['c1'].controls;
    }

    get c2() {
        // @ts-ignore
        return this.formGroup.controls['c2'].controls;
    }

    get c3() {
        // @ts-ignore
        return this.formGroup.controls['c3'].controls;
    }

    get c4() {
        // @ts-ignore
        return this.formGroup.controls['c4'].controls;
    }

    get c5() {
        // @ts-ignore
        return this.formGroup.controls['c5'].controls;
    }

    ngOnInit(): void {
    }
}
