export = NoInlineAssemblyChecker;
declare const NoInlineAssemblyChecker_base: typeof import("../base-checker");
declare class NoInlineAssemblyChecker extends NoInlineAssemblyChecker_base {
    constructor(reporter: any);
    InlineAssemblyStatement(node: any): void;
    error(node: any): void;
}
