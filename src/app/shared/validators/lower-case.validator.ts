import { AbstractControl, FormControl } from '@angular/forms';

export function lowerCaseValidator(control: AbstractControl) {
  const userName = control.value as string;
  const regex = /^[a-z0-9_\-]+$/;
  if (!userName) {
    return null;
  }
  return regex.test(userName) ? null : { lowerCase: true };
}
