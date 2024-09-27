export declare class Query {
    private data;
    static make(): Query;
    set(key: string, value: any): this;
    size(value?: number): this;
    from(value?: number): this;
    query(value: any): this;
    conflictsProceed(): this;
    aggs(agg: any): this;
    sort(value: any): this;
    toJSON(): any;
}
