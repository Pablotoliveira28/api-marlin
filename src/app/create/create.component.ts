import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Model } from '../entities/model';
import { ApiService } from '../service/api.service';
import { error } from '@angular/compiler/src/util';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css'],
})
export class CreateComponent implements OnInit {
  form: FormGroup;

  constructor(private fb: FormBuilder, private service: ApiService) {
    this.form = this.fb.group({
      userId: ['', Validators.required],
      title: ['', Validators.required],
      completed: ['true', Validators.required],
    });
  }

  ngOnInit(): void {}

  submit() {
    if (this.form.valid) {
      let model: Model = new Model();
      model.userId = this.form.get('userId').value;
      model.title = this.form.get('title').value;
      model.completed = this.form.get('completed').value;
      console.log(model);
      this.service.create(model).subscribe(
        (data) => {
          alert('Registro' + data.id + 'criado com sucesso!');
        },
        (error) => console.log(error)
      );
    } else {
      alert('Preencha os campos obrigatórios');
    }
  }
}
