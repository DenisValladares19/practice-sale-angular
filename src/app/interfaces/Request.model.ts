export enum methodEnum {
  "GET", "POST", "PUT", "DELETE", "PATCH"
};

export type params = {[k: string]: string};

export type typeRequest<T = unknown> ={ method: methodEnum, url: string, params?: params, data?: T }
