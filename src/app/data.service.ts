import {Injectable, OnInit} from '@angular/core';
import {FormArray, FormBuilder, FormControl, FormGroup} from "@angular/forms";
import {IDoc} from "./IDoc";

@Injectable({
    providedIn: 'root'
})
export class DataService implements OnInit {

    nextId = 1;
    form: FormGroup;

    constructor(protected fb: FormBuilder) {
        this.nextId = 1;
        this.form = new FormGroup({
            name: new FormControl(''),
            detail: this.fb.array([]),
        });
        console.log('call populateForm');
        this.populateForm(this.doc);
    }

    ngOnInit() {
    }

    getFormElement(id: string) {
        return this.form.get(id);
    }

    populateForm(item: IDoc) {
        const start = Date.now();
        const detail = this.form.get('detail') as FormArray;
        detail.clear();
        let largestID = 0;
        for (let x = 0; x < item.detail.length; x++) {
            const li = item.detail[x];
            largestID = Math.max(largestID, li.id);
            switch (li.type) {
                case 'A': {
                    const a = this.getA();
                    for (let i = 0; i < li.c1.length; i++) {
                        const elem = a.get('c1') as FormArray;
                        elem.push(this.getC1());
                    }
                    for (let i = 0; i < li.c2.length; i++) {
                        const elem = a.get('c2') as FormArray;
                        elem.push(this.getC2());
                    }
                    for (let i = 0; i < li.c3.length; i++) {
                        const elem = a.get('c3') as FormArray;
                        elem.push(this.getC3());
                    }
                    for (let i = 0; i < li.c4.length; i++) {
                        const elem = a.get('c4') as FormArray;
                        elem.push(this.getC4());
                    }
                    for (let i = 0; i < li.c5.length; i++) {
                        const elem = a.get('c5') as FormArray;
                        elem.push(this.getC5());
                    }
                    detail.push(a);
                    break;
                }
                case 'B': {
                    const b = this.getB(li.id, li.depth);
                    for (let i = 0; i < li.c1.length; i++) {
                        const elem = b.get('c1') as FormArray;
                        elem.push(this.getC1());
                    }
                    for (let i = 0; i < li.c2.length; i++) {
                        const elem = b.get('c2') as FormArray;
                        elem.push(this.getC2());
                    }
                    detail.push(b);
                    break;
                }
                case 'C': {
                    const c = this.getC(li.id, li.depth);
                    for (let i = 0; i < li.c1.length; i++) {
                        const elem = c.get('c1') as FormArray;
                        elem.push(this.getC1());
                    }
                    for (let i = 0; i < li.c2.length; i++) {
                        const elem = c.get('c2') as FormArray;
                        elem.push(this.getC2());
                    }
                    for (let i = 0; i < li.c3.length; i++) {
                        const elem = c.get('c3') as FormArray;
                        elem.push(this.getC3());
                    }
                    detail.push(c);
                    break;
                }
                case 'D': {
                    const d = this.getD(li.id, li.depth);
                    for (let i = 0; i < li.c1.length; i++) {
                        const elem = d.get('c1') as FormArray;
                        elem.push(this.getC1());
                    }
                    for (let i = 0; i < li.c2.length; i++) {
                        const elem = d.get('c2') as FormArray;
                        elem.push(this.getC2());
                    }
                    for (let i = 0; i < li.c3.length; i++) {
                        const elem = d.get('c3') as FormArray;
                        elem.push(this.getC3());
                    }
                    for (let i = 0; i < li.c4.length; i++) {
                        const elem = d.get('c4') as FormArray;
                        elem.push(this.getC4());
                    }
                    detail.push(d);
                    break;
                }
                case 'E': {
                    const e = this.getE(li.id, li.depth);
                    for (let i = 0; i < li.c1.length; i++) {
                        const elem = e.get('c1') as FormArray;
                        elem.push(this.getC1());
                    }
                    for (let i = 0; i < li.c2.length; i++) {
                        const elem = e.get('c2') as FormArray;
                        elem.push(this.getC2());
                    }
                    for (let i = 0; i < li.c3.length; i++) {
                        const elem = e.get('c3') as FormArray;
                        elem.push(this.getC3());
                    }
                    for (let i = 0; i < li.c4.length; i++) {
                        const elem = e.get('c4') as FormArray;
                        elem.push(this.getC4());
                    }
                    for (let i = 0; i < li.c5.length; i++) {
                        const elem = e.get('c5') as FormArray;
                        elem.push(this.getC5());
                    }
                    detail.push(e);
                    break;
                }
            }
        }
        console.log('populateForm : ' + (Date.now() - start));
        this.form.patchValue(item);
        this.nextId = largestID + 1;
    }

