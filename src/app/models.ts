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
}
//property name start with lower case
export class GlobalVarible {
    static host: string = "http://demoionic.azurewebsites.net";

    static httpOptions = {
        headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    };
}