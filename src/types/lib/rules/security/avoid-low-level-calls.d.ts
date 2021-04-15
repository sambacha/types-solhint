export = AvoidLowLevelCallsChecker;
declare const AvoidLowLevelCallsChecker_base: typeof import("../base-checker");
declare class AvoidLowLevelCallsChecker extends AvoidLowLevelCallsChecker_base {
    constructor(reporter: any);
    MemberAccess(node: any): void;
    _warn(ctx: any): void;
}