    public getA() {
        return this.fb.group({
            id: [this.nextId++],
            parentId: [0],
            type: ['A'],
            depth: [0],
            c1: this.fb.array([]),
            c2: this.fb.array([]),
            c3: this.fb.array([]),
            c4: this.fb.array([]),
            c5: this.fb.array([]),
        });
    }

    public getB(id: number, depth: number) {
        return this.fb.group({
            id: [this.nextId++],
            parentId: [id],
            type: ['B'],
            depth: [depth],
            c1: this.fb.array([]),
            c2: this.fb.array([]),
        });
    }

    public getC(id: number, depth: number) {
        return this.fb.group({
            id: [this.nextId++],
            parentId: [id],
            type: ['C'],
            depth: [depth],
            c1: this.fb.array([]),
            c2: this.fb.array([]),
            c3: this.fb.array([]),
        });
    }

    public getD(id: number, depth: number) {
        return this.fb.group({
            id: [this.nextId++],
            parentId: [id],
            type: ['D'],
            depth: [depth],
            c1: this.fb.array([]),
            c2: this.fb.array([]),
            c3: this.fb.array([]),
            c4: this.fb.array([]),
        });
    }

    public getE(id: number, depth: number) {
        return this.fb.group({
            id: [this.nextId++],
            parentId: [id],
            type: ['E'],
            depth: [depth],
            c1: this.fb.array([]),
            c2: this.fb.array([]),
            c3: this.fb.array([]),
            c4: this.fb.array([]),
            c5: this.fb.array([]),
        });
    }

    public getC1() {
        return this.fb.group({
            name: [''],
            age: [0],
            address: [''],
        });
    }

    public getC2() {
        return this.fb.group({
            name: [''],
            age: [0],
            address: [''],
        });
    }

    public getC3() {
        return this.fb.group({
            name: [''],
            age: [0],
            address: [''],
        });
    }

    public getC4() {
        return this.fb.group({
            name: [''],
            age: [0],
            address: [''],
        });
    }

    public getC5() {
        return this.fb.group({
            name: [''],
            age: [0],
            address: [''],
        });
    }

    obj = {name: 'Mickey Mouse', age: 5, address: 'USA'};
    ten = [this.obj, this.obj, this.obj, this.obj, this.obj, this.obj, this.obj, this.obj, this.obj, this.obj, ];

