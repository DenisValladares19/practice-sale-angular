import { HttpErrorResponse } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ClientDTO, ClientFormDTO } from 'src/app/interfaces/Client.model';
import { methodEnum } from 'src/app/interfaces/Request.model';
import { ApiService } from 'src/app/services/api.service';
import { ObservableToPromise } from 'src/app/utils/Promises.utils';

@Component({
  selector: 'dv-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent {
  public form: FormGroup;
  public loading: boolean = false;

  constructor (
    private fb: FormBuilder,
    private api: ApiService<ClientDTO>,
    private router: Router
  ) {
    this.form = this.fb.group({
      name: ["", Validators.required],
      lastname: ["", Validators.required],
      age: ["", Validators.required],
      email: ["", [Validators.required, Validators.email]],
      password: ["", [Validators.required, Validators.minLength(8)]],
      birthDay: ["", Validators.required]
    })
  }

  async onSubmit() {
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      this.form.markAsDirty();
      return;
    }

    if (this.loading) return;

    this.loading = true;

    const values: ClientFormDTO = this.form.value;

    const dataToSend: ClientDTO = {
      age: values.age,
      birthDay: values.birthDay,
      lastname: values.lastname,
      name: values.lastname,
      user: {
        email: values.email,
        password: values.password
      }
    }

    try {
      const responseObs = this.api.fetch<ClientDTO>({
        method: methodEnum.POST,
        url: "/client",
        data: dataToSend
      });

      const response = await ObservableToPromise(responseObs);
      this.loading = false;

      if (response.code === "00") {
        // alert("se guardo exitosamente");
        this.form.reset();
        this.form.clearValidators();
        this.router.navigateByUrl("/");
        return;
      }

      // alert("Ocurrio un error al guardar tus datos");
    } catch (errors) {
      const response = errors as HttpErrorResponse;

      // alert(response?.error?.message);
      this.loading = false;
    }
  }
}
