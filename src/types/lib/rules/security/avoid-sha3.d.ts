export = AvoidSha3Checker;
declare const AvoidSha3Checker_base: typeof import("../base-checker");
declare class AvoidSha3Checker extends AvoidSha3Checker_base {
    constructor(reporter: any);
    Identifier(node: any): void;
}
