export class File {
    id:bigint;
    address:string;
    age:bigint;
    doctor_name:string;
    gender:string;
    name:string;
    phone_number:bigint;
    remarks:string;
    status:string;
    user_name:string;
    
    public constructor(init?: Partial<File>) {
        Object.assign(this, init);
    }


}
