export declare class Raw {
    private data;
    constructor(data?: any);
    static make(data?: any): Raw;
    set(key: string, value: any): this;
    toJSON(): any;
}
