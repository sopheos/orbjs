import { Term } from './term';
export declare class Prefix extends Term {
    constructor(field: string, value: any);
    static make(field: string, value: any): Prefix;
}
