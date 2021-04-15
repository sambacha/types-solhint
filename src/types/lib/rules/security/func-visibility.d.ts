export = FuncVisibilityChecker;
declare const FuncVisibilityChecker_base: typeof import("../base-checker");
declare class FuncVisibilityChecker extends FuncVisibilityChecker_base {
    constructor(reporter: any, config: any);
    ignoreConstructors: any;
    FunctionDefinition(node: any): void;
}
