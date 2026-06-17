import { AbstractControl, FormControlName, ValidationErrors, ValidatorFn } from '@angular/forms';

export const matchValidator = (controlName: string, matchingControlName: string): ValidatorFn => {
    return (abstractControl: AbstractControl): ValidationErrors | null => {
        const control = abstractControl.get(controlName);
        const matchingControl = abstractControl.get(matchingControlName)

        if (!control || !matchingControl) {
            return null;
        }
        if (matchingControl.errors && !matchingControl.errors['valuesDoNotMatch']) {
            return null;
        }
        if (control.value !== matchingControl.value) {
            matchingControl.setErrors({ valuesDoNotMatch: true });
            return { valuesDoNotMatch: true };
        } else {
            matchingControl.setErrors(null);
            return null;
        } 
    }
}