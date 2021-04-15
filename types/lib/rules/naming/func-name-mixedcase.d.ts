export = FuncNameMixedcaseChecker;
declare const FuncNameMixedcaseChecker_base: typeof import("../base-checker");
declare class FuncNameMixedcaseChecker extends FuncNameMixedcaseChecker_base {
    constructor(reporter: any);
    FunctionDefinition(node: any): void;
}
