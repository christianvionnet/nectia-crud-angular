import { Injectable } from '@angular/core';
import { Auth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, signInWithPopup, GoogleAuthProvider, GithubAuthProvider } from "@angular/fire/auth"

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private auth: Auth) { }

  register({ email, password }: any) {
    return createUserWithEmailAndPassword(this.auth, email, password)
  }

  login({ email, password }: any) {
    return signInWithEmailAndPassword(this.auth, email, password)
  }

  loginGoogle() {
    return signInWithPopup(this.auth, new GoogleAuthProvider())
  }

  loginGithub() {
    return signInWithPopup(this.auth, new GithubAuthProvider())
  }

  logOut() {
    return signOut(this.auth)
  }
}
