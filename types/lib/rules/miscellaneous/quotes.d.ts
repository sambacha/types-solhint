export = QuotesChecker;
declare const QuotesChecker_base: typeof import("../base-checker");
declare class QuotesChecker extends QuotesChecker_base {
    constructor(reporter: any, config: any, tokens: any);
    tokens: any;
    visitedNodes: any;
    quoteType: any;
    incorrectQuote: string;
    StringLiteral(node: any): void;
    ImportDirective(node: any): void;
    validateQuotes(node: any): void;
    alreadyVisited({ loc: { start: { line, column } } }: {
        loc: {
            start: {
                line: any;
                column: any;
            };
        };
    }): any;
    addVisitedNode({ loc: { start: { line, column } } }: {
        loc: {
            start: {
                line: any;
                column: any;
            };
        };
    }): void;
    _error(ctx: any): void;
}
