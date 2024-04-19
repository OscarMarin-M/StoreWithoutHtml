import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, throwError } from 'rxjs';
import { ProductInterface } from '../interfaces/product.interface';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private URL_API = 'http://localhost:8080/products';

  //private url: string;
  constructor(private http: HttpClient) { }

  public getAllProducts():Observable<ProductInterface[]>{

    return this.http.get<ProductInterface[]>(this.URL_API).pipe(
      catchError(error => {
        console.error('Error en la solicitud:', error);
        return throwError(error); // Manejar cualquier error de la solicitud
      })

    );
  }

  // public deleteCategory(uuid: string ):Observable<any>{
  //   return this.http.delete<any>(`${this.URL_API}/${uuid}`,{responseType:'text' as 'json'})
  // }


  // public updateCategory(category: CategoryInterface): Observable<CategoryInterface>{

  //   const body={    name: category.name,
  //                   description: category.description}
  //   return this.http.put<CategoryInterface>(`${this.URL_API}/${category.id}`, body)
  // }

  // public createCategory(category: CategoryInterface): Observable<CategoryInterface>{

  //   const body={    name: category.name,
  //                   description: category.description}
  //   return this.http.post<CategoryInterface>(`${this.URL_API}`, body)
  // }
}
