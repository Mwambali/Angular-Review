import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms'; // Import NgForm type
// import { AngularFirestore } from '@angular/fire/compat/firestore';
@Component({
  selector: 'app-create-class',
  templateUrl: './create-class.component.html',
  styleUrls: ['./create-class.component.css']
})
export class CreateClassComponent implements OnInit {
  // formData: any;
  // categoryArray: Array<object>

  // constructor(private afs: AngularFirestore) { }

  ngOnInit(): void {
    // this.categoryService.loadData().subscribe(val => {
    //   console.log(val);
    //   this.categoryArray = val;

    // })
  }

  onSubmit(formData: NgForm) { // Explicitly specify the type as NgForm
    // let categoryData = {
    //   category: formData.value.category
    // }
    // this.afs.collection('categories').add(categoryData).then(docRef => {
    //   console.log(docRef);
    // })
    //   .catch(err => console.log(err))
  }

}
