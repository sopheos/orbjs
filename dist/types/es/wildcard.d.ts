import { Term } from './term';
export declare class Wildcard extends Term {
    constructor(field: string, value: any);
    static make(field: string, value: any): Wildcard;
}
