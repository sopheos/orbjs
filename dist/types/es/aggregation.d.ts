import { Query } from "./query";
export declare class Aggregation {
    private name;
    private data;
    constructor(name: string);
    static make(name: string): Aggregation;
    field(name: string, data?: any): this;
    addToQuery(query: Query): this;
    toJSON(): any;
}
