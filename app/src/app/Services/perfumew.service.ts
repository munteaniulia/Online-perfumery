import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Perfume } from '../Models/perfume';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';

@Injectable({
  providedIn: 'root'
})
export class PerfumewService {
  constructor(private firestore: AngularFirestore) {}

  getPerfumes(): Observable<Perfume[]> {
    return this.firestore.collection<Perfume>('women').valueChanges();
  }

  getPerfumesS(): Observable<Perfume[]> {
    return this.firestore.collection<Perfume>('shopping-cart').valueChanges();
  }
  getPerfumesM(): Observable<Perfume[]> {
    return this.firestore.collection<Perfume>('men').valueChanges();
  }
  getPerfumesR(): Observable<Perfume[]> {
    return this.firestore.collection<Perfume>('room').valueChanges();
  }
  addPerfumeToCart(perfume: Perfume): Promise<void> {
    const docRef = this.firestore.collection<Perfume>('shopping-cart').doc(perfume.id);
    return docRef.get().toPromise().then((doc: firebase.firestore.DocumentSnapshot<Perfume>) => {
      if (doc.exists) {
        console.log('Produsul este deja în coșul de cumpărături.');
        return;
      } else {
        return docRef.set(perfume);
      }
    }).catch((error) => {
      console.log('Eroare la adăugarea produsului în coșul de cumpărături:', error);
    });
  }
  addToOrderFromCart(perfume: Perfume): Promise<void> {

    const orderDocRef = this.firestore.collection('order').doc();
    return orderDocRef.set(perfume).then(() => {
      return this.firestore.collection('shopping-cart').doc(perfume.id).delete();
    }).catch((error) => {
      console.log('Eroare la adăugarea produsului în colecția "order":', error);
    });
  }


  editQuantity(perfumeId: string, newQuantity: number): Promise<void> {
    const docRef = this.firestore.collection('shopping-cart').doc(perfumeId);
    return docRef.update({ quantity: newQuantity });
  }
  deletePerfume(perfumeId: string): Promise<void> {
    const docRef = this.firestore.collection('shopping-cart').doc(perfumeId);
    return docRef.delete();
  }
}
