import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/service/api.service';
import { error } from '@angular/compiler/src/util';
import { Model } from '../entities/model';

@Component({
  selector: 'app-listar-todos',
  templateUrl: './listar-todos.component.html',
  styleUrls: ['./listar-todos.component.css'],
})
export class ListarTodosComponent implements OnInit {
  lista: Model[] = [];

  constructor(private service: ApiService) {}

  ngOnInit(): void {
    this.listar();
  }
  listar() {
    this.service.listar().subscribe(
      (data) => {
        console.log(data);
        this.lista = data;
      },
      (error) => {
        console.log(error);
      }
    );
  }
}
