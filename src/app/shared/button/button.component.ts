import { Component, EventEmitter, Input, Output } from '@angular/core';

export type TypeButton = "primary" | "secondary" | "link"
@Component({
  selector: 'dv-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent {
  @Input() type: TypeButton = "primary";
  @Output() click = new EventEmitter<void>();
}
