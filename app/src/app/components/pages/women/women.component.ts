import { Component, OnInit } from '@angular/core';
import {PerfumewService} from '../../../Services/perfumew.service'
import  {Perfume} from '../../../Models/perfume'

@Component({
  selector: 'app-women',
  templateUrl: './women.component.html',
  styleUrls: ['./women.component.css']
})
export class WomenComponent implements OnInit {

  perfumesFromDB:Perfume[]=[];
  

  constructor(private perfumeService:PerfumewService){}

    ngOnInit() {
      this.getPerfumes();
    }
    getPerfumes() {
      this.perfumeService.getPerfumes().subscribe(perfumes => {
        this.perfumesFromDB = perfumes;
      });
    }
    addToCart(perfume: Perfume) {
      this.perfumeService.addPerfumeToCart(perfume).then(() => {
        console.log("Parfumul " + perfume.name + " a fost adăugat în coșul de cumpărături.");
      }).catch(error => {
        console.log("Eroare la adăugarea parfumului " + perfume.name + " în coșul de cumpărături:", error);
      });
    }
}
