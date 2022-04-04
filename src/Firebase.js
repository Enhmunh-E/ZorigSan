import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
import { useEffect, useState } from "react";

const firebaseConfig = {
  apiKey: "AIzaSyABM1QrJpEFHb5q-dvOsgCYBu6BOlvF2Zs",
  appId: "1:306009379664:web:9ed24d42781f2107a81255",
  authDomain: "zorigsan-e7ed3.firebaseapp.com",
  measurementId: "G-4V8P8RD0H2",
  messagingSenderId: "306009379664",
  projectId: "zorigsan-e7ed3",
  storageBucket: "zorigsan-e7ed3.appspot.com",
};

const app = firebase.initializeApp(firebaseConfig);
const auth = firebase.auth(app);
const firestore = firebase.firestore(app);

export const useFirebase = () => {
  const [state, setState] = useState({
    firebase,
  });

  useEffect(() => {
    setState({ app, auth, firestore });
  }, []);

  return state;
};

export const addEmail = async (data) => {
  await firestore.collection("Subscriptions").add({
    email: data,
  });
};

export const useCollection = (path) => {
  const [data, setData] = useState([]);
  const { firestore } = useFirebase();

  useEffect(() => {
    if (firestore && path)
      firestore.collection(path).onSnapshot((querySnapshot) => {
        let cities = [];
        querySnapshot.forEach((doc) => {
          cities.push({ id: doc.id, ...doc.data() });
        });
        setData(cities);
      });
  }, [path, firestore]);

  const createDoc = (docId, data) => {
    firestore
      .collection(path)
      .doc(docId)
      .set({
        ...data,
      })
      .then(() => console.log("successful"));
  };
  return { createDoc, data };
};