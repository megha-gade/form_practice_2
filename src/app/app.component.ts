import { Component, viewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ViewChild } from '@angular/core';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']})


export class AppComponent {
  title = 'form_practice_2';
  defaultValue:string='Java';
firstName:any;
dob:any;
message:any;
email:any;
genderEnter:any;


  fNameEntered:string='';
defaultGender='Male'
todayDate:Date=new Date();
newDate=this.todayDate.toLocaleDateString()


gender=[
{id:'1',value:'Male'},
{id:'2',value:'Female'},
{id:'3',value:'Other'}
]


@ViewChild('myForm') data?: NgForm;

  clickedMethod()
{
console.log(this.data);
this.firstName=this.data?.value.personDetails.name;
this.dob=this.data?.value.personDetails.dob;
this.email=this.data?.value.personDetails.email;
this.data?.reset();



}

defaultMessage:string='hi thanks for this support !'
//how to set default values

// setDefalutValues()
// {
// this.data?.setValue(
// {
// course:'',
// gender:'',
// message:'',
// personalDetails:{
// name:'JOHN',
// dob:'2022-09-23',
// email:'JOHN@GMAIL.COM'

// }
// }
// )
// }



// set default vlsue susing pathValue

setDefalutValues()
{
this.data?.form.patchValue(
{
personalDetails:{
name:'JOHN',
dob:'2023-03-12',
email:'JOHN@GMAIL.COM'
}
}
)
}
}
