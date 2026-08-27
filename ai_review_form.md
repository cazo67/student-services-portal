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

---

## AI Tool

OpenAI Codex

---

## Prompt Used

Suggest a TypeScript implementation for converting a student's active/inactive status into a readable label. Explain the implementation and include possible edge cases. Do not use the `any` type.

---

## AI Recommendation

Create a `formatStudentStatus` function that accepts `unknown`, returns `"Active Student"` for `"active"`, `"Inactive Student"` for `"inactive"`, and `"Unknown Status"` for unexpected values.

---

## What I Understood

The function converts technical status values into user-friendly labels. Using `unknown` requires the value to be checked safely before using it.

---

## Recommendation Accepted

The status mappings, use of `unknown`, and safe fallback label were accepted.

---

## Recommendation Modified

The recommendation may be adjusted to match the existing names and types used in the project.

---

## Recommendation Rejected

None.

---

## Reason

The recommendation satisfies the acceptance criteria, avoids the `any` type, and safely handles invalid values.
