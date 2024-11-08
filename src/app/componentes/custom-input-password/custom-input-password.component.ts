import { Component, forwardRef, Input, OnInit } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'app-custom-input-password',
  templateUrl: './custom-input-password.component.html',
  styleUrls: ['./custom-input-password.component.less'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => CustomInputPasswordComponent),
      multi: true
    }
  ]
})
export class CustomInputPasswordComponent implements OnInit {

  @Input() titulo!:string;
  @Input() tipo!:string;
  value: string = '';
  hide: boolean = true;
  
  constructor() { }

  ngOnInit(): void {
  }

  onChange = (value: any) => {};  
  onTouched = () => {};           

  writeValue(value: any): void {
    if (value !== undefined) {
      this.value = value;
    }
  }

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  onInputChange(event: Event): void {
    this.value = (event.target as HTMLInputElement).value;
    this.onChange(this.value); 
  }

}
