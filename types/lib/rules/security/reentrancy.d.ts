export = ReentrancyChecker;
declare const ReentrancyChecker_base: typeof import("../base-checker");
declare class ReentrancyChecker extends ReentrancyChecker_base {
    constructor(reporter: any, inputSrc: any);
    inputSrc: any;
    ContractDefinition(node: any): void;
    FunctionDefinition(node: any): void;
    ExpressionStatement(node: any): void;
    MemberAccess(node: any): void;
    _checkAssignment(node: any): void;
    _checkSendCall(node: any): void;
    _warn(ctx: any): void;
}
