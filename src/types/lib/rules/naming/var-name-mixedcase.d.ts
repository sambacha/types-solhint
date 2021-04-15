export = VarNameMixedcaseChecker;
declare const VarNameMixedcaseChecker_base: typeof import("../base-checker");
declare class VarNameMixedcaseChecker extends VarNameMixedcaseChecker_base {
    constructor(reporter: any);
    VariableDeclaration(node: any): void;
    validateVariablesName(node: any): void;
}
