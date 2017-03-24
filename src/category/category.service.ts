import { Injectable }    from '@angular/core';
import { Headers, Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';

import { Category } from './category.model';

@Injectable()
export class CategoryService {

  private headers = new Headers({'Accept': 'application/json','Content-Type': 'application/json'});
  private categoriesUrl = 'http://localhost:8080/categories';  // URL to web api

  constructor(private http: Http) { }

  getCategories(): Promise<Category[]> {
    return this.http.get(this.categoriesUrl)
               .toPromise()
               .then(response => response.json() as Category[])
               .catch(this.handleError);
  }

  getCategory(id: number): Promise<Category> {
    const url = `${this.categoriesUrl}/${id}`;
    return this.http.get(url)
      .toPromise()
      .then(response => response.json() as Category)
      .catch(this.handleError);
  }

  delete(id: number): Promise<void> {
    const url = `${this.categoriesUrl}/${id}`;
    return this.http.delete(url, {headers: this.headers})
      .toPromise()
      .then(() => null)
      .catch(this.handleError);
  }

  create(name: string): Promise<Category> {
    return this.http
      .post(this.categoriesUrl, JSON.stringify({name: name}), {headers: this.headers})
      .toPromise()
      .then(res => res.json() as Category)
      .catch(this.handleError);
  }

  update(category: Category): Promise<Category> {
    const url = `${this.categoriesUrl}/${category.id}`;
    return this.http
      .put(url, JSON.stringify(category), {headers: this.headers})
      .toPromise()
      .then(() => category)
      .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }
}

