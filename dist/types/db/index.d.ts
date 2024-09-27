export declare class DB {
    private pool;
    constructor(config: any);
    query(sql: string, args?: any[]): Promise<unknown>;
    end(): Promise<void>;
}
