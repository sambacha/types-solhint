export = FunctionParamNameMixedcaseChecker;
declare const FunctionParamNameMixedcaseChecker_base: typeof import("../base-checker");
declare class FunctionParamNameMixedcaseChecker extends FunctionParamNameMixedcaseChecker_base {
    constructor(reporter: any);
    EventDefinition(node: any): void;
    FunctionDefinition(node: any): void;
}
