export = BaseChecker;
declare class BaseChecker {
    constructor(reporter: any, ruleId: any, meta: any);
    reporter: any;
    ruleId: any;
    meta: any;
    error(ctx: any, message: any, fix: any): void;
    errorAt(line: any, column: any, message: any, fix: any): void;
    warn(ctx: any, message: any, fix: any): void;
    addReport(type: any, ctx: any, message: any, fix: any): void;
}
