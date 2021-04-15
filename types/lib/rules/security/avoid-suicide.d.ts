export = AvoidSuicideChecker;
declare const AvoidSuicideChecker_base: typeof import("../base-checker");
declare class AvoidSuicideChecker extends AvoidSuicideChecker_base {
    constructor(reporter: any);
    Identifier(node: any): void;
}
