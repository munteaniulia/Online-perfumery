import { Component, OnInit } from '@angular/core';
import {PerfumewService} from '../../../Services/perfumew.service'
import  {Perfume} from '../../../Models/perfume'

@Component({
  selector: 'app-room',
  templateUrl: './room.component.html',
  styleUrls: ['./room.component.css']
})
export class RoomComponent {
  perfumesFromDBR:Perfume[]=[];
  

  constructor(private perfumeService:PerfumewService){}

    ngOnInit() {
      this.getPerfumesR();
    }
    getPerfumesR() {
      this.perfumeService.getPerfumesR().subscribe(perfumes => {
        this.perfumesFromDBR = perfumes;
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
