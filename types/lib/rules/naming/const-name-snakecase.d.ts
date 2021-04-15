export = ConstNameSnakecaseChecker;
declare const ConstNameSnakecaseChecker_base: typeof import("../base-checker");
declare class ConstNameSnakecaseChecker extends ConstNameSnakecaseChecker_base {
    constructor(reporter: any);
    VariableDeclaration(node: any): void;
    validateConstantName(variable: any): void;
}
