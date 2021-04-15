export = BlankLineCounter;
declare class BlankLineCounter {
    tokenLines: Set<any>;
    countOfEmptyLinesBetween(start: any, end: any): number;
    countOfEmptyLinesBetweenTokens(start: any, end: any): number;
    calcTokenLines(ctx: any): void;
    addTokenLinesToMap(token: any): void;
}
