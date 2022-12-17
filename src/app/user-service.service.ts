import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from './list-user/User.model';

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {

  constructor(private http: HttpClient) { }
  
  //url backend
  url="http://localhost:3000/users"

  getAllUsers(){
    return this.http.get<User[]>(this.url)
  }


  removeUser(id:number){
    return this.http.delete(this.url+'/'+id)
  }

  getUserById(id:Number){
    return this.http.get<User>(this.url+'/'+id)
  }
  
  updateUser(u:User){
    return this.http.put(this.url+'/'+u.id,u)
    //if you sent url of users you loose all data :D
  }


  fetchNbInList(list: any, attribute:string, attributeVal: string){
    let elem: string | number;
    
    // this.getAllUsers.forEach((element) => {
    //   switch(attribute){
    //     case "id": elem = element.id;break;
    //     case "firstName": elem = element.id;break;
    //     case "lastName":  elem = element.id;break;
    //     case "birthDate":  elem = element.id;break;
    //     case "accountCategory":  elem = element.id;break;
    //     case "email": elem = element.id;break;
    //     case "passwor-d":  elem = element.id;break;
    //     case "picture":  elem = element.id;break;
    //     case "profession":  elem = element.id;break;
    //     default:
    //   }
    //   if(elem == attributeVal){
    //     list.push(element)
    //   }
    // });
    
    return list.length;
  }
}
