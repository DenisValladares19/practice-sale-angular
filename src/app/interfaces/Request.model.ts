export enum methodEnum {
  "GET" = "GET",
  "POST" = "POST",
  "PUT" = "PUT",
  "DELETE" = "DELETE",
  "PATCH" = "PATCH"
};

export type params = {[k: string]: string};

export type typeRequest<T = unknown> ={ method: methodEnum, url: string, params?: params, data?: T }
