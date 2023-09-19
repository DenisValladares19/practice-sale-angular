import { Injectable } from '@angular/core';

type typeToast = "success" | "error" | "warning";

interface ToastProps {
  type: typeToast;
  message: string;
  delay?: number;
}

@Injectable({
  providedIn: 'root'
})
export class ToastService {
  public data?: ToastProps;
  public show: boolean = false;
  private idTimeout?: NodeJS.Timeout;
  private delay = 500;

  constructor() { }
}
