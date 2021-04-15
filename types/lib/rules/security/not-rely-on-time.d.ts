export = NotRelyOnTimeChecker;
declare const NotRelyOnTimeChecker_base: typeof import("../base-checker");
declare class NotRelyOnTimeChecker extends NotRelyOnTimeChecker_base {
    constructor(reporter: any);
    Identifier(node: any): void;
    MemberAccess(node: any): void;
    _warn(node: any): void;
}
