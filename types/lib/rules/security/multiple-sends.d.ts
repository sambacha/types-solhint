export = MultipleSendsChecker;
declare const MultipleSendsChecker_base: typeof import("../base-checker");
declare class MultipleSendsChecker extends MultipleSendsChecker_base {
    constructor(reporter: any);
    funcDefSet: any;
    MemberAccess(node: any): void;
    validateMultipleSendInFunc(node: any): boolean;
    validateSendCallInLoop(node: any): void;
    _error(node: any): void;
}
