# AI Recommendation Verification

[Back to project README](../../README.md)

## Claim or Code Verified

The union type `"active" | "inactive"` limits the expected status values. The `unknown` type safely accepts unexpected input but requires checking before using it.

---

## Source

- [TypeScript Union Types documentation](https://www.typescriptlang.org/docs/handbook/2/everyday-types.html)
- [TypeScript `unknown` documentation](https://www.typescriptlang.org/docs/handbook/2/functions.html#unknown)

---

## Result

Verified. The official documentation confirms that union types restrict possible values and that `unknown` is safer than `any`. Therefore, the implementation correctly checks the status before returning a label.
