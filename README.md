# Student Services Portal

## Project Description

This TypeScript laboratory project demonstrates student records, generic API responses, type safety, runtime validation, and a readable student-status formatter.

## Requirements

- Node.js
- npm
- Git
- A code editor such as Visual Studio Code

## Installation Instructions

```bash
git clone https://github.com/cazo67/student-services-portal.git
cd student-services-portal
npm install
```

## How to Run the Project

Compile the TypeScript source and run the generated JavaScript:

```bash
npx tsc
node src/index.js
```

The status formatter should print `Active Student`, `Inactive Student`, and `Unknown Status` for the example values.

## How to Run TypeScript Checks

```bash
npx tsc --noEmit
```

No terminal output means that the TypeScript check passed.

## How to Run Linting

```bash
npm run lint
```

## How to Format Code

```bash
npm run format
```

## Available Tests

No automated test suite is configured yet. The current `npm test` script is only the default placeholder, so verification uses TypeScript checks, ESLint, Prettier, and the program output.

## Development Workflow

1. Record the task in a GitHub Issue.
2. Create and switch to a feature branch.
3. Implement and review the change.
4. Run TypeScript checks, linting, formatting, and available tests.
5. Commit the verified work with a meaningful message.
6. Push the feature branch and open a Pull Request.
7. Link the Pull Request to its Issue and merge after approval.

## Project Structure

```text
student-services-portal/
|-- docs/
|   |-- ai/                 # AI prompt, review, and source verification
|   |-- evidence/           # Laboratory evidence and check results
|   `-- reflection/         # Short reflection document
|-- src/                    # TypeScript source and compiled output
|-- .gitignore
|-- .prettierignore
|-- .prettierrc.json
|-- eslint.config.js
|-- package.json
|-- tsconfig.json
`-- README.md
```

## Documentation Responses

- [AI prompt, recommendation, and review form](docs/ai/ai-review-form.md)
- [Official-source verification of the AI recommendation](docs/ai/ai-verification.md)
- [Laboratory evidence guide](docs/evidence/README.md)
- [Code-review evidence](docs/evidence/code-review.md)
- [Verification command results](docs/evidence/verification-results.md)
- [Short reflection in Word format](docs/reflection/git-github-laboratory-reflection.docx)

## Laboratory Deliverables

|   # | Deliverable                                | Location                                                                                                                           |
| --: | ------------------------------------------ | ---------------------------------------------------------------------------------------------------------------------------------- |
|   1 | GitHub repository URL                      | [Student Services Portal repository](https://github.com/cazo67/student-services-portal)                                            |
|   2 | Development-environment screenshot         | Screenshot still required; see the [evidence guide](docs/evidence/README.md)                                                       |
|   3 | README                                     | [README.md](README.md)                                                                                                             |
|   4 | Git ignore rules                           | [.gitignore](.gitignore)                                                                                                           |
|   5 | npm configuration                          | [package.json](package.json)                                                                                                       |
|   6 | TypeScript configuration                   | [tsconfig.json](tsconfig.json)                                                                                                     |
|   7 | ESLint configuration                       | [eslint.config.js](eslint.config.js)                                                                                               |
|   8 | Prettier configuration                     | [.prettierrc.json](.prettierrc.json) and [.prettierignore](.prettierignore)                                                        |
|   9 | TypeScript source                          | [src/index.ts](src/index.ts)                                                                                                       |
|  10 | Runtime-validation example                 | [`isStudent` and sample objects](src/index.ts#L82)                                                                                 |
|  11 | GitHub Issue                               | [Issue #1](https://github.com/cazo67/student-services-portal/issues/1)                                                             |
|  12 | Feature branch                             | [`feature/student-status`](https://github.com/cazo67/student-services-portal/tree/feature/student-status)                          |
|  13 | Meaningful commit history                  | [Commits on `main`](https://github.com/cazo67/student-services-portal/commits/main/)                                               |
|  14 | Pull Request                               | [Pull Request #2](https://github.com/cazo67/student-services-portal/pull/2)                                                        |
|  15 | Code-review evidence                       | [Self-review record](docs/evidence/code-review.md) and [Pull Request #2](https://github.com/cazo67/student-services-portal/pull/2) |
|  16 | AI prompt and response                     | [AI review form](docs/ai/ai-review-form.md)                                                                                        |
|  17 | AI review form                             | [AI review form](docs/ai/ai-review-form.md)                                                                                        |
|  18 | Accepted, modified, or rejected suggestion | [Recommendation review](docs/ai/ai-review-form.md#recommendation-modified)                                                         |
|  19 | Verification source                        | [AI recommendation verification](docs/ai/ai-verification.md)                                                                       |
|  20 | Short reflection                           | [Laboratory reflection](docs/reflection/git-github-laboratory-reflection.docx)                                                     |

## AI Usage Policy

AI tools may be used for learning, explanations, debugging, and documentation assistance. Every AI suggestion must be understood, reviewed, tested, and verified before it is accepted. Passwords, access tokens, API keys, and other private information must never be shared with an AI tool or committed to this repository.
