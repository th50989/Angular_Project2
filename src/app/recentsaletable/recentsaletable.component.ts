import { Component } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/compat/firestore';
		import { Observable } from 'rxjs';
export interface Person { id: number; Name: string; }

@Component({
  selector: 'app-recentsaletable',
  templateUrl: './recentsaletable.component.html',
  styleUrls: ['./recentsaletable.component.css']
})

export class RecentsaletableComponent {
  private personsCollection: AngularFirestoreCollection<Person>;
  persons : Observable<Person[]>;
  title="";
  constructor(private readonly afs: AngularFirestore) {

    this.personsCollection = afs.collection<Person>('Person');
			//this.items = this.itemsCollection.valueChanges();
			
			// .valueChanges() is simple. It just returns the 
			// JSON data without metadata. If you need the 
			// doc.id() in the value you must persist it your self
			// or use .snapshotChanges() instead. Only using for versions 7 and earlier
					
			this.persons = this.personsCollection.valueChanges( { idField: 'key-id' }); //chỉ sử dụng cho Angular 8,9
			//id1: ten field đại diện cho documnent id, lưu ý không 
			//được đặt trùng với tên field khai báo trong dữ liệu
  }
}
