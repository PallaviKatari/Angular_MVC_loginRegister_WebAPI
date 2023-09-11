import { Component, OnInit } from '@angular/core';    
import { LoginService } from '../login.service';    
import {Register} from '../register';    
//import {Observable} from 'rxjs';    
import { FormBuilder, Validators} from '@angular/forms';    

@Component({    
  selector: 'app-register',    
  templateUrl: './register.component.html',    
  styleUrls: ['./register.component.css']    
})    
export class RegisterComponent implements OnInit {    
  data = false;    
  UserForm: any;    
  message:string | undefined;    
  constructor(private formbulider: FormBuilder,private loginService:LoginService) { }    

  ngOnInit() {    
    this.UserForm = this.formbulider.group({    
      EmployeeName: ['', [Validators.required]],      
      Password: ['', [Validators.required]],    
      Email: ['', [Validators.required]],    
      City: ['', [Validators.required]],    
      Department: ['', [Validators.required]],    
    });    
  }    
   onFormSubmit()    
  {    
    const user = this.UserForm.value;    
    this.Createemployee(user);    
  }    
  Createemployee(register:Register)    
  {    
  this.loginService.CreateUser(register).subscribe(    
    ()=>    
    {    
      this.data = true;    
      this.message = 'Data saved Successfully';  
      alert("User Registered successfully")  
      this.UserForm.reset();    
    });    
  }    
}    