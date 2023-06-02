export class Resource {
    color : string;
    id : number;
    name : string;
    pantone_value : string;
    year : string
    
    constructor(color:string, id:number, name:string, pantone_value:string, year:string){
        this.color = color;
        this.id = id;
        this.name = name;
        this.pantone_value = pantone_value;
        this.year = year;
    }
}
