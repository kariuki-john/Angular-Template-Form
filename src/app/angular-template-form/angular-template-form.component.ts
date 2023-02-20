import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-angular-template-form',
  templateUrl: './angular-template-form.component.html',
  styleUrls: ['./angular-template-form.component.css']
})



export class AngularTemplateFormComponent {
 
submitedForm(form:NgForm){
 console.log(form.value);
 
}

}
