export = PrivateVarsLeadingUnderscoreChecker;
declare const PrivateVarsLeadingUnderscoreChecker_base: typeof import("../base-checker");
declare class PrivateVarsLeadingUnderscoreChecker extends PrivateVarsLeadingUnderscoreChecker_base {
    constructor(reporter: any, config: any);
    isStrict: any;
    ContractDefinition(node: any): void;
    inLibrary: boolean;
    "ContractDefinition:exit"(): void;
    FunctionDefinition(node: any): void;
    StateVariableDeclaration(): void;
    inStateVariableDeclaration: boolean;
    "StateVariableDeclaration:exit"(): void;
    VariableDeclaration(node: any): void;
    validateName(node: any, shouldHaveLeadingUnderscore: any): void;
    _error(node: any, name: any, shouldHaveLeadingUnderscore: any): void;
}
