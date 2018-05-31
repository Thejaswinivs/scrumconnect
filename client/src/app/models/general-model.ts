export module GeneralModel {
    export class User {
        _id?: string;
        name: string;
        sex: string;
        age: number;
        dateCreated: Date;
    }

    export class Acknowledge {
        msg?: string;
    }
}