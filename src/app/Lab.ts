export class Lab {
    user:string;
    test:string;
    pdf:string;
    file_id:any;
    
    public constructor(init?: Partial<File>) {
        Object.assign(this, init);
    }


}
