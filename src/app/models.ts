import { HttpHeaders } from "@angular/common/http";

export class Items {
    id: string;
    name: string;
    slot: string;
    amount: number;
    totalamount: number;
    Username: string;
    desc: string;
    picture: string;
}

export class BorrowItem {
    id: string;
    name: string;
    slot: string;
    amount: number;
    totalamount: number;
    borrowqty: Number;
    returnqty: Number;
    Username: string;
    desc: string;
    picture: string;
    ischecked: boolean
}

export class BorrowingItem {
    id: string;
    items: BorrowItem[];
    borrower: string;
    witness: string;
}

export class ReturnItemRequest {
    id: string;
    borrower: string;
    witness: string;
    returnuser:string;
    items: ReturnListItemRequest[];

}
export class ReturnListItemRequest{
     id:string;
     slot:string;
     name:string;
     qty:number;
     
     idreturnitem: string;
     ischecked: boolean
}

//property name start with lower case
export class GlobalVarible {
    static host: string = "http://demoionic.azurewebsites.net";

    static httpOptions = {
        headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    };
}

export class Userlogin {
    static loginname: string;
}


export class BorrowingId {
    static borrowingId: string;
}