export = ConstructorSyntax;
declare const ConstructorSyntax_base: typeof import("./base-deprecation");
declare class ConstructorSyntax extends ConstructorSyntax_base {
    constructor(reporter: any);
    deprecationVersion(): string;
    FunctionDefinition(node: any): void;
}
