import { Router } from '@angular/router';
import { ProductService } from './../../shared/product.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-page',
  templateUrl: './add-page.component.html',
  styleUrls: ['./add-page.component.scss'],
})
export class AddPageComponent implements OnInit {
  form: FormGroup;
  submited = false;

  submit() {
    if (this.form.invalid) {
      return;
    }

    this.submited = true;

    const product = {
      type: this.form.value.type,
      title: this.form.value.title,
      photo: this.form.value.photo,
      info: this.form.value.info,
      price: this.form.value.price,
      date: new Date(),
    };

    console.log(this.form);
    this.ProductServ.create(product).subscribe((res) => {
      this.form.reset();
      this.submited = false;
      this.router.navigate(['/']);
    });
  }

  constructor(private ProductServ: ProductService, private router: Router) {
    this.form = new FormGroup({
      type: new FormControl(null, Validators.required),
      title: new FormControl(null, Validators.required),
      photo: new FormControl(null, Validators.required),
      info: new FormControl(null, Validators.required),
      price: new FormControl(null, Validators.required),
    });
  }

  ngOnInit(): void {}
}
