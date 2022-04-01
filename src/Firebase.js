import firebase from 'firebase/compat/app';
import 'firebase/compat/auth'
import 'firebase/compat/firestore'
import { useEffect, useState } from 'react';

const firebaseConfig = {
    apiKey: "AIzaSyABM1QrJpEFHb5q-dvOsgCYBu6BOlvF2Zs",
    authDomain: "zorigsan-e7ed3.firebaseapp.com",
    projectId: "zorigsan-e7ed3",
    storageBucket: "zorigsan-e7ed3.appspot.com",
    messagingSenderId: "306009379664",
    appId: "1:306009379664:web:9ed24d42781f2107a81255",
    measurementId: "G-4V8P8RD0H2"
};


const app = firebase.initializeApp(firebaseConfig)
const auth = firebase.auth(app);
const firestore = firebase.firestore(app)

export const useFirebase = () => {
  const [state, setState] = useState({
    firebase
  })

  useEffect(() => {
    setState({auth, firestore, app})
  }, [])

  return state;
}

export const addEmail = async (data) => {
  await firestore.collection('Subscriptions').add({
    email: data,
  })
}

export const useCollection = (path) => {
  const [data, setData] = useState([])
  const { firestore } = useFirebase();

  useEffect(() => {
    if(firestore && path)
    firestore.collection(path).onSnapshot((querySnapshot) => {
      var cities = [];
      querySnapshot.forEach((doc) => {
        cities.push({id: doc.id, ...doc.data()});
      });
      setData(cities)
    });
  }, [path, firestore]) 

  const createDoc = (docId, data) => {
    firestore.collection(path).doc(docId).set({
      ...data
    }).then(() => console.log("successful"))
  }
  return { data, createDoc }
}