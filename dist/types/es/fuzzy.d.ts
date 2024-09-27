import { Term } from './term';
export declare class Fuzzy extends Term {
    constructor(field: string, value: any);
    static make(field: string, value: any): Fuzzy;
    fuzziness(value?: any): this;
    prefixLength(value: number): this;
    maxExpansions(value: number): this;
    transpositions(value: boolean): this;
}
