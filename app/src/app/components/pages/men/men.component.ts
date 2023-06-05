import { Component, OnInit } from '@angular/core';
import {PerfumewService} from '../../../Services/perfumew.service'
import  {Perfume} from '../../../Models/perfume'

@Component({
  selector: 'app-men',
  templateUrl: './men.component.html',
  styleUrls: ['./men.component.css']
})
export class MenComponent {
  perfumesFromDBM:Perfume[]=[];
  

  constructor(private perfumeService:PerfumewService){}

    ngOnInit() {
      this.getPerfumesM();
    }
    getPerfumesM() {
      this.perfumeService.getPerfumesM().subscribe(perfumes => {
        this.perfumesFromDBM = perfumes;
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
