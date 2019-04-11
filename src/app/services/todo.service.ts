import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  constructor() { }

  getTodos() {
    return [
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
    ];
  }
}
