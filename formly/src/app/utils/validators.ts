import { FormControl, ValidationErrors } from '@angular/forms';
import { FormlyFieldConfig } from '@ngx-formly/core';

export function IpValidator(control: FormControl): ValidationErrors {
  return !control.value || /(\d{1,3}\.){3}\d{1,3}/.test(control.value)
    ? null
    : { ip: true };
}

export function IpValidatorMessage(err, field: FormlyFieldConfig): string {
  return `"${field.formControl.value}" is not a valid IP Address`;
}
