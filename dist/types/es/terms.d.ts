import { AbstractFilter } from './abstract_filter';
export declare class Terms extends AbstractFilter {
    private field;
    private data;
    constructor(field: string, values: any[]);
    static make(field: string, ...values: any[]): Terms;
    toJSON(): any;
}
