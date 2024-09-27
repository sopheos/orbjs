import { AbstractFilter } from './abstract_filter';
export declare class Ids extends AbstractFilter {
    private data;
    constructor(values: any[], type?: string);
    static make(values: any[], type?: string): Ids;
    toJSON(): {
        ids: any;
    };
}
