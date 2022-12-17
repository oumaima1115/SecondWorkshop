import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, NgForm } from '@angular/forms';
import { Produit } from '../main-product/main-product.model';

@Component({
  selector: 'app-add-product-td',
  templateUrl: './add-product-td.component.html',
  styleUrls: ['./add-product-td.component.css']
})
export class AddProductTDComponent implements OnInit {

  @Input() products!:Produit[];
  @Output() newProducts = new EventEmitter<Produit[]>();

  form!:FormGroup;
  produit!:Produit;
  formValid: boolean=false;
  variable=""
  constructor() {}

  ngOnInit(): void {
    this.form = new FormGroup({
      id: new FormControl(),
      code: new FormControl(),
      libelle: new FormControl(),
      prix: new FormControl(),
      idDetailsP: new FormControl(),
      dateCr: new FormControl(),
      dateMd: new FormControl(),
      category: new FormControl(),
      profession: new FormControl()
    });
  }
  onSubmit(f: NgForm) {

    this.produit={
      idProduit : f.value.id,
      code : f.value.code,
      libelle : f.value.libelle,
      prixUnitaire : f.value.prix,
      tauxTVA:0.02,
      idDetailsP:0,
      dateCr:"",
      dateMd:"",
      category:""
    }
    this.formValid = true
    this.variable="form-control is-valid"
  }
  onSubmitTwo(f: NgForm,f2:NgForm){
    this.produit.idDetailsP = f.value.idDetailsP
    this.produit.dateCr = f.value.dateCr
    this.produit.dateMd = f.value.dateMd
    this.produit.category = f.value.category
    
    console.log(this.produit)
    if(f.value.idDetailsP && f.value.dateCr && f.value.dateMd && f.value.category){
      this.products.push(this.produit);
      this.newProducts.emit(this.products)
    }else{
      alert("tous les champs sont vide!!!!")
    }
    f.reset();
    f2.reset();
    this.formValid = false
    this.variable=""
  }
}