import firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from "../FirebaseConfig/FirebaseConfig";

export const initializeLogin = () => {
  !firebase.apps.length
    ? firebase.initializeApp(firebaseConfig)
    : firebase.app();
};

export const handleGoogleSignIn = () => {
  const googleProvider = new firebase.auth.GoogleAuthProvider();
  return firebase
    .auth()
    .signInWithPopup(googleProvider)
    .then((result) => {
      const { displayName, email, photoURL } = result.user;
      const signedInUser = {
        isSignedIn: true,
        success: true,
        name: displayName,
        email: email,
        photo: photoURL,
      };
      // setUserToken();
      return signedInUser;
    })
    .catch((error) => {
      var errorCode = error.code;
      var errorMessage = error.message;
      var email = error.email;
      var credential = error.credential;

      console.log(errorCode, errorMessage, email, credential);
    });
};

// const setUserToken = () => {
//   firebase
//     .auth()
//     .currentUser.getIdToken(/* forceRefresh */ true)
//     .then(function (idToken) {
//       sessionStorage.setItem("token", idToken);
//     })
//     .catch(function (error) {
//       // Handle error
//     });
// };

export const handleSignOut = () => {
  return firebase
    .auth()
    .signOut()
    .then((res) => {
      const signedOutUser = {
        isSignedIn: false,
        success: false,
        name: "",
        email: "",
        error: res.error,
        photo: "",
      };
      return signedOutUser;
    })
    .catch((error) => {
      console.log(error);
      console.log(error.massage);
    });
};