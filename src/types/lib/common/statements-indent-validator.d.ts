export class StatementsIndentValidator {
    constructor(ctx: any);
    ctx: any;
    cases(...cases: any[]): StatementsIndentValidator;
    casesList: any[];
    errorsTo(callback: any): void;
    _validCase(): any;
}
export class Rule {
    static rule(name: any): SyntacticSequence;
    static expression(): SyntacticSequence;
    constructor(ruleName: any);
    ruleName: any;
    _ruleToClassName(): string;
    syntaxMatch(ctx: any): boolean;
    ctx: any;
}
export class Term {
    static term(...terms: any[]): SyntacticSequence;
    constructor(...terms: any[]);
    terms: any[];
    syntaxMatch(ctx: any): boolean;
    ctx: any;
}
declare class SyntacticSequence {
    items: any[];
    spaceAroundOrNot(...terms: any[]): SyntacticSequence;
    spaceAround(...terms: any[]): SyntacticSequence;
    rule(name: any): SyntacticSequence;
    term(...termNames: any[]): SyntacticSequence;
    noSpaces(): SyntacticSequence;
    space(): SyntacticSequence;
    noSpacesAround(...names: any[]): SyntacticSequence;
    expression(): SyntacticSequence;
    identifier(): SyntacticSequence;
    statement(): SyntacticSequence;
    errorsTo(ctx: any, callback: any): void;
    syntaxMatch(ctx: any): boolean;
    validate(callback: any): void;
    get lastItem(): any;
}
export {};
