export = CodeComplexityChecker;
declare const CodeComplexityChecker_base: typeof import("../base-checker");
declare class CodeComplexityChecker extends CodeComplexityChecker_base {
    constructor(reporter: any, config: any);
    maxComplexity: any;
    FunctionDefinition(node: any): void;
    ModifierDefinition(node: any): void;
    IfStatement(node: any): void;
    WhileStatement(node: any): void;
    DoWhileStatement(node: any): void;
    ForStatement(node: any): void;
    "FunctionDefinition:exit"(node: any): void;
    "ModifierDefinition:exit"(node: any): void;
    _attachComplexityScope(node: any): void;
    _complexityPlusOne(node: any): void;
    _verifyComplexityScope(node: any): void;
    _error(node: any, scope: any): void;
}
