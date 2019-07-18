import { FormControl } from '@angular/forms';

export interface ValidationResult {
    [keys : string] : boolean;
}

export class ArticleValidators {
    static sortieAjd(control : FormControl) : ValidationResult {
        const maDate = new Date(control.value);
        if (maDate>new Date()) {
            return { "sortieAjd" : false}
        }
        return null;
    }
}