export = NoEmptyBlocksChecker;
declare const NoEmptyBlocksChecker_base: typeof import("../base-checker");
declare class NoEmptyBlocksChecker extends NoEmptyBlocksChecker_base {
    constructor(reporter: any);
    Block(node: any): void;
    StructDefinition(node: any): void;
    EnumDefinition(node: any): void;
    AssemblyBlock(node: any): void;
    ContractDefinition(node: any): void;
    _validateChildrenCount(node: any, children: any): void;
    _validateContractPartsCount(node: any): void;
    _error(node: any): void;
}
