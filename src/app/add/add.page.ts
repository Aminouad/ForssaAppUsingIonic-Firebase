import { Component, OnInit, ViewChild } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { AngularFireStorage } from '@angular/fire/storage';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add',
  templateUrl: './add.page.html',
  styleUrls: ['./add.page.scss'],
})
export class AddPage implements OnInit {

@ViewChild("id_f") file_id:any;

  productName:string; productDescription:string; location:string; phone :string;
  price:string;


  constructor(private router:Router,private firestore:AngularFirestore,private storage:AngularFireStorage) { }

  ngOnInit() {
  }
addP(){
  const files=this.file_id.nativeElement.files[0];
  const filePath=`${Date.now()}_${files.name}`;
  this.storage.upload(filePath,files);
  this.firestore.collection("products").add({productName:this.productName,
    productDescription:this.productDescription,location:this.location,phone:this.phone,image:filePath})
    this.router.navigateByUrl("/home2")
}
alleronly(){
  this.router.navigateByUrl("/delete-only-for-admin")
}
}
