import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { throwError } from 'rxjs';
import { catchError, map, retry } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class StatusService {

  constructor(
    private http:HttpClient
  ) { }

  public fetchStatus() {
    const params: any = { query: "{  status {running, activeEndpoint, steps { endpoint state calledOn }, errorMessages, activeStoredProcedures } }"};
    const body = JSON.stringify(params);
    const headers = new HttpHeaders({
      'Authorization': 'Basic c3VuaXRhajE0Ondhcm5pbmc=',
      'Content-Type': 'application/json'
    });
    console.log(`calling fetchStatus()`);
    
    return this.http.post<any>('http://localhost:9026/compensation/api',body,{headers:headers }).pipe (
      map(response => response.data.status),
      retry(5),
      catchError(this.handleError)
    );
  }

  private handleError (error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      console.error('An error occurred: '+error.error.message);
    }
    else {
      console.error(`(${error.status} ${error.statusText}): ${error.message}`);
    }

    return throwError('Something bad happened, please try again');
  }
}
