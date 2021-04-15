export = ContractNameCamelcaseChecker;
declare const ContractNameCamelcaseChecker_base: typeof import("../base-checker");
declare class ContractNameCamelcaseChecker extends ContractNameCamelcaseChecker_base {
    constructor(reporter: any);
    ContractDefinition(node: any): void;
    EnumDefinition(node: any): void;
    StructDefinition(node: any): void;
    validateName(node: any): void;
    _error(node: any): void;
}
