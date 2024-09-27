import { AbstractFilter } from './abstract_filter';
export declare class Match extends AbstractFilter {
    private field;
    private data;
    constructor(field: string, query: any);
    static make(field: string, query: any): Match;
    set(option: string, value: any): this;
    boost(value?: number): this;
    fuzzy(value?: any): this;
    toJSON(): any;
}
