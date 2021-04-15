export = VisibilityModifierOrderChecker;
declare const VisibilityModifierOrderChecker_base: typeof import("../base-checker");
declare class VisibilityModifierOrderChecker extends VisibilityModifierOrderChecker_base {
    constructor(reporter: any, tokens: any);
    tokens: any;
    getTokensWithoutFunctionParams(node: any): any;
    FunctionDefinition(node: any): void;
    _error(node: any): void;
}
