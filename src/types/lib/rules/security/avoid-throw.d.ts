export = AvoidThrowChecker;
declare const AvoidThrowChecker_base: typeof import("../base-checker");
declare class AvoidThrowChecker extends AvoidThrowChecker_base {
    constructor(reporter: any);
    ThrowStatement(node: any): void;
}
