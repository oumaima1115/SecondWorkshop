import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { UserServiceService } from '../user-service.service';
import { User } from './User.model';

@Component({
  selector: 'app-list-user',
  templateUrl: './list-user.component.html',
  styleUrls: ['./list-user.component.css']
})
export class ListUserComponent implements OnInit {

  searchText:any;
  category:any;
  
  // list:User[]=[
  //   {
  //   idCustomer: 1,
  //   firstName: "Mila",
  //   lastName: " Kunis",
  //   birthDate: "1999-06-30",
  //   accountCategory: "Admin",
  //   email: "mila@kunis.com",
  //   password: "test",
  //   picture: "https://bootdey.com/img/Content/avatar/avatar3.png",
  //   profession: "Software Engineer"
  //   },
  //   {
  //   idCustomer: 2,
  //   firstName: "George",
  //   lastName: "Clooney",
  //   birthDate: "1999-06-30",
  //   accountCategory: "Customer",
  //   email: "marlon@brando.com",
  //   password: "test",
  //   picture: "https://bootdey.com/img/Content/avatar/avatar2.png",
  //   profession: "Software Engineer"
  //   },
  //   {
  //   idCustomer: 3,
  //   firstName: "George",
  //   lastName: "Clooney",
  //   birthDate: "1999-06-30",
  //   accountCategory: "Customer",
  //   email: "marlon@brando.com",
  //   password: "test",
  //   picture: "https://bootdey.com/img/Content/avatar/avatar1.png",
  //   profession: "Software Engineer"
  //   },
  //   {
  //   idCustomer: 4,
  //   firstName: "Ryan",
  //   lastName: "Gossling",
  //   birthDate:"1999-06-30",
  //   accountCategory: "Golden",
  //   email: "Ryan@nicholson.com",
  //   password: "test",
  //   picture: "https://bootdey.com/img/Content/avatar/avatar4.png",
  //   profession: "Software Engineer"
  //   },
  //   {
  //   idCustomer: 5,
  //   firstName: "Robert",
  //   lastName: "Downey",
  //   birthDate: "1999-06-30",
  //   accountCategory: "Blocked Account",
  //   email: "robert@nicholson.com",
  //   password: "test",
  //   picture: "https://bootdey.com/img/Content/avatar/avatar5.png",
  //   profession: "Software Engineer"
  //   }
  // ];
  list:User[]=[]
  listTwo!:User
  user!:any
  isHidden=true
  totalUser!: Number;

  constructor(private route : ActivatedRoute, private service : UserServiceService) { }

  ngOnInit(): void {
    this.getUsers()
    this.isHidden = (this.route.snapshot.paramMap.get('category') != null) ? true : false
    
    this.route.queryParamMap.subscribe(category => this.category = category.get("category"))
    console.log("this.category = "+ this.category)
    this.searchText = this.category

    console.log(this.route.snapshot); 
  }
  
  isDisabled(accountCategory:any):boolean{
    return accountCategory == "Admin" ? true : false;
  }

  getUsers(){
    
    this.service.getAllUsers().subscribe(data => this.list=data)//data de type Response on subscribe pour caster en un Uesr[]
  }
  removeUser(id:number){
    // this.list.forEach( (item, index) => {
    //   if(item.idCustomer === idCustomer) this.list.splice(index,1);
    // });
    this.service.removeUser(id).subscribe(
      () => this.getUsers()
    )

  }

  calculer(){
    this.totalUser = this.service.fetchNbInList(this.list, "accountCategory", "Customer");
  }
}
