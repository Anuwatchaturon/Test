export const firebaseenvironment= {
    production : false,
    firebase:{
    apiKey: "AIzaSyDAHJUGLJCgXmge17pUmH1dzLXF1dWqLuY",
    authDomain: "work-cost-app.firebaseapp.com",
    databaseURL: "https://work-cost-app-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "work-cost-app",
    storageBucket: "work-cost-app.appspot.com",
    messagingSenderId: "840226767543",
    appId: "1:840226767543:web:1a0fbab9b486cef4760332",
    measurementId: "G-C3R487PE0G"
},
    
};

export const snapshotToArray = snapshot => {
    let returnArr = [];

    snapshot.forEach(childSnapshot => {
        let item = childSnapshot.val();
        item.key = childSnapshot.key;
        returnArr.push(item);
    });

    return returnArr;
};