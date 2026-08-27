# AI Review Form

[Back to project README](../../README.md)

## Suggested Code

```ts
type StudentStatus = "active" | "inactive";

function formatStudentStatus(status: unknown): string {
  if (status === "active") {
    return "Active Student";
  }

  if (status === "inactive") {
    return "Inactive Student";
  }

  return "Unknown Status";
}
```

## AI Tool

OpenAI Codex

## Prompt Used

Suggest a TypeScript implementation for converting a student's active/inactive status into a readable label. Explain the implementation and include possible edge cases. Do not use the `any` type.

## AI Recommendation

Create a `formatStudentStatus` function that accepts `unknown`, returns `"Active Student"` for `"active"`, `"Inactive Student"` for `"inactive"`, and `"Unknown Status"` for unexpected values.

## What I Understood

The function converts technical status values into user-friendly labels. Using `unknown` requires the value to be checked safely before using it.

## Recommendation Accepted

I accepted the status mappings, the use of `unknown`, and the safe fallback label.

## Recommendation Modified

I renamed the final function to `getStudentStatusLabel`, reused `StudentStatus` in the existing `Student` interface, and connected the function to `formatStudent` so the readable label appears in the program output.

## Recommendation Rejected

None.

## Reason

The recommendation satisfied the acceptance criteria, avoided the `any` type, and safely handled invalid values. The small modifications made it fit the existing project structure.
