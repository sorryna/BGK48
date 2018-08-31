import { HttpHeaders } from "@angular/common/http";

export class Items {
        id : string;
        name : string;
        slot : string;
        amount : number;
        totalamount : number;
        Username : string;
        desc : string;
        picture : string;
        Isborrow : Boolean;
}
//property name start with lower case
export class GlobalVarible {
    static host: string = "https://localhost:5000";

    static httpOptions = {
        headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    };
}