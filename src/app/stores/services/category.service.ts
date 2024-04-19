import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import axios, { Axios } from 'axios';
import { catchError, Observable, switchMap, throwError } from 'rxjs';
import { CategoryInterface } from '../interfaces/category.interface';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
  }),
};
@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  private URL_API = 'http://localhost:8080/categories';

  //private url: string;
  constructor(private http: HttpClient) { }

  public getCategory():Observable<CategoryInterface[]>{

    return this.http.get<CategoryInterface[]>(this.URL_API).pipe(
      catchError(error => {
        console.error('Error en la solicitud:', error);
        return throwError(error); // Manejar cualquier error de la solicitud
      })

    );
  }

  public deleteCategory(uuid: string ):Observable<any>{
    return this.http.delete<any>(`${this.URL_API}/${uuid}`,{responseType:'text' as 'json'})
  }


  public updateCategory(category: CategoryInterface): Observable<CategoryInterface>{

    const body={    name: category.name,
                    description: category.description}
    return this.http.put<CategoryInterface>(`${this.URL_API}/${category.id}`, body)
  }

  public createCategory(category: CategoryInterface): Observable<CategoryInterface>{

    const body={    name: category.name,
                    description: category.description}
    return this.http.post<CategoryInterface>(`${this.URL_API}`, body)
  }

}
