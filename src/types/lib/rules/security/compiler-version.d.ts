export = CompilerVersionChecker;
declare const CompilerVersionChecker_base: typeof import("../base-checker");
declare class CompilerVersionChecker extends CompilerVersionChecker_base {
    constructor(reporter: any, config: any);
    requirement: any;
    SourceUnit(node: any): void;
    PragmaDirective(node: any): void;
}
