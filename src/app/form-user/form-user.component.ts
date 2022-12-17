import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, NgForm } from '@angular/forms';
import { User } from '../main-user/main-user.model';

@Component({
  selector: 'app-form-user',
  templateUrl: './form-user.component.html',
  styleUrls: ['./form-user.component.css']
})
export class FormUserComponent implements OnInit {

  @Input() users!:User[];
  @Output() newUsers = new EventEmitter<User[]>();
  user!:User;
  form!:FormGroup;
  
  constructor() { }

  ngOnInit(): void {
    this.form = new FormGroup({
      id: new FormControl(),
      firstName: new FormControl(),
      lastName: new FormControl(),
      birthDate: new FormControl(),
      accountCategory: new FormControl(),
      email: new FormControl(),
      password: new FormControl(),
      picture: new FormControl(),
      profession: new FormControl()
    });   
    console.log(this.form)
  }

  onSubmit(f: NgForm) {
    this.user={
      id:6,
      firstName:f.value.firstname,
      lastName:f.value.lastname, 
      birthDate: f.value.birthdate, 
      accountCategory:"Customer",
      email:f.value.email, 
      password: f.value.password, 
      picture: "https://bootdey.com/img/Content/avatar/avatar3.png",
      profession:f.value.profession

    };
    console.log(this.user)
    console.log(this.form)
    if(f.value.firstname && f.value.lastname && f.value.birthdate && f.value.email && f.value.password && f.value.profession){
      this.users.push(this.user);
      this.newUsers.emit(this.users)
    }else{alert("tous les champs sont vide!!!!")
    }
    f.reset();
  }

}
