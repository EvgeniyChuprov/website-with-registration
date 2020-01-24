import app from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';

const config = {
  apiKey: "AIzaSyCqqOOAES4Mq3-tya02MtNRljbx_K_nC2k",
  authDomain: "testfromreg.firebaseapp.com",
  databaseURL: "https://testfromreg.firebaseio.com",
  projectId: "testfromreg",
  storageBucket: "testfromreg.appspot.com",
  messagingSenderId: "573250671475",
  appId: "1:573250671475:web:f48e17e27b66cf33866b06",
  measurementId: "G-TPTXHE7601"
};

class Firebase {
  constructor() {
    app.initializeApp(config);
    this.auth = app.auth();
    this.db = app.database();
  }

  doCreateUserWithEmailAndPassword = (email, password) =>
    this.auth.createUserWithEmailAndPassword(email, password);

  doSignInWithEmailAndPassword = (email, password) =>
    this.auth.signInWithEmailAndPassword(email, password);

  doSignOut = () => this.auth.signOut();

  doPasswordReset = email => this.auth.sendPasswordResetEmail(email);

  doPasswordUpdate = password =>
    this.auth.currentUser.updatePassword(password);

  user = uid => this.db.ref(`users/${uid}`);
  
  users = () => this.db.ref('users');
}
export default Firebase;