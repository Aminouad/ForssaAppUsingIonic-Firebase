import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { AngularFireStorage } from '@angular/fire/storage';
import { Router } from '@angular/router';
@Component({
  selector: 'app-delete-only-for-admin',
  templateUrl: './delete-only-for-admin.page.html',
  styleUrls: ['./delete-only-for-admin.page.scss'],
})
export class DeleteOnlyForAdminPage implements OnInit {
  liste:any=[]

  constructor(private router:Router,private firestore:AngularFirestore,private storage:AngularFireStorage) {
    this.getProducts()

  }

  ngOnInit() {
  }
  getProducts(){
    this.firestore.collection("products").snapshotChanges()
          .subscribe(data => {
              this.liste=data.map(
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
  deleteP(item) {
    this.firestore.doc("products/" + item.id).delete();
    }
    allerhome(){
      this.router.navigateByUrl("home2");
    }
}
