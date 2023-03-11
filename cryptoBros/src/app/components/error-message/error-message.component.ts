import { Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-error-message',
  templateUrl: './error-message.component.html',
  styleUrls: ['./error-message.component.scss'],
})
export class ErrorMessageComponent implements OnInit {

  @Input() message: string;
  @Input() field: FormGroup;
  @Input() fieldExtra ?: FormGroup;
  @Input() samepass?: boolean;
  @Input() empty?: boolean;
  @Input() valid?: boolean;
  constructor() { }

  ngOnInit() { }

  

  showErrors(){
    if(this.samepass){
      return this.samePwd();

    }else if(this.empty){
      return this.showEmptyError();
      
    }else if(this.valid){
      return this.showValidError();

    }else{
      return false;
    }
  }


  samePwd() {
    return this.field.value === this.fieldExtra.value ? false : true;
  }

  showEmptyError() {

    if (this.field.touched && this.field.value == '') {
      return true;
    } else {
      return false
    }
  }

  showValidError() {
    if (this.field.touched && !this.field.valid && this.field.value != '') {
      return true;
    } else {
      return false;
    }
  }

}
