import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { User } from '../list-user/User.model';
import { UserServiceService } from '../user-service.service';

@Component({
  selector: 'app-update-user',
  templateUrl: './update-user.component.html',
  styleUrls: ['./update-user.component.css']
})
export class UpdateUserComponent implements OnInit {

  myId!:Number;
  User!: User;
  form!:FormGroup;

  constructor(private route: ActivatedRoute,private service:UserServiceService) { }

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
    this.route.paramMap.subscribe(data => {
      this.myId = Number(data.get('param'));
      console.log("this.myId = "+this.myId)
    })
    this.service.getUserById(this.myId).subscribe( data => {
      this.User=data
      this.form.patchValue({
        firstName:this.User.firstName,
        lastName: this.User.lastName,
        birthDate: this.User.birthDate,
        email: this.User.email,
        password: this.User.password,
        profession: this.User.profession,
        accountCategory: this.User.accountCategory
      })
    })

  }

  updateUser(id:Number){
    this.service.updateUser(this.User).subscribe()
  }

}
