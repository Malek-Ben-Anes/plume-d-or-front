export class User {

    id?: number;
    firstname?: string;
    lastname?: string;
    email?: string;
    gender?: Gender;
    photo?: string;
    birthDate?: Date;
    phone?: string;

    constructor(_id: number, _firstname?: string, _lastname?: string, _gender?: Gender,
        _email?: string, _photo?: string, _birthDate?: Date, _phone?: string) {
        this.id = _id;
        this.firstname = _firstname;
        this.lastname = _lastname;
        this.email = _lastname;
        this.gender = _gender;
        this.photo = _photo;
        this.birthDate = _birthDate;
        this.phone = _phone;
    }
}

export enum Gender {
    MALE,
    FEMALE
}