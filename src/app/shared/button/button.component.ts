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


  public getClassNameByType(): string {
    let className = "w-full text-white bg-slate-600 p-2 rounded-md focus:bg-slate-400 hover:bg-slate-500";

    if (this.type === 'link') {
      className = "w-full text-sky-600";

    }

    if (this.type === 'secondary') {
      className = "w-full text-slate-600 bg-white p-2 rounded-md border-slate-600 border focus:bg-slate-500 hover:bg-slate-600 hover:text-white focus:text-white";
    }

    return `${className} text-${this.align}`;
  }
}
