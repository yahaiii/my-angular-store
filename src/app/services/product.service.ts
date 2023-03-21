import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Product } from '../models/product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private dataUrl = '../../assets/data.json';

  

  constructor(private http: HttpClient) { }

  getProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(this.dataUrl);
  }

  // getProductById(id: number): Observable<Product> {
  //   const url = `${this.dataUrl}/${id}`;
  //   return this.http.get<Product>(url);
  // }

  getProductById(id: string): Observable<Product> {
    return this.getProducts().pipe(
      map(products => products.find(p => p.id === +id)!)
    );
  }
}
