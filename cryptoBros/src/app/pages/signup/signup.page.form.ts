import { FormBuilder, FormGroup, Validators } from '@angular/forms';

export class SignupPageForm{

private formBuilder: FormBuilder

constructor(formBuilder: FormBuilder) { 
    this.formBuilder=formBuilder;
  }

  createForm(): FormGroup {
    return this.formBuilder.group({
      name:['',[Validators.required,Validators.maxLength(10)]],
      email:['',[Validators.required, Validators.email]],
      password:['', [Validators.required, Validators.minLength(8), Validators.pattern('(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&].{7,}')]]
    });
  }
}