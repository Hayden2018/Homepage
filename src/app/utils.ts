import { Store } from '@ngrx/store';

type Selector = (arg: any) => any;

export function bindState(store: Store, selector: Selector, varName: string) {
    store.select(selector).subscribe(value => {
        this[varName] = value;
    });
}
