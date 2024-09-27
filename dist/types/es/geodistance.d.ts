import { AbstractFilter } from './abstract_filter';
export declare class GeoDistance extends AbstractFilter {
    private name;
    private field;
    private distance;
    private point;
    constructor(field: string, lat: number, lon: number, distance: string);
    static make(field: string, lat: number, lon: number, distance: string): GeoDistance;
    toJSON(): any;
}
