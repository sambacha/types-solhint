export = AvoidTxOriginChecker;
declare const AvoidTxOriginChecker_base: typeof import("../base-checker");
declare class AvoidTxOriginChecker extends AvoidTxOriginChecker_base {
    constructor(reporter: any);
    MemberAccess(node: any): void;
}
