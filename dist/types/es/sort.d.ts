export declare class Sort {
    protected data: any[];
    static make(): Sort;
    asc(field: string, mode?: string): this;
    desc(field: string, mode?: string): this;
    protected add(field: string, order: string, mode: string): this;
    toJSON(): any[];
}
