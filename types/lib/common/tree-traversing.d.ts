export = TreeTraversing;
declare class TreeTraversing {
    statementNotContains(node: any, type: any): boolean;
    findParentStatement(node: any): any;
    findParentType(node: any, type: any): any;
    findDownType(node: any, type: any): any;
    findTypeInChildren(ctx: any, type: any): any;
    /**
     * Traverses the tree up and checks `predicate` in each node.
     *
     * @returns {boolean}
     */
    someParent(node: any, predicate: any): boolean;
    findIdentifier(ctx: any): {};
}
declare namespace TreeTraversing { }
