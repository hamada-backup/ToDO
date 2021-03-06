import "rxjs/add/operator/map";

import { Injectable } from "@angular/core";
import { AngularFireAuth } from "angularfire2/auth";
import { firebase } from "../firebase";
import { Observable } from "rxjs/Observable";

@Injectable()
export class AuthService {
  authenticated$: Observable<boolean>;
  uid$: Observable<string>;

  constructor(public afAuth: AngularFireAuth) {
    this.authenticated$ = afAuth.authState.map((user) => !!user);
    this.uid$ = afAuth.authState.map((user) => user.uid);
  }

  signIn(provider: firebase.auth.AuthProvider): firebase.Promise<any> {
    return this.afAuth.auth
      .signInWithPopup(provider)
      .catch((error) => console.log("ERROR @ AuthService#signIn() :", error));
  }

  signInAnonymously(): firebase.Promise<any> {
    return this.afAuth.auth
      .signInAnonymously()
      .catch((error) =>
        console.log("ERROR @ AuthService#signInAnonymously() :", error)
      );
  }

  signInWithGithub(): firebase.Promise<any> {
    return this.signIn(new firebase.auth.GithubAuthProvider());
  }

  signInWithGoogle(): firebase.Promise<any> {
    return this.signIn(new firebase.auth.GoogleAuthProvider());
  }

  signInWithFacebook(): firebase.Promise<any> {
    return this.signIn(new firebase.auth.FacebookAuthProvider());
  }

  signOut(): void {
    this.afAuth.auth.signOut();
  }
}
