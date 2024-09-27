import { AbstractFilter } from './abstract_filter';
export declare class MatchAll extends AbstractFilter {
    static make(): MatchAll;
    toJSON(): {
        match_all: {};
    };
}
