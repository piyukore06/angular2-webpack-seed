import { Http, Headers, Response } from '@angular/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'Rxjs/add/observable/throw';
@Injectable()
export class GetProjects {

    constructor(private http: Http){}
    getJson = (response: Response): Observable<any> => {
        return response.json();
    }
    checkForError = (response: Response): Response => {
        if (response.status >= 200 && response.status < 300) {
        return response;
        } else {
        var error = new Error(response.statusText)
        error['response'] = response;
        console.error(error);
        throw error;
        }
    }
    request = (): Observable<any> => {
        // if more than one files are to be loaded just call request multple time and merge the observables
        return this.http.request('./app/json-data/mp-calender-all.json')
        .map(this.checkForError)
        .catch(err => Observable.throw(err))
        .map(this.getJson);
    }
}