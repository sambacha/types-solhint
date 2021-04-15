export = CheckSendResultChecker;
declare const CheckSendResultChecker_base: typeof import("../base-checker");
declare class CheckSendResultChecker extends CheckSendResultChecker_base {
    constructor(reporter: any);
    MemberAccess(node: any): void;
    validateSend(node: any): void;
    isRequire(node: any): boolean;
    isAssert(node: any): boolean;
}
