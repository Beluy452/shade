// import * as firebase from "firebase";

// const firebaseConfig = {
// 	projectId : "shade-design",
// 	apiKey : "AIzaSyDbGQTBG6EHxfqZGXoCw41dEgCtLMRKuWQ",
// 	authDomain : "shade-design.firebaseapp.com",
// 	databaseURL : "https://shade-design.firebaseio.com",
// 	storageBucket : "shade-design.appspot.com",
// };

// firebase.initializeApp(firebaseConfig);

// export const db = firebase.database();
// export const storage = firebase.storage();

import firebase from "firebase/app";
import "firebase/database";
import "firebase/storage";
import "firebase/auth";
import "firebase/functions";

import {API_KEY, AUTH_DOMAIN, DATABASE_URL, MESSAGING_SENDER_ID, PROJECT_ID, STORAGE_BUCKET} from "babel-dotenv";


const config = {
	apiKey : API_KEY,
	authDomain : AUTH_DOMAIN,
	databaseURL : DATABASE_URL,
	projectId : PROJECT_ID,
	storageBucket : STORAGE_BUCKET,
	messagingSenderId : MESSAGING_SENDER_ID,
};

firebase.initializeApp(config);

export const functions = firebase.functions();
export const db = firebase.database();
export const storage = firebase.storage();
export const firebaseAuth = firebase.auth();

firebaseAuth.setPersistence(firebase.auth.Auth.Persistence.LOCAL);
