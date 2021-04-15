export = NoUnusedVarsChecker;
declare const NoUnusedVarsChecker_base: typeof import("../base-checker");
declare class NoUnusedVarsChecker extends NoUnusedVarsChecker_base {
    constructor(reporter: any);
    FunctionDefinition(node: any): void;
    VariableDeclarationStatement(node: any): void;
    AssemblyLocalDefinition(node: any): void;
    Identifier(node: any): void;
    AssemblyCall(node: any, ...args: any[]): void;
    "FunctionDefinition:exit"(node: any): void;
    _addVariable(node: any): void;
    _trackVarUsage(node: any): void;
    _reportErrorsFor(node: any): void;
    _error({ name, node }: {
        name: any;
        node: any;
    }): void;
    _isVarDeclaration(node: any): any;
}
