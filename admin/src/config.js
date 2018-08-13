import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/database'

export const appName = 'reactpp-6e83a'

export const config = {
  apiKey: 'AIzaSyBZv5khMg2HNMDL01kr5DcCI2pxBALoV90',
  authDomain: `${appName}.firebaseapp.com`,
  databaseURL: `https://${appName}.firebaseio.com`,
  projectId: appName,
  storageBucket: `${appName}.appspot.com`,
  messagingSenderId: '704809345594'
}

firebase.initializeApp(config)
