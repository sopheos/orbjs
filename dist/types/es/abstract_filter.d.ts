import { Bool } from './bool';
export declare class AbstractFilter {
    must(bool: Bool): this;
    filter(bool: Bool): this;
    should(bool: Bool): this;
    mustNot(bool: Bool): this;
}
