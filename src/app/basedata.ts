export class BaseData{
    user:string;
    test:string;
    pdf:string;
    file_id:any;
    id:any;
    
    public constructor(init?: Partial<File>) {
        Object.assign(this, init);
    }


}
