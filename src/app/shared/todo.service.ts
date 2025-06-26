import { Injectable } from '@angular/core';
import { Firestore, collection, addDoc, CollectionReference, DocumentData ,updateDoc,doc,deleteDoc} from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})


export class TodoService {


  
   todosCollection: CollectionReference<DocumentData>;

  constructor(private firestore: Firestore) {
    this.todosCollection = collection(this.firestore, 'todos');
  }


  addTodo(title: string) {
    return addDoc(this.todosCollection, {
      title,
      isDone: false
    });
  }


 updateTodoStatus(id: string, newStatus: boolean) {
  const todoDocRef = doc(this.firestore, `todos/${id}`);
  return updateDoc(todoDocRef, { isDone: newStatus });
}

deleteTodo(id: string) {
  const todoDocRef = doc(this.firestore, `todos/${id}`);
  return deleteDoc(todoDocRef);
}


}
