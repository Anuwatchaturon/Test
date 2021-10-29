import { Component } from '@angular/core';
import { Observable } from 'rxjs'
import { AngularFireDatabase, AngularFireList, AngularFireObject } from 'angularfire2/database';

import { FirebaseListObservable } from 'angularfire2/database-deprecated';
import * as firebase from 'firebase';



@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

data: Observable<any[]>;
ref:AngularFireList<any>;

tutorial: AngularFireObject<any>;

public labels1: any;
public labels2: any;
public labels3: any;

qes1 : any;
qes2 : any;
qes3 : any;

getr : String;
getg : String;
getb : String;

setr: String;
setg: String;
setb: String;

setname: String;

db: AngularFireDatabase;

  constructor(db: AngularFireDatabase) {
     this.qes1 =db.list('/light/r').valueChanges().subscribe(res => {
        this.labels1 = res;  
        this.showdata1();
     })
     this.qes2 =db.list('/task/g').valueChanges().subscribe(res => {
      this.labels2 = res;  
      this.showdata2();
    })
      this.qes3 =db.list('/task/b').valueChanges().subscribe(res => {
        this.labels3 = res;  
        this.showdata3();
      })
  }
  
  showdata1(){
    this.getr = this.labels1[0];
     console.log(this.getr);
  }
  showdata2(){
    this.getg = this.labels2[0];
     console.log(this.getg);
  }
  showdata3(){
    this.getb = this.labels3[0];
     console.log(this.getb);
  }

  check(key: string): void {
    console.log("check");
    firebase.database().ref("/task/r").set({ "r": this.setr });
    firebase.database().ref("/task/g").set({ "g": this.setg });
    firebase.database().ref("/task/b").set({ "b": this.setb });
  }



}
