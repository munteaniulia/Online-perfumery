

export class Perfume{
    id?: string;
    brand: string;
    name: string;
    price: number;
    ml:number;
    description:string;
    image:string;
    quantity: number;

    constructor(){
        this.id='';
        this.brand='';
        this.description='';
        this.image='';
        this.ml=0;
        this.name='';
        this.price=0;
        this.quantity=0;
    }
}