export = NoComplexFallbackChecker;
declare const NoComplexFallbackChecker_base: typeof import("../base-checker");
declare class NoComplexFallbackChecker extends NoComplexFallbackChecker_base {
    constructor(reporter: any);
    FunctionDefinition(node: any): void;
}
