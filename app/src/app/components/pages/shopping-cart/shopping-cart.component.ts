import { Component, OnInit } from '@angular/core';
import { PerfumewService } from '../../../Services/perfumew.service';
import { Perfume } from '../../../Models/perfume';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.css']
})
export class ShoppingCartComponent implements OnInit {
  perfumesFromDB: Perfume[] = [];
  constructor(private perfumeService: PerfumewService) {}

  ngOnInit() {
    this.getPerfumesS();
  }

  getPerfumesS() {
    this.perfumeService.getPerfumesS().subscribe(perfumes => {
      this.perfumesFromDB = perfumes;
    });
  }

  calculateTotalPrice(): number {
    var totalPrice = 0;
    for (const perfume of this.perfumesFromDB) {
      totalPrice += perfume.price * perfume.quantity;
    }
    return totalPrice;
  }
  decreaseQuantity(perfume: Perfume) {
    if (perfume.quantity > 1) {
      const newQuantity = perfume.quantity - 1;
      this.perfumeService.editQuantity(perfume.id, newQuantity)
        .then(() => {
          perfume.quantity = newQuantity;
        })
        .catch((error) => {
          console.log('Error updating quantity:', error);
        });
    }
  }
  
  increaseQuantity(perfume: Perfume) {
    const newQuantity = perfume.quantity + 1;
    this.perfumeService.editQuantity(perfume.id, newQuantity)
      .then(() => {
        perfume.quantity = newQuantity;
      })
      .catch((error) => {
        console.log('Error updating quantity:', error);
      });
    }
    deletePerfume(perfumeId: string) {
      this.perfumeService.deletePerfume(perfumeId).then(() => {
        console.log("Parfumul a fost eliminat din coșul de cumpărături.");
      }).catch(error => {
        console.log("Eroare la eliminarea parfumului din coșul de cumpărături:", error);
      });
    }
    ver(){
      if(this.calculateTotalPrice()!=0){
        var rez={
          message1: "Total Price:",
          price: this.calculateTotalPrice(),
          message2:"RON"
        }
        var resultString = rez.message1 + " " + rez.price + " " + rez.message2;
    
        return resultString;
      }
      else{
        return"Your cart is empty.";
      }
    }
    
 addToOrder() {
    this.perfumesFromDB.forEach(perfume => {
      this.perfumeService.addToOrderFromCart(perfume);
    });
  }

}
