import { Component, OnInit, ViewChild } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { AngularFireStorage } from '@angular/fire/storage';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})


export class HomePage {

prods:any=[]

  constructor(private router:Router,private firestore:AngularFirestore,private storage:AngularFireStorage) {
    this.getProducts();
    

  }
  allerabout(){
    this.router.navigateByUrl('/about');
  }

  allermap(){
    this.router.navigateByUrl('/map');
  }
  allerhome(){
    this.router.navigateByUrl('/home');
  }
  allerlogin() {
    this.router.navigateByUrl('login');
  }

getProducts(){
  this.firestore.collection("products").snapshotChanges()
        .subscribe(data => {
            this.prods=data.map(
              e=> {
                return {
                  id:e.payload.doc.id,
                  productName:e.payload.doc.data()['productName'],
                  productDescription:e.payload.doc.data()['productDescription'],
                  location:e.payload.doc.data()['location'],
                  phone:e.payload.doc.data()['phone'],
                  price:e.payload.doc.data()['price'],
                  image:this.storage.ref(e.payload.doc.data()['image']).getDownloadURL()


                }
              }
            )
        })
}


}

