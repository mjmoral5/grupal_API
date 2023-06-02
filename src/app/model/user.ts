export class User {
    idUser : number;
    email : string;
    first_name : string;
    last_name : string;
    avatar : string;
    
    constructor(id: number, email: string, first_name: string, last_name: string, avatar: string) {
        this.idUser = id;
        this.email = email;
        this.first_name = first_name;
        this.last_name = last_name;
        this.avatar = avatar;
    }
}