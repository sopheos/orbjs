import { AbstractFilter } from './abstract_filter';
export declare class Type extends AbstractFilter {
    private type;
    constructor(type: string);
    static make(type: string): Type;
    toJSON(): {
        type: {
            value: string;
        };
    };
}
