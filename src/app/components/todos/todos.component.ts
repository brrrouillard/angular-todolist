import { Component, OnInit } from '@angular/core';

import { Todo } from '../../models/Todo';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {
  todos: Todo[];

  constructor() { }

  ngOnInit() {
    this.todos = [
      {
        id: 1,
        title: "Learn Angular",
        completed: false
      },
      {
        id: 2,
        title: "Read Sapiens",
        completed: true
      },
      {
        id: 3,
        title: "Do groceries",
        completed: false
      },
    ]
  }

}
