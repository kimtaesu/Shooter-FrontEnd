import {Injectable} from "@angular/core";
import {Http} from "@angular/http";
import {Observable} from "rxjs/Observable";

@Injectable()
export class LoginService {

  private responseBody: string;

  constructor(private http: Http) {
  }

  requestLogin(): Observable<string> {
    return this.http
      .get(
        "http://localhost:8080"
      )
      .catch(reason => {
        console.error('reason' + reason.toString())
      })
  }
}
