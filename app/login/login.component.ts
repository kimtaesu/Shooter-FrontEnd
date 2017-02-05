import {Component} from "@angular/core";
import {LoginService} from "./login.service";

@Component({
  moduleId: module.id,
  selector: 'my-login',
  templateUrl: 'login.component.html',
  // styleUrls: ['dashboard.component.css']
})
export class LoginComponent {

  constructor(private loginService: LoginService) {
  }

  doLogin() {
    console.info("doLogin");
    this.loginService.requestLogin()
      .subscribe(response => {
        console.info('next' + response.toString())
      })
  }
}
