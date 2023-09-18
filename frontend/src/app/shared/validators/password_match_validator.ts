// Import necessary module from Angular.
import { AbstractControl } from "@angular/forms"

// Define a custom validator function for password matching.
export const PasswordMatchValidator = (passwordControlName: string, confirmPasswordName: string) => {
    // The validator function takes a form control as input.
    const validator = (form: AbstractControl) => {
        // Get the password and confirmPassword form controls based on their names.
        const passwordControl = form.get(passwordControlName);
        const confirmPasswordControl = form.get(confirmPasswordName);

        // If either of the controls is missing, exit without performing validation.
        if (!passwordControl || !confirmPasswordControl) return;

        // Check if the password and confirmPassword values match.
        if (passwordControl.value !== confirmPasswordControl.value) {
            // If they don't match, set an error on the confirmPassword control.
            confirmPasswordControl.setErrors({ notMatch: true });
        } else {
            // If they match, check if there are existing errors on the confirmPassword control.
            const errors = confirmPasswordControl.errors;
            if (!errors) return;

            // If there are existing errors, remove the 'notMatch' error.
            delete errors['notMatch'];
            confirmPasswordControl.setErrors(errors);
        }
    }
    return validator; // Return the custom validator function.
}
