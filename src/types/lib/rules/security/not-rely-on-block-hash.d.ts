export = NotRelyOnBlockHashChecker;
declare const NotRelyOnBlockHashChecker_base: typeof import("../base-checker");
declare class NotRelyOnBlockHashChecker extends NotRelyOnBlockHashChecker_base {
    constructor(reporter: any);
    MemberAccess(node: any): void;
    _warn(node: any): void;
}
