import { Component, OnInit } from '@angular/core';
import { ApiService } from '../service/api.service';
import { error } from '@angular/compiler/src/util';
import { Model } from '../entities/model';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css'],
})
export class ViewComponent implements OnInit {
  model: Model;
  id: number;

  constructor(
    private service: ApiService,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.id = parseInt(this.activatedRoute.snapshot.paramMap.get('id'));
    this.buscar(this.id);
  }
  buscar(id: number) {
    this.service.view(id).subscribe(
      (data) => {
        this.model = data;
      },
      (error) => console.log(error)
    );
  }
}
