import { Component, Input, forwardRef } from '@angular/core';
import { AbstractControl, ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

type types = "input" | "textarea" | "password" | "number" | "email";
type keysErrors = "required" | "email" | "numbers";

interface ObjectErrors {
  [key: keysErrors | string]: boolean
}
@Component({
  selector: 'dv-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      multi: true,
      useExisting: forwardRef(() => InputComponent)
    }
  ]
})
export class InputComponent implements ControlValueAccessor {
  @Input() typeInput: types = "input";
  @Input() placeholder: string = "";
  @Input() required: boolean = false;
  @Input() readOnly: boolean = false;
  @Input() label: string = "";
  @Input() control?: AbstractControl;

  value: any;
  onChange = (value: any) => {};
  onTouched = () => {};
  touched = false;
  disabled = false;

  onInputChange(event: any) {
    if (this.disabled) return;
    this.value = event.target.value;
    this.onTouched();
    this.onChange(this.value);
    this.markAsTouched();
  }

  writeValue(obj: any): void {
    this.value = obj;
  }
  registerOnChange(onChange: any) {
    this.onChange = onChange;
  }

  registerOnTouched(onTouched: any) {
    this.onTouched = onTouched;
  }

  markAsTouched() {
    if (!this.touched) {
      this.onTouched();
      this.touched = true;
    }
  }

  setDisabledState(disabled: boolean) {
    this.disabled = disabled;
  }

  getListErrors(errors?: {[key: string]: string} | null): string[] {
    if (!errors) return [];
    if (Object.keys(errors).length === 0) return [];

    return Object.keys(errors).map((key) => this.getTraduction(key as keysErrors));
  }

  getTraduction(error: keysErrors): string {
    if (error === 'required') return "Campo requerido";
    if (error === 'email') return "El correo electrónico no es valido";
    return '';
  }

  isRequired(): boolean {
    if (!this.control?.errors) return false;
    if (this.control.errors['required']) return true;
    return false;
  }

  isError(): boolean {
    if (!this.touched) return false;
    if (!this.control?.errors) return false;

    return true;
  }

  getClassName(): string {
    if (this.isError()) {
      return 'bg-red-50 border border-red-300 text-red-900 text-sm rounded-lg focus:border-red-500 focus-visible:border-none block w-full p-2.5';
    }

    return 'bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5';
  }
}
