<pre>
├── README.md
├── package.json
└── types
    ├── lib
    │   ├── comment-directive-parser.d.ts
    │   ├── common
    │   │   ├── ajv.d.ts
    │   │   ├── ast-printer.d.ts
    │   │   ├── ast-types.d.ts
    │   │   ├── blank-line-counter.d.ts
    │   │   ├── errors.d.ts
    │   │   ├── identifier-naming.d.ts
    │   │   ├── statements-indent-validator.d.ts
    │   │   ├── tokens.d.ts
    │   │   ├── tree-traversing.d.ts
    │   │   └── utils.d.ts
    │   ├── config
    │   │   ├── config-file.d.ts
    │   │   ├── config-schema.d.ts
    │   │   └── config-validator.d.ts
    │   ├── config.d.ts
    │   ├── doc
    │   │   └── utils.d.ts
    │   ├── reporter.d.ts
    │   └── rules
    │       ├── base-checker.d.ts
    │       ├── best-practises
    │       │   ├── code-complexity.d.ts
    │       │   ├── function-max-lines.d.ts
    │       │   ├── index.d.ts
    │       │   ├── max-line-length.d.ts
    │       │   ├── max-states-count.d.ts
    │       │   ├── no-empty-blocks.d.ts
    │       │   ├── no-unused-vars.d.ts
    │       │   ├── payable-fallback.d.ts
    │       │   └── reason-string.d.ts
    │       ├── deprecations
    │       │   ├── base-deprecation.d.ts
    │       │   ├── constructor-syntax.d.ts
    │       │   └── index.d.ts
    │       ├── index.d.ts
    │       ├── miscellaneous
    │       │   ├── comprehensive-interface.d.ts
    │       │   ├── index.d.ts
    │       │   └── quotes.d.ts
    │       ├── naming
    │       │   ├── const-name-snakecase.d.ts
    │       │   ├── contract-name-camelcase.d.ts
    │       │   ├── event-name-camelcase.d.ts
    │       │   ├── func-name-mixedcase.d.ts
    │       │   ├── func-param-name-mixedcase.d.ts
    │       │   ├── index.d.ts
    │       │   ├── modifier-name-mixedcase.d.ts
    │       │   ├── private-vars-leading-underscore.d.ts
    │       │   ├── use-forbidden-name.d.ts
    │       │   └── var-name-mixedcase.d.ts
    │       ├── order
    │       │   ├── func-order.d.ts
    │       │   ├── imports-on-top.d.ts
    │       │   ├── index.d.ts
    │       │   ├── ordering.d.ts
    │       │   └── visibility-modifier-order.d.ts
    │       └── security
    │           ├── avoid-call-value.d.ts
    │           ├── avoid-low-level-calls.d.ts
    │           ├── avoid-sha3.d.ts
    │           ├── avoid-suicide.d.ts
    │           ├── avoid-throw.d.ts
    │           ├── avoid-tx-origin.d.ts
    │           ├── check-send-result.d.ts
    │           ├── compiler-version.d.ts
    │           ├── func-visibility.d.ts
    │           ├── index.d.ts
    │           ├── mark-callable-contracts.d.ts
    │           ├── multiple-sends.d.ts
    │           ├── no-complex-fallback.d.ts
    │           ├── no-inline-assembly.d.ts
    │           ├── not-rely-on-block-hash.d.ts
    │           ├── not-rely-on-time.d.ts
    │           ├── reentrancy.d.ts
    │           └── state-visibility.d.ts
    └── test
        ├── common
        │   └── contract-builder.d.ts
        └── fixtures
            ├── best-practises
            │   ├── code-complexity-high.d.ts
            │   ├── code-complexity-low.d.ts
            │   ├── fallback-not-payable.d.ts
            │   ├── fallback-payable.d.ts
            │   ├── number-of-states-high.d.ts
            │   ├── number-of-states-low.d.ts
            │   ├── require-with-reason.d.ts
            │   └── require-without-reason.d.ts
            ├── miscellaneous
            │   ├── public-function-no-override.d.ts
            │   ├── public-function-with-override.d.ts
            │   ├── string-with-double-quotes.d.ts
            │   └── string-with-single-quotes.d.ts
            ├── order
            │   ├── func-order-constructor-first.d.ts
            │   ├── func-order-constructor-not-first.d.ts
            │   ├── ordering-correct.d.ts
            │   ├── ordering-incorrect.d.ts
            │   ├── visibility-modifier-first.d.ts
            │   └── visibility-modifier-not-first.d.ts
            └── security
                ├── external-contract-trusted.d.ts
                ├── external-contract-untrusted.d.ts
                ├── functions-with-visibility.d.ts
                ├── functions-without-visibility.d.ts
                ├── low-level-calls.d.ts
                ├── reentrancy-invulenarble.d.ts
                ├── reentrancy-vulenarble.d.ts
                ├── send-result-checked.d.ts
                └── send-result-ignored.d.ts

19 directories, 97 files
</pre>
