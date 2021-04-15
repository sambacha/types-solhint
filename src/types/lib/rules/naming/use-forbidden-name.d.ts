export = UseForbiddenNameChecker;
declare const UseForbiddenNameChecker_base: typeof import("../base-checker");
declare class UseForbiddenNameChecker extends UseForbiddenNameChecker_base {
    constructor(reporter: any);
    VariableDeclaration(node: any): void;
}
