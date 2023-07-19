import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { environment } from 'src/environments/environment';
import { params, typeRequest } from '../interfaces/Request.model';
import { ResponseDTO } from '../interfaces/Response.model';


@Injectable({
  providedIn: 'root'
})
export class ApiService<T = unknown> {
  private url: string = environment.BASE_URL;

  constructor(private http: HttpClient) { }

  public fetch<M = unknown>(config: typeRequest<M | T>) {
      const baseUrl = this.url + config.url + this.generateQueryParams(config.params);
      const headers = new HttpHeaders();
      const method = String(config.method).toLowerCase();

      headers.append("Content-Type", "application/json");

      return this.http.request<ResponseDTO<T>>(method, baseUrl, {headers, body: config.data});
  }


  private generateQueryParams = (params?: params): string => {
    if (!params) return "";
    if (Object.keys(params).length === 0) return "";

    const result = new URLSearchParams(params).toString();
    return result ? "?" + result : "";
  }
}
