export function hasNoSpaceAfter(ctx: any): boolean;
export function hasNoSpacesBefore(ctx: any): boolean;
export function hasSpaceAfter(ctx: any): boolean;
export function hasSpaceBefore(ctx: any): boolean;
export function onSameLine(token1: any, token2: any): boolean;
export function prevToken(ctx: any): any;
export function startOf(ctx: any): any;
export function stopOf(ctx: any): any;
export function columnOf(ctx: any): any;
export function lineOf(ctx: any): any;
export function stopLine(ctx: any): any;
export function hasSpace(token1: any, token2: any): boolean;
export function noSpaces(token1: any, token2: any): boolean;
export function tokens(ctx: any): any;
export function nextTokenFromToken(tokenList: any, curToken: any): any;
export function prevTokenFromToken(tokenList: any, curToken: any): any;
export class BaseTokenList {
    static from(ctx: any): BaseTokenList;
    constructor(ctx: any);
    tokens: any;
}
export class Token {
    constructor(tokens: any, curToken: any);
    curToken: any;
    tokens: any;
    get line(): any;
    get column(): any;
}
export function AlignValidatable(type: any): {
    new (): {
        [x: string]: any;
        isIncorrectAligned(): boolean;
    };
    [x: string]: any;
};
