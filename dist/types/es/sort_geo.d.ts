export declare class SortGeo {
    private name;
    private field;
    private lat;
    private lon;
    constructor(field: string, lat: number, lon: number, name?: string);
    static make(field: string, lat: number, lon: number, name?: string): SortGeo;
    toJSON(): any;
}