    private doc: IDoc = {
        name: 'My document', detail: [
        {id: 1, parent: 0, type: 'A', depth: 0, c1: [this.obj, this.obj], c2: [this.obj], c3:[this.obj], c4:[this.obj], c5:[this.obj]},
        {id: 8, parent: 1, type: 'B', depth: 1, c1: [this.obj], c2: [this.obj], c3:[], c4:[], c5:[]},
        {id: 9, parent: 8, type: 'C', depth: 2, c1: [this.obj], c2: [this.obj], c3:[this.obj], c4:[], c5:[]},
        {id: 10, parent: 9, type: 'D', depth: 3, c1: [this.obj], c2: [this.obj], c3:[this.obj], c4:[this.obj], c5:[]},
        {id: 11, parent: 10, type: 'E', depth: 4, c1: [this.obj], c2: [this.obj], c3:[this.obj], c4:[this.obj], c5:[this.obj]},
        {id: 42, parent: 9, type: 'D', depth: 3, c1: [this.obj], c2: [this.obj], c3:[this.obj], c4:[this.obj], c5:[]},
        {id: 43, parent: 42, type: 'E', depth: 4, c1: [this.obj], c2: [this.obj], c3:[this.obj], c4:[this.obj], c5:[this.obj]},
        {id: 22, parent: 9, type: 'D', depth: 3, c1: [this.obj], c2: [this.obj], c3:[this.obj], c4:[this.obj], c5:[]},
        {id: 23, parent: 22, type: 'E', depth: 4, c1: [this.obj], c2: [this.obj], c3:[this.obj], c4:[this.obj], c5:[this.obj]},
        {id: 12, parent: 1, type: 'B', depth: 1, c1: [this.obj], c2: [this.obj], c3:[], c4:[], c5:[]},
        {id: 13, parent: 12, type: 'C', depth: 2, c1: [this.obj], c2: [this.obj], c3:[this.obj], c4:[], c5:[]},
        {id: 14, parent: 13, type: 'D', depth: 3, c1: [this.obj], c2: [this.obj], c3:[this.obj], c4:[this.obj], c5:[]},
        {id: 15, parent: 14, type: 'E', depth: 4, c1: [this.obj], c2: [this.obj], c3:[this.obj], c4:[this.obj], c5:this.ten },
        {id: 16, parent: 13, type: 'D', depth: 3, c1: [this.obj], c2: [this.obj], c3:[this.obj], c4:[this.obj], c5:[]},
        {id: 17, parent: 16, type: 'E', depth: 4, c1: [this.obj], c2: [this.obj], c3:[this.obj], c4:[this.obj], c5:this.ten },
        {id: 18, parent: 13, type: 'D', depth: 3, c1: [this.obj], c2: [this.obj], c3:[this.obj], c4:[this.obj], c5:[]},
        {id: 19, parent: 18, type: 'E', depth: 4, c1: [this.obj], c2: [this.obj], c3:[this.obj], c4:[this.obj], c5:this.ten },
        {id: 20, parent: 13, type: 'D', depth: 3, c1: [this.obj], c2: [this.obj], c3:[this.obj], c4:[this.obj], c5:[]},
        {id: 21, parent: 20, type: 'E', depth: 4, c1: [this.obj], c2: [this.obj], c3:[this.obj], c4:[this.obj], c5:this.ten },
        {id: 22, parent: 13, type: 'D', depth: 3, c1: [this.obj], c2: [this.obj], c3:[this.obj], c4:[this.obj], c5:[]},
        {id: 23, parent: 22, type: 'E', depth: 4, c1: [this.obj], c2: [this.obj], c3:[this.obj], c4:[this.obj], c5:this.ten },
        {id: 24, parent: 13, type: 'D', depth: 3, c1: [this.obj], c2: [this.obj], c3:[this.obj], c4:[this.obj], c5:[]},
        {id: 25, parent: 24, type: 'E', depth: 4, c1: [this.obj], c2: [this.obj], c3:[this.obj], c4:[this.obj], c5:this.ten },
        {id: 26, parent: 13, type: 'D', depth: 3, c1: [this.obj], c2: [this.obj], c3:[this.obj], c4:[this.obj], c5:[]},
        {id: 27, parent: 26, type: 'E', depth: 4, c1: [this.obj], c2: [this.obj], c3:[this.obj], c4:[this.obj], c5:this.ten },
        {id: 28, parent: 13, type: 'D', depth: 3, c1: [this.obj], c2: [this.obj], c3:[this.obj], c4:[this.obj], c5:[]},
        {id: 29, parent: 28, type: 'E', depth: 4, c1: [this.obj], c2: [this.obj], c3:[this.obj], c4:[this.obj], c5:this.ten },
        {id: 30, parent: 13, type: 'D', depth: 3, c1: [this.obj], c2: [this.obj], c3:[this.obj], c4:[this.obj], c5:[]},
        {id: 31, parent: 30, type: 'E', depth: 4, c1: [this.obj], c2: [this.obj], c3:[this.obj], c4:[this.obj], c5:this.ten },
        {id: 32, parent: 13, type: 'D', depth: 3, c1: [this.obj], c2: [this.obj], c3:[this.obj], c4:[this.obj], c5:[]},
        {id: 33, parent: 32, type: 'E', depth: 4, c1: [this.obj], c2: [this.obj], c3:[this.obj], c4:[this.obj], c5:this.ten },
    ]};
}
