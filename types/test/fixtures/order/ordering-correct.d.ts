declare const _exports: {
    [n: number]: {
        description: string;
        code: string;
    };
    length: number;
    toString(): string;
    toLocaleString(): string;
    pop(): {
        description: string;
        code: string;
    };
    push(...items: {
        description: string;
        code: string;
    }[]): number;
    concat(...items: ConcatArray<{
        description: string;
        code: string;
    }>[]): {
        description: string;
        code: string;
    }[];
    concat(...items: ({
        description: string;
        code: string;
    } | ConcatArray<{
        description: string;
        code: string;
    }>)[]): {
        description: string;
        code: string;
    }[];
    join(separator?: string): string;
    reverse(): {
        description: string;
        code: string;
    }[];
    shift(): {
        description: string;
        code: string;
    };
    slice(start?: number, end?: number): {
        description: string;
        code: string;
    }[];
    sort(compareFn?: (a: {
        description: string;
        code: string;
    }, b: {
        description: string;
        code: string;
    }) => number): {
        description: string;
        code: string;
    }[];
    splice(start: number, deleteCount?: number): {
        description: string;
        code: string;
    }[];
    splice(start: number, deleteCount: number, ...items: {
        description: string;
        code: string;
    }[]): {
        description: string;
        code: string;
    }[];
    unshift(...items: {
        description: string;
        code: string;
    }[]): number;
    indexOf(searchElement: {
        description: string;
        code: string;
    }, fromIndex?: number): number;
    lastIndexOf(searchElement: {
        description: string;
        code: string;
    }, fromIndex?: number): number;
    every(callbackfn: (value: {
        description: string;
        code: string;
    }, index: number, array: {
        description: string;
        code: string;
    }[]) => unknown, thisArg?: any): boolean;
    some(callbackfn: (value: {
        description: string;
        code: string;
    }, index: number, array: {
        description: string;
        code: string;
    }[]) => unknown, thisArg?: any): boolean;
    forEach(callbackfn: (value: {
        description: string;
        code: string;
    }, index: number, array: {
        description: string;
        code: string;
    }[]) => void, thisArg?: any): void;
    map<U>(callbackfn: (value: {
        description: string;
        code: string;
    }, index: number, array: {
        description: string;
        code: string;
    }[]) => U, thisArg?: any): U[];
    filter<S extends {
        description: string;
        code: string;
    }>(callbackfn: (value: {
        description: string;
        code: string;
    }, index: number, array: {
        description: string;
        code: string;
    }[]) => value is S, thisArg?: any): S[];
    filter(callbackfn: (value: {
        description: string;
        code: string;
    }, index: number, array: {
        description: string;
        code: string;
    }[]) => unknown, thisArg?: any): {
        description: string;
        code: string;
    }[];
    reduce(callbackfn: (previousValue: {
        description: string;
        code: string;
    }, currentValue: {
        description: string;
        code: string;
    }, currentIndex: number, array: {
        description: string;
        code: string;
    }[]) => {
        description: string;
        code: string;
    }): {
        description: string;
        code: string;
    };
    reduce(callbackfn: (previousValue: {
        description: string;
        code: string;
    }, currentValue: {
        description: string;
        code: string;
    }, currentIndex: number, array: {
        description: string;
        code: string;
    }[]) => {
        description: string;
        code: string;
    }, initialValue: {
        description: string;
        code: string;
    }): {
        description: string;
        code: string;
    };
    reduce<U_1>(callbackfn: (previousValue: U_1, currentValue: {
        description: string;
        code: string;
    }, currentIndex: number, array: {
        description: string;
        code: string;
    }[]) => U_1, initialValue: U_1): U_1;
    reduceRight(callbackfn: (previousValue: {
        description: string;
        code: string;
    }, currentValue: {
        description: string;
        code: string;
    }, currentIndex: number, array: {
        description: string;
        code: string;
    }[]) => {
        description: string;
        code: string;
    }): {
        description: string;
        code: string;
    };
    reduceRight(callbackfn: (previousValue: {
        description: string;
        code: string;
    }, currentValue: {
        description: string;
        code: string;
    }, currentIndex: number, array: {
        description: string;
        code: string;
    }[]) => {
        description: string;
        code: string;
    }, initialValue: {
        description: string;
        code: string;
    }): {
        description: string;
        code: string;
    };
    reduceRight<U_2>(callbackfn: (previousValue: U_2, currentValue: {
        description: string;
        code: string;
    }, currentIndex: number, array: {
        description: string;
        code: string;
    }[]) => U_2, initialValue: U_2): U_2;
};
export = _exports;
