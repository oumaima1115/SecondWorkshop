import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, NgForm } from '@angular/forms';
import { Produit } from './main-product.model';

@Component({
  selector: 'app-main-product',
  templateUrl: './main-product.component.html',
  styleUrls: ['./main-product.component.css']
})
export class MainProductComponent implements OnInit {

  constructor() { }
  searchText:any;
  form!:FormGroup;
  product!:Produit;
  styleOne!:Boolean;
  styleTwo!:Boolean;
  less= true
  more= false
  listProduits:any[]=[
    {idProduit:1,code:"P147852P",libelle:"Produit1", prixUnitaire:12.5, tauxTVA:0.02},
    {idProduit:2,code:"P147552P",libelle:"Produit1", prixUnitaire:30, tauxTVA:0.1980},
    {idProduit:3,code:"D14785CC",libelle:"Produit1", prixUnitaire:20, tauxTVA:0.1980},
    {idProduit:4,code:"E147852P",libelle:"Produit1", prixUnitaire:50, tauxTVA:0.1980},
    {idProduit:5,code:"F147852P",libelle:"Produit1", prixUnitaire:70, tauxTVA:0.02}
  ]
  msg!:Boolean;
  identifiant!:number;

  ngOnInit(): void {
    this.form = new FormGroup({
      id: new FormControl(),
      code: new FormControl(),
      libelle: new FormControl(),
      prix: new FormControl(),
      taux: new FormControl()
    });   
  }

  class(){
    this.listProduits.forEach( (item, index) => {
      if(item.prixUnitaire <= 50){
        this.less = true;
        this.more = false;
        console.log(item.prixUnitaire)
        console.log(this.less)
        console.log(this.more)
      }else{
        this.less = false;
        this.more = true;
        console.log(this.less)
        console.log(this.more)
      }
    });
  }

  changeTVA(idProduit:number){
    this.listProduits.forEach( (item, index) => {
      if(item.idProduit == idProduit){
        item.tauxTVA = 0.02;
        this.msg = true;
        this.identifiant = item.idProduit;
      }
    });
    this.msg = false;
  }

  getColor(prixUnitaire:number){
    if(prixUnitaire <= 50) return "blue"
    else return "black";
  }

  getStyle(prixUnitaire:number){
    if(prixUnitaire <= 50) return "italic"
    else return "";
  }
  
  getSize(prixUnitaire:number){
    if(prixUnitaire <= 50) return "20px"
    else return "40px";
  }

  getMargin(prixUnitaire:number){
    if(prixUnitaire <= 50) return "14px"
    else return "32px";
  }  
  
  onSubmit(f: NgForm) {
    this.product={
      idProduit:f.value.id,
      code:f.value.code,
      libelle:f.value.libelle, 
      prixUnitaire: f.value.prix, 
      tauxTVA:f.value.taux,
      idDetailsP:0,
      dateCr:"",
      dateMd:"",
      category:""
    };
    if(f.value.id && f.value.code && f.value.libelle && f.value.prix && f.value.prix && f.value.taux){
      this.listProduits.push(this.product);
    }else{
      alert("champs vide!!!!")
    }
    f.reset();
  }
}