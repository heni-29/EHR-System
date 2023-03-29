export class Lab {
    user:string;
    test:string;
    pdf:string;
    
    public constructor(init?: Partial<File>) {
        Object.assign(this, init);
    }


}
