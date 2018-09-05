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

//property name start with lower case
export class GlobalVarible {
    static host: string = "https://localhost:44328";

    static httpOptions = {
        headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    };
}

export class Userlogin {
    static loginname: string;
}