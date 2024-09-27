export declare class Bool {
    private data;
    static make(): Bool;
    must(value: any): this;
    filter(value: any): this;
    should(value: any): this;
    mustNot(value: any): this;
    minimumShouldMatch(value: number): this;
    boost(value?: number): this;
    private set;
    private add;
    toJSON(): {
        bool: any;
    };
}
