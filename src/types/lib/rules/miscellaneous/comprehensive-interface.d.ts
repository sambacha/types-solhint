export = ComprehensiveInterface;
declare const ComprehensiveInterface_base: typeof import("../base-checker");
declare class ComprehensiveInterface extends ComprehensiveInterface_base {
    constructor(reporter: any);
    ContractDefinition(node: any): void;
    isContract: boolean;
    "ContractDefinition:exit"(): void;
    FunctionDefinition(node: any): void;
}
