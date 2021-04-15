export = ReasonStringChecker;
declare const ReasonStringChecker_base: typeof import("../base-checker");
declare class ReasonStringChecker extends ReasonStringChecker_base {
    constructor(reporter: any, config: any);
    maxCharactersLong: any;
    FunctionCall(node: any): void;
    isReasonStringStatement(node: any): boolean;
    getFunctionName(node: any): any;
    getFunctionParameters(node: any, ...args: any[]): any;
    _errorHaveNoMessage(node: any, key: any): void;
    _errorMessageIsTooLong(node: any, key: any): void;
}
