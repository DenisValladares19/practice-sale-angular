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
  @Input() align: "start" | 'center' = 'center';
  @Input() loading: boolean = false;
  @Input() disabled: boolean = false;


  public getClassNameByType(): string {
    let className = "w-full text-white bg-slate-600 py-2 rounded-md focus:bg-slate-400 hover:bg-slate-500 flex justify-between px-5 disabled:opacity-50";

    if (this.type === 'link') {
      className = "w-full text-sky-600 flex justify-between items-center disabled:opacity-50";

    }

    if (this.type === 'secondary') {
      className = "w-full text-slate-600 bg-white py-2 rounded-md border-slate-600 border focus:bg-slate-500 hover:bg-slate-600 hover:text-white focus:text-white flex justify-between px-5 disabled:opacity-50";
    }

    return `${className} text-${this.align}`;
  }
}
