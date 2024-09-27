import { AbstractFilter } from './abstract_filter';
export declare class Range extends AbstractFilter {
    private field;
    private data;
    constructor(field: string);
    static make(field: string): Range;
    gte(value: any): this;
    gt(value: any): this;
    lte(value: any): this;
    lt(value: any): this;
    boost(value?: number): this;
    format(value: string): this;
    timezone(value: string): this;
    private set;
    toJSON(): any;
}
