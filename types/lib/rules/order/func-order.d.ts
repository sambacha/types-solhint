export = FuncOrderChecker;
declare const FuncOrderChecker_base: typeof import("../base-checker");
declare class FuncOrderChecker extends FuncOrderChecker_base {
    constructor(reporter: any);
    ContractDefinition(node: any): void;
    report(node: any, nodeBefore: any, label: any, labelBefore: any): void;
}
