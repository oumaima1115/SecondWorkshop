import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Invoice } from '../models/invoice.model';

@Component({
  selector: 'app-invoice',
  templateUrl: './invoice.component.html',
  styleUrls: ['./invoice.component.css']
})
export class InvoiceComponent implements OnInit {
  id!: any;
  active!: any;
  @Input() list:Invoice[]=[]
  fact: Invoice = {
    idFacture: 0,
    montantFacture: 0,
    montantRemise: 0,
    dateFacture: '',
    active: false
  };

  constructor(private route : ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    
    // SOLUTION WITH PathParams  
    this.id = this.route.snapshot.paramMap.get('id')
    this.active = this.route.snapshot.paramMap.get('active')
    this.list.forEach((item,index)=>{
      if(item.idFacture == this.id) {
        this.fact.idFacture =  item.idFacture
        this.fact.montantFacture= item.montantFacture
        this.fact.montantRemise= item.montantRemise
        this.fact.dateFacture= item.dateFacture
        this.fact.active= item.active
      }
    })


    // SOLUTION WITH QueryParams    
    // this.route.queryParams.subscribe(params => {
    //     console.log(params);
    //     this.id = params['id'];
    //     this.active = params['active'];
    // })
    // console.log("id === " + this.id)
    // console.log("active === " + this.active)

    // this.list.forEach((item,index)=>{
    //   if(item.idFacture == this.id) {
    //     this.fact.idFacture =  item.idFacture
    //     this.fact.montantFacture= item.montantFacture
    //     this.fact.montantRemise= item.montantRemise
    //     this.fact.dateFacture= item.dateFacture
    //     this.fact.active= item.active
    //   }
    // })
  }
  redirectToBack(){
    this.router.navigate(['/MainInvoice']);
  }
}
