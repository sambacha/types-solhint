export = AstPrinter;
declare class AstPrinter {
    constructor(tokenStream: any);
    tokenStream: any;
    print(ctx: any): void;
    explore(ctx: any, indentation: any): void;
}
