import { AbstractFilter } from './abstract_filter';
export declare class Term extends AbstractFilter {
    protected name: string;
    protected field: string;
    protected data: any;
    constructor(field: string, value: any);
    static make(field: string, value: any): Term;
    boost(value?: number): this;
    protected set(option: string, value: any): this;
    toJSON(): any;
}
