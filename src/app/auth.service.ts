export class AuthService{
  isLoggedIn = false
  logIn(){
    this.isLoggedIn = true
  }
  logOut(){
    this.isLoggedIn = false
  }
}
