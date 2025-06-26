import { Component } from '@angular/core';
import { TodoService } from '../shared/todo.service';
import { collectionData } from '@angular/fire/firestore';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styles: [
  ]
})
export class TodoComponent {

  constructor(private todoService:TodoService){}

  todos:any[]=[]; 

ngOnInit() {
  collectionData(this.todoService.todosCollection, { idField: 'id' })
    .subscribe(items => {
this.todos=items.sort((a:any,b:any)=>a.isDone -b.isDone);
    });
}


OnClickText(titleinput:HTMLInputElement){
  if(titleinput.value){

  
this.todoService.addTodo(titleinput.value);
titleinput.value="";
  }
}

OnStatusChange(id:string,newStatus:boolean){

  this.todoService.updateTodoStatus(id,newStatus)

}

onDelete(id:string){
  this.todoService.deleteTodo(id);
}

}
