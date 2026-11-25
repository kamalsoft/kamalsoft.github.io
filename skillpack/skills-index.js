window.SKILL_INDEX = {
 "skills": [
  {
   "id": "rlm-acceptance-criteria-check",
   "goal": "Acceptance criteria check: each criterion is testable, specific and met by the change.",
   "cat": "Installed",
   "on": false,
   "use": "Acceptance criteria check: each criterion is testable, specific and met by the change. Use when a user story or ticket is ready for development or review.",
   "prompt": "Use the rlm-acceptance-criteria-check skill.",
   "input": "",
   "output": "",
   "pros": [],
   "cons": [],
   "items": [
    "input-1",
    "input-2",
    "input-3",
    "input-4",
    "input-5",
    "input-6"
   ],
   "steps": [
    {
     "layout": "row",
     "note": "List the criteria. Number each acceptance criterion in the ticket."
    },
    {
     "layout": "chunks",
     "note": "Check testability. Flag criteria that cannot be checked as written.",
     "groups": [
      0,
      0,
      1,
      1,
      2,
      2
     ]
    },
    {
     "layout": "parallel",
     "note": "Check specificity. Flag words such as fast, easy or secure with no measure.",
     "groups": [
      0,
      0,
      1,
      1,
      2,
      2
     ],
     "state": [
      "ok",
      "ok",
      "ok",
      "ok",
      "ok",
      "ok"
     ]
    },
    {
     "layout": "funnel",
     "note": "Map to tests. Note the test or check that proves each criterion."
    },
    {
     "layout": "gate",
     "note": "Report. Each criterion with its status, the gap and the rewrite.",
     "pass": [
      true,
      true,
      true,
      true,
      true,
      false
     ]
    }
   ],
   "outcome": null,
   "idea": "",
   "why": "",
   "protocol": [
    {
     "title": "List the criteria",
     "text": "Number each acceptance criterion in the ticket."
    },
    {
     "title": "Check testability",
     "text": "Flag criteria that cannot be checked as written."
    },
    {
     "title": "Check specificity",
     "text": "Flag words such as fast, easy or secure with no measure."
    },
    {
     "title": "Map to tests",
     "text": "Note the test or check that proves each criterion."
    },
    {
     "title": "Report",
     "text": "Each criterion with its status, the gap and the rewrite."
    }
   ],
   "path": ".github/skills/rlm-acceptance-criteria-check",
   "files": [],
   "helperScripts": 0,
   "notChecked": true,
   "group": "review",
   "grade": {
    "grade": "B+",
    "score": "3.80",
    "scores": [
     4,
     4,
     3,
     4,
     4
    ],
    "design": true,
    "rank": 106
   }
  },
  {
   "id": "rlm-access-recertification",
   "goal": "Access recertification: periodic review that each person still needs each access.",
   "cat": "Installed",
   "on": false,
   "use": "Access recertification: periodic review that each person still needs each access. Use when an access review cycle is due.",
   "prompt": "Use the rlm-access-recertification skill.",
   "input": "",
   "output": "",
   "pros": [],
   "cons": [],
   "items": [
    "input-1",
    "input-2",
    "input-3",
    "input-4",
    "input-5",
    "input-6"
   ],
   "steps": [
    {
     "layout": "row",
     "note": "List the accounts and roles with their owners."
    },
    {
     "layout": "chunks",
     "note": "Check the need. Each owner confirms the access is still needed.",
     "groups": [
      0,
      0,
      1,
      1,
      2,
      2
     ]
    },
    {
     "layout": "parallel",
     "note": "Remove the stale. Revoke access that is not confirmed in the period.",
     "groups": [
      0,
      0,
      1,
      1,
      2,
      2
     ],
     "state": [
      "ok",
      "ok",
      "ok",
      "ok",
      "ok",
      "ok"
     ]
    },
    {
     "layout": "funnel",
     "note": "Check service accounts. Each has an owner and a purpose."
    },
    {
     "layout": "gate",
     "note": "Report. The accesses reviewed, revoked and still open, with the owners.",
     "pass": [
      true,
      true,
      true,
      true,
      true,
      false
     ]
    }
   ],
   "outcome": null,
   "idea": "",
   "why": "",
   "protocol": [
    {
     "title": "List the accounts and roles with their owners",
     "text": ""
    },
    {
     "title": "Check the need",
     "text": "Each owner confirms the access is still needed."
    },
    {
     "title": "Remove the stale",
     "text": "Revoke access that is not confirmed in the period."
    },
    {
     "title": "Check service accounts",
     "text": "Each has an owner and a purpose."
    },
    {
     "title": "Report",
     "text": "The accesses reviewed, revoked and still open, with the owners."
    }
   ],
   "path": ".github/skills/rlm-access-recertification",
   "files": [],
   "helperScripts": 0,
   "notChecked": true,
   "group": "compliance",
   "grade": {
    "grade": "B+",
    "score": "3.85",
    "scores": [
     4,
     4,
     4,
     3,
     4
    ],
    "design": true,
    "rank": 48
   }
  },
  {
   "id": "rlm-accessibility-audit",
   "goal": "Audit a large front end for accessibility using Recursive Language Model (RLM) decomposition: semantics, name…",
   "cat": "Installed",
   "on": false,
   "use": "Audit a large front end for accessibility using Recursive Language Model (RLM) decomposition: semantics, names, keyboard and focus, live announcements, contrast, motion, text scaling and reflow, each finding tied to a WCAG 2.2 success criterion. Use when asked for an accessibility review, before release, or when a user reports an assistive-technology problem.",
   "prompt": "Use the rlm-accessibility-audit skill.",
   "input": "",
   "output": "",
   "pros": [],
   "cons": [],
   "items": [
    "input-1",
    "input-2",
    "input-3",
    "input-4",
    "input-5",
    "input-6"
   ],
   "steps": [
    {
     "layout": "row",
     "note": "Scope the front end. Find the templates, components and styles (for example `src/`, `app/`, `components/`, `templates/`, `*.html`, `*.jsx`, `*.tsx`, `*.vue`, `*.svelte`, `*.css`)."
    },
    {
     "layout": "chunks",
     "note": "Inspect. Run `python3 <skill>/scripts/rlm_corpus.py scan <repo>`.",
     "groups": [
      0,
      0,
      1,
      1,
      2,
      2
     ]
    },
    {
     "layout": "parallel",
     "note": "Partition. Run `WORK=$(mktemp -d)`, then `python3 <skill>/scripts/rlm_corpus.py chunk <repo> \"$WORK/chunks\"`.",
     "groups": [
      0,
      0,
      1,
      1,
      2,
      2
     ],
     "state": [
      "ok",
      "ok",
      "ok",
      "ok",
      "ok",
      "ok"
     ]
    },
    {
     "layout": "funnel",
     "note": "Map. For each chunk, run a fresh sub-task (a subagent if you can start one) that sees only that chunk file and the \"Chunk task\" below."
    },
    {
     "layout": "gate",
     "note": "Reduce. Run `python3 <skill>/scripts/rlm_corpus.py merge \"$WORK/out\" --out \"$WORK/merged.json\"`.",
     "pass": [
      true,
      true,
      true,
      true,
      true,
      false
     ]
    },
    {
     "layout": "doc",
     "note": "Verify. For every high-severity item, open the component and follow how it renders: a missing name may be supplied by a parent, a wrapper or a prop.",
     "docLabel": "report"
    }
   ],
   "outcome": null,
   "idea": "",
   "why": "",
   "protocol": [
    {
     "title": "Scope the front end",
     "text": "Find the templates, components and styles (for example `src/`, `app/`, `components/`, `templates/`, `*.html`, `*.jsx`, `*.tsx`, `*.vue`, `*.svelte`, `*.css`). Use them as the `--include` scope below. If an automated checker is already set up (for example axe, pa11y or Lighthouse in the test suite), run it and keep its report; do not install tools without asking."
    },
    {
     "title": "Inspect",
     "text": "Run `python3 <skill>/scripts/rlm_corpus.py scan <repo>`. Note the file count, line count and top-level folders. If the corpus is very large, agree the scope with the user, then narrow it with `--include 'src/*'` (repeatable) on every command. Files over 20 MB are skipped; `--max-bytes N` changes the limit. Report what `scan` lists as skipped."
    },
    {
     "title": "Partition",
     "text": "Run `WORK=$(mktemp -d)`, then `python3 <skill>/scripts/rlm_corpus.py chunk <repo> \"$WORK/chunks\"`. Chunks are limited to 800 lines and 100,000 characters each, and are cut between definitions where possible. Each `chunk_NNN.md` holds the data notice and labelled file sections. `manifest.json` lists the chunks."
    },
    {
     "title": "Map",
     "text": "For each chunk, run a fresh sub-task (a subagent if you can start one) that sees only that chunk file and the \"Chunk task\" below. It writes `\"$WORK/out/<chunk>.out.md\"`. If you cannot start sub-tasks, run `python3 <skill>/scripts/rlm_corpus.py pending \"$WORK/chunks\" \"$WORK/out\"`. It lists the chunks that still have no output. Process the first one: read it, write its output, then run `pending` again. Repeat until nothing is pending. Never hold all chunks in context at once."
    },
    {
     "title": "Reduce",
     "text": "Run `python3 <skill>/scripts/rlm_corpus.py merge \"$WORK/out\" --out \"$WORK/merged.json\"`. If it lists `failed_outputs`, re-run those chunks. A missing or invalid output is not \"no findings\". If the merged list is still too large to read, repeat steps 2 to 4 on the findings."
    },
    {
     "title": "Verify",
     "text": "For every high-severity item, open the component and follow how it renders: a missing name may be supplied by a parent, a wrapper or a prop. Confirm the problem in the rendered structure, not the file alone. Merge duplicates that come from one shared component and report them once, at the component, with the places it is used."
    },
    {
     "title": "Report",
     "text": "Write the report in the format below."
    },
    {
     "title": "Clean up",
     "text": "Delete `$WORK` after the report is delivered."
    }
   ],
   "path": ".github/skills/rlm-accessibility-audit",
   "files": [
    "scripts/rlm_corpus.py"
   ],
   "helperScripts": 1,
   "notChecked": true,
   "group": "web",
   "grade": {
    "grade": "A",
    "score": "4.40",
    "scores": [
     5,
     4,
     5,
     3,
     4
    ],
    "design": true,
    "rank": 6
   }
  },
  {
   "id": "rlm-analytics-event-review",
   "goal": "Analytics event review: which events are tracked, what they carry, and whether they can identify a person.",
   "cat": "Installed",
   "on": false,
   "use": "Analytics event review: which events are tracked, what they carry, and whether they can identify a person. Use when a feature adds or changes analytics events.",
   "prompt": "Use the rlm-analytics-event-review skill.",
   "input": "",
   "output": "",
   "pros": [],
   "cons": [],
   "items": [
    "input-1",
    "input-2",
    "input-3",
    "input-4",
    "input-5",
    "input-6"
   ],
   "steps": [
    {
     "layout": "row",
     "note": "List the events. Each name, when it fires and the properties it sends."
    },
    {
     "layout": "chunks",
     "note": "Flag identifiers. User names, emails or open text sent as properties.",
     "groups": [
      0,
      0,
      1,
      1,
      2,
      2
     ]
    },
    {
     "layout": "parallel",
     "note": "Check the purpose. Each event has a use that someone named.",
     "groups": [
      0,
      0,
      1,
      1,
      2,
      2
     ],
     "state": [
      "ok",
      "ok",
      "ok",
      "ok",
      "ok",
      "ok"
     ]
    },
    {
     "layout": "funnel",
     "note": "Check the consent. Events that need consent are gated by it."
    },
    {
     "layout": "gate",
     "note": "Report. Each event with its properties, the identifiers found and the change.",
     "pass": [
      true,
      true,
      true,
      true,
      true,
      false
     ]
    }
   ],
   "outcome": null,
   "idea": "",
   "why": "",
   "protocol": [
    {
     "title": "List the events",
     "text": "Each name, when it fires and the properties it sends."
    },
    {
     "title": "Flag identifiers",
     "text": "User names, emails or open text sent as properties."
    },
    {
     "title": "Check the purpose",
     "text": "Each event has a use that someone named."
    },
    {
     "title": "Check the consent",
     "text": "Events that need consent are gated by it."
    },
    {
     "title": "Report",
     "text": "Each event with its properties, the identifiers found and the change."
    }
   ],
   "path": ".github/skills/rlm-analytics-event-review",
   "files": [],
   "helperScripts": 0,
   "notChecked": true,
   "group": "compliance",
   "grade": {
    "grade": "B",
    "score": "3.65",
    "scores": [
     4,
     4,
     3,
     3,
     4
    ],
    "design": true,
    "rank": 165
   }
  },
  {
   "id": "rlm-api-contract-review",
   "goal": "Review API contract changes (OpenAPI, protobuf, GraphQL schemas and their route handlers) for breaking change…",
   "cat": "Installed",
   "on": false,
   "use": "Review API contract changes (OpenAPI, protobuf, GraphQL schemas and their route handlers) for breaking changes, versioning and deprecation errors, schema-to-implementation drift and inconsistent error handling. Use when an API schema or endpoint changes, or before a release that changes an external interface.",
   "prompt": "Use the rlm-api-contract-review skill.",
   "input": "",
   "output": "",
   "pros": [],
   "cons": [],
   "items": [
    "input-1",
    "input-2",
    "input-3",
    "input-4",
    "input-5",
    "input-6"
   ],
   "steps": [
    {
     "layout": "row",
     "note": "Inspect. Run `python3 <skill>/scripts/rlm_corpus.py scan <corpus>`."
    },
    {
     "layout": "chunks",
     "note": "Partition. Run `WORK=$(mktemp -d)`, then `python3 <skill>/scripts/rlm_corpus.py chunk <corpus> \"$WORK/chunks\"`.",
     "groups": [
      0,
      0,
      1,
      1,
      2,
      2
     ]
    },
    {
     "layout": "parallel",
     "note": "Map. For each chunk, run a fresh sub-task (a subagent if you can start one) that sees only that chunk file and the \"Chunk task\" below.",
     "groups": [
      0,
      0,
      1,
      1,
      2,
      2
     ],
     "state": [
      "ok",
      "ok",
      "ok",
      "ok",
      "ok",
      "ok"
     ]
    },
    {
     "layout": "funnel",
     "note": "Reduce. Run `python3 <skill>/scripts/rlm_corpus.py merge \"$WORK/out\" --out \"$WORK/merged.json\"`."
    },
    {
     "layout": "gate",
     "note": "Verify. Re-read each cited line.",
     "pass": [
      true,
      true,
      true,
      true,
      true,
      false
     ]
    },
    {
     "layout": "doc",
     "note": "Report. Write the report in the format below.",
     "docLabel": "report"
    }
   ],
   "outcome": null,
   "idea": "",
   "why": "",
   "protocol": [
    {
     "title": "Inspect",
     "text": "Run `python3 <skill>/scripts/rlm_corpus.py scan <corpus>`. Note the file count, line count and top-level folders. If the corpus is very large, agree the scope with the user, then narrow it with `--include '<folder>'` (repeatable) on every command. Files over 20 MB are skipped; `--max-bytes N` changes the limit. Report what `scan` lists as skipped."
    },
    {
     "title": "Partition",
     "text": "Run `WORK=$(mktemp -d)`, then `python3 <skill>/scripts/rlm_corpus.py chunk <corpus> \"$WORK/chunks\"`. Chunks are limited to 800 lines and 100,000 characters each, and are cut between definitions where possible. Each `chunk_NNN.md` holds the data notice and labelled file sections. `manifest.json` lists the chunks."
    },
    {
     "title": "Map",
     "text": "For each chunk, run a fresh sub-task (a subagent if you can start one) that sees only that chunk file and the \"Chunk task\" below. It writes `\"$WORK/out/<chunk>.out.md\"`. If you cannot start sub-tasks, run `python3 <skill>/scripts/rlm_corpus.py pending \"$WORK/chunks\" \"$WORK/out\"`. It lists the chunks that still have no output. Process the first one: read it, write its output, then run `pending` again. Repeat until nothing is pending. Never hold all chunks in context at once."
    },
    {
     "title": "Reduce",
     "text": "Run `python3 <skill>/scripts/rlm_corpus.py merge \"$WORK/out\" --out \"$WORK/merged.json\"`. If it lists `failed_outputs`, re-run those chunks. A missing or invalid output is not \"no findings\". Checks that span files (a duplicate across manifests, a route missing from a contract, a pattern repeated across chunks) are done on the merged list in this step. If the merged list is still too large to read, repeat steps 2 to 4 on the findings."
    },
    {
     "title": "Verify",
     "text": "Re-read each cited line. Do not call a change safe because a consumer probably ignores the field; state the assumption. Run a compatibility checker (oasdiff, buf breaking, graphql-inspector) once in the reduce step if one is installed, and record its output."
    },
    {
     "title": "Report",
     "text": "Write the report in the format below."
    },
    {
     "title": "Clean up",
     "text": "Delete `$WORK` after the report is delivered."
    }
   ],
   "path": ".github/skills/rlm-api-contract-review",
   "files": [
    "scripts/rlm_corpus.py"
   ],
   "helperScripts": 1,
   "notChecked": true,
   "group": "engineering",
   "grade": {
    "grade": "B+",
    "score": "3.75",
    "scores": [
     4,
     4,
     4,
     3,
     3
    ],
    "design": true,
    "rank": 127
   }
  },
  {
   "id": "rlm-api-design-review",
   "goal": "Review an API design for naming, consistency, versioning, error shape and backward compatibility.",
   "cat": "Installed",
   "on": false,
   "use": "Review an API design for naming, consistency, versioning, error shape and backward compatibility. Use when a new or changed API is being designed or reviewed.",
   "prompt": "Use the rlm-api-design-review skill.",
   "input": "",
   "output": "",
   "pros": [],
   "cons": [],
   "items": [
    "input-1",
    "input-2",
    "input-3",
    "input-4",
    "input-5",
    "input-6"
   ],
   "steps": [
    {
     "layout": "row",
     "note": "Read the contract. Open the OpenAPI or route definitions, and note every public endpoint, its method and its request and response shapes."
    },
    {
     "layout": "chunks",
     "note": "Check naming. Flag inconsistent names, verbs in resource paths, and fields that mean different things in different endpoints.",
     "groups": [
      0,
      0,
      1,
      1,
      2,
      2
     ]
    },
    {
     "layout": "parallel",
     "note": "Check versioning. Flag breaking changes to existing fields or status codes, and changes with no version or deprecation path.",
     "groups": [
      0,
      0,
      1,
      1,
      2,
      2
     ],
     "state": [
      "ok",
      "ok",
      "ok",
      "ok",
      "ok",
      "ok"
     ]
    },
    {
     "layout": "funnel",
     "note": "Check errors. Errors should share one shape with a stable code and a message that does not leak internals."
    },
    {
     "layout": "gate",
     "note": "Check pagination and limits. List endpoints need paging and a maximum size.",
     "pass": [
      true,
      true,
      true,
      true,
      true,
      false
     ]
    },
    {
     "layout": "doc",
     "note": "Report. List each finding as the endpoint and field, with severity, the problem and the fix.",
     "docLabel": "report"
    }
   ],
   "outcome": null,
   "idea": "",
   "why": "",
   "protocol": [
    {
     "title": "Read the contract",
     "text": "Open the OpenAPI or route definitions, and note every public endpoint, its method and its request and response shapes."
    },
    {
     "title": "Check naming",
     "text": "Flag inconsistent names, verbs in resource paths, and fields that mean different things in different endpoints."
    },
    {
     "title": "Check versioning",
     "text": "Flag breaking changes to existing fields or status codes, and changes with no version or deprecation path."
    },
    {
     "title": "Check errors",
     "text": "Errors should share one shape with a stable code and a message that does not leak internals."
    },
    {
     "title": "Check pagination and limits",
     "text": "List endpoints need paging and a maximum size. Flag unbounded result sets."
    },
    {
     "title": "Report",
     "text": "List each finding as the endpoint and field, with severity, the problem and the fix. Mark what you did not check."
    }
   ],
   "path": ".github/skills/rlm-api-design-review",
   "files": [],
   "helperScripts": 0,
   "notChecked": true,
   "group": "engineering",
   "grade": {
    "grade": "B+",
    "score": "3.85",
    "scores": [
     4,
     4,
     4,
     3,
     4
    ],
    "design": true,
    "rank": 49
   }
  },
  {
   "id": "rlm-api-security-review",
   "goal": "API security review: authorisation per operation, rate limits, input limits and error exposure.",
   "cat": "Installed",
   "on": false,
   "use": "API security review: authorisation per operation, rate limits, input limits and error exposure. Use when code exposes endpoints to other systems or the public.",
   "prompt": "Use the rlm-api-security-review skill.",
   "input": "",
   "output": "",
   "pros": [],
   "cons": [],
   "items": [
    "input-1",
    "input-2",
    "input-3",
    "input-4",
    "input-5",
    "input-6"
   ],
   "steps": [
    {
     "layout": "row",
     "note": "List operations. Each endpoint, method and who may call it."
    },
    {
     "layout": "chunks",
     "note": "Check authorisation. Flag operations with no check or a weaker check than their peers.",
     "groups": [
      0,
      0,
      1,
      1,
      2,
      2
     ]
    },
    {
     "layout": "parallel",
     "note": "Check rate and size limits. Flag endpoints with no limit on requests or payloads.",
     "groups": [
      0,
      0,
      1,
      1,
      2,
      2
     ],
     "state": [
      "ok",
      "ok",
      "ok",
      "ok",
      "ok",
      "ok"
     ]
    },
    {
     "layout": "funnel",
     "note": "Check errors. Flag responses that expose stack traces or internal ids."
    },
    {
     "layout": "gate",
     "note": "Report. Each operation with file and line, severity and the fix.",
     "pass": [
      true,
      true,
      true,
      true,
      true,
      false
     ]
    }
   ],
   "outcome": null,
   "idea": "",
   "why": "",
   "protocol": [
    {
     "title": "List operations",
     "text": "Each endpoint, method and who may call it."
    },
    {
     "title": "Check authorisation",
     "text": "Flag operations with no check or a weaker check than their peers."
    },
    {
     "title": "Check rate and size limits",
     "text": "Flag endpoints with no limit on requests or payloads."
    },
    {
     "title": "Check errors",
     "text": "Flag responses that expose stack traces or internal ids."
    },
    {
     "title": "Report",
     "text": "Each operation with file and line, severity and the fix."
    }
   ],
   "path": ".github/skills/rlm-api-security-review",
   "files": [],
   "helperScripts": 0,
   "notChecked": true,
   "group": "security",
   "grade": {
    "grade": "A-",
    "score": "4.20",
    "scores": [
     5,
     4,
     4,
     3,
     4
    ],
    "design": true,
    "rank": 13
   }
  },
  {
   "id": "rlm-aspnet-review",
   "goal": "Review ASP.NET Core code for authorization, model binding, CSRF, CORS, security headers and error handling.",
   "cat": "Installed",
   "on": false,
   "use": "Review ASP.NET Core code for authorization, model binding, CSRF, CORS, security headers and error handling. Use when asked to review or harden an ASP.NET Core application or API.",
   "prompt": "Use the rlm-aspnet-review skill.",
   "input": "",
   "output": "",
   "pros": [],
   "cons": [],
   "items": [
    "input-1",
    "input-2",
    "input-3",
    "input-4",
    "input-5",
    "input-6"
   ],
   "steps": [
    {
     "layout": "row",
     "note": "Read the app setup. Open Program.cs or Startup.cs, the middleware order, the controllers or minimal API routes, and appsettings."
    },
    {
     "layout": "chunks",
     "note": "Check authorization. Every endpoint that changes data or returns private data needs `[Authorize]` or an explicit policy.",
     "groups": [
      0,
      0,
      1,
      1,
      2,
      2
     ]
    },
    {
     "layout": "parallel",
     "note": "Check input binding. Flag models bound directly from the request with no validation, binding of fields the user should not set (such as `IsAdmin`), and missing `[ApiController]` validation.",
     "groups": [
      0,
      0,
      1,
      1,
      2,
      2
     ],
     "state": [
      "ok",
      "ok",
      "ok",
      "ok",
      "ok",
      "ok"
     ]
    },
    {
     "layout": "funnel",
     "note": "Check CSRF and CORS. Cookie-authenticated forms need antiforgery tokens."
    },
    {
     "layout": "gate",
     "note": "Check headers and transport. Look for HTTPS redirection, HSTS outside development, and missing security headers such as Content-Security-Policy and X-Content-Type-Options.",
     "pass": [
      true,
      true,
      true,
      true,
      true,
      false
     ]
    },
    {
     "layout": "doc",
     "note": "Check errors. Flag exception details or stack traces returned to clients, and `UseDeveloperExceptionPage` enabled in production.",
     "docLabel": "report"
    }
   ],
   "outcome": null,
   "idea": "",
   "why": "",
   "protocol": [
    {
     "title": "Read the app setup",
     "text": "Open Program.cs or Startup.cs, the middleware order, the controllers or minimal API routes, and appsettings. Note whether the app is an API, MVC or Razor Pages."
    },
    {
     "title": "Check authorization",
     "text": "Every endpoint that changes data or returns private data needs `[Authorize]` or an explicit policy. Flag `[AllowAnonymous]` on sensitive endpoints, and missing authorization on minimal API routes."
    },
    {
     "title": "Check input binding",
     "text": "Flag models bound directly from the request with no validation, binding of fields the user should not set (such as `IsAdmin`), and missing `[ApiController]` validation."
    },
    {
     "title": "Check CSRF and CORS",
     "text": "Cookie-authenticated forms need antiforgery tokens. Flag `AllowAnyOrigin` combined with credentials, and wildcard origins."
    },
    {
     "title": "Check headers and transport",
     "text": "Look for HTTPS redirection, HSTS outside development, and missing security headers such as Content-Security-Policy and X-Content-Type-Options."
    },
    {
     "title": "Check errors",
     "text": "Flag exception details or stack traces returned to clients, and `UseDeveloperExceptionPage` enabled in production."
    },
    {
     "title": "Check output",
     "text": "Razor output that is not encoded, `Html.Raw` on user data, and JSON responses that include internal fields."
    },
    {
     "title": "Report",
     "text": "List each finding as `file:line`, with severity (high, medium or low), the problem and the fix. Mark what you did not run."
    }
   ],
   "path": ".github/skills/rlm-aspnet-review",
   "files": [],
   "helperScripts": 0,
   "notChecked": true,
   "group": "dotnet",
   "grade": {
    "grade": "B+",
    "score": "3.80",
    "scores": [
     4,
     3,
     4,
     4,
     4
    ],
    "design": true,
    "rank": 107
   }
  },
  {
   "id": "rlm-asset-exposure-review",
   "goal": "Asset exposure review: which systems are reachable from outside and which hold sensitive data.",
   "cat": "Installed",
   "on": false,
   "use": "Asset exposure review: which systems are reachable from outside and which hold sensitive data. Use when findings need priorities that reflect where systems sit.",
   "prompt": "Use the rlm-asset-exposure-review skill.",
   "input": "",
   "output": "",
   "pros": [],
   "cons": [],
   "items": [
    "input-1",
    "input-2",
    "input-3",
    "input-4",
    "input-5",
    "input-6"
   ],
   "steps": [
    {
     "layout": "row",
     "note": "List the assets. Each system, its owner and its data class."
    },
    {
     "layout": "chunks",
     "note": "Check reachability. Note which assets are reachable from the internet.",
     "groups": [
      0,
      0,
      1,
      1,
      2,
      2
     ]
    },
    {
     "layout": "parallel",
     "note": "Check data. Note which assets hold regulated or sensitive data.",
     "groups": [
      0,
      0,
      1,
      1,
      2,
      2
     ],
     "state": [
      "ok",
      "ok",
      "ok",
      "ok",
      "ok",
      "ok"
     ]
    },
    {
     "layout": "funnel",
     "note": "Combine. Rank exposure by reachability and data class."
    },
    {
     "layout": "gate",
     "note": "Report. The assets, their exposure and the priority each finding should get.",
     "pass": [
      true,
      true,
      true,
      true,
      true,
      false
     ]
    }
   ],
   "outcome": null,
   "idea": "",
   "why": "",
   "protocol": [
    {
     "title": "List the assets",
     "text": "Each system, its owner and its data class."
    },
    {
     "title": "Check reachability",
     "text": "Note which assets are reachable from the internet."
    },
    {
     "title": "Check data",
     "text": "Note which assets hold regulated or sensitive data."
    },
    {
     "title": "Combine",
     "text": "Rank exposure by reachability and data class."
    },
    {
     "title": "Report",
     "text": "The assets, their exposure and the priority each finding should get."
    }
   ],
   "path": ".github/skills/rlm-asset-exposure-review",
   "files": [],
   "helperScripts": 0,
   "notChecked": true,
   "group": "vulnerability",
   "grade": {
    "grade": "B+",
    "score": "3.85",
    "scores": [
     4,
     4,
     4,
     3,
     4
    ],
    "design": true,
    "rank": 50
   }
  },
  {
   "id": "rlm-async-streams-review",
   "goal": "Async streams review: cancellation, disposal and the cost of buffering large results.",
   "cat": "Installed",
   "on": false,
   "use": "Async streams review: cancellation, disposal and the cost of buffering large results. Use when code uses IAsyncEnumerable or async streams.",
   "prompt": "Use the rlm-async-streams-review skill.",
   "input": "",
   "output": "",
   "pros": [],
   "cons": [],
   "items": [
    "input-1",
    "input-2",
    "input-3",
    "input-4",
    "input-5",
    "input-6"
   ],
   "steps": [
    {
     "layout": "row",
     "note": "List the streams. Each producer and consumer."
    },
    {
     "layout": "chunks",
     "note": "Check cancellation. Each stream must honour its cancellation token.",
     "groups": [
      0,
      0,
      1,
      1,
      2,
      2
     ]
    },
    {
     "layout": "parallel",
     "note": "Check disposal. Flag enumerators that are never disposed.",
     "groups": [
      0,
      0,
      1,
      1,
      2,
      2
     ],
     "state": [
      "ok",
      "ok",
      "ok",
      "ok",
      "ok",
      "ok"
     ]
    },
    {
     "layout": "funnel",
     "note": "Check buffering. Flag streams that collect everything into a list first."
    },
    {
     "layout": "gate",
     "note": "Report. Each stream with file and line, the problem and the fix.",
     "pass": [
      true,
      true,
      true,
      true,
      true,
      false
     ]
    }
   ],
   "outcome": null,
   "idea": "",
   "why": "",
   "protocol": [
    {
     "title": "List the streams",
     "text": "Each producer and consumer."
    },
    {
     "title": "Check cancellation",
     "text": "Each stream must honour its cancellation token."
    },
    {
     "title": "Check disposal",
     "text": "Flag enumerators that are never disposed."
    },
    {
     "title": "Check buffering",
     "text": "Flag streams that collect everything into a list first."
    },
    {
     "title": "Report",
     "text": "Each stream with file and line, the problem and the fix."
    }
   ],
   "path": ".github/skills/rlm-async-streams-review",
   "files": [],
   "helperScripts": 0,
   "notChecked": true,
   "group": "dotnet",
   "grade": {
    "grade": "B+",
    "score": "3.70",
    "scores": [
     4,
     4,
     3,
     4,
     3
    ],
    "design": true,
    "rank": 151
   }
  },
  {
   "id": "rlm-audit-compliance",
   "goal": "Check code and its changes for audit and compliance evidence: logging, change records, access control and ret…",
   "cat": "Installed",
   "on": false,
   "use": "Check code and its changes for audit and compliance evidence: logging, change records, access control and retention. Use when preparing for an audit or when a change touches regulated data.",
   "prompt": "Use the rlm-audit-compliance skill.",
   "input": "",
   "output": "",
   "pros": [],
   "cons": [],
   "items": [
    "input-1",
    "input-2",
    "input-3",
    "input-4",
    "input-5",
    "input-6"
   ],
   "steps": [
    {
     "layout": "row",
     "note": "Read the scope. Identify the regulated data or controls this code touches, and the policy it must meet."
    },
    {
     "layout": "chunks",
     "note": "Check audit logging. Security-relevant events (sign-in, permission change, data export, deletion) must be logged with who, what, when and the result.",
     "groups": [
      0,
      0,
      1,
      1,
      2,
      2
     ]
    },
    {
     "layout": "parallel",
     "note": "Check log safety. Flag secrets, passwords, tokens and personal data written to logs.",
     "groups": [
      0,
      0,
      1,
      1,
      2,
      2
     ],
     "state": [
      "ok",
      "ok",
      "ok",
      "ok",
      "ok",
      "ok"
     ]
    },
    {
     "layout": "funnel",
     "note": "Check change records. Each change should have a linked ticket, a reviewer and a passing check."
    },
    {
     "layout": "gate",
     "note": "Check access control. Flag shared accounts, hard-coded credentials and admin actions without a second check.",
     "pass": [
      true,
      true,
      true,
      true,
      true,
      false
     ]
    },
    {
     "layout": "doc",
     "note": "Check retention. Flag data kept with no deletion path, and deletion that does not reach backups or copies where the policy requires it.",
     "docLabel": "report"
    }
   ],
   "outcome": null,
   "idea": "",
   "why": "",
   "protocol": [
    {
     "title": "Read the scope",
     "text": "Identify the regulated data or controls this code touches, and the policy it must meet. If no policy is given, ask for it rather than assume one."
    },
    {
     "title": "Check audit logging",
     "text": "Security-relevant events (sign-in, permission change, data export, deletion) must be logged with who, what, when and the result. Flag events with no log."
    },
    {
     "title": "Check log safety",
     "text": "Flag secrets, passwords, tokens and personal data written to logs."
    },
    {
     "title": "Check change records",
     "text": "Each change should have a linked ticket, a reviewer and a passing check. Flag merges with no review."
    },
    {
     "title": "Check access control",
     "text": "Flag shared accounts, hard-coded credentials and admin actions without a second check."
    },
    {
     "title": "Check retention",
     "text": "Flag data kept with no deletion path, and deletion that does not reach backups or copies where the policy requires it."
    },
    {
     "title": "Report",
     "text": "For each control give the status: evidence present, partly present, or missing. Say what must be collected from outside the repository. This is a technical aid, not a certification. Mark what you did not run."
    }
   ],
   "path": ".github/skills/rlm-audit-compliance",
   "files": [],
   "helperScripts": 0,
   "notChecked": true,
   "group": "compliance",
   "grade": {
    "grade": "B+",
    "score": "3.70",
    "scores": [
     4,
     4,
     4,
     2,
     4
    ],
    "design": true,
    "rank": 152
   }
  },
  {
   "id": "rlm-audit-evidence-collector",
   "goal": "Collect and index audit evidence for a defined period or control: change history with review records, CI run…",
   "cat": "Installed",
   "on": false,
   "use": "Collect and index audit evidence for a defined period or control: change history with review records, CI run records, configuration changes and scan reports, each with its source and a content hash. Use when an audit or assessment needs evidence for a set period.",
   "prompt": "Use the rlm-audit-evidence-collector skill.",
   "input": "",
   "output": "",
   "pros": [],
   "cons": [],
   "items": [
    "input-1",
    "input-2",
    "input-3",
    "input-4",
    "input-5",
    "input-6"
   ],
   "steps": [
    {
     "layout": "row",
     "note": "Inspect. The corpus is the generic corpus (docs/SKILL-TEMPLATE-STANDARD.md, section 6): prepare `<input>` with the files in scope, as text."
    },
    {
     "layout": "chunks",
     "note": "Partition. Run `WORK=$(mktemp -d)`, then `python3 <skill>/scripts/rlm_corpus.py chunk <input> \"$WORK/chunks\"`.",
     "groups": [
      0,
      0,
      1,
      1,
      2,
      2
     ]
    },
    {
     "layout": "parallel",
     "note": "Map. For each chunk, run a fresh sub-task (a subagent if you can start one) that sees only that chunk file and the \"Chunk task\" below.",
     "groups": [
      0,
      0,
      1,
      1,
      2,
      2
     ],
     "state": [
      "ok",
      "ok",
      "ok",
      "ok",
      "ok",
      "ok"
     ]
    },
    {
     "layout": "funnel",
     "note": "Reduce. Run `python3 <skill>/scripts/rlm_corpus.py merge \"$WORK/out\" --out \"$WORK/merged.json\"`."
    },
    {
     "layout": "gate",
     "note": "Verify. Hash each saved artefact (shasum -a 256 on macOS, sha256sum on Linux).",
     "pass": [
      true,
      true,
      true,
      true,
      true,
      false
     ]
    },
    {
     "layout": "doc",
     "note": "Report. Write the report in the format below.",
     "docLabel": "report"
    }
   ],
   "outcome": null,
   "idea": "",
   "why": "",
   "protocol": [
    {
     "title": "Inspect",
     "text": "The corpus is the generic corpus (docs/SKILL-TEMPLATE-STANDARD.md, section 6): prepare `<input>` with the files in scope, as text. Run `python3 <skill>/scripts/rlm_corpus.py scan <input>`. Note the file count, line count and top-level folders. If the corpus is very large, agree the scope with the user, then narrow it with `--include '<folder>'` (repeatable) on every command. Files over 20 MB are skipped; `--max-bytes N` changes the limit. Report what `scan` lists as skipped."
    },
    {
     "title": "Partition",
     "text": "Run `WORK=$(mktemp -d)`, then `python3 <skill>/scripts/rlm_corpus.py chunk <input> \"$WORK/chunks\"`. Chunks are limited to 800 lines and 100,000 characters each, and are cut between definitions where possible. Each `chunk_NNN.md` holds the data notice and labelled file sections. `manifest.json` lists the chunks."
    },
    {
     "title": "Map",
     "text": "For each chunk, run a fresh sub-task (a subagent if you can start one) that sees only that chunk file and the \"Chunk task\" below. It writes `\"$WORK/out/<chunk>.out.md\"`. If you cannot start sub-tasks, run `python3 <skill>/scripts/rlm_corpus.py pending \"$WORK/chunks\" \"$WORK/out\"`. It lists the chunks that still have no output. Process the first one: read it, write its output, then run `pending` again. Repeat until nothing is pending. Never hold all chunks in context at once."
    },
    {
     "title": "Reduce",
     "text": "Run `python3 <skill>/scripts/rlm_corpus.py merge \"$WORK/out\" --out \"$WORK/merged.json\"`. If it lists `failed_outputs`, re-run those chunks. A missing or invalid output is not \"no findings\". Checks that span files (a duplicate across manifests, a route missing from a contract, a pattern repeated across chunks) are done on the merged list in this step. If the merged list is still too large to read, repeat steps 2 to 4 on the findings."
    },
    {
     "title": "Verify",
     "text": "Hash each saved artefact (shasum -a 256 on macOS, sha256sum on Linux). Re-run one collection command and confirm the result matches the saved item. Record the protected-branch commit SHAs at collection time."
    },
    {
     "title": "Report",
     "text": "Write the report in the format below."
    },
    {
     "title": "Clean up",
     "text": "Delete `$WORK` after the report is delivered."
    }
   ],
   "path": ".github/skills/rlm-audit-evidence-collector",
   "files": [
    "scripts/rlm_corpus.py"
   ],
   "helperScripts": 1,
   "notChecked": true,
   "group": "compliance",
   "grade": {
    "grade": "C+",
    "score": "2.95",
    "scores": [
     4,
     3,
     3,
     1,
     2
    ],
    "design": true,
    "rank": 212
   }
  },
  {
   "id": "rlm-audit-finding-tracker",
   "goal": "Audit finding tracker: findings from an audit tracked to closure with owners and evidence.",
   "cat": "Installed",
   "on": false,
   "use": "Audit finding tracker: findings from an audit tracked to closure with owners and evidence. Use when an audit or assessment produced findings.",
   "prompt": "Use the rlm-audit-finding-tracker skill.",
   "input": "",
   "output": "",
   "pros": [],
   "cons": [],
   "items": [
    "input-1",
    "input-2",
    "input-3",
    "input-4",
    "input-5",
    "input-6"
   ],
   "steps": [
    {
     "layout": "row",
     "note": "List the findings with their severity and the control they affect."
    },
    {
     "layout": "chunks",
     "note": "Assign each an owner and a due date.",
     "groups": [
      0,
      0,
      1,
      1,
      2,
      2
     ]
    },
    {
     "layout": "parallel",
     "note": "Track the actions. Each action has a status and the evidence of completion.",
     "groups": [
      0,
      0,
      1,
      1,
      2,
      2
     ],
     "state": [
      "ok",
      "ok",
      "ok",
      "ok",
      "ok",
      "ok"
     ]
    },
    {
     "layout": "funnel",
     "note": "Check the closure. A finding closes only when its evidence is reviewed."
    },
    {
     "layout": "gate",
     "note": "Report. The open findings, the overdue ones and the evidence still needed.",
     "pass": [
      true,
      true,
      true,
      true,
      true,
      false
     ]
    }
   ],
   "outcome": null,
   "idea": "",
   "why": "",
   "protocol": [
    {
     "title": "List the findings with their severity and the control they affect",
     "text": ""
    },
    {
     "title": "Assign each an owner and a due date",
     "text": ""
    },
    {
     "title": "Track the actions",
     "text": "Each action has a status and the evidence of completion."
    },
    {
     "title": "Check the closure",
     "text": "A finding closes only when its evidence is reviewed."
    },
    {
     "title": "Report",
     "text": "The open findings, the overdue ones and the evidence still needed."
    }
   ],
   "path": ".github/skills/rlm-audit-finding-tracker",
   "files": [],
   "helperScripts": 0,
   "notChecked": true,
   "group": "compliance",
   "grade": {
    "grade": "B+",
    "score": "3.80",
    "scores": [
     4,
     4,
     3,
     4,
     4
    ],
    "design": true,
    "rank": 108
   }
  },
  {
   "id": "rlm-audit-log-review",
   "goal": "Audit log review: whether security-relevant events are logged completely, protected and kept.",
   "cat": "Installed",
   "on": false,
   "use": "Audit log review: whether security-relevant events are logged completely, protected and kept. Use when code records sign-ins, permission changes, exports or deletions.",
   "prompt": "Use the rlm-audit-log-review skill.",
   "input": "",
   "output": "",
   "pros": [],
   "cons": [],
   "items": [
    "input-1",
    "input-2",
    "input-3",
    "input-4",
    "input-5",
    "input-6"
   ],
   "steps": [
    {
     "layout": "row",
     "note": "List the events. Sign-in, permission change, export, deletion and admin action."
    },
    {
     "layout": "chunks",
     "note": "Check completeness. Flag events that produce no log entry.",
     "groups": [
      0,
      0,
      1,
      1,
      2,
      2
     ]
    },
    {
     "layout": "parallel",
     "note": "Check content. Each entry needs who, what, when and the result.",
     "groups": [
      0,
      0,
      1,
      1,
      2,
      2
     ],
     "state": [
      "ok",
      "ok",
      "ok",
      "ok",
      "ok",
      "ok"
     ]
    },
    {
     "layout": "funnel",
     "note": "Check protection. Logs must be append-only or separately stored."
    },
    {
     "layout": "gate",
     "note": "Report. The events, the gaps and the fix.",
     "pass": [
      true,
      true,
      true,
      true,
      true,
      false
     ]
    }
   ],
   "outcome": null,
   "idea": "",
   "why": "",
   "protocol": [
    {
     "title": "List the events",
     "text": "Sign-in, permission change, export, deletion and admin action."
    },
    {
     "title": "Check completeness",
     "text": "Flag events that produce no log entry."
    },
    {
     "title": "Check content",
     "text": "Each entry needs who, what, when and the result."
    },
    {
     "title": "Check protection",
     "text": "Logs must be append-only or separately stored."
    },
    {
     "title": "Report",
     "text": "The events, the gaps and the fix."
    }
   ],
   "path": ".github/skills/rlm-audit-log-review",
   "files": [],
   "helperScripts": 0,
   "notChecked": true,
   "group": "compliance",
   "grade": {
    "grade": "B+",
    "score": "3.85",
    "scores": [
     4,
     4,
     4,
     3,
     4
    ],
    "design": true,
    "rank": 51
   }
  },
  {
   "id": "rlm-authentication-review",
   "goal": "Authentication review: sign-in, credential checks, lockout and account recovery.",
   "cat": "Installed",
   "on": false,
   "use": "Authentication review: sign-in, credential checks, lockout and account recovery. Use when code handles sign-in, credentials or account recovery.",
   "prompt": "Use the rlm-authentication-review skill.",
   "input": "",
   "output": "",
   "pros": [],
   "cons": [],
   "items": [
    "input-1",
    "input-2",
    "input-3",
    "input-4",
    "input-5",
    "input-6"
   ],
   "steps": [
    {
     "layout": "row",
     "note": "List the flows. Sign-in, sign-up, password reset and sign-out."
    },
    {
     "layout": "chunks",
     "note": "Check credential checks. Flag comparisons that are not constant-time or that reveal which field failed.",
     "groups": [
      0,
      0,
      1,
      1,
      2,
      2
     ]
    },
    {
     "layout": "parallel",
     "note": "Check lockout and rate limits. Flag unlimited attempts.",
     "groups": [
      0,
      0,
      1,
      1,
      2,
      2
     ],
     "state": [
      "ok",
      "ok",
      "ok",
      "ok",
      "ok",
      "ok"
     ]
    },
    {
     "layout": "funnel",
     "note": "Check recovery. Flag reset links that do not expire or are guessable."
    },
    {
     "layout": "gate",
     "note": "Report. Each flow with file and line, severity and the fix.",
     "pass": [
      true,
      true,
      true,
      true,
      true,
      false
     ]
    }
   ],
   "outcome": null,
   "idea": "",
   "why": "",
   "protocol": [
    {
     "title": "List the flows",
     "text": "Sign-in, sign-up, password reset and sign-out."
    },
    {
     "title": "Check credential checks",
     "text": "Flag comparisons that are not constant-time or that reveal which field failed."
    },
    {
     "title": "Check lockout and rate limits",
     "text": "Flag unlimited attempts."
    },
    {
     "title": "Check recovery",
     "text": "Flag reset links that do not expire or are guessable."
    },
    {
     "title": "Report",
     "text": "Each flow with file and line, severity and the fix."
    }
   ],
   "path": ".github/skills/rlm-authentication-review",
   "files": [],
   "helperScripts": 0,
   "notChecked": true,
   "group": "security",
   "grade": {
    "grade": "A",
    "score": "4.40",
    "scores": [
     5,
     5,
     4,
     3,
     4
    ],
    "design": true,
    "rank": 7
   }
  },
  {
   "id": "rlm-authz-review",
   "goal": "Review authorization: who can do what, checked on every route, object and action, including access to other u…",
   "cat": "Installed",
   "on": false,
   "use": "Review authorization: who can do what, checked on every route, object and action, including access to other users' data. Use when access control or multi-user data is changed.",
   "prompt": "Use the rlm-authz-review skill.",
   "input": "",
   "output": "",
   "pros": [],
   "cons": [],
   "items": [
    "input-1",
    "input-2",
    "input-3",
    "input-4",
    "input-5",
    "input-6"
   ],
   "steps": [
    {
     "layout": "row",
     "note": "List the actions. List each route, command and background job that reads or changes data."
    },
    {
     "layout": "chunks",
     "note": "Check each action has a check. Every action needs an authorization check.",
     "groups": [
      0,
      0,
      1,
      1,
      2,
      2
     ]
    },
    {
     "layout": "parallel",
     "note": "Check object ownership. Flag lookups by ID that do not confirm the caller owns or may see the object (insecure direct object references).",
     "groups": [
      0,
      0,
      1,
      1,
      2,
      2
     ],
     "state": [
      "ok",
      "ok",
      "ok",
      "ok",
      "ok",
      "ok"
     ]
    },
    {
     "layout": "funnel",
     "note": "Check roles and defaults. Flag default-allow rules, roles that grant more than they should, and admin checks that are bypassed."
    },
    {
     "layout": "gate",
     "note": "Check the checks. Authorization decided in the client only, or trusted from request fields, is a finding.",
     "pass": [
      true,
      true,
      true,
      true,
      true,
      false
     ]
    },
    {
     "layout": "doc",
     "note": "Report. List each finding as route and file, with severity, the missing check and the fix.",
     "docLabel": "report"
    }
   ],
   "outcome": null,
   "idea": "",
   "why": "",
   "protocol": [
    {
     "title": "List the actions",
     "text": "List each route, command and background job that reads or changes data."
    },
    {
     "title": "Check each action has a check",
     "text": "Every action needs an authorization check. Flag actions that have none."
    },
    {
     "title": "Check object ownership",
     "text": "Flag lookups by ID that do not confirm the caller owns or may see the object (insecure direct object references)."
    },
    {
     "title": "Check roles and defaults",
     "text": "Flag default-allow rules, roles that grant more than they should, and admin checks that are bypassed."
    },
    {
     "title": "Check the checks",
     "text": "Authorization decided in the client only, or trusted from request fields, is a finding."
    },
    {
     "title": "Report",
     "text": "List each finding as route and file, with severity, the missing check and the fix. Mark what you did not test."
    }
   ],
   "path": ".github/skills/rlm-authz-review",
   "files": [],
   "helperScripts": 0,
   "notChecked": true,
   "group": "security",
   "grade": {
    "grade": "A",
    "score": "4.40",
    "scores": [
     5,
     5,
     4,
     3,
     4
    ],
    "design": true,
    "rank": 8
   }
  },
  {
   "id": "rlm-background-worker-review",
   "goal": "Review background workers and hosted services for retries, idempotency, graceful shutdown and monitoring.",
   "cat": "Installed",
   "on": false,
   "use": "Review background workers and hosted services for retries, idempotency, graceful shutdown and monitoring. Use when a job, queue consumer or scheduled task is added or changed.",
   "prompt": "Use the rlm-background-worker-review skill.",
   "input": "",
   "output": "",
   "pros": [],
   "cons": [],
   "items": [
    "input-1",
    "input-2",
    "input-3",
    "input-4",
    "input-5",
    "input-6"
   ],
   "steps": [
    {
     "layout": "row",
     "note": "Read the worker. Open the hosted service or job, its trigger and what it writes."
    },
    {
     "layout": "chunks",
     "note": "Check idempotency. A job that may run twice must produce the same result.",
     "groups": [
      0,
      0,
      1,
      1,
      2,
      2
     ]
    },
    {
     "layout": "parallel",
     "note": "Check retries. Retries need a limit, a back-off and a dead-letter path.",
     "groups": [
      0,
      0,
      1,
      1,
      2,
      2
     ],
     "state": [
      "ok",
      "ok",
      "ok",
      "ok",
      "ok",
      "ok"
     ]
    },
    {
     "layout": "funnel",
     "note": "Check shutdown. The worker must stop cleanly, finish or return its work, and honour cancellation."
    },
    {
     "layout": "gate",
     "note": "Check monitoring. Each worker needs logs for failures and a metric or alert for backlog and errors.",
     "pass": [
      true,
      true,
      true,
      true,
      true,
      false
     ]
    },
    {
     "layout": "doc",
     "note": "Report. List each finding with its file and line, severity and the fix.",
     "docLabel": "report"
    }
   ],
   "outcome": null,
   "idea": "",
   "why": "",
   "protocol": [
    {
     "title": "Read the worker",
     "text": "Open the hosted service or job, its trigger and what it writes."
    },
    {
     "title": "Check idempotency",
     "text": "A job that may run twice must produce the same result. Flag jobs that double-charge, double-send or duplicate rows."
    },
    {
     "title": "Check retries",
     "text": "Retries need a limit, a back-off and a dead-letter path. Flag infinite retry loops."
    },
    {
     "title": "Check shutdown",
     "text": "The worker must stop cleanly, finish or return its work, and honour cancellation."
    },
    {
     "title": "Check monitoring",
     "text": "Each worker needs logs for failures and a metric or alert for backlog and errors."
    },
    {
     "title": "Report",
     "text": "List each finding with its file and line, severity and the fix."
    }
   ],
   "path": ".github/skills/rlm-background-worker-review",
   "files": [],
   "helperScripts": 0,
   "notChecked": true,
   "group": "dotnet",
   "grade": {
    "grade": "B",
    "score": "3.60",
    "scores": [
     4,
     4,
     4,
     2,
     3
    ],
    "design": true,
    "rank": 181
   }
  },
  {
   "id": "rlm-blazor-review",
   "goal": "Review Blazor components for state handling, authorization, JavaScript interop and rendering cost.",
   "cat": "Installed",
   "on": false,
   "use": "Review Blazor components for state handling, authorization, JavaScript interop and rendering cost. Use when Blazor pages or components are added or changed.",
   "prompt": "Use the rlm-blazor-review skill.",
   "input": "",
   "output": "",
   "pros": [],
   "cons": [],
   "items": [
    "input-1",
    "input-2",
    "input-3",
    "input-4",
    "input-5",
    "input-6"
   ],
   "steps": [
    {
     "layout": "row",
     "note": "Read the components. Open the pages, shared components and the interop layer."
    },
    {
     "layout": "chunks",
     "note": "Check state. Flag state shared across users in singleton services, and state that is lost on reconnect without a plan.",
     "groups": [
      0,
      0,
      1,
      1,
      2,
      2
     ]
    },
    {
     "layout": "parallel",
     "note": "Check authorization. Pages need the authorization attribute, and components must not rely on hidden UI for protection.",
     "groups": [
      0,
      0,
      1,
      1,
      2,
      2
     ],
     "state": [
      "ok",
      "ok",
      "ok",
      "ok",
      "ok",
      "ok"
     ]
    },
    {
     "layout": "funnel",
     "note": "Check interop. Flag JavaScript interop that passes unvalidated data, or calls that are never disposed."
    },
    {
     "layout": "gate",
     "note": "Check rendering. Flag large lists without virtualisation, and state changes that re-render the whole page.",
     "pass": [
      true,
      true,
      true,
      true,
      true,
      false
     ]
    },
    {
     "layout": "doc",
     "note": "Report. List each finding with its file and line, severity and the fix.",
     "docLabel": "report"
    }
   ],
   "outcome": null,
   "idea": "",
   "why": "",
   "protocol": [
    {
     "title": "Read the components",
     "text": "Open the pages, shared components and the interop layer."
    },
    {
     "title": "Check state",
     "text": "Flag state shared across users in singleton services, and state that is lost on reconnect without a plan."
    },
    {
     "title": "Check authorization",
     "text": "Pages need the authorization attribute, and components must not rely on hidden UI for protection."
    },
    {
     "title": "Check interop",
     "text": "Flag JavaScript interop that passes unvalidated data, or calls that are never disposed."
    },
    {
     "title": "Check rendering",
     "text": "Flag large lists without virtualisation, and state changes that re-render the whole page."
    },
    {
     "title": "Report",
     "text": "List each finding with its file and line, severity and the fix."
    }
   ],
   "path": ".github/skills/rlm-blazor-review",
   "files": [],
   "helperScripts": 0,
   "notChecked": true,
   "group": "dotnet",
   "grade": {
    "grade": "B",
    "score": "3.55",
    "scores": [
     4,
     3,
     4,
     3,
     3
    ],
    "design": true,
    "rank": 190
   }
  },
  {
   "id": "rlm-browser-extension-review",
   "goal": "Review and build Manifest V3 browser extensions: service worker lifecycle, permissions, messaging and sender…",
   "cat": "Installed",
   "on": false,
   "use": "Review and build Manifest V3 browser extensions: service worker lifecycle, permissions, messaging and sender checks, content-script safety, content security policy, storage, and store-review readiness. Use when writing, reviewing or preparing to publish a Chrome or Chromium browser extension.",
   "prompt": "Use the rlm-browser-extension-review skill.",
   "input": "",
   "output": "",
   "pros": [],
   "cons": [],
   "items": [
    "input-1",
    "input-2",
    "input-3",
    "input-4",
    "input-5",
    "input-6"
   ],
   "steps": [
    {
     "layout": "row",
     "note": "Inspect. Run `python3 <skill>/scripts/rlm_corpus.py scan <corpus>`."
    },
    {
     "layout": "chunks",
     "note": "Partition. Run `WORK=$(mktemp -d)`, then `python3 <skill>/scripts/rlm_corpus.py chunk <corpus> \"$WORK/chunks\"`.",
     "groups": [
      0,
      0,
      1,
      1,
      2,
      2
     ]
    },
    {
     "layout": "parallel",
     "note": "Map. For each chunk, run a fresh sub-task (a subagent if you can start one) that sees only that chunk file and the \"Chunk task\" below.",
     "groups": [
      0,
      0,
      1,
      1,
      2,
      2
     ],
     "state": [
      "ok",
      "ok",
      "ok",
      "ok",
      "ok",
      "ok"
     ]
    },
    {
     "layout": "funnel",
     "note": "Reduce. Run `python3 <skill>/scripts/rlm_corpus.py merge \"$WORK/out\" --out \"$WORK/merged.json\"`."
    },
    {
     "layout": "gate",
     "note": "Verify. Re-read each cited line and the manifest entry it depends on.",
     "pass": [
      true,
      true,
      true,
      true,
      true,
      false
     ]
    },
    {
     "layout": "doc",
     "note": "Report. Write the report in the format below.",
     "docLabel": "report"
    }
   ],
   "outcome": null,
   "idea": "",
   "why": "",
   "protocol": [
    {
     "title": "Inspect",
     "text": "Run `python3 <skill>/scripts/rlm_corpus.py scan <corpus>`. Note the file count, line count and top-level folders. If the corpus is very large, agree the scope with the user, then narrow it with `--include '<folder>'` (repeatable) on every command. Files over 20 MB are skipped; `--max-bytes N` changes the limit. Report what `scan` lists as skipped."
    },
    {
     "title": "Partition",
     "text": "Run `WORK=$(mktemp -d)`, then `python3 <skill>/scripts/rlm_corpus.py chunk <corpus> \"$WORK/chunks\"`. Chunks are limited to 800 lines and 100,000 characters each, and are cut between definitions where possible. Each `chunk_NNN.md` holds the data notice and labelled file sections. `manifest.json` lists the chunks."
    },
    {
     "title": "Map",
     "text": "For each chunk, run a fresh sub-task (a subagent if you can start one) that sees only that chunk file and the \"Chunk task\" below. It writes `\"$WORK/out/<chunk>.out.md\"`. If you cannot start sub-tasks, run `python3 <skill>/scripts/rlm_corpus.py pending \"$WORK/chunks\" \"$WORK/out\"`. It lists the chunks that still have no output. Process the first one: read it, write its output, then run `pending` again. Repeat until nothing is pending. Never hold all chunks in context at once."
    },
    {
     "title": "Reduce",
     "text": "Run `python3 <skill>/scripts/rlm_corpus.py merge \"$WORK/out\" --out \"$WORK/merged.json\"`. If it lists `failed_outputs`, re-run those chunks. A missing or invalid output is not \"no findings\". Checks that span files (a duplicate across manifests, a route missing from a contract, a pattern repeated across chunks) are done on the merged list in this step. If the merged list is still too large to read, repeat steps 2 to 4 on the findings."
    },
    {
     "title": "Verify",
     "text": "Re-read each cited line and the manifest entry it depends on. For a finding about a web-originated message, state the attack it allows, for example any page triggering tab capture."
    },
    {
     "title": "Report",
     "text": "Write the report in the format below."
    },
    {
     "title": "Clean up",
     "text": "Delete `$WORK` after the report is delivered."
    }
   ],
   "path": ".github/skills/rlm-browser-extension-review",
   "files": [
    "scripts/rlm_corpus.py"
   ],
   "helperScripts": 1,
   "notChecked": true,
   "group": "web",
   "grade": {
    "grade": "B+",
    "score": "3.95",
    "scores": [
     5,
     4,
     5,
     2,
     1
    ],
    "design": true,
    "rank": 35
   }
  },
  {
   "id": "rlm-c-review",
   "goal": "C review: buffer sizes, integer overflow, format strings and memory ownership.",
   "cat": "Installed",
   "on": false,
   "use": "C review: buffer sizes, integer overflow, format strings and memory ownership. Use when asked to review a C project or module.",
   "prompt": "Use the rlm-c-review skill.",
   "input": "",
   "output": "",
   "pros": [],
   "cons": [],
   "items": [
    "input-1",
    "input-2",
    "input-3",
    "input-4",
    "input-5",
    "input-6"
   ],
   "steps": [
    {
     "layout": "row",
     "note": "Read the project setup. Build files and compiler warnings enabled."
    },
    {
     "layout": "chunks",
     "note": "Check buffers. Flag copies with no length check.",
     "groups": [
      0,
      0,
      1,
      1,
      2,
      2
     ]
    },
    {
     "layout": "parallel",
     "note": "Check integers. Flag arithmetic before allocation or indexing that can overflow.",
     "groups": [
      0,
      0,
      1,
      1,
      2,
      2
     ],
     "state": [
      "ok",
      "ok",
      "ok",
      "ok",
      "ok",
      "ok"
     ]
    },
    {
     "layout": "funnel",
     "note": "Check format strings. Flag printf-style calls with input as the format."
    },
    {
     "layout": "gate",
     "note": "Report. Each finding with file and line, severity and the fix.",
     "pass": [
      true,
      true,
      true,
      true,
      true,
      false
     ]
    }
   ],
   "outcome": null,
   "idea": "",
   "why": "",
   "protocol": [
    {
     "title": "Read the project setup",
     "text": "Build files and compiler warnings enabled."
    },
    {
     "title": "Check buffers",
     "text": "Flag copies with no length check."
    },
    {
     "title": "Check integers",
     "text": "Flag arithmetic before allocation or indexing that can overflow."
    },
    {
     "title": "Check format strings",
     "text": "Flag printf-style calls with input as the format."
    },
    {
     "title": "Report",
     "text": "Each finding with file and line, severity and the fix."
    }
   ],
   "path": ".github/skills/rlm-c-review",
   "files": [],
   "helperScripts": 0,
   "notChecked": true,
   "group": "languages",
   "grade": {
    "grade": "B+",
    "score": "3.95",
    "scores": [
     4,
     4,
     5,
     3,
     3
    ],
    "design": true,
    "rank": 36
   }
  },
  {
   "id": "rlm-cache-header-review",
   "goal": "Cache header review: which responses may be stored, for how long, and by whom.",
   "cat": "Installed",
   "on": false,
   "use": "Cache header review: which responses may be stored, for how long, and by whom. Use when responses carry cache headers or static assets are deployed.",
   "prompt": "Use the rlm-cache-header-review skill.",
   "input": "",
   "output": "",
   "pros": [],
   "cons": [],
   "items": [
    "input-1",
    "input-2",
    "input-3",
    "input-4",
    "input-5",
    "input-6"
   ],
   "steps": [
    {
     "layout": "row",
     "note": "List the response types. Public assets, pages and private data."
    },
    {
     "layout": "chunks",
     "note": "Check private data. It must not be cached by shared caches.",
     "groups": [
      0,
      0,
      1,
      1,
      2,
      2
     ]
    },
    {
     "layout": "parallel",
     "note": "Check lifetimes. Static assets with fingerprints can be cached long; pages need short lifetimes.",
     "groups": [
      0,
      0,
      1,
      1,
      2,
      2
     ],
     "state": [
      "ok",
      "ok",
      "ok",
      "ok",
      "ok",
      "ok"
     ]
    },
    {
     "layout": "funnel",
     "note": "Check validation. Confirm the validator and the vary header are right."
    },
    {
     "layout": "gate",
     "note": "Report. Each response type with its header, the problem and the fix.",
     "pass": [
      true,
      true,
      true,
      true,
      true,
      false
     ]
    }
   ],
   "outcome": null,
   "idea": "",
   "why": "",
   "protocol": [
    {
     "title": "List the response types",
     "text": "Public assets, pages and private data."
    },
    {
     "title": "Check private data",
     "text": "It must not be cached by shared caches."
    },
    {
     "title": "Check lifetimes",
     "text": "Static assets with fingerprints can be cached long; pages need short lifetimes."
    },
    {
     "title": "Check validation",
     "text": "Confirm the validator and the vary header are right."
    },
    {
     "title": "Report",
     "text": "Each response type with its header, the problem and the fix."
    }
   ],
   "path": ".github/skills/rlm-cache-header-review",
   "files": [],
   "helperScripts": 0,
   "notChecked": true,
   "group": "web",
   "grade": {
    "grade": "B+",
    "score": "3.85",
    "scores": [
     4,
     4,
     4,
     3,
     4
    ],
    "design": true,
    "rank": 52
   }
  },
  {
   "id": "rlm-change-management-check",
   "goal": "Check that each production change has an approval, a test result, a rollback plan and a record.",
   "cat": "Installed",
   "on": false,
   "use": "Check that each production change has an approval, a test result, a rollback plan and a record. Use when a change process must be shown to follow policy.",
   "prompt": "Use the rlm-change-management-check skill.",
   "input": "",
   "output": "",
   "pros": [],
   "cons": [],
   "items": [
    "input-1",
    "input-2",
    "input-3",
    "input-4",
    "input-5",
    "input-6"
   ],
   "steps": [
    {
     "layout": "row",
     "note": "Read the change record. Take the change as recorded: its ticket, author, reviewer and date."
    },
    {
     "layout": "chunks",
     "note": "Check approval. The approver must be someone other than the author.",
     "groups": [
      0,
      0,
      1,
      1,
      2,
      2
     ]
    },
    {
     "layout": "parallel",
     "note": "Check testing. A passing test result must be linked to the change.",
     "groups": [
      0,
      0,
      1,
      1,
      2,
      2
     ],
     "state": [
      "ok",
      "ok",
      "ok",
      "ok",
      "ok",
      "ok"
     ]
    },
    {
     "layout": "funnel",
     "note": "Check the rollback. A rollback plan must be recorded for each production change."
    },
    {
     "layout": "gate",
     "note": "Check the timing. Emergency changes need a record made afterwards.",
     "pass": [
      true,
      true,
      true,
      true,
      true,
      false
     ]
    },
    {
     "layout": "doc",
     "note": "Report. A list of changes with the status of each control, and the exceptions to follow up.",
     "docLabel": "report"
    }
   ],
   "outcome": null,
   "idea": "",
   "why": "",
   "protocol": [
    {
     "title": "Read the change record",
     "text": "Take the change as recorded: its ticket, author, reviewer and date."
    },
    {
     "title": "Check approval",
     "text": "The approver must be someone other than the author. Flag self-approved or unapproved changes."
    },
    {
     "title": "Check testing",
     "text": "A passing test result must be linked to the change."
    },
    {
     "title": "Check the rollback",
     "text": "A rollback plan must be recorded for each production change."
    },
    {
     "title": "Check the timing",
     "text": "Emergency changes need a record made afterwards. Flag changes with no record at all."
    },
    {
     "title": "Report",
     "text": "A list of changes with the status of each control, and the exceptions to follow up."
    }
   ],
   "path": ".github/skills/rlm-change-management-check",
   "files": [],
   "helperScripts": 0,
   "notChecked": true,
   "group": "compliance",
   "grade": {
    "grade": "B",
    "score": "3.65",
    "scores": [
     4,
     4,
     3,
     3,
     4
    ],
    "design": true,
    "rank": 166
   }
  },
  {
   "id": "rlm-change-risk-review",
   "goal": "Assess the risk of a change: what could break, who is affected, and how to roll it back.",
   "cat": "Installed",
   "on": false,
   "use": "Assess the risk of a change: what could break, who is affected, and how to roll it back. Use before a change is merged or deployed.",
   "prompt": "Use the rlm-change-risk-review skill.",
   "input": "",
   "output": "",
   "pros": [],
   "cons": [],
   "items": [
    "input-1",
    "input-2",
    "input-3",
    "input-4",
    "input-5",
    "input-6"
   ],
   "steps": [
    {
     "layout": "row",
     "note": "Describe the change. List the files, services and data the change touches."
    },
    {
     "layout": "chunks",
     "note": "Find who is affected. Identify the users, services and jobs that depend on each touched part.",
     "groups": [
      0,
      0,
      1,
      1,
      2,
      2
     ]
    },
    {
     "layout": "parallel",
     "note": "Check data. Flag schema changes, data migrations and anything irreversible.",
     "groups": [
      0,
      0,
      1,
      1,
      2,
      2
     ],
     "state": [
      "ok",
      "ok",
      "ok",
      "ok",
      "ok",
      "ok"
     ]
    },
    {
     "layout": "funnel",
     "note": "Check deployment order. Flag changes that need another service to deploy first."
    },
    {
     "layout": "gate",
     "note": "Check rollback. Each change needs a rollback that works.",
     "pass": [
      true,
      true,
      true,
      true,
      true,
      false
     ]
    },
    {
     "layout": "doc",
     "note": "Report. A risk rating (low, medium or high) with the reasons, the affected parties, and the rollback plan.",
     "docLabel": "report"
    }
   ],
   "outcome": null,
   "idea": "",
   "why": "",
   "protocol": [
    {
     "title": "Describe the change",
     "text": "List the files, services and data the change touches."
    },
    {
     "title": "Find who is affected",
     "text": "Identify the users, services and jobs that depend on each touched part."
    },
    {
     "title": "Check data",
     "text": "Flag schema changes, data migrations and anything irreversible."
    },
    {
     "title": "Check deployment order",
     "text": "Flag changes that need another service to deploy first."
    },
    {
     "title": "Check rollback",
     "text": "Each change needs a rollback that works. Flag rollbacks that lose data or need a manual step."
    },
    {
     "title": "Report",
     "text": "A risk rating (low, medium or high) with the reasons, the affected parties, and the rollback plan."
    }
   ],
   "path": ".github/skills/rlm-change-risk-review",
   "files": [],
   "helperScripts": 0,
   "notChecked": true,
   "group": "review",
   "grade": {
    "grade": "B+",
    "score": "3.85",
    "scores": [
     4,
     4,
     4,
     3,
     4
    ],
    "design": true,
    "rank": 53
   }
  },
  {
   "id": "rlm-cicd-pipeline-review",
   "goal": "Review CI/CD pipeline definitions (GitHub Actions, GitLab CI, Jenkins, Azure Pipelines, CircleCI) for secret…",
   "cat": "Installed",
   "on": false,
   "use": "Review CI/CD pipeline definitions (GitHub Actions, GitLab CI, Jenkins, Azure Pipelines, CircleCI) for secret exposure, excessive token permissions, unpinned third-party actions, untrusted input in scripts, unprotected production deployments and build provenance gaps. Use when pipeline files change, or before enabling a new pipeline or runner.",
   "prompt": "Use the rlm-cicd-pipeline-review skill.",
   "input": "",
   "output": "",
   "pros": [],
   "cons": [],
   "items": [
    "input-1",
    "input-2",
    "input-3",
    "input-4",
    "input-5",
    "input-6"
   ],
   "steps": [
    {
     "layout": "row",
     "note": "Inspect. Run `python3 <skill>/scripts/rlm_corpus.py scan <corpus>`."
    },
    {
     "layout": "chunks",
     "note": "Partition. Run `WORK=$(mktemp -d)`, then `python3 <skill>/scripts/rlm_corpus.py chunk <corpus> \"$WORK/chunks\"`.",
     "groups": [
      0,
      0,
      1,
      1,
      2,
      2
     ]
    },
    {
     "layout": "parallel",
     "note": "Map. For each chunk, run a fresh sub-task (a subagent if you can start one) that sees only that chunk file and the \"Chunk task\" below.",
     "groups": [
      0,
      0,
      1,
      1,
      2,
      2
     ],
     "state": [
      "ok",
      "ok",
      "ok",
      "ok",
      "ok",
      "ok"
     ]
    },
    {
     "layout": "funnel",
     "note": "Reduce. Run `python3 <skill>/scripts/rlm_corpus.py merge \"$WORK/out\" --out \"$WORK/merged.json\"`."
    },
    {
     "layout": "gate",
     "note": "Verify. Confirm exploitability from the trigger and the permissions, not from the name of the step.",
     "pass": [
      true,
      true,
      true,
      true,
      true,
      false
     ]
    },
    {
     "layout": "doc",
     "note": "Report. Write the report in the format below.",
     "docLabel": "report"
    }
   ],
   "outcome": null,
   "idea": "",
   "why": "",
   "protocol": [
    {
     "title": "Inspect",
     "text": "Run `python3 <skill>/scripts/rlm_corpus.py scan <corpus>`. Note the file count, line count and top-level folders. If the corpus is very large, agree the scope with the user, then narrow it with `--include '.github/*'` (repeatable) on every command. Files over 20 MB are skipped; `--max-bytes N` changes the limit. Report what `scan` lists as skipped."
    },
    {
     "title": "Partition",
     "text": "Run `WORK=$(mktemp -d)`, then `python3 <skill>/scripts/rlm_corpus.py chunk <corpus> \"$WORK/chunks\"`. Chunks are limited to 800 lines and 100,000 characters each, and are cut between definitions where possible. Each `chunk_NNN.md` holds the data notice and labelled file sections. `manifest.json` lists the chunks."
    },
    {
     "title": "Map",
     "text": "For each chunk, run a fresh sub-task (a subagent if you can start one) that sees only that chunk file and the \"Chunk task\" below. It writes `\"$WORK/out/<chunk>.out.md\"`. If you cannot start sub-tasks, run `python3 <skill>/scripts/rlm_corpus.py pending \"$WORK/chunks\" \"$WORK/out\"`. It lists the chunks that still have no output. Process the first one: read it, write its output, then run `pending` again. Repeat until nothing is pending. Never hold all chunks in context at once."
    },
    {
     "title": "Reduce",
     "text": "Run `python3 <skill>/scripts/rlm_corpus.py merge \"$WORK/out\" --out \"$WORK/merged.json\"`. If it lists `failed_outputs`, re-run those chunks. A missing or invalid output is not \"no findings\". Checks that span files (a duplicate across manifests, a route missing from a contract, a pattern repeated across chunks) are done on the merged list in this step. If the merged list is still too large to read, repeat steps 2 to 4 on the findings."
    },
    {
     "title": "Verify",
     "text": "Confirm exploitability from the trigger and the permissions, not from the name of the step. If actionlint or zizmor is installed, run it once on the whole set in the reduce step and record the output."
    },
    {
     "title": "Report",
     "text": "Write the report in the format below."
    },
    {
     "title": "Clean up",
     "text": "Delete `$WORK` after the report is delivered."
    }
   ],
   "path": ".github/skills/rlm-cicd-pipeline-review",
   "files": [
    "scripts/rlm_corpus.py"
   ],
   "helperScripts": 1,
   "notChecked": true,
   "group": "engineering",
   "grade": {
    "grade": "B+",
    "score": "3.90",
    "scores": [
     4,
     4,
     5,
     2,
     4
    ],
    "design": true,
    "rank": 44
   }
  },
  {
   "id": "rlm-code-quality-review",
   "goal": "Review code while it is being written for simplicity, understandability, readability, reviewability and fixab…",
   "cat": "Installed",
   "on": false,
   "use": "Review code while it is being written for simplicity, understandability, readability, reviewability and fixability. Use when a change is being written, or before a review starts.",
   "prompt": "Use the rlm-code-quality-review skill.",
   "input": "",
   "output": "",
   "pros": [],
   "cons": [],
   "items": [
    "input-1",
    "input-2",
    "input-3",
    "input-4",
    "input-5",
    "input-6"
   ],
   "steps": [
    {
     "layout": "row",
     "note": "Read the change. Open the changed files and the tests that cover them."
    },
    {
     "layout": "chunks",
     "note": "Check simplicity. Flag functions with many branches, deep nesting, and logic that could be a table or a single expression.",
     "groups": [
      0,
      0,
      1,
      1,
      2,
      2
     ]
    },
    {
     "layout": "parallel",
     "note": "Check understandability. Names should say what a value or function is for.",
     "groups": [
      0,
      0,
      1,
      1,
      2,
      2
     ],
     "state": [
      "ok",
      "ok",
      "ok",
      "ok",
      "ok",
      "ok"
     ]
    },
    {
     "layout": "funnel",
     "note": "Check readability. Keep each function to one job."
    },
    {
     "layout": "gate",
     "note": "Check reviewability. A change should do one thing.",
     "pass": [
      true,
      true,
      true,
      true,
      true,
      false
     ]
    },
    {
     "layout": "doc",
     "note": "Check fixability. Flag code without tests, global state that makes a fix risky, and error messages that do not say what failed.",
     "docLabel": "report"
    }
   ],
   "outcome": null,
   "idea": "",
   "why": "",
   "protocol": [
    {
     "title": "Read the change",
     "text": "Open the changed files and the tests that cover them. Note the size of the change."
    },
    {
     "title": "Check simplicity",
     "text": "Flag functions with many branches, deep nesting, and logic that could be a table or a single expression. Ask whether each abstraction is needed today."
    },
    {
     "title": "Check understandability",
     "text": "Names should say what a value or function is for. Flag names such as `data`, `tmp` or `flag`, and comments that repeat the code instead of saying why."
    },
    {
     "title": "Check readability",
     "text": "Keep each function to one job. Flag long lines, mixed levels of detail in one function, and magic numbers without a name."
    },
    {
     "title": "Check reviewability",
     "text": "A change should do one thing. Flag unrelated edits in the same change, and files that are too large to review in one sitting."
    },
    {
     "title": "Check fixability",
     "text": "Flag code without tests, global state that makes a fix risky, and error messages that do not say what failed."
    },
    {
     "title": "Report",
     "text": "For each finding give `file:line`, the rule it breaks (simple, understandable, readable, reviewable or fixable), and the smallest change that fixes it. Mark what you did not run."
    }
   ],
   "path": ".github/skills/rlm-code-quality-review",
   "files": [],
   "helperScripts": 0,
   "notChecked": true,
   "group": "review",
   "grade": {
    "grade": "B+",
    "score": "3.80",
    "scores": [
     4,
     4,
     3,
     4,
     4
    ],
    "design": true,
    "rank": 109
   }
  },
  {
   "id": "rlm-code-review",
   "goal": "Enterprise code review of a branch, pull request or diff for correctness, security, data safety, tests and ma…",
   "cat": "Installed",
   "on": false,
   "use": "Enterprise code review of a branch, pull request or diff for correctness, security, data safety, tests and maintainability, with severity-ranked, file-cited findings. Use when asked to review a change before merge.",
   "prompt": "Use the rlm-code-review skill.",
   "input": "",
   "output": "",
   "pros": [],
   "cons": [],
   "items": [
    "input-1",
    "input-2",
    "input-3",
    "input-4",
    "input-5",
    "input-6"
   ],
   "steps": [
    {
     "layout": "row",
     "note": "Inspect. Run `python3 <skill>/scripts/rlm_corpus.py scan <corpus>`."
    },
    {
     "layout": "chunks",
     "note": "Partition. Run `WORK=$(mktemp -d)`, then `python3 <skill>/scripts/rlm_corpus.py chunk <corpus> \"$WORK/chunks\"`.",
     "groups": [
      0,
      0,
      1,
      1,
      2,
      2
     ]
    },
    {
     "layout": "parallel",
     "note": "Map. For each chunk, run a fresh sub-task (a subagent if you can start one) that sees only that chunk file and the \"Chunk task\" below.",
     "groups": [
      0,
      0,
      1,
      1,
      2,
      2
     ],
     "state": [
      "ok",
      "ok",
      "ok",
      "ok",
      "ok",
      "ok"
     ]
    },
    {
     "layout": "funnel",
     "note": "Reduce. Run `python3 <skill>/scripts/rlm_corpus.py merge \"$WORK/out\" --out \"$WORK/merged.json\"`."
    },
    {
     "layout": "gate",
     "note": "Verify. Read the surrounding code for every changed function that has callers, because a diff alone hides broken contracts.",
     "pass": [
      true,
      true,
      true,
      true,
      true,
      false
     ]
    },
    {
     "layout": "doc",
     "note": "Report. Write the report in the format below.",
     "docLabel": "report"
    }
   ],
   "outcome": null,
   "idea": "",
   "why": "",
   "protocol": [
    {
     "title": "Inspect",
     "text": "Run `python3 <skill>/scripts/rlm_corpus.py scan <corpus>`. Note the file count, line count and top-level folders. If the corpus is very large, agree the scope with the user, then narrow it with `--include '<folder>'` (repeatable) on every command. Files over 20 MB are skipped; `--max-bytes N` changes the limit. Report what `scan` lists as skipped."
    },
    {
     "title": "Partition",
     "text": "Run `WORK=$(mktemp -d)`, then `python3 <skill>/scripts/rlm_corpus.py chunk <corpus> \"$WORK/chunks\"`. Chunks are limited to 800 lines and 100,000 characters each, and are cut between definitions where possible. Each `chunk_NNN.md` holds the data notice and labelled file sections. `manifest.json` lists the chunks."
    },
    {
     "title": "Map",
     "text": "For each chunk, run a fresh sub-task (a subagent if you can start one) that sees only that chunk file and the \"Chunk task\" below. It writes `\"$WORK/out/<chunk>.out.md\"`. If you cannot start sub-tasks, run `python3 <skill>/scripts/rlm_corpus.py pending \"$WORK/chunks\" \"$WORK/out\"`. It lists the chunks that still have no output. Process the first one: read it, write its output, then run `pending` again. Repeat until nothing is pending. Never hold all chunks in context at once."
    },
    {
     "title": "Reduce",
     "text": "Run `python3 <skill>/scripts/rlm_corpus.py merge \"$WORK/out\" --out \"$WORK/merged.json\"`. If it lists `failed_outputs`, re-run those chunks. A missing or invalid output is not \"no findings\". Checks that span files (a duplicate across manifests, a route missing from a contract, a pattern repeated across chunks) are done on the merged list in this step. If the merged list is still too large to read, repeat steps 2 to 4 on the findings."
    },
    {
     "title": "Verify",
     "text": "Read the surrounding code for every changed function that has callers, because a diff alone hides broken contracts. Verify each finding before reporting it. Do not approve a change whose tests you did not read."
    },
    {
     "title": "Report",
     "text": "Write the report in the format below."
    },
    {
     "title": "Clean up",
     "text": "Delete `$WORK` after the report is delivered."
    }
   ],
   "path": ".github/skills/rlm-code-review",
   "files": [
    "scripts/rlm_corpus.py"
   ],
   "helperScripts": 1,
   "notChecked": true,
   "group": "engineering",
   "grade": {
    "grade": "A+",
    "score": "5.00",
    "scores": [
     5,
     5,
     5,
     5,
     5
    ],
    "design": true,
    "rank": 1
   }
  },
  {
   "id": "rlm-comment-quality-review",
   "goal": "Comment quality review: comments that explain why, and comments that have gone stale.",
   "cat": "Installed",
   "on": false,
   "use": "Comment quality review: comments that explain why, and comments that have gone stale. Use when comments are added or code they describe has changed.",
   "prompt": "Use the rlm-comment-quality-review skill.",
   "input": "",
   "output": "",
   "pros": [],
   "cons": [],
   "items": [
    "input-1",
    "input-2",
    "input-3",
    "input-4",
    "input-5",
    "input-6"
   ],
   "steps": [
    {
     "layout": "row",
     "note": "List comments. Collect the comments in the changed code."
    },
    {
     "layout": "chunks",
     "note": "Flag restating comments that repeat what the code does.",
     "groups": [
      0,
      0,
      1,
      1,
      2,
      2
     ]
    },
    {
     "layout": "parallel",
     "note": "Flag stale comments that no longer match the code beside them.",
     "groups": [
      0,
      0,
      1,
      1,
      2,
      2
     ],
     "state": [
      "ok",
      "ok",
      "ok",
      "ok",
      "ok",
      "ok"
     ]
    },
    {
     "layout": "funnel",
     "note": "Flag missing why. A non-obvious choice with no explanation."
    },
    {
     "layout": "gate",
     "note": "Report. Each comment with file and line, the problem and the fix.",
     "pass": [
      true,
      true,
      true,
      true,
      true,
      false
     ]
    }
   ],
   "outcome": null,
   "idea": "",
   "why": "",
   "protocol": [
    {
     "title": "List comments",
     "text": "Collect the comments in the changed code."
    },
    {
     "title": "Flag restating comments that repeat what the code does",
     "text": ""
    },
    {
     "title": "Flag stale comments that no longer match the code beside them",
     "text": ""
    },
    {
     "title": "Flag missing why",
     "text": "A non-obvious choice with no explanation."
    },
    {
     "title": "Report",
     "text": "Each comment with file and line, the problem and the fix."
    }
   ],
   "path": ".github/skills/rlm-comment-quality-review",
   "files": [],
   "helperScripts": 0,
   "notChecked": true,
   "group": "review",
   "grade": {
    "grade": "B",
    "score": "3.45",
    "scores": [
     3,
     4,
     3,
     4,
     4
    ],
    "design": true,
    "rank": 194
   }
  },
  {
   "id": "rlm-compliance-control-check",
   "goal": "Check a repository against a compliance control set supplied by the user (for example SOC 2, ISO 27001, PCI D…",
   "cat": "Installed",
   "on": false,
   "use": "Check a repository against a compliance control set supplied by the user (for example SOC 2, ISO 27001, PCI DSS or an internal policy) and report which controls have evidence in code and configuration, which lack it, and what must be collected from outside the repository. Use when preparing for an audit or assessing compliance readiness.",
   "prompt": "Use the rlm-compliance-control-check skill.",
   "input": "",
   "output": "",
   "pros": [],
   "cons": [],
   "items": [
    "input-1",
    "input-2",
    "input-3",
    "input-4",
    "input-5",
    "input-6"
   ],
   "steps": [
    {
     "layout": "row",
     "note": "Inspect. Run `python3 <skill>/scripts/rlm_corpus.py scan <corpus>`."
    },
    {
     "layout": "chunks",
     "note": "Partition. Run `WORK=$(mktemp -d)`, then `python3 <skill>/scripts/rlm_corpus.py chunk <corpus> \"$WORK/chunks\"`.",
     "groups": [
      0,
      0,
      1,
      1,
      2,
      2
     ]
    },
    {
     "layout": "parallel",
     "note": "Map. For each chunk, run a fresh sub-task (a subagent if you can start one) that sees only that chunk file and the \"Chunk task\" below.",
     "groups": [
      0,
      0,
      1,
      1,
      2,
      2
     ],
     "state": [
      "ok",
      "ok",
      "ok",
      "ok",
      "ok",
      "ok"
     ]
    },
    {
     "layout": "funnel",
     "note": "Reduce. Run `python3 <skill>/scripts/rlm_corpus.py merge \"$WORK/out\" --out \"$WORK/merged.json\"`."
    },
    {
     "layout": "gate",
     "note": "Verify. Re-read each cited line before reporting it as evidence.",
     "pass": [
      true,
      true,
      true,
      true,
      true,
      false
     ]
    },
    {
     "layout": "doc",
     "note": "Report. Write the report in the format below.",
     "docLabel": "report"
    }
   ],
   "outcome": null,
   "idea": "",
   "why": "",
   "protocol": [
    {
     "title": "Inspect",
     "text": "Run `python3 <skill>/scripts/rlm_corpus.py scan <corpus>`. Note the file count, line count and top-level folders. If the corpus is very large, agree the scope with the user, then narrow it with `--include '<folder>'` (repeatable) on every command. Files over 20 MB are skipped; `--max-bytes N` changes the limit. Report what `scan` lists as skipped."
    },
    {
     "title": "Partition",
     "text": "Run `WORK=$(mktemp -d)`, then `python3 <skill>/scripts/rlm_corpus.py chunk <corpus> \"$WORK/chunks\"`. Chunks are limited to 800 lines and 100,000 characters each, and are cut between definitions where possible. Each `chunk_NNN.md` holds the data notice and labelled file sections. `manifest.json` lists the chunks."
    },
    {
     "title": "Map",
     "text": "For each chunk, run a fresh sub-task (a subagent if you can start one) that sees only that chunk file and the \"Chunk task\" below. It writes `\"$WORK/out/<chunk>.out.md\"`. If you cannot start sub-tasks, run `python3 <skill>/scripts/rlm_corpus.py pending \"$WORK/chunks\" \"$WORK/out\"`. It lists the chunks that still have no output. Process the first one: read it, write its output, then run `pending` again. Repeat until nothing is pending. Never hold all chunks in context at once."
    },
    {
     "title": "Reduce",
     "text": "Run `python3 <skill>/scripts/rlm_corpus.py merge \"$WORK/out\" --out \"$WORK/merged.json\"`. If it lists `failed_outputs`, re-run those chunks. A missing or invalid output is not \"no findings\". Checks that span files (a duplicate across manifests, a route missing from a contract, a pattern repeated across chunks) are done on the merged list in this step. If the merged list is still too large to read, repeat steps 2 to 4 on the findings."
    },
    {
     "title": "Verify",
     "text": "Re-read each cited line before reporting it as evidence. Classify each control as evidence present, partial, absent, outside repository, or not applicable (with the reason). Change-management evidence is compared with the deployment history in the reduce step. Evidence older than the audit period is flagged as stale."
    },
    {
     "title": "Report",
     "text": "Write the report in the format below."
    },
    {
     "title": "Clean up",
     "text": "Delete `$WORK` after the report is delivered."
    }
   ],
   "path": ".github/skills/rlm-compliance-control-check",
   "files": [
    "scripts/rlm_corpus.py"
   ],
   "helperScripts": 1,
   "notChecked": true,
   "group": "compliance",
   "grade": {
    "grade": "C+",
    "score": "2.80",
    "scores": [
     3,
     3,
     4,
     1,
     2
    ],
    "design": true,
    "rank": 214
   }
  },
  {
   "id": "rlm-compliance-hipaa-safeguards",
   "goal": "HIPAA safeguards check: access, audit and transmission safeguards for health information in code.",
   "cat": "Installed",
   "on": false,
   "use": "HIPAA safeguards check: access, audit and transmission safeguards for health information in code. Use when code stores or sends health information.",
   "prompt": "Use the rlm-compliance-hipaa-safeguards skill.",
   "input": "",
   "output": "",
   "pros": [],
   "cons": [],
   "items": [
    "input-1",
    "input-2",
    "input-3",
    "input-4",
    "input-5",
    "input-6"
   ],
   "steps": [
    {
     "layout": "row",
     "note": "Find the health information. List the fields and records that hold it."
    },
    {
     "layout": "chunks",
     "note": "Check access. Each access needs a role check and a record.",
     "groups": [
      0,
      0,
      1,
      1,
      2,
      2
     ]
    },
    {
     "layout": "parallel",
     "note": "Check audit. Access and changes to health records must be logged.",
     "groups": [
      0,
      0,
      1,
      1,
      2,
      2
     ],
     "state": [
      "ok",
      "ok",
      "ok",
      "ok",
      "ok",
      "ok"
     ]
    },
    {
     "layout": "funnel",
     "note": "Check transmission. Health information must be encrypted in transit and at rest."
    },
    {
     "layout": "gate",
     "note": "Report. Each finding with file and line, the safeguard it breaks and the fix.",
     "pass": [
      true,
      true,
      true,
      true,
      true,
      false
     ]
    }
   ],
   "outcome": null,
   "idea": "",
   "why": "",
   "protocol": [
    {
     "title": "Find the health information",
     "text": "List the fields and records that hold it."
    },
    {
     "title": "Check access",
     "text": "Each access needs a role check and a record."
    },
    {
     "title": "Check audit",
     "text": "Access and changes to health records must be logged."
    },
    {
     "title": "Check transmission",
     "text": "Health information must be encrypted in transit and at rest."
    },
    {
     "title": "Report",
     "text": "Each finding with file and line, the safeguard it breaks and the fix. This is a technical aid, not a legal opinion."
    }
   ],
   "path": ".github/skills/rlm-compliance-hipaa-safeguards",
   "files": [],
   "helperScripts": 0,
   "notChecked": true,
   "group": "compliance",
   "grade": {
    "grade": "B",
    "score": "3.60",
    "scores": [
     4,
     4,
     4,
     2,
     3
    ],
    "design": true,
    "rank": 182
   }
  },
  {
   "id": "rlm-compliance-iso27001-evidence",
   "goal": "ISO 27001 evidence review: which Annex A controls the code and pipeline can evidence, and the gaps.",
   "cat": "Installed",
   "on": false,
   "use": "ISO 27001 evidence review: which Annex A controls the code and pipeline can evidence, and the gaps. Use when an ISO 27001 assessment or surveillance audit is due.",
   "prompt": "Use the rlm-compliance-iso27001-evidence skill.",
   "input": "",
   "output": "",
   "pros": [],
   "cons": [],
   "items": [
    "input-1",
    "input-2",
    "input-3",
    "input-4",
    "input-5",
    "input-6"
   ],
   "steps": [
    {
     "layout": "row",
     "note": "Confirm the scope. The controls in scope as the user states them."
    },
    {
     "layout": "chunks",
     "note": "Map evidence. List the code, configuration and pipeline evidence for each control.",
     "groups": [
      0,
      0,
      1,
      1,
      2,
      2
     ]
    },
    {
     "layout": "parallel",
     "note": "Check the records. Each control needs dated, retrievable evidence.",
     "groups": [
      0,
      0,
      1,
      1,
      2,
      2
     ],
     "state": [
      "ok",
      "ok",
      "ok",
      "ok",
      "ok",
      "ok"
     ]
    },
    {
     "layout": "funnel",
     "note": "Flag gaps. Controls with no evidence in the repository."
    },
    {
     "layout": "gate",
     "note": "Report. Each control with its evidence status and what must be collected elsewhere.",
     "pass": [
      true,
      true,
      true,
      true,
      true,
      false
     ]
    }
   ],
   "outcome": null,
   "idea": "",
   "why": "",
   "protocol": [
    {
     "title": "Confirm the scope",
     "text": "The controls in scope as the user states them."
    },
    {
     "title": "Map evidence",
     "text": "List the code, configuration and pipeline evidence for each control."
    },
    {
     "title": "Check the records",
     "text": "Each control needs dated, retrievable evidence."
    },
    {
     "title": "Flag gaps",
     "text": "Controls with no evidence in the repository."
    },
    {
     "title": "Report",
     "text": "Each control with its evidence status and what must be collected elsewhere."
    }
   ],
   "path": ".github/skills/rlm-compliance-iso27001-evidence",
   "files": [],
   "helperScripts": 0,
   "notChecked": true,
   "group": "compliance",
   "grade": {
    "grade": "B+",
    "score": "3.70",
    "scores": [
     4,
     4,
     4,
     2,
     4
    ],
    "design": true,
    "rank": 153
   }
  },
  {
   "id": "rlm-compliance-pci-dss-code-check",
   "goal": "PCI DSS code check: card data handling, storage and logging rules checked in the code.",
   "cat": "Installed",
   "on": false,
   "use": "PCI DSS code check: card data handling, storage and logging rules checked in the code. Use when code handles payment card data or payment flows.",
   "prompt": "Use the rlm-compliance-pci-dss-code-check skill.",
   "input": "",
   "output": "",
   "pros": [],
   "cons": [],
   "items": [
    "input-1",
    "input-2",
    "input-3",
    "input-4",
    "input-5",
    "input-6"
   ],
   "steps": [
    {
     "layout": "row",
     "note": "Find the card data. List where card numbers, CVV or expiry dates appear."
    },
    {
     "layout": "chunks",
     "note": "Check storage. Flag card data stored after authorisation, or in logs.",
     "groups": [
      0,
      0,
      1,
      1,
      2,
      2
     ]
    },
    {
     "layout": "parallel",
     "note": "Check transmission. Flag card data sent without strong encryption.",
     "groups": [
      0,
      0,
      1,
      1,
      2,
      2
     ],
     "state": [
      "ok",
      "ok",
      "ok",
      "ok",
      "ok",
      "ok"
     ]
    },
    {
     "layout": "funnel",
     "note": "Check the payment provider. Note whether card entry is kept off the team's servers."
    },
    {
     "layout": "gate",
     "note": "Report. Each finding with file and line, the requirement it breaks and the fix.",
     "pass": [
      true,
      true,
      true,
      true,
      true,
      false
     ]
    }
   ],
   "outcome": null,
   "idea": "",
   "why": "",
   "protocol": [
    {
     "title": "Find the card data",
     "text": "List where card numbers, CVV or expiry dates appear."
    },
    {
     "title": "Check storage",
     "text": "Flag card data stored after authorisation, or in logs."
    },
    {
     "title": "Check transmission",
     "text": "Flag card data sent without strong encryption."
    },
    {
     "title": "Check the payment provider",
     "text": "Note whether card entry is kept off the team's servers."
    },
    {
     "title": "Report",
     "text": "Each finding with file and line, the requirement it breaks and the fix."
    }
   ],
   "path": ".github/skills/rlm-compliance-pci-dss-code-check",
   "files": [],
   "helperScripts": 0,
   "notChecked": true,
   "group": "compliance",
   "grade": {
    "grade": "B",
    "score": "3.60",
    "scores": [
     4,
     4,
     4,
     2,
     3
    ],
    "design": true,
    "rank": 183
   }
  },
  {
   "id": "rlm-concurrency-review",
   "goal": "Review concurrent code for races, shared state, deadlocks and unbounded parallel work.",
   "cat": "Installed",
   "on": false,
   "use": "Review concurrent code for races, shared state, deadlocks and unbounded parallel work. Use when code uses threads, tasks, goroutines, async work or locks.",
   "prompt": "Use the rlm-concurrency-review skill.",
   "input": "",
   "output": "",
   "pros": [],
   "cons": [],
   "items": [
    "input-1",
    "input-2",
    "input-3",
    "input-4",
    "input-5",
    "input-6"
   ],
   "steps": [
    {
     "layout": "row",
     "note": "Find the concurrency. List each thread, task, background job or parallel loop, and what each one shares."
    },
    {
     "layout": "chunks",
     "note": "Check shared state. Flag shared mutable data read or written without a lock or a single owner.",
     "groups": [
      0,
      0,
      1,
      1,
      2,
      2
     ]
    },
    {
     "layout": "parallel",
     "note": "Check ordering of locks. Flag code that takes two locks in different orders, which can deadlock.",
     "groups": [
      0,
      0,
      1,
      1,
      2,
      2
     ],
     "state": [
      "ok",
      "ok",
      "ok",
      "ok",
      "ok",
      "ok"
     ]
    },
    {
     "layout": "funnel",
     "note": "Check bounds. Parallel work needs a limit."
    },
    {
     "layout": "gate",
     "note": "Check cancellation. Long-running work must stop when its caller stops.",
     "pass": [
      true,
      true,
      true,
      true,
      true,
      false
     ]
    },
    {
     "layout": "doc",
     "note": "Report. List each finding as file and line, with severity, the problem and the fix.",
     "docLabel": "report"
    }
   ],
   "outcome": null,
   "idea": "",
   "why": "",
   "protocol": [
    {
     "title": "Find the concurrency",
     "text": "List each thread, task, background job or parallel loop, and what each one shares."
    },
    {
     "title": "Check shared state",
     "text": "Flag shared mutable data read or written without a lock or a single owner."
    },
    {
     "title": "Check ordering of locks",
     "text": "Flag code that takes two locks in different orders, which can deadlock."
    },
    {
     "title": "Check bounds",
     "text": "Parallel work needs a limit. Flag loops that start one task per item with no cap."
    },
    {
     "title": "Check cancellation",
     "text": "Long-running work must stop when its caller stops. Flag work that ignores cancellation."
    },
    {
     "title": "Report",
     "text": "List each finding as file and line, with severity, the problem and the fix. Mark what you could not reproduce."
    }
   ],
   "path": ".github/skills/rlm-concurrency-review",
   "files": [],
   "helperScripts": 0,
   "notChecked": true,
   "group": "engineering",
   "grade": {
    "grade": "B+",
    "score": "3.95",
    "scores": [
     5,
     4,
     4,
     2,
     3
    ],
    "design": true,
    "rank": 37
   }
  },
  {
   "id": "rlm-configuration-review",
   "goal": "Configuration review: settings with safe defaults, validation and no secrets.",
   "cat": "Installed",
   "on": false,
   "use": "Configuration review: settings with safe defaults, validation and no secrets. Use when configuration keys or defaults are added or changed.",
   "prompt": "Use the rlm-configuration-review skill.",
   "input": "",
   "output": "",
   "pros": [],
   "cons": [],
   "items": [
    "input-1",
    "input-2",
    "input-3",
    "input-4",
    "input-5",
    "input-6"
   ],
   "steps": [
    {
     "layout": "row",
     "note": "List the settings. Find each key, its default and where it is read."
    },
    {
     "layout": "chunks",
     "note": "Check defaults. Flag defaults that are unsafe in production.",
     "groups": [
      0,
      0,
      1,
      1,
      2,
      2
     ]
    },
    {
     "layout": "parallel",
     "note": "Check validation. Flag settings used without a range or format check.",
     "groups": [
      0,
      0,
      1,
      1,
      2,
      2
     ],
     "state": [
      "ok",
      "ok",
      "ok",
      "ok",
      "ok",
      "ok"
     ]
    },
    {
     "layout": "funnel",
     "note": "Check secrets. Flag keys with values that look like credentials."
    },
    {
     "layout": "gate",
     "note": "Report. Each setting with file and line, the problem and the fix.",
     "pass": [
      true,
      true,
      true,
      true,
      true,
      false
     ]
    }
   ],
   "outcome": null,
   "idea": "",
   "why": "",
   "protocol": [
    {
     "title": "List the settings",
     "text": "Find each key, its default and where it is read."
    },
    {
     "title": "Check defaults",
     "text": "Flag defaults that are unsafe in production."
    },
    {
     "title": "Check validation",
     "text": "Flag settings used without a range or format check."
    },
    {
     "title": "Check secrets",
     "text": "Flag keys with values that look like credentials."
    },
    {
     "title": "Report",
     "text": "Each setting with file and line, the problem and the fix."
    }
   ],
   "path": ".github/skills/rlm-configuration-review",
   "files": [],
   "helperScripts": 0,
   "notChecked": true,
   "group": "review",
   "grade": {
    "grade": "B+",
    "score": "3.85",
    "scores": [
     4,
     4,
     4,
     3,
     4
    ],
    "design": true,
    "rank": 54
   }
  },
  {
   "id": "rlm-container-gate",
   "goal": "Check a container image before it ships: base image, running user, secrets and scan results.",
   "cat": "Installed",
   "on": false,
   "use": "Check a container image before it ships: base image, running user, secrets and scan results. Use when a Dockerfile or image build changes.",
   "prompt": "Use the rlm-container-gate skill.",
   "input": "",
   "output": "",
   "pros": [],
   "cons": [],
   "items": [
    "input-1",
    "input-2",
    "input-3",
    "input-4",
    "input-5",
    "input-6"
   ],
   "steps": [
    {
     "layout": "row",
     "note": "Read the Dockerfile. Note the base image, its tag, the build stages and the final command."
    },
    {
     "layout": "chunks",
     "note": "Check the base image. Flag untagged or latest base images, and images no longer supported.",
     "groups": [
      0,
      0,
      1,
      1,
      2,
      2
     ]
    },
    {
     "layout": "parallel",
     "note": "Check the user. Flag images that run as root with no reason.",
     "groups": [
      0,
      0,
      1,
      1,
      2,
      2
     ],
     "state": [
      "ok",
      "ok",
      "ok",
      "ok",
      "ok",
      "ok"
     ]
    },
    {
     "layout": "funnel",
     "note": "Check secrets. Flag secrets copied into the image or passed as build arguments that stay in the layers."
    },
    {
     "layout": "gate",
     "note": "Check the scan. Note the image scan result.",
     "pass": [
      true,
      true,
      true,
      true,
      true,
      false
     ]
    },
    {
     "layout": "doc",
     "note": "Report. A pass or fail verdict, with each finding, its file and line, and the fix.",
     "docLabel": "report"
    }
   ],
   "outcome": null,
   "idea": "",
   "why": "",
   "protocol": [
    {
     "title": "Read the Dockerfile",
     "text": "Note the base image, its tag, the build stages and the final command."
    },
    {
     "title": "Check the base image",
     "text": "Flag untagged or latest base images, and images no longer supported."
    },
    {
     "title": "Check the user",
     "text": "Flag images that run as root with no reason."
    },
    {
     "title": "Check secrets",
     "text": "Flag secrets copied into the image or passed as build arguments that stay in the layers."
    },
    {
     "title": "Check the scan",
     "text": "Note the image scan result. Block on a known exploitable critical finding."
    },
    {
     "title": "Report",
     "text": "A pass or fail verdict, with each finding, its file and line, and the fix."
    }
   ],
   "path": ".github/skills/rlm-container-gate",
   "files": [],
   "helperScripts": 0,
   "notChecked": true,
   "group": "gates",
   "grade": {
    "grade": "B",
    "score": "3.65",
    "scores": [
     4,
     3,
     4,
     3,
     4
    ],
    "design": true,
    "rank": 167
   }
  },
  {
   "id": "rlm-container-image-findings",
   "goal": "Review container image scanner findings: which are reachable, which have fixes, and which are false positives.",
   "cat": "Installed",
   "on": false,
   "use": "Review container image scanner findings: which are reachable, which have fixes, and which are false positives. Use when an image scan reports findings before a release.",
   "prompt": "Use the rlm-container-image-findings skill.",
   "input": "",
   "output": "",
   "pros": [],
   "cons": [],
   "items": [
    "input-1",
    "input-2",
    "input-3",
    "input-4",
    "input-5",
    "input-6"
   ],
   "steps": [
    {
     "layout": "row",
     "note": "Read the scan output. Take the findings the user exports, with package, version and severity."
    },
    {
     "layout": "chunks",
     "note": "Check the base layer. Note which findings come from the base image, and whether a newer base image fixes them.",
     "groups": [
      0,
      0,
      1,
      1,
      2,
      2
     ]
    },
    {
     "layout": "parallel",
     "note": "Check reachability. For each finding, decide whether the code in the image uses the vulnerable component.",
     "groups": [
      0,
      0,
      1,
      1,
      2,
      2
     ],
     "state": [
      "ok",
      "ok",
      "ok",
      "ok",
      "ok",
      "ok"
     ]
    },
    {
     "layout": "funnel",
     "note": "Check fixes. Note the fixed version of each package and whether a rebuild with updated packages is enough."
    },
    {
     "layout": "gate",
     "note": "Check false positives. Mark findings with no fix and no reachable path as candidates for a documented exception, not as passed.",
     "pass": [
      true,
      true,
      true,
      true,
      true,
      false
     ]
    },
    {
     "layout": "doc",
     "note": "Report. A table: finding, layer, reachable, fix, and decision.",
     "docLabel": "report"
    }
   ],
   "outcome": null,
   "idea": "",
   "why": "",
   "protocol": [
    {
     "title": "Read the scan output",
     "text": "Take the findings the user exports, with package, version and severity. Do not invent findings."
    },
    {
     "title": "Check the base layer",
     "text": "Note which findings come from the base image, and whether a newer base image fixes them."
    },
    {
     "title": "Check reachability",
     "text": "For each finding, decide whether the code in the image uses the vulnerable component."
    },
    {
     "title": "Check fixes",
     "text": "Note the fixed version of each package and whether a rebuild with updated packages is enough."
    },
    {
     "title": "Check false positives",
     "text": "Mark findings with no fix and no reachable path as candidates for a documented exception, not as passed."
    },
    {
     "title": "Report",
     "text": "A table: finding, layer, reachable, fix, and decision. State the findings that need a person to confirm."
    }
   ],
   "path": ".github/skills/rlm-container-image-findings",
   "files": [],
   "helperScripts": 0,
   "notChecked": true,
   "group": "vulnerability",
   "grade": {
    "grade": "B",
    "score": "3.60",
    "scores": [
     4,
     4,
     4,
     2,
     3
    ],
    "design": true,
    "rank": 184
   }
  },
  {
   "id": "rlm-container-security-review",
   "goal": "Review container runtime settings, network policy, image provenance and registry access.",
   "cat": "Installed",
   "on": false,
   "use": "Review container runtime settings, network policy, image provenance and registry access. Use when containers or their hosts are configured or deployed.",
   "prompt": "Use the rlm-container-security-review skill.",
   "input": "",
   "output": "",
   "pros": [],
   "cons": [],
   "items": [
    "input-1",
    "input-2",
    "input-3",
    "input-4",
    "input-5",
    "input-6"
   ],
   "steps": [
    {
     "layout": "row",
     "note": "Read the runtime settings. Note how containers are started: privileges, capabilities, read-only filesystems and host namespaces."
    },
    {
     "layout": "chunks",
     "note": "Check capabilities. Flag containers with added capabilities or privileged mode with no reason.",
     "groups": [
      0,
      0,
      1,
      1,
      2,
      2
     ]
    },
    {
     "layout": "parallel",
     "note": "Check network policy. Flag workloads with no network policy, which can reach every other workload.",
     "groups": [
      0,
      0,
      1,
      1,
      2,
      2
     ],
     "state": [
      "ok",
      "ok",
      "ok",
      "ok",
      "ok",
      "ok"
     ]
    },
    {
     "layout": "funnel",
     "note": "Check provenance. Images should come from a trusted registry, be signed or pinned by digest, and built by the pipeline."
    },
    {
     "layout": "gate",
     "note": "Check registry access. Flag registry credentials shared across teams or stored in plain files.",
     "pass": [
      true,
      true,
      true,
      true,
      true,
      false
     ]
    },
    {
     "layout": "doc",
     "note": "Report. List each finding with its workload, severity and the fix.",
     "docLabel": "report"
    }
   ],
   "outcome": null,
   "idea": "",
   "why": "",
   "protocol": [
    {
     "title": "Read the runtime settings",
     "text": "Note how containers are started: privileges, capabilities, read-only filesystems and host namespaces."
    },
    {
     "title": "Check capabilities",
     "text": "Flag containers with added capabilities or privileged mode with no reason."
    },
    {
     "title": "Check network policy",
     "text": "Flag workloads with no network policy, which can reach every other workload."
    },
    {
     "title": "Check provenance",
     "text": "Images should come from a trusted registry, be signed or pinned by digest, and built by the pipeline."
    },
    {
     "title": "Check registry access",
     "text": "Flag registry credentials shared across teams or stored in plain files."
    },
    {
     "title": "Report",
     "text": "List each finding with its workload, severity and the fix."
    }
   ],
   "path": ".github/skills/rlm-container-security-review",
   "files": [],
   "helperScripts": 0,
   "notChecked": true,
   "group": "ops",
   "grade": {
    "grade": "B+",
    "score": "3.80",
    "scores": [
     4,
     4,
     5,
     2,
     3
    ],
    "design": true,
    "rank": 110
   }
  },
  {
   "id": "rlm-control-testing-plan",
   "goal": "Control testing plan: how each control is tested, how often, and what counts as a pass.",
   "cat": "Installed",
   "on": false,
   "use": "Control testing plan: how each control is tested, how often, and what counts as a pass. Use when a team prepares for an audit or internal assurance.",
   "prompt": "Use the rlm-control-testing-plan skill.",
   "input": "",
   "output": "",
   "pros": [],
   "cons": [],
   "items": [
    "input-1",
    "input-2",
    "input-3",
    "input-4",
    "input-5",
    "input-6"
   ],
   "steps": [
    {
     "layout": "row",
     "note": "List the controls in scope."
    },
    {
     "layout": "chunks",
     "note": "For each control, write the test. What is checked and on which sample.",
     "groups": [
      0,
      0,
      1,
      1,
      2,
      2
     ]
    },
    {
     "layout": "parallel",
     "note": "Set the frequency. Each control has a testing interval.",
     "groups": [
      0,
      0,
      1,
      1,
      2,
      2
     ],
     "state": [
      "ok",
      "ok",
      "ok",
      "ok",
      "ok",
      "ok"
     ]
    },
    {
     "layout": "funnel",
     "note": "Define the pass. State the result that counts as a pass and a fail."
    },
    {
     "layout": "gate",
     "note": "Report. The plan with each control, its test, interval and owner.",
     "pass": [
      true,
      true,
      true,
      true,
      true,
      false
     ]
    }
   ],
   "outcome": null,
   "idea": "",
   "why": "",
   "protocol": [
    {
     "title": "List the controls in scope",
     "text": ""
    },
    {
     "title": "For each control, write the test",
     "text": "What is checked and on which sample."
    },
    {
     "title": "Set the frequency",
     "text": "Each control has a testing interval."
    },
    {
     "title": "Define the pass",
     "text": "State the result that counts as a pass and a fail."
    },
    {
     "title": "Report",
     "text": "The plan with each control, its test, interval and owner."
    }
   ],
   "path": ".github/skills/rlm-control-testing-plan",
   "files": [],
   "helperScripts": 0,
   "notChecked": true,
   "group": "compliance",
   "grade": {
    "grade": "B+",
    "score": "3.85",
    "scores": [
     4,
     4,
     4,
     3,
     4
    ],
    "design": true,
    "rank": 55
   }
  },
  {
   "id": "rlm-cors-review",
   "goal": "CORS review: allowed origins, credentials and wildcard settings.",
   "cat": "Installed",
   "on": false,
   "use": "CORS review: allowed origins, credentials and wildcard settings. Use when a server sets cross-origin rules.",
   "prompt": "Use the rlm-cors-review skill.",
   "input": "",
   "output": "",
   "pros": [],
   "cons": [],
   "items": [
    "input-1",
    "input-2",
    "input-3",
    "input-4",
    "input-5",
    "input-6"
   ],
   "steps": [
    {
     "layout": "row",
     "note": "List the rules. Find each CORS setting and the origins it allows."
    },
    {
     "layout": "chunks",
     "note": "Check wildcards. Flag any origin set to a wildcard when credentials are allowed.",
     "groups": [
      0,
      0,
      1,
      1,
      2,
      2
     ]
    },
    {
     "layout": "parallel",
     "note": "Check origins. Each allowed origin must be listed on purpose.",
     "groups": [
      0,
      0,
      1,
      1,
      2,
      2
     ],
     "state": [
      "ok",
      "ok",
      "ok",
      "ok",
      "ok",
      "ok"
     ]
    },
    {
     "layout": "funnel",
     "note": "Check methods and headers. Flag allow-all settings."
    },
    {
     "layout": "gate",
     "note": "Report. Each rule with file and line, severity and the fix.",
     "pass": [
      true,
      true,
      true,
      true,
      true,
      false
     ]
    }
   ],
   "outcome": null,
   "idea": "",
   "why": "",
   "protocol": [
    {
     "title": "List the rules",
     "text": "Find each CORS setting and the origins it allows."
    },
    {
     "title": "Check wildcards",
     "text": "Flag any origin set to a wildcard when credentials are allowed."
    },
    {
     "title": "Check origins",
     "text": "Each allowed origin must be listed on purpose."
    },
    {
     "title": "Check methods and headers",
     "text": "Flag allow-all settings."
    },
    {
     "title": "Report",
     "text": "Each rule with file and line, severity and the fix."
    }
   ],
   "path": ".github/skills/rlm-cors-review",
   "files": [],
   "helperScripts": 0,
   "notChecked": true,
   "group": "web",
   "grade": {
    "grade": "B+",
    "score": "3.85",
    "scores": [
     4,
     4,
     4,
     3,
     4
    ],
    "design": true,
    "rank": 56
   }
  },
  {
   "id": "rlm-cpp-review",
   "goal": "C++ review: memory ownership, bounds, undefined behaviour and exception safety.",
   "cat": "Installed",
   "on": false,
   "use": "C++ review: memory ownership, bounds, undefined behaviour and exception safety. Use when asked to review a C++ project or module.",
   "prompt": "Use the rlm-cpp-review skill.",
   "input": "",
   "output": "",
   "pros": [],
   "cons": [],
   "items": [
    "input-1",
    "input-2",
    "input-3",
    "input-4",
    "input-5",
    "input-6"
   ],
   "steps": [
    {
     "layout": "row",
     "note": "Read the project setup. Build files, the standard in use and sanitiser settings."
    },
    {
     "layout": "chunks",
     "note": "Check ownership. Flag raw new and delete without a clear owner.",
     "groups": [
      0,
      0,
      1,
      1,
      2,
      2
     ]
    },
    {
     "layout": "parallel",
     "note": "Check bounds. Flag indexing and copies with no size check.",
     "groups": [
      0,
      0,
      1,
      1,
      2,
      2
     ],
     "state": [
      "ok",
      "ok",
      "ok",
      "ok",
      "ok",
      "ok"
     ]
    },
    {
     "layout": "funnel",
     "note": "Check undefined behaviour. Flag signed overflow, uninitialised values and dangling references."
    },
    {
     "layout": "gate",
     "note": "Report. Each finding with file and line, severity and the fix.",
     "pass": [
      true,
      true,
      true,
      true,
      true,
      false
     ]
    }
   ],
   "outcome": null,
   "idea": "",
   "why": "",
   "protocol": [
    {
     "title": "Read the project setup",
     "text": "Build files, the standard in use and sanitiser settings."
    },
    {
     "title": "Check ownership",
     "text": "Flag raw new and delete without a clear owner."
    },
    {
     "title": "Check bounds",
     "text": "Flag indexing and copies with no size check."
    },
    {
     "title": "Check undefined behaviour",
     "text": "Flag signed overflow, uninitialised values and dangling references."
    },
    {
     "title": "Report",
     "text": "Each finding with file and line, severity and the fix."
    }
   ],
   "path": ".github/skills/rlm-cpp-review",
   "files": [],
   "helperScripts": 0,
   "notChecked": true,
   "group": "languages",
   "grade": {
    "grade": "B+",
    "score": "3.95",
    "scores": [
     4,
     4,
     5,
     3,
     3
    ],
    "design": true,
    "rank": 38
   }
  },
  {
   "id": "rlm-crypto-review",
   "goal": "Review cryptographic code: algorithms, modes, key sizes, random numbers, password hashing and certificate che…",
   "cat": "Installed",
   "on": false,
   "use": "Review cryptographic code: algorithms, modes, key sizes, random numbers, password hashing and certificate checks. Use when code encrypts, signs, hashes or generates secrets.",
   "prompt": "Use the rlm-crypto-review skill.",
   "input": "",
   "output": "",
   "pros": [],
   "cons": [],
   "items": [
    "input-1",
    "input-2",
    "input-3",
    "input-4",
    "input-5",
    "input-6"
   ],
   "steps": [
    {
     "layout": "row",
     "note": "Find the crypto. List each place the code encrypts, signs, hashes, generates random values or checks certificates."
    },
    {
     "layout": "chunks",
     "note": "Check algorithms. Flag broken or deprecated algorithms (MD5, SHA-1, DES, RC4) and home-made constructions.",
     "groups": [
      0,
      0,
      1,
      1,
      2,
      2
     ]
    },
    {
     "layout": "parallel",
     "note": "Check modes and keys. Flag ECB mode, a fixed IV or nonce, and keys shorter than current guidance.",
     "groups": [
      0,
      0,
      1,
      1,
      2,
      2
     ],
     "state": [
      "ok",
      "ok",
      "ok",
      "ok",
      "ok",
      "ok"
     ]
    },
    {
     "layout": "funnel",
     "note": "Check random values. Security tokens must come from a cryptographic random source, not a general-purpose one."
    },
    {
     "layout": "gate",
     "note": "Check password hashing. Passwords need a slow, salted hash such as Argon2, scrypt, bcrypt or PBKDF2.",
     "pass": [
      true,
      true,
      true,
      true,
      true,
      false
     ]
    },
    {
     "layout": "doc",
     "note": "Report. List each finding with its location, severity and the fix.",
     "docLabel": "report"
    }
   ],
   "outcome": null,
   "idea": "",
   "why": "",
   "protocol": [
    {
     "title": "Find the crypto",
     "text": "List each place the code encrypts, signs, hashes, generates random values or checks certificates."
    },
    {
     "title": "Check algorithms",
     "text": "Flag broken or deprecated algorithms (MD5, SHA-1, DES, RC4) and home-made constructions."
    },
    {
     "title": "Check modes and keys",
     "text": "Flag ECB mode, a fixed IV or nonce, and keys shorter than current guidance."
    },
    {
     "title": "Check random values",
     "text": "Security tokens must come from a cryptographic random source, not a general-purpose one."
    },
    {
     "title": "Check password hashing",
     "text": "Passwords need a slow, salted hash such as Argon2, scrypt, bcrypt or PBKDF2. Flag fast hashes."
    },
    {
     "title": "Report",
     "text": "List each finding with its location, severity and the fix. Mark what needs a specialist to confirm."
    }
   ],
   "path": ".github/skills/rlm-crypto-review",
   "files": [],
   "helperScripts": 0,
   "notChecked": true,
   "group": "security",
   "grade": {
    "grade": "B+",
    "score": "3.80",
    "scores": [
     4,
     4,
     5,
     2,
     3
    ],
    "design": true,
    "rank": 111
   }
  },
  {
   "id": "rlm-csharp-review",
   "goal": "Review C# code for nullability, async and await, disposal, LINQ pitfalls, input handling and tests.",
   "cat": "Installed",
   "on": false,
   "use": "Review C# code for nullability, async and await, disposal, LINQ pitfalls, input handling and tests. Use when asked to review or harden C# code.",
   "prompt": "Use the rlm-csharp-review skill.",
   "input": "",
   "output": "",
   "pros": [],
   "cons": [],
   "items": [
    "input-1",
    "input-2",
    "input-3",
    "input-4",
    "input-5",
    "input-6"
   ],
   "steps": [
    {
     "layout": "row",
     "note": "Read the project setup. Open the .csproj or .sln files, Directory.Build.props, the analyzer configuration and the target framework."
    },
    {
     "layout": "chunks",
     "note": "Check nullability. Flag `!` (null-forgiving) used where a real null is possible, and public members without nullable annotations.",
     "groups": [
      0,
      0,
      1,
      1,
      2,
      2
     ]
    },
    {
     "layout": "parallel",
     "note": "Check async code. Look for `async void` outside event handlers, `.Result` or `.Wait()` that can deadlock, missing `ConfigureAwait` where a library is consumed, and `CancellationToken` not passed through.",
     "groups": [
      0,
      0,
      1,
      1,
      2,
      2
     ],
     "state": [
      "ok",
      "ok",
      "ok",
      "ok",
      "ok",
      "ok"
     ]
    },
    {
     "layout": "funnel",
     "note": "Check disposal. `IDisposable` values, streams, `HttpClient` created per request, and database connections must be disposed, normally with `using`."
    },
    {
     "layout": "gate",
     "note": "Check LINQ and collections. Flag multiple enumeration of a lazy query, `First()` where `FirstOrDefault()` is needed, and string building in loops.",
     "pass": [
      true,
      true,
      true,
      true,
      true,
      false
     ]
    },
    {
     "layout": "doc",
     "note": "Check input and output. Flag untrusted data used in SQL built as strings, in `Process.Start` arguments, in file paths, and in deserialisation with `BinaryFormatter` or unsafe type handling.",
     "docLabel": "report"
    }
   ],
   "outcome": null,
   "idea": "",
   "why": "",
   "protocol": [
    {
     "title": "Read the project setup",
     "text": "Open the .csproj or .sln files, Directory.Build.props, the analyzer configuration and the target framework. Note whether nullable reference types are enabled."
    },
    {
     "title": "Check nullability",
     "text": "Flag `!` (null-forgiving) used where a real null is possible, and public members without nullable annotations."
    },
    {
     "title": "Check async code",
     "text": "Look for `async void` outside event handlers, `.Result` or `.Wait()` that can deadlock, missing `ConfigureAwait` where a library is consumed, and `CancellationToken` not passed through."
    },
    {
     "title": "Check disposal",
     "text": "`IDisposable` values, streams, `HttpClient` created per request, and database connections must be disposed, normally with `using`."
    },
    {
     "title": "Check LINQ and collections",
     "text": "Flag multiple enumeration of a lazy query, `First()` where `FirstOrDefault()` is needed, and string building in loops."
    },
    {
     "title": "Check input and output",
     "text": "Flag untrusted data used in SQL built as strings, in `Process.Start` arguments, in file paths, and in deserialisation with `BinaryFormatter` or unsafe type handling."
    },
    {
     "title": "Check tests",
     "text": "Find public methods and branches with no test, and assertions that cannot fail."
    },
    {
     "title": "Report",
     "text": "List each finding as `file:line`, with severity (high, medium or low), the problem and the fix. Mark what you did not run."
    }
   ],
   "path": ".github/skills/rlm-csharp-review",
   "files": [],
   "helperScripts": 0,
   "notChecked": true,
   "group": "dotnet",
   "grade": {
    "grade": "B+",
    "score": "3.85",
    "scores": [
     4,
     4,
     4,
     3,
     4
    ],
    "design": true,
    "rank": 57
   }
  },
  {
   "id": "rlm-csp-review",
   "goal": "Content security policy review: script sources, unsafe directives and report-only rollout.",
   "cat": "Installed",
   "on": false,
   "use": "Content security policy review: script sources, unsafe directives and report-only rollout. Use when a page or header policy is set or changed.",
   "prompt": "Use the rlm-csp-review skill.",
   "input": "",
   "output": "",
   "pros": [],
   "cons": [],
   "items": [
    "input-1",
    "input-2",
    "input-3",
    "input-4",
    "input-5",
    "input-6"
   ],
   "steps": [
    {
     "layout": "row",
     "note": "Read the policy. List each directive and its sources."
    },
    {
     "layout": "chunks",
     "note": "Flag unsafe directives. 'unsafe-inline' and 'unsafe-eval' weaken the policy.",
     "groups": [
      0,
      0,
      1,
      1,
      2,
      2
     ]
    },
    {
     "layout": "parallel",
     "note": "Check sources. Flag wildcard and overly broad host sources.",
     "groups": [
      0,
      0,
      1,
      1,
      2,
      2
     ],
     "state": [
      "ok",
      "ok",
      "ok",
      "ok",
      "ok",
      "ok"
     ]
    },
    {
     "layout": "funnel",
     "note": "Check rollout. A new policy should run in report-only mode first."
    },
    {
     "layout": "gate",
     "note": "Report. Each directive with its gap and the fix.",
     "pass": [
      true,
      true,
      true,
      true,
      true,
      false
     ]
    }
   ],
   "outcome": null,
   "idea": "",
   "why": "",
   "protocol": [
    {
     "title": "Read the policy",
     "text": "List each directive and its sources."
    },
    {
     "title": "Flag unsafe directives",
     "text": "'unsafe-inline' and 'unsafe-eval' weaken the policy."
    },
    {
     "title": "Check sources",
     "text": "Flag wildcard and overly broad host sources."
    },
    {
     "title": "Check rollout",
     "text": "A new policy should run in report-only mode first."
    },
    {
     "title": "Report",
     "text": "Each directive with its gap and the fix."
    }
   ],
   "path": ".github/skills/rlm-csp-review",
   "files": [],
   "helperScripts": 0,
   "notChecked": true,
   "group": "web",
   "grade": {
    "grade": "B+",
    "score": "3.85",
    "scores": [
     4,
     4,
     4,
     3,
     4
    ],
    "design": true,
    "rank": 58
   }
  },
  {
   "id": "rlm-csrf-review",
   "goal": "CSRF review: state-changing requests protected by tokens, same-site cookies or origin checks.",
   "cat": "Installed",
   "on": false,
   "use": "CSRF review: state-changing requests protected by tokens, same-site cookies or origin checks. Use when code accepts requests that change data from a browser session.",
   "prompt": "Use the rlm-csrf-review skill.",
   "input": "",
   "output": "",
   "pros": [],
   "cons": [],
   "items": [
    "input-1",
    "input-2",
    "input-3",
    "input-4",
    "input-5",
    "input-6"
   ],
   "steps": [
    {
     "layout": "row",
     "note": "List the state changes. Find every POST, PUT, PATCH and DELETE that uses cookies."
    },
    {
     "layout": "chunks",
     "note": "Check tokens. Each form and API call needs an anti-forgery token or equivalent.",
     "groups": [
      0,
      0,
      1,
      1,
      2,
      2
     ]
    },
    {
     "layout": "parallel",
     "note": "Check cookies. Session cookies need SameSite and Secure attributes.",
     "groups": [
      0,
      0,
      1,
      1,
      2,
      2
     ],
     "state": [
      "ok",
      "ok",
      "ok",
      "ok",
      "ok",
      "ok"
     ]
    },
    {
     "layout": "funnel",
     "note": "Check origin. Flag endpoints that accept requests from any origin."
    },
    {
     "layout": "gate",
     "note": "Report. Each endpoint with its protection, the gap and the fix.",
     "pass": [
      true,
      true,
      true,
      true,
      true,
      false
     ]
    }
   ],
   "outcome": null,
   "idea": "",
   "why": "",
   "protocol": [
    {
     "title": "List the state changes",
     "text": "Find every POST, PUT, PATCH and DELETE that uses cookies."
    },
    {
     "title": "Check tokens",
     "text": "Each form and API call needs an anti-forgery token or equivalent."
    },
    {
     "title": "Check cookies",
     "text": "Session cookies need SameSite and Secure attributes."
    },
    {
     "title": "Check origin",
     "text": "Flag endpoints that accept requests from any origin."
    },
    {
     "title": "Report",
     "text": "Each endpoint with its protection, the gap and the fix."
    }
   ],
   "path": ".github/skills/rlm-csrf-review",
   "files": [],
   "helperScripts": 0,
   "notChecked": true,
   "group": "security",
   "grade": {
    "grade": "B+",
    "score": "3.85",
    "scores": [
     4,
     4,
     4,
     3,
     4
    ],
    "design": true,
    "rank": 59
   }
  },
  {
   "id": "rlm-cve-prioritisation",
   "goal": "Rank known vulnerabilities (CVEs) by exploitability, exposure and fix availability, so the team fixes the ris…",
   "cat": "Installed",
   "on": false,
   "use": "Rank known vulnerabilities (CVEs) by exploitability, exposure and fix availability, so the team fixes the riskiest first. Use when a list of CVEs needs an order of work.",
   "prompt": "Use the rlm-cve-prioritisation skill.",
   "input": "",
   "output": "",
   "pros": [],
   "cons": [],
   "items": [
    "input-1",
    "input-2",
    "input-3",
    "input-4",
    "input-5",
    "input-6"
   ],
   "steps": [
    {
     "layout": "row",
     "note": "Read the list. Take the CVEs as given, with the affected package and version."
    },
    {
     "layout": "chunks",
     "note": "Check exploitability. Note whether a public exploit exists and whether the vulnerable function is reachable from the code.",
     "groups": [
      0,
      0,
      1,
      1,
      2,
      2
     ]
    },
    {
     "layout": "parallel",
     "note": "Check exposure. Internet-facing and privileged components rank higher than internal or development-only ones.",
     "groups": [
      0,
      0,
      1,
      1,
      2,
      2
     ],
     "state": [
      "ok",
      "ok",
      "ok",
      "ok",
      "ok",
      "ok"
     ]
    },
    {
     "layout": "funnel",
     "note": "Check the fix. Note the first fixed version and whether the fix is a major, minor or patch change."
    },
    {
     "layout": "gate",
     "note": "Rank. Order by exploitability and exposure first, then by severity score.",
     "pass": [
      true,
      true,
      true,
      true,
      true,
      false
     ]
    },
    {
     "layout": "doc",
     "note": "Report. A ranked table: rank, CVE, component, exposure, exploit status, fix and effort.",
     "docLabel": "report"
    }
   ],
   "outcome": null,
   "idea": "",
   "why": "",
   "protocol": [
    {
     "title": "Read the list",
     "text": "Take the CVEs as given, with the affected package and version."
    },
    {
     "title": "Check exploitability",
     "text": "Note whether a public exploit exists and whether the vulnerable function is reachable from the code."
    },
    {
     "title": "Check exposure",
     "text": "Internet-facing and privileged components rank higher than internal or development-only ones."
    },
    {
     "title": "Check the fix",
     "text": "Note the first fixed version and whether the fix is a major, minor or patch change."
    },
    {
     "title": "Rank",
     "text": "Order by exploitability and exposure first, then by severity score. Group CVEs one upgrade fixes."
    },
    {
     "title": "Report",
     "text": "A ranked table: rank, CVE, component, exposure, exploit status, fix and effort. Say that the ranking is advice for the owner to confirm."
    }
   ],
   "path": ".github/skills/rlm-cve-prioritisation",
   "files": [],
   "helperScripts": 0,
   "notChecked": true,
   "group": "vulnerability",
   "grade": {
    "grade": "A-",
    "score": "4.20",
    "scores": [
     5,
     4,
     4,
     3,
     4
    ],
    "design": true,
    "rank": 14
   }
  },
  {
   "id": "rlm-dart-review",
   "goal": "Dart review: null safety, async errors, platform channels and secure storage.",
   "cat": "Installed",
   "on": false,
   "use": "Dart review: null safety, async errors, platform channels and secure storage. Use when asked to review a Dart or Flutter project or module.",
   "prompt": "Use the rlm-dart-review skill.",
   "input": "",
   "output": "",
   "pros": [],
   "cons": [],
   "items": [
    "input-1",
    "input-2",
    "input-3",
    "input-4",
    "input-5",
    "input-6"
   ],
   "steps": [
    {
     "layout": "row",
     "note": "Read the project setup. Pubspec file, the SDK constraint and the analyser options."
    },
    {
     "layout": "chunks",
     "note": "Check null safety. Flag bang operators on values that can be null.",
     "groups": [
      0,
      0,
      1,
      1,
      2,
      2
     ]
    },
    {
     "layout": "parallel",
     "note": "Check async. Flag futures that are not awaited or whose errors are dropped.",
     "groups": [
      0,
      0,
      1,
      1,
      2,
      2
     ],
     "state": [
      "ok",
      "ok",
      "ok",
      "ok",
      "ok",
      "ok"
     ]
    },
    {
     "layout": "funnel",
     "note": "Check channels. Flag platform channel data that is not validated."
    },
    {
     "layout": "gate",
     "note": "Report. Each finding with file and line, severity and the fix.",
     "pass": [
      true,
      true,
      true,
      true,
      true,
      false
     ]
    }
   ],
   "outcome": null,
   "idea": "",
   "why": "",
   "protocol": [
    {
     "title": "Read the project setup",
     "text": "Pubspec file, the SDK constraint and the analyser options."
    },
    {
     "title": "Check null safety",
     "text": "Flag bang operators on values that can be null."
    },
    {
     "title": "Check async",
     "text": "Flag futures that are not awaited or whose errors are dropped."
    },
    {
     "title": "Check channels",
     "text": "Flag platform channel data that is not validated."
    },
    {
     "title": "Report",
     "text": "Each finding with file and line, severity and the fix."
    }
   ],
   "path": ".github/skills/rlm-dart-review",
   "files": [],
   "helperScripts": 0,
   "notChecked": true,
   "group": "languages",
   "grade": {
    "grade": "B+",
    "score": "3.80",
    "scores": [
     4,
     4,
     3,
     4,
     4
    ],
    "design": true,
    "rank": 112
   }
  },
  {
   "id": "rlm-data-contract-review",
   "goal": "Data contract review: the shape, meaning and change rules agreed between the producer and its readers.",
   "cat": "Installed",
   "on": false,
   "use": "Data contract review: the shape, meaning and change rules agreed between the producer and its readers. Use when a team publishes data that others read.",
   "prompt": "Use the rlm-data-contract-review skill.",
   "input": "",
   "output": "",
   "pros": [],
   "cons": [],
   "items": [
    "input-1",
    "input-2",
    "input-3",
    "input-4",
    "input-5",
    "input-6"
   ],
   "steps": [
    {
     "layout": "row",
     "note": "List the producer and the readers, and the data they share."
    },
    {
     "layout": "chunks",
     "note": "Check the shape. Confirm each field is written down with its type and meaning.",
     "groups": [
      0,
      0,
      1,
      1,
      2,
      2
     ]
    },
    {
     "layout": "parallel",
     "note": "Check the change rules. Confirm how and when changes are announced.",
     "groups": [
      0,
      0,
      1,
      1,
      2,
      2
     ],
     "state": [
      "ok",
      "ok",
      "ok",
      "ok",
      "ok",
      "ok"
     ]
    },
    {
     "layout": "funnel",
     "note": "Check the guarantees. Freshness, completeness and what happens on failure."
    },
    {
     "layout": "gate",
     "note": "Report. Each agreement with its gaps and the missing rule.",
     "pass": [
      true,
      true,
      true,
      true,
      true,
      false
     ]
    }
   ],
   "outcome": null,
   "idea": "",
   "why": "",
   "protocol": [
    {
     "title": "List the producer and the readers, and the data they share",
     "text": ""
    },
    {
     "title": "Check the shape",
     "text": "Confirm each field is written down with its type and meaning."
    },
    {
     "title": "Check the change rules",
     "text": "Confirm how and when changes are announced."
    },
    {
     "title": "Check the guarantees",
     "text": "Freshness, completeness and what happens on failure."
    },
    {
     "title": "Report",
     "text": "Each agreement with its gaps and the missing rule."
    }
   ],
   "path": ".github/skills/rlm-data-contract-review",
   "files": [],
   "helperScripts": 0,
   "notChecked": true,
   "group": "engineering",
   "grade": {
    "grade": "B+",
    "score": "3.75",
    "scores": [
     4,
     4,
     4,
     3,
     3
    ],
    "design": true,
    "rank": 128
   }
  },
  {
   "id": "rlm-data-lineage-review",
   "goal": "Data lineage review: where each dataset comes from, what it is derived from, and who uses it.",
   "cat": "Installed",
   "on": false,
   "use": "Data lineage review: where each dataset comes from, what it is derived from, and who uses it. Use when a report, model or dataset is used for a decision.",
   "prompt": "Use the rlm-data-lineage-review skill.",
   "input": "",
   "output": "",
   "pros": [],
   "cons": [],
   "items": [
    "input-1",
    "input-2",
    "input-3",
    "input-4",
    "input-5",
    "input-6"
   ],
   "steps": [
    {
     "layout": "row",
     "note": "List the datasets in scope and their sources."
    },
    {
     "layout": "chunks",
     "note": "Trace each one back to its source, step by step.",
     "groups": [
      0,
      0,
      1,
      1,
      2,
      2
     ]
    },
    {
     "layout": "parallel",
     "note": "Check the owners. Each dataset and each source has a named owner.",
     "groups": [
      0,
      0,
      1,
      1,
      2,
      2
     ],
     "state": [
      "ok",
      "ok",
      "ok",
      "ok",
      "ok",
      "ok"
     ]
    },
    {
     "layout": "funnel",
     "note": "Check the consumers. Note every report and model that uses it."
    },
    {
     "layout": "gate",
     "note": "Report. The lineage map, the gaps and the datasets with no owner.",
     "pass": [
      true,
      true,
      true,
      true,
      true,
      false
     ]
    }
   ],
   "outcome": null,
   "idea": "",
   "why": "",
   "protocol": [
    {
     "title": "List the datasets in scope and their sources",
     "text": ""
    },
    {
     "title": "Trace each one back to its source, step by step",
     "text": ""
    },
    {
     "title": "Check the owners",
     "text": "Each dataset and each source has a named owner."
    },
    {
     "title": "Check the consumers",
     "text": "Note every report and model that uses it."
    },
    {
     "title": "Report",
     "text": "The lineage map, the gaps and the datasets with no owner."
    }
   ],
   "path": ".github/skills/rlm-data-lineage-review",
   "files": [],
   "helperScripts": 0,
   "notChecked": true,
   "group": "compliance",
   "grade": {
    "grade": "B+",
    "score": "3.75",
    "scores": [
     4,
     4,
     4,
     3,
     3
    ],
    "design": true,
    "rank": 129
   }
  },
  {
   "id": "rlm-data-quality-review",
   "goal": "Data quality checks review: completeness, validity, uniqueness and freshness are tested where data is loaded.",
   "cat": "Installed",
   "on": false,
   "use": "Data quality checks review: completeness, validity, uniqueness and freshness are tested where data is loaded. Use when a pipeline or service loads or transforms data.",
   "prompt": "Use the rlm-data-quality-review skill.",
   "input": "",
   "output": "",
   "pros": [],
   "cons": [],
   "items": [
    "input-1",
    "input-2",
    "input-3",
    "input-4",
    "input-5",
    "input-6"
   ],
   "steps": [
    {
     "layout": "row",
     "note": "List the datasets. Each table or file, its source and its consumers."
    },
    {
     "layout": "chunks",
     "note": "Check the rules. Confirm checks exist for completeness, validity, uniqueness and freshness.",
     "groups": [
      0,
      0,
      1,
      1,
      2,
      2
     ]
    },
    {
     "layout": "parallel",
     "note": "Check the failure. Flag loads that pass bad data without a stop or an alert.",
     "groups": [
      0,
      0,
      1,
      1,
      2,
      2
     ],
     "state": [
      "ok",
      "ok",
      "ok",
      "ok",
      "ok",
      "ok"
     ]
    },
    {
     "layout": "funnel",
     "note": "Check the thresholds. Each check needs a stated limit."
    },
    {
     "layout": "gate",
     "note": "Report. Each dataset with its checks, the gaps and the action when a check fails.",
     "pass": [
      true,
      true,
      true,
      true,
      true,
      false
     ]
    }
   ],
   "outcome": null,
   "idea": "",
   "why": "",
   "protocol": [
    {
     "title": "List the datasets",
     "text": "Each table or file, its source and its consumers."
    },
    {
     "title": "Check the rules",
     "text": "Confirm checks exist for completeness, validity, uniqueness and freshness."
    },
    {
     "title": "Check the failure",
     "text": "Flag loads that pass bad data without a stop or an alert."
    },
    {
     "title": "Check the thresholds",
     "text": "Each check needs a stated limit."
    },
    {
     "title": "Report",
     "text": "Each dataset with its checks, the gaps and the action when a check fails."
    }
   ],
   "path": ".github/skills/rlm-data-quality-review",
   "files": [],
   "helperScripts": 0,
   "notChecked": true,
   "group": "engineering",
   "grade": {
    "grade": "B+",
    "score": "3.85",
    "scores": [
     4,
     4,
     4,
     3,
     4
    ],
    "design": true,
    "rank": 60
   }
  },
  {
   "id": "rlm-data-retention-check",
   "goal": "Data retention check: each store's keep period, its deletion job and whether backups follow the same rule.",
   "cat": "Installed",
   "on": false,
   "use": "Data retention check: each store's keep period, its deletion job and whether backups follow the same rule. Use when a store holds data that has a retention rule.",
   "prompt": "Use the rlm-data-retention-check skill.",
   "input": "",
   "output": "",
   "pros": [],
   "cons": [],
   "items": [
    "input-1",
    "input-2",
    "input-3",
    "input-4",
    "input-5",
    "input-6"
   ],
   "steps": [
    {
     "layout": "row",
     "note": "List the stores and the retention rule for each."
    },
    {
     "layout": "chunks",
     "note": "Check the deletion job. Confirm it runs, and what it deletes.",
     "groups": [
      0,
      0,
      1,
      1,
      2,
      2
     ]
    },
    {
     "layout": "parallel",
     "note": "Check the backups. Confirm deleted data is removed from backups on a stated cycle.",
     "groups": [
      0,
      0,
      1,
      1,
      2,
      2
     ],
     "state": [
      "ok",
      "ok",
      "ok",
      "ok",
      "ok",
      "ok"
     ]
    },
    {
     "layout": "funnel",
     "note": "Check the evidence. Each run should leave a record."
    },
    {
     "layout": "gate",
     "note": "Report. Each store with its rule, the job, the backup position and the gap.",
     "pass": [
      true,
      true,
      true,
      true,
      true,
      false
     ]
    }
   ],
   "outcome": null,
   "idea": "",
   "why": "",
   "protocol": [
    {
     "title": "List the stores and the retention rule for each",
     "text": ""
    },
    {
     "title": "Check the deletion job",
     "text": "Confirm it runs, and what it deletes."
    },
    {
     "title": "Check the backups",
     "text": "Confirm deleted data is removed from backups on a stated cycle."
    },
    {
     "title": "Check the evidence",
     "text": "Each run should leave a record."
    },
    {
     "title": "Report",
     "text": "Each store with its rule, the job, the backup position and the gap."
    }
   ],
   "path": ".github/skills/rlm-data-retention-check",
   "files": [],
   "helperScripts": 0,
   "notChecked": true,
   "group": "compliance",
   "grade": {
    "grade": "B+",
    "score": "3.85",
    "scores": [
     4,
     4,
     4,
     3,
     4
    ],
    "design": true,
    "rank": 61
   }
  },
  {
   "id": "rlm-data-subject-request-check",
   "goal": "Data subject request check: whether the code can find, export, correct and delete one person's data.",
   "cat": "Installed",
   "on": false,
   "use": "Data subject request check: whether the code can find, export, correct and delete one person's data. Use when a request to access, correct or delete personal data arrives.",
   "prompt": "Use the rlm-data-subject-request-check skill.",
   "input": "",
   "output": "",
   "pros": [],
   "cons": [],
   "items": [
    "input-1",
    "input-2",
    "input-3",
    "input-4",
    "input-5",
    "input-6"
   ],
   "steps": [
    {
     "layout": "row",
     "note": "List the stores that hold personal data."
    },
    {
     "layout": "chunks",
     "note": "Check find. Each store can be searched by the person's identifier.",
     "groups": [
      0,
      0,
      1,
      1,
      2,
      2
     ]
    },
    {
     "layout": "parallel",
     "note": "Check export. Each store can produce the person's data in a usable format.",
     "groups": [
      0,
      0,
      1,
      1,
      2,
      2
     ],
     "state": [
      "ok",
      "ok",
      "ok",
      "ok",
      "ok",
      "ok"
     ]
    },
    {
     "layout": "funnel",
     "note": "Check delete. Each store can delete or anonymise the person's data."
    },
    {
     "layout": "gate",
     "note": "Report. The stores, the gaps and the steps to complete a request.",
     "pass": [
      true,
      true,
      true,
      true,
      true,
      false
     ]
    }
   ],
   "outcome": null,
   "idea": "",
   "why": "",
   "protocol": [
    {
     "title": "List the stores that hold personal data",
     "text": ""
    },
    {
     "title": "Check find",
     "text": "Each store can be searched by the person's identifier."
    },
    {
     "title": "Check export",
     "text": "Each store can produce the person's data in a usable format."
    },
    {
     "title": "Check delete",
     "text": "Each store can delete or anonymise the person's data."
    },
    {
     "title": "Report",
     "text": "The stores, the gaps and the steps to complete a request."
    }
   ],
   "path": ".github/skills/rlm-data-subject-request-check",
   "files": [],
   "helperScripts": 0,
   "notChecked": true,
   "group": "compliance",
   "grade": {
    "grade": "B+",
    "score": "3.75",
    "scores": [
     4,
     4,
     4,
     3,
     3
    ],
    "design": true,
    "rank": 130
   }
  },
  {
   "id": "rlm-dataset-pii-check",
   "goal": "Dataset personal data check: personal data found in datasets, samples and exports, and where it is kept.",
   "cat": "Installed",
   "on": false,
   "use": "Dataset personal data check: personal data found in datasets, samples and exports, and where it is kept. Use when a dataset, sample or export is shared or kept.",
   "prompt": "Use the rlm-dataset-pii-check skill.",
   "input": "",
   "output": "",
   "pros": [],
   "cons": [],
   "items": [
    "input-1",
    "input-2",
    "input-3",
    "input-4",
    "input-5",
    "input-6"
   ],
   "steps": [
    {
     "layout": "row",
     "note": "List the datasets, samples and exports in scope."
    },
    {
     "layout": "chunks",
     "note": "Find personal data. Names, contact details, identifiers and location in each field.",
     "groups": [
      0,
      0,
      1,
      1,
      2,
      2
     ]
    },
    {
     "layout": "parallel",
     "note": "Check the copies. Flag personal data in test data, samples and exports shared outside the team.",
     "groups": [
      0,
      0,
      1,
      1,
      2,
      2
     ],
     "state": [
      "ok",
      "ok",
      "ok",
      "ok",
      "ok",
      "ok"
     ]
    },
    {
     "layout": "funnel",
     "note": "Check the controls. Each copy needs a purpose, a restriction and a deletion path."
    },
    {
     "layout": "gate",
     "note": "Report. Each dataset with its personal data, the copies and the gaps.",
     "pass": [
      true,
      true,
      true,
      true,
      true,
      false
     ]
    }
   ],
   "outcome": null,
   "idea": "",
   "why": "",
   "protocol": [
    {
     "title": "List the datasets, samples and exports in scope",
     "text": ""
    },
    {
     "title": "Find personal data",
     "text": "Names, contact details, identifiers and location in each field."
    },
    {
     "title": "Check the copies",
     "text": "Flag personal data in test data, samples and exports shared outside the team."
    },
    {
     "title": "Check the controls",
     "text": "Each copy needs a purpose, a restriction and a deletion path."
    },
    {
     "title": "Report",
     "text": "Each dataset with its personal data, the copies and the gaps. This is a map for review, not a legal opinion."
    }
   ],
   "path": ".github/skills/rlm-dataset-pii-check",
   "files": [],
   "helperScripts": 0,
   "notChecked": true,
   "group": "compliance",
   "grade": {
    "grade": "B",
    "score": "3.60",
    "scores": [
     4,
     4,
     4,
     2,
     3
    ],
    "design": true,
    "rank": 185
   }
  },
  {
   "id": "rlm-db-migration-safety",
   "goal": "Review database schema migrations before they run in production: table locks and rewrites, destructive or irr…",
   "cat": "Installed",
   "on": false,
   "use": "Review database schema migrations before they run in production: table locks and rewrites, destructive or irreversible changes, unsafe backfills, and deploy-order breakage between code and schema. Use when a branch or pull request adds or changes a migration file.",
   "prompt": "Use the rlm-db-migration-safety skill.",
   "input": "",
   "output": "",
   "pros": [],
   "cons": [],
   "items": [
    "input-1",
    "input-2",
    "input-3",
    "input-4",
    "input-5",
    "input-6"
   ],
   "steps": [
    {
     "layout": "row",
     "note": "Inspect. Run `python3 <skill>/scripts/rlm_corpus.py scan <corpus>`."
    },
    {
     "layout": "chunks",
     "note": "Partition. Run `WORK=$(mktemp -d)`, then `python3 <skill>/scripts/rlm_corpus.py chunk <corpus> \"$WORK/chunks\"`.",
     "groups": [
      0,
      0,
      1,
      1,
      2,
      2
     ]
    },
    {
     "layout": "parallel",
     "note": "Map. For each chunk, run a fresh sub-task (a subagent if you can start one) that sees only that chunk file and the \"Chunk task\" below.",
     "groups": [
      0,
      0,
      1,
      1,
      2,
      2
     ],
     "state": [
      "ok",
      "ok",
      "ok",
      "ok",
      "ok",
      "ok"
     ]
    },
    {
     "layout": "funnel",
     "note": "Reduce. Run `python3 <skill>/scripts/rlm_corpus.py merge \"$WORK/out\" --out \"$WORK/merged.json\"`."
    },
    {
     "layout": "gate",
     "note": "Verify. Re-read each cited line.",
     "pass": [
      true,
      true,
      true,
      true,
      true,
      false
     ]
    },
    {
     "layout": "doc",
     "note": "Report. Write the report in the format below.",
     "docLabel": "report"
    }
   ],
   "outcome": null,
   "idea": "",
   "why": "",
   "protocol": [
    {
     "title": "Inspect",
     "text": "Run `python3 <skill>/scripts/rlm_corpus.py scan <corpus>`. Note the file count, line count and top-level folders. If the corpus is very large, agree the scope with the user, then narrow it with `--include 'migrations/*'` (repeatable) on every command. Files over 20 MB are skipped; `--max-bytes N` changes the limit. Report what `scan` lists as skipped."
    },
    {
     "title": "Partition",
     "text": "Run `WORK=$(mktemp -d)`, then `python3 <skill>/scripts/rlm_corpus.py chunk <corpus> \"$WORK/chunks\"`. Chunks are limited to 800 lines and 100,000 characters each, and are cut between definitions where possible. Each `chunk_NNN.md` holds the data notice and labelled file sections. `manifest.json` lists the chunks."
    },
    {
     "title": "Map",
     "text": "For each chunk, run a fresh sub-task (a subagent if you can start one) that sees only that chunk file and the \"Chunk task\" below. It writes `\"$WORK/out/<chunk>.out.md\"`. If you cannot start sub-tasks, run `python3 <skill>/scripts/rlm_corpus.py pending \"$WORK/chunks\" \"$WORK/out\"`. It lists the chunks that still have no output. Process the first one: read it, write its output, then run `pending` again. Repeat until nothing is pending. Never hold all chunks in context at once."
    },
    {
     "title": "Reduce",
     "text": "Run `python3 <skill>/scripts/rlm_corpus.py merge \"$WORK/out\" --out \"$WORK/merged.json\"`. If it lists `failed_outputs`, re-run those chunks. A missing or invalid output is not \"no findings\". Checks that span files (a duplicate across manifests, a route missing from a contract, a pattern repeated across chunks) are done on the merged list in this step. If the merged list is still too large to read, repeat steps 2 to 4 on the findings."
    },
    {
     "title": "Verify",
     "text": "Re-read each cited line. Where a rule depends on the engine version or table size, report the finding as conditional and say what would decide it. Check the deploy order of the whole change in the reduce step. Confirm each engine rule against the documentation for the version the user named."
    },
    {
     "title": "Report",
     "text": "Write the report in the format below."
    },
    {
     "title": "Clean up",
     "text": "Delete `$WORK` after the report is delivered."
    }
   ],
   "path": ".github/skills/rlm-db-migration-safety",
   "files": [
    "scripts/rlm_corpus.py"
   ],
   "helperScripts": 1,
   "notChecked": true,
   "group": "engineering",
   "grade": {
    "grade": "A-",
    "score": "4.25",
    "scores": [
     4,
     5,
     5,
     3,
     4
    ],
    "design": true,
    "rank": 11
   }
  },
  {
   "id": "rlm-dead-code-review",
   "goal": "Dead code review: unused functions, unreachable branches and commented-out blocks.",
   "cat": "Installed",
   "on": false,
   "use": "Dead code review: unused functions, unreachable branches and commented-out blocks. Use when a change removes or leaves behind code.",
   "prompt": "Use the rlm-dead-code-review skill.",
   "input": "",
   "output": "",
   "pros": [],
   "cons": [],
   "items": [
    "input-1",
    "input-2",
    "input-3",
    "input-4",
    "input-5",
    "input-6"
   ],
   "steps": [
    {
     "layout": "row",
     "note": "Find unused. List functions, types and imports with no caller."
    },
    {
     "layout": "chunks",
     "note": "Find unreachable. Flag branches that cannot run given the checks before them.",
     "groups": [
      0,
      0,
      1,
      1,
      2,
      2
     ]
    },
    {
     "layout": "parallel",
     "note": "Find commented-out blocks left in the code.",
     "groups": [
      0,
      0,
      1,
      1,
      2,
      2
     ],
     "state": [
      "ok",
      "ok",
      "ok",
      "ok",
      "ok",
      "ok"
     ]
    },
    {
     "layout": "funnel",
     "note": "Confirm before removal. Check for reflection, plugins or external callers."
    },
    {
     "layout": "gate",
     "note": "Report. Each item with file and line, and whether it is safe to remove.",
     "pass": [
      true,
      true,
      true,
      true,
      true,
      false
     ]
    }
   ],
   "outcome": null,
   "idea": "",
   "why": "",
   "protocol": [
    {
     "title": "Find unused",
     "text": "List functions, types and imports with no caller."
    },
    {
     "title": "Find unreachable",
     "text": "Flag branches that cannot run given the checks before them."
    },
    {
     "title": "Find commented-out blocks left in the code",
     "text": ""
    },
    {
     "title": "Confirm before removal",
     "text": "Check for reflection, plugins or external callers."
    },
    {
     "title": "Report",
     "text": "Each item with file and line, and whether it is safe to remove."
    }
   ],
   "path": ".github/skills/rlm-dead-code-review",
   "files": [],
   "helperScripts": 0,
   "notChecked": true,
   "group": "review",
   "grade": {
    "grade": "B-",
    "score": "3.25",
    "scores": [
     3,
     3,
     3,
     4,
     4
    ],
    "design": true,
    "rank": 210
   }
  },
  {
   "id": "rlm-dependabot-triage",
   "goal": "Triage GitHub Dependabot alerts: exposure, the fixed version, breaking-change risk and the order to fix them.",
   "cat": "Installed",
   "on": false,
   "use": "Triage GitHub Dependabot alerts: exposure, the fixed version, breaking-change risk and the order to fix them. Use when Dependabot alerts or pull requests need a decision.",
   "prompt": "Use the rlm-dependabot-triage skill.",
   "input": "",
   "output": "",
   "pros": [],
   "cons": [],
   "items": [
    "input-1",
    "input-2",
    "input-3",
    "input-4",
    "input-5",
    "input-6"
   ],
   "steps": [
    {
     "layout": "row",
     "note": "Read the alerts. Use the Dependabot alerts the user exports or shows: package, version in use, severity, advisory and the fixed version."
    },
    {
     "layout": "chunks",
     "note": "Check exposure. For each alert, is the package a direct or transitive dependency? Is the code path reachable from outside? Is it only a development dependency?",
     "groups": [
      0,
      0,
      1,
      1,
      2,
      2
     ]
    },
    {
     "layout": "parallel",
     "note": "Check the fix. Note the first fixed version, whether it is a major, minor or patch change, and whether a lock file or override is needed.",
     "groups": [
      0,
      0,
      1,
      1,
      2,
      2
     ],
     "state": [
      "ok",
      "ok",
      "ok",
      "ok",
      "ok",
      "ok"
     ]
    },
    {
     "layout": "funnel",
     "note": "Check breaking-change risk. Read the release notes for the fixed version, and look for changed APIs the code uses."
    },
    {
     "layout": "gate",
     "note": "Rank and group. Order by exposure first, then severity.",
     "pass": [
      true,
      true,
      true,
      true,
      true,
      false
     ]
    },
    {
     "layout": "doc",
     "note": "Check Dependabot pull requests. Each automated pull request needs its tests run.",
     "docLabel": "report"
    }
   ],
   "outcome": null,
   "idea": "",
   "why": "",
   "protocol": [
    {
     "title": "Read the alerts",
     "text": "Use the Dependabot alerts the user exports or shows: package, version in use, severity, advisory and the fixed version. Do not invent alerts."
    },
    {
     "title": "Check exposure",
     "text": "For each alert, is the package a direct or transitive dependency? Is the code path reachable from outside? Is it only a development dependency?"
    },
    {
     "title": "Check the fix",
     "text": "Note the first fixed version, whether it is a major, minor or patch change, and whether a lock file or override is needed."
    },
    {
     "title": "Check breaking-change risk",
     "text": "Read the release notes for the fixed version, and look for changed APIs the code uses."
    },
    {
     "title": "Rank and group",
     "text": "Order by exposure first, then severity. Group alerts that one upgrade fixes together."
    },
    {
     "title": "Check Dependabot pull requests",
     "text": "Each automated pull request needs its tests run. Flag auto-merge on major versions."
    },
    {
     "title": "Report",
     "text": "A table: alert, package, current version, fixed version, exposure, breaking risk, recommended action. Mark what you could not verify, such as runtime use."
    }
   ],
   "path": ".github/skills/rlm-dependabot-triage",
   "files": [],
   "helperScripts": 0,
   "notChecked": true,
   "group": "vulnerability",
   "grade": {
    "grade": "B+",
    "score": "3.85",
    "scores": [
     4,
     4,
     4,
     3,
     4
    ],
    "design": true,
    "rank": 62
   }
  },
  {
   "id": "rlm-dependency-audit",
   "goal": "Audit dependency manifests and lock files for known vulnerabilities, end-of-life or unmaintained packages, ri…",
   "cat": "Installed",
   "on": false,
   "use": "Audit dependency manifests and lock files for known vulnerabilities, end-of-life or unmaintained packages, risky licenses and duplicate versions, with a prioritized upgrade plan. Use when preparing a release or when asked about supply-chain risk.",
   "prompt": "Use the rlm-dependency-audit skill.",
   "input": "",
   "output": "",
   "pros": [],
   "cons": [],
   "items": [
    "input-1",
    "input-2",
    "input-3",
    "input-4",
    "input-5",
    "input-6"
   ],
   "steps": [
    {
     "layout": "row",
     "note": "Inspect. Run `python3 <skill>/scripts/rlm_corpus.py scan <corpus>`."
    },
    {
     "layout": "chunks",
     "note": "Partition. Run `WORK=$(mktemp -d)`, then `python3 <skill>/scripts/rlm_corpus.py chunk <corpus> \"$WORK/chunks\"`.",
     "groups": [
      0,
      0,
      1,
      1,
      2,
      2
     ]
    },
    {
     "layout": "parallel",
     "note": "Map. For each chunk, run a fresh sub-task (a subagent if you can start one) that sees only that chunk file and the \"Chunk task\" below.",
     "groups": [
      0,
      0,
      1,
      1,
      2,
      2
     ],
     "state": [
      "ok",
      "ok",
      "ok",
      "ok",
      "ok",
      "ok"
     ]
    },
    {
     "layout": "funnel",
     "note": "Reduce. Run `python3 <skill>/scripts/rlm_corpus.py merge \"$WORK/out\" --out \"$WORK/merged.json\"`."
    },
    {
     "layout": "gate",
     "note": "Verify. Confirm the installed version in the lock file, not the range in the manifest.",
     "pass": [
      true,
      true,
      true,
      true,
      true,
      false
     ]
    },
    {
     "layout": "doc",
     "note": "Report. Write the report in the format below.",
     "docLabel": "report"
    }
   ],
   "outcome": null,
   "idea": "",
   "why": "",
   "protocol": [
    {
     "title": "Inspect",
     "text": "Run `python3 <skill>/scripts/rlm_corpus.py scan <corpus>`. Note the file count, line count and top-level folders. If the corpus is very large, agree the scope with the user, then narrow it with `--include '<folder>'` (repeatable) on every command. Files over 20 MB are skipped; `--max-bytes N` changes the limit. Report what `scan` lists as skipped."
    },
    {
     "title": "Partition",
     "text": "Run `WORK=$(mktemp -d)`, then `python3 <skill>/scripts/rlm_corpus.py chunk <corpus> \"$WORK/chunks\"`. Chunks are limited to 800 lines and 100,000 characters each, and are cut between definitions where possible. Each `chunk_NNN.md` holds the data notice and labelled file sections. `manifest.json` lists the chunks."
    },
    {
     "title": "Map",
     "text": "For each chunk, run a fresh sub-task (a subagent if you can start one) that sees only that chunk file and the \"Chunk task\" below. It writes `\"$WORK/out/<chunk>.out.md\"`. If you cannot start sub-tasks, run `python3 <skill>/scripts/rlm_corpus.py pending \"$WORK/chunks\" \"$WORK/out\"`. It lists the chunks that still have no output. Process the first one: read it, write its output, then run `pending` again. Repeat until nothing is pending. Never hold all chunks in context at once."
    },
    {
     "title": "Reduce",
     "text": "Run `python3 <skill>/scripts/rlm_corpus.py merge \"$WORK/out\" --out \"$WORK/merged.json\"`. If it lists `failed_outputs`, re-run those chunks. A missing or invalid output is not \"no findings\". Checks that span files (a duplicate across manifests, a route missing from a contract, a pattern repeated across chunks) are done on the merged list in this step. If the merged list is still too large to read, repeat steps 2 to 4 on the findings."
    },
    {
     "title": "Verify",
     "text": "Confirm the installed version in the lock file, not the range in the manifest. A transitive finding needs the direct parent upgraded. Run the audit tools that exist (npm audit --json, pip-audit, govulncheck, cargo audit, osv-scanner) once in the reduce step, and record which ran. Do not install tools, and do not run fix commands, without asking."
    },
    {
     "title": "Report",
     "text": "Write the report in the format below."
    },
    {
     "title": "Clean up",
     "text": "Delete `$WORK` after the report is delivered."
    }
   ],
   "path": ".github/skills/rlm-dependency-audit",
   "files": [
    "scripts/rlm_corpus.py"
   ],
   "helperScripts": 1,
   "notChecked": true,
   "group": "engineering",
   "grade": {
    "grade": "A",
    "score": "4.30",
    "scores": [
     4,
     4,
     5,
     4,
     5
    ],
    "design": true,
    "rank": 10
   }
  },
  {
   "id": "rlm-dependency-injection-review",
   "goal": "Dependency injection review for hidden dependencies, global state and hard-to-test constructors.",
   "cat": "Installed",
   "on": false,
   "use": "Dependency injection review for hidden dependencies, global state and hard-to-test constructors. Use when code is wired through constructors or a container.",
   "prompt": "Use the rlm-dependency-injection-review skill.",
   "input": "",
   "output": "",
   "pros": [],
   "cons": [],
   "items": [
    "input-1",
    "input-2",
    "input-3",
    "input-4",
    "input-5",
    "input-6"
   ],
   "steps": [
    {
     "layout": "row",
     "note": "Find the wiring. List the containers, factories and service locators."
    },
    {
     "layout": "chunks",
     "note": "Find hidden dependencies. Flag classes that read globals, static clocks or singletons directly.",
     "groups": [
      0,
      0,
      1,
      1,
      2,
      2
     ]
    },
    {
     "layout": "parallel",
     "note": "Check lifetimes. Flag long-lived objects that hold short-lived ones.",
     "groups": [
      0,
      0,
      1,
      1,
      2,
      2
     ],
     "state": [
      "ok",
      "ok",
      "ok",
      "ok",
      "ok",
      "ok"
     ]
    },
    {
     "layout": "funnel",
     "note": "Check testability. Flag constructors that do I/O or start threads."
    },
    {
     "layout": "gate",
     "note": "Report. List each finding with file and line, the problem and the fix.",
     "pass": [
      true,
      true,
      true,
      true,
      true,
      false
     ]
    }
   ],
   "outcome": null,
   "idea": "",
   "why": "",
   "protocol": [
    {
     "title": "Find the wiring",
     "text": "List the containers, factories and service locators."
    },
    {
     "title": "Find hidden dependencies",
     "text": "Flag classes that read globals, static clocks or singletons directly."
    },
    {
     "title": "Check lifetimes",
     "text": "Flag long-lived objects that hold short-lived ones."
    },
    {
     "title": "Check testability",
     "text": "Flag constructors that do I/O or start threads."
    },
    {
     "title": "Report",
     "text": "List each finding with file and line, the problem and the fix."
    }
   ],
   "path": ".github/skills/rlm-dependency-injection-review",
   "files": [],
   "helperScripts": 0,
   "notChecked": true,
   "group": "engineering",
   "grade": {
    "grade": "B",
    "score": "3.65",
    "scores": [
     4,
     3,
     4,
     3,
     4
    ],
    "design": true,
    "rank": 168
   }
  },
  {
   "id": "rlm-deserialization-review",
   "goal": "Deserialisation review: untrusted data turned into objects, with type control and size limits.",
   "cat": "Installed",
   "on": false,
   "use": "Deserialisation review: untrusted data turned into objects, with type control and size limits. Use when code reads serialised data from outside the process.",
   "prompt": "Use the rlm-deserialization-review skill.",
   "input": "",
   "output": "",
   "pros": [],
   "cons": [],
   "items": [
    "input-1",
    "input-2",
    "input-3",
    "input-4",
    "input-5",
    "input-6"
   ],
   "steps": [
    {
     "layout": "row",
     "note": "Find the readers. List each place serialised data is read."
    },
    {
     "layout": "chunks",
     "note": "Check the format. Flag binary or polymorphic formats read from untrusted sources.",
     "groups": [
      0,
      0,
      1,
      1,
      2,
      2
     ]
    },
    {
     "layout": "parallel",
     "note": "Check types. Flag readers that choose the type from the input.",
     "groups": [
      0,
      0,
      1,
      1,
      2,
      2
     ],
     "state": [
      "ok",
      "ok",
      "ok",
      "ok",
      "ok",
      "ok"
     ]
    },
    {
     "layout": "funnel",
     "note": "Check limits. Flag readers with no size or depth limit."
    },
    {
     "layout": "gate",
     "note": "Report. Each reader with file and line, severity and the fix.",
     "pass": [
      true,
      true,
      true,
      true,
      true,
      false
     ]
    }
   ],
   "outcome": null,
   "idea": "",
   "why": "",
   "protocol": [
    {
     "title": "Find the readers",
     "text": "List each place serialised data is read."
    },
    {
     "title": "Check the format",
     "text": "Flag binary or polymorphic formats read from untrusted sources."
    },
    {
     "title": "Check types",
     "text": "Flag readers that choose the type from the input."
    },
    {
     "title": "Check limits",
     "text": "Flag readers with no size or depth limit."
    },
    {
     "title": "Report",
     "text": "Each reader with file and line, severity and the fix."
    }
   ],
   "path": ".github/skills/rlm-deserialization-review",
   "files": [],
   "helperScripts": 0,
   "notChecked": true,
   "group": "security",
   "grade": {
    "grade": "B+",
    "score": "3.95",
    "scores": [
     5,
     4,
     4,
     2,
     3
    ],
    "design": true,
    "rank": 39
   }
  },
  {
   "id": "rlm-devops-access-review",
   "goal": "Checks who can deploy to which environment against the current roster each month.",
   "cat": "Installed",
   "on": false,
   "use": "Checks who can deploy to which environment against the current roster each month. Use when reviewing deploy access.",
   "prompt": "Use the rlm-devops-access-review skill on the records for this review.",
   "input": "The records for this review, as text or CSV",
   "output": "A draft report: findings with location, fix and a not-checked list",
   "pros": [
    "Flags a grant with no roster match, a production grant with no approver, and a grant unused for 90 days."
   ],
   "cons": [
    "Not checked: Access granted outside the list."
   ],
   "items": [
    "grant-1.yaml",
    "grant-2.yaml",
    "grant-3.yaml",
    "grant-4.yaml",
    "grant-5.yaml",
    "grant-6.yaml"
   ],
   "steps": [
    {
     "layout": "row",
     "note": "Inspect. The records in scope are listed, and any skipped file is reported."
    },
    {
     "layout": "chunks",
     "groups": [
      0,
      0,
      1,
      1,
      2,
      2
     ],
     "note": "Partition. The records are cut into chunks, each read on its own."
    },
    {
     "layout": "parallel",
     "groups": [
      0,
      0,
      1,
      1,
      2,
      2
     ],
     "state": [
      "ok",
      "ok",
      "bad",
      "bad",
      "ok",
      "warn"
     ],
     "note": "Map. Each chunk is checked against this skill's rules, one chunk at a time."
    },
    {
     "layout": "match",
     "targets": [
      "roster: deployer",
      "roster: approver",
      "roster: admin"
     ],
     "pairs": [
      0,
      0,
      2,
      -1,
      0,
      1
     ],
     "targetState": [
      "ok",
      "ok",
      "ok"
     ],
     "note": "Compare. Each grant is matched to a roster role. A grant with no match is a gap."
    },
    {
     "layout": "gate",
     "pass": [
      true,
      true,
      false,
      false,
      true,
      true
     ],
     "note": "Verify. Each cited line is re-read, and a finding that does not hold is dropped."
    },
    {
     "layout": "doc",
     "docLabel": "draft report",
     "note": "Report. Status: draft for the owner to review. It is not a decision."
    }
   ],
   "outcome": {
    "verdict": "2 grants need an owner's decision",
    "tone": "bad",
    "bars": [
     [
      "high",
      2,
      "high"
     ],
     [
      "medium",
      1,
      "medium"
     ]
    ],
    "findings": [
     {
      "sev": "high",
      "where": "grant-4.yaml:12",
      "title": "Deploy grant with no roster match",
      "fix": "Remove the grant or add the holder to the roster"
     },
     {
      "sev": "high",
      "where": "grant-3.yaml:19",
      "title": "Production grant with no approver reference",
      "fix": "Record the approver or revoke the grant"
     },
     {
      "sev": "medium",
      "where": "grant-6.yaml:26",
      "title": "Staging role not needed for this team",
      "fix": "Confirm the need with the team lead"
     }
    ],
    "notChecked": "Access granted outside the list."
   },
   "idea": "",
   "why": "",
   "protocol": [
    {
     "title": "Inspect",
     "text": "The corpus is the generic corpus (docs/SKILL-TEMPLATE-STANDARD.md, section 6): prepare `<input>` with the files in scope, as text. Convert any Excel or PDF input to CSV first (export each sheet as CSV; export PDF tables as CSV or text). Text inputs (CSV, TXT, Markdown) are used as they are. Run `python3 <skill>/scripts/rlm_corpus.py scan <input>`. Note the file count, line count and top-level folders. If the corpus is very large, agree the scope with the user, then narrow it with `--include '<folder>'` (repeatable) on every command. Files over 20 MB are skipped; `--max-bytes N` changes the limit. Report what `scan` lists as skipped."
    },
    {
     "title": "Partition",
     "text": "Run `WORK=$(mktemp -d)`, then `python3 <skill>/scripts/rlm_corpus.py chunk <input> \"$WORK/chunks\"`. Chunks are limited to 800 lines and 100,000 characters each, and are cut between definitions where possible. Each `chunk_NNN.md` holds the data notice and labelled file sections. `manifest.json` lists the chunks."
    },
    {
     "title": "Map",
     "text": "For each chunk, run a fresh sub-task (a subagent if you can start one) that sees only that chunk file and the \"Chunk task\" below. It writes `\"$WORK/out/<chunk>.out.md\"`. If you cannot start sub-tasks, run `python3 <skill>/scripts/rlm_corpus.py pending \"$WORK/chunks\" \"$WORK/out\"`. It lists the chunks that still have no output. Process the first one: read it, write its output, then run `pending` again. Repeat until nothing is pending. Never hold all chunks in context at once."
    },
    {
     "title": "Reduce",
     "text": "Run `python3 <skill>/scripts/rlm_corpus.py merge \"$WORK/out\" --out \"$WORK/merged.json\"`. If it lists `failed_outputs`, re-run those chunks. A missing or invalid output is not \"no findings\". Checks that span files are done on the merged list in this step. If the merged list is still too large to read, repeat steps 2 to 4 on the findings."
    },
    {
     "title": "Verify",
     "text": "Re-read each cited grant."
    },
    {
     "title": "Report",
     "text": "Write the report in the format below."
    },
    {
     "title": "Clean up",
     "text": "Delete `$WORK` after the report is delivered."
    }
   ],
   "path": ".github/skills/rlm-devops-access-review",
   "files": [
    "scripts/rlm_corpus.py"
   ],
   "helperScripts": 1,
   "notChecked": true,
   "group": "ops",
   "grade": {
    "grade": "B+",
    "score": null,
    "scores": null,
    "design": true,
    "rank": 160
   },
   "example": "Illustrative example: the items and results are made up, not real output.\nSummary: 3 findings (2 high, 1 medium).\n[high] grant-4.yaml:12  Deploy grant with no roster match.\n       Fix: Remove the grant or add the holder to the roster.\n[high] grant-3.yaml:19  Production grant with no approver reference.\n       Fix: Record the approver or revoke the grant.\n[medium] grant-6.yaml:26  Staging role not needed for this team.\n       Fix: Confirm the need with the team lead.\nNot checked: Access granted outside the list."
  },
  {
   "id": "rlm-devops-cloud-cost",
   "goal": "Reviews cloud spend by service and team each month, with idle resources.",
   "cat": "Installed",
   "on": false,
   "use": "Reviews cloud spend by service and team each month, with idle resources. Use when reviewing cloud spend.",
   "prompt": "Use the rlm-devops-cloud-cost skill on the records for this review.",
   "input": "The records for this review, as text or CSV",
   "output": "A draft report: findings with location, fix and a not-checked list",
   "pros": [
    "Flags a service with spend and no owner, a resource with utilisation under 5 percent for 30 days, and a spend total that does not match the billing lines."
   ],
   "cons": [
    "Not checked: Whether the resource is needed for a future event."
   ],
   "items": [
    "svc-compute.csv",
    "svc-database.csv",
    "svc-storage.csv",
    "svc-batch.csv",
    "svc-dev-env.csv",
    "svc-logs.csv"
   ],
   "steps": [
    {
     "layout": "row",
     "note": "Inspect. The records in scope are listed, and any skipped file is reported."
    },
    {
     "layout": "chunks",
     "groups": [
      0,
      0,
      1,
      1,
      2,
      2
     ],
     "note": "Partition. The records are cut into chunks, each read on its own."
    },
    {
     "layout": "parallel",
     "groups": [
      0,
      0,
      1,
      1,
      2,
      2
     ],
     "state": [
      "ok",
      "ok",
      "ok",
      "bad",
      "warn",
      "ok"
     ],
     "note": "Map. Each chunk is checked against this skill's rules, one chunk at a time."
    },
    {
     "layout": "bins",
     "bins": [
      "in use",
      "idle under 5%",
      "no owner"
     ],
     "binOf": [
      0,
      0,
      1,
      2,
      1,
      0
     ],
     "note": "Rank. Each service is placed by its owner and its utilisation."
    },
    {
     "layout": "gate",
     "pass": [
      true,
      true,
      true,
      false,
      true,
      true
     ],
     "note": "Verify. Each cited line is re-read, and a finding that does not hold is dropped."
    },
    {
     "layout": "doc",
     "docLabel": "draft report",
     "note": "Report. Status: draft for the owner to review. It is not a decision."
    }
   ],
   "outcome": {
    "verdict": "2 services spend without an owner or without use",
    "tone": "bad",
    "bars": [
     [
      "high",
      1,
      "high"
     ],
     [
      "medium",
      1,
      "medium"
     ],
     [
      "low",
      1,
      "low"
     ]
    ],
    "findings": [
     {
      "sev": "high",
      "where": "svc-batch.csv:12",
      "title": "Spend with no owner team",
      "fix": "Assign an owning team"
     },
     {
      "sev": "medium",
      "where": "svc-dev-env.csv:19",
      "title": "Resource at 3% utilisation for 30 days",
      "fix": "Stop or resize the environment"
     },
     {
      "sev": "low",
      "where": "svc-logs.csv:26",
      "title": "Spend total differs from the billing lines",
      "fix": "Recompute from the billing export"
     }
    ],
    "notChecked": "Whether the resource is needed for a future event."
   },
   "idea": "",
   "why": "",
   "protocol": [
    {
     "title": "Inspect",
     "text": "The corpus is the generic corpus (docs/SKILL-TEMPLATE-STANDARD.md, section 6): prepare `<input>` with the files in scope, as text. Convert any Excel or PDF input to CSV first (export each sheet as CSV; export PDF tables as CSV or text). Text inputs (CSV, TXT, Markdown) are used as they are. Run `python3 <skill>/scripts/rlm_corpus.py scan <input>`. Note the file count, line count and top-level folders. If the corpus is very large, agree the scope with the user, then narrow it with `--include '<folder>'` (repeatable) on every command. Files over 20 MB are skipped; `--max-bytes N` changes the limit. Report what `scan` lists as skipped."
    },
    {
     "title": "Partition",
     "text": "Run `WORK=$(mktemp -d)`, then `python3 <skill>/scripts/rlm_corpus.py chunk <input> \"$WORK/chunks\"`. Chunks are limited to 800 lines and 100,000 characters each, and are cut between definitions where possible. Each `chunk_NNN.md` holds the data notice and labelled file sections. `manifest.json` lists the chunks."
    },
    {
     "title": "Map",
     "text": "For each chunk, run a fresh sub-task (a subagent if you can start one) that sees only that chunk file and the \"Chunk task\" below. It writes `\"$WORK/out/<chunk>.out.md\"`. If you cannot start sub-tasks, run `python3 <skill>/scripts/rlm_corpus.py pending \"$WORK/chunks\" \"$WORK/out\"`. It lists the chunks that still have no output. Process the first one: read it, write its output, then run `pending` again. Repeat until nothing is pending. Never hold all chunks in context at once."
    },
    {
     "title": "Reduce",
     "text": "Run `python3 <skill>/scripts/rlm_corpus.py merge \"$WORK/out\" --out \"$WORK/merged.json\"`. If it lists `failed_outputs`, re-run those chunks. A missing or invalid output is not \"no findings\". Checks that span files are done on the merged list in this step. If the merged list is still too large to read, repeat steps 2 to 4 on the findings."
    },
    {
     "title": "Verify",
     "text": "Recompute each total from the billing lines."
    },
    {
     "title": "Report",
     "text": "Write the report in the format below."
    },
    {
     "title": "Clean up",
     "text": "Delete `$WORK` after the report is delivered."
    }
   ],
   "path": ".github/skills/rlm-devops-cloud-cost",
   "files": [
    "scripts/rlm_corpus.py"
   ],
   "helperScripts": 1,
   "notChecked": true,
   "group": "ops",
   "grade": {
    "grade": "B",
    "score": null,
    "scores": null,
    "design": true,
    "rank": 205
   },
   "example": "Illustrative example: the items and results are made up, not real output.\nSummary: 3 findings (1 high, 1 medium, 1 low).\n[high] svc-batch.csv:12  Spend with no owner team.\n       Fix: Assign an owning team.\n[medium] svc-dev-env.csv:19  Resource at 3% utilisation for 30 days.\n       Fix: Stop or resize the environment.\n[low] svc-logs.csv:26  Spend total differs from the billing lines.\n       Fix: Recompute from the billing export.\nNot checked: Whether the resource is needed for a future event."
  },
  {
   "id": "rlm-devops-deploy-log",
   "goal": "Checks the deployment log each day: deploys, rollbacks and failed deploys, with their cause.",
   "cat": "Installed",
   "on": false,
   "use": "Checks the deployment log each day: deploys, rollbacks and failed deploys, with their cause. Use when reviewing deployments for the day.",
   "prompt": "Use the rlm-devops-deploy-log skill on the records for this review.",
   "input": "The records for this review, as text or CSV",
   "output": "A draft report: findings with location, fix and a not-checked list",
   "pros": [
    "Flags a failed deployment with no cause, a rollback with no record, and a deployment to production with no approval reference."
   ],
   "cons": [
    "Not checked: What happened in production after the deploy."
   ],
   "items": [
    "deploy-api.log",
    "deploy-web.log",
    "deploy-worker.log",
    "deploy-search.log",
    "deploy-billing.log",
    "deploy-auth.log"
   ],
   "steps": [
    {
     "layout": "row",
     "note": "Inspect. The records in scope are listed, and any skipped file is reported."
    },
    {
     "layout": "chunks",
     "groups": [
      0,
      0,
      1,
      1,
      2,
      2
     ],
     "note": "Partition. The records are cut into chunks, each read on its own."
    },
    {
     "layout": "parallel",
     "groups": [
      0,
      0,
      1,
      1,
      2,
      2
     ],
     "state": [
      "ok",
      "ok",
      "warn",
      "bad",
      "bad",
      "ok"
     ],
     "note": "Map. Each chunk is checked against this skill's rules, one chunk at a time."
    },
    {
     "layout": "timeline",
     "at": [
      0,
      0.2,
      0.4,
      0.6,
      0.8,
      1.0
     ],
     "note": "Order. Deploys and rollbacks are placed in the order they happened."
    },
    {
     "layout": "gate",
     "pass": [
      true,
      true,
      true,
      false,
      false,
      true
     ],
     "note": "Verify. Each cited line is re-read, and a finding that does not hold is dropped."
    },
    {
     "layout": "doc",
     "docLabel": "draft report",
     "note": "Report. Status: draft for the owner to review. It is not a decision."
    }
   ],
   "outcome": {
    "verdict": "2 production deploys have no record",
    "tone": "bad",
    "bars": [
     [
      "high",
      2,
      "high"
     ],
     [
      "medium",
      1,
      "medium"
     ]
    ],
    "findings": [
     {
      "sev": "high",
      "where": "deploy-search.log:12",
      "title": "Failed production deploy with no cause",
      "fix": "Record the cause and the fix"
     },
     {
      "sev": "high",
      "where": "deploy-billing.log:19",
      "title": "Production deploy with no approval reference",
      "fix": "Attach the approval or record the exception"
     },
     {
      "sev": "medium",
      "where": "deploy-worker.log:26",
      "title": "Rollback with no record",
      "fix": "Write the rollback entry"
     }
    ],
    "notChecked": "What happened in production after the deploy."
   },
   "idea": "",
   "why": "",
   "protocol": [
    {
     "title": "Inspect",
     "text": "The corpus is the generic corpus (docs/SKILL-TEMPLATE-STANDARD.md, section 6): prepare `<input>` with the files in scope, as text. Convert any Excel or PDF input to CSV first (export each sheet as CSV; export PDF tables as CSV or text). Text inputs (CSV, TXT, Markdown) are used as they are. Run `python3 <skill>/scripts/rlm_corpus.py scan <input>`. Note the file count, line count and top-level folders. If the corpus is very large, agree the scope with the user, then narrow it with `--include '<folder>'` (repeatable) on every command. Files over 20 MB are skipped; `--max-bytes N` changes the limit. Report what `scan` lists as skipped."
    },
    {
     "title": "Partition",
     "text": "Run `WORK=$(mktemp -d)`, then `python3 <skill>/scripts/rlm_corpus.py chunk <input> \"$WORK/chunks\"`. Chunks are limited to 800 lines and 100,000 characters each, and are cut between definitions where possible. Each `chunk_NNN.md` holds the data notice and labelled file sections. `manifest.json` lists the chunks."
    },
    {
     "title": "Map",
     "text": "For each chunk, run a fresh sub-task (a subagent if you can start one) that sees only that chunk file and the \"Chunk task\" below. It writes `\"$WORK/out/<chunk>.out.md\"`. If you cannot start sub-tasks, run `python3 <skill>/scripts/rlm_corpus.py pending \"$WORK/chunks\" \"$WORK/out\"`. It lists the chunks that still have no output. Process the first one: read it, write its output, then run `pending` again. Repeat until nothing is pending. Never hold all chunks in context at once."
    },
    {
     "title": "Reduce",
     "text": "Run `python3 <skill>/scripts/rlm_corpus.py merge \"$WORK/out\" --out \"$WORK/merged.json\"`. If it lists `failed_outputs`, re-run those chunks. A missing or invalid output is not \"no findings\". Checks that span files are done on the merged list in this step. If the merged list is still too large to read, repeat steps 2 to 4 on the findings."
    },
    {
     "title": "Verify",
     "text": "Re-read each cited entry."
    },
    {
     "title": "Report",
     "text": "Write the report in the format below."
    },
    {
     "title": "Clean up",
     "text": "Delete `$WORK` after the report is delivered."
    }
   ],
   "path": ".github/skills/rlm-devops-deploy-log",
   "files": [
    "scripts/rlm_corpus.py"
   ],
   "helperScripts": 1,
   "notChecked": true,
   "group": "ops",
   "grade": {
    "grade": "B+",
    "score": null,
    "scores": null,
    "design": true,
    "rank": 161
   },
   "example": "Illustrative example: the items and results are made up, not real output.\nSummary: 3 findings (2 high, 1 medium).\n[high] deploy-search.log:12  Failed production deploy with no cause.\n       Fix: Record the cause and the fix.\n[high] deploy-billing.log:19  Production deploy with no approval reference.\n       Fix: Attach the approval or record the exception.\n[medium] deploy-worker.log:26  Rollback with no record.\n       Fix: Write the rollback entry.\nNot checked: What happened in production after the deploy."
  },
  {
   "id": "rlm-devops-dr-test",
   "goal": "Records a restore and failover test each quarter, with its result.",
   "cat": "Installed",
   "on": false,
   "use": "Records a restore and failover test each quarter, with its result. Use when recording a disaster recovery test.",
   "prompt": "Use the rlm-devops-dr-test skill on the records for this review.",
   "input": "The records for this review, as text or CSV",
   "output": "A draft report: findings with location, fix and a not-checked list",
   "pros": [
    "Flags a test with no measured time, a result that does not match the measured time, and a gap with no action."
   ],
   "cons": [
    "Not checked: Whether the recovery works for real data at scale."
   ],
   "items": [
    "scenario-db-restore.md",
    "scenario-region-failover.md",
    "scenario-cache.md",
    "scenario-queue.md",
    "scenario-storage.md",
    "scenario-dns.md"
   ],
   "steps": [
    {
     "layout": "row",
     "note": "Inspect. The records in scope are listed, and any skipped file is reported."
    },
    {
     "layout": "chunks",
     "groups": [
      0,
      0,
      1,
      1,
      2,
      2
     ],
     "note": "Partition. The records are cut into chunks, each read on its own."
    },
    {
     "layout": "parallel",
     "groups": [
      0,
      0,
      1,
      1,
      2,
      2
     ],
     "state": [
      "ok",
      "ok",
      "bad",
      "warn",
      "ok",
      "warn"
     ],
     "note": "Map. Each chunk is checked against this skill's rules, one chunk at a time."
    },
    {
     "layout": "store",
     "storeLabel": "test record",
     "note": "Record. Each measured time is written to the test record against its target."
    },
    {
     "layout": "gate",
     "pass": [
      true,
      true,
      false,
      true,
      true,
      true
     ],
     "note": "Verify. Each cited line is re-read, and a finding that does not hold is dropped."
    },
    {
     "layout": "doc",
     "docLabel": "draft report",
     "note": "Report. Status: draft for the owner to review. It is not a decision."
    }
   ],
   "outcome": {
    "verdict": "1 scenario has no measured restore time",
    "tone": "bad",
    "bars": [
     [
      "high",
      1,
      "high"
     ],
     [
      "medium",
      2,
      "medium"
     ]
    ],
    "findings": [
     {
      "sev": "high",
      "where": "scenario-cache.md:12",
      "title": "Restore time not measured",
      "fix": "Measure the restore and record the time"
     },
     {
      "sev": "medium",
      "where": "scenario-queue.md:19",
      "title": "Passed, but measured time is over the target",
      "fix": "Change the result or the target"
     },
     {
      "sev": "medium",
      "where": "scenario-dns.md:26",
      "title": "Gap with no action",
      "fix": "Name the action and its owner"
     }
    ],
    "notChecked": "Whether the recovery works for real data at scale."
   },
   "idea": "",
   "why": "",
   "protocol": [
    {
     "title": "Inspect",
     "text": "The corpus is the generic corpus (docs/SKILL-TEMPLATE-STANDARD.md, section 6): prepare `<input>` with the files in scope, as text. Convert any Excel or PDF input to CSV first (export each sheet as CSV; export PDF tables as CSV or text). Text inputs (CSV, TXT, Markdown) are used as they are. Run `python3 <skill>/scripts/rlm_corpus.py scan <input>`. Note the file count, line count and top-level folders. If the corpus is very large, agree the scope with the user, then narrow it with `--include '<folder>'` (repeatable) on every command. Files over 20 MB are skipped; `--max-bytes N` changes the limit. Report what `scan` lists as skipped."
    },
    {
     "title": "Partition",
     "text": "Run `WORK=$(mktemp -d)`, then `python3 <skill>/scripts/rlm_corpus.py chunk <input> \"$WORK/chunks\"`. Chunks are limited to 800 lines and 100,000 characters each, and are cut between definitions where possible. Each `chunk_NNN.md` holds the data notice and labelled file sections. `manifest.json` lists the chunks."
    },
    {
     "title": "Map",
     "text": "For each chunk, run a fresh sub-task (a subagent if you can start one) that sees only that chunk file and the \"Chunk task\" below. It writes `\"$WORK/out/<chunk>.out.md\"`. If you cannot start sub-tasks, run `python3 <skill>/scripts/rlm_corpus.py pending \"$WORK/chunks\" \"$WORK/out\"`. It lists the chunks that still have no output. Process the first one: read it, write its output, then run `pending` again. Repeat until nothing is pending. Never hold all chunks in context at once."
    },
    {
     "title": "Reduce",
     "text": "Run `python3 <skill>/scripts/rlm_corpus.py merge \"$WORK/out\" --out \"$WORK/merged.json\"`. If it lists `failed_outputs`, re-run those chunks. A missing or invalid output is not \"no findings\". Checks that span files are done on the merged list in this step. If the merged list is still too large to read, repeat steps 2 to 4 on the findings."
    },
    {
     "title": "Verify",
     "text": "Recompute each recovery time from the log."
    },
    {
     "title": "Report",
     "text": "Write the report in the format below."
    },
    {
     "title": "Clean up",
     "text": "Delete `$WORK` after the report is delivered."
    }
   ],
   "path": ".github/skills/rlm-devops-dr-test",
   "files": [
    "scripts/rlm_corpus.py"
   ],
   "helperScripts": 1,
   "notChecked": true,
   "group": "ops",
   "grade": {
    "grade": "A-",
    "score": null,
    "scores": null,
    "design": true,
    "rank": 33
   },
   "example": "Illustrative example: the items and results are made up, not real output.\nSummary: 3 findings (1 high, 2 medium).\n[high] scenario-cache.md:12  Restore time not measured.\n       Fix: Measure the restore and record the time.\n[medium] scenario-queue.md:19  Passed, but measured time is over the target.\n       Fix: Change the result or the target.\n[medium] scenario-dns.md:26  Gap with no action.\n       Fix: Name the action and its owner.\nNot checked: Whether the recovery works for real data at scale."
  },
  {
   "id": "rlm-devops-new-service-checklist",
   "goal": "Checks a new service for logging, metrics, alerts, ownership and its deploy path before go-live.",
   "cat": "Installed",
   "on": false,
   "use": "Checks a new service for logging, metrics, alerts, ownership and its deploy path before go-live. Use when a new service is about to go live.",
   "prompt": "Use the rlm-devops-new-service-checklist skill on the records for this review.",
   "input": "The records for this review, as text or CSV",
   "output": "A draft report: findings with location, fix and a not-checked list",
   "pros": [
    "Flags each missing item with its expected location."
   ],
   "cons": [
    "Not checked: The runtime behaviour; the alert thresholds' suitability."
   ],
   "items": [
    "service.yaml",
    "Dockerfile",
    "alerts.tf",
    "owners.yaml",
    "pipeline.yml",
    "logging.ts"
   ],
   "steps": [
    {
     "layout": "row",
     "note": "Inspect. The records in scope are listed, and any skipped file is reported."
    },
    {
     "layout": "chunks",
     "groups": [
      0,
      0,
      1,
      1,
      2,
      2
     ],
     "note": "Partition. The records are cut into chunks, each read on its own."
    },
    {
     "layout": "parallel",
     "groups": [
      0,
      0,
      1,
      1,
      2,
      2
     ],
     "state": [
      "ok",
      "ok",
      "bad",
      "ok",
      "ok",
      "warn"
     ],
     "note": "Map. Each chunk is checked against this skill's rules, one chunk at a time."
    },
    {
     "layout": "match",
     "targets": [
      "logging",
      "metrics",
      "alerts",
      "owner",
      "deploy path"
     ],
     "pairs": [
      3,
      -1,
      2,
      3,
      4,
      0
     ],
     "targetState": [
      "ok",
      "ok",
      "ok",
      "ok",
      "ok"
     ],
     "note": "Compare. Each file is matched to a go-live requirement. A requirement with no file is missing."
    },
    {
     "layout": "gate",
     "pass": [
      true,
      true,
      false,
      true,
      true,
      true
     ],
     "note": "Verify. Each cited line is re-read, and a finding that does not hold is dropped."
    },
    {
     "layout": "doc",
     "docLabel": "draft report",
     "note": "Report. Status: draft for the owner to review. It is not a decision."
    }
   ],
   "outcome": {
    "verdict": "1 go-live requirement is missing",
    "tone": "bad",
    "bars": [
     [
      "high",
      1,
      "high"
     ],
     [
      "medium",
      1,
      "medium"
     ],
     [
      "low",
      1,
      "low"
     ]
    ],
    "findings": [
     {
      "sev": "high",
      "where": "alerts.tf:12",
      "title": "No alert for the error rate",
      "fix": "Add an alert on the error rate"
     },
     {
      "sev": "medium",
      "where": "logging.ts:19",
      "title": "Request path logs are not structured",
      "fix": "Use structured logging on the request path"
     },
     {
      "sev": "low",
      "where": "pipeline.yml:26",
      "title": "Deploy path has no rollback step",
      "fix": "Add a rollback step to the pipeline"
     }
    ],
    "notChecked": "The runtime behaviour; the alert thresholds' suitability."
   },
   "idea": "",
   "why": "",
   "protocol": [
    {
     "title": "Inspect",
     "text": "Run `python3 <skill>/scripts/rlm_corpus.py scan <repo>`. Note the file count, line count and top-level folders. If the corpus is very large, agree the scope with the user, then narrow it with `--include '<folder>'` (repeatable) on every command. Files over 20 MB are skipped; `--max-bytes N` changes the limit. Report what `scan` lists as skipped."
    },
    {
     "title": "Partition",
     "text": "Run `WORK=$(mktemp -d)`, then `python3 <skill>/scripts/rlm_corpus.py chunk <repo> \"$WORK/chunks\"`. Chunks are limited to 800 lines and 100,000 characters each, and are cut between definitions where possible. Each `chunk_NNN.md` holds the data notice and labelled file sections. `manifest.json` lists the chunks."
    },
    {
     "title": "Map",
     "text": "For each chunk, run a fresh sub-task (a subagent if you can start one) that sees only that chunk file and the \"Chunk task\" below. It writes `\"$WORK/out/<chunk>.out.md\"`. If you cannot start sub-tasks, run `python3 <skill>/scripts/rlm_corpus.py pending \"$WORK/chunks\" \"$WORK/out\"`. It lists the chunks that still have no output. Process the first one: read it, write its output, then run `pending` again. Repeat until nothing is pending. Never hold all chunks in context at once."
    },
    {
     "title": "Reduce",
     "text": "Run `python3 <skill>/scripts/rlm_corpus.py merge \"$WORK/out\" --out \"$WORK/merged.json\"`. If it lists `failed_outputs`, re-run those chunks. A missing or invalid output is not \"no findings\". Checks that span files are done on the merged list in this step. If the merged list is still too large to read, repeat steps 2 to 4 on the findings."
    },
    {
     "title": "Verify",
     "text": "Re-read each file you cite. Confirm each missing item is missing from all the files in the chunk and the manifest."
    },
    {
     "title": "Report",
     "text": "Write the report in the format below."
    },
    {
     "title": "Clean up",
     "text": "Delete `$WORK` after the report is delivered."
    }
   ],
   "path": ".github/skills/rlm-devops-new-service-checklist",
   "files": [
    "scripts/rlm_corpus.py"
   ],
   "helperScripts": 1,
   "notChecked": true,
   "group": "ops",
   "grade": {
    "grade": "B+",
    "score": null,
    "scores": null,
    "design": true,
    "rank": 162
   },
   "example": "Illustrative example: the items and results are made up, not real output.\nSummary: 3 findings (1 high, 1 medium, 1 low).\n[high] alerts.tf:12  No alert for the error rate.\n       Fix: Add an alert on the error rate.\n[medium] logging.ts:19  Request path logs are not structured.\n       Fix: Use structured logging on the request path.\n[low] pipeline.yml:26  Deploy path has no rollback step.\n       Fix: Add a rollback step to the pipeline.\nNot checked: The runtime behaviour; the alert thresholds' suitability."
  },
  {
   "id": "rlm-devops-on-call-handover",
   "goal": "Records open alerts, pending deploys and known risks for the next on-call engineer.",
   "cat": "Installed",
   "on": false,
   "use": "Records open alerts, pending deploys and known risks for the next on-call engineer. Use when handing over on-call duty.",
   "prompt": "Use the rlm-devops-on-call-handover skill on the records for this review.",
   "input": "The records for this review, as text or CSV",
   "output": "A draft report: findings with location, fix and a not-checked list",
   "pros": [
    "Flags an open alert with no next step, a pending deploy with no approval, and a risk with no owner."
   ],
   "cons": [
    "Not checked: Alerts not in the log."
   ],
   "items": [
    "alert-db-lag.md",
    "alert-disk.md",
    "deploy-pending-api.md",
    "deploy-pending-web.md",
    "risk-cert-expiry.md",
    "risk-vendor.md"
   ],
   "steps": [
    {
     "layout": "row",
     "note": "Inspect. The records in scope are listed, and any skipped file is reported."
    },
    {
     "layout": "chunks",
     "groups": [
      0,
      0,
      1,
      1,
      2,
      2
     ],
     "note": "Partition. The records are cut into chunks, each read on its own."
    },
    {
     "layout": "parallel",
     "groups": [
      0,
      0,
      1,
      1,
      2,
      2
     ],
     "state": [
      "ok",
      "bad",
      "ok",
      "bad",
      "ok",
      "warn"
     ],
     "note": "Map. Each chunk is checked against this skill's rules, one chunk at a time."
    },
    {
     "layout": "stack",
     "note": "List. Open alerts, pending deploys and risks are stacked for the next engineer."
    },
    {
     "layout": "gate",
     "pass": [
      true,
      false,
      true,
      false,
      true,
      true
     ],
     "note": "Verify. Each cited line is re-read, and a finding that does not hold is dropped."
    },
    {
     "layout": "doc",
     "docLabel": "draft report",
     "note": "Report. Status: draft for the owner to review. It is not a decision."
    }
   ],
   "outcome": {
    "verdict": "2 handover items need action before the shift ends",
    "tone": "bad",
    "bars": [
     [
      "high",
      2,
      "high"
     ],
     [
      "medium",
      1,
      "medium"
     ]
    ],
    "findings": [
     {
      "sev": "high",
      "where": "alert-disk.md:12",
      "title": "Open alert with no next step",
      "fix": "Write the next step and its owner"
     },
     {
      "sev": "high",
      "where": "deploy-pending-web.md:19",
      "title": "Pending deploy with no approval",
      "fix": "Get the approval before the handover"
     },
     {
      "sev": "medium",
      "where": "risk-vendor.md:26",
      "title": "Risk with no owner role",
      "fix": "Assign an owner role"
     }
    ],
    "notChecked": "Alerts not in the log."
   },
   "idea": "",
   "why": "",
   "protocol": [
    {
     "title": "Inspect",
     "text": "The corpus is the generic corpus (docs/SKILL-TEMPLATE-STANDARD.md, section 6): prepare `<input>` with the files in scope, as text. Convert any Excel or PDF input to CSV first (export each sheet as CSV; export PDF tables as CSV or text). Text inputs (CSV, TXT, Markdown) are used as they are. Run `python3 <skill>/scripts/rlm_corpus.py scan <input>`. Note the file count, line count and top-level folders. If the corpus is very large, agree the scope with the user, then narrow it with `--include '<folder>'` (repeatable) on every command. Files over 20 MB are skipped; `--max-bytes N` changes the limit. Report what `scan` lists as skipped."
    },
    {
     "title": "Partition",
     "text": "Run `WORK=$(mktemp -d)`, then `python3 <skill>/scripts/rlm_corpus.py chunk <input> \"$WORK/chunks\"`. Chunks are limited to 800 lines and 100,000 characters each, and are cut between definitions where possible. Each `chunk_NNN.md` holds the data notice and labelled file sections. `manifest.json` lists the chunks."
    },
    {
     "title": "Map",
     "text": "For each chunk, run a fresh sub-task (a subagent if you can start one) that sees only that chunk file and the \"Chunk task\" below. It writes `\"$WORK/out/<chunk>.out.md\"`. If you cannot start sub-tasks, run `python3 <skill>/scripts/rlm_corpus.py pending \"$WORK/chunks\" \"$WORK/out\"`. It lists the chunks that still have no output. Process the first one: read it, write its output, then run `pending` again. Repeat until nothing is pending. Never hold all chunks in context at once."
    },
    {
     "title": "Reduce",
     "text": "Run `python3 <skill>/scripts/rlm_corpus.py merge \"$WORK/out\" --out \"$WORK/merged.json\"`. If it lists `failed_outputs`, re-run those chunks. A missing or invalid output is not \"no findings\". Checks that span files are done on the merged list in this step. If the merged list is still too large to read, repeat steps 2 to 4 on the findings."
    },
    {
     "title": "Verify",
     "text": "Re-read each cited entry."
    },
    {
     "title": "Report",
     "text": "Write the report in the format below."
    },
    {
     "title": "Clean up",
     "text": "Delete `$WORK` after the report is delivered."
    }
   ],
   "path": ".github/skills/rlm-devops-on-call-handover",
   "files": [
    "scripts/rlm_corpus.py"
   ],
   "helperScripts": 1,
   "notChecked": true,
   "group": "ops",
   "grade": {
    "grade": "B",
    "score": null,
    "scores": null,
    "design": true,
    "rank": 206
   },
   "example": "Illustrative example: the items and results are made up, not real output.\nSummary: 3 findings (2 high, 1 medium).\n[high] alert-disk.md:12  Open alert with no next step.\n       Fix: Write the next step and its owner.\n[high] deploy-pending-web.md:19  Pending deploy with no approval.\n       Fix: Get the approval before the handover.\n[medium] risk-vendor.md:26  Risk with no owner role.\n       Fix: Assign an owner role.\nNot checked: Alerts not in the log."
  },
  {
   "id": "rlm-devops-pipeline-health",
   "goal": "Checks pipeline health each day: failing builds, flaky tests, queue time, with the day-on-day change.",
   "cat": "Installed",
   "on": false,
   "use": "Checks pipeline health each day: failing builds, flaky tests, queue time, with the day-on-day change. Use when checking pipeline health each day.",
   "prompt": "Use the rlm-devops-pipeline-health skill on the records for this review.",
   "input": "The records for this review, as text or CSV",
   "output": "A draft report: findings with location, fix and a not-checked list",
   "pros": [
    "Flags a failure rate above 10 percent for a pipeline in the day, a queue time above the target, and a test that passes and fails on the same commit."
   ],
   "cons": [
    "Not checked: Failures outside the export."
   ],
   "items": [
    "pipeline-api.json",
    "pipeline-web.json",
    "pipeline-worker.json",
    "pipeline-unit.json",
    "pipeline-e2e.json",
    "pipeline-staging.json"
   ],
   "steps": [
    {
     "layout": "row",
     "note": "Inspect. The records in scope are listed, and any skipped file is reported."
    },
    {
     "layout": "chunks",
     "groups": [
      0,
      0,
      1,
      1,
      2,
      2
     ],
     "note": "Partition. The records are cut into chunks, each read on its own."
    },
    {
     "layout": "parallel",
     "groups": [
      0,
      0,
      1,
      1,
      2,
      2
     ],
     "state": [
      "ok",
      "bad",
      "warn",
      "ok",
      "ok",
      "ok"
     ],
     "note": "Map. Each chunk is checked against this skill's rules, one chunk at a time."
    },
    {
     "layout": "bins",
     "bins": [
      "healthy",
      "failure above 10%",
      "queue above target"
     ],
     "binOf": [
      0,
      1,
      0,
      2,
      0,
      0
     ],
     "note": "Rank. Each pipeline is placed by its failure rate and its queue time."
    },
    {
     "layout": "gate",
     "pass": [
      true,
      false,
      true,
      true,
      true,
      true
     ],
     "note": "Verify. Each cited line is re-read, and a finding that does not hold is dropped."
    },
    {
     "layout": "doc",
     "docLabel": "draft report",
     "note": "Report. Status: draft for the owner to review. It is not a decision."
    }
   ],
   "outcome": {
    "verdict": "2 pipelines are failing or queueing",
    "tone": "bad",
    "bars": [
     [
      "high",
      1,
      "high"
     ],
     [
      "medium",
      1,
      "medium"
     ],
     [
      "low",
      1,
      "low"
     ]
    ],
    "findings": [
     {
      "sev": "high",
      "where": "pipeline-web.json:12",
      "title": "Failure rate 18 percent today",
      "fix": "Fix the failing stage"
     },
     {
      "sev": "medium",
      "where": "pipeline-worker.json:19",
      "title": "Queue time 14 minutes against a target of 5",
      "fix": "Add runners or split the job"
     },
     {
      "sev": "low",
      "where": "pipeline-e2e.json:26",
      "title": "Test passes and fails on the same commit",
      "fix": "Quarantine the test and fix it"
     }
    ],
    "notChecked": "Failures outside the export."
   },
   "idea": "",
   "why": "",
   "protocol": [
    {
     "title": "Inspect",
     "text": "The corpus is the generic corpus (docs/SKILL-TEMPLATE-STANDARD.md, section 6): prepare `<input>` with the files in scope, as text. Convert any Excel or PDF input to CSV first (export each sheet as CSV; export PDF tables as CSV or text). Text inputs (CSV, TXT, Markdown) are used as they are. Run `python3 <skill>/scripts/rlm_corpus.py scan <input>`. Note the file count, line count and top-level folders. If the corpus is very large, agree the scope with the user, then narrow it with `--include '<folder>'` (repeatable) on every command. Files over 20 MB are skipped; `--max-bytes N` changes the limit. Report what `scan` lists as skipped."
    },
    {
     "title": "Partition",
     "text": "Run `WORK=$(mktemp -d)`, then `python3 <skill>/scripts/rlm_corpus.py chunk <input> \"$WORK/chunks\"`. Chunks are limited to 800 lines and 100,000 characters each, and are cut between definitions where possible. Each `chunk_NNN.md` holds the data notice and labelled file sections. `manifest.json` lists the chunks."
    },
    {
     "title": "Map",
     "text": "For each chunk, run a fresh sub-task (a subagent if you can start one) that sees only that chunk file and the \"Chunk task\" below. It writes `\"$WORK/out/<chunk>.out.md\"`. If you cannot start sub-tasks, run `python3 <skill>/scripts/rlm_corpus.py pending \"$WORK/chunks\" \"$WORK/out\"`. It lists the chunks that still have no output. Process the first one: read it, write its output, then run `pending` again. Repeat until nothing is pending. Never hold all chunks in context at once."
    },
    {
     "title": "Reduce",
     "text": "Run `python3 <skill>/scripts/rlm_corpus.py merge \"$WORK/out\" --out \"$WORK/merged.json\"`. If it lists `failed_outputs`, re-run those chunks. A missing or invalid output is not \"no findings\". Checks that span files are done on the merged list in this step. If the merged list is still too large to read, repeat steps 2 to 4 on the findings."
    },
    {
     "title": "Verify",
     "text": "Recompute each rate from the runs."
    },
    {
     "title": "Report",
     "text": "Write the report in the format below."
    },
    {
     "title": "Clean up",
     "text": "Delete `$WORK` after the report is delivered."
    }
   ],
   "path": ".github/skills/rlm-devops-pipeline-health",
   "files": [
    "scripts/rlm_corpus.py"
   ],
   "helperScripts": 1,
   "notChecked": true,
   "group": "ops",
   "grade": {
    "grade": "B",
    "score": null,
    "scores": null,
    "design": true,
    "rank": 207
   },
   "example": "Illustrative example: the items and results are made up, not real output.\nSummary: 3 findings (1 high, 1 medium, 1 low).\n[high] pipeline-web.json:12  Failure rate 18 percent today.\n       Fix: Fix the failing stage.\n[medium] pipeline-worker.json:19  Queue time 14 minutes against a target of 5.\n       Fix: Add runners or split the job.\n[low] pipeline-e2e.json:26  Test passes and fails on the same commit.\n       Fix: Quarantine the test and fix it.\nNot checked: Failures outside the export."
  },
  {
   "id": "rlm-devops-release-checklist",
   "goal": "Runs the pre-release checks: owners, gates and sign-off, against the release notes.",
   "cat": "Installed",
   "on": false,
   "use": "Runs the pre-release checks: owners, gates and sign-off, against the release notes. Use when preparing a release.",
   "prompt": "Use the rlm-devops-release-checklist skill on the records for this review.",
   "input": "The records for this review, as text or CSV",
   "output": "A draft report: findings with location, fix and a not-checked list",
   "pros": [],
   "cons": [
    "Not checked: Whether the gates were run; the runtime behaviour."
   ],
   "items": [
    "release-notes.md",
    "package.json",
    "CHANGELOG.md",
    "migrations/0042.sql",
    "gates.yaml",
    "signoff.md"
   ],
   "steps": [
    {
     "layout": "row",
     "note": "Inspect. The records in scope are listed, and any skipped file is reported."
    },
    {
     "layout": "chunks",
     "groups": [
      0,
      0,
      1,
      1,
      2,
      2
     ],
     "note": "Partition. The records are cut into chunks, each read on its own."
    },
    {
     "layout": "parallel",
     "groups": [
      0,
      0,
      1,
      1,
      2,
      2
     ],
     "state": [
      "ok",
      "warn",
      "ok",
      "bad",
      "ok",
      "bad"
     ],
     "note": "Map. Each chunk is checked against this skill's rules, one chunk at a time."
    },
    {
     "layout": "gate",
     "pass": [
      true,
      false,
      true,
      false,
      true,
      false
     ],
     "note": "Gate. Each required gate needs an owner and a recorded sign-off."
    },
    {
     "layout": "gate",
     "pass": [
      true,
      true,
      true,
      false,
      true,
      false
     ],
     "note": "Verify. Each cited line is re-read, and a finding that does not hold is dropped."
    },
    {
     "layout": "doc",
     "docLabel": "draft report",
     "note": "Report. Status: draft for the owner to review. It is not a decision."
    }
   ],
   "outcome": {
    "verdict": "2 release blockers",
    "tone": "bad",
    "bars": [
     [
      "high",
      2,
      "high"
     ],
     [
      "medium",
      1,
      "medium"
     ]
    ],
    "findings": [
     {
      "sev": "high",
      "where": "migrations/0042.sql:12",
      "title": "Migration with no rollback note",
      "fix": "Write the reverse migration and its note"
     },
     {
      "sev": "medium",
      "where": "package.json:19",
      "title": "Version 2.3.0 in the package, 2.2.0 in the notes",
      "fix": "Make the two versions match"
     },
     {
      "sev": "high",
      "where": "signoff.md:26",
      "title": "Security gate has no sign-off",
      "fix": "Record the sign-off before release"
     }
    ],
    "notChecked": "Whether the gates were run; the runtime behaviour."
   },
   "idea": "",
   "why": "",
   "protocol": [
    {
     "title": "Inspect",
     "text": "Run `python3 <skill>/scripts/rlm_corpus.py scan <repo>`. Note the file count, line count and top-level folders. If the corpus is very large, agree the scope with the user, then narrow it with `--include '<folder>'` (repeatable) on every command. Files over 20 MB are skipped; `--max-bytes N` changes the limit. Report what `scan` lists as skipped."
    },
    {
     "title": "Partition",
     "text": "Run `WORK=$(mktemp -d)`, then `python3 <skill>/scripts/rlm_corpus.py chunk <repo> \"$WORK/chunks\"`. Chunks are limited to 800 lines and 100,000 characters each, and are cut between definitions where possible. Each `chunk_NNN.md` holds the data notice and labelled file sections. `manifest.json` lists the chunks."
    },
    {
     "title": "Map",
     "text": "For each chunk, run a fresh sub-task (a subagent if you can start one) that sees only that chunk file and the \"Chunk task\" below. It writes `\"$WORK/out/<chunk>.out.md\"`. If you cannot start sub-tasks, run `python3 <skill>/scripts/rlm_corpus.py pending \"$WORK/chunks\" \"$WORK/out\"`. It lists the chunks that still have no output. Process the first one: read it, write its output, then run `pending` again. Repeat until nothing is pending. Never hold all chunks in context at once."
    },
    {
     "title": "Reduce",
     "text": "Run `python3 <skill>/scripts/rlm_corpus.py merge \"$WORK/out\" --out \"$WORK/merged.json\"`. If it lists `failed_outputs`, re-run those chunks. A missing or invalid output is not \"no findings\". Checks that span files are done on the merged list in this step. If the merged list is still too large to read, repeat steps 2 to 4 on the findings."
    },
    {
     "title": "Verify",
     "text": "Re-read each cited release file."
    },
    {
     "title": "Report",
     "text": "Write the report in the format below."
    },
    {
     "title": "Clean up",
     "text": "Delete `$WORK` after the report is delivered."
    }
   ],
   "path": ".github/skills/rlm-devops-release-checklist",
   "files": [
    "scripts/rlm_corpus.py"
   ],
   "helperScripts": 1,
   "notChecked": true,
   "group": "ops",
   "grade": {
    "grade": "A-",
    "score": null,
    "scores": null,
    "design": true,
    "rank": 34
   },
   "example": "Illustrative example: the items and results are made up, not real output.\nSummary: 3 findings (2 high, 1 medium).\n[high] migrations/0042.sql:12  Migration with no rollback note.\n       Fix: Write the reverse migration and its note.\n[medium] package.json:19  Version 2.3.0 in the package, 2.2.0 in the notes.\n       Fix: Make the two versions match.\n[high] signoff.md:26  Security gate has no sign-off.\n       Fix: Record the sign-off before release.\nNot checked: Whether the gates were run; the runtime behaviour."
  },
  {
   "id": "rlm-devops-reliability-review",
   "goal": "Reviews service level objective attainment and error budget use each quarter.",
   "cat": "Installed",
   "on": false,
   "use": "Reviews service level objective attainment and error budget use each quarter. Use when reviewing service reliability.",
   "prompt": "Use the rlm-devops-reliability-review skill on the records for this review.",
   "input": "The records for this review, as text or CSV",
   "output": "A draft report: findings with location, fix and a not-checked list",
   "pros": [
    "Flags a service over its error budget with no action, an objective with no definition, and an attainment that does not follow from the counts."
   ],
   "cons": [
    "Not checked: Customer impact beyond the measured SLO."
   ],
   "items": [
    "svc-api.slo",
    "svc-web.slo",
    "svc-search.slo",
    "svc-billing.slo",
    "svc-auth.slo",
    "svc-worker.slo"
   ],
   "steps": [
    {
     "layout": "row",
     "note": "Inspect. The records in scope are listed, and any skipped file is reported."
    },
    {
     "layout": "chunks",
     "groups": [
      0,
      0,
      1,
      1,
      2,
      2
     ],
     "note": "Partition. The records are cut into chunks, each read on its own."
    },
    {
     "layout": "parallel",
     "groups": [
      0,
      0,
      1,
      1,
      2,
      2
     ],
     "state": [
      "ok",
      "ok",
      "warn",
      "bad",
      "ok",
      "ok"
     ],
     "note": "Map. Each chunk is checked against this skill's rules, one chunk at a time."
    },
    {
     "layout": "bins",
     "bins": [
      "within budget",
      "budget used up",
      "no objective"
     ],
     "binOf": [
      0,
      0,
      2,
      1,
      0,
      2
     ],
     "note": "Rank. Each service is placed by its error budget and whether its objective is defined."
    },
    {
     "layout": "gate",
     "pass": [
      true,
      true,
      true,
      false,
      true,
      true
     ],
     "note": "Verify. Each cited line is re-read, and a finding that does not hold is dropped."
    },
    {
     "layout": "doc",
     "docLabel": "draft report",
     "note": "Report. Status: draft for the owner to review. It is not a decision."
    }
   ],
   "outcome": {
    "verdict": "1 service is over its error budget",
    "tone": "bad",
    "bars": [
     [
      "high",
      1,
      "high"
     ],
     [
      "medium",
      1,
      "medium"
     ],
     [
      "low",
      1,
      "low"
     ]
    ],
    "findings": [
     {
      "sev": "high",
      "where": "svc-billing.slo:12",
      "title": "Over its error budget with no action",
      "fix": "Record the action and its owner"
     },
     {
      "sev": "medium",
      "where": "svc-search.slo:19",
      "title": "Objective has no definition",
      "fix": "Define the objective and how it is measured"
     },
     {
      "sev": "low",
      "where": "svc-worker.slo:26",
      "title": "Attainment does not follow from the counts",
      "fix": "Recompute attainment from the counts"
     }
    ],
    "notChecked": "Customer impact beyond the measured SLO."
   },
   "idea": "",
   "why": "",
   "protocol": [
    {
     "title": "Inspect",
     "text": "The corpus is the generic corpus (docs/SKILL-TEMPLATE-STANDARD.md, section 6): prepare `<input>` with the files in scope, as text. Convert any Excel or PDF input to CSV first (export each sheet as CSV; export PDF tables as CSV or text). Text inputs (CSV, TXT, Markdown) are used as they are. Run `python3 <skill>/scripts/rlm_corpus.py scan <input>`. Note the file count, line count and top-level folders. If the corpus is very large, agree the scope with the user, then narrow it with `--include '<folder>'` (repeatable) on every command. Files over 20 MB are skipped; `--max-bytes N` changes the limit. Report what `scan` lists as skipped."
    },
    {
     "title": "Partition",
     "text": "Run `WORK=$(mktemp -d)`, then `python3 <skill>/scripts/rlm_corpus.py chunk <input> \"$WORK/chunks\"`. Chunks are limited to 800 lines and 100,000 characters each, and are cut between definitions where possible. Each `chunk_NNN.md` holds the data notice and labelled file sections. `manifest.json` lists the chunks."
    },
    {
     "title": "Map",
     "text": "For each chunk, run a fresh sub-task (a subagent if you can start one) that sees only that chunk file and the \"Chunk task\" below. It writes `\"$WORK/out/<chunk>.out.md\"`. If you cannot start sub-tasks, run `python3 <skill>/scripts/rlm_corpus.py pending \"$WORK/chunks\" \"$WORK/out\"`. It lists the chunks that still have no output. Process the first one: read it, write its output, then run `pending` again. Repeat until nothing is pending. Never hold all chunks in context at once."
    },
    {
     "title": "Reduce",
     "text": "Run `python3 <skill>/scripts/rlm_corpus.py merge \"$WORK/out\" --out \"$WORK/merged.json\"`. If it lists `failed_outputs`, re-run those chunks. A missing or invalid output is not \"no findings\". Checks that span files are done on the merged list in this step. If the merged list is still too large to read, repeat steps 2 to 4 on the findings."
    },
    {
     "title": "Verify",
     "text": "Recompute each attainment and error budget from the counts."
    },
    {
     "title": "Report",
     "text": "Write the report in the format below."
    },
    {
     "title": "Clean up",
     "text": "Delete `$WORK` after the report is delivered."
    }
   ],
   "path": ".github/skills/rlm-devops-reliability-review",
   "files": [
    "scripts/rlm_corpus.py"
   ],
   "helperScripts": 1,
   "notChecked": true,
   "group": "ops",
   "grade": {
    "grade": "B",
    "score": null,
    "scores": null,
    "design": true,
    "rank": 208
   },
   "example": "Illustrative example: the items and results are made up, not real output.\nSummary: 3 findings (1 high, 1 medium, 1 low).\n[high] svc-billing.slo:12  Over its error budget with no action.\n       Fix: Record the action and its owner.\n[medium] svc-search.slo:19  Objective has no definition.\n       Fix: Define the objective and how it is measured.\n[low] svc-worker.slo:26  Attainment does not follow from the counts.\n       Fix: Recompute attainment from the counts.\nNot checked: Customer impact beyond the measured SLO."
  },
  {
   "id": "rlm-devops-rollback-runbook",
   "goal": "Writes or checks the rollback steps for a service, with verification at each step.",
   "cat": "Installed",
   "on": false,
   "use": "Writes or checks the rollback steps for a service, with verification at each step. Use when writing or checking a rollback runbook.",
   "prompt": "Use the rlm-devops-rollback-runbook skill on the records for this review.",
   "input": "The records for this review, as text or CSV",
   "output": "A draft report: findings with location, fix and a not-checked list",
   "pros": [
    "Flags a step with no verification, a step that depends on a step not yet listed, and a database change with no reverse step."
   ],
   "cons": [
    "Not checked: Whether the rollback works in production."
   ],
   "items": [
    "step-01-drain.md",
    "step-02-revert.md",
    "step-03-db.md",
    "step-04-cache.md",
    "step-05-verify.md",
    "step-06-notify.md"
   ],
   "steps": [
    {
     "layout": "row",
     "note": "Inspect. The records in scope are listed, and any skipped file is reported."
    },
    {
     "layout": "chunks",
     "groups": [
      0,
      0,
      1,
      1,
      2,
      2
     ],
     "note": "Partition. The records are cut into chunks, each read on its own."
    },
    {
     "layout": "parallel",
     "groups": [
      0,
      0,
      1,
      1,
      2,
      2
     ],
     "state": [
      "ok",
      "ok",
      "bad",
      "warn",
      "ok",
      "ok"
     ],
     "note": "Map. Each chunk is checked against this skill's rules, one chunk at a time."
    },
    {
     "layout": "graph",
     "edges": [
      [
       0,
       1
      ],
      [
       1,
       2
      ],
      [
       2,
       4
      ],
      [
       3,
       4
      ],
      [
       4,
       5
      ]
     ],
     "note": "Order. Each step depends on the one before it. A step that is not listed breaks the chain."
    },
    {
     "layout": "gate",
     "pass": [
      true,
      true,
      false,
      true,
      true,
      true
     ],
     "note": "Verify. Each cited line is re-read, and a finding that does not hold is dropped."
    },
    {
     "layout": "doc",
     "docLabel": "draft report",
     "note": "Report. Status: draft for the owner to review. It is not a decision."
    }
   ],
   "outcome": {
    "verdict": "1 database step cannot be reversed",
    "tone": "bad",
    "bars": [
     [
      "high",
      1,
      "high"
     ],
     [
      "medium",
      1,
      "medium"
     ],
     [
      "low",
      1,
      "low"
     ]
    ],
    "findings": [
     {
      "sev": "high",
      "where": "step-03-db.md:12",
      "title": "Database change with no reverse step",
      "fix": "Write the reverse migration"
     },
     {
      "sev": "medium",
      "where": "step-04-cache.md:19",
      "title": "Cache step has no verification",
      "fix": "Add a check that the cache is cleared"
     },
     {
      "sev": "low",
      "where": "step-06-notify.md:26",
      "title": "Notify step depends on a step not listed",
      "fix": "List the step it depends on"
     }
    ],
    "notChecked": "Whether the rollback works in production."
   },
   "idea": "",
   "why": "",
   "protocol": [
    {
     "title": "Inspect",
     "text": "The corpus is the generic corpus (docs/SKILL-TEMPLATE-STANDARD.md, section 6): prepare `<input>` with the files in scope, as text. Convert any Excel or PDF input to CSV first (export each sheet as CSV; export PDF tables as CSV or text). Text inputs (CSV, TXT, Markdown) are used as they are. Run `python3 <skill>/scripts/rlm_corpus.py scan <input>`. Note the file count, line count and top-level folders. If the corpus is very large, agree the scope with the user, then narrow it with `--include '<folder>'` (repeatable) on every command. Files over 20 MB are skipped; `--max-bytes N` changes the limit. Report what `scan` lists as skipped."
    },
    {
     "title": "Partition",
     "text": "Run `WORK=$(mktemp -d)`, then `python3 <skill>/scripts/rlm_corpus.py chunk <input> \"$WORK/chunks\"`. Chunks are limited to 800 lines and 100,000 characters each, and are cut between definitions where possible. Each `chunk_NNN.md` holds the data notice and labelled file sections. `manifest.json` lists the chunks."
    },
    {
     "title": "Map",
     "text": "For each chunk, run a fresh sub-task (a subagent if you can start one) that sees only that chunk file and the \"Chunk task\" below. It writes `\"$WORK/out/<chunk>.out.md\"`. If you cannot start sub-tasks, run `python3 <skill>/scripts/rlm_corpus.py pending \"$WORK/chunks\" \"$WORK/out\"`. It lists the chunks that still have no output. Process the first one: read it, write its output, then run `pending` again. Repeat until nothing is pending. Never hold all chunks in context at once."
    },
    {
     "title": "Reduce",
     "text": "Run `python3 <skill>/scripts/rlm_corpus.py merge \"$WORK/out\" --out \"$WORK/merged.json\"`. If it lists `failed_outputs`, re-run those chunks. A missing or invalid output is not \"no findings\". Checks that span files are done on the merged list in this step. If the merged list is still too large to read, repeat steps 2 to 4 on the findings."
    },
    {
     "title": "Verify",
     "text": "Re-read each cited step."
    },
    {
     "title": "Report",
     "text": "Write the report in the format below."
    },
    {
     "title": "Clean up",
     "text": "Delete `$WORK` after the report is delivered."
    }
   ],
   "path": ".github/skills/rlm-devops-rollback-runbook",
   "files": [
    "scripts/rlm_corpus.py"
   ],
   "helperScripts": 1,
   "notChecked": true,
   "group": "ops",
   "grade": {
    "grade": "B+",
    "score": null,
    "scores": null,
    "design": true,
    "rank": 163
   },
   "example": "Illustrative example: the items and results are made up, not real output.\nSummary: 3 findings (1 high, 1 medium, 1 low).\n[high] step-03-db.md:12  Database change with no reverse step.\n       Fix: Write the reverse migration.\n[medium] step-04-cache.md:19  Cache step has no verification.\n       Fix: Add a check that the cache is cleared.\n[low] step-06-notify.md:26  Notify step depends on a step not listed.\n       Fix: List the step it depends on.\nNot checked: Whether the rollback works in production."
  },
  {
   "id": "rlm-devops-triage",
   "goal": "Intake, priority, owner and deadline for unplanned DevOps requests.",
   "cat": "Installed",
   "on": false,
   "use": "Intake, priority, owner and deadline for unplanned DevOps requests. Use when an unplanned DevOps request arrives.",
   "prompt": "Use the rlm-devops-triage skill on the records for this review.",
   "input": "The records for this review, as text or CSV",
   "output": "A draft report: findings with location, fix and a not-checked list",
   "pros": [
    "Flags a request with no ask, an urgent request with no reason, and a request with no owner."
   ],
   "cons": [
    "Not checked: Whether the request is worth doing."
   ],
   "items": [
    "req-1042.md",
    "req-1043.md",
    "req-1044.md",
    "req-1045.md",
    "req-1046.md",
    "req-1047.md"
   ],
   "steps": [
    {
     "layout": "row",
     "note": "Inspect. The records in scope are listed, and any skipped file is reported."
    },
    {
     "layout": "chunks",
     "groups": [
      0,
      0,
      1,
      1,
      2,
      2
     ],
     "note": "Partition. The records are cut into chunks, each read on its own."
    },
    {
     "layout": "parallel",
     "groups": [
      0,
      0,
      1,
      1,
      2,
      2
     ],
     "state": [
      "ok",
      "ok",
      "bad",
      "ok",
      "warn",
      "ok"
     ],
     "note": "Map. Each chunk is checked against this skill's rules, one chunk at a time."
    },
    {
     "layout": "bins",
     "bins": [
      "urgent",
      "normal",
      "later"
     ],
     "binOf": [
      1,
      1,
      0,
      2,
      1,
      0
     ],
     "note": "Rank. Each request is placed by its stated priority."
    },
    {
     "layout": "gate",
     "pass": [
      true,
      true,
      false,
      true,
      true,
      true
     ],
     "note": "Verify. Each cited line is re-read, and a finding that does not hold is dropped."
    },
    {
     "layout": "doc",
     "docLabel": "draft report",
     "note": "Report. Status: draft for the owner to review. It is not a decision."
    }
   ],
   "outcome": {
    "verdict": "1 urgent request has no reason",
    "tone": "bad",
    "bars": [
     [
      "high",
      1,
      "high"
     ],
     [
      "medium",
      1,
      "medium"
     ],
     [
      "low",
      1,
      "low"
     ]
    ],
    "findings": [
     {
      "sev": "high",
      "where": "req-1044.md:12",
      "title": "Urgent request with no reason",
      "fix": "Give the reason or lower the priority"
     },
     {
      "sev": "medium",
      "where": "req-1046.md:19",
      "title": "Request with no owner",
      "fix": "Assign an owner role and a deadline"
     },
     {
      "sev": "low",
      "where": "req-1047.md:26",
      "title": "No ask recorded",
      "fix": "Write the ask in one sentence"
     }
    ],
    "notChecked": "Whether the request is worth doing."
   },
   "idea": "",
   "why": "",
   "protocol": [
    {
     "title": "Inspect",
     "text": "The corpus is the generic corpus (docs/SKILL-TEMPLATE-STANDARD.md, section 6): prepare `<input>` with the files in scope, as text. Convert any Excel or PDF input to CSV first (export each sheet as CSV; export PDF tables as CSV or text). Text inputs (CSV, TXT, Markdown) are used as they are. Run `python3 <skill>/scripts/rlm_corpus.py scan <input>`. Note the file count, line count and top-level folders. If the corpus is very large, agree the scope with the user, then narrow it with `--include '<folder>'` (repeatable) on every command. Files over 20 MB are skipped; `--max-bytes N` changes the limit. Report what `scan` lists as skipped."
    },
    {
     "title": "Partition",
     "text": "Run `WORK=$(mktemp -d)`, then `python3 <skill>/scripts/rlm_corpus.py chunk <input> \"$WORK/chunks\"`. Chunks are limited to 800 lines and 100,000 characters each, and are cut between definitions where possible. Each `chunk_NNN.md` holds the data notice and labelled file sections. `manifest.json` lists the chunks."
    },
    {
     "title": "Map",
     "text": "For each chunk, run a fresh sub-task (a subagent if you can start one) that sees only that chunk file and the \"Chunk task\" below. It writes `\"$WORK/out/<chunk>.out.md\"`. If you cannot start sub-tasks, run `python3 <skill>/scripts/rlm_corpus.py pending \"$WORK/chunks\" \"$WORK/out\"`. It lists the chunks that still have no output. Process the first one: read it, write its output, then run `pending` again. Repeat until nothing is pending. Never hold all chunks in context at once."
    },
    {
     "title": "Reduce",
     "text": "Run `python3 <skill>/scripts/rlm_corpus.py merge \"$WORK/out\" --out \"$WORK/merged.json\"`. If it lists `failed_outputs`, re-run those chunks. A missing or invalid output is not \"no findings\". Checks that span files are done on the merged list in this step. If the merged list is still too large to read, repeat steps 2 to 4 on the findings."
    },
    {
     "title": "Verify",
     "text": "Re-read each cited line."
    },
    {
     "title": "Report",
     "text": "Write the report in the format below."
    },
    {
     "title": "Clean up",
     "text": "Delete `$WORK` after the report is delivered."
    }
   ],
   "path": ".github/skills/rlm-devops-triage",
   "files": [
    "scripts/rlm_corpus.py"
   ],
   "helperScripts": 1,
   "notChecked": true,
   "group": "ops",
   "grade": {
    "grade": "C+",
    "score": null,
    "scores": null,
    "design": true,
    "rank": 215
   },
   "example": "Illustrative example: the items and results are made up, not real output.\nSummary: 3 findings (1 high, 1 medium, 1 low).\n[high] req-1044.md:12  Urgent request with no reason.\n       Fix: Give the reason or lower the priority.\n[medium] req-1046.md:19  Request with no owner.\n       Fix: Assign an owner role and a deadline.\n[low] req-1047.md:26  No ask recorded.\n       Fix: Write the ask in one sentence.\nNot checked: Whether the request is worth doing."
  },
  {
   "id": "rlm-devops-vulnerability-triage",
   "goal": "Ranks new vulnerability findings from dependency and image scans each week by exposure.",
   "cat": "Installed",
   "on": false,
   "use": "Ranks new vulnerability findings from dependency and image scans each week by exposure. Use when triaging new scan findings.",
   "prompt": "Use the rlm-devops-vulnerability-triage skill on the records for this review.",
   "input": "The records for this review, as text or CSV",
   "output": "A draft report: findings with location, fix and a not-checked list",
   "pros": [
    "Flags a finding with no identifier, a high severity on an unreachable component ranked above a reachable one, and a finding with no fixed version."
   ],
   "cons": [
    "Not checked: Exploitability beyond the stated reachability."
   ],
   "items": [
    "cve-lodash.json",
    "cve-openssl.json",
    "cve-libxml.json",
    "cve-image-base.json",
    "cve-jwt.json",
    "cve-zlib.json"
   ],
   "steps": [
    {
     "layout": "row",
     "note": "Inspect. The records in scope are listed, and any skipped file is reported."
    },
    {
     "layout": "chunks",
     "groups": [
      0,
      0,
      1,
      1,
      2,
      2
     ],
     "note": "Partition. The records are cut into chunks, each read on its own."
    },
    {
     "layout": "parallel",
     "groups": [
      0,
      0,
      1,
      1,
      2,
      2
     ],
     "state": [
      "ok",
      "ok",
      "warn",
      "ok",
      "bad",
      "ok"
     ],
     "note": "Map. Each chunk is checked against this skill's rules, one chunk at a time."
    },
    {
     "layout": "bins",
     "bins": [
      "public and reachable",
      "internal",
      "unreachable"
     ],
     "binOf": [
      1,
      1,
      2,
      1,
      0,
      2
     ],
     "note": "Rank. Each finding is placed by whether a public service can reach it."
    },
    {
     "layout": "gate",
     "pass": [
      true,
      true,
      true,
      true,
      false,
      true
     ],
     "note": "Verify. Each cited line is re-read, and a finding that does not hold is dropped."
    },
    {
     "layout": "doc",
     "docLabel": "draft report",
     "note": "Report. Status: draft for the owner to review. It is not a decision."
    }
   ],
   "outcome": {
    "verdict": "1 reachable vulnerability needs a patch this week",
    "tone": "bad",
    "bars": [
     [
      "high",
      1,
      "high"
     ],
     [
      "medium",
      1,
      "medium"
     ],
     [
      "low",
      1,
      "low"
     ]
    ],
    "findings": [
     {
      "sev": "high",
      "where": "cve-jwt.json:12",
      "title": "Reachable from a public service",
      "fix": "Patch this week"
     },
     {
      "sev": "medium",
      "where": "cve-libxml.json:19",
      "title": "High severity, unreachable, ranked above a reachable one",
      "fix": "Re-rank by reachability"
     },
     {
      "sev": "low",
      "where": "cve-zlib.json:26",
      "title": "Finding with no identifier",
      "fix": "Record the identifier from the scanner"
     }
    ],
    "notChecked": "Exploitability beyond the stated reachability."
   },
   "idea": "",
   "why": "",
   "protocol": [
    {
     "title": "Inspect",
     "text": "The corpus is the generic corpus (docs/SKILL-TEMPLATE-STANDARD.md, section 6): prepare `<input>` with the files in scope, as text. Convert any Excel or PDF input to CSV first (export each sheet as CSV; export PDF tables as CSV or text). Text inputs (CSV, TXT, Markdown) are used as they are. Run `python3 <skill>/scripts/rlm_corpus.py scan <input>`. Note the file count, line count and top-level folders. If the corpus is very large, agree the scope with the user, then narrow it with `--include '<folder>'` (repeatable) on every command. Files over 20 MB are skipped; `--max-bytes N` changes the limit. Report what `scan` lists as skipped."
    },
    {
     "title": "Partition",
     "text": "Run `WORK=$(mktemp -d)`, then `python3 <skill>/scripts/rlm_corpus.py chunk <input> \"$WORK/chunks\"`. Chunks are limited to 800 lines and 100,000 characters each, and are cut between definitions where possible. Each `chunk_NNN.md` holds the data notice and labelled file sections. `manifest.json` lists the chunks."
    },
    {
     "title": "Map",
     "text": "For each chunk, run a fresh sub-task (a subagent if you can start one) that sees only that chunk file and the \"Chunk task\" below. It writes `\"$WORK/out/<chunk>.out.md\"`. If you cannot start sub-tasks, run `python3 <skill>/scripts/rlm_corpus.py pending \"$WORK/chunks\" \"$WORK/out\"`. It lists the chunks that still have no output. Process the first one: read it, write its output, then run `pending` again. Repeat until nothing is pending. Never hold all chunks in context at once."
    },
    {
     "title": "Reduce",
     "text": "Run `python3 <skill>/scripts/rlm_corpus.py merge \"$WORK/out\" --out \"$WORK/merged.json\"`. If it lists `failed_outputs`, re-run those chunks. A missing or invalid output is not \"no findings\". Checks that span files are done on the merged list in this step. If the merged list is still too large to read, repeat steps 2 to 4 on the findings."
    },
    {
     "title": "Verify",
     "text": "Confirm the reachability from the service description."
    },
    {
     "title": "Report",
     "text": "Write the report in the format below."
    },
    {
     "title": "Clean up",
     "text": "Delete `$WORK` after the report is delivered."
    }
   ],
   "path": ".github/skills/rlm-devops-vulnerability-triage",
   "files": [
    "scripts/rlm_corpus.py"
   ],
   "helperScripts": 1,
   "notChecked": true,
   "group": "ops",
   "grade": {
    "grade": "B+",
    "score": null,
    "scores": null,
    "design": true,
    "rank": 164
   },
   "example": "Illustrative example: the items and results are made up, not real output.\nSummary: 3 findings (1 high, 1 medium, 1 low).\n[high] cve-jwt.json:12  Reachable from a public service.\n       Fix: Patch this week.\n[medium] cve-libxml.json:19  High severity, unreachable, ranked above a reachable one.\n       Fix: Re-rank by reachability.\n[low] cve-zlib.json:26  Finding with no identifier.\n       Fix: Record the identifier from the scanner.\nNot checked: Exploitability beyond the stated reachability."
  },
  {
   "id": "rlm-devops-weekly-delivery-report",
   "goal": "Reports deploy frequency, lead time, change failure rate and time to restore each week, with the week-on-week…",
   "cat": "Installed",
   "on": false,
   "use": "Reports deploy frequency, lead time, change failure rate and time to restore each week, with the week-on-week change. Use when preparing the weekly delivery report.",
   "prompt": "Use the rlm-devops-weekly-delivery-report skill on the records for this review.",
   "input": "The records for this review, as text or CSV",
   "output": "A draft report: findings with location, fix and a not-checked list",
   "pros": [
    "Flags a measure with no source records, a failure with no restore time, and a week with missing records."
   ],
   "cons": [
    "Not checked: Whether the metrics reflect real customer value."
   ],
   "items": [
    "week-40.csv",
    "week-41.csv",
    "week-42.csv",
    "week-43.csv",
    "week-44.csv",
    "week-45.csv"
   ],
   "steps": [
    {
     "layout": "row",
     "note": "Inspect. The records in scope are listed, and any skipped file is reported."
    },
    {
     "layout": "chunks",
     "groups": [
      0,
      0,
      1,
      1,
      2,
      2
     ],
     "note": "Partition. The records are cut into chunks, each read on its own."
    },
    {
     "layout": "parallel",
     "groups": [
      0,
      0,
      1,
      1,
      2,
      2
     ],
     "state": [
      "ok",
      "ok",
      "warn",
      "ok",
      "bad",
      "ok"
     ],
     "note": "Map. Each chunk is checked against this skill's rules, one chunk at a time."
    },
    {
     "layout": "funnel",
     "note": "Compute. Each measure is computed from the week's records by the published definition."
    },
    {
     "layout": "gate",
     "pass": [
      true,
      true,
      true,
      true,
      false,
      true
     ],
     "note": "Verify. Each cited line is re-read, and a finding that does not hold is dropped."
    },
    {
     "layout": "doc",
     "docLabel": "draft report",
     "note": "Report. Status: draft for the owner to review. It is not a decision."
    }
   ],
   "outcome": {
    "verdict": "1 week has missing records",
    "tone": "bad",
    "bars": [
     [
      "high",
      1,
      "high"
     ],
     [
      "medium",
      1,
      "medium"
     ],
     [
      "low",
      1,
      "low"
     ]
    ],
    "findings": [
     {
      "sev": "high",
      "where": "week-44.csv:12",
      "title": "Week with missing records",
      "fix": "Add the missing records and recompute"
     },
     {
      "sev": "medium",
      "where": "week-42.csv:19",
      "title": "Failure with no restore time",
      "fix": "Record the restore time"
     },
     {
      "sev": "low",
      "where": "week-45.csv:26",
      "title": "Measure with no source records",
      "fix": "Name the source of the measure"
     }
    ],
    "notChecked": "Whether the metrics reflect real customer value."
   },
   "idea": "",
   "why": "",
   "protocol": [
    {
     "title": "Inspect",
     "text": "The corpus is the generic corpus (docs/SKILL-TEMPLATE-STANDARD.md, section 6): prepare `<input>` with the files in scope, as text. Convert any Excel or PDF input to CSV first (export each sheet as CSV; export PDF tables as CSV or text). Text inputs (CSV, TXT, Markdown) are used as they are. Run `python3 <skill>/scripts/rlm_corpus.py scan <input>`. Note the file count, line count and top-level folders. If the corpus is very large, agree the scope with the user, then narrow it with `--include '<folder>'` (repeatable) on every command. Files over 20 MB are skipped; `--max-bytes N` changes the limit. Report what `scan` lists as skipped."
    },
    {
     "title": "Partition",
     "text": "Run `WORK=$(mktemp -d)`, then `python3 <skill>/scripts/rlm_corpus.py chunk <input> \"$WORK/chunks\"`. Chunks are limited to 800 lines and 100,000 characters each, and are cut between definitions where possible. Each `chunk_NNN.md` holds the data notice and labelled file sections. `manifest.json` lists the chunks."
    },
    {
     "title": "Map",
     "text": "For each chunk, run a fresh sub-task (a subagent if you can start one) that sees only that chunk file and the \"Chunk task\" below. It writes `\"$WORK/out/<chunk>.out.md\"`. If you cannot start sub-tasks, run `python3 <skill>/scripts/rlm_corpus.py pending \"$WORK/chunks\" \"$WORK/out\"`. It lists the chunks that still have no output. Process the first one: read it, write its output, then run `pending` again. Repeat until nothing is pending. Never hold all chunks in context at once."
    },
    {
     "title": "Reduce",
     "text": "Run `python3 <skill>/scripts/rlm_corpus.py merge \"$WORK/out\" --out \"$WORK/merged.json\"`. If it lists `failed_outputs`, re-run those chunks. A missing or invalid output is not \"no findings\". Checks that span files are done on the merged list in this step. If the merged list is still too large to read, repeat steps 2 to 4 on the findings."
    },
    {
     "title": "Verify",
     "text": "Recompute each measure from the records."
    },
    {
     "title": "Report",
     "text": "Write the report in the format below."
    },
    {
     "title": "Clean up",
     "text": "Delete `$WORK` after the report is delivered."
    }
   ],
   "path": ".github/skills/rlm-devops-weekly-delivery-report",
   "files": [
    "scripts/rlm_corpus.py"
   ],
   "helperScripts": 1,
   "notChecked": true,
   "group": "ops",
   "grade": {
    "grade": "B",
    "score": null,
    "scores": null,
    "design": true,
    "rank": 209
   },
   "example": "Illustrative example: the items and results are made up, not real output.\nSummary: 3 findings (1 high, 1 medium, 1 low).\n[high] week-44.csv:12  Week with missing records.\n       Fix: Add the missing records and recompute.\n[medium] week-42.csv:19  Failure with no restore time.\n       Fix: Record the restore time.\n[low] week-45.csv:26  Measure with no source records.\n       Fix: Name the source of the measure.\nNot checked: Whether the metrics reflect real customer value."
  },
  {
   "id": "rlm-doc-generator",
   "goal": "Generate developer documentation for a large repository using Recursive Language Model (RLM) decomposition.",
   "cat": "Installed",
   "on": false,
   "use": "Generate developer documentation for a large repository using Recursive Language Model (RLM) decomposition. Use when asked to document a codebase, write module or API reference pages, or explain how modules connect, when the code is too large to read in one pass.",
   "prompt": "Use the rlm-doc-generator skill.",
   "input": "",
   "output": "",
   "pros": [],
   "cons": [],
   "items": [
    "input-1",
    "input-2",
    "input-3",
    "input-4",
    "input-5",
    "input-6"
   ],
   "steps": [
    {
     "layout": "row",
     "note": "Inspect. Run `python3 <skill>/scripts/rlm_corpus.py scan <repo>` for the size and layout."
    },
    {
     "layout": "chunks",
     "note": "Graph. Run `python3 <skill>/scripts/rlm_corpus.py graph <repo>` to see how modules import each other.",
     "groups": [
      0,
      0,
      1,
      1,
      2,
      2
     ]
    },
    {
     "layout": "parallel",
     "note": "Partition. Run `WORK=$(mktemp -d)`, then `python3 <skill>/scripts/rlm_corpus.py chunk <repo> \"$WORK/chunks\"`.",
     "groups": [
      0,
      0,
      1,
      1,
      2,
      2
     ],
     "state": [
      "ok",
      "ok",
      "ok",
      "ok",
      "ok",
      "ok"
     ]
    },
    {
     "layout": "funnel",
     "note": "Map. For each chunk, run a fresh sub-task (a subagent if you can start one) that sees only that chunk file and the \"Chunk task\" below."
    },
    {
     "layout": "gate",
     "note": "Reduce. Run `python3 <skill>/scripts/rlm_corpus.py merge \"$WORK/out\" --out \"$WORK/merged.json\"`.",
     "pass": [
      true,
      true,
      true,
      true,
      true,
      false
     ]
    },
    {
     "layout": "doc",
     "note": "Write. Create one document per top-level module or package, plus an overview page that uses the import graph.",
     "docLabel": "report"
    }
   ],
   "outcome": null,
   "idea": "",
   "why": "",
   "protocol": [
    {
     "title": "Inspect",
     "text": "Run `python3 <skill>/scripts/rlm_corpus.py scan <repo>` for the size and layout. If the repo is very large, agree the scope with the user (for example, one package at a time) and narrow it with `--include 'pkg/*'` (repeatable) on every command. Files over 20 MB are skipped; report what `scan` lists as skipped."
    },
    {
     "title": "Graph",
     "text": "Run `python3 <skill>/scripts/rlm_corpus.py graph <repo>` to see how modules import each other. Use it for the \"how it connects\" section."
    },
    {
     "title": "Partition",
     "text": "Run `WORK=$(mktemp -d)`, then `python3 <skill>/scripts/rlm_corpus.py chunk <repo> \"$WORK/chunks\"`. Chunks are limited to 800 lines and 100,000 characters each, and are cut between definitions where possible."
    },
    {
     "title": "Map",
     "text": "For each chunk, run a fresh sub-task (a subagent if you can start one) that sees only that chunk file and the \"Chunk task\" below. It writes `\"$WORK/out/<chunk>.out.md\"`. If you cannot start sub-tasks, run `python3 <skill>/scripts/rlm_corpus.py pending \"$WORK/chunks\" \"$WORK/out\"` and process the first listed chunk: read it, write its output, then run `pending` again until nothing is pending."
    },
    {
     "title": "Reduce",
     "text": "Run `python3 <skill>/scripts/rlm_corpus.py merge \"$WORK/out\" --out \"$WORK/merged.json\"`. Re-run any `failed_outputs`. Missing output means the module is undocumented, not that it is simple. Repeat the map step if the merged facts are still too large to work with."
    },
    {
     "title": "Write",
     "text": "Create one document per top-level module or package, plus an overview page that uses the import graph. Use the format below."
    },
    {
     "title": "Verify",
     "text": "Check every signature you quote against the source file. Remove anything you cannot confirm."
    },
    {
     "title": "Clean up",
     "text": "Delete `$WORK` after the documents are written."
    }
   ],
   "path": ".github/skills/rlm-doc-generator",
   "files": [
    "scripts/rlm_corpus.py"
   ],
   "helperScripts": 1,
   "notChecked": true,
   "group": "engineering",
   "grade": {
    "grade": "C+",
    "score": "3.00",
    "scores": [
     3,
     3,
     2,
     3,
     5
    ],
    "design": true,
    "rank": 211
   }
  },
  {
   "id": "rlm-documentation-accuracy-review",
   "goal": "Documentation accuracy review: docs that match the code they describe.",
   "cat": "Installed",
   "on": false,
   "use": "Documentation accuracy review: docs that match the code they describe. Use when docs or examples are changed or the code they describe changed.",
   "prompt": "Use the rlm-documentation-accuracy-review skill.",
   "input": "",
   "output": "",
   "pros": [],
   "cons": [],
   "items": [
    "input-1",
    "input-2",
    "input-3",
    "input-4",
    "input-5",
    "input-6"
   ],
   "steps": [
    {
     "layout": "row",
     "note": "List the docs. Find the README, guides and examples that mention the changed code."
    },
    {
     "layout": "chunks",
     "note": "Run examples. Check each example still compiles or runs as written.",
     "groups": [
      0,
      0,
      1,
      1,
      2,
      2
     ]
    },
    {
     "layout": "parallel",
     "note": "Compare. Flag names, options and steps that no longer match the code.",
     "groups": [
      0,
      0,
      1,
      1,
      2,
      2
     ],
     "state": [
      "ok",
      "ok",
      "ok",
      "ok",
      "ok",
      "ok"
     ]
    },
    {
     "layout": "funnel",
     "note": "Check links. Flag references to moved or deleted files."
    },
    {
     "layout": "gate",
     "note": "Report. Each mismatch with file and line, and the correction.",
     "pass": [
      true,
      true,
      true,
      true,
      true,
      false
     ]
    }
   ],
   "outcome": null,
   "idea": "",
   "why": "",
   "protocol": [
    {
     "title": "List the docs",
     "text": "Find the README, guides and examples that mention the changed code."
    },
    {
     "title": "Run examples",
     "text": "Check each example still compiles or runs as written."
    },
    {
     "title": "Compare",
     "text": "Flag names, options and steps that no longer match the code."
    },
    {
     "title": "Check links",
     "text": "Flag references to moved or deleted files."
    },
    {
     "title": "Report",
     "text": "Each mismatch with file and line, and the correction."
    }
   ],
   "path": ".github/skills/rlm-documentation-accuracy-review",
   "files": [],
   "helperScripts": 0,
   "notChecked": true,
   "group": "review",
   "grade": {
    "grade": "B",
    "score": "3.45",
    "scores": [
     3,
     4,
     3,
     4,
     4
    ],
    "design": true,
    "rank": 195
   }
  },
  {
   "id": "rlm-dotnet-configuration-review",
   "goal": "NET configuration review: options binding, validation at startup and secrets outside appsettings.",
   "cat": "Installed",
   "on": false,
   "use": "NET configuration review: options binding, validation at startup and secrets outside appsettings. Use when a .NET service reads settings.",
   "prompt": "Use the rlm-dotnet-configuration-review skill.",
   "input": "",
   "output": "",
   "pros": [],
   "cons": [],
   "items": [
    "input-1",
    "input-2",
    "input-3",
    "input-4",
    "input-5",
    "input-6"
   ],
   "steps": [
    {
     "layout": "row",
     "note": "List the options classes and where they are bound."
    },
    {
     "layout": "chunks",
     "note": "Check validation. Each options class should be validated at startup.",
     "groups": [
      0,
      0,
      1,
      1,
      2,
      2
     ]
    },
    {
     "layout": "parallel",
     "note": "Check secrets. Flag secrets in appsettings or environment files committed to the repository.",
     "groups": [
      0,
      0,
      1,
      1,
      2,
      2
     ],
     "state": [
      "ok",
      "ok",
      "ok",
      "ok",
      "ok",
      "ok"
     ]
    },
    {
     "layout": "funnel",
     "note": "Check environments. Flag development settings reachable in production."
    },
    {
     "layout": "gate",
     "note": "Report. Each setting with file and line, the problem and the fix.",
     "pass": [
      true,
      true,
      true,
      true,
      true,
      false
     ]
    }
   ],
   "outcome": null,
   "idea": "",
   "why": "",
   "protocol": [
    {
     "title": "List the options classes and where they are bound",
     "text": ""
    },
    {
     "title": "Check validation",
     "text": "Each options class should be validated at startup."
    },
    {
     "title": "Check secrets",
     "text": "Flag secrets in appsettings or environment files committed to the repository."
    },
    {
     "title": "Check environments",
     "text": "Flag development settings reachable in production."
    },
    {
     "title": "Report",
     "text": "Each setting with file and line, the problem and the fix."
    }
   ],
   "path": ".github/skills/rlm-dotnet-configuration-review",
   "files": [],
   "helperScripts": 0,
   "notChecked": true,
   "group": "dotnet",
   "grade": {
    "grade": "B+",
    "score": "3.85",
    "scores": [
     4,
     4,
     4,
     3,
     4
    ],
    "design": true,
    "rank": 63
   }
  },
  {
   "id": "rlm-dotnet-dependency-injection-review",
   "goal": "NET dependency injection review: lifetimes, captive dependencies and service locator use.",
   "cat": "Installed",
   "on": false,
   "use": "NET dependency injection review: lifetimes, captive dependencies and service locator use. Use when services are registered with the built-in container.",
   "prompt": "Use the rlm-dotnet-dependency-injection-review skill.",
   "input": "",
   "output": "",
   "pros": [],
   "cons": [],
   "items": [
    "input-1",
    "input-2",
    "input-3",
    "input-4",
    "input-5",
    "input-6"
   ],
   "steps": [
    {
     "layout": "row",
     "note": "List the registrations and their lifetimes."
    },
    {
     "layout": "chunks",
     "note": "Check captive dependencies. A singleton must not hold a scoped or transient service.",
     "groups": [
      0,
      0,
      1,
      1,
      2,
      2
     ]
    },
    {
     "layout": "parallel",
     "note": "Check the locator. Flag services resolved from the provider inside business code.",
     "groups": [
      0,
      0,
      1,
      1,
      2,
      2
     ],
     "state": [
      "ok",
      "ok",
      "ok",
      "ok",
      "ok",
      "ok"
     ]
    },
    {
     "layout": "funnel",
     "note": "Check disposal. Flag transient disposables registered as singletons."
    },
    {
     "layout": "gate",
     "note": "Report. Each registration with file and line, the problem and the fix.",
     "pass": [
      true,
      true,
      true,
      true,
      true,
      false
     ]
    }
   ],
   "outcome": null,
   "idea": "",
   "why": "",
   "protocol": [
    {
     "title": "List the registrations and their lifetimes",
     "text": ""
    },
    {
     "title": "Check captive dependencies",
     "text": "A singleton must not hold a scoped or transient service."
    },
    {
     "title": "Check the locator",
     "text": "Flag services resolved from the provider inside business code."
    },
    {
     "title": "Check disposal",
     "text": "Flag transient disposables registered as singletons."
    },
    {
     "title": "Report",
     "text": "Each registration with file and line, the problem and the fix."
    }
   ],
   "path": ".github/skills/rlm-dotnet-dependency-injection-review",
   "files": [],
   "helperScripts": 0,
   "notChecked": true,
   "group": "dotnet",
   "grade": {
    "grade": "B+",
    "score": "3.85",
    "scores": [
     4,
     3,
     5,
     3,
     4
    ],
    "design": true,
    "rank": 64
   }
  },
  {
   "id": "rlm-dotnet-logging-review",
   "goal": "NET logging review: structured messages, levels and sensitive data in log scopes.",
   "cat": "Installed",
   "on": false,
   "use": "NET logging review: structured messages, levels and sensitive data in log scopes. Use when a .NET service writes logs.",
   "prompt": "Use the rlm-dotnet-logging-review skill.",
   "input": "",
   "output": "",
   "pros": [],
   "cons": [],
   "items": [
    "input-1",
    "input-2",
    "input-3",
    "input-4",
    "input-5",
    "input-6"
   ],
   "steps": [
    {
     "layout": "row",
     "note": "List the log calls. Find the logger and each message template."
    },
    {
     "layout": "chunks",
     "note": "Check templates. Flag string interpolation instead of structured placeholders.",
     "groups": [
      0,
      0,
      1,
      1,
      2,
      2
     ]
    },
    {
     "layout": "parallel",
     "note": "Check levels. Flag errors logged as information and noise logged as errors.",
     "groups": [
      0,
      0,
      1,
      1,
      2,
      2
     ],
     "state": [
      "ok",
      "ok",
      "ok",
      "ok",
      "ok",
      "ok"
     ]
    },
    {
     "layout": "funnel",
     "note": "Check sensitive data. Flag personal data or tokens in messages or scopes."
    },
    {
     "layout": "gate",
     "note": "Report. Each call with file and line, the problem and the fix.",
     "pass": [
      true,
      true,
      true,
      true,
      true,
      false
     ]
    }
   ],
   "outcome": null,
   "idea": "",
   "why": "",
   "protocol": [
    {
     "title": "List the log calls",
     "text": "Find the logger and each message template."
    },
    {
     "title": "Check templates",
     "text": "Flag string interpolation instead of structured placeholders."
    },
    {
     "title": "Check levels",
     "text": "Flag errors logged as information and noise logged as errors."
    },
    {
     "title": "Check sensitive data",
     "text": "Flag personal data or tokens in messages or scopes."
    },
    {
     "title": "Report",
     "text": "Each call with file and line, the problem and the fix."
    }
   ],
   "path": ".github/skills/rlm-dotnet-logging-review",
   "files": [],
   "helperScripts": 0,
   "notChecked": true,
   "group": "dotnet",
   "grade": {
    "grade": "B+",
    "score": "3.80",
    "scores": [
     4,
     4,
     3,
     4,
     4
    ],
    "design": true,
    "rank": 113
   }
  },
  {
   "id": "rlm-dotnet-review",
   "goal": "Review a .NET project for package versions, configuration, dependency injection, runtime settings and build s…",
   "cat": "Installed",
   "on": false,
   "use": "Review a .NET project for package versions, configuration, dependency injection, runtime settings and build safety. Use when asked to review or harden a .NET solution.",
   "prompt": "Use the rlm-dotnet-review skill.",
   "input": "",
   "output": "",
   "pros": [],
   "cons": [],
   "items": [
    "input-1",
    "input-2",
    "input-3",
    "input-4",
    "input-5",
    "input-6"
   ],
   "steps": [
    {
     "layout": "row",
     "note": "Read the solution. Open the .sln, every .csproj, Directory.Packages.props if used, global.json, NuGet.config and any appsettings files."
    },
    {
     "layout": "chunks",
     "note": "Check packages. List each package and version.",
     "groups": [
      0,
      0,
      1,
      1,
      2,
      2
     ]
    },
    {
     "layout": "parallel",
     "note": "Check configuration. Flag secrets in appsettings, connection strings with embedded passwords, and `Development` settings that would run in production.",
     "groups": [
      0,
      0,
      1,
      1,
      2,
      2
     ],
     "state": [
      "ok",
      "ok",
      "ok",
      "ok",
      "ok",
      "ok"
     ]
    },
    {
     "layout": "funnel",
     "note": "Check dependency injection. Flag services registered with the wrong lifetime (a scoped service held by a singleton), and service locator calls inside business code."
    },
    {
     "layout": "gate",
     "note": "Check runtime settings. Flag debug builds shipped, detailed errors enabled outside development, and `TreatWarningsAsErrors` turned off with many warnings ignored.",
     "pass": [
      true,
      true,
      true,
      true,
      true,
      false
     ]
    },
    {
     "layout": "doc",
     "note": "Check build and CI. Note the build commands, whether restore is locked, and whether tests run in the pipeline.",
     "docLabel": "report"
    }
   ],
   "outcome": null,
   "idea": "",
   "why": "",
   "protocol": [
    {
     "title": "Read the solution",
     "text": "Open the .sln, every .csproj, Directory.Packages.props if used, global.json, NuGet.config and any appsettings files. Note the target frameworks and whether a framework is out of support."
    },
    {
     "title": "Check packages",
     "text": "List each package and version. Flag versions with known advisories, packages pinned to floating versions (`*`), and duplicate packages with different versions."
    },
    {
     "title": "Check configuration",
     "text": "Flag secrets in appsettings, connection strings with embedded passwords, and `Development` settings that would run in production."
    },
    {
     "title": "Check dependency injection",
     "text": "Flag services registered with the wrong lifetime (a scoped service held by a singleton), and service locator calls inside business code."
    },
    {
     "title": "Check runtime settings",
     "text": "Flag debug builds shipped, detailed errors enabled outside development, and `TreatWarningsAsErrors` turned off with many warnings ignored."
    },
    {
     "title": "Check build and CI",
     "text": "Note the build commands, whether restore is locked, and whether tests run in the pipeline."
    },
    {
     "title": "Report",
     "text": "List each finding as `file`, with severity (high, medium or low), the problem and the fix. Mark what you did not run."
    }
   ],
   "path": ".github/skills/rlm-dotnet-review",
   "files": [],
   "helperScripts": 0,
   "notChecked": true,
   "group": "dotnet",
   "grade": {
    "grade": "B+",
    "score": "3.85",
    "scores": [
     4,
     3,
     5,
     3,
     4
    ],
    "design": true,
    "rank": 65
   }
  },
  {
   "id": "rlm-dotnet-security-analyser-review",
   "goal": "NET security analyser review: analyser rules enabled, suppressed and treated as errors.",
   "cat": "Installed",
   "on": false,
   "use": "NET security analyser review: analyser rules enabled, suppressed and treated as errors. Use when the project's analysers or warning settings are changed.",
   "prompt": "Use the rlm-dotnet-security-analyser-review skill.",
   "input": "",
   "output": "",
   "pros": [],
   "cons": [],
   "items": [
    "input-1",
    "input-2",
    "input-3",
    "input-4",
    "input-5",
    "input-6"
   ],
   "steps": [
    {
     "layout": "row",
     "note": "List the analysers and the security rule sets enabled."
    },
    {
     "layout": "chunks",
     "note": "Check severity. Security rules should be errors, not warnings.",
     "groups": [
      0,
      0,
      1,
      1,
      2,
      2
     ]
    },
    {
     "layout": "parallel",
     "note": "Check suppressions. Each suppression needs a reason.",
     "groups": [
      0,
      0,
      1,
      1,
      2,
      2
     ],
     "state": [
      "ok",
      "ok",
      "ok",
      "ok",
      "ok",
      "ok"
     ]
    },
    {
     "layout": "funnel",
     "note": "Check the build. Analyser errors must fail the build in CI."
    },
    {
     "layout": "gate",
     "note": "Report. The rules enabled, the suppressions and the gaps.",
     "pass": [
      true,
      true,
      true,
      true,
      true,
      false
     ]
    }
   ],
   "outcome": null,
   "idea": "",
   "why": "",
   "protocol": [
    {
     "title": "List the analysers and the security rule sets enabled",
     "text": ""
    },
    {
     "title": "Check severity",
     "text": "Security rules should be errors, not warnings."
    },
    {
     "title": "Check suppressions",
     "text": "Each suppression needs a reason."
    },
    {
     "title": "Check the build",
     "text": "Analyser errors must fail the build in CI."
    },
    {
     "title": "Report",
     "text": "The rules enabled, the suppressions and the gaps."
    }
   ],
   "path": ".github/skills/rlm-dotnet-security-analyser-review",
   "files": [],
   "helperScripts": 0,
   "notChecked": true,
   "group": "dotnet",
   "grade": {
    "grade": "B+",
    "score": "3.85",
    "scores": [
     4,
     4,
     4,
     3,
     4
    ],
    "design": true,
    "rank": 66
   }
  },
  {
   "id": "rlm-dotnet-testing-review",
   "goal": "NET testing review: test isolation, fakes for I/O, coverage of branches and flaky tests.",
   "cat": "Installed",
   "on": false,
   "use": "NET testing review: test isolation, fakes for I/O, coverage of branches and flaky tests. Use when a .NET test project is added or changed.",
   "prompt": "Use the rlm-dotnet-testing-review skill.",
   "input": "",
   "output": "",
   "pros": [],
   "cons": [],
   "items": [
    "input-1",
    "input-2",
    "input-3",
    "input-4",
    "input-5",
    "input-6"
   ],
   "steps": [
    {
     "layout": "row",
     "note": "List the test projects and what each one covers."
    },
    {
     "layout": "chunks",
     "note": "Check isolation. Flag tests that call real databases, networks or the clock.",
     "groups": [
      0,
      0,
      1,
      1,
      2,
      2
     ]
    },
    {
     "layout": "parallel",
     "note": "Check fakes. Each external dependency should have a fake or stub.",
     "groups": [
      0,
      0,
      1,
      1,
      2,
      2
     ],
     "state": [
      "ok",
      "ok",
      "ok",
      "ok",
      "ok",
      "ok"
     ]
    },
    {
     "layout": "funnel",
     "note": "Check flakiness. Flag tests that depend on timing or order."
    },
    {
     "layout": "gate",
     "note": "Report. Each finding with file and line, the problem and the fix.",
     "pass": [
      true,
      true,
      true,
      true,
      true,
      false
     ]
    }
   ],
   "outcome": null,
   "idea": "",
   "why": "",
   "protocol": [
    {
     "title": "List the test projects and what each one covers",
     "text": ""
    },
    {
     "title": "Check isolation",
     "text": "Flag tests that call real databases, networks or the clock."
    },
    {
     "title": "Check fakes",
     "text": "Each external dependency should have a fake or stub."
    },
    {
     "title": "Check flakiness",
     "text": "Flag tests that depend on timing or order."
    },
    {
     "title": "Report",
     "text": "Each finding with file and line, the problem and the fix."
    }
   ],
   "path": ".github/skills/rlm-dotnet-testing-review",
   "files": [],
   "helperScripts": 0,
   "notChecked": true,
   "group": "dotnet",
   "grade": {
    "grade": "B+",
    "score": "3.80",
    "scores": [
     4,
     4,
     3,
     4,
     4
    ],
    "design": true,
    "rank": 114
   }
  },
  {
   "id": "rlm-duplication-review",
   "goal": "Duplication review: copied blocks that should share one implementation.",
   "cat": "Installed",
   "on": false,
   "use": "Duplication review: copied blocks that should share one implementation. Use when the same logic appears in more than one place.",
   "prompt": "Use the rlm-duplication-review skill.",
   "input": "",
   "output": "",
   "pros": [],
   "cons": [],
   "items": [
    "input-1",
    "input-2",
    "input-3",
    "input-4",
    "input-5",
    "input-6"
   ],
   "steps": [
    {
     "layout": "row",
     "note": "Find copies. Compare the changed blocks with similar code in the repository."
    },
    {
     "layout": "chunks",
     "note": "Measure. Note how many copies and how far they have drifted apart.",
     "groups": [
      0,
      0,
      1,
      1,
      2,
      2
     ]
    },
    {
     "layout": "parallel",
     "note": "Check drift. Flag copies where a fix was made in one place only.",
     "groups": [
      0,
      0,
      1,
      1,
      2,
      2
     ],
     "state": [
      "ok",
      "ok",
      "ok",
      "ok",
      "ok",
      "ok"
     ]
    },
    {
     "layout": "funnel",
     "note": "Suggest a shared function. Name where the one implementation should live."
    },
    {
     "layout": "gate",
     "note": "Report. Each group of copies with its locations, the drift and the fix.",
     "pass": [
      true,
      true,
      true,
      true,
      true,
      false
     ]
    }
   ],
   "outcome": null,
   "idea": "",
   "why": "",
   "protocol": [
    {
     "title": "Find copies",
     "text": "Compare the changed blocks with similar code in the repository."
    },
    {
     "title": "Measure",
     "text": "Note how many copies and how far they have drifted apart."
    },
    {
     "title": "Check drift",
     "text": "Flag copies where a fix was made in one place only."
    },
    {
     "title": "Suggest a shared function",
     "text": "Name where the one implementation should live."
    },
    {
     "title": "Report",
     "text": "Each group of copies with its locations, the drift and the fix."
    }
   ],
   "path": ".github/skills/rlm-duplication-review",
   "files": [],
   "helperScripts": 0,
   "notChecked": true,
   "group": "review",
   "grade": {
    "grade": "B+",
    "score": "3.80",
    "scores": [
     4,
     3,
     4,
     4,
     4
    ],
    "design": true,
    "rank": 115
   }
  },
  {
   "id": "rlm-edge-case-review",
   "goal": "Edge case review: empty, maximum, duplicate, invalid and concurrent inputs.",
   "cat": "Installed",
   "on": false,
   "use": "Edge case review: empty, maximum, duplicate, invalid and concurrent inputs. Use when a function or endpoint handles input from outside.",
   "prompt": "Use the rlm-edge-case-review skill.",
   "input": "",
   "output": "",
   "pros": [],
   "cons": [],
   "items": [
    "input-1",
    "input-2",
    "input-3",
    "input-4",
    "input-5",
    "input-6"
   ],
   "steps": [
    {
     "layout": "row",
     "note": "List inputs. Name each parameter and where it comes from."
    },
    {
     "layout": "chunks",
     "note": "Check empty and null. Note how each handles nothing.",
     "groups": [
      0,
      0,
      1,
      1,
      2,
      2
     ]
    },
    {
     "layout": "parallel",
     "note": "Check limits. Note behaviour at zero, one and the maximum.",
     "groups": [
      0,
      0,
      1,
      1,
      2,
      2
     ],
     "state": [
      "ok",
      "ok",
      "ok",
      "ok",
      "ok",
      "ok"
     ]
    },
    {
     "layout": "funnel",
     "note": "Check invalid and duplicate. Note behaviour for bad or repeated input."
    },
    {
     "layout": "gate",
     "note": "Report. Each input with the unhandled case, file and line, and the fix.",
     "pass": [
      true,
      true,
      true,
      true,
      true,
      false
     ]
    }
   ],
   "outcome": null,
   "idea": "",
   "why": "",
   "protocol": [
    {
     "title": "List inputs",
     "text": "Name each parameter and where it comes from."
    },
    {
     "title": "Check empty and null",
     "text": "Note how each handles nothing."
    },
    {
     "title": "Check limits",
     "text": "Note behaviour at zero, one and the maximum."
    },
    {
     "title": "Check invalid and duplicate",
     "text": "Note behaviour for bad or repeated input."
    },
    {
     "title": "Report",
     "text": "Each input with the unhandled case, file and line, and the fix."
    }
   ],
   "path": ".github/skills/rlm-edge-case-review",
   "files": [],
   "helperScripts": 0,
   "notChecked": true,
   "group": "review",
   "grade": {
    "grade": "B+",
    "score": "3.85",
    "scores": [
     4,
     4,
     4,
     3,
     4
    ],
    "design": true,
    "rank": 67
   }
  },
  {
   "id": "rlm-elixir-review",
   "goal": "Elixir review: process supervision, unbounded atoms, input handling and timeouts.",
   "cat": "Installed",
   "on": false,
   "use": "Elixir review: process supervision, unbounded atoms, input handling and timeouts. Use when asked to review an Elixir project or module.",
   "prompt": "Use the rlm-elixir-review skill.",
   "input": "",
   "output": "",
   "pros": [],
   "cons": [],
   "items": [
    "input-1",
    "input-2",
    "input-3",
    "input-4",
    "input-5",
    "input-6"
   ],
   "steps": [
    {
     "layout": "row",
     "note": "Read the project setup. Mix file, the Elixir version and the supervision tree."
    },
    {
     "layout": "chunks",
     "note": "Check atoms. Flag atom creation from user input, which exhausts the atom table.",
     "groups": [
      0,
      0,
      1,
      1,
      2,
      2
     ]
    },
    {
     "layout": "parallel",
     "note": "Check supervision. Flag processes started outside a supervisor.",
     "groups": [
      0,
      0,
      1,
      1,
      2,
      2
     ],
     "state": [
      "ok",
      "ok",
      "ok",
      "ok",
      "ok",
      "ok"
     ]
    },
    {
     "layout": "funnel",
     "note": "Check timeouts. Flag GenServer calls with no timeout."
    },
    {
     "layout": "gate",
     "note": "Report. Each finding with file and line, severity and the fix.",
     "pass": [
      true,
      true,
      true,
      true,
      true,
      false
     ]
    }
   ],
   "outcome": null,
   "idea": "",
   "why": "",
   "protocol": [
    {
     "title": "Read the project setup",
     "text": "Mix file, the Elixir version and the supervision tree."
    },
    {
     "title": "Check atoms",
     "text": "Flag atom creation from user input, which exhausts the atom table."
    },
    {
     "title": "Check supervision",
     "text": "Flag processes started outside a supervisor."
    },
    {
     "title": "Check timeouts",
     "text": "Flag GenServer calls with no timeout."
    },
    {
     "title": "Report",
     "text": "Each finding with file and line, severity and the fix."
    }
   ],
   "path": ".github/skills/rlm-elixir-review",
   "files": [],
   "helperScripts": 0,
   "notChecked": true,
   "group": "languages",
   "grade": {
    "grade": "B",
    "score": "3.65",
    "scores": [
     4,
     4,
     3,
     3,
     4
    ],
    "design": true,
    "rank": 169
   }
  },
  {
   "id": "rlm-entity-framework-review",
   "goal": "Review Entity Framework Core code for query shape, change tracking, migrations, transactions and raw SQL.",
   "cat": "Installed",
   "on": false,
   "use": "Review Entity Framework Core code for query shape, change tracking, migrations, transactions and raw SQL. Use when data access code or migrations change.",
   "prompt": "Use the rlm-entity-framework-review skill.",
   "input": "",
   "output": "",
   "pros": [],
   "cons": [],
   "items": [
    "input-1",
    "input-2",
    "input-3",
    "input-4",
    "input-5",
    "input-6"
   ],
   "steps": [
    {
     "layout": "row",
     "note": "Read the data access. Open the DbContext, the entity configuration and the migration history."
    },
    {
     "layout": "chunks",
     "note": "Check query shape. Flag queries that load whole tables, lazy loading inside loops, and client-side evaluation that should run in the database.",
     "groups": [
      0,
      0,
      1,
      1,
      2,
      2
     ]
    },
    {
     "layout": "parallel",
     "note": "Check tracking. Read-only queries should use no-tracking.",
     "groups": [
      0,
      0,
      1,
      1,
      2,
      2
     ],
     "state": [
      "ok",
      "ok",
      "ok",
      "ok",
      "ok",
      "ok"
     ]
    },
    {
     "layout": "funnel",
     "note": "Check migrations. Flag migrations that drop columns, change types or lock large tables without a plan."
    },
    {
     "layout": "gate",
     "note": "Check transactions and raw SQL. Multi-step changes need a transaction.",
     "pass": [
      true,
      true,
      true,
      true,
      true,
      false
     ]
    },
    {
     "layout": "doc",
     "note": "Report. List each finding with its file and line, severity and the fix.",
     "docLabel": "report"
    }
   ],
   "outcome": null,
   "idea": "",
   "why": "",
   "protocol": [
    {
     "title": "Read the data access",
     "text": "Open the DbContext, the entity configuration and the migration history."
    },
    {
     "title": "Check query shape",
     "text": "Flag queries that load whole tables, lazy loading inside loops, and client-side evaluation that should run in the database."
    },
    {
     "title": "Check tracking",
     "text": "Read-only queries should use no-tracking. Flag tracked entities returned to clients."
    },
    {
     "title": "Check migrations",
     "text": "Flag migrations that drop columns, change types or lock large tables without a plan."
    },
    {
     "title": "Check transactions and raw SQL",
     "text": "Multi-step changes need a transaction. Flag raw SQL built from strings."
    },
    {
     "title": "Report",
     "text": "List each finding with its file and line, severity and the fix. Mark which findings need the query plan to confirm."
    }
   ],
   "path": ".github/skills/rlm-entity-framework-review",
   "files": [],
   "helperScripts": 0,
   "notChecked": true,
   "group": "dotnet",
   "grade": {
    "grade": "B+",
    "score": "3.95",
    "scores": [
     4,
     4,
     5,
     3,
     3
    ],
    "design": true,
    "rank": 40
   }
  },
  {
   "id": "rlm-error-handling-review",
   "goal": "Review error handling for swallowed errors, retries, timeouts, cleanup and useful messages.",
   "cat": "Installed",
   "on": false,
   "use": "Review error handling for swallowed errors, retries, timeouts, cleanup and useful messages. Use when code handles failures from I/O, networks or external services.",
   "prompt": "Use the rlm-error-handling-review skill.",
   "input": "",
   "output": "",
   "pros": [],
   "cons": [],
   "items": [
    "input-1",
    "input-2",
    "input-3",
    "input-4",
    "input-5",
    "input-6"
   ],
   "steps": [
    {
     "layout": "row",
     "note": "Read the call paths. Open the code that calls external services, files, databases and queues, and list each call that can fail."
    },
    {
     "layout": "chunks",
     "note": "Check swallowed errors. Flag empty catch blocks, errors logged and then ignored, and errors that turn into a success result.",
     "groups": [
      0,
      0,
      1,
      1,
      2,
      2
     ]
    },
    {
     "layout": "parallel",
     "note": "Check retries. Retries need a limit, a backoff and a check that the operation is safe to repeat.",
     "groups": [
      0,
      0,
      1,
      1,
      2,
      2
     ],
     "state": [
      "ok",
      "ok",
      "ok",
      "ok",
      "ok",
      "ok"
     ]
    },
    {
     "layout": "funnel",
     "note": "Check timeouts. Every external call needs a timeout."
    },
    {
     "layout": "gate",
     "note": "Check cleanup. Resources must be released on every failure path, normally by a language construct that does this.",
     "pass": [
      true,
      true,
      true,
      true,
      true,
      false
     ]
    },
    {
     "layout": "doc",
     "note": "Report. List each finding as file and line, with severity, the problem and the fix.",
     "docLabel": "report"
    }
   ],
   "outcome": null,
   "idea": "",
   "why": "",
   "protocol": [
    {
     "title": "Read the call paths",
     "text": "Open the code that calls external services, files, databases and queues, and list each call that can fail."
    },
    {
     "title": "Check swallowed errors",
     "text": "Flag empty catch blocks, errors logged and then ignored, and errors that turn into a success result."
    },
    {
     "title": "Check retries",
     "text": "Retries need a limit, a backoff and a check that the operation is safe to repeat."
    },
    {
     "title": "Check timeouts",
     "text": "Every external call needs a timeout. Flag calls that can wait forever."
    },
    {
     "title": "Check cleanup",
     "text": "Resources must be released on every failure path, normally by a language construct that does this."
    },
    {
     "title": "Report",
     "text": "List each finding as file and line, with severity, the problem and the fix. Mark what you did not run."
    }
   ],
   "path": ".github/skills/rlm-error-handling-review",
   "files": [],
   "helperScripts": 0,
   "notChecked": true,
   "group": "engineering",
   "grade": {
    "grade": "B+",
    "score": "3.80",
    "scores": [
     4,
     3,
     4,
     4,
     4
    ],
    "design": true,
    "rank": 116
   }
  },
  {
   "id": "rlm-etl-review",
   "goal": "ETL review: extract, transform and load steps checked for ordering, late data, errors and reruns.",
   "cat": "Installed",
   "on": false,
   "use": "ETL review: extract, transform and load steps checked for ordering, late data, errors and reruns. Use when a data extract, transform and load step is built or changed.",
   "prompt": "Use the rlm-etl-review skill.",
   "input": "",
   "output": "",
   "pros": [],
   "cons": [],
   "items": [
    "input-1",
    "input-2",
    "input-3",
    "input-4",
    "input-5",
    "input-6"
   ],
   "steps": [
    {
     "layout": "row",
     "note": "List the steps. Each extract, transform and load, in order."
    },
    {
     "layout": "chunks",
     "note": "Check the errors. Flag rows that fail silently or are dropped without a record.",
     "groups": [
      0,
      0,
      1,
      1,
      2,
      2
     ]
    },
    {
     "layout": "parallel",
     "note": "Check the late data. Confirm the job copes with records that arrive after their window.",
     "groups": [
      0,
      0,
      1,
      1,
      2,
      2
     ],
     "state": [
      "ok",
      "ok",
      "ok",
      "ok",
      "ok",
      "ok"
     ]
    },
    {
     "layout": "funnel",
     "note": "Check the reruns. Confirm a rerun for one day does not disturb other days."
    },
    {
     "layout": "gate",
     "note": "Report. Each step with its risk and the fix.",
     "pass": [
      true,
      true,
      true,
      true,
      true,
      false
     ]
    }
   ],
   "outcome": null,
   "idea": "",
   "why": "",
   "protocol": [
    {
     "title": "List the steps",
     "text": "Each extract, transform and load, in order."
    },
    {
     "title": "Check the errors",
     "text": "Flag rows that fail silently or are dropped without a record."
    },
    {
     "title": "Check the late data",
     "text": "Confirm the job copes with records that arrive after their window."
    },
    {
     "title": "Check the reruns",
     "text": "Confirm a rerun for one day does not disturb other days."
    },
    {
     "title": "Report",
     "text": "Each step with its risk and the fix."
    }
   ],
   "path": ".github/skills/rlm-etl-review",
   "files": [],
   "helperScripts": 0,
   "notChecked": true,
   "group": "engineering",
   "grade": {
    "grade": "B+",
    "score": "3.85",
    "scores": [
     4,
     4,
     4,
     3,
     4
    ],
    "design": true,
    "rank": 68
   }
  },
  {
   "id": "rlm-exploit-intelligence-review",
   "goal": "Exploit intelligence review: public exploits and active exploitation evidence for each finding.",
   "cat": "Installed",
   "on": false,
   "use": "Exploit intelligence review: public exploits and active exploitation evidence for each finding. Use when a finding's risk depends on whether it is being exploited.",
   "prompt": "Use the rlm-exploit-intelligence-review skill.",
   "input": "",
   "output": "",
   "pros": [],
   "cons": [],
   "items": [
    "input-1",
    "input-2",
    "input-3",
    "input-4",
    "input-5",
    "input-6"
   ],
   "steps": [
    {
     "layout": "row",
     "note": "Take the findings as given, with their identifiers."
    },
    {
     "layout": "chunks",
     "note": "Check public exploits. Note whether a public exploit exists and its quality.",
     "groups": [
      0,
      0,
      1,
      1,
      2,
      2
     ]
    },
    {
     "layout": "parallel",
     "note": "Check active exploitation. Note any evidence of exploitation in the field.",
     "groups": [
      0,
      0,
      1,
      1,
      2,
      2
     ],
     "state": [
      "ok",
      "ok",
      "ok",
      "ok",
      "ok",
      "ok"
     ]
    },
    {
     "layout": "funnel",
     "note": "Check the source. Record where each piece of intelligence came from."
    },
    {
     "layout": "gate",
     "note": "Report. Each finding with its exploit status, the source and the confidence.",
     "pass": [
      true,
      true,
      true,
      true,
      true,
      false
     ]
    }
   ],
   "outcome": null,
   "idea": "",
   "why": "",
   "protocol": [
    {
     "title": "Take the findings as given, with their identifiers",
     "text": ""
    },
    {
     "title": "Check public exploits",
     "text": "Note whether a public exploit exists and its quality."
    },
    {
     "title": "Check active exploitation",
     "text": "Note any evidence of exploitation in the field."
    },
    {
     "title": "Check the source",
     "text": "Record where each piece of intelligence came from."
    },
    {
     "title": "Report",
     "text": "Each finding with its exploit status, the source and the confidence."
    }
   ],
   "path": ".github/skills/rlm-exploit-intelligence-review",
   "files": [],
   "helperScripts": 0,
   "notChecked": true,
   "group": "vulnerability",
   "grade": {
    "grade": "B+",
    "score": "3.75",
    "scores": [
     4,
     4,
     4,
     3,
     3
    ],
    "design": true,
    "rank": 131
   }
  },
  {
   "id": "rlm-false-positive-review",
   "goal": "False positive review: findings checked and closed with evidence, not with a shrug.",
   "cat": "Installed",
   "on": false,
   "use": "False positive review: findings checked and closed with evidence, not with a shrug. Use when a finding is marked as not applicable.",
   "prompt": "Use the rlm-false-positive-review skill.",
   "input": "",
   "output": "",
   "pros": [],
   "cons": [],
   "items": [
    "input-1",
    "input-2",
    "input-3",
    "input-4",
    "input-5",
    "input-6"
   ],
   "steps": [
    {
     "layout": "row",
     "note": "Take each finding marked not applicable."
    },
    {
     "layout": "chunks",
     "note": "Check the evidence. The code path, configuration or version that makes it inapplicable.",
     "groups": [
      0,
      0,
      1,
      1,
      2,
      2
     ]
    },
    {
     "layout": "parallel",
     "note": "Check the reasoning. The argument must hold for every path, not only the one tested.",
     "groups": [
      0,
      0,
      1,
      1,
      2,
      2
     ],
     "state": [
      "ok",
      "ok",
      "ok",
      "ok",
      "ok",
      "ok"
     ]
    },
    {
     "layout": "funnel",
     "note": "Check the record. Each closure has an approver and a date."
    },
    {
     "layout": "gate",
     "note": "Report. The findings closed, their evidence and any that should be reopened.",
     "pass": [
      true,
      true,
      true,
      true,
      true,
      false
     ]
    }
   ],
   "outcome": null,
   "idea": "",
   "why": "",
   "protocol": [
    {
     "title": "Take each finding marked not applicable",
     "text": ""
    },
    {
     "title": "Check the evidence",
     "text": "The code path, configuration or version that makes it inapplicable."
    },
    {
     "title": "Check the reasoning",
     "text": "The argument must hold for every path, not only the one tested."
    },
    {
     "title": "Check the record",
     "text": "Each closure has an approver and a date."
    },
    {
     "title": "Report",
     "text": "The findings closed, their evidence and any that should be reopened."
    }
   ],
   "path": ".github/skills/rlm-false-positive-review",
   "files": [],
   "helperScripts": 0,
   "notChecked": true,
   "group": "vulnerability",
   "grade": {
    "grade": "B+",
    "score": "3.85",
    "scores": [
     4,
     4,
     4,
     3,
     4
    ],
    "design": true,
    "rank": 69
   }
  },
  {
   "id": "rlm-feature-flag-review",
   "goal": "Feature flag review: flags with an owner, a default and a removal date.",
   "cat": "Installed",
   "on": false,
   "use": "Feature flag review: flags with an owner, a default and a removal date. Use when a feature is behind a flag or a flag is added.",
   "prompt": "Use the rlm-feature-flag-review skill.",
   "input": "",
   "output": "",
   "pros": [],
   "cons": [],
   "items": [
    "input-1",
    "input-2",
    "input-3",
    "input-4",
    "input-5",
    "input-6"
   ],
   "steps": [
    {
     "layout": "row",
     "note": "List the flags. Find each flag check and its default value."
    },
    {
     "layout": "chunks",
     "note": "Check ownership. Each flag needs a named owner.",
     "groups": [
      0,
      0,
      1,
      1,
      2,
      2
     ]
    },
    {
     "layout": "parallel",
     "note": "Check removal. Flag flags older than their planned removal date.",
     "groups": [
      0,
      0,
      1,
      1,
      2,
      2
     ],
     "state": [
      "ok",
      "ok",
      "ok",
      "ok",
      "ok",
      "ok"
     ]
    },
    {
     "layout": "funnel",
     "note": "Check both paths. Test the code with the flag on and off."
    },
    {
     "layout": "gate",
     "note": "Report. Each flag with its owner, default, age and the risk of each path.",
     "pass": [
      true,
      true,
      true,
      true,
      true,
      false
     ]
    }
   ],
   "outcome": null,
   "idea": "",
   "why": "",
   "protocol": [
    {
     "title": "List the flags",
     "text": "Find each flag check and its default value."
    },
    {
     "title": "Check ownership",
     "text": "Each flag needs a named owner."
    },
    {
     "title": "Check removal",
     "text": "Flag flags older than their planned removal date."
    },
    {
     "title": "Check both paths",
     "text": "Test the code with the flag on and off."
    },
    {
     "title": "Report",
     "text": "Each flag with its owner, default, age and the risk of each path."
    }
   ],
   "path": ".github/skills/rlm-feature-flag-review",
   "files": [],
   "helperScripts": 0,
   "notChecked": true,
   "group": "review",
   "grade": {
    "grade": "B+",
    "score": "3.85",
    "scores": [
     4,
     4,
     4,
     3,
     4
    ],
    "design": true,
    "rank": 70
   }
  },
  {
   "id": "rlm-file-upload-review",
   "goal": "File upload review: type checks, size limits, storage location and execution risk.",
   "cat": "Installed",
   "on": false,
   "use": "File upload review: type checks, size limits, storage location and execution risk. Use when code accepts files from users.",
   "prompt": "Use the rlm-file-upload-review skill.",
   "input": "",
   "output": "",
   "pros": [],
   "cons": [],
   "items": [
    "input-1",
    "input-2",
    "input-3",
    "input-4",
    "input-5",
    "input-6"
   ],
   "steps": [
    {
     "layout": "row",
     "note": "Check the type. Flag checks based only on the file extension or client header."
    },
    {
     "layout": "chunks",
     "note": "Check size. Each upload needs a size limit at the server.",
     "groups": [
      0,
      0,
      1,
      1,
      2,
      2
     ]
    },
    {
     "layout": "parallel",
     "note": "Check storage. Uploads must not be stored in a web-served or executable folder.",
     "groups": [
      0,
      0,
      1,
      1,
      2,
      2
     ],
     "state": [
      "ok",
      "ok",
      "ok",
      "ok",
      "ok",
      "ok"
     ]
    },
    {
     "layout": "funnel",
     "note": "Check names. Flag user-supplied file names used as paths."
    },
    {
     "layout": "gate",
     "note": "Report. Each upload path with its gap, file and line, and the fix.",
     "pass": [
      true,
      true,
      true,
      true,
      true,
      false
     ]
    }
   ],
   "outcome": null,
   "idea": "",
   "why": "",
   "protocol": [
    {
     "title": "Check the type",
     "text": "Flag checks based only on the file extension or client header."
    },
    {
     "title": "Check size",
     "text": "Each upload needs a size limit at the server."
    },
    {
     "title": "Check storage",
     "text": "Uploads must not be stored in a web-served or executable folder."
    },
    {
     "title": "Check names",
     "text": "Flag user-supplied file names used as paths."
    },
    {
     "title": "Report",
     "text": "Each upload path with its gap, file and line, and the fix."
    }
   ],
   "path": ".github/skills/rlm-file-upload-review",
   "files": [],
   "helperScripts": 0,
   "notChecked": true,
   "group": "security",
   "grade": {
    "grade": "B+",
    "score": "3.85",
    "scores": [
     4,
     4,
     4,
     3,
     4
    ],
    "design": true,
    "rank": 71
   }
  },
  {
   "id": "rlm-form-validation-review",
   "goal": "Form validation review: client and server checks, messages and accessibility of errors.",
   "cat": "Installed",
   "on": false,
   "use": "Form validation review: client and server checks, messages and accessibility of errors. Use when a form is added or changed.",
   "prompt": "Use the rlm-form-validation-review skill.",
   "input": "",
   "output": "",
   "pros": [],
   "cons": [],
   "items": [
    "input-1",
    "input-2",
    "input-3",
    "input-4",
    "input-5",
    "input-6"
   ],
   "steps": [
    {
     "layout": "row",
     "note": "List the fields. Each input with its type and rules."
    },
    {
     "layout": "chunks",
     "note": "Check the server. Every rule must also run on the server.",
     "groups": [
      0,
      0,
      1,
      1,
      2,
      2
     ]
    },
    {
     "layout": "parallel",
     "note": "Check the messages. Errors must say what to fix.",
     "groups": [
      0,
      0,
      1,
      1,
      2,
      2
     ],
     "state": [
      "ok",
      "ok",
      "ok",
      "ok",
      "ok",
      "ok"
     ]
    },
    {
     "layout": "funnel",
     "note": "Check accessibility. Errors must be linked to their fields and announced."
    },
    {
     "layout": "gate",
     "note": "Report. Each field with its gap and the fix.",
     "pass": [
      true,
      true,
      true,
      true,
      true,
      false
     ]
    }
   ],
   "outcome": null,
   "idea": "",
   "why": "",
   "protocol": [
    {
     "title": "List the fields",
     "text": "Each input with its type and rules."
    },
    {
     "title": "Check the server",
     "text": "Every rule must also run on the server."
    },
    {
     "title": "Check the messages",
     "text": "Errors must say what to fix."
    },
    {
     "title": "Check accessibility",
     "text": "Errors must be linked to their fields and announced."
    },
    {
     "title": "Report",
     "text": "Each field with its gap and the fix."
    }
   ],
   "path": ".github/skills/rlm-form-validation-review",
   "files": [],
   "helperScripts": 0,
   "notChecked": true,
   "group": "web",
   "grade": {
    "grade": "B+",
    "score": "3.80",
    "scores": [
     4,
     4,
     3,
     4,
     4
    ],
    "design": true,
    "rank": 117
   }
  },
  {
   "id": "rlm-function-size-review",
   "goal": "Function size review: long functions, deep nesting and mixed levels of detail.",
   "cat": "Installed",
   "on": false,
   "use": "Function size review: long functions, deep nesting and mixed levels of detail. Use when functions are added or grown in a change.",
   "prompt": "Use the rlm-function-size-review skill.",
   "input": "",
   "output": "",
   "pros": [],
   "cons": [],
   "items": [
    "input-1",
    "input-2",
    "input-3",
    "input-4",
    "input-5",
    "input-6"
   ],
   "steps": [
    {
     "layout": "row",
     "note": "Measure. List functions over the team's line limit and their branch count."
    },
    {
     "layout": "chunks",
     "note": "Check nesting. Flag blocks nested more than three levels deep.",
     "groups": [
      0,
      0,
      1,
      1,
      2,
      2
     ]
    },
    {
     "layout": "parallel",
     "note": "Check levels. Flag a function that mixes high-level steps with low-level detail.",
     "groups": [
      0,
      0,
      1,
      1,
      2,
      2
     ],
     "state": [
      "ok",
      "ok",
      "ok",
      "ok",
      "ok",
      "ok"
     ]
    },
    {
     "layout": "funnel",
     "note": "Suggest splits. Name the smaller functions each long one could become."
    },
    {
     "layout": "gate",
     "note": "Report. Each function with file and line, the measure, and the split.",
     "pass": [
      true,
      true,
      true,
      true,
      true,
      false
     ]
    }
   ],
   "outcome": null,
   "idea": "",
   "why": "",
   "protocol": [
    {
     "title": "Measure",
     "text": "List functions over the team's line limit and their branch count."
    },
    {
     "title": "Check nesting",
     "text": "Flag blocks nested more than three levels deep."
    },
    {
     "title": "Check levels",
     "text": "Flag a function that mixes high-level steps with low-level detail."
    },
    {
     "title": "Suggest splits",
     "text": "Name the smaller functions each long one could become."
    },
    {
     "title": "Report",
     "text": "Each function with file and line, the measure, and the split."
    }
   ],
   "path": ".github/skills/rlm-function-size-review",
   "files": [],
   "helperScripts": 0,
   "notChecked": true,
   "group": "review",
   "grade": {
    "grade": "A-",
    "score": "4.00",
    "scores": [
     4,
     4,
     4,
     4,
     4
    ],
    "design": true,
    "rank": 32
   }
  },
  {
   "id": "rlm-gate-branch-protection",
   "goal": "Branch protection gate: required reviews, passing checks and no direct pushes to main.",
   "cat": "Installed",
   "on": false,
   "use": "Branch protection gate: required reviews, passing checks and no direct pushes to main. Use when a repository's default or release branch is configured.",
   "prompt": "Use the rlm-gate-branch-protection skill.",
   "input": "",
   "output": "",
   "pros": [],
   "cons": [],
   "items": [
    "input-1",
    "input-2",
    "input-3",
    "input-4",
    "input-5",
    "input-6"
   ],
   "steps": [
    {
     "layout": "row",
     "note": "List the protected branches and their settings."
    },
    {
     "layout": "chunks",
     "note": "Set the rule. At least one independent review and all required checks before merge.",
     "groups": [
      0,
      0,
      1,
      1,
      2,
      2
     ]
    },
    {
     "layout": "parallel",
     "note": "Check direct pushes. Flag branches that allow force pushes or deletion.",
     "groups": [
      0,
      0,
      1,
      1,
      2,
      2
     ],
     "state": [
      "ok",
      "ok",
      "ok",
      "ok",
      "ok",
      "ok"
     ]
    },
    {
     "layout": "funnel",
     "note": "Check administrators. Flag administrators who can bypass the rules."
    },
    {
     "layout": "gate",
     "note": "Report. Each branch, its settings, the gaps and the fix.",
     "pass": [
      true,
      true,
      true,
      true,
      true,
      false
     ]
    }
   ],
   "outcome": null,
   "idea": "",
   "why": "",
   "protocol": [
    {
     "title": "List the protected branches and their settings",
     "text": ""
    },
    {
     "title": "Set the rule",
     "text": "At least one independent review and all required checks before merge."
    },
    {
     "title": "Check direct pushes",
     "text": "Flag branches that allow force pushes or deletion."
    },
    {
     "title": "Check administrators",
     "text": "Flag administrators who can bypass the rules."
    },
    {
     "title": "Report",
     "text": "Each branch, its settings, the gaps and the fix."
    }
   ],
   "path": ".github/skills/rlm-gate-branch-protection",
   "files": [],
   "helperScripts": 0,
   "notChecked": true,
   "group": "gates",
   "grade": {
    "grade": "B+",
    "score": "3.85",
    "scores": [
     4,
     4,
     4,
     3,
     4
    ],
    "design": true,
    "rank": 72
   }
  },
  {
   "id": "rlm-gate-code-owners",
   "goal": "Code owners gate: sensitive paths need review from the team that owns them.",
   "cat": "Installed",
   "on": false,
   "use": "Code owners gate: sensitive paths need review from the team that owns them. Use when a change touches security, infrastructure or data code.",
   "prompt": "Use the rlm-gate-code-owners skill.",
   "input": "",
   "output": "",
   "pros": [],
   "cons": [],
   "items": [
    "input-1",
    "input-2",
    "input-3",
    "input-4",
    "input-5",
    "input-6"
   ],
   "steps": [
    {
     "layout": "row",
     "note": "List the sensitive paths. Authentication, payments, infrastructure and data."
    },
    {
     "layout": "chunks",
     "note": "Confirm the owners file names a team or person for each.",
     "groups": [
      0,
      0,
      1,
      1,
      2,
      2
     ]
    },
    {
     "layout": "parallel",
     "note": "Set the rule. A change to a sensitive path needs an owner's approval.",
     "groups": [
      0,
      0,
      1,
      1,
      2,
      2
     ],
     "state": [
      "ok",
      "ok",
      "ok",
      "ok",
      "ok",
      "ok"
     ]
    },
    {
     "layout": "funnel",
     "note": "Check stale owners. Flag owners who have left or teams that no longer exist."
    },
    {
     "layout": "gate",
     "note": "Report. The sensitive paths, the owners and any gap.",
     "pass": [
      true,
      true,
      true,
      true,
      true,
      false
     ]
    }
   ],
   "outcome": null,
   "idea": "",
   "why": "",
   "protocol": [
    {
     "title": "List the sensitive paths",
     "text": "Authentication, payments, infrastructure and data."
    },
    {
     "title": "Confirm the owners file names a team or person for each",
     "text": ""
    },
    {
     "title": "Set the rule",
     "text": "A change to a sensitive path needs an owner's approval."
    },
    {
     "title": "Check stale owners",
     "text": "Flag owners who have left or teams that no longer exist."
    },
    {
     "title": "Report",
     "text": "The sensitive paths, the owners and any gap."
    }
   ],
   "path": ".github/skills/rlm-gate-code-owners",
   "files": [],
   "helperScripts": 0,
   "notChecked": true,
   "group": "gates",
   "grade": {
    "grade": "B+",
    "score": "3.80",
    "scores": [
     4,
     4,
     3,
     4,
     4
    ],
    "design": true,
    "rank": 118
   }
  },
  {
   "id": "rlm-gate-container-scan",
   "goal": "Container scan gate: images with exploitable critical findings blocked before deployment.",
   "cat": "Installed",
   "on": false,
   "use": "Container scan gate: images with exploitable critical findings blocked before deployment. Use when a container image is built for deployment.",
   "prompt": "Use the rlm-gate-container-scan skill.",
   "input": "",
   "output": "",
   "pros": [],
   "cons": [],
   "items": [
    "input-1",
    "input-2",
    "input-3",
    "input-4",
    "input-5",
    "input-6"
   ],
   "steps": [
    {
     "layout": "row",
     "note": "Confirm the scan runs on each image build, before it is pushed."
    },
    {
     "layout": "chunks",
     "note": "Set the rule. An exploitable critical finding blocks the push.",
     "groups": [
      0,
      0,
      1,
      1,
      2,
      2
     ]
    },
    {
     "layout": "parallel",
     "note": "Check the base image. Flag images built on an unsupported base.",
     "groups": [
      0,
      0,
      1,
      1,
      2,
      2
     ],
     "state": [
      "ok",
      "ok",
      "ok",
      "ok",
      "ok",
      "ok"
     ]
    },
    {
     "layout": "funnel",
     "note": "Check exceptions. Each accepted finding needs an owner and an expiry."
    },
    {
     "layout": "gate",
     "note": "Report. The image, the findings, the decision and the owner.",
     "pass": [
      true,
      true,
      true,
      true,
      true,
      false
     ]
    }
   ],
   "outcome": null,
   "idea": "",
   "why": "",
   "protocol": [
    {
     "title": "Confirm the scan runs on each image build, before it is pushed",
     "text": ""
    },
    {
     "title": "Set the rule",
     "text": "An exploitable critical finding blocks the push."
    },
    {
     "title": "Check the base image",
     "text": "Flag images built on an unsupported base."
    },
    {
     "title": "Check exceptions",
     "text": "Each accepted finding needs an owner and an expiry."
    },
    {
     "title": "Report",
     "text": "The image, the findings, the decision and the owner."
    }
   ],
   "path": ".github/skills/rlm-gate-container-scan",
   "files": [],
   "helperScripts": 0,
   "notChecked": true,
   "group": "gates",
   "grade": {
    "grade": "B+",
    "score": "3.85",
    "scores": [
     4,
     4,
     4,
     3,
     4
    ],
    "design": true,
    "rank": 73
   }
  },
  {
   "id": "rlm-gate-coverage",
   "goal": "Test coverage gate: changed code must be tested before it merges.",
   "cat": "Installed",
   "on": false,
   "use": "Test coverage gate: changed code must be tested before it merges. Use when a change adds or modifies code.",
   "prompt": "Use the rlm-gate-coverage skill.",
   "input": "",
   "output": "",
   "pros": [],
   "cons": [],
   "items": [
    "input-1",
    "input-2",
    "input-3",
    "input-4",
    "input-5",
    "input-6"
   ],
   "steps": [
    {
     "layout": "row",
     "note": "Measure coverage on the changed lines, not only the total."
    },
    {
     "layout": "chunks",
     "note": "Set the rule. New code below the agreed threshold blocks the merge.",
     "groups": [
      0,
      0,
      1,
      1,
      2,
      2
     ]
    },
    {
     "layout": "parallel",
     "note": "Check meaningful tests. Flag coverage that comes from tests with no assertions.",
     "groups": [
      0,
      0,
      1,
      1,
      2,
      2
     ],
     "state": [
      "ok",
      "ok",
      "ok",
      "ok",
      "ok",
      "ok"
     ]
    },
    {
     "layout": "funnel",
     "note": "Check exclusions. Each excluded path needs a reason."
    },
    {
     "layout": "gate",
     "note": "Report. The changed lines, the coverage and any gap.",
     "pass": [
      true,
      true,
      true,
      true,
      true,
      false
     ]
    }
   ],
   "outcome": null,
   "idea": "",
   "why": "",
   "protocol": [
    {
     "title": "Measure coverage on the changed lines, not only the total",
     "text": ""
    },
    {
     "title": "Set the rule",
     "text": "New code below the agreed threshold blocks the merge."
    },
    {
     "title": "Check meaningful tests",
     "text": "Flag coverage that comes from tests with no assertions."
    },
    {
     "title": "Check exclusions",
     "text": "Each excluded path needs a reason."
    },
    {
     "title": "Report",
     "text": "The changed lines, the coverage and any gap."
    }
   ],
   "path": ".github/skills/rlm-gate-coverage",
   "files": [],
   "helperScripts": 0,
   "notChecked": true,
   "group": "gates",
   "grade": {
    "grade": "B+",
    "score": "3.85",
    "scores": [
     4,
     4,
     4,
     3,
     4
    ],
    "design": true,
    "rank": 74
   }
  },
  {
   "id": "rlm-gate-dast",
   "goal": "Dynamic testing gate: what the running-application scan must pass before a release.",
   "cat": "Installed",
   "on": false,
   "use": "Dynamic testing gate: what the running-application scan must pass before a release. Use when a release is deployed to a test environment.",
   "prompt": "Use the rlm-gate-dast skill.",
   "input": "",
   "output": "",
   "pros": [],
   "cons": [],
   "items": [
    "input-1",
    "input-2",
    "input-3",
    "input-4",
    "input-5",
    "input-6"
   ],
   "steps": [
    {
     "layout": "row",
     "note": "Confirm the target. The scan runs against a test environment that matches production."
    },
    {
     "layout": "chunks",
     "note": "Set the rule. High findings block promotion to production.",
     "groups": [
      0,
      0,
      1,
      1,
      2,
      2
     ]
    },
    {
     "layout": "parallel",
     "note": "Confirm authentication. The scan is authenticated so it reaches protected pages.",
     "groups": [
      0,
      0,
      1,
      1,
      2,
      2
     ],
     "state": [
      "ok",
      "ok",
      "ok",
      "ok",
      "ok",
      "ok"
     ]
    },
    {
     "layout": "funnel",
     "note": "Check the window. The scan runs after each deployment, not only at release."
    },
    {
     "layout": "gate",
     "note": "Report. The target, the rule, the result and the owner of each finding.",
     "pass": [
      true,
      true,
      true,
      true,
      true,
      false
     ]
    }
   ],
   "outcome": null,
   "idea": "",
   "why": "",
   "protocol": [
    {
     "title": "Confirm the target",
     "text": "The scan runs against a test environment that matches production."
    },
    {
     "title": "Set the rule",
     "text": "High findings block promotion to production."
    },
    {
     "title": "Confirm authentication",
     "text": "The scan is authenticated so it reaches protected pages."
    },
    {
     "title": "Check the window",
     "text": "The scan runs after each deployment, not only at release."
    },
    {
     "title": "Report",
     "text": "The target, the rule, the result and the owner of each finding."
    }
   ],
   "path": ".github/skills/rlm-gate-dast",
   "files": [],
   "helperScripts": 0,
   "notChecked": true,
   "group": "gates",
   "grade": {
    "grade": "B+",
    "score": "3.75",
    "scores": [
     4,
     4,
     4,
     3,
     3
    ],
    "design": true,
    "rank": 132
   }
  },
  {
   "id": "rlm-gate-dependency",
   "goal": "Dependency gate: known-vulnerable or unmaintained packages blocked from a merge.",
   "cat": "Installed",
   "on": false,
   "use": "Dependency gate: known-vulnerable or unmaintained packages blocked from a merge. Use when a change adds or upgrades a dependency.",
   "prompt": "Use the rlm-gate-dependency skill.",
   "input": "",
   "output": "",
   "pros": [],
   "cons": [],
   "items": [
    "input-1",
    "input-2",
    "input-3",
    "input-4",
    "input-5",
    "input-6"
   ],
   "steps": [
    {
     "layout": "row",
     "note": "Confirm the check runs on each change that touches a lock file."
    },
    {
     "layout": "chunks",
     "note": "Set the rule. A new dependency with a known high or critical advisory blocks the merge.",
     "groups": [
      0,
      0,
      1,
      1,
      2,
      2
     ]
    },
    {
     "layout": "parallel",
     "note": "Check unmaintained packages. Flag packages with no release in a long period.",
     "groups": [
      0,
      0,
      1,
      1,
      2,
      2
     ],
     "state": [
      "ok",
      "ok",
      "ok",
      "ok",
      "ok",
      "ok"
     ]
    },
    {
     "layout": "funnel",
     "note": "Check exceptions. Each allowed exception needs an owner and an expiry."
    },
    {
     "layout": "gate",
     "note": "Report. Each blocked or flagged package with its advisory and the decision.",
     "pass": [
      true,
      true,
      true,
      true,
      true,
      false
     ]
    }
   ],
   "outcome": null,
   "idea": "",
   "why": "",
   "protocol": [
    {
     "title": "Confirm the check runs on each change that touches a lock file",
     "text": ""
    },
    {
     "title": "Set the rule",
     "text": "A new dependency with a known high or critical advisory blocks the merge."
    },
    {
     "title": "Check unmaintained packages",
     "text": "Flag packages with no release in a long period."
    },
    {
     "title": "Check exceptions",
     "text": "Each allowed exception needs an owner and an expiry."
    },
    {
     "title": "Report",
     "text": "Each blocked or flagged package with its advisory and the decision."
    }
   ],
   "path": ".github/skills/rlm-gate-dependency",
   "files": [],
   "helperScripts": 0,
   "notChecked": true,
   "group": "gates",
   "grade": {
    "grade": "B+",
    "score": "3.85",
    "scores": [
     4,
     4,
     4,
     3,
     4
    ],
    "design": true,
    "rank": 75
   }
  },
  {
   "id": "rlm-gate-deployment-approval",
   "goal": "Deployment approval gate: production deployments need an approval recorded before they run.",
   "cat": "Installed",
   "on": false,
   "use": "Deployment approval gate: production deployments need an approval recorded before they run. Use when a deployment to production is requested.",
   "prompt": "Use the rlm-gate-deployment-approval skill.",
   "input": "",
   "output": "",
   "pros": [],
   "cons": [],
   "items": [
    "input-1",
    "input-2",
    "input-3",
    "input-4",
    "input-5",
    "input-6"
   ],
   "steps": [
    {
     "layout": "row",
     "note": "Confirm production requires an environment approval in the pipeline."
    },
    {
     "layout": "chunks",
     "note": "Set the rule. The approver must differ from the change author.",
     "groups": [
      0,
      0,
      1,
      1,
      2,
      2
     ]
    },
    {
     "layout": "parallel",
     "note": "Check the window. Deployments outside the agreed window need a second approval.",
     "groups": [
      0,
      0,
      1,
      1,
      2,
      2
     ],
     "state": [
      "ok",
      "ok",
      "ok",
      "ok",
      "ok",
      "ok"
     ]
    },
    {
     "layout": "funnel",
     "note": "Check the record. Each approval links to the change and the test results."
    },
    {
     "layout": "gate",
     "note": "Report. Each deployment, its approval status and any gap.",
     "pass": [
      true,
      true,
      true,
      true,
      true,
      false
     ]
    }
   ],
   "outcome": null,
   "idea": "",
   "why": "",
   "protocol": [
    {
     "title": "Confirm production requires an environment approval in the pipeline",
     "text": ""
    },
    {
     "title": "Set the rule",
     "text": "The approver must differ from the change author."
    },
    {
     "title": "Check the window",
     "text": "Deployments outside the agreed window need a second approval."
    },
    {
     "title": "Check the record",
     "text": "Each approval links to the change and the test results."
    },
    {
     "title": "Report",
     "text": "Each deployment, its approval status and any gap."
    }
   ],
   "path": ".github/skills/rlm-gate-deployment-approval",
   "files": [],
   "helperScripts": 0,
   "notChecked": true,
   "group": "gates",
   "grade": {
    "grade": "B+",
    "score": "3.85",
    "scores": [
     4,
     4,
     4,
     3,
     4
    ],
    "design": true,
    "rank": 76
   }
  },
  {
   "id": "rlm-gate-exceptions",
   "goal": "Security exception gate: each accepted risk recorded with an owner, a reason and an expiry.",
   "cat": "Installed",
   "on": false,
   "use": "Security exception gate: each accepted risk recorded with an owner, a reason and an expiry. Use when a gate is bypassed or a finding is accepted.",
   "prompt": "Use the rlm-gate-exceptions skill.",
   "input": "",
   "output": "",
   "pros": [],
   "cons": [],
   "items": [
    "input-1",
    "input-2",
    "input-3",
    "input-4",
    "input-5",
    "input-6"
   ],
   "steps": [
    {
     "layout": "row",
     "note": "List the exceptions. Each accepted finding, gate or rule."
    },
    {
     "layout": "chunks",
     "note": "Check the record. Each needs an owner, a reason and an expiry date.",
     "groups": [
      0,
      0,
      1,
      1,
      2,
      2
     ]
    },
    {
     "layout": "parallel",
     "note": "Check the expiry. Flag exceptions past their date.",
     "groups": [
      0,
      0,
      1,
      1,
      2,
      2
     ],
     "state": [
      "ok",
      "ok",
      "ok",
      "ok",
      "ok",
      "ok"
     ]
    },
    {
     "layout": "funnel",
     "note": "Check the approval. Each exception needs an approver above the team."
    },
    {
     "layout": "gate",
     "note": "Report. The exceptions, their status and those that need renewal or closure.",
     "pass": [
      true,
      true,
      true,
      true,
      true,
      false
     ]
    }
   ],
   "outcome": null,
   "idea": "",
   "why": "",
   "protocol": [
    {
     "title": "List the exceptions",
     "text": "Each accepted finding, gate or rule."
    },
    {
     "title": "Check the record",
     "text": "Each needs an owner, a reason and an expiry date."
    },
    {
     "title": "Check the expiry",
     "text": "Flag exceptions past their date."
    },
    {
     "title": "Check the approval",
     "text": "Each exception needs an approver above the team."
    },
    {
     "title": "Report",
     "text": "The exceptions, their status and those that need renewal or closure."
    }
   ],
   "path": ".github/skills/rlm-gate-exceptions",
   "files": [],
   "helperScripts": 0,
   "notChecked": true,
   "group": "gates",
   "grade": {
    "grade": "B+",
    "score": "3.80",
    "scores": [
     4,
     4,
     3,
     4,
     4
    ],
    "design": true,
    "rank": 119
   }
  },
  {
   "id": "rlm-gate-iac-scan",
   "goal": "Infrastructure as code scan gate: misconfigured infrastructure blocked before it is applied.",
   "cat": "Installed",
   "on": false,
   "use": "Infrastructure as code scan gate: misconfigured infrastructure blocked before it is applied. Use when a change touches infrastructure code.",
   "prompt": "Use the rlm-gate-iac-scan skill.",
   "input": "",
   "output": "",
   "pros": [],
   "cons": [],
   "items": [
    "input-1",
    "input-2",
    "input-3",
    "input-4",
    "input-5",
    "input-6"
   ],
   "steps": [
    {
     "layout": "row",
     "note": "Confirm the scan runs on each infrastructure change, before the plan is applied."
    },
    {
     "layout": "chunks",
     "note": "Set the rule. High misconfigurations block the apply.",
     "groups": [
      0,
      0,
      1,
      1,
      2,
      2
     ]
    },
    {
     "layout": "parallel",
     "note": "Check exceptions. Each suppressed rule needs a reason and an owner.",
     "groups": [
      0,
      0,
      1,
      1,
      2,
      2
     ],
     "state": [
      "ok",
      "ok",
      "ok",
      "ok",
      "ok",
      "ok"
     ]
    },
    {
     "layout": "funnel",
     "note": "Check drift. Flag resources changed outside the code."
    },
    {
     "layout": "gate",
     "note": "Report. Each finding with its resource, severity and the exception status.",
     "pass": [
      true,
      true,
      true,
      true,
      true,
      false
     ]
    }
   ],
   "outcome": null,
   "idea": "",
   "why": "",
   "protocol": [
    {
     "title": "Confirm the scan runs on each infrastructure change, before the plan is applied",
     "text": ""
    },
    {
     "title": "Set the rule",
     "text": "High misconfigurations block the apply."
    },
    {
     "title": "Check exceptions",
     "text": "Each suppressed rule needs a reason and an owner."
    },
    {
     "title": "Check drift",
     "text": "Flag resources changed outside the code."
    },
    {
     "title": "Report",
     "text": "Each finding with its resource, severity and the exception status."
    }
   ],
   "path": ".github/skills/rlm-gate-iac-scan",
   "files": [],
   "helperScripts": 0,
   "notChecked": true,
   "group": "gates",
   "grade": {
    "grade": "B+",
    "score": "3.85",
    "scores": [
     4,
     4,
     4,
     3,
     4
    ],
    "design": true,
    "rank": 77
   }
  },
  {
   "id": "rlm-gate-licence",
   "goal": "Licence gate: dependency licences checked against policy before a merge.",
   "cat": "Installed",
   "on": false,
   "use": "Licence gate: dependency licences checked against policy before a merge. Use when a change adds a dependency or a licence policy changes.",
   "prompt": "Use the rlm-gate-licence skill.",
   "input": "",
   "output": "",
   "pros": [],
   "cons": [],
   "items": [
    "input-1",
    "input-2",
    "input-3",
    "input-4",
    "input-5",
    "input-6"
   ],
   "steps": [
    {
     "layout": "row",
     "note": "Confirm the licence scan runs on each dependency change."
    },
    {
     "layout": "chunks",
     "note": "Set the policy. Permitted, review-required and forbidden licences are listed.",
     "groups": [
      0,
      0,
      1,
      1,
      2,
      2
     ]
    },
    {
     "layout": "parallel",
     "note": "Check unknown licences. Flag packages with no licence recorded.",
     "groups": [
      0,
      0,
      1,
      1,
      2,
      2
     ],
     "state": [
      "ok",
      "ok",
      "ok",
      "ok",
      "ok",
      "ok"
     ]
    },
    {
     "layout": "funnel",
     "note": "Check copyleft. Flag strong copyleft licences that conflict with distribution."
    },
    {
     "layout": "gate",
     "note": "Report. Each package with its licence, the policy result and the owner's decision.",
     "pass": [
      true,
      true,
      true,
      true,
      true,
      false
     ]
    }
   ],
   "outcome": null,
   "idea": "",
   "why": "",
   "protocol": [
    {
     "title": "Confirm the licence scan runs on each dependency change",
     "text": ""
    },
    {
     "title": "Set the policy",
     "text": "Permitted, review-required and forbidden licences are listed."
    },
    {
     "title": "Check unknown licences",
     "text": "Flag packages with no licence recorded."
    },
    {
     "title": "Check copyleft",
     "text": "Flag strong copyleft licences that conflict with distribution."
    },
    {
     "title": "Report",
     "text": "Each package with its licence, the policy result and the owner's decision."
    }
   ],
   "path": ".github/skills/rlm-gate-licence",
   "files": [],
   "helperScripts": 0,
   "notChecked": true,
   "group": "gates",
   "grade": {
    "grade": "B",
    "score": "3.65",
    "scores": [
     4,
     4,
     3,
     3,
     4
    ],
    "design": true,
    "rank": 170
   }
  },
  {
   "id": "rlm-gate-policy-as-code",
   "goal": "Policy as code gate: organisational rules written as code and checked on every change.",
   "cat": "Installed",
   "on": false,
   "use": "Policy as code gate: organisational rules written as code and checked on every change. Use when a team writes or changes rules for infrastructure or deployments.",
   "prompt": "Use the rlm-gate-policy-as-code skill.",
   "input": "",
   "output": "",
   "pros": [],
   "cons": [],
   "items": [
    "input-1",
    "input-2",
    "input-3",
    "input-4",
    "input-5",
    "input-6"
   ],
   "steps": [
    {
     "layout": "row",
     "note": "List the policies. Each rule with its purpose and owner."
    },
    {
     "layout": "chunks",
     "note": "Confirm each policy is code, versioned and tested.",
     "groups": [
      0,
      0,
      1,
      1,
      2,
      2
     ]
    },
    {
     "layout": "parallel",
     "note": "Set the rule. A change that breaks a policy is blocked with a clear message.",
     "groups": [
      0,
      0,
      1,
      1,
      2,
      2
     ],
     "state": [
      "ok",
      "ok",
      "ok",
      "ok",
      "ok",
      "ok"
     ]
    },
    {
     "layout": "funnel",
     "note": "Check drift. Flag policies that exist only as documents."
    },
    {
     "layout": "gate",
     "note": "Report. Each policy, its enforcement point and any gap.",
     "pass": [
      true,
      true,
      true,
      true,
      true,
      false
     ]
    }
   ],
   "outcome": null,
   "idea": "",
   "why": "",
   "protocol": [
    {
     "title": "List the policies",
     "text": "Each rule with its purpose and owner."
    },
    {
     "title": "Confirm each policy is code, versioned and tested",
     "text": ""
    },
    {
     "title": "Set the rule",
     "text": "A change that breaks a policy is blocked with a clear message."
    },
    {
     "title": "Check drift",
     "text": "Flag policies that exist only as documents."
    },
    {
     "title": "Report",
     "text": "Each policy, its enforcement point and any gap."
    }
   ],
   "path": ".github/skills/rlm-gate-policy-as-code",
   "files": [],
   "helperScripts": 0,
   "notChecked": true,
   "group": "gates",
   "grade": {
    "grade": "B+",
    "score": "3.75",
    "scores": [
     4,
     4,
     4,
     3,
     3
    ],
    "design": true,
    "rank": 133
   }
  },
  {
   "id": "rlm-gate-sast",
   "goal": "Static analysis gate: what the static security scan must find clean before a merge.",
   "cat": "Installed",
   "on": false,
   "use": "Static analysis gate: what the static security scan must find clean before a merge. Use when a pipeline runs static analysis on code.",
   "prompt": "Use the rlm-gate-sast skill.",
   "input": "",
   "output": "",
   "pros": [],
   "cons": [],
   "items": [
    "input-1",
    "input-2",
    "input-3",
    "input-4",
    "input-5",
    "input-6"
   ],
   "steps": [
    {
     "layout": "row",
     "note": "Confirm the scan runs on every pull request, not only nightly."
    },
    {
     "layout": "chunks",
     "note": "Set the blocking rule. New high and critical findings block the merge.",
     "groups": [
      0,
      0,
      1,
      1,
      2,
      2
     ]
    },
    {
     "layout": "parallel",
     "note": "Set the baseline. Existing findings are recorded, not hidden.",
     "groups": [
      0,
      0,
      1,
      1,
      2,
      2
     ],
     "state": [
      "ok",
      "ok",
      "ok",
      "ok",
      "ok",
      "ok"
     ]
    },
    {
     "layout": "funnel",
     "note": "Check the bypass path. Flag suppressed findings with no owner or reason."
    },
    {
     "layout": "gate",
     "note": "Report. The rule, the threshold, the owner and any gap.",
     "pass": [
      true,
      true,
      true,
      true,
      true,
      false
     ]
    }
   ],
   "outcome": null,
   "idea": "",
   "why": "",
   "protocol": [
    {
     "title": "Confirm the scan runs on every pull request, not only nightly",
     "text": ""
    },
    {
     "title": "Set the blocking rule",
     "text": "New high and critical findings block the merge."
    },
    {
     "title": "Set the baseline",
     "text": "Existing findings are recorded, not hidden."
    },
    {
     "title": "Check the bypass path",
     "text": "Flag suppressed findings with no owner or reason."
    },
    {
     "title": "Report",
     "text": "The rule, the threshold, the owner and any gap."
    }
   ],
   "path": ".github/skills/rlm-gate-sast",
   "files": [],
   "helperScripts": 0,
   "notChecked": true,
   "group": "gates",
   "grade": {
    "grade": "B+",
    "score": "3.85",
    "scores": [
     4,
     4,
     4,
     3,
     4
    ],
    "design": true,
    "rank": 78
   }
  },
  {
   "id": "rlm-gate-sbom",
   "goal": "SBOM gate: a complete software bill of materials produced for each release.",
   "cat": "Installed",
   "on": false,
   "use": "SBOM gate: a complete software bill of materials produced for each release. Use when a release is built.",
   "prompt": "Use the rlm-gate-sbom skill.",
   "input": "",
   "output": "",
   "pros": [],
   "cons": [],
   "items": [
    "input-1",
    "input-2",
    "input-3",
    "input-4",
    "input-5",
    "input-6"
   ],
   "steps": [
    {
     "layout": "row",
     "note": "Confirm the SBOM is generated by the pipeline for each release."
    },
    {
     "layout": "chunks",
     "note": "Set the rule. A release without an SBOM does not pass.",
     "groups": [
      0,
      0,
      1,
      1,
      2,
      2
     ]
    },
    {
     "layout": "parallel",
     "note": "Check completeness. The SBOM must include transitive packages.",
     "groups": [
      0,
      0,
      1,
      1,
      2,
      2
     ],
     "state": [
      "ok",
      "ok",
      "ok",
      "ok",
      "ok",
      "ok"
     ]
    },
    {
     "layout": "funnel",
     "note": "Check storage. The SBOM is kept with the release record."
    },
    {
     "layout": "gate",
     "note": "Report. The release, the SBOM status, its component count and any gap.",
     "pass": [
      true,
      true,
      true,
      true,
      true,
      false
     ]
    }
   ],
   "outcome": null,
   "idea": "",
   "why": "",
   "protocol": [
    {
     "title": "Confirm the SBOM is generated by the pipeline for each release",
     "text": ""
    },
    {
     "title": "Set the rule",
     "text": "A release without an SBOM does not pass."
    },
    {
     "title": "Check completeness",
     "text": "The SBOM must include transitive packages."
    },
    {
     "title": "Check storage",
     "text": "The SBOM is kept with the release record."
    },
    {
     "title": "Report",
     "text": "The release, the SBOM status, its component count and any gap."
    }
   ],
   "path": ".github/skills/rlm-gate-sbom",
   "files": [],
   "helperScripts": 0,
   "notChecked": true,
   "group": "gates",
   "grade": {
    "grade": "B+",
    "score": "3.70",
    "scores": [
     4,
     3,
     4,
     4,
     3
    ],
    "design": true,
    "rank": 154
   }
  },
  {
   "id": "rlm-gate-secret-scan",
   "goal": "Secret scanning gate: keys and tokens caught before they reach the repository.",
   "cat": "Installed",
   "on": false,
   "use": "Secret scanning gate: keys and tokens caught before they reach the repository. Use when a commit or push may contain credentials.",
   "prompt": "Use the rlm-gate-secret-scan skill.",
   "input": "",
   "output": "",
   "pros": [],
   "cons": [],
   "items": [
    "input-1",
    "input-2",
    "input-3",
    "input-4",
    "input-5",
    "input-6"
   ],
   "steps": [
    {
     "layout": "row",
     "note": "Confirm the scan runs before the push, locally and again in the pipeline."
    },
    {
     "layout": "chunks",
     "note": "Set the rule. Any detected live secret blocks the merge.",
     "groups": [
      0,
      0,
      1,
      1,
      2,
      2
     ]
    },
    {
     "layout": "parallel",
     "note": "Check history. Scan the existing history for secrets already committed.",
     "groups": [
      0,
      0,
      1,
      1,
      2,
      2
     ],
     "state": [
      "ok",
      "ok",
      "ok",
      "ok",
      "ok",
      "ok"
     ]
    },
    {
     "layout": "funnel",
     "note": "Check the response. A found secret must be rotated, not only removed."
    },
    {
     "layout": "gate",
     "note": "Report. The rule, the detections, the rotation status and any gap.",
     "pass": [
      true,
      true,
      true,
      true,
      true,
      false
     ]
    }
   ],
   "outcome": null,
   "idea": "",
   "why": "",
   "protocol": [
    {
     "title": "Confirm the scan runs before the push, locally and again in the pipeline",
     "text": ""
    },
    {
     "title": "Set the rule",
     "text": "Any detected live secret blocks the merge."
    },
    {
     "title": "Check history",
     "text": "Scan the existing history for secrets already committed."
    },
    {
     "title": "Check the response",
     "text": "A found secret must be rotated, not only removed."
    },
    {
     "title": "Report",
     "text": "The rule, the detections, the rotation status and any gap."
    }
   ],
   "path": ".github/skills/rlm-gate-secret-scan",
   "files": [],
   "helperScripts": 0,
   "notChecked": true,
   "group": "gates",
   "grade": {
    "grade": "A-",
    "score": "4.05",
    "scores": [
     5,
     4,
     4,
     2,
     4
    ],
    "design": true,
    "rank": 28
   }
  },
  {
   "id": "rlm-gate-signed-commits",
   "goal": "Signed commits gate: commits to protected branches traced to a verified author.",
   "cat": "Installed",
   "on": false,
   "use": "Signed commits gate: commits to protected branches traced to a verified author. Use when a branch is protected or a release is cut.",
   "prompt": "Use the rlm-gate-signed-commits skill.",
   "input": "",
   "output": "",
   "pros": [],
   "cons": [],
   "items": [
    "input-1",
    "input-2",
    "input-3",
    "input-4",
    "input-5",
    "input-6"
   ],
   "steps": [
    {
     "layout": "row",
     "note": "Confirm the protected branches are listed."
    },
    {
     "layout": "chunks",
     "note": "Set the rule. Unsigned commits cannot be merged into protected branches.",
     "groups": [
      0,
      0,
      1,
      1,
      2,
      2
     ]
    },
    {
     "layout": "parallel",
     "note": "Check key management. Signing keys are personal and revocable.",
     "groups": [
      0,
      0,
      1,
      1,
      2,
      2
     ],
     "state": [
      "ok",
      "ok",
      "ok",
      "ok",
      "ok",
      "ok"
     ]
    },
    {
     "layout": "funnel",
     "note": "Check exceptions. Service accounts need a documented process."
    },
    {
     "layout": "gate",
     "note": "Report. The branches, the verification result and any unsigned commits.",
     "pass": [
      true,
      true,
      true,
      true,
      true,
      false
     ]
    }
   ],
   "outcome": null,
   "idea": "",
   "why": "",
   "protocol": [
    {
     "title": "Confirm the protected branches are listed",
     "text": ""
    },
    {
     "title": "Set the rule",
     "text": "Unsigned commits cannot be merged into protected branches."
    },
    {
     "title": "Check key management",
     "text": "Signing keys are personal and revocable."
    },
    {
     "title": "Check exceptions",
     "text": "Service accounts need a documented process."
    },
    {
     "title": "Report",
     "text": "The branches, the verification result and any unsigned commits."
    }
   ],
   "path": ".github/skills/rlm-gate-signed-commits",
   "files": [],
   "helperScripts": 0,
   "notChecked": true,
   "group": "gates",
   "grade": {
    "grade": "B",
    "score": "3.65",
    "scores": [
     4,
     4,
     3,
     3,
     4
    ],
    "design": true,
    "rank": 171
   }
  },
  {
   "id": "rlm-gate-sla",
   "goal": "Security finding SLA gate: release blocked while findings are past their remediation deadline.",
   "cat": "Installed",
   "on": false,
   "use": "Security finding SLA gate: release blocked while findings are past their remediation deadline. Use when a release is planned while findings are open.",
   "prompt": "Use the rlm-gate-sla skill.",
   "input": "",
   "output": "",
   "pros": [],
   "cons": [],
   "items": [
    "input-1",
    "input-2",
    "input-3",
    "input-4",
    "input-5",
    "input-6"
   ],
   "steps": [
    {
     "layout": "row",
     "note": "List open findings with their severity and age."
    },
    {
     "layout": "chunks",
     "note": "Set the deadlines. Each severity has a remediation time limit.",
     "groups": [
      0,
      0,
      1,
      1,
      2,
      2
     ]
    },
    {
     "layout": "parallel",
     "note": "Set the rule. A release with findings past deadline does not pass.",
     "groups": [
      0,
      0,
      1,
      1,
      2,
      2
     ],
     "state": [
      "ok",
      "ok",
      "ok",
      "ok",
      "ok",
      "ok"
     ]
    },
    {
     "layout": "funnel",
     "note": "Check the exceptions. Each overdue finding needs an approved extension."
    },
    {
     "layout": "gate",
     "note": "Report. The overdue findings, the release decision and the owners.",
     "pass": [
      true,
      true,
      true,
      true,
      true,
      false
     ]
    }
   ],
   "outcome": null,
   "idea": "",
   "why": "",
   "protocol": [
    {
     "title": "List open findings with their severity and age",
     "text": ""
    },
    {
     "title": "Set the deadlines",
     "text": "Each severity has a remediation time limit."
    },
    {
     "title": "Set the rule",
     "text": "A release with findings past deadline does not pass."
    },
    {
     "title": "Check the exceptions",
     "text": "Each overdue finding needs an approved extension."
    },
    {
     "title": "Report",
     "text": "The overdue findings, the release decision and the owners."
    }
   ],
   "path": ".github/skills/rlm-gate-sla",
   "files": [],
   "helperScripts": 0,
   "notChecked": true,
   "group": "gates",
   "grade": {
    "grade": "B+",
    "score": "3.85",
    "scores": [
     4,
     4,
     4,
     3,
     4
    ],
    "design": true,
    "rank": 79
   }
  },
  {
   "id": "rlm-gdpr-data-map",
   "goal": "Map where personal data is collected, stored, shared and deleted in the code, with the purpose and retention…",
   "cat": "Installed",
   "on": false,
   "use": "Map where personal data is collected, stored, shared and deleted in the code, with the purpose and retention of each. Use when a feature touches personal data.",
   "prompt": "Use the rlm-gdpr-data-map skill.",
   "input": "",
   "output": "",
   "pros": [],
   "cons": [],
   "items": [
    "input-1",
    "input-2",
    "input-3",
    "input-4",
    "input-5",
    "input-6"
   ],
   "steps": [
    {
     "layout": "row",
     "note": "Find the personal data. List fields that hold personal data: names, emails, addresses, identifiers and location."
    },
    {
     "layout": "chunks",
     "note": "Map the flow. For each field, follow where it is collected, stored, sent to other services and logged.",
     "groups": [
      0,
      0,
      1,
      1,
      2,
      2
     ]
    },
    {
     "layout": "parallel",
     "note": "Check the purpose. Each field should have a stated purpose.",
     "groups": [
      0,
      0,
      1,
      1,
      2,
      2
     ],
     "state": [
      "ok",
      "ok",
      "ok",
      "ok",
      "ok",
      "ok"
     ]
    },
    {
     "layout": "funnel",
     "note": "Check retention. Each field needs a retention period and a delete path."
    },
    {
     "layout": "gate",
     "note": "Check sharing. Flag personal data sent to third parties, or to a region the policy does not allow.",
     "pass": [
      true,
      true,
      true,
      true,
      true,
      false
     ]
    },
    {
     "layout": "doc",
     "note": "Report. A table: field, where collected, stored, shared, purpose, retention, and gaps.",
     "docLabel": "report"
    }
   ],
   "outcome": null,
   "idea": "",
   "why": "",
   "protocol": [
    {
     "title": "Find the personal data",
     "text": "List fields that hold personal data: names, emails, addresses, identifiers and location."
    },
    {
     "title": "Map the flow",
     "text": "For each field, follow where it is collected, stored, sent to other services and logged."
    },
    {
     "title": "Check the purpose",
     "text": "Each field should have a stated purpose. Flag fields collected with no use."
    },
    {
     "title": "Check retention",
     "text": "Each field needs a retention period and a delete path. Flag data kept with no delete."
    },
    {
     "title": "Check sharing",
     "text": "Flag personal data sent to third parties, or to a region the policy does not allow."
    },
    {
     "title": "Report",
     "text": "A table: field, where collected, stored, shared, purpose, retention, and gaps. This is a map for a person to review, not a legal opinion."
    }
   ],
   "path": ".github/skills/rlm-gdpr-data-map",
   "files": [],
   "helperScripts": 0,
   "notChecked": true,
   "group": "compliance",
   "grade": {
    "grade": "B",
    "score": "3.60",
    "scores": [
     4,
     4,
     4,
     2,
     3
    ],
    "design": true,
    "rank": 186
   }
  },
  {
   "id": "rlm-go-review",
   "goal": "Review Go code for error handling, concurrency, resource cleanup, input handling and tests.",
   "cat": "Installed",
   "on": false,
   "use": "Review Go code for error handling, concurrency, resource cleanup, input handling and tests. Use when asked to review or harden a Go module or service.",
   "prompt": "Use the rlm-go-review skill.",
   "input": "",
   "output": "",
   "pros": [],
   "cons": [],
   "items": [
    "input-1",
    "input-2",
    "input-3",
    "input-4",
    "input-5",
    "input-6"
   ],
   "steps": [
    {
     "layout": "row",
     "note": "Read the module setup. Open go.mod, go.sum, any Makefile or CI configuration, and the lint configuration."
    },
    {
     "layout": "chunks",
     "note": "Check errors. Flag ignored errors (`_ =` on a call that can fail), errors compared as strings, and errors wrapped without `%w` when callers need to test them.",
     "groups": [
      0,
      0,
      1,
      1,
      2,
      2
     ]
    },
    {
     "layout": "parallel",
     "note": "Check concurrency. Look for goroutines with no way to stop, shared maps or slices written without a lock, channels that can block forever, and `context` not passed through.",
     "groups": [
      0,
      0,
      1,
      1,
      2,
      2
     ],
     "state": [
      "ok",
      "ok",
      "ok",
      "ok",
      "ok",
      "ok"
     ]
    },
    {
     "layout": "funnel",
     "note": "Check resources. `Close` on files, response bodies and rows must run on every path, normally through `defer` after the error check."
    },
    {
     "layout": "gate",
     "note": "Check security. Flag SQL built with `fmt.Sprintf`, `os/exec` with a shell and built strings, paths joined from user input, and TLS settings that skip verification.",
     "pass": [
      true,
      true,
      true,
      true,
      true,
      false
     ]
    },
    {
     "layout": "doc",
     "note": "Check tests. Find exported functions and branches with no test, and table tests that never assert the result.",
     "docLabel": "report"
    }
   ],
   "outcome": null,
   "idea": "",
   "why": "",
   "protocol": [
    {
     "title": "Read the module setup",
     "text": "Open go.mod, go.sum, any Makefile or CI configuration, and the lint configuration. Note the Go version."
    },
    {
     "title": "Check errors",
     "text": "Flag ignored errors (`_ =` on a call that can fail), errors compared as strings, and errors wrapped without `%w` when callers need to test them."
    },
    {
     "title": "Check concurrency",
     "text": "Look for goroutines with no way to stop, shared maps or slices written without a lock, channels that can block forever, and `context` not passed through."
    },
    {
     "title": "Check resources",
     "text": "`Close` on files, response bodies and rows must run on every path, normally through `defer` after the error check."
    },
    {
     "title": "Check security",
     "text": "Flag SQL built with `fmt.Sprintf`, `os/exec` with a shell and built strings, paths joined from user input, and TLS settings that skip verification."
    },
    {
     "title": "Check tests",
     "text": "Find exported functions and branches with no test, and table tests that never assert the result."
    },
    {
     "title": "Report",
     "text": "List each finding as `file:line`, with severity (high, medium or low), the problem and the fix. Mark what you did not run."
    }
   ],
   "path": ".github/skills/rlm-go-review",
   "files": [],
   "helperScripts": 0,
   "notChecked": true,
   "group": "languages",
   "grade": {
    "grade": "B+",
    "score": "3.75",
    "scores": [
     4,
     3,
     4,
     3,
     5
    ],
    "design": true,
    "rank": 134
   }
  },
  {
   "id": "rlm-graphql-review",
   "goal": "Review a GraphQL schema and resolvers for query depth and cost limits, authorization per field, batching and…",
   "cat": "Installed",
   "on": false,
   "use": "Review a GraphQL schema and resolvers for query depth and cost limits, authorization per field, batching and error exposure. Use when a GraphQL API is added or changed.",
   "prompt": "Use the rlm-graphql-review skill.",
   "input": "",
   "output": "",
   "pros": [],
   "cons": [],
   "items": [
    "input-1",
    "input-2",
    "input-3",
    "input-4",
    "input-5",
    "input-6"
   ],
   "steps": [
    {
     "layout": "row",
     "note": "Read the schema. Open the schema, resolvers and any query limits."
    },
    {
     "layout": "chunks",
     "note": "Check depth and cost. Flag schemas with no depth or cost limit.",
     "groups": [
      0,
      0,
      1,
      1,
      2,
      2
     ]
    },
    {
     "layout": "parallel",
     "note": "Check authorization per field. Authorization must hold at each field that returns private data, not only at the top query.",
     "groups": [
      0,
      0,
      1,
      1,
      2,
      2
     ],
     "state": [
      "ok",
      "ok",
      "ok",
      "ok",
      "ok",
      "ok"
     ]
    },
    {
     "layout": "funnel",
     "note": "Check batching. Resolvers that call the database once per item cause the N+1 problem."
    },
    {
     "layout": "gate",
     "note": "Check errors. Flag errors that return stack traces or internal fields to clients.",
     "pass": [
      true,
      true,
      true,
      true,
      true,
      false
     ]
    },
    {
     "layout": "doc",
     "note": "Report. List each finding with its type and field, severity and the fix.",
     "docLabel": "report"
    }
   ],
   "outcome": null,
   "idea": "",
   "why": "",
   "protocol": [
    {
     "title": "Read the schema",
     "text": "Open the schema, resolvers and any query limits. List the types that expose data."
    },
    {
     "title": "Check depth and cost",
     "text": "Flag schemas with no depth or cost limit. A single query can otherwise fetch everything."
    },
    {
     "title": "Check authorization per field",
     "text": "Authorization must hold at each field that returns private data, not only at the top query."
    },
    {
     "title": "Check batching",
     "text": "Resolvers that call the database once per item cause the N+1 problem. Flag them."
    },
    {
     "title": "Check errors",
     "text": "Flag errors that return stack traces or internal fields to clients."
    },
    {
     "title": "Report",
     "text": "List each finding with its type and field, severity and the fix."
    }
   ],
   "path": ".github/skills/rlm-graphql-review",
   "files": [],
   "helperScripts": 0,
   "notChecked": true,
   "group": "web",
   "grade": {
    "grade": "B+",
    "score": "3.75",
    "scores": [
     4,
     4,
     4,
     3,
     3
    ],
    "design": true,
    "rank": 135
   }
  },
  {
   "id": "rlm-grpc-review",
   "goal": "gRPC review: service authorisation, deadlines, message size limits and error status.",
   "cat": "Installed",
   "on": false,
   "use": "gRPC review: service authorisation, deadlines, message size limits and error status. Use when a gRPC service or client is added or changed.",
   "prompt": "Use the rlm-grpc-review skill.",
   "input": "",
   "output": "",
   "pros": [],
   "cons": [],
   "items": [
    "input-1",
    "input-2",
    "input-3",
    "input-4",
    "input-5",
    "input-6"
   ],
   "steps": [
    {
     "layout": "row",
     "note": "List the services and methods, with their callers."
    },
    {
     "layout": "chunks",
     "note": "Check authorisation. Each method needs a policy check.",
     "groups": [
      0,
      0,
      1,
      1,
      2,
      2
     ]
    },
    {
     "layout": "parallel",
     "note": "Check deadlines. Clients must set a deadline on every call.",
     "groups": [
      0,
      0,
      1,
      1,
      2,
      2
     ],
     "state": [
      "ok",
      "ok",
      "ok",
      "ok",
      "ok",
      "ok"
     ]
    },
    {
     "layout": "funnel",
     "note": "Check limits. Flag missing message size limits."
    },
    {
     "layout": "gate",
     "note": "Report. Each method with file and line, severity and the fix.",
     "pass": [
      true,
      true,
      true,
      true,
      true,
      false
     ]
    }
   ],
   "outcome": null,
   "idea": "",
   "why": "",
   "protocol": [
    {
     "title": "List the services and methods, with their callers",
     "text": ""
    },
    {
     "title": "Check authorisation",
     "text": "Each method needs a policy check."
    },
    {
     "title": "Check deadlines",
     "text": "Clients must set a deadline on every call."
    },
    {
     "title": "Check limits",
     "text": "Flag missing message size limits."
    },
    {
     "title": "Report",
     "text": "Each method with file and line, severity and the fix."
    }
   ],
   "path": ".github/skills/rlm-grpc-review",
   "files": [],
   "helperScripts": 0,
   "notChecked": true,
   "group": "dotnet",
   "grade": {
    "grade": "B+",
    "score": "3.75",
    "scores": [
     4,
     4,
     4,
     3,
     3
    ],
    "design": true,
    "rank": 136
   }
  },
  {
   "id": "rlm-haskell-review",
   "goal": "Haskell review: partial functions, laziness leaks, exceptions in pure code and effect boundaries.",
   "cat": "Installed",
   "on": false,
   "use": "Haskell review: partial functions, laziness leaks, exceptions in pure code and effect boundaries. Use when asked to review a Haskell project or module.",
   "prompt": "Use the rlm-haskell-review skill.",
   "input": "",
   "output": "",
   "pros": [],
   "cons": [],
   "items": [
    "input-1",
    "input-2",
    "input-3",
    "input-4",
    "input-5",
    "input-6"
   ],
   "steps": [
    {
     "layout": "row",
     "note": "Read the project setup. Cabal or stack files and the compiler flags."
    },
    {
     "layout": "chunks",
     "note": "Check partial functions. Flag head, tail and fromJust on external data.",
     "groups": [
      0,
      0,
      1,
      1,
      2,
      2
     ]
    },
    {
     "layout": "parallel",
     "note": "Check laziness. Flag space leaks from lazy accumulation.",
     "groups": [
      0,
      0,
      1,
      1,
      2,
      2
     ],
     "state": [
      "ok",
      "ok",
      "ok",
      "ok",
      "ok",
      "ok"
     ]
    },
    {
     "layout": "funnel",
     "note": "Check exceptions. Flag errors thrown from pure code."
    },
    {
     "layout": "gate",
     "note": "Report. Each finding with file and line, severity and the fix.",
     "pass": [
      true,
      true,
      true,
      true,
      true,
      false
     ]
    }
   ],
   "outcome": null,
   "idea": "",
   "why": "",
   "protocol": [
    {
     "title": "Read the project setup",
     "text": "Cabal or stack files and the compiler flags."
    },
    {
     "title": "Check partial functions",
     "text": "Flag head, tail and fromJust on external data."
    },
    {
     "title": "Check laziness",
     "text": "Flag space leaks from lazy accumulation."
    },
    {
     "title": "Check exceptions",
     "text": "Flag errors thrown from pure code."
    },
    {
     "title": "Report",
     "text": "Each finding with file and line, severity and the fix."
    }
   ],
   "path": ".github/skills/rlm-haskell-review",
   "files": [],
   "helperScripts": 0,
   "notChecked": true,
   "group": "languages",
   "grade": {
    "grade": "B",
    "score": "3.65",
    "scores": [
     4,
     4,
     3,
     3,
     4
    ],
    "design": true,
    "rank": 172
   }
  },
  {
   "id": "rlm-httpclient-review",
   "goal": "HttpClient review: client lifetime, timeouts, retry policy and handling of responses.",
   "cat": "Installed",
   "on": false,
   "use": "HttpClient review: client lifetime, timeouts, retry policy and handling of responses. Use when code calls external services with HttpClient.",
   "prompt": "Use the rlm-httpclient-review skill.",
   "input": "",
   "output": "",
   "pros": [],
   "cons": [],
   "items": [
    "input-1",
    "input-2",
    "input-3",
    "input-4",
    "input-5",
    "input-6"
   ],
   "steps": [
    {
     "layout": "row",
     "note": "List the clients and how each is created."
    },
    {
     "layout": "chunks",
     "note": "Check lifetime. Flag a new client per request, which exhausts sockets.",
     "groups": [
      0,
      0,
      1,
      1,
      2,
      2
     ]
    },
    {
     "layout": "parallel",
     "note": "Check timeouts. Every client needs a timeout.",
     "groups": [
      0,
      0,
      1,
      1,
      2,
      2
     ],
     "state": [
      "ok",
      "ok",
      "ok",
      "ok",
      "ok",
      "ok"
     ]
    },
    {
     "layout": "funnel",
     "note": "Check retries. Retries need a limit and back-off, and only for safe calls."
    },
    {
     "layout": "gate",
     "note": "Report. Each client with file and line, the problem and the fix.",
     "pass": [
      true,
      true,
      true,
      true,
      true,
      false
     ]
    }
   ],
   "outcome": null,
   "idea": "",
   "why": "",
   "protocol": [
    {
     "title": "List the clients and how each is created",
     "text": ""
    },
    {
     "title": "Check lifetime",
     "text": "Flag a new client per request, which exhausts sockets."
    },
    {
     "title": "Check timeouts",
     "text": "Every client needs a timeout."
    },
    {
     "title": "Check retries",
     "text": "Retries need a limit and back-off, and only for safe calls."
    },
    {
     "title": "Report",
     "text": "Each client with file and line, the problem and the fix."
    }
   ],
   "path": ".github/skills/rlm-httpclient-review",
   "files": [],
   "helperScripts": 0,
   "notChecked": true,
   "group": "dotnet",
   "grade": {
    "grade": "B+",
    "score": "3.85",
    "scores": [
     4,
     4,
     4,
     3,
     4
    ],
    "design": true,
    "rank": 80
   }
  },
  {
   "id": "rlm-identity-review",
   "goal": "ASP.NET Identity review: password policy, lockout, token lifetimes and account recovery.",
   "cat": "Installed",
   "on": false,
   "use": "ASP.NET Identity review: password policy, lockout, token lifetimes and account recovery. Use when the application uses ASP.NET Identity for sign-in.",
   "prompt": "Use the rlm-identity-review skill.",
   "input": "",
   "output": "",
   "pros": [],
   "cons": [],
   "items": [
    "input-1",
    "input-2",
    "input-3",
    "input-4",
    "input-5",
    "input-6"
   ],
   "steps": [
    {
     "layout": "row",
     "note": "Check the password policy. Length and checks match current guidance."
    },
    {
     "layout": "chunks",
     "note": "Check lockout. Failed attempts lock the account for a set period.",
     "groups": [
      0,
      0,
      1,
      1,
      2,
      2
     ]
    },
    {
     "layout": "parallel",
     "note": "Check tokens. Confirmation and reset tokens expire quickly and are single-use.",
     "groups": [
      0,
      0,
      1,
      1,
      2,
      2
     ],
     "state": [
      "ok",
      "ok",
      "ok",
      "ok",
      "ok",
      "ok"
     ]
    },
    {
     "layout": "funnel",
     "note": "Check recovery. The recovery flow does not reveal whether an account exists."
    },
    {
     "layout": "gate",
     "note": "Report. Each setting with file and line, the problem and the fix.",
     "pass": [
      true,
      true,
      true,
      true,
      true,
      false
     ]
    }
   ],
   "outcome": null,
   "idea": "",
   "why": "",
   "protocol": [
    {
     "title": "Check the password policy",
     "text": "Length and checks match current guidance."
    },
    {
     "title": "Check lockout",
     "text": "Failed attempts lock the account for a set period."
    },
    {
     "title": "Check tokens",
     "text": "Confirmation and reset tokens expire quickly and are single-use."
    },
    {
     "title": "Check recovery",
     "text": "The recovery flow does not reveal whether an account exists."
    },
    {
     "title": "Report",
     "text": "Each setting with file and line, the problem and the fix."
    }
   ],
   "path": ".github/skills/rlm-identity-review",
   "files": [],
   "helperScripts": 0,
   "notChecked": true,
   "group": "dotnet",
   "grade": {
    "grade": "B+",
    "score": "3.85",
    "scores": [
     4,
     4,
     4,
     3,
     4
    ],
    "design": true,
    "rank": 81
   }
  },
  {
   "id": "rlm-incident-postmortem",
   "goal": "Write a blameless incident postmortem: sourced timeline, impact, root cause and contributing factors, detecti…",
   "cat": "Installed",
   "on": false,
   "use": "Write a blameless incident postmortem: sourced timeline, impact, root cause and contributing factors, detection and response review, and tracked action items with owners and dates. Use when an incident is contained and the team can supply logs, alerts, chat and notes.",
   "prompt": "Use the rlm-incident-postmortem skill.",
   "input": "",
   "output": "",
   "pros": [],
   "cons": [],
   "items": [
    "input-1",
    "input-2",
    "input-3",
    "input-4",
    "input-5",
    "input-6"
   ],
   "steps": [
    {
     "layout": "row",
     "note": "Inspect. The corpus is the generic corpus (docs/SKILL-TEMPLATE-STANDARD.md, section 6): prepare `<input>` with the files in scope, as text."
    },
    {
     "layout": "chunks",
     "note": "Partition. Run `WORK=$(mktemp -d)`, then `python3 <skill>/scripts/rlm_corpus.py chunk <input> \"$WORK/chunks\"`.",
     "groups": [
      0,
      0,
      1,
      1,
      2,
      2
     ]
    },
    {
     "layout": "parallel",
     "note": "Map. For each chunk, run a fresh sub-task (a subagent if you can start one) that sees only that chunk file and the \"Chunk task\" below.",
     "groups": [
      0,
      0,
      1,
      1,
      2,
      2
     ],
     "state": [
      "ok",
      "ok",
      "ok",
      "ok",
      "ok",
      "ok"
     ]
    },
    {
     "layout": "funnel",
     "note": "Reduce. Run `python3 <skill>/scripts/rlm_corpus.py merge \"$WORK/out\" --out \"$WORK/merged.json\"`."
    },
    {
     "layout": "gate",
     "note": "Verify. Check each timeline entry against its source line.",
     "pass": [
      true,
      true,
      true,
      true,
      true,
      false
     ]
    },
    {
     "layout": "doc",
     "note": "Report. Write the report in the format below.",
     "docLabel": "report"
    }
   ],
   "outcome": null,
   "idea": "",
   "why": "",
   "protocol": [
    {
     "title": "Inspect",
     "text": "The corpus is the generic corpus (docs/SKILL-TEMPLATE-STANDARD.md, section 6): prepare `<input>` with the files in scope, as text. Run `python3 <skill>/scripts/rlm_corpus.py scan <input>`. Note the file count, line count and top-level folders. If the corpus is very large, agree the scope with the user, then narrow it with `--include '<folder>'` (repeatable) on every command. Files over 20 MB are skipped; `--max-bytes N` changes the limit. Report what `scan` lists as skipped."
    },
    {
     "title": "Partition",
     "text": "Run `WORK=$(mktemp -d)`, then `python3 <skill>/scripts/rlm_corpus.py chunk <input> \"$WORK/chunks\"`. Chunks are limited to 800 lines and 100,000 characters each, and are cut between definitions where possible. Each `chunk_NNN.md` holds the data notice and labelled file sections. `manifest.json` lists the chunks."
    },
    {
     "title": "Map",
     "text": "For each chunk, run a fresh sub-task (a subagent if you can start one) that sees only that chunk file and the \"Chunk task\" below. It writes `\"$WORK/out/<chunk>.out.md\"`. If you cannot start sub-tasks, run `python3 <skill>/scripts/rlm_corpus.py pending \"$WORK/chunks\" \"$WORK/out\"`. It lists the chunks that still have no output. Process the first one: read it, write its output, then run `pending` again. Repeat until nothing is pending. Never hold all chunks in context at once."
    },
    {
     "title": "Reduce",
     "text": "Run `python3 <skill>/scripts/rlm_corpus.py merge \"$WORK/out\" --out \"$WORK/merged.json\"`. If it lists `failed_outputs`, re-run those chunks. A missing or invalid output is not \"no findings\". Checks that span files (a duplicate across manifests, a route missing from a contract, a pattern repeated across chunks) are done on the merged list in this step. If the merged list is still too large to read, repeat steps 2 to 4 on the findings."
    },
    {
     "title": "Verify",
     "text": "Check each timeline entry against its source line. Do not invent timestamps, numbers or owners; mark them unknown. Build the root cause in the reduce step by asking why from the impact until a cause the team can change is reached, labelling each step as sourced or hypothesis."
    },
    {
     "title": "Report",
     "text": "Write the report in the format below."
    },
    {
     "title": "Clean up",
     "text": "Delete `$WORK` after the report is delivered."
    }
   ],
   "path": ".github/skills/rlm-incident-postmortem",
   "files": [
    "scripts/rlm_corpus.py"
   ],
   "helperScripts": 1,
   "notChecked": true,
   "group": "engineering",
   "grade": {
    "grade": "C+",
    "score": "2.85",
    "scores": [
     3,
     3,
     3,
     2,
     3
    ],
    "design": true,
    "rank": 213
   }
  },
  {
   "id": "rlm-injection-review",
   "goal": "Injection review: SQL, command, template and LDAP inputs kept apart from code.",
   "cat": "Installed",
   "on": false,
   "use": "Injection review: SQL, command, template and LDAP inputs kept apart from code. Use when code builds queries, commands or templates from input.",
   "prompt": "Use the rlm-injection-review skill.",
   "input": "",
   "output": "",
   "pros": [],
   "cons": [],
   "items": [
    "input-1",
    "input-2",
    "input-3",
    "input-4",
    "input-5",
    "input-6"
   ],
   "steps": [
    {
     "layout": "row",
     "note": "Find the sinks. List each query, command, template and directory query."
    },
    {
     "layout": "chunks",
     "note": "Check construction. Flag any string built with input.",
     "groups": [
      0,
      0,
      1,
      1,
      2,
      2
     ]
    },
    {
     "layout": "parallel",
     "note": "Check parameters. Each input must reach the sink as a parameter or escaped value.",
     "groups": [
      0,
      0,
      1,
      1,
      2,
      2
     ],
     "state": [
      "ok",
      "ok",
      "ok",
      "ok",
      "ok",
      "ok"
     ]
    },
    {
     "layout": "funnel",
     "note": "Check the framework. Flag raw query helpers used where a safe API exists."
    },
    {
     "layout": "gate",
     "note": "Report. Each sink with file and line, severity and the fix.",
     "pass": [
      true,
      true,
      true,
      true,
      true,
      false
     ]
    }
   ],
   "outcome": null,
   "idea": "",
   "why": "",
   "protocol": [
    {
     "title": "Find the sinks",
     "text": "List each query, command, template and directory query."
    },
    {
     "title": "Check construction",
     "text": "Flag any string built with input."
    },
    {
     "title": "Check parameters",
     "text": "Each input must reach the sink as a parameter or escaped value."
    },
    {
     "title": "Check the framework",
     "text": "Flag raw query helpers used where a safe API exists."
    },
    {
     "title": "Report",
     "text": "Each sink with file and line, severity and the fix."
    }
   ],
   "path": ".github/skills/rlm-injection-review",
   "files": [],
   "helperScripts": 0,
   "notChecked": true,
   "group": "security",
   "grade": {
    "grade": "A-",
    "score": "4.20",
    "scores": [
     5,
     4,
     4,
     3,
     4
    ],
    "design": true,
    "rank": 15
   }
  },
  {
   "id": "rlm-input-validation-review",
   "goal": "Input validation review: untrusted input checked for type, length, range and format at the boundary.",
   "cat": "Installed",
   "on": false,
   "use": "Input validation review: untrusted input checked for type, length, range and format at the boundary. Use when code reads request, file, queue or user input.",
   "prompt": "Use the rlm-input-validation-review skill.",
   "input": "",
   "output": "",
   "pros": [],
   "cons": [],
   "items": [
    "input-1",
    "input-2",
    "input-3",
    "input-4",
    "input-5",
    "input-6"
   ],
   "steps": [
    {
     "layout": "row",
     "note": "List the entry points. Routes, handlers, queue consumers and file readers."
    },
    {
     "layout": "chunks",
     "note": "Check each input. Flag inputs used without a type, length or range check.",
     "groups": [
      0,
      0,
      1,
      1,
      2,
      2
     ]
    },
    {
     "layout": "parallel",
     "note": "Check placement. Validation should sit at the boundary, not deep in the code.",
     "groups": [
      0,
      0,
      1,
      1,
      2,
      2
     ],
     "state": [
      "ok",
      "ok",
      "ok",
      "ok",
      "ok",
      "ok"
     ]
    },
    {
     "layout": "funnel",
     "note": "Check allow-lists. Flag deny-lists used where allow-lists are possible."
    },
    {
     "layout": "gate",
     "note": "Report. Each entry point with its gap, file and line, and the fix.",
     "pass": [
      true,
      true,
      true,
      true,
      true,
      false
     ]
    }
   ],
   "outcome": null,
   "idea": "",
   "why": "",
   "protocol": [
    {
     "title": "List the entry points",
     "text": "Routes, handlers, queue consumers and file readers."
    },
    {
     "title": "Check each input",
     "text": "Flag inputs used without a type, length or range check."
    },
    {
     "title": "Check placement",
     "text": "Validation should sit at the boundary, not deep in the code."
    },
    {
     "title": "Check allow-lists",
     "text": "Flag deny-lists used where allow-lists are possible."
    },
    {
     "title": "Report",
     "text": "Each entry point with its gap, file and line, and the fix."
    }
   ],
   "path": ".github/skills/rlm-input-validation-review",
   "files": [],
   "helperScripts": 0,
   "notChecked": true,
   "group": "security",
   "grade": {
    "grade": "A-",
    "score": "4.05",
    "scores": [
     5,
     4,
     4,
     2,
     4
    ],
    "design": true,
    "rank": 29
   }
  },
  {
   "id": "rlm-internationalisation-review",
   "goal": "Internationalisation review: text in code, plural rules, dates, numbers and right-to-left layout.",
   "cat": "Installed",
   "on": false,
   "use": "Internationalisation review: text in code, plural rules, dates, numbers and right-to-left layout. Use when a product is translated or entered in a new locale.",
   "prompt": "Use the rlm-internationalisation-review skill.",
   "input": "",
   "output": "",
   "pros": [],
   "cons": [],
   "items": [
    "input-1",
    "input-2",
    "input-3",
    "input-4",
    "input-5",
    "input-6"
   ],
   "steps": [
    {
     "layout": "row",
     "note": "List the strings. Find text written directly in code."
    },
    {
     "layout": "chunks",
     "note": "Check plurals. Flag sentences built by joining words.",
     "groups": [
      0,
      0,
      1,
      1,
      2,
      2
     ]
    },
    {
     "layout": "parallel",
     "note": "Check dates and numbers. Flag formats that are hard-coded.",
     "groups": [
      0,
      0,
      1,
      1,
      2,
      2
     ],
     "state": [
      "ok",
      "ok",
      "ok",
      "ok",
      "ok",
      "ok"
     ]
    },
    {
     "layout": "funnel",
     "note": "Check layout. Flag fixed widths that break in longer languages or right-to-left."
    },
    {
     "layout": "gate",
     "note": "Report. Each string or format with its location and the fix.",
     "pass": [
      true,
      true,
      true,
      true,
      true,
      false
     ]
    }
   ],
   "outcome": null,
   "idea": "",
   "why": "",
   "protocol": [
    {
     "title": "List the strings",
     "text": "Find text written directly in code."
    },
    {
     "title": "Check plurals",
     "text": "Flag sentences built by joining words."
    },
    {
     "title": "Check dates and numbers",
     "text": "Flag formats that are hard-coded."
    },
    {
     "title": "Check layout",
     "text": "Flag fixed widths that break in longer languages or right-to-left."
    },
    {
     "title": "Report",
     "text": "Each string or format with its location and the fix."
    }
   ],
   "path": ".github/skills/rlm-internationalisation-review",
   "files": [],
   "helperScripts": 0,
   "notChecked": true,
   "group": "web",
   "grade": {
    "grade": "B",
    "score": "3.45",
    "scores": [
     3,
     4,
     3,
     4,
     4
    ],
    "design": true,
    "rank": 196
   }
  },
  {
   "id": "rlm-java-review",
   "goal": "Review Java code for null handling, resource cleanup, concurrency, serialisation and input handling.",
   "cat": "Installed",
   "on": false,
   "use": "Review Java code for null handling, resource cleanup, concurrency, serialisation and input handling. Use when asked to review or harden a Java project or module.",
   "prompt": "Use the rlm-java-review skill.",
   "input": "",
   "output": "",
   "pros": [],
   "cons": [],
   "items": [
    "input-1",
    "input-2",
    "input-3",
    "input-4",
    "input-5",
    "input-6"
   ],
   "steps": [
    {
     "layout": "row",
     "note": "Read the project setup. Open the build file, the Java version and the lint and static analysis configuration."
    },
    {
     "layout": "chunks",
     "note": "Check null handling. Flag values from maps, optionals used with get(), and methods that can return null without saying so.",
     "groups": [
      0,
      0,
      1,
      1,
      2,
      2
     ]
    },
    {
     "layout": "parallel",
     "note": "Check resources. Streams, connections and readers must close, normally through try-with-resources.",
     "groups": [
      0,
      0,
      1,
      1,
      2,
      2
     ],
     "state": [
      "ok",
      "ok",
      "ok",
      "ok",
      "ok",
      "ok"
     ]
    },
    {
     "layout": "funnel",
     "note": "Check concurrency. Flag shared mutable state without synchronisation, and thread pools created per request."
    },
    {
     "layout": "gate",
     "note": "Check input and serialisation. Flag untrusted data passed to deserialisation, to shell commands, or into SQL built as strings.",
     "pass": [
      true,
      true,
      true,
      true,
      true,
      false
     ]
    },
    {
     "layout": "doc",
     "note": "Report. List each finding with its file and line, severity and the fix.",
     "docLabel": "report"
    }
   ],
   "outcome": null,
   "idea": "",
   "why": "",
   "protocol": [
    {
     "title": "Read the project setup",
     "text": "Open the build file, the Java version and the lint and static analysis configuration."
    },
    {
     "title": "Check null handling",
     "text": "Flag values from maps, optionals used with get(), and methods that can return null without saying so."
    },
    {
     "title": "Check resources",
     "text": "Streams, connections and readers must close, normally through try-with-resources."
    },
    {
     "title": "Check concurrency",
     "text": "Flag shared mutable state without synchronisation, and thread pools created per request."
    },
    {
     "title": "Check input and serialisation",
     "text": "Flag untrusted data passed to deserialisation, to shell commands, or into SQL built as strings."
    },
    {
     "title": "Report",
     "text": "List each finding with its file and line, severity and the fix. Mark what you did not run."
    }
   ],
   "path": ".github/skills/rlm-java-review",
   "files": [],
   "helperScripts": 0,
   "notChecked": true,
   "group": "languages",
   "grade": {
    "grade": "B+",
    "score": "3.85",
    "scores": [
     4,
     4,
     4,
     3,
     4
    ],
    "design": true,
    "rank": 82
   }
  },
  {
   "id": "rlm-jwt-review",
   "goal": "JWT review: algorithm choice, signature checks, expiry and claims that are trusted too much.",
   "cat": "Installed",
   "on": false,
   "use": "JWT review: algorithm choice, signature checks, expiry and claims that are trusted too much. Use when code creates or validates JSON web tokens.",
   "prompt": "Use the rlm-jwt-review skill.",
   "input": "",
   "output": "",
   "pros": [],
   "cons": [],
   "items": [
    "input-1",
    "input-2",
    "input-3",
    "input-4",
    "input-5",
    "input-6"
   ],
   "steps": [
    {
     "layout": "row",
     "note": "Check the algorithm. Flag 'none', symmetric keys shared with clients, or an algorithm chosen from the token header."
    },
    {
     "layout": "chunks",
     "note": "Check signatures. Every token must be verified before its claims are used.",
     "groups": [
      0,
      0,
      1,
      1,
      2,
      2
     ]
    },
    {
     "layout": "parallel",
     "note": "Check expiry and audience. Tokens need short lifetimes and an audience check.",
     "groups": [
      0,
      0,
      1,
      1,
      2,
      2
     ],
     "state": [
      "ok",
      "ok",
      "ok",
      "ok",
      "ok",
      "ok"
     ]
    },
    {
     "layout": "funnel",
     "note": "Check claims. Flag authorisation decided from claims the client can set."
    },
    {
     "layout": "gate",
     "note": "Report. Each finding with file and line, severity and the fix.",
     "pass": [
      true,
      true,
      true,
      true,
      true,
      false
     ]
    }
   ],
   "outcome": null,
   "idea": "",
   "why": "",
   "protocol": [
    {
     "title": "Check the algorithm",
     "text": "Flag 'none', symmetric keys shared with clients, or an algorithm chosen from the token header."
    },
    {
     "title": "Check signatures",
     "text": "Every token must be verified before its claims are used."
    },
    {
     "title": "Check expiry and audience",
     "text": "Tokens need short lifetimes and an audience check."
    },
    {
     "title": "Check claims",
     "text": "Flag authorisation decided from claims the client can set."
    },
    {
     "title": "Report",
     "text": "Each finding with file and line, severity and the fix."
    }
   ],
   "path": ".github/skills/rlm-jwt-review",
   "files": [],
   "helperScripts": 0,
   "notChecked": true,
   "group": "security",
   "grade": {
    "grade": "A-",
    "score": "4.10",
    "scores": [
     5,
     4,
     4,
     3,
     3
    ],
    "design": true,
    "rank": 22
   }
  },
  {
   "id": "rlm-kenna-check",
   "goal": "Prioritise vulnerabilities by risk using Kenna Security exports: threat intelligence, exposure and asset valu…",
   "cat": "Installed",
   "on": false,
   "use": "Prioritise vulnerabilities by risk using Kenna Security exports: threat intelligence, exposure and asset value. Use when a Kenna export needs risk-based priorities.",
   "prompt": "Use the rlm-kenna-check skill.",
   "input": "",
   "output": "",
   "pros": [],
   "cons": [],
   "items": [
    "input-1",
    "input-2",
    "input-3",
    "input-4",
    "input-5",
    "input-6"
   ],
   "steps": [
    {
     "layout": "row",
     "note": "Read the export. Use the vulnerability export the user provides from Kenna Security."
    },
    {
     "layout": "chunks",
     "note": "Check the risk inputs. Note which inputs are present: threat intelligence, exploit availability, asset criticality and exposure.",
     "groups": [
      0,
      0,
      1,
      1,
      2,
      2
     ]
    },
    {
     "layout": "parallel",
     "note": "Rank by risk. Put first the findings with known exploits on exposed, critical assets.",
     "groups": [
      0,
      0,
      1,
      1,
      2,
      2
     ],
     "state": [
      "ok",
      "ok",
      "ok",
      "ok",
      "ok",
      "ok"
     ]
    },
    {
     "layout": "funnel",
     "note": "Check the scope. Confirm the assets and scans in the export are the ones the team owns."
    },
    {
     "layout": "gate",
     "note": "Compare with the code. Where a finding points at code, check the code path before advising a fix.",
     "pass": [
      true,
      true,
      true,
      true,
      true,
      false
     ]
    },
    {
     "layout": "doc",
     "note": "Report. A ranked list: risk, finding, asset, exploit status, exposure, and the recommended action.",
     "docLabel": "report"
    }
   ],
   "outcome": null,
   "idea": "",
   "why": "",
   "protocol": [
    {
     "title": "Read the export",
     "text": "Use the vulnerability export the user provides from Kenna Security. Do not connect to the platform without the user's own access."
    },
    {
     "title": "Check the risk inputs",
     "text": "Note which inputs are present: threat intelligence, exploit availability, asset criticality and exposure. Flag missing inputs, because they weaken the ranking."
    },
    {
     "title": "Rank by risk",
     "text": "Put first the findings with known exploits on exposed, critical assets. Keep severity as one input, not the only one."
    },
    {
     "title": "Check the scope",
     "text": "Confirm the assets and scans in the export are the ones the team owns. Flag stale scans."
    },
    {
     "title": "Compare with the code",
     "text": "Where a finding points at code, check the code path before advising a fix."
    },
    {
     "title": "Report",
     "text": "A ranked list: risk, finding, asset, exploit status, exposure, and the recommended action. State which inputs were missing, and that the ranking is advice to a person to confirm. Mark what you could not verify."
    }
   ],
   "path": ".github/skills/rlm-kenna-check",
   "files": [],
   "helperScripts": 0,
   "notChecked": true,
   "group": "vulnerability",
   "grade": {
    "grade": "B",
    "score": "3.60",
    "scores": [
     4,
     4,
     4,
     2,
     3
    ],
    "design": true,
    "rank": 187
   }
  },
  {
   "id": "rlm-kotlin-review",
   "goal": "Kotlin review: nullability, coroutines, resource handling and serialisation.",
   "cat": "Installed",
   "on": false,
   "use": "Kotlin review: nullability, coroutines, resource handling and serialisation. Use when asked to review a Kotlin project or module.",
   "prompt": "Use the rlm-kotlin-review skill.",
   "input": "",
   "output": "",
   "pros": [],
   "cons": [],
   "items": [
    "input-1",
    "input-2",
    "input-3",
    "input-4",
    "input-5",
    "input-6"
   ],
   "steps": [
    {
     "layout": "row",
     "note": "Read the project setup. The build file, the Kotlin version and the lint configuration."
    },
    {
     "layout": "chunks",
     "note": "Check nullability. Flag !! on values that can be null in practice.",
     "groups": [
      0,
      0,
      1,
      1,
      2,
      2
     ]
    },
    {
     "layout": "parallel",
     "note": "Check coroutines. Flag blocking calls inside coroutines and unscoped launches.",
     "groups": [
      0,
      0,
      1,
      1,
      2,
      2
     ],
     "state": [
      "ok",
      "ok",
      "ok",
      "ok",
      "ok",
      "ok"
     ]
    },
    {
     "layout": "funnel",
     "note": "Check resources. Streams and connections must close."
    },
    {
     "layout": "gate",
     "note": "Report. Each finding with file and line, severity and the fix.",
     "pass": [
      true,
      true,
      true,
      true,
      true,
      false
     ]
    }
   ],
   "outcome": null,
   "idea": "",
   "why": "",
   "protocol": [
    {
     "title": "Read the project setup",
     "text": "The build file, the Kotlin version and the lint configuration."
    },
    {
     "title": "Check nullability",
     "text": "Flag !! on values that can be null in practice."
    },
    {
     "title": "Check coroutines",
     "text": "Flag blocking calls inside coroutines and unscoped launches."
    },
    {
     "title": "Check resources",
     "text": "Streams and connections must close."
    },
    {
     "title": "Report",
     "text": "Each finding with file and line, severity and the fix."
    }
   ],
   "path": ".github/skills/rlm-kotlin-review",
   "files": [],
   "helperScripts": 0,
   "notChecked": true,
   "group": "languages",
   "grade": {
    "grade": "B+",
    "score": "3.85",
    "scores": [
     4,
     4,
     4,
     3,
     4
    ],
    "design": true,
    "rank": 83
   }
  },
  {
   "id": "rlm-kubernetes-review",
   "goal": "Review Kubernetes manifests and Helm charts for resource limits, security context, probes, rollouts and secre…",
   "cat": "Installed",
   "on": false,
   "use": "Review Kubernetes manifests and Helm charts for resource limits, security context, probes, rollouts and secrets handling. Use when workloads are added or changed.",
   "prompt": "Use the rlm-kubernetes-review skill.",
   "input": "",
   "output": "",
   "pros": [],
   "cons": [],
   "items": [
    "input-1",
    "input-2",
    "input-3",
    "input-4",
    "input-5",
    "input-6"
   ],
   "steps": [
    {
     "layout": "row",
     "note": "Read the manifests. Open the Deployments, Services, Ingress, RBAC and Helm values, and list each workload."
    },
    {
     "layout": "chunks",
     "note": "Check resources. Each container needs CPU and memory requests and limits.",
     "groups": [
      0,
      0,
      1,
      1,
      2,
      2
     ]
    },
    {
     "layout": "parallel",
     "note": "Check security context. Flag containers that run as root, allow privilege escalation, or mount the host filesystem.",
     "groups": [
      0,
      0,
      1,
      1,
      2,
      2
     ],
     "state": [
      "ok",
      "ok",
      "ok",
      "ok",
      "ok",
      "ok"
     ]
    },
    {
     "layout": "funnel",
     "note": "Check probes and rollouts. Each workload needs readiness and liveness probes, and a rollout strategy that does not stop all replicas."
    },
    {
     "layout": "gate",
     "note": "Check secrets and RBAC. Flag secrets in plain manifests, and roles with wildcard permissions.",
     "pass": [
      true,
      true,
      true,
      true,
      true,
      false
     ]
    },
    {
     "layout": "doc",
     "note": "Report. List each finding as file and resource, with severity and the fix.",
     "docLabel": "report"
    }
   ],
   "outcome": null,
   "idea": "",
   "why": "",
   "protocol": [
    {
     "title": "Read the manifests",
     "text": "Open the Deployments, Services, Ingress, RBAC and Helm values, and list each workload."
    },
    {
     "title": "Check resources",
     "text": "Each container needs CPU and memory requests and limits. Flag containers with none."
    },
    {
     "title": "Check security context",
     "text": "Flag containers that run as root, allow privilege escalation, or mount the host filesystem."
    },
    {
     "title": "Check probes and rollouts",
     "text": "Each workload needs readiness and liveness probes, and a rollout strategy that does not stop all replicas."
    },
    {
     "title": "Check secrets and RBAC",
     "text": "Flag secrets in plain manifests, and roles with wildcard permissions."
    },
    {
     "title": "Report",
     "text": "List each finding as file and resource, with severity and the fix."
    }
   ],
   "path": ".github/skills/rlm-kubernetes-review",
   "files": [],
   "helperScripts": 0,
   "notChecked": true,
   "group": "ops",
   "grade": {
    "grade": "A-",
    "score": "4.10",
    "scores": [
     5,
     4,
     4,
     3,
     3
    ],
    "design": true,
    "rank": 23
   }
  },
  {
   "id": "rlm-licence-compliance-report",
   "goal": "Licence compliance report: dependency licences against policy, with the attribution text the product needs.",
   "cat": "Installed",
   "on": false,
   "use": "Licence compliance report: dependency licences against policy, with the attribution text the product needs. Use when a product ships and its licence obligations must be shown.",
   "prompt": "Use the rlm-licence-compliance-report skill.",
   "input": "",
   "output": "",
   "pros": [],
   "cons": [],
   "items": [
    "input-1",
    "input-2",
    "input-3",
    "input-4",
    "input-5",
    "input-6"
   ],
   "steps": [
    {
     "layout": "row",
     "note": "List the components and their licences."
    },
    {
     "layout": "chunks",
     "note": "Check against policy. Mark permitted, review-required and forbidden licences.",
     "groups": [
      0,
      0,
      1,
      1,
      2,
      2
     ]
    },
    {
     "layout": "parallel",
     "note": "Check attribution. List the notices the distributed product must include.",
     "groups": [
      0,
      0,
      1,
      1,
      2,
      2
     ],
     "state": [
      "ok",
      "ok",
      "ok",
      "ok",
      "ok",
      "ok"
     ]
    },
    {
     "layout": "funnel",
     "note": "Check unknowns. Flag components with no licence recorded."
    },
    {
     "layout": "gate",
     "note": "Report. The compliance status, the notices and the decisions needed.",
     "pass": [
      true,
      true,
      true,
      true,
      true,
      false
     ]
    }
   ],
   "outcome": null,
   "idea": "",
   "why": "",
   "protocol": [
    {
     "title": "List the components and their licences",
     "text": ""
    },
    {
     "title": "Check against policy",
     "text": "Mark permitted, review-required and forbidden licences."
    },
    {
     "title": "Check attribution",
     "text": "List the notices the distributed product must include."
    },
    {
     "title": "Check unknowns",
     "text": "Flag components with no licence recorded."
    },
    {
     "title": "Report",
     "text": "The compliance status, the notices and the decisions needed."
    }
   ],
   "path": ".github/skills/rlm-licence-compliance-report",
   "files": [],
   "helperScripts": 0,
   "notChecked": true,
   "group": "compliance",
   "grade": {
    "grade": "B",
    "score": "3.65",
    "scores": [
     4,
     4,
     3,
     3,
     4
    ],
    "design": true,
    "rank": 173
   }
  },
  {
   "id": "rlm-license-attribution",
   "goal": "Check the licences of direct and transitive dependencies against a stated licence policy, flag copyleft, unkn…",
   "cat": "Installed",
   "on": false,
   "use": "Check the licences of direct and transitive dependencies against a stated licence policy, flag copyleft, unknown or incompatible licences, and draft the attribution (NOTICE) content that distribution requires. Use when distributing software, enforcing a licence policy, or when attribution files are missing.",
   "prompt": "Use the rlm-license-attribution skill.",
   "input": "",
   "output": "",
   "pros": [],
   "cons": [],
   "items": [
    "input-1",
    "input-2",
    "input-3",
    "input-4",
    "input-5",
    "input-6"
   ],
   "steps": [
    {
     "layout": "row",
     "note": "Inspect. Run `python3 <skill>/scripts/rlm_corpus.py scan <corpus>`."
    },
    {
     "layout": "chunks",
     "note": "Partition. Run `WORK=$(mktemp -d)`, then `python3 <skill>/scripts/rlm_corpus.py chunk <corpus> \"$WORK/chunks\"`.",
     "groups": [
      0,
      0,
      1,
      1,
      2,
      2
     ]
    },
    {
     "layout": "parallel",
     "note": "Map. For each chunk, run a fresh sub-task (a subagent if you can start one) that sees only that chunk file and the \"Chunk task\" below.",
     "groups": [
      0,
      0,
      1,
      1,
      2,
      2
     ],
     "state": [
      "ok",
      "ok",
      "ok",
      "ok",
      "ok",
      "ok"
     ]
    },
    {
     "layout": "funnel",
     "note": "Reduce. Run `python3 <skill>/scripts/rlm_corpus.py merge \"$WORK/out\" --out \"$WORK/merged.json\"`."
    },
    {
     "layout": "gate",
     "note": "Verify. Cite the manifest or lock file for every dependency flagged.",
     "pass": [
      true,
      true,
      true,
      true,
      true,
      false
     ]
    },
    {
     "layout": "doc",
     "note": "Report. Write the report in the format below.",
     "docLabel": "report"
    }
   ],
   "outcome": null,
   "idea": "",
   "why": "",
   "protocol": [
    {
     "title": "Inspect",
     "text": "Run `python3 <skill>/scripts/rlm_corpus.py scan <corpus>`. Note the file count, line count and top-level folders. If the corpus is very large, agree the scope with the user, then narrow it with `--include '<folder>'` (repeatable) on every command. Files over 20 MB are skipped; `--max-bytes N` changes the limit. Report what `scan` lists as skipped."
    },
    {
     "title": "Partition",
     "text": "Run `WORK=$(mktemp -d)`, then `python3 <skill>/scripts/rlm_corpus.py chunk <corpus> \"$WORK/chunks\"`. Chunks are limited to 800 lines and 100,000 characters each, and are cut between definitions where possible. Each `chunk_NNN.md` holds the data notice and labelled file sections. `manifest.json` lists the chunks."
    },
    {
     "title": "Map",
     "text": "For each chunk, run a fresh sub-task (a subagent if you can start one) that sees only that chunk file and the \"Chunk task\" below. It writes `\"$WORK/out/<chunk>.out.md\"`. If you cannot start sub-tasks, run `python3 <skill>/scripts/rlm_corpus.py pending \"$WORK/chunks\" \"$WORK/out\"`. It lists the chunks that still have no output. Process the first one: read it, write its output, then run `pending` again. Repeat until nothing is pending. Never hold all chunks in context at once."
    },
    {
     "title": "Reduce",
     "text": "Run `python3 <skill>/scripts/rlm_corpus.py merge \"$WORK/out\" --out \"$WORK/merged.json\"`. If it lists `failed_outputs`, re-run those chunks. A missing or invalid output is not \"no findings\". Checks that span files (a duplicate across manifests, a route missing from a contract, a pattern repeated across chunks) are done on the merged list in this step. If the merged list is still too large to read, repeat steps 2 to 4 on the findings."
    },
    {
     "title": "Verify",
     "text": "Cite the manifest or lock file for every dependency flagged. Copy licence text from the package, or mark it as missing; never invent licence text. Run a licence tool (license-checker, pip-licenses, go-licenses, cargo license) once in the reduce step if one is installed, and record its name and version. Check combinations (a strong copyleft dependency in a proprietary distribution) in the reduce step."
    },
    {
     "title": "Report",
     "text": "Write the report in the format below."
    },
    {
     "title": "Clean up",
     "text": "Delete `$WORK` after the report is delivered."
    }
   ],
   "path": ".github/skills/rlm-license-attribution",
   "files": [
    "scripts/rlm_corpus.py"
   ],
   "helperScripts": 1,
   "notChecked": true,
   "group": "compliance",
   "grade": {
    "grade": "B",
    "score": "3.50",
    "scores": [
     4,
     3,
     4,
     2,
     4
    ],
    "design": true,
    "rank": 193
   }
  },
  {
   "id": "rlm-linq-performance-review",
   "goal": "LINQ performance review: queries evaluated in memory, repeated enumeration and avoidable allocations.",
   "cat": "Installed",
   "on": false,
   "use": "LINQ performance review: queries evaluated in memory, repeated enumeration and avoidable allocations. Use when a LINQ query runs over large or frequent data.",
   "prompt": "Use the rlm-linq-performance-review skill.",
   "input": "",
   "output": "",
   "pros": [],
   "cons": [],
   "items": [
    "input-1",
    "input-2",
    "input-3",
    "input-4",
    "input-5",
    "input-6"
   ],
   "steps": [
    {
     "layout": "row",
     "note": "List the queries on hot paths or large data."
    },
    {
     "layout": "chunks",
     "note": "Check where evaluation happens. Flag work done in memory that the database could do.",
     "groups": [
      0,
      0,
      1,
      1,
      2,
      2
     ]
    },
    {
     "layout": "parallel",
     "note": "Check repeated enumeration. Flag a query enumerated several times.",
     "groups": [
      0,
      0,
      1,
      1,
      2,
      2
     ],
     "state": [
      "ok",
      "ok",
      "ok",
      "ok",
      "ok",
      "ok"
     ]
    },
    {
     "layout": "funnel",
     "note": "Check allocations. Flag repeated ToList calls on the same data."
    },
    {
     "layout": "gate",
     "note": "Report. Each query with its cost, file and line, and the fix.",
     "pass": [
      true,
      true,
      true,
      true,
      true,
      false
     ]
    }
   ],
   "outcome": null,
   "idea": "",
   "why": "",
   "protocol": [
    {
     "title": "List the queries on hot paths or large data",
     "text": ""
    },
    {
     "title": "Check where evaluation happens",
     "text": "Flag work done in memory that the database could do."
    },
    {
     "title": "Check repeated enumeration",
     "text": "Flag a query enumerated several times."
    },
    {
     "title": "Check allocations",
     "text": "Flag repeated ToList calls on the same data."
    },
    {
     "title": "Report",
     "text": "Each query with its cost, file and line, and the fix."
    }
   ],
   "path": ".github/skills/rlm-linq-performance-review",
   "files": [],
   "helperScripts": 0,
   "notChecked": true,
   "group": "dotnet",
   "grade": {
    "grade": "B",
    "score": "3.45",
    "scores": [
     3,
     4,
     3,
     4,
     4
    ],
    "design": true,
    "rank": 197
   }
  },
  {
   "id": "rlm-llm-app-review",
   "goal": "Review a large codebase that calls language models, using Recursive Language Model (RLM) decomposition: promp…",
   "cat": "Installed",
   "on": false,
   "use": "Review a large codebase that calls language models, using Recursive Language Model (RLM) decomposition: prompt injection paths, unsafe handling of model output, over-privileged tools, and secrets or personal data sent to models, mapped to the OWASP Top 10 for LLM Applications. Use when an application calls an LLM API or runs an agent with tools, before release or after adding a model feature.",
   "prompt": "Use the rlm-llm-app-review skill.",
   "input": "",
   "output": "",
   "pros": [],
   "cons": [],
   "items": [
    "input-1",
    "input-2",
    "input-3",
    "input-4",
    "input-5",
    "input-6"
   ],
   "steps": [
    {
     "layout": "row",
     "note": "Find the model surface. Search for model clients and agent frameworks, for example `grep -rlnE \"openai|anthropic|@anthropic-ai|langchain|llama_index|ollama|bedrock|vertexai|generativeai|mistralai|cohere|tool_choice|function_call\" <repo>`."
    },
    {
     "layout": "chunks",
     "note": "Inspect. Run `python3 <skill>/scripts/rlm_corpus.py scan <repo>`.",
     "groups": [
      0,
      0,
      1,
      1,
      2,
      2
     ]
    },
    {
     "layout": "parallel",
     "note": "Partition. Run `WORK=$(mktemp -d)`, then `python3 <skill>/scripts/rlm_corpus.py chunk <repo> \"$WORK/chunks\"`.",
     "groups": [
      0,
      0,
      1,
      1,
      2,
      2
     ],
     "state": [
      "ok",
      "ok",
      "ok",
      "ok",
      "ok",
      "ok"
     ]
    },
    {
     "layout": "funnel",
     "note": "Map. For each chunk, run a fresh sub-task (a subagent if you can start one) that sees only that chunk file and the \"Chunk task\" below."
    },
    {
     "layout": "gate",
     "note": "Reduce. Run `python3 <skill>/scripts/rlm_corpus.py merge \"$WORK/out\" --out \"$WORK/merged.json\"`.",
     "pass": [
      true,
      true,
      true,
      true,
      true,
      false
     ]
    },
    {
     "layout": "doc",
     "note": "Verify. For every high-severity item, trace the path end to end: where the untrusted text enters, how it reaches the prompt or the tool, and what the model output can then do.",
     "docLabel": "report"
    }
   ],
   "outcome": null,
   "idea": "",
   "why": "",
   "protocol": [
    {
     "title": "Find the model surface",
     "text": "Search for model clients and agent frameworks, for example `grep -rlnE \"openai|anthropic|@anthropic-ai|langchain|llama_index|ollama|bedrock|vertexai|generativeai|mistralai|cohere|tool_choice|function_call\" <repo>`. List the files that build prompts, define tools, call the model, or retrieve documents for a prompt. Use their folders as the `--include` scope below, and say which folders you left out."
    },
    {
     "title": "Inspect",
     "text": "Run `python3 <skill>/scripts/rlm_corpus.py scan <repo>`. Note the file count, line count and top-level folders. If the corpus is very large, agree the scope with the user, then narrow it with `--include 'src/*'` (repeatable) on every command. Files over 20 MB are skipped; `--max-bytes N` changes the limit. Report what `scan` lists as skipped."
    },
    {
     "title": "Partition",
     "text": "Run `WORK=$(mktemp -d)`, then `python3 <skill>/scripts/rlm_corpus.py chunk <repo> \"$WORK/chunks\"`. Chunks are limited to 800 lines and 100,000 characters each, and are cut between definitions where possible. Each `chunk_NNN.md` holds the data notice and labelled file sections. `manifest.json` lists the chunks."
    },
    {
     "title": "Map",
     "text": "For each chunk, run a fresh sub-task (a subagent if you can start one) that sees only that chunk file and the \"Chunk task\" below. It writes `\"$WORK/out/<chunk>.out.md\"`. If you cannot start sub-tasks, run `python3 <skill>/scripts/rlm_corpus.py pending \"$WORK/chunks\" \"$WORK/out\"`. It lists the chunks that still have no output. Process the first one: read it, write its output, then run `pending` again. Repeat until nothing is pending. Never hold all chunks in context at once."
    },
    {
     "title": "Reduce",
     "text": "Run `python3 <skill>/scripts/rlm_corpus.py merge \"$WORK/out\" --out \"$WORK/merged.json\"`. If it lists `failed_outputs`, re-run those chunks. A missing or invalid output is not \"no findings\". If the merged list is still too large to read, repeat steps 2 to 4 on the findings."
    },
    {
     "title": "Verify",
     "text": "For every high-severity item, trace the path end to end: where the untrusted text enters, how it reaches the prompt or the tool, and what the model output can then do. Confirm each step in the source. An injection path with no sink that matters (no tool, no write, no rendering) is low severity; say why."
    },
    {
     "title": "Report",
     "text": "Write the report in the format below."
    },
    {
     "title": "Clean up",
     "text": "Delete `$WORK` after the report is delivered."
    }
   ],
   "path": ".github/skills/rlm-llm-app-review",
   "files": [
    "scripts/rlm_corpus.py"
   ],
   "helperScripts": 1,
   "notChecked": true,
   "group": "security",
   "grade": {
    "grade": "A",
    "score": "4.50",
    "scores": [
     5,
     5,
     5,
     3,
     3
    ],
    "design": true,
    "rank": 4
   }
  },
  {
   "id": "rlm-log-triage",
   "goal": "Triage large log files and log directories using Recursive Language Model (RLM) decomposition: cluster errors…",
   "cat": "Installed",
   "on": false,
   "use": "Triage large log files and log directories using Recursive Language Model (RLM) decomposition: cluster errors by signature, count and date them, and rank likely root causes with evidence. Use when asked to investigate an incident, find the cause of errors, or summarize logs too large to read in one pass.",
   "prompt": "Use the rlm-log-triage skill.",
   "input": "",
   "output": "",
   "pros": [],
   "cons": [],
   "items": [
    "input-1",
    "input-2",
    "input-3",
    "input-4",
    "input-5",
    "input-6"
   ],
   "steps": [
    {
     "layout": "row",
     "note": "Scope the incident. Ask for the time window, the service, and the symptom if they are not given."
    },
    {
     "layout": "chunks",
     "note": "Inspect. Run `python3 <skill>/scripts/rlm_corpus.py scan <logs> --include '*.log' --include '*.txt' --max-bytes 52428800`.",
     "groups": [
      0,
      0,
      1,
      1,
      2,
      2
     ]
    },
    {
     "layout": "parallel",
     "note": "Partition. Run `WORK=$(mktemp -d)`, then `python3 <skill>/scripts/rlm_corpus.py chunk <logs> \"$WORK/chunks\" --include '*.log' --include '*.txt' --max-bytes 52428800`.",
     "groups": [
      0,
      0,
      1,
      1,
      2,
      2
     ],
     "state": [
      "ok",
      "ok",
      "ok",
      "ok",
      "ok",
      "ok"
     ]
    },
    {
     "layout": "funnel",
     "note": "Map. For each chunk, run a fresh sub-task (a subagent if you can start one) that sees the chunk and the \"Chunk task\" below."
    },
    {
     "layout": "gate",
     "note": "Reduce. Run `python3 <skill>/scripts/rlm_corpus.py merge \"$WORK/out\" --out \"$WORK/merged.json\"`.",
     "pass": [
      true,
      true,
      true,
      true,
      true,
      false
     ]
    },
    {
     "layout": "doc",
     "note": "Verify. Open each cited file and line, confirm each finding against the source, and drop any finding you cannot confirm.",
     "docLabel": "report"
    }
   ],
   "outcome": null,
   "idea": "",
   "why": "",
   "protocol": [
    {
     "title": "Scope the incident",
     "text": "Ask for the time window, the service, and the symptom if they are not given. Narrow the files to that window before chunking."
    },
    {
     "title": "Inspect",
     "text": "Run `python3 <skill>/scripts/rlm_corpus.py scan <logs> --include '*.log' --include '*.txt' --max-bytes 52428800`. Note the file sizes and skipped files. Compressed logs (`.gz`) are not read: decompress the window you need into a work folder first."
    },
    {
     "title": "Partition",
     "text": "Run `WORK=$(mktemp -d)`, then `python3 <skill>/scripts/rlm_corpus.py chunk <logs> \"$WORK/chunks\" --include '*.log' --include '*.txt' --max-bytes 52428800`."
    },
    {
     "title": "Map",
     "text": "For each chunk, run a fresh sub-task (a subagent if you can start one) that sees the chunk and the \"Chunk task\" below. If you cannot start sub-tasks, run `python3 <skill>/scripts/rlm_corpus.py pending \"$WORK/chunks\" \"$WORK/out\"` and process the first listed chunk, then run `pending` again until nothing is pending."
    },
    {
     "title": "Reduce",
     "text": "Run `python3 <skill>/scripts/rlm_corpus.py merge \"$WORK/out\" --out \"$WORK/merged.json\"`. Re-run any `failed_outputs`. Group the merged items by their `finding` signature, then count them."
    },
    {
     "title": "Verify",
     "text": "Open each cited file and line, confirm each finding against the source, and drop any finding you cannot confirm."
    },
    {
     "title": "Trace",
     "text": "For the top clusters, open the log lines around the first occurrence and confirm the sequence that led to it. Look for the first error in a request or correlation ID, not only the most frequent one."
    },
    {
     "title": "Report",
     "text": "Write the report in the format below."
    },
    {
     "title": "Clean up",
     "text": "Delete `$WORK` after the report is delivered."
    }
   ],
   "path": ".github/skills/rlm-log-triage",
   "files": [
    "scripts/rlm_corpus.py"
   ],
   "helperScripts": 1,
   "notChecked": true,
   "group": "engineering",
   "grade": {
    "grade": "B+",
    "score": "3.70",
    "scores": [
     4,
     4,
     4,
     2,
     4
    ],
    "design": true,
    "rank": 155
   }
  },
  {
   "id": "rlm-logging-in-code-review",
   "goal": "Logging in code review: useful log lines, the right level and no personal data.",
   "cat": "Installed",
   "on": false,
   "use": "Logging in code review: useful log lines, the right level and no personal data. Use when logging statements are added or changed.",
   "prompt": "Use the rlm-logging-in-code-review skill.",
   "input": "",
   "output": "",
   "pros": [],
   "cons": [],
   "items": [
    "input-1",
    "input-2",
    "input-3",
    "input-4",
    "input-5",
    "input-6"
   ],
   "steps": [
    {
     "layout": "row",
     "note": "List log calls. Collect each log line in the change."
    },
    {
     "layout": "chunks",
     "note": "Check level. Flag errors logged as info and noise logged as error.",
     "groups": [
      0,
      0,
      1,
      1,
      2,
      2
     ]
    },
    {
     "layout": "parallel",
     "note": "Check content. Flag personal data, tokens or full request bodies.",
     "groups": [
      0,
      0,
      1,
      1,
      2,
      2
     ],
     "state": [
      "ok",
      "ok",
      "ok",
      "ok",
      "ok",
      "ok"
     ]
    },
    {
     "layout": "funnel",
     "note": "Check context. Each error line needs the identifiers to find the cause."
    },
    {
     "layout": "gate",
     "note": "Report. Each line with file, the problem and the fix.",
     "pass": [
      true,
      true,
      true,
      true,
      true,
      false
     ]
    }
   ],
   "outcome": null,
   "idea": "",
   "why": "",
   "protocol": [
    {
     "title": "List log calls",
     "text": "Collect each log line in the change."
    },
    {
     "title": "Check level",
     "text": "Flag errors logged as info and noise logged as error."
    },
    {
     "title": "Check content",
     "text": "Flag personal data, tokens or full request bodies."
    },
    {
     "title": "Check context",
     "text": "Each error line needs the identifiers to find the cause."
    },
    {
     "title": "Report",
     "text": "Each line with file, the problem and the fix."
    }
   ],
   "path": ".github/skills/rlm-logging-in-code-review",
   "files": [],
   "helperScripts": 0,
   "notChecked": true,
   "group": "review",
   "grade": {
    "grade": "B+",
    "score": "3.80",
    "scores": [
     4,
     4,
     3,
     4,
     4
    ],
    "design": true,
    "rank": 120
   }
  },
  {
   "id": "rlm-lua-review",
   "goal": "Lua review: sandboxing, global variables, input handling and error propagation.",
   "cat": "Installed",
   "on": false,
   "use": "Lua review: sandboxing, global variables, input handling and error propagation. Use when asked to review a Lua script or embedded configuration.",
   "prompt": "Use the rlm-lua-review skill.",
   "input": "",
   "output": "",
   "pros": [],
   "cons": [],
   "items": [
    "input-1",
    "input-2",
    "input-3",
    "input-4",
    "input-5",
    "input-6"
   ],
   "steps": [
    {
     "layout": "row",
     "note": "Read the script and where it runs. Embedded, game, or server."
    },
    {
     "layout": "chunks",
     "note": "Check the sandbox. Flag scripts with access to the file system or os library.",
     "groups": [
      0,
      0,
      1,
      1,
      2,
      2
     ]
    },
    {
     "layout": "parallel",
     "note": "Check globals. Flag accidental global variables.",
     "groups": [
      0,
      0,
      1,
      1,
      2,
      2
     ],
     "state": [
      "ok",
      "ok",
      "ok",
      "ok",
      "ok",
      "ok"
     ]
    },
    {
     "layout": "funnel",
     "note": "Check input. Flag input passed to load or loadstring."
    },
    {
     "layout": "gate",
     "note": "Report. Each finding with line, severity and the fix.",
     "pass": [
      true,
      true,
      true,
      true,
      true,
      false
     ]
    }
   ],
   "outcome": null,
   "idea": "",
   "why": "",
   "protocol": [
    {
     "title": "Read the script and where it runs",
     "text": "Embedded, game, or server."
    },
    {
     "title": "Check the sandbox",
     "text": "Flag scripts with access to the file system or os library."
    },
    {
     "title": "Check globals",
     "text": "Flag accidental global variables."
    },
    {
     "title": "Check input",
     "text": "Flag input passed to load or loadstring."
    },
    {
     "title": "Report",
     "text": "Each finding with line, severity and the fix."
    }
   ],
   "path": ".github/skills/rlm-lua-review",
   "files": [],
   "helperScripts": 0,
   "notChecked": true,
   "group": "languages",
   "grade": {
    "grade": "B+",
    "score": "3.75",
    "scores": [
     4,
     4,
     4,
     3,
     3
    ],
    "design": true,
    "rank": 137
   }
  },
  {
   "id": "rlm-memory-design-review",
   "goal": "Agent memory design review: what the agent stores, where, and how it is read back.",
   "cat": "Installed",
   "on": false,
   "use": "Agent memory design review: what the agent stores, where, and how it is read back. Use when an agent keeps notes or facts between sessions.",
   "prompt": "Use the rlm-memory-design-review skill.",
   "input": "",
   "output": "",
   "pros": [],
   "cons": [],
   "items": [
    "input-1",
    "input-2",
    "input-3",
    "input-4",
    "input-5",
    "input-6"
   ],
   "steps": [
    {
     "layout": "row",
     "note": "List the memory. Each kind of thing stored, its source and its purpose."
    },
    {
     "layout": "chunks",
     "note": "Check the store. Confirm where it lives and what format it uses.",
     "groups": [
      0,
      0,
      1,
      1,
      2,
      2
     ]
    },
    {
     "layout": "parallel",
     "note": "Check the reads. Note how memory enters a new session and how much of it.",
     "groups": [
      0,
      0,
      1,
      1,
      2,
      2
     ],
     "state": [
      "ok",
      "ok",
      "ok",
      "ok",
      "ok",
      "ok"
     ]
    },
    {
     "layout": "funnel",
     "note": "Check the growth. Flag memory that only grows and never shrinks."
    },
    {
     "layout": "gate",
     "note": "Report. The memory kinds, their store, the read path and the growth problem.",
     "pass": [
      true,
      true,
      true,
      true,
      true,
      false
     ]
    }
   ],
   "outcome": null,
   "idea": "",
   "why": "",
   "protocol": [
    {
     "title": "List the memory",
     "text": "Each kind of thing stored, its source and its purpose."
    },
    {
     "title": "Check the store",
     "text": "Confirm where it lives and what format it uses."
    },
    {
     "title": "Check the reads",
     "text": "Note how memory enters a new session and how much of it."
    },
    {
     "title": "Check the growth",
     "text": "Flag memory that only grows and never shrinks."
    },
    {
     "title": "Report",
     "text": "The memory kinds, their store, the read path and the growth problem."
    }
   ],
   "path": ".github/skills/rlm-memory-design-review",
   "files": [],
   "helperScripts": 0,
   "notChecked": true,
   "group": "engineering",
   "grade": {
    "grade": "B+",
    "score": "3.75",
    "scores": [
     4,
     4,
     4,
     3,
     3
    ],
    "design": true,
    "rank": 138
   }
  },
  {
   "id": "rlm-memory-privacy-review",
   "goal": "Agent memory privacy review: personal and secret data kept out of what the agent remembers.",
   "cat": "Installed",
   "on": false,
   "use": "Agent memory privacy review: personal and secret data kept out of what the agent remembers. Use when an agent stores anything a user or a tool provides.",
   "prompt": "Use the rlm-memory-privacy-review skill.",
   "input": "",
   "output": "",
   "pros": [],
   "cons": [],
   "items": [
    "input-1",
    "input-2",
    "input-3",
    "input-4",
    "input-5",
    "input-6"
   ],
   "steps": [
    {
     "layout": "row",
     "note": "List what can enter memory. User messages, tool results and files."
    },
    {
     "layout": "chunks",
     "note": "Flag personal data. Names, contact details, identifiers and health or financial details.",
     "groups": [
      0,
      0,
      1,
      1,
      2,
      2
     ]
    },
    {
     "layout": "parallel",
     "note": "Flag secrets. Keys, tokens and passwords that a tool may return.",
     "groups": [
      0,
      0,
      1,
      1,
      2,
      2
     ],
     "state": [
      "ok",
      "ok",
      "ok",
      "ok",
      "ok",
      "ok"
     ]
    },
    {
     "layout": "funnel",
     "note": "Check the filter. Confirm something removes these before they are stored."
    },
    {
     "layout": "gate",
     "note": "Report. Each entry path, what it can store, and the filter that is missing.",
     "pass": [
      true,
      true,
      true,
      true,
      true,
      false
     ]
    }
   ],
   "outcome": null,
   "idea": "",
   "why": "",
   "protocol": [
    {
     "title": "List what can enter memory",
     "text": "User messages, tool results and files."
    },
    {
     "title": "Flag personal data",
     "text": "Names, contact details, identifiers and health or financial details."
    },
    {
     "title": "Flag secrets",
     "text": "Keys, tokens and passwords that a tool may return."
    },
    {
     "title": "Check the filter",
     "text": "Confirm something removes these before they are stored."
    },
    {
     "title": "Report",
     "text": "Each entry path, what it can store, and the filter that is missing."
    }
   ],
   "path": ".github/skills/rlm-memory-privacy-review",
   "files": [],
   "helperScripts": 0,
   "notChecked": true,
   "group": "security",
   "grade": {
    "grade": "A-",
    "score": "4.20",
    "scores": [
     5,
     4,
     4,
     3,
     4
    ],
    "design": true,
    "rank": 16
   }
  },
  {
   "id": "rlm-memory-recall-review",
   "goal": "Memory recall accuracy review: whether the right memory comes back, and stale facts do not.",
   "cat": "Installed",
   "on": false,
   "use": "Memory recall accuracy review: whether the right memory comes back, and stale facts do not. Use when an agent retrieves stored memory for a new task.",
   "prompt": "Use the rlm-memory-recall-review skill.",
   "input": "",
   "output": "",
   "pros": [],
   "cons": [],
   "items": [
    "input-1",
    "input-2",
    "input-3",
    "input-4",
    "input-5",
    "input-6"
   ],
   "steps": [
    {
     "layout": "row",
     "note": "Pick test questions. Write questions whose answers are in memory."
    },
    {
     "layout": "chunks",
     "note": "Run recall. Check whether each answer comes back.",
     "groups": [
      0,
      0,
      1,
      1,
      2,
      2
     ]
    },
    {
     "layout": "parallel",
     "note": "Check stale facts. Flag memories that were true once and are no longer.",
     "groups": [
      0,
      0,
      1,
      1,
      2,
      2
     ],
     "state": [
      "ok",
      "ok",
      "ok",
      "ok",
      "ok",
      "ok"
     ]
    },
    {
     "layout": "funnel",
     "note": "Check conflicts. Flag two memories that disagree and which one wins."
    },
    {
     "layout": "gate",
     "note": "Report. Recall rate, the misses, the stale items and the fix.",
     "pass": [
      true,
      true,
      true,
      true,
      true,
      false
     ]
    }
   ],
   "outcome": null,
   "idea": "",
   "why": "",
   "protocol": [
    {
     "title": "Pick test questions",
     "text": "Write questions whose answers are in memory."
    },
    {
     "title": "Run recall",
     "text": "Check whether each answer comes back."
    },
    {
     "title": "Check stale facts",
     "text": "Flag memories that were true once and are no longer."
    },
    {
     "title": "Check conflicts",
     "text": "Flag two memories that disagree and which one wins."
    },
    {
     "title": "Report",
     "text": "Recall rate, the misses, the stale items and the fix."
    }
   ],
   "path": ".github/skills/rlm-memory-recall-review",
   "files": [],
   "helperScripts": 0,
   "notChecked": true,
   "group": "engineering",
   "grade": {
    "grade": "B+",
    "score": "3.75",
    "scores": [
     4,
     4,
     4,
     3,
     3
    ],
    "design": true,
    "rank": 139
   }
  },
  {
   "id": "rlm-memory-retention-review",
   "goal": "Agent memory retention review: how long memory is kept, and how it is deleted on request.",
   "cat": "Installed",
   "on": false,
   "use": "Agent memory retention review: how long memory is kept, and how it is deleted on request. Use when memory is kept across sessions or users.",
   "prompt": "Use the rlm-memory-retention-review skill.",
   "input": "",
   "output": "",
   "pros": [],
   "cons": [],
   "items": [
    "input-1",
    "input-2",
    "input-3",
    "input-4",
    "input-5",
    "input-6"
   ],
   "steps": [
    {
     "layout": "row",
     "note": "List the retention rules. Each kind of memory and how long it is kept."
    },
    {
     "layout": "chunks",
     "note": "Check the deletion. Confirm a user's memories can be found and removed.",
     "groups": [
      0,
      0,
      1,
      1,
      2,
      2
     ]
    },
    {
     "layout": "parallel",
     "note": "Check the copies. Flag memory copied into logs, backups or analytics.",
     "groups": [
      0,
      0,
      1,
      1,
      2,
      2
     ],
     "state": [
      "ok",
      "ok",
      "ok",
      "ok",
      "ok",
      "ok"
     ]
    },
    {
     "layout": "funnel",
     "note": "Check the expiry. Flag memory with no expiry at all."
    },
    {
     "layout": "gate",
     "note": "Report. Each kind with its retention, the deletion path and the gap.",
     "pass": [
      true,
      true,
      true,
      true,
      true,
      false
     ]
    }
   ],
   "outcome": null,
   "idea": "",
   "why": "",
   "protocol": [
    {
     "title": "List the retention rules",
     "text": "Each kind of memory and how long it is kept."
    },
    {
     "title": "Check the deletion",
     "text": "Confirm a user's memories can be found and removed."
    },
    {
     "title": "Check the copies",
     "text": "Flag memory copied into logs, backups or analytics."
    },
    {
     "title": "Check the expiry",
     "text": "Flag memory with no expiry at all."
    },
    {
     "title": "Report",
     "text": "Each kind with its retention, the deletion path and the gap."
    }
   ],
   "path": ".github/skills/rlm-memory-retention-review",
   "files": [],
   "helperScripts": 0,
   "notChecked": true,
   "group": "engineering",
   "grade": {
    "grade": "B+",
    "score": "3.70",
    "scores": [
     4,
     4,
     4,
     2,
     4
    ],
    "design": true,
    "rank": 156
   }
  },
  {
   "id": "rlm-memory-write-policy-review",
   "goal": "Agent memory write policy review: who or what may write to memory, and whether injected text can change it.",
   "cat": "Installed",
   "on": false,
   "use": "Agent memory write policy review: who or what may write to memory, and whether injected text can change it. Use when untrusted content can reach the agent's memory.",
   "prompt": "Use the rlm-memory-write-policy-review skill.",
   "input": "",
   "output": "",
   "pros": [],
   "cons": [],
   "items": [
    "input-1",
    "input-2",
    "input-3",
    "input-4",
    "input-5",
    "input-6"
   ],
   "steps": [
    {
     "layout": "row",
     "note": "List the writers. Which users, tools and documents can add to memory."
    },
    {
     "layout": "chunks",
     "note": "Check the trust. Flag writes from untrusted sources, such as web pages or emails.",
     "groups": [
      0,
      0,
      1,
      1,
      2,
      2
     ]
    },
    {
     "layout": "parallel",
     "note": "Check for injected instructions. Flag stored text that tells the agent how to behave.",
     "groups": [
      0,
      0,
      1,
      1,
      2,
      2
     ],
     "state": [
      "ok",
      "ok",
      "ok",
      "ok",
      "ok",
      "ok"
     ]
    },
    {
     "layout": "funnel",
     "note": "Check the review. Confirm a person or a rule approves sensitive writes."
    },
    {
     "layout": "gate",
     "note": "Report. Each writer, its trust level, the risk and the control.",
     "pass": [
      true,
      true,
      true,
      true,
      true,
      false
     ]
    }
   ],
   "outcome": null,
   "idea": "",
   "why": "",
   "protocol": [
    {
     "title": "List the writers",
     "text": "Which users, tools and documents can add to memory."
    },
    {
     "title": "Check the trust",
     "text": "Flag writes from untrusted sources, such as web pages or emails."
    },
    {
     "title": "Check for injected instructions",
     "text": "Flag stored text that tells the agent how to behave."
    },
    {
     "title": "Check the review",
     "text": "Confirm a person or a rule approves sensitive writes."
    },
    {
     "title": "Report",
     "text": "Each writer, its trust level, the risk and the control."
    }
   ],
   "path": ".github/skills/rlm-memory-write-policy-review",
   "files": [],
   "helperScripts": 0,
   "notChecked": true,
   "group": "security",
   "grade": {
    "grade": "A-",
    "score": "4.20",
    "scores": [
     5,
     4,
     4,
     3,
     4
    ],
    "design": true,
    "rank": 17
   }
  },
  {
   "id": "rlm-mfa-review",
   "goal": "Multi-factor authentication review: where second factors are required, enrolled and recovered.",
   "cat": "Installed",
   "on": false,
   "use": "Multi-factor authentication review: where second factors are required, enrolled and recovered. Use when code enables, enforces or recovers second factors.",
   "prompt": "Use the rlm-mfa-review skill.",
   "input": "",
   "output": "",
   "pros": [],
   "cons": [],
   "items": [
    "input-1",
    "input-2",
    "input-3",
    "input-4",
    "input-5",
    "input-6"
   ],
   "steps": [
    {
     "layout": "row",
     "note": "List the enforcement points. Find where a second factor is required."
    },
    {
     "layout": "chunks",
     "note": "Check bypass. Flag paths that sign in without the second factor.",
     "groups": [
      0,
      0,
      1,
      1,
      2,
      2
     ]
    },
    {
     "layout": "parallel",
     "note": "Check enrolment. Flag factors that can be added without re-verification.",
     "groups": [
      0,
      0,
      1,
      1,
      2,
      2
     ],
     "state": [
      "ok",
      "ok",
      "ok",
      "ok",
      "ok",
      "ok"
     ]
    },
    {
     "layout": "funnel",
     "note": "Check recovery. Flag recovery codes that are reusable or stored in plain text."
    },
    {
     "layout": "gate",
     "note": "Report. Each path with file and line, severity and the fix.",
     "pass": [
      true,
      true,
      true,
      true,
      true,
      false
     ]
    }
   ],
   "outcome": null,
   "idea": "",
   "why": "",
   "protocol": [
    {
     "title": "List the enforcement points",
     "text": "Find where a second factor is required."
    },
    {
     "title": "Check bypass",
     "text": "Flag paths that sign in without the second factor."
    },
    {
     "title": "Check enrolment",
     "text": "Flag factors that can be added without re-verification."
    },
    {
     "title": "Check recovery",
     "text": "Flag recovery codes that are reusable or stored in plain text."
    },
    {
     "title": "Report",
     "text": "Each path with file and line, severity and the fix."
    }
   ],
   "path": ".github/skills/rlm-mfa-review",
   "files": [],
   "helperScripts": 0,
   "notChecked": true,
   "group": "security",
   "grade": {
    "grade": "B+",
    "score": "3.85",
    "scores": [
     4,
     4,
     4,
     3,
     4
    ],
    "design": true,
    "rank": 84
   }
  },
  {
   "id": "rlm-middleware-review",
   "goal": "ASP.NET middleware review: ordering, short-circuiting, exception handling and headers.",
   "cat": "Installed",
   "on": false,
   "use": "ASP.NET middleware review: ordering, short-circuiting, exception handling and headers. Use when the request pipeline is changed.",
   "prompt": "Use the rlm-middleware-review skill.",
   "input": "",
   "output": "",
   "pros": [],
   "cons": [],
   "items": [
    "input-1",
    "input-2",
    "input-3",
    "input-4",
    "input-5",
    "input-6"
   ],
   "steps": [
    {
     "layout": "row",
     "note": "List the middleware in the order it runs."
    },
    {
     "layout": "chunks",
     "note": "Check ordering. Authentication must run before authorisation, and both before the endpoints.",
     "groups": [
      0,
      0,
      1,
      1,
      2,
      2
     ]
    },
    {
     "layout": "parallel",
     "note": "Check exception handling. It must run early enough to catch the rest.",
     "groups": [
      0,
      0,
      1,
      1,
      2,
      2
     ],
     "state": [
      "ok",
      "ok",
      "ok",
      "ok",
      "ok",
      "ok"
     ]
    },
    {
     "layout": "funnel",
     "note": "Check headers. Security headers are set for every response."
    },
    {
     "layout": "gate",
     "note": "Report. The pipeline order, the gap found and the fix.",
     "pass": [
      true,
      true,
      true,
      true,
      true,
      false
     ]
    }
   ],
   "outcome": null,
   "idea": "",
   "why": "",
   "protocol": [
    {
     "title": "List the middleware in the order it runs",
     "text": ""
    },
    {
     "title": "Check ordering",
     "text": "Authentication must run before authorisation, and both before the endpoints."
    },
    {
     "title": "Check exception handling",
     "text": "It must run early enough to catch the rest."
    },
    {
     "title": "Check headers",
     "text": "Security headers are set for every response."
    },
    {
     "title": "Report",
     "text": "The pipeline order, the gap found and the fix."
    }
   ],
   "path": ".github/skills/rlm-middleware-review",
   "files": [],
   "helperScripts": 0,
   "notChecked": true,
   "group": "dotnet",
   "grade": {
    "grade": "B+",
    "score": "3.85",
    "scores": [
     4,
     4,
     4,
     3,
     4
    ],
    "design": true,
    "rank": 85
   }
  },
  {
   "id": "rlm-migration-code-review",
   "goal": "Code migration review: a library or framework move that keeps behaviour and can be rolled back.",
   "cat": "Installed",
   "on": false,
   "use": "Code migration review: a library or framework move that keeps behaviour and can be rolled back. Use when a dependency, framework or API is being replaced.",
   "prompt": "Use the rlm-migration-code-review skill.",
   "input": "",
   "output": "",
   "pros": [],
   "cons": [],
   "items": [
    "input-1",
    "input-2",
    "input-3",
    "input-4",
    "input-5",
    "input-6"
   ],
   "steps": [
    {
     "layout": "row",
     "note": "Map the old to new. List each old API call and its replacement."
    },
    {
     "layout": "chunks",
     "note": "Check behaviour. Flag calls whose defaults or errors changed.",
     "groups": [
      0,
      0,
      1,
      1,
      2,
      2
     ]
    },
    {
     "layout": "parallel",
     "note": "Check coverage. Flag migrated code with no test.",
     "groups": [
      0,
      0,
      1,
      1,
      2,
      2
     ],
     "state": [
      "ok",
      "ok",
      "ok",
      "ok",
      "ok",
      "ok"
     ]
    },
    {
     "layout": "funnel",
     "note": "Check rollback. The change must work with the old path still available."
    },
    {
     "layout": "gate",
     "note": "Report. Each call with its status, the behaviour change and the risk.",
     "pass": [
      true,
      true,
      true,
      true,
      true,
      false
     ]
    }
   ],
   "outcome": null,
   "idea": "",
   "why": "",
   "protocol": [
    {
     "title": "Map the old to new",
     "text": "List each old API call and its replacement."
    },
    {
     "title": "Check behaviour",
     "text": "Flag calls whose defaults or errors changed."
    },
    {
     "title": "Check coverage",
     "text": "Flag migrated code with no test."
    },
    {
     "title": "Check rollback",
     "text": "The change must work with the old path still available."
    },
    {
     "title": "Report",
     "text": "Each call with its status, the behaviour change and the risk."
    }
   ],
   "path": ".github/skills/rlm-migration-code-review",
   "files": [],
   "helperScripts": 0,
   "notChecked": true,
   "group": "review",
   "grade": {
    "grade": "B+",
    "score": "3.75",
    "scores": [
     4,
     4,
     4,
     3,
     3
    ],
    "design": true,
    "rank": 140
   }
  },
  {
   "id": "rlm-migration-data-check",
   "goal": "Migration data check: row counts, totals and samples compared before and after a data migration.",
   "cat": "Installed",
   "on": false,
   "use": "Migration data check: row counts, totals and samples compared before and after a data migration. Use when a data migration moves or converts records.",
   "prompt": "Use the rlm-migration-data-check skill.",
   "input": "",
   "output": "",
   "pros": [],
   "cons": [],
   "items": [
    "input-1",
    "input-2",
    "input-3",
    "input-4",
    "input-5",
    "input-6"
   ],
   "steps": [
    {
     "layout": "row",
     "note": "Record the baseline. Row counts, key totals and a sample before the migration."
    },
    {
     "layout": "chunks",
     "note": "Compare after. Check the same counts and totals in the new place.",
     "groups": [
      0,
      0,
      1,
      1,
      2,
      2
     ]
    },
    {
     "layout": "parallel",
     "note": "Check the conversions. Flag values that change type or meaning, such as dates and codes.",
     "groups": [
      0,
      0,
      1,
      1,
      2,
      2
     ],
     "state": [
      "ok",
      "ok",
      "ok",
      "ok",
      "ok",
      "ok"
     ]
    },
    {
     "layout": "funnel",
     "note": "Check the rejects. Every rejected row needs a recorded reason."
    },
    {
     "layout": "gate",
     "note": "Report. The comparison, the differences and the decision to proceed or roll back.",
     "pass": [
      true,
      true,
      true,
      true,
      true,
      false
     ]
    }
   ],
   "outcome": null,
   "idea": "",
   "why": "",
   "protocol": [
    {
     "title": "Record the baseline",
     "text": "Row counts, key totals and a sample before the migration."
    },
    {
     "title": "Compare after",
     "text": "Check the same counts and totals in the new place."
    },
    {
     "title": "Check the conversions",
     "text": "Flag values that change type or meaning, such as dates and codes."
    },
    {
     "title": "Check the rejects",
     "text": "Every rejected row needs a recorded reason."
    },
    {
     "title": "Report",
     "text": "The comparison, the differences and the decision to proceed or roll back."
    }
   ],
   "path": ".github/skills/rlm-migration-data-check",
   "files": [],
   "helperScripts": 0,
   "notChecked": true,
   "group": "engineering",
   "grade": {
    "grade": "B+",
    "score": "3.85",
    "scores": [
     4,
     4,
     4,
     3,
     4
    ],
    "design": true,
    "rank": 86
   }
  },
  {
   "id": "rlm-migration-planner",
   "goal": "Plan a framework, language runtime or major-version migration across a large codebase using Recursive Languag…",
   "cat": "Installed",
   "on": false,
   "use": "Plan a framework, language runtime or major-version migration across a large codebase using Recursive Language Model (RLM) decomposition, with an inventory of affected code, risks, phased steps and rollback. Use when asked to migrate, upgrade a major version, or replace a library, on code too large to read in one pass.",
   "prompt": "Use the rlm-migration-planner skill.",
   "input": "",
   "output": "",
   "pros": [],
   "cons": [],
   "items": [
    "input-1",
    "input-2",
    "input-3",
    "input-4",
    "input-5",
    "input-6"
   ],
   "steps": [
    {
     "layout": "row",
     "note": "Define the migration. Ask the user for the source and target: for example, \"React 17 to 18\", \"Python 3.9 to 3.12\", \"Express to Fastify\"."
    },
    {
     "layout": "chunks",
     "note": "Inspect. Run `python3 <skill>/scripts/rlm_corpus.py scan <repo>`.",
     "groups": [
      0,
      0,
      1,
      1,
      2,
      2
     ]
    },
    {
     "layout": "parallel",
     "note": "Graph. Run `python3 <skill>/scripts/rlm_corpus.py graph <repo>`.",
     "groups": [
      0,
      0,
      1,
      1,
      2,
      2
     ],
     "state": [
      "ok",
      "ok",
      "ok",
      "ok",
      "ok",
      "ok"
     ]
    },
    {
     "layout": "funnel",
     "note": "Partition. Run `WORK=$(mktemp -d)`, then `python3 <skill>/scripts/rlm_corpus.py chunk <repo> \"$WORK/chunks\"`."
    },
    {
     "layout": "gate",
     "note": "Map. For each chunk, run a fresh sub-task (a subagent if you can start one) that sees the chunk and the \"Chunk task\" below.",
     "pass": [
      true,
      true,
      true,
      true,
      true,
      false
     ]
    },
    {
     "layout": "doc",
     "note": "Reduce. Run `python3 <skill>/scripts/rlm_corpus.py merge \"$WORK/out\" --out \"$WORK/merged.json\"`.",
     "docLabel": "report"
    }
   ],
   "outcome": null,
   "idea": "",
   "why": "",
   "protocol": [
    {
     "title": "Define the migration",
     "text": "Ask the user for the source and target: for example, \"React 17 to 18\", \"Python 3.9 to 3.12\", \"Express to Fastify\". Ask what must not change, such as public API or database schema. Do not start without these."
    },
    {
     "title": "Inspect",
     "text": "Run `python3 <skill>/scripts/rlm_corpus.py scan <repo>`. Agree the scope if the code base is very large, then narrow it with `--include`."
    },
    {
     "title": "Graph",
     "text": "Run `python3 <skill>/scripts/rlm_corpus.py graph <repo>`. Use it to order the work: leaf modules first, then the modules that depend on them."
    },
    {
     "title": "Partition",
     "text": "Run `WORK=$(mktemp -d)`, then `python3 <skill>/scripts/rlm_corpus.py chunk <repo> \"$WORK/chunks\"`."
    },
    {
     "title": "Map",
     "text": "For each chunk, run a fresh sub-task (a subagent if you can start one) that sees the chunk and the \"Chunk task\" below. If you cannot start sub-tasks, run `python3 <skill>/scripts/rlm_corpus.py pending \"$WORK/chunks\" \"$WORK/out\"` and process the first listed chunk, then run `pending` again until nothing is pending."
    },
    {
     "title": "Reduce",
     "text": "Run `python3 <skill>/scripts/rlm_corpus.py merge \"$WORK/out\" --out \"$WORK/merged.json\"`. Re-run any `failed_outputs`."
    },
    {
     "title": "Verify",
     "text": "Open each cited file and line, confirm each finding against the source, and drop any finding you cannot confirm."
    },
    {
     "title": "Plan",
     "text": "Write the plan in the format below."
    },
    {
     "title": "Clean up",
     "text": "Delete `$WORK` after the plan is delivered."
    }
   ],
   "path": ".github/skills/rlm-migration-planner",
   "files": [
    "scripts/rlm_corpus.py"
   ],
   "helperScripts": 1,
   "notChecked": true,
   "group": "engineering",
   "grade": {
    "grade": "B+",
    "score": "3.70",
    "scores": [
     4,
     4,
     4,
     2,
     4
    ],
    "design": true,
    "rank": 157
   }
  },
  {
   "id": "rlm-minimal-api-review",
   "goal": "Minimal API review: route authorisation, validation, endpoint filters and error responses.",
   "cat": "Installed",
   "on": false,
   "use": "Minimal API review: route authorisation, validation, endpoint filters and error responses. Use when a minimal API endpoint is added or changed.",
   "prompt": "Use the rlm-minimal-api-review skill.",
   "input": "",
   "output": "",
   "pros": [],
   "cons": [],
   "items": [
    "input-1",
    "input-2",
    "input-3",
    "input-4",
    "input-5",
    "input-6"
   ],
   "steps": [
    {
     "layout": "row",
     "note": "List the endpoints. Each route, method and its authorisation."
    },
    {
     "layout": "chunks",
     "note": "Check authorisation. Flag endpoints with no policy or an allow-anonymous attribute.",
     "groups": [
      0,
      0,
      1,
      1,
      2,
      2
     ]
    },
    {
     "layout": "parallel",
     "note": "Check validation. Each input should be validated or bound to a type that is.",
     "groups": [
      0,
      0,
      1,
      1,
      2,
      2
     ],
     "state": [
      "ok",
      "ok",
      "ok",
      "ok",
      "ok",
      "ok"
     ]
    },
    {
     "layout": "funnel",
     "note": "Check filters and errors. Flag endpoints that return exception details."
    },
    {
     "layout": "gate",
     "note": "Report. Each endpoint with file and line, severity and the fix.",
     "pass": [
      true,
      true,
      true,
      true,
      true,
      false
     ]
    }
   ],
   "outcome": null,
   "idea": "",
   "why": "",
   "protocol": [
    {
     "title": "List the endpoints",
     "text": "Each route, method and its authorisation."
    },
    {
     "title": "Check authorisation",
     "text": "Flag endpoints with no policy or an allow-anonymous attribute."
    },
    {
     "title": "Check validation",
     "text": "Each input should be validated or bound to a type that is."
    },
    {
     "title": "Check filters and errors",
     "text": "Flag endpoints that return exception details."
    },
    {
     "title": "Report",
     "text": "Each endpoint with file and line, severity and the fix."
    }
   ],
   "path": ".github/skills/rlm-minimal-api-review",
   "files": [],
   "helperScripts": 0,
   "notChecked": true,
   "group": "dotnet",
   "grade": {
    "grade": "B+",
    "score": "3.85",
    "scores": [
     4,
     4,
     4,
     3,
     4
    ],
    "design": true,
    "rank": 87
   }
  },
  {
   "id": "rlm-naming-review",
   "goal": "Naming review: names that say what a value or function does, and match the domain.",
   "cat": "Installed",
   "on": false,
   "use": "Naming review: names that say what a value or function does, and match the domain. Use when code names are added or renamed.",
   "prompt": "Use the rlm-naming-review skill.",
   "input": "",
   "output": "",
   "pros": [],
   "cons": [],
   "items": [
    "input-1",
    "input-2",
    "input-3",
    "input-4",
    "input-5",
    "input-6"
   ],
   "steps": [
    {
     "layout": "row",
     "note": "List names. Collect the new variables, functions and types in the change."
    },
    {
     "layout": "chunks",
     "note": "Flag vague names. Data, tmp, info, handler, manager, flag.",
     "groups": [
      0,
      0,
      1,
      1,
      2,
      2
     ]
    },
    {
     "layout": "parallel",
     "note": "Flag misleading names. A name that says one thing and does another.",
     "groups": [
      0,
      0,
      1,
      1,
      2,
      2
     ],
     "state": [
      "ok",
      "ok",
      "ok",
      "ok",
      "ok",
      "ok"
     ]
    },
    {
     "layout": "funnel",
     "note": "Check consistency. The same concept should keep one name across the change."
    },
    {
     "layout": "gate",
     "note": "Report. Each name with file and line, the problem and a better name.",
     "pass": [
      true,
      true,
      true,
      true,
      true,
      false
     ]
    }
   ],
   "outcome": null,
   "idea": "",
   "why": "",
   "protocol": [
    {
     "title": "List names",
     "text": "Collect the new variables, functions and types in the change."
    },
    {
     "title": "Flag vague names",
     "text": "Data, tmp, info, handler, manager, flag."
    },
    {
     "title": "Flag misleading names",
     "text": "A name that says one thing and does another."
    },
    {
     "title": "Check consistency",
     "text": "The same concept should keep one name across the change."
    },
    {
     "title": "Report",
     "text": "Each name with file and line, the problem and a better name."
    }
   ],
   "path": ".github/skills/rlm-naming-review",
   "files": [],
   "helperScripts": 0,
   "notChecked": true,
   "group": "review",
   "grade": {
    "grade": "B+",
    "score": "3.80",
    "scores": [
     4,
     4,
     3,
     4,
     4
    ],
    "design": true,
    "rank": 121
   }
  },
  {
   "id": "rlm-nucleus-triage",
   "goal": "Triage findings exported from NucleusSec (Nucleus Security): prioritise, deduplicate, assign owners and track…",
   "cat": "Installed",
   "on": false,
   "use": "Triage findings exported from NucleusSec (Nucleus Security): prioritise, deduplicate, assign owners and track fixes. Use when a Nucleus export or a set of scanner findings needs a decision.",
   "prompt": "Use the rlm-nucleus-triage skill.",
   "input": "",
   "output": "",
   "pros": [],
   "cons": [],
   "items": [
    "input-1",
    "input-2",
    "input-3",
    "input-4",
    "input-5",
    "input-6"
   ],
   "steps": [
    {
     "layout": "row",
     "note": "Read the export. Use the findings file the user provides from Nucleus Security, or from the scanners connected to it."
    },
    {
     "layout": "chunks",
     "note": "Deduplicate. Group findings that describe the same flaw in the same component, even when different scanners report them.",
     "groups": [
      0,
      0,
      1,
      1,
      2,
      2
     ]
    },
    {
     "layout": "parallel",
     "note": "Check exposure and severity. Use the severity, asset criticality and whether the asset is internet-facing to set priority.",
     "groups": [
      0,
      0,
      1,
      1,
      2,
      2
     ],
     "state": [
      "ok",
      "ok",
      "ok",
      "ok",
      "ok",
      "ok"
     ]
    },
    {
     "layout": "funnel",
     "note": "Check ownership. Each finding needs an owner, normally the team that owns the component."
    },
    {
     "layout": "gate",
     "note": "Check the fix path. Note whether a fix, a configuration change or a risk acceptance is the right response, and who must approve an acceptance.",
     "pass": [
      true,
      true,
      true,
      true,
      true,
      false
     ]
    },
    {
     "layout": "doc",
     "note": "Check ageing. Flag high-priority findings past their target date.",
     "docLabel": "report"
    }
   ],
   "outcome": null,
   "idea": "",
   "why": "",
   "protocol": [
    {
     "title": "Read the export",
     "text": "Use the findings file the user provides from Nucleus Security, or from the scanners connected to it. Do not connect to the platform without the user's own access."
    },
    {
     "title": "Deduplicate",
     "text": "Group findings that describe the same flaw in the same component, even when different scanners report them."
    },
    {
     "title": "Check exposure and severity",
     "text": "Use the severity, asset criticality and whether the asset is internet-facing to set priority."
    },
    {
     "title": "Check ownership",
     "text": "Each finding needs an owner, normally the team that owns the component. Flag findings with no owner."
    },
    {
     "title": "Check the fix path",
     "text": "Note whether a fix, a configuration change or a risk acceptance is the right response, and who must approve an acceptance."
    },
    {
     "title": "Check ageing",
     "text": "Flag high-priority findings past their target date."
    },
    {
     "title": "Report",
     "text": "A ranked table: priority, finding, asset, owner, fix path, due date. Say that the ranking is advice for the owner to review. Mark what you could not verify."
    }
   ],
   "path": ".github/skills/rlm-nucleus-triage",
   "files": [],
   "helperScripts": 0,
   "notChecked": true,
   "group": "vulnerability",
   "grade": {
    "grade": "B",
    "score": "3.65",
    "scores": [
     4,
     3,
     4,
     3,
     4
    ],
    "design": true,
    "rank": 174
   }
  },
  {
   "id": "rlm-oauth-review",
   "goal": "OAuth review: redirect URI checks, PKCE, state parameters and token storage.",
   "cat": "Installed",
   "on": false,
   "use": "OAuth review: redirect URI checks, PKCE, state parameters and token storage. Use when code implements an OAuth or OpenID Connect sign-in.",
   "prompt": "Use the rlm-oauth-review skill.",
   "input": "",
   "output": "",
   "pros": [],
   "cons": [],
   "items": [
    "input-1",
    "input-2",
    "input-3",
    "input-4",
    "input-5",
    "input-6"
   ],
   "steps": [
    {
     "layout": "row",
     "note": "Check the flow. Use the authorisation code flow with PKCE for public clients."
    },
    {
     "layout": "chunks",
     "note": "Check redirects. Redirect URIs must match exactly, with no open redirects.",
     "groups": [
      0,
      0,
      1,
      1,
      2,
      2
     ]
    },
    {
     "layout": "parallel",
     "note": "Check state. The state parameter must be random and checked on return.",
     "groups": [
      0,
      0,
      1,
      1,
      2,
      2
     ],
     "state": [
      "ok",
      "ok",
      "ok",
      "ok",
      "ok",
      "ok"
     ]
    },
    {
     "layout": "funnel",
     "note": "Check tokens. Flag tokens stored in local storage or logged."
    },
    {
     "layout": "gate",
     "note": "Report. Each finding with file and line, severity and the fix.",
     "pass": [
      true,
      true,
      true,
      true,
      true,
      false
     ]
    }
   ],
   "outcome": null,
   "idea": "",
   "why": "",
   "protocol": [
    {
     "title": "Check the flow",
     "text": "Use the authorisation code flow with PKCE for public clients."
    },
    {
     "title": "Check redirects",
     "text": "Redirect URIs must match exactly, with no open redirects."
    },
    {
     "title": "Check state",
     "text": "The state parameter must be random and checked on return."
    },
    {
     "title": "Check tokens",
     "text": "Flag tokens stored in local storage or logged."
    },
    {
     "title": "Report",
     "text": "Each finding with file and line, severity and the fix."
    }
   ],
   "path": ".github/skills/rlm-oauth-review",
   "files": [],
   "helperScripts": 0,
   "notChecked": true,
   "group": "security",
   "grade": {
    "grade": "A-",
    "score": "4.10",
    "scores": [
     5,
     4,
     4,
     3,
     3
    ],
    "design": true,
    "rank": 24
   }
  },
  {
   "id": "rlm-output-encoding-review",
   "goal": "Output encoding review: data written into HTML, scripts, URLs, headers or logs is encoded for its context.",
   "cat": "Installed",
   "on": false,
   "use": "Output encoding review: data written into HTML, scripts, URLs, headers or logs is encoded for its context. Use when code writes user or stored data into a page, script or header.",
   "prompt": "Use the rlm-output-encoding-review skill.",
   "input": "",
   "output": "",
   "pros": [],
   "cons": [],
   "items": [
    "input-1",
    "input-2",
    "input-3",
    "input-4",
    "input-5",
    "input-6"
   ],
   "steps": [
    {
     "layout": "row",
     "note": "List the sinks. Find each place output is written to HTML, JavaScript, URLs, headers or logs."
    },
    {
     "layout": "chunks",
     "note": "Check context. Each sink needs the encoding for its context.",
     "groups": [
      0,
      0,
      1,
      1,
      2,
      2
     ]
    },
    {
     "layout": "parallel",
     "note": "Flag raw writes. Flag innerHTML, unencoded templates and string-built headers.",
     "groups": [
      0,
      0,
      1,
      1,
      2,
      2
     ],
     "state": [
      "ok",
      "ok",
      "ok",
      "ok",
      "ok",
      "ok"
     ]
    },
    {
     "layout": "funnel",
     "note": "Flag raw HTML from users. Flag rendering of user content without sanitising."
    },
    {
     "layout": "gate",
     "note": "Report. Each sink with its context, the gap and the fix.",
     "pass": [
      true,
      true,
      true,
      true,
      true,
      false
     ]
    }
   ],
   "outcome": null,
   "idea": "",
   "why": "",
   "protocol": [
    {
     "title": "List the sinks",
     "text": "Find each place output is written to HTML, JavaScript, URLs, headers or logs."
    },
    {
     "title": "Check context",
     "text": "Each sink needs the encoding for its context."
    },
    {
     "title": "Flag raw writes",
     "text": "Flag innerHTML, unencoded templates and string-built headers."
    },
    {
     "title": "Flag raw HTML from users",
     "text": "Flag rendering of user content without sanitising."
    },
    {
     "title": "Report",
     "text": "Each sink with its context, the gap and the fix."
    }
   ],
   "path": ".github/skills/rlm-output-encoding-review",
   "files": [],
   "helperScripts": 0,
   "notChecked": true,
   "group": "security",
   "grade": {
    "grade": "A-",
    "score": "4.20",
    "scores": [
     5,
     4,
     4,
     3,
     4
    ],
    "design": true,
    "rank": 18
   }
  },
  {
   "id": "rlm-output-length-review",
   "goal": "Output length review: limits on what the model may produce, and what happens when it reaches them.",
   "cat": "Installed",
   "on": false,
   "use": "Output length review: limits on what the model may produce, and what happens when it reaches them. Use when a feature asks a model for open-ended or long output.",
   "prompt": "Use the rlm-output-length-review skill.",
   "input": "",
   "output": "",
   "pros": [],
   "cons": [],
   "items": [
    "input-1",
    "input-2",
    "input-3",
    "input-4",
    "input-5",
    "input-6"
   ],
   "steps": [
    {
     "layout": "row",
     "note": "List the outputs. Each call, its expected length and who reads it."
    },
    {
     "layout": "chunks",
     "note": "Check the limit. Confirm a maximum output size is set.",
     "groups": [
      0,
      0,
      1,
      1,
      2,
      2
     ]
    },
    {
     "layout": "parallel",
     "note": "Check the cut-off. Flag output that is cut mid-sentence or mid-structure without a sign.",
     "groups": [
      0,
      0,
      1,
      1,
      2,
      2
     ],
     "state": [
      "ok",
      "ok",
      "ok",
      "ok",
      "ok",
      "ok"
     ]
    },
    {
     "layout": "funnel",
     "note": "Check the format. Structured output should be validated after it is produced."
    },
    {
     "layout": "gate",
     "note": "Report. Each output with its limit, its failure when cut, and the fix.",
     "pass": [
      true,
      true,
      true,
      true,
      true,
      false
     ]
    }
   ],
   "outcome": null,
   "idea": "",
   "why": "",
   "protocol": [
    {
     "title": "List the outputs",
     "text": "Each call, its expected length and who reads it."
    },
    {
     "title": "Check the limit",
     "text": "Confirm a maximum output size is set."
    },
    {
     "title": "Check the cut-off",
     "text": "Flag output that is cut mid-sentence or mid-structure without a sign."
    },
    {
     "title": "Check the format",
     "text": "Structured output should be validated after it is produced."
    },
    {
     "title": "Report",
     "text": "Each output with its limit, its failure when cut, and the fix."
    }
   ],
   "path": ".github/skills/rlm-output-length-review",
   "files": [],
   "helperScripts": 0,
   "notChecked": true,
   "group": "engineering",
   "grade": {
    "grade": "B+",
    "score": "3.85",
    "scores": [
     4,
     4,
     4,
     3,
     4
    ],
    "design": true,
    "rank": 88
   }
  },
  {
   "id": "rlm-password-storage-review",
   "goal": "Password storage review: slow salted hashes, no reversible storage and no plaintext in logs.",
   "cat": "Installed",
   "on": false,
   "use": "Password storage review: slow salted hashes, no reversible storage and no plaintext in logs. Use when code stores, checks or resets passwords.",
   "prompt": "Use the rlm-password-storage-review skill.",
   "input": "",
   "output": "",
   "pros": [],
   "cons": [],
   "items": [
    "input-1",
    "input-2",
    "input-3",
    "input-4",
    "input-5",
    "input-6"
   ],
   "steps": [
    {
     "layout": "row",
     "note": "Find the storage. List where passwords or verifiers are written."
    },
    {
     "layout": "chunks",
     "note": "Check the hash. Flag fast hashes such as MD5, SHA-1 or plain SHA-256.",
     "groups": [
      0,
      0,
      1,
      1,
      2,
      2
     ]
    },
    {
     "layout": "parallel",
     "note": "Check salts and cost. Each hash needs a unique salt and a work factor.",
     "groups": [
      0,
      0,
      1,
      1,
      2,
      2
     ],
     "state": [
      "ok",
      "ok",
      "ok",
      "ok",
      "ok",
      "ok"
     ]
    },
    {
     "layout": "funnel",
     "note": "Check leaks. Flag passwords in logs, errors or analytics."
    },
    {
     "layout": "gate",
     "note": "Report. Each finding with file and line, severity and the migration path.",
     "pass": [
      true,
      true,
      true,
      true,
      true,
      false
     ]
    }
   ],
   "outcome": null,
   "idea": "",
   "why": "",
   "protocol": [
    {
     "title": "Find the storage",
     "text": "List where passwords or verifiers are written."
    },
    {
     "title": "Check the hash",
     "text": "Flag fast hashes such as MD5, SHA-1 or plain SHA-256."
    },
    {
     "title": "Check salts and cost",
     "text": "Each hash needs a unique salt and a work factor."
    },
    {
     "title": "Check leaks",
     "text": "Flag passwords in logs, errors or analytics."
    },
    {
     "title": "Report",
     "text": "Each finding with file and line, severity and the migration path."
    }
   ],
   "path": ".github/skills/rlm-password-storage-review",
   "files": [],
   "helperScripts": 0,
   "notChecked": true,
   "group": "security",
   "grade": {
    "grade": "A-",
    "score": "4.05",
    "scores": [
     5,
     4,
     4,
     2,
     4
    ],
    "design": true,
    "rank": 30
   }
  },
  {
   "id": "rlm-patch-prioritisation",
   "goal": "Patch prioritisation: which patches go first, by exploitability, exposure and business effect.",
   "cat": "Installed",
   "on": false,
   "use": "Patch prioritisation: which patches go first, by exploitability, exposure and business effect. Use when a list of available patches needs an order.",
   "prompt": "Use the rlm-patch-prioritisation skill.",
   "input": "",
   "output": "",
   "pros": [],
   "cons": [],
   "items": [
    "input-1",
    "input-2",
    "input-3",
    "input-4",
    "input-5",
    "input-6"
   ],
   "steps": [
    {
     "layout": "row",
     "note": "List the patches. Each package or system, its version and fix."
    },
    {
     "layout": "chunks",
     "note": "Rank by exploitability. Put known-exploited issues first.",
     "groups": [
      0,
      0,
      1,
      1,
      2,
      2
     ]
    },
    {
     "layout": "parallel",
     "note": "Rank by exposure. Internet-facing and privileged systems first.",
     "groups": [
      0,
      0,
      1,
      1,
      2,
      2
     ],
     "state": [
      "ok",
      "ok",
      "ok",
      "ok",
      "ok",
      "ok"
     ]
    },
    {
     "layout": "funnel",
     "note": "Estimate effort. Note the restart or downtime each patch needs."
    },
    {
     "layout": "gate",
     "note": "Report. The ordered list with the reason for each place.",
     "pass": [
      true,
      true,
      true,
      true,
      true,
      false
     ]
    }
   ],
   "outcome": null,
   "idea": "",
   "why": "",
   "protocol": [
    {
     "title": "List the patches",
     "text": "Each package or system, its version and fix."
    },
    {
     "title": "Rank by exploitability",
     "text": "Put known-exploited issues first."
    },
    {
     "title": "Rank by exposure",
     "text": "Internet-facing and privileged systems first."
    },
    {
     "title": "Estimate effort",
     "text": "Note the restart or downtime each patch needs."
    },
    {
     "title": "Report",
     "text": "The ordered list with the reason for each place."
    }
   ],
   "path": ".github/skills/rlm-patch-prioritisation",
   "files": [],
   "helperScripts": 0,
   "notChecked": true,
   "group": "vulnerability",
   "grade": {
    "grade": "A-",
    "score": "4.20",
    "scores": [
     5,
     4,
     4,
     3,
     4
    ],
    "design": true,
    "rank": 19
   }
  },
  {
   "id": "rlm-path-traversal-review",
   "goal": "Path traversal review: file paths built from input and checked after normalisation.",
   "cat": "Installed",
   "on": false,
   "use": "Path traversal review: file paths built from input and checked after normalisation. Use when code opens, reads, writes or deletes files using a path from outside.",
   "prompt": "Use the rlm-path-traversal-review skill.",
   "input": "",
   "output": "",
   "pros": [],
   "cons": [],
   "items": [
    "input-1",
    "input-2",
    "input-3",
    "input-4",
    "input-5",
    "input-6"
   ],
   "steps": [
    {
     "layout": "row",
     "note": "Find the paths. List each file operation and where its path comes from."
    },
    {
     "layout": "chunks",
     "note": "Check joins. Flag paths built by string concatenation with user input.",
     "groups": [
      0,
      0,
      1,
      1,
      2,
      2
     ]
    },
    {
     "layout": "parallel",
     "note": "Check normalisation. The resolved path must stay inside the allowed folder.",
     "groups": [
      0,
      0,
      1,
      1,
      2,
      2
     ],
     "state": [
      "ok",
      "ok",
      "ok",
      "ok",
      "ok",
      "ok"
     ]
    },
    {
     "layout": "funnel",
     "note": "Check symbolic links. Flag operations that follow links out of the folder."
    },
    {
     "layout": "gate",
     "note": "Report. Each operation with file and line, severity and the fix.",
     "pass": [
      true,
      true,
      true,
      true,
      true,
      false
     ]
    }
   ],
   "outcome": null,
   "idea": "",
   "why": "",
   "protocol": [
    {
     "title": "Find the paths",
     "text": "List each file operation and where its path comes from."
    },
    {
     "title": "Check joins",
     "text": "Flag paths built by string concatenation with user input."
    },
    {
     "title": "Check normalisation",
     "text": "The resolved path must stay inside the allowed folder."
    },
    {
     "title": "Check symbolic links",
     "text": "Flag operations that follow links out of the folder."
    },
    {
     "title": "Report",
     "text": "Each operation with file and line, severity and the fix."
    }
   ],
   "path": ".github/skills/rlm-path-traversal-review",
   "files": [],
   "helperScripts": 0,
   "notChecked": true,
   "group": "security",
   "grade": {
    "grade": "A-",
    "score": "4.20",
    "scores": [
     5,
     4,
     4,
     3,
     4
    ],
    "design": true,
    "rank": 20
   }
  },
  {
   "id": "rlm-performance-review",
   "goal": "Find performance risks in a large codebase using Recursive Language Model (RLM) decomposition: queries in loo…",
   "cat": "Installed",
   "on": false,
   "use": "Find performance risks in a large codebase using Recursive Language Model (RLM) decomposition: queries in loops (N+1), blocking calls on async paths, unbounded reads, quadratic work and missing timeouts, ranked by how hot the path is. Use when a service is slow, before a load increase, or when asked where the code will not scale.",
   "prompt": "Use the rlm-performance-review skill.",
   "input": "",
   "output": "",
   "pros": [],
   "cons": [],
   "items": [
    "input-1",
    "input-2",
    "input-3",
    "input-4",
    "input-5",
    "input-6"
   ],
   "steps": [
    {
     "layout": "row",
     "note": "Inspect. Run `python3 <skill>/scripts/rlm_corpus.py scan <repo>`."
    },
    {
     "layout": "chunks",
     "note": "Partition. Run `WORK=$(mktemp -d)`, then `python3 <skill>/scripts/rlm_corpus.py chunk <repo> \"$WORK/chunks\"`.",
     "groups": [
      0,
      0,
      1,
      1,
      2,
      2
     ]
    },
    {
     "layout": "parallel",
     "note": "Map. For each chunk, run a fresh sub-task (a subagent if you can start one) that sees only that chunk file and the \"Chunk task\" below.",
     "groups": [
      0,
      0,
      1,
      1,
      2,
      2
     ],
     "state": [
      "ok",
      "ok",
      "ok",
      "ok",
      "ok",
      "ok"
     ]
    },
    {
     "layout": "funnel",
     "note": "Reduce. Run `python3 <skill>/scripts/rlm_corpus.py merge \"$WORK/out\" --out \"$WORK/merged.json\"`."
    },
    {
     "layout": "gate",
     "note": "Verify. For every high-severity item, find what calls the code: a request handler, a scheduled job, a loop over user data, or start-up code that runs once.",
     "pass": [
      true,
      true,
      true,
      true,
      true,
      false
     ]
    },
    {
     "layout": "doc",
     "note": "Report. Write the report in the format below.",
     "docLabel": "report"
    }
   ],
   "outcome": null,
   "idea": "",
   "why": "",
   "protocol": [
    {
     "title": "Inspect",
     "text": "Run `python3 <skill>/scripts/rlm_corpus.py scan <repo>`. Note the file count, line count and top-level folders. If the corpus is very large, agree the scope with the user, then narrow it with `--include 'src/*'` (repeatable) on every command. Files over 20 MB are skipped; `--max-bytes N` changes the limit. Report what `scan` lists as skipped."
    },
    {
     "title": "Partition",
     "text": "Run `WORK=$(mktemp -d)`, then `python3 <skill>/scripts/rlm_corpus.py chunk <repo> \"$WORK/chunks\"`. Chunks are limited to 800 lines and 100,000 characters each, and are cut between definitions where possible. Each `chunk_NNN.md` holds the data notice and labelled file sections. `manifest.json` lists the chunks."
    },
    {
     "title": "Map",
     "text": "For each chunk, run a fresh sub-task (a subagent if you can start one) that sees only that chunk file and the \"Chunk task\" below. It writes `\"$WORK/out/<chunk>.out.md\"`. If you cannot start sub-tasks, run `python3 <skill>/scripts/rlm_corpus.py pending \"$WORK/chunks\" \"$WORK/out\"`. It lists the chunks that still have no output. Process the first one: read it, write its output, then run `pending` again. Repeat until nothing is pending. Never hold all chunks in context at once."
    },
    {
     "title": "Reduce",
     "text": "Run `python3 <skill>/scripts/rlm_corpus.py merge \"$WORK/out\" --out \"$WORK/merged.json\"`. If it lists `failed_outputs`, re-run those chunks. A missing or invalid output is not \"no findings\". If the merged list is still too large to read, repeat steps 2 to 4 on the findings."
    },
    {
     "title": "Verify",
     "text": "For every high-severity item, find what calls the code: a request handler, a scheduled job, a loop over user data, or start-up code that runs once. Rank by that, not by the pattern alone. A query in a loop that runs once at start-up is low severity. When the user gave a profile or trace, match each finding to it and mark the ones it confirms."
    },
    {
     "title": "Report",
     "text": "Write the report in the format below."
    },
    {
     "title": "Clean up",
     "text": "Delete `$WORK` after the report is delivered."
    }
   ],
   "path": ".github/skills/rlm-performance-review",
   "files": [
    "scripts/rlm_corpus.py"
   ],
   "helperScripts": 1,
   "notChecked": true,
   "group": "engineering",
   "grade": {
    "grade": "B+",
    "score": "3.95",
    "scores": [
     4,
     4,
     4,
     3,
     5
    ],
    "design": true,
    "rank": 41
   }
  },
  {
   "id": "rlm-perl-review",
   "goal": "Perl review: taint checks, regular expressions, command execution and error handling.",
   "cat": "Installed",
   "on": false,
   "use": "Perl review: taint checks, regular expressions, command execution and error handling. Use when asked to review a Perl script or module.",
   "prompt": "Use the rlm-perl-review skill.",
   "input": "",
   "output": "",
   "pros": [],
   "cons": [],
   "items": [
    "input-1",
    "input-2",
    "input-3",
    "input-4",
    "input-5",
    "input-6"
   ],
   "steps": [
    {
     "layout": "row",
     "note": "Read the script or module. The version and the modules used."
    },
    {
     "layout": "chunks",
     "note": "Check taint. Flag input used in system calls without taint checks.",
     "groups": [
      0,
      0,
      1,
      1,
      2,
      2
     ]
    },
    {
     "layout": "parallel",
     "note": "Check commands. Flag shell execution built from strings.",
     "groups": [
      0,
      0,
      1,
      1,
      2,
      2
     ],
     "state": [
      "ok",
      "ok",
      "ok",
      "ok",
      "ok",
      "ok"
     ]
    },
    {
     "layout": "funnel",
     "note": "Check patterns. Flag regular expressions with catastrophic backtracking on input."
    },
    {
     "layout": "gate",
     "note": "Report. Each finding with file and line, severity and the fix.",
     "pass": [
      true,
      true,
      true,
      true,
      true,
      false
     ]
    }
   ],
   "outcome": null,
   "idea": "",
   "why": "",
   "protocol": [
    {
     "title": "Read the script or module",
     "text": "The version and the modules used."
    },
    {
     "title": "Check taint",
     "text": "Flag input used in system calls without taint checks."
    },
    {
     "title": "Check commands",
     "text": "Flag shell execution built from strings."
    },
    {
     "title": "Check patterns",
     "text": "Flag regular expressions with catastrophic backtracking on input."
    },
    {
     "title": "Report",
     "text": "Each finding with file and line, severity and the fix."
    }
   ],
   "path": ".github/skills/rlm-perl-review",
   "files": [],
   "helperScripts": 0,
   "notChecked": true,
   "group": "languages",
   "grade": {
    "grade": "B+",
    "score": "3.75",
    "scores": [
     4,
     4,
     4,
     3,
     3
    ],
    "design": true,
    "rank": 141
   }
  },
  {
   "id": "rlm-php-review",
   "goal": "PHP review: input handling, SQL, file inclusion, session settings and type declarations.",
   "cat": "Installed",
   "on": false,
   "use": "PHP review: input handling, SQL, file inclusion, session settings and type declarations. Use when asked to review a PHP project or module.",
   "prompt": "Use the rlm-php-review skill.",
   "input": "",
   "output": "",
   "pros": [],
   "cons": [],
   "items": [
    "input-1",
    "input-2",
    "input-3",
    "input-4",
    "input-5",
    "input-6"
   ],
   "steps": [
    {
     "layout": "row",
     "note": "Read the project setup. Composer file, PHP version and configuration."
    },
    {
     "layout": "chunks",
     "note": "Check input. Flag superglobals used without validation.",
     "groups": [
      0,
      0,
      1,
      1,
      2,
      2
     ]
    },
    {
     "layout": "parallel",
     "note": "Check SQL. Flag queries built with concatenation or interpolation.",
     "groups": [
      0,
      0,
      1,
      1,
      2,
      2
     ],
     "state": [
      "ok",
      "ok",
      "ok",
      "ok",
      "ok",
      "ok"
     ]
    },
    {
     "layout": "funnel",
     "note": "Check file inclusion. Flag include or require with input-derived paths."
    },
    {
     "layout": "gate",
     "note": "Report. Each finding with file and line, severity and the fix.",
     "pass": [
      true,
      true,
      true,
      true,
      true,
      false
     ]
    }
   ],
   "outcome": null,
   "idea": "",
   "why": "",
   "protocol": [
    {
     "title": "Read the project setup",
     "text": "Composer file, PHP version and configuration."
    },
    {
     "title": "Check input",
     "text": "Flag superglobals used without validation."
    },
    {
     "title": "Check SQL",
     "text": "Flag queries built with concatenation or interpolation."
    },
    {
     "title": "Check file inclusion",
     "text": "Flag include or require with input-derived paths."
    },
    {
     "title": "Report",
     "text": "Each finding with file and line, severity and the fix."
    }
   ],
   "path": ".github/skills/rlm-php-review",
   "files": [],
   "helperScripts": 0,
   "notChecked": true,
   "group": "languages",
   "grade": {
    "grade": "B+",
    "score": "3.85",
    "scores": [
     4,
     4,
     4,
     3,
     4
    ],
    "design": true,
    "rank": 89
   }
  },
  {
   "id": "rlm-pipeline-gate",
   "goal": "Define and check the pipeline gate: the checks a CI pipeline must pass before a merge, with each rule and its…",
   "cat": "Installed",
   "on": false,
   "use": "Define and check the pipeline gate: the checks a CI pipeline must pass before a merge, with each rule and its owner written out. Use when a team sets up or changes CI checks.",
   "prompt": "Use the rlm-pipeline-gate skill.",
   "input": "",
   "output": "",
   "pros": [],
   "cons": [],
   "items": [
    "input-1",
    "input-2",
    "input-3",
    "input-4",
    "input-5",
    "input-6"
   ],
   "steps": [
    {
     "layout": "row",
     "note": "Read the pipeline. Open the CI configuration and list every job, its trigger, and which ones block the merge."
    },
    {
     "layout": "chunks",
     "note": "List the required checks. Build, test, lint, static analysis and dependency checks should all be required.",
     "groups": [
      0,
      0,
      1,
      1,
      2,
      2
     ]
    },
    {
     "layout": "parallel",
     "note": "Check the bypasses. Flag steps marked allowed-to-fail, skipped branches and manual overrides with no recorded owner.",
     "groups": [
      0,
      0,
      1,
      1,
      2,
      2
     ],
     "state": [
      "ok",
      "ok",
      "ok",
      "ok",
      "ok",
      "ok"
     ]
    },
    {
     "layout": "funnel",
     "note": "Check the timing. Slow gates get skipped."
    },
    {
     "layout": "gate",
     "note": "Check the records. Each run should keep its result, commit and tool version.",
     "pass": [
      true,
      true,
      true,
      true,
      true,
      false
     ]
    },
    {
     "layout": "doc",
     "note": "Report. A table of gates: check, blocking or not, owner, and the gap found.",
     "docLabel": "report"
    }
   ],
   "outcome": null,
   "idea": "",
   "why": "",
   "protocol": [
    {
     "title": "Read the pipeline",
     "text": "Open the CI configuration and list every job, its trigger, and which ones block the merge."
    },
    {
     "title": "List the required checks",
     "text": "Build, test, lint, static analysis and dependency checks should all be required. Flag any that are optional."
    },
    {
     "title": "Check the bypasses",
     "text": "Flag steps marked allowed-to-fail, skipped branches and manual overrides with no recorded owner."
    },
    {
     "title": "Check the timing",
     "text": "Slow gates get skipped. Note the run time of each job and the order they run in."
    },
    {
     "title": "Check the records",
     "text": "Each run should keep its result, commit and tool version."
    },
    {
     "title": "Report",
     "text": "A table of gates: check, blocking or not, owner, and the gap found."
    }
   ],
   "path": ".github/skills/rlm-pipeline-gate",
   "files": [],
   "helperScripts": 0,
   "notChecked": true,
   "group": "gates",
   "grade": {
    "grade": "B+",
    "score": "3.85",
    "scores": [
     4,
     4,
     4,
     3,
     4
    ],
    "design": true,
    "rank": 90
   }
  },
  {
   "id": "rlm-pipeline-idempotency-review",
   "goal": "Pipeline idempotency review: a data job that runs twice produces the same result, not duplicates.",
   "cat": "Installed",
   "on": false,
   "use": "Pipeline idempotency review: a data job that runs twice produces the same result, not duplicates. Use when a job is retried, re-run or scheduled.",
   "prompt": "Use the rlm-pipeline-idempotency-review skill.",
   "input": "",
   "output": "",
   "pros": [],
   "cons": [],
   "items": [
    "input-1",
    "input-2",
    "input-3",
    "input-4",
    "input-5",
    "input-6"
   ],
   "steps": [
    {
     "layout": "row",
     "note": "List the jobs. Each input, output and how it is triggered."
    },
    {
     "layout": "chunks",
     "note": "Check the writes. Flag inserts with no key, appends with no deduplication, and counters that add up twice.",
     "groups": [
      0,
      0,
      1,
      1,
      2,
      2
     ]
    },
    {
     "layout": "parallel",
     "note": "Check the retries. Confirm a failed run can be repeated safely.",
     "groups": [
      0,
      0,
      1,
      1,
      2,
      2
     ],
     "state": [
      "ok",
      "ok",
      "ok",
      "ok",
      "ok",
      "ok"
     ]
    },
    {
     "layout": "funnel",
     "note": "Check the partial runs. Flag jobs that leave half-written output."
    },
    {
     "layout": "gate",
     "note": "Report. Each job with its risk of duplicates and the fix.",
     "pass": [
      true,
      true,
      true,
      true,
      true,
      false
     ]
    }
   ],
   "outcome": null,
   "idea": "",
   "why": "",
   "protocol": [
    {
     "title": "List the jobs",
     "text": "Each input, output and how it is triggered."
    },
    {
     "title": "Check the writes",
     "text": "Flag inserts with no key, appends with no deduplication, and counters that add up twice."
    },
    {
     "title": "Check the retries",
     "text": "Confirm a failed run can be repeated safely."
    },
    {
     "title": "Check the partial runs",
     "text": "Flag jobs that leave half-written output."
    },
    {
     "title": "Report",
     "text": "Each job with its risk of duplicates and the fix."
    }
   ],
   "path": ".github/skills/rlm-pipeline-idempotency-review",
   "files": [],
   "helperScripts": 0,
   "notChecked": true,
   "group": "engineering",
   "grade": {
    "grade": "B+",
    "score": "3.85",
    "scores": [
     4,
     4,
     4,
     3,
     4
    ],
    "design": true,
    "rank": 91
   }
  },
  {
   "id": "rlm-policy-exception-register",
   "goal": "Policy exception register: every departure from a policy recorded with its reason, owner and expiry.",
   "cat": "Installed",
   "on": false,
   "use": "Policy exception register: every departure from a policy recorded with its reason, owner and expiry. Use when a team cannot meet a policy requirement.",
   "prompt": "Use the rlm-policy-exception-register skill.",
   "input": "",
   "output": "",
   "pros": [],
   "cons": [],
   "items": [
    "input-1",
    "input-2",
    "input-3",
    "input-4",
    "input-5",
    "input-6"
   ],
   "steps": [
    {
     "layout": "row",
     "note": "List the exceptions. Each departure from policy, with the policy it breaks."
    },
    {
     "layout": "chunks",
     "note": "Check the reason. Each needs a stated reason.",
     "groups": [
      0,
      0,
      1,
      1,
      2,
      2
     ]
    },
    {
     "layout": "parallel",
     "note": "Check the owner and expiry. Each needs an owner and an end date.",
     "groups": [
      0,
      0,
      1,
      1,
      2,
      2
     ],
     "state": [
      "ok",
      "ok",
      "ok",
      "ok",
      "ok",
      "ok"
     ]
    },
    {
     "layout": "funnel",
     "note": "Check the approval. Each needs an approver above the team."
    },
    {
     "layout": "gate",
     "note": "Report. The register, the expired exceptions and those for renewal.",
     "pass": [
      true,
      true,
      true,
      true,
      true,
      false
     ]
    }
   ],
   "outcome": null,
   "idea": "",
   "why": "",
   "protocol": [
    {
     "title": "List the exceptions",
     "text": "Each departure from policy, with the policy it breaks."
    },
    {
     "title": "Check the reason",
     "text": "Each needs a stated reason."
    },
    {
     "title": "Check the owner and expiry",
     "text": "Each needs an owner and an end date."
    },
    {
     "title": "Check the approval",
     "text": "Each needs an approver above the team."
    },
    {
     "title": "Report",
     "text": "The register, the expired exceptions and those for renewal."
    }
   ],
   "path": ".github/skills/rlm-policy-exception-register",
   "files": [],
   "helperScripts": 0,
   "notChecked": true,
   "group": "compliance",
   "grade": {
    "grade": "B+",
    "score": "3.80",
    "scores": [
     4,
     4,
     3,
     4,
     4
    ],
    "design": true,
    "rank": 122
   }
  },
  {
   "id": "rlm-privacy-impact-assessment",
   "goal": "Privacy impact assessment: the risks a new feature creates for personal data, and the mitigations.",
   "cat": "Installed",
   "on": false,
   "use": "Privacy impact assessment: the risks a new feature creates for personal data, and the mitigations. Use when a feature collects or uses personal data in a new way.",
   "prompt": "Use the rlm-privacy-impact-assessment skill.",
   "input": "",
   "output": "",
   "pros": [],
   "cons": [],
   "items": [
    "input-1",
    "input-2",
    "input-3",
    "input-4",
    "input-5",
    "input-6"
   ],
   "steps": [
    {
     "layout": "row",
     "note": "Describe the data. The fields, the people and the purpose."
    },
    {
     "layout": "chunks",
     "note": "Describe the flow. Where the data is collected, stored, shared and deleted.",
     "groups": [
      0,
      0,
      1,
      1,
      2,
      2
     ]
    },
    {
     "layout": "parallel",
     "note": "Identify the risks. Unauthorised access, excess collection and secondary use.",
     "groups": [
      0,
      0,
      1,
      1,
      2,
      2
     ],
     "state": [
      "ok",
      "ok",
      "ok",
      "ok",
      "ok",
      "ok"
     ]
    },
    {
     "layout": "funnel",
     "note": "List the mitigations. Each risk with the control that reduces it."
    },
    {
     "layout": "gate",
     "note": "Report. The assessment, the residual risk and the decision needed.",
     "pass": [
      true,
      true,
      true,
      true,
      true,
      false
     ]
    }
   ],
   "outcome": null,
   "idea": "",
   "why": "",
   "protocol": [
    {
     "title": "Describe the data",
     "text": "The fields, the people and the purpose."
    },
    {
     "title": "Describe the flow",
     "text": "Where the data is collected, stored, shared and deleted."
    },
    {
     "title": "Identify the risks",
     "text": "Unauthorised access, excess collection and secondary use."
    },
    {
     "title": "List the mitigations",
     "text": "Each risk with the control that reduces it."
    },
    {
     "title": "Report",
     "text": "The assessment, the residual risk and the decision needed."
    }
   ],
   "path": ".github/skills/rlm-privacy-impact-assessment",
   "files": [],
   "helperScripts": 0,
   "notChecked": true,
   "group": "compliance",
   "grade": {
    "grade": "B+",
    "score": "3.75",
    "scores": [
     4,
     4,
     4,
     3,
     3
    ],
    "design": true,
    "rank": 142
   }
  },
  {
   "id": "rlm-privacy-review",
   "goal": "Review a large codebase for personal data handling using Recursive Language Model (RLM) decomposition: where…",
   "cat": "Installed",
   "on": false,
   "use": "Review a large codebase for personal data handling using Recursive Language Model (RLM) decomposition: where personal data is collected, stored, logged, shared with third parties and retained, with a data inventory and gaps. Use for privacy reviews, data-protection impact assessments, or when asked where personal data goes.",
   "prompt": "Use the rlm-privacy-review skill.",
   "input": "",
   "output": "",
   "pros": [],
   "cons": [],
   "items": [
    "input-1",
    "input-2",
    "input-3",
    "input-4",
    "input-5",
    "input-6"
   ],
   "steps": [
    {
     "layout": "row",
     "note": "Inspect. Run `python3 <skill>/scripts/rlm_corpus.py scan <repo>`."
    },
    {
     "layout": "chunks",
     "note": "Partition. Run `WORK=$(mktemp -d)`, then `python3 <skill>/scripts/rlm_corpus.py chunk <repo> \"$WORK/chunks\"`.",
     "groups": [
      0,
      0,
      1,
      1,
      2,
      2
     ]
    },
    {
     "layout": "parallel",
     "note": "Map. For each chunk, run a fresh sub-task (a subagent if you can start one) that sees the chunk and the \"Chunk task\" below.",
     "groups": [
      0,
      0,
      1,
      1,
      2,
      2
     ],
     "state": [
      "ok",
      "ok",
      "ok",
      "ok",
      "ok",
      "ok"
     ]
    },
    {
     "layout": "funnel",
     "note": "Reduce. Run `python3 <skill>/scripts/rlm_corpus.py merge \"$WORK/out\" --out \"$WORK/merged.json\"`."
    },
    {
     "layout": "gate",
     "note": "Trace. For each data element in the inventory, follow its path through the code: collection, storage, logging, transfer, deletion.",
     "pass": [
      true,
      true,
      true,
      true,
      true,
      false
     ]
    },
    {
     "layout": "doc",
     "note": "Verify. Open each cited file and line, confirm each finding against the source, and drop any finding you cannot confirm.",
     "docLabel": "report"
    }
   ],
   "outcome": null,
   "idea": "",
   "why": "",
   "protocol": [
    {
     "title": "Inspect",
     "text": "Run `python3 <skill>/scripts/rlm_corpus.py scan <repo>`. Narrow the scope with `--include` if the repository is very large, and record what was skipped."
    },
    {
     "title": "Partition",
     "text": "Run `WORK=$(mktemp -d)`, then `python3 <skill>/scripts/rlm_corpus.py chunk <repo> \"$WORK/chunks\"`."
    },
    {
     "title": "Map",
     "text": "For each chunk, run a fresh sub-task (a subagent if you can start one) that sees the chunk and the \"Chunk task\" below. If you cannot start sub-tasks, run `python3 <skill>/scripts/rlm_corpus.py pending \"$WORK/chunks\" \"$WORK/out\"` and process the first listed chunk, then run `pending` again until nothing is pending."
    },
    {
     "title": "Reduce",
     "text": "Run `python3 <skill>/scripts/rlm_corpus.py merge \"$WORK/out\" --out \"$WORK/merged.json\"`. Re-run any `failed_outputs`."
    },
    {
     "title": "Trace",
     "text": "For each data element in the inventory, follow its path through the code: collection, storage, logging, transfer, deletion. Confirm the path by reading the code, not by name alone."
    },
    {
     "title": "Verify",
     "text": "Open each cited file and line, confirm each finding against the source, and drop any finding you cannot confirm."
    },
    {
     "title": "Report",
     "text": "Write the report in the format below."
    },
    {
     "title": "Clean up",
     "text": "Delete `$WORK` after the report is delivered."
    }
   ],
   "path": ".github/skills/rlm-privacy-review",
   "files": [
    "scripts/rlm_corpus.py"
   ],
   "helperScripts": 1,
   "notChecked": false,
   "group": "security",
   "grade": {
    "grade": "B+",
    "score": "3.90",
    "scores": [
     4,
     4,
     5,
     2,
     4
    ],
    "design": true,
    "rank": 45
   }
  },
  {
   "id": "rlm-prompt-caching-review",
   "goal": "Prompt caching review: whether stable prompt parts are placed and marked so they can be reused.",
   "cat": "Installed",
   "on": false,
   "use": "Prompt caching review: whether stable prompt parts are placed and marked so they can be reused. Use when a model provider's caching is used or could be.",
   "prompt": "Use the rlm-prompt-caching-review skill.",
   "input": "",
   "output": "",
   "pros": [],
   "cons": [],
   "items": [
    "input-1",
    "input-2",
    "input-3",
    "input-4",
    "input-5",
    "input-6"
   ],
   "steps": [
    {
     "layout": "row",
     "note": "List the stable parts. System text, tool definitions and reference material."
    },
    {
     "layout": "chunks",
     "note": "Check the order. Stable parts come before anything that changes per call.",
     "groups": [
      0,
      0,
      1,
      1,
      2,
      2
     ]
    },
    {
     "layout": "parallel",
     "note": "Check the markers. Confirm the cache breakpoints are where the stable part ends.",
     "groups": [
      0,
      0,
      1,
      1,
      2,
      2
     ],
     "state": [
      "ok",
      "ok",
      "ok",
      "ok",
      "ok",
      "ok"
     ]
    },
    {
     "layout": "funnel",
     "note": "Check the cache hit rate. Note how often a cached prefix is actually reused."
    },
    {
     "layout": "gate",
     "note": "Report. Each prompt with its stable part, the ordering problem and the fix.",
     "pass": [
      true,
      true,
      true,
      true,
      true,
      false
     ]
    }
   ],
   "outcome": null,
   "idea": "",
   "why": "",
   "protocol": [
    {
     "title": "List the stable parts",
     "text": "System text, tool definitions and reference material."
    },
    {
     "title": "Check the order",
     "text": "Stable parts come before anything that changes per call."
    },
    {
     "title": "Check the markers",
     "text": "Confirm the cache breakpoints are where the stable part ends."
    },
    {
     "title": "Check the cache hit rate",
     "text": "Note how often a cached prefix is actually reused."
    },
    {
     "title": "Report",
     "text": "Each prompt with its stable part, the ordering problem and the fix."
    }
   ],
   "path": ".github/skills/rlm-prompt-caching-review",
   "files": [],
   "helperScripts": 0,
   "notChecked": true,
   "group": "engineering",
   "grade": {
    "grade": "B+",
    "score": "3.75",
    "scores": [
     4,
     4,
     4,
     3,
     3
    ],
    "design": true,
    "rank": 143
   }
  },
  {
   "id": "rlm-prompt-length-review",
   "goal": "Prompt length review: prompts that repeat rules, examples or boilerplate across calls.",
   "cat": "Installed",
   "on": false,
   "use": "Prompt length review: prompts that repeat rules, examples or boilerplate across calls. Use when a prompt template is written or changed.",
   "prompt": "Use the rlm-prompt-length-review skill.",
   "input": "",
   "output": "",
   "pros": [],
   "cons": [],
   "items": [
    "input-1",
    "input-2",
    "input-3",
    "input-4",
    "input-5",
    "input-6"
   ],
   "steps": [
    {
     "layout": "row",
     "note": "Read the template. List each section and what it says."
    },
    {
     "layout": "chunks",
     "note": "Find repetition. Flag rules repeated in several places and examples that teach nothing new.",
     "groups": [
      0,
      0,
      1,
      1,
      2,
      2
     ]
    },
    {
     "layout": "parallel",
     "note": "Check the examples. Keep the fewest that show the format.",
     "groups": [
      0,
      0,
      1,
      1,
      2,
      2
     ],
     "state": [
      "ok",
      "ok",
      "ok",
      "ok",
      "ok",
      "ok"
     ]
    },
    {
     "layout": "funnel",
     "note": "Check the variables. Flag fields filled with more text than the call needs."
    },
    {
     "layout": "gate",
     "note": "Report. Each section with its length, the repetition and the shorter wording.",
     "pass": [
      true,
      true,
      true,
      true,
      true,
      false
     ]
    }
   ],
   "outcome": null,
   "idea": "",
   "why": "",
   "protocol": [
    {
     "title": "Read the template",
     "text": "List each section and what it says."
    },
    {
     "title": "Find repetition",
     "text": "Flag rules repeated in several places and examples that teach nothing new."
    },
    {
     "title": "Check the examples",
     "text": "Keep the fewest that show the format."
    },
    {
     "title": "Check the variables",
     "text": "Flag fields filled with more text than the call needs."
    },
    {
     "title": "Report",
     "text": "Each section with its length, the repetition and the shorter wording."
    }
   ],
   "path": ".github/skills/rlm-prompt-length-review",
   "files": [],
   "helperScripts": 0,
   "notChecked": true,
   "group": "engineering",
   "grade": {
    "grade": "B+",
    "score": "3.80",
    "scores": [
     4,
     4,
     3,
     4,
     4
    ],
    "design": true,
    "rank": 123
   }
  },
  {
   "id": "rlm-public-api-review",
   "goal": "Public API review: what a library or service exposes, and whether it can change safely.",
   "cat": "Installed",
   "on": false,
   "use": "Public API review: what a library or service exposes, and whether it can change safely. Use when a public type, function or endpoint is added or changed.",
   "prompt": "Use the rlm-public-api-review skill.",
   "input": "",
   "output": "",
   "pros": [],
   "cons": [],
   "items": [
    "input-1",
    "input-2",
    "input-3",
    "input-4",
    "input-5",
    "input-6"
   ],
   "steps": [
    {
     "layout": "row",
     "note": "List the public surface. Exported types, functions and endpoints."
    },
    {
     "layout": "chunks",
     "note": "Check minimality. Flag exposed members that callers do not need.",
     "groups": [
      0,
      0,
      1,
      1,
      2,
      2
     ]
    },
    {
     "layout": "parallel",
     "note": "Check stability. Flag changes to existing signatures, names or behaviour.",
     "groups": [
      0,
      0,
      1,
      1,
      2,
      2
     ],
     "state": [
      "ok",
      "ok",
      "ok",
      "ok",
      "ok",
      "ok"
     ]
    },
    {
     "layout": "funnel",
     "note": "Check documentation. Each public item needs a stated contract."
    },
    {
     "layout": "gate",
     "note": "Report. Each item with file and line, the change, and whether it breaks callers.",
     "pass": [
      true,
      true,
      true,
      true,
      true,
      false
     ]
    }
   ],
   "outcome": null,
   "idea": "",
   "why": "",
   "protocol": [
    {
     "title": "List the public surface",
     "text": "Exported types, functions and endpoints."
    },
    {
     "title": "Check minimality",
     "text": "Flag exposed members that callers do not need."
    },
    {
     "title": "Check stability",
     "text": "Flag changes to existing signatures, names or behaviour."
    },
    {
     "title": "Check documentation",
     "text": "Each public item needs a stated contract."
    },
    {
     "title": "Report",
     "text": "Each item with file and line, the change, and whether it breaks callers."
    }
   ],
   "path": ".github/skills/rlm-public-api-review",
   "files": [],
   "helperScripts": 0,
   "notChecked": true,
   "group": "review",
   "grade": {
    "grade": "B+",
    "score": "3.85",
    "scores": [
     4,
     4,
     4,
     3,
     4
    ],
    "design": true,
    "rank": 92
   }
  },
  {
   "id": "rlm-pull-request-review",
   "goal": "Review a pull request for scope, tests, risk, and whether a reviewer can understand and check it.",
   "cat": "Installed",
   "on": false,
   "use": "Review a pull request for scope, tests, risk, and whether a reviewer can understand and check it. Use when a pull request is ready for review.",
   "prompt": "Use the rlm-pull-request-review skill.",
   "input": "",
   "output": "",
   "pros": [],
   "cons": [],
   "items": [
    "input-1",
    "input-2",
    "input-3",
    "input-4",
    "input-5",
    "input-6"
   ],
   "steps": [
    {
     "layout": "row",
     "note": "Read the description. Check that the description says what changed, why, and how it was tested."
    },
    {
     "layout": "chunks",
     "note": "Check scope. Flag unrelated edits, and a change that mixes a refactor with a behaviour change.",
     "groups": [
      0,
      0,
      1,
      1,
      2,
      2
     ]
    },
    {
     "layout": "parallel",
     "note": "Check tests. Each behaviour change needs a test.",
     "groups": [
      0,
      0,
      1,
      1,
      2,
      2
     ],
     "state": [
      "ok",
      "ok",
      "ok",
      "ok",
      "ok",
      "ok"
     ]
    },
    {
     "layout": "funnel",
     "note": "Check risk. Note what could break: data, public interfaces, configuration and deployment order."
    },
    {
     "layout": "gate",
     "note": "Check the size. Flag changes too large to review in one sitting, and say how they could be split.",
     "pass": [
      true,
      true,
      true,
      true,
      true,
      false
     ]
    },
    {
     "layout": "doc",
     "note": "Report. List the findings in order of risk, each with file and line.",
     "docLabel": "report"
    }
   ],
   "outcome": null,
   "idea": "",
   "why": "",
   "protocol": [
    {
     "title": "Read the description",
     "text": "Check that the description says what changed, why, and how it was tested."
    },
    {
     "title": "Check scope",
     "text": "Flag unrelated edits, and a change that mixes a refactor with a behaviour change."
    },
    {
     "title": "Check tests",
     "text": "Each behaviour change needs a test. Flag changes that only touch tests, or tests that were deleted."
    },
    {
     "title": "Check risk",
     "text": "Note what could break: data, public interfaces, configuration and deployment order."
    },
    {
     "title": "Check the size",
     "text": "Flag changes too large to review in one sitting, and say how they could be split."
    },
    {
     "title": "Report",
     "text": "List the findings in order of risk, each with file and line. End with a verdict: ready, needs changes, or split first."
    }
   ],
   "path": ".github/skills/rlm-pull-request-review",
   "files": [],
   "helperScripts": 0,
   "notChecked": true,
   "group": "review",
   "grade": {
    "grade": "B+",
    "score": "3.90",
    "scores": [
     4,
     4,
     4,
     4,
     3
    ],
    "design": true,
    "rank": 46
   }
  },
  {
   "id": "rlm-python-review",
   "goal": "Review Python code for correctness, typing, resource handling, security pitfalls and tests.",
   "cat": "Installed",
   "on": false,
   "use": "Review Python code for correctness, typing, resource handling, security pitfalls and tests. Use when asked to review or harden a Python project or module.",
   "prompt": "Use the rlm-python-review skill.",
   "input": "",
   "output": "",
   "pros": [],
   "cons": [],
   "items": [
    "input-1",
    "input-2",
    "input-3",
    "input-4",
    "input-5",
    "input-6"
   ],
   "steps": [
    {
     "layout": "row",
     "note": "Read the project setup. Open pyproject.toml, setup.cfg, requirements files and lint configuration."
    },
    {
     "layout": "chunks",
     "note": "Check correctness. Look for mutable default arguments, late-binding closures, bare `except:`, swallowed exceptions, `is` comparisons with literals, and integer versus float division.",
     "groups": [
      0,
      0,
      1,
      1,
      2,
      2
     ]
    },
    {
     "layout": "parallel",
     "note": "Check resources. Files, sockets and database connections must be closed, normally through `with`.",
     "groups": [
      0,
      0,
      1,
      1,
      2,
      2
     ],
     "state": [
      "ok",
      "ok",
      "ok",
      "ok",
      "ok",
      "ok"
     ]
    },
    {
     "layout": "funnel",
     "note": "Check security. Flag `eval` and `exec` on input, `pickle` on untrusted data, `subprocess` with `shell=True` or built strings, unsafe YAML loading, paths joined from user input, and SQL built with f-strings."
    },
    {
     "layout": "gate",
     "note": "Check typing and the public API. Public functions need correct annotations.",
     "pass": [
      true,
      true,
      true,
      true,
      true,
      false
     ]
    },
    {
     "layout": "doc",
     "note": "Check tests. Find branches and public functions with no test, and assertions that cannot fail.",
     "docLabel": "report"
    }
   ],
   "outcome": null,
   "idea": "",
   "why": "",
   "protocol": [
    {
     "title": "Read the project setup",
     "text": "Open pyproject.toml, setup.cfg, requirements files and lint configuration. Note the Python version the project targets."
    },
    {
     "title": "Check correctness",
     "text": "Look for mutable default arguments, late-binding closures, bare `except:`, swallowed exceptions, `is` comparisons with literals, and integer versus float division."
    },
    {
     "title": "Check resources",
     "text": "Files, sockets and database connections must be closed, normally through `with`. Note generators and threads that are never joined."
    },
    {
     "title": "Check security",
     "text": "Flag `eval` and `exec` on input, `pickle` on untrusted data, `subprocess` with `shell=True` or built strings, unsafe YAML loading, paths joined from user input, and SQL built with f-strings."
    },
    {
     "title": "Check typing and the public API",
     "text": "Public functions need correct annotations. Flag `Any` that leaks out, and `Optional` values used without a None check."
    },
    {
     "title": "Check tests",
     "text": "Find branches and public functions with no test, and assertions that cannot fail."
    },
    {
     "title": "Report",
     "text": "List each finding as `file:line`, with severity (high, medium or low), the problem and the fix. Mark what you did not run."
    }
   ],
   "path": ".github/skills/rlm-python-review",
   "files": [],
   "helperScripts": 0,
   "notChecked": true,
   "group": "languages",
   "grade": {
    "grade": "B+",
    "score": "3.85",
    "scores": [
     4,
     4,
     4,
     3,
     4
    ],
    "design": true,
    "rank": 93
   }
  },
  {
   "id": "rlm-r-review",
   "goal": "R review: data handling, package sources, file paths and reproducibility.",
   "cat": "Installed",
   "on": false,
   "use": "R review: data handling, package sources, file paths and reproducibility. Use when asked to review an R project or analysis.",
   "prompt": "Use the rlm-r-review skill.",
   "input": "",
   "output": "",
   "pros": [],
   "cons": [],
   "items": [
    "input-1",
    "input-2",
    "input-3",
    "input-4",
    "input-5",
    "input-6"
   ],
   "steps": [
    {
     "layout": "row",
     "note": "Read the project setup. The renv or package files and the R version."
    },
    {
     "layout": "chunks",
     "note": "Check data handling. Flag personal data written to shared files.",
     "groups": [
      0,
      0,
      1,
      1,
      2,
      2
     ]
    },
    {
     "layout": "parallel",
     "note": "Check packages. Flag packages installed from unknown sources.",
     "groups": [
      0,
      0,
      1,
      1,
      2,
      2
     ],
     "state": [
      "ok",
      "ok",
      "ok",
      "ok",
      "ok",
      "ok"
     ]
    },
    {
     "layout": "funnel",
     "note": "Check paths. Flag paths built from input."
    },
    {
     "layout": "gate",
     "note": "Report. Each finding with file and line, severity and the fix.",
     "pass": [
      true,
      true,
      true,
      true,
      true,
      false
     ]
    }
   ],
   "outcome": null,
   "idea": "",
   "why": "",
   "protocol": [
    {
     "title": "Read the project setup",
     "text": "The renv or package files and the R version."
    },
    {
     "title": "Check data handling",
     "text": "Flag personal data written to shared files."
    },
    {
     "title": "Check packages",
     "text": "Flag packages installed from unknown sources."
    },
    {
     "title": "Check paths",
     "text": "Flag paths built from input."
    },
    {
     "title": "Report",
     "text": "Each finding with file and line, severity and the fix."
    }
   ],
   "path": ".github/skills/rlm-r-review",
   "files": [],
   "helperScripts": 0,
   "notChecked": true,
   "group": "languages",
   "grade": {
    "grade": "B",
    "score": "3.45",
    "scores": [
     3,
     4,
     3,
     4,
     4
    ],
    "design": true,
    "rank": 198
   }
  },
  {
   "id": "rlm-refactor-planner",
   "goal": "Architecture review and phased refactoring plan for a large repository using Recursive Language Model (RLM) d…",
   "cat": "Installed",
   "on": false,
   "use": "Architecture review and phased refactoring plan for a large repository using Recursive Language Model (RLM) decomposition. Use when asked to plan a refactor, find circular or tangled dependencies, split or merge modules, or assess coupling in code too large to read in one pass.",
   "prompt": "Use the rlm-refactor-planner skill.",
   "input": "",
   "output": "",
   "pros": [],
   "cons": [],
   "items": [
    "input-1",
    "input-2",
    "input-3",
    "input-4",
    "input-5",
    "input-6"
   ],
   "steps": [
    {
     "layout": "row",
     "note": "Inspect. Run `python3 <skill>/scripts/rlm_corpus.py scan <repo>` for the size and layout."
    },
    {
     "layout": "chunks",
     "note": "Graph. Run `python3 <skill>/scripts/rlm_corpus.py graph <repo>`.",
     "groups": [
      0,
      0,
      1,
      1,
      2,
      2
     ]
    },
    {
     "layout": "parallel",
     "note": "Partition. Run `WORK=$(mktemp -d)`, then `python3 <skill>/scripts/rlm_corpus.py chunk <repo> \"$WORK/chunks\"`.",
     "groups": [
      0,
      0,
      1,
      1,
      2,
      2
     ],
     "state": [
      "ok",
      "ok",
      "ok",
      "ok",
      "ok",
      "ok"
     ]
    },
    {
     "layout": "funnel",
     "note": "Map. For each chunk, run a fresh sub-task (a subagent if you can start one) that sees only that chunk file and the \"Chunk task\" below."
    },
    {
     "layout": "gate",
     "note": "Reduce. Run `python3 <skill>/scripts/rlm_corpus.py merge \"$WORK/out\" --out \"$WORK/merged.json\"`.",
     "pass": [
      true,
      true,
      true,
      true,
      true,
      false
     ]
    },
    {
     "layout": "doc",
     "note": "Verify. For each cycle and each high-impact recommendation, open the files and confirm the coupling is real before recommending a change.",
     "docLabel": "report"
    }
   ],
   "outcome": null,
   "idea": "",
   "why": "",
   "protocol": [
    {
     "title": "Inspect",
     "text": "Run `python3 <skill>/scripts/rlm_corpus.py scan <repo>` for the size and layout. If the repo is very large, agree the scope with the user and narrow it with `--include 'src/*'` (repeatable) on every command. Files over 20 MB are skipped; report what `scan` lists as skipped."
    },
    {
     "title": "Graph",
     "text": "Run `python3 <skill>/scripts/rlm_corpus.py graph <repo>`. It prints each file's local imports, the import cycles, and the most-imported files. Keep this output in your working notes; it is the backbone of the plan."
    },
    {
     "title": "Partition",
     "text": "Run `WORK=$(mktemp -d)`, then `python3 <skill>/scripts/rlm_corpus.py chunk <repo> \"$WORK/chunks\"`. Chunks are limited to 800 lines and 100,000 characters each, and are cut between definitions where possible."
    },
    {
     "title": "Map",
     "text": "For each chunk, run a fresh sub-task (a subagent if you can start one) that sees only that chunk file and the \"Chunk task\" below. It writes `\"$WORK/out/<chunk>.out.md\"`. If you cannot start sub-tasks, run `python3 <skill>/scripts/rlm_corpus.py pending \"$WORK/chunks\" \"$WORK/out\"` and process the first listed chunk: read it, write its output, then run `pending` again until nothing is pending."
    },
    {
     "title": "Reduce",
     "text": "Run `python3 <skill>/scripts/rlm_corpus.py merge \"$WORK/out\" --out \"$WORK/merged.json\"`. Re-run any `failed_outputs`. A broken output is not \"no issues\". Repeat the map step on the merged findings if they are still too large."
    },
    {
     "title": "Verify",
     "text": "For each cycle and each high-impact recommendation, open the files and confirm the coupling is real before recommending a change."
    },
    {
     "title": "Plan",
     "text": "Write the plan in the format below."
    },
    {
     "title": "Clean up",
     "text": "Delete `$WORK` after the plan is delivered."
    }
   ],
   "path": ".github/skills/rlm-refactor-planner",
   "files": [
    "scripts/rlm_corpus.py"
   ],
   "helperScripts": 1,
   "notChecked": true,
   "group": "engineering",
   "grade": {
    "grade": "A-",
    "score": "4.10",
    "scores": [
     5,
     4,
     3,
     3,
     5
    ],
    "design": true,
    "rank": 25
   }
  },
  {
   "id": "rlm-release-gate",
   "goal": "Check the release gate: the sign-off, tests, rollback plan and security checks a release needs before it goes…",
   "cat": "Installed",
   "on": false,
   "use": "Check the release gate: the sign-off, tests, rollback plan and security checks a release needs before it goes to production. Use when a release is about to be promoted.",
   "prompt": "Use the rlm-release-gate skill.",
   "input": "",
   "output": "",
   "pros": [],
   "cons": [],
   "items": [
    "input-1",
    "input-2",
    "input-3",
    "input-4",
    "input-5",
    "input-6"
   ],
   "steps": [
    {
     "layout": "row",
     "note": "Read the release scope. List the changes in the release, and the services they touch."
    },
    {
     "layout": "chunks",
     "note": "Check the tests. The release needs its test results and a note of any skipped tests.",
     "groups": [
      0,
      0,
      1,
      1,
      2,
      2
     ]
    },
    {
     "layout": "parallel",
     "note": "Check the security checks. Confirm the security gates passed for this release, and list any open high findings.",
     "groups": [
      0,
      0,
      1,
      1,
      2,
      2
     ],
     "state": [
      "ok",
      "ok",
      "ok",
      "ok",
      "ok",
      "ok"
     ]
    },
    {
     "layout": "funnel",
     "note": "Check the rollback. A tested rollback path must exist, with the steps written down."
    },
    {
     "layout": "gate",
     "note": "Check the sign-off. A named owner must approve.",
     "pass": [
      true,
      true,
      true,
      true,
      true,
      false
     ]
    },
    {
     "layout": "doc",
     "note": "Report. A pass or fail verdict, with the reasons, and what must be fixed before the release can go.",
     "docLabel": "report"
    }
   ],
   "outcome": null,
   "idea": "",
   "why": "",
   "protocol": [
    {
     "title": "Read the release scope",
     "text": "List the changes in the release, and the services they touch."
    },
    {
     "title": "Check the tests",
     "text": "The release needs its test results and a note of any skipped tests."
    },
    {
     "title": "Check the security checks",
     "text": "Confirm the security gates passed for this release, and list any open high findings."
    },
    {
     "title": "Check the rollback",
     "text": "A tested rollback path must exist, with the steps written down."
    },
    {
     "title": "Check the sign-off",
     "text": "A named owner must approve. Flag releases with no approval."
    },
    {
     "title": "Report",
     "text": "A pass or fail verdict, with the reasons, and what must be fixed before the release can go."
    }
   ],
   "path": ".github/skills/rlm-release-gate",
   "files": [],
   "helperScripts": 0,
   "notChecked": true,
   "group": "gates",
   "grade": {
    "grade": "B+",
    "score": "3.80",
    "scores": [
     4,
     4,
     3,
     4,
     4
    ],
    "design": true,
    "rank": 124
   }
  },
  {
   "id": "rlm-release-notes",
   "goal": "Write release notes from commits and merged pull requests since the last tag, grouped by impact (breaking cha…",
   "cat": "Installed",
   "on": false,
   "use": "Write release notes from commits and merged pull requests since the last tag, grouped by impact (breaking changes, features, fixes, security, deprecations) with upgrade steps. Use when preparing a release or changelog entry.",
   "prompt": "Use the rlm-release-notes skill.",
   "input": "",
   "output": "",
   "pros": [],
   "cons": [],
   "items": [
    "input-1",
    "input-2",
    "input-3",
    "input-4",
    "input-5",
    "input-6"
   ],
   "steps": [
    {
     "layout": "row",
     "note": "Inspect. Run `python3 <skill>/scripts/rlm_corpus.py scan <corpus>`."
    },
    {
     "layout": "chunks",
     "note": "Partition. Run `WORK=$(mktemp -d)`, then `python3 <skill>/scripts/rlm_corpus.py chunk <corpus> \"$WORK/chunks\"`.",
     "groups": [
      0,
      0,
      1,
      1,
      2,
      2
     ]
    },
    {
     "layout": "parallel",
     "note": "Map. For each chunk, run a fresh sub-task (a subagent if you can start one) that sees only that chunk file and the \"Chunk task\" below.",
     "groups": [
      0,
      0,
      1,
      1,
      2,
      2
     ],
     "state": [
      "ok",
      "ok",
      "ok",
      "ok",
      "ok",
      "ok"
     ]
    },
    {
     "layout": "funnel",
     "note": "Reduce. Run `python3 <skill>/scripts/rlm_corpus.py merge \"$WORK/out\" --out \"$WORK/merged.json\"`."
    },
    {
     "layout": "gate",
     "note": "Verify. Confirm each entry against its commit or pull request.",
     "pass": [
      true,
      true,
      true,
      true,
      true,
      false
     ]
    },
    {
     "layout": "doc",
     "note": "Report. Write the report in the format below.",
     "docLabel": "report"
    }
   ],
   "outcome": null,
   "idea": "",
   "why": "",
   "protocol": [
    {
     "title": "Inspect",
     "text": "Run `python3 <skill>/scripts/rlm_corpus.py scan <corpus>`. Note the file count, line count and top-level folders. If the corpus is very large, agree the scope with the user, then narrow it with `--include '<folder>'` (repeatable) on every command. Files over 20 MB are skipped; `--max-bytes N` changes the limit. Report what `scan` lists as skipped."
    },
    {
     "title": "Partition",
     "text": "Run `WORK=$(mktemp -d)`, then `python3 <skill>/scripts/rlm_corpus.py chunk <corpus> \"$WORK/chunks\"`. Chunks are limited to 800 lines and 100,000 characters each, and are cut between definitions where possible. Each `chunk_NNN.md` holds the data notice and labelled file sections. `manifest.json` lists the chunks."
    },
    {
     "title": "Map",
     "text": "For each chunk, run a fresh sub-task (a subagent if you can start one) that sees only that chunk file and the \"Chunk task\" below. It writes `\"$WORK/out/<chunk>.out.md\"`. If you cannot start sub-tasks, run `python3 <skill>/scripts/rlm_corpus.py pending \"$WORK/chunks\" \"$WORK/out\"`. It lists the chunks that still have no output. Process the first one: read it, write its output, then run `pending` again. Repeat until nothing is pending. Never hold all chunks in context at once."
    },
    {
     "title": "Reduce",
     "text": "Run `python3 <skill>/scripts/rlm_corpus.py merge \"$WORK/out\" --out \"$WORK/merged.json\"`. If it lists `failed_outputs`, re-run those chunks. A missing or invalid output is not \"no findings\". Checks that span files (a duplicate across manifests, a route missing from a contract, a pattern repeated across chunks) are done on the merged list in this step. If the merged list is still too large to read, repeat steps 2 to 4 on the findings."
    },
    {
     "title": "Verify",
     "text": "Confirm each entry against its commit or pull request. Do not invent version numbers or dates; ask for them if they were not given."
    },
    {
     "title": "Report",
     "text": "Write the report in the format below."
    },
    {
     "title": "Clean up",
     "text": "Delete `$WORK` after the report is delivered."
    }
   ],
   "path": ".github/skills/rlm-release-notes",
   "files": [
    "scripts/rlm_corpus.py"
   ],
   "helperScripts": 1,
   "notChecked": true,
   "group": "engineering",
   "grade": {
    "grade": "C",
    "score": "2.70",
    "scores": [
     3,
     2,
     2,
     3,
     4
    ],
    "design": true,
    "rank": 216
   }
  },
  {
   "id": "rlm-remediation-plan",
   "goal": "Remediation plan: a dated plan for fixing a group of related findings.",
   "cat": "Installed",
   "on": false,
   "use": "Remediation plan: a dated plan for fixing a group of related findings. Use when several related findings need fixing together.",
   "prompt": "Use the rlm-remediation-plan skill.",
   "input": "",
   "output": "",
   "pros": [],
   "cons": [],
   "items": [
    "input-1",
    "input-2",
    "input-3",
    "input-4",
    "input-5",
    "input-6"
   ],
   "steps": [
    {
     "layout": "row",
     "note": "Group the findings by component or cause."
    },
    {
     "layout": "chunks",
     "note": "Choose the fix. One upgrade, one configuration or one code change per group.",
     "groups": [
      0,
      0,
      1,
      1,
      2,
      2
     ]
    },
    {
     "layout": "parallel",
     "note": "Set the dates. Each group gets an owner and a deadline.",
     "groups": [
      0,
      0,
      1,
      1,
      2,
      2
     ],
     "state": [
      "ok",
      "ok",
      "ok",
      "ok",
      "ok",
      "ok"
     ]
    },
    {
     "layout": "funnel",
     "note": "Plan the test. Note how the fix will be verified."
    },
    {
     "layout": "gate",
     "note": "Report. The groups, the fix, the owner, the date and the verification.",
     "pass": [
      true,
      true,
      true,
      true,
      true,
      false
     ]
    }
   ],
   "outcome": null,
   "idea": "",
   "why": "",
   "protocol": [
    {
     "title": "Group the findings by component or cause",
     "text": ""
    },
    {
     "title": "Choose the fix",
     "text": "One upgrade, one configuration or one code change per group."
    },
    {
     "title": "Set the dates",
     "text": "Each group gets an owner and a deadline."
    },
    {
     "title": "Plan the test",
     "text": "Note how the fix will be verified."
    },
    {
     "title": "Report",
     "text": "The groups, the fix, the owner, the date and the verification."
    }
   ],
   "path": ".github/skills/rlm-remediation-plan",
   "files": [],
   "helperScripts": 0,
   "notChecked": true,
   "group": "vulnerability",
   "grade": {
    "grade": "B+",
    "score": "3.85",
    "scores": [
     4,
     4,
     4,
     3,
     4
    ],
    "design": true,
    "rank": 94
   }
  },
  {
   "id": "rlm-requirements-check",
   "goal": "Map each requirement to the code and tests that meet it, and flag the code flaws found on the way.",
   "cat": "Installed",
   "on": false,
   "use": "Map each requirement to the code and tests that meet it, and flag the code flaws found on the way. Use when a feature must be checked against its requirements before release.",
   "prompt": "Use the rlm-requirements-check skill.",
   "input": "",
   "output": "",
   "pros": [],
   "cons": [],
   "items": [
    "input-1",
    "input-2",
    "input-3",
    "input-4",
    "input-5",
    "input-6"
   ],
   "steps": [
    {
     "layout": "row",
     "note": "Read the requirements. Take the requirements as written, numbered."
    },
    {
     "layout": "chunks",
     "note": "Map to code. For each requirement, find the code and the tests that meet it.",
     "groups": [
      0,
      0,
      1,
      1,
      2,
      2
     ]
    },
    {
     "layout": "parallel",
     "note": "Mark each requirement. Met (code and test), partly met (code but no test, or a gap), or not met (no code).",
     "groups": [
      0,
      0,
      1,
      1,
      2,
      2
     ],
     "state": [
      "ok",
      "ok",
      "ok",
      "ok",
      "ok",
      "ok"
     ]
    },
    {
     "layout": "funnel",
     "note": "Find code flaws. While mapping, note flaws in the code that the requirement depends on: missing validation, unhandled errors, unclear behaviour and missing edge cases."
    },
    {
     "layout": "gate",
     "note": "Check the edge cases. For each met requirement, list the edge cases it implies (empty input, limits, failure of a dependency) and whether each one is handled.",
     "pass": [
      true,
      true,
      true,
      true,
      true,
      false
     ]
    },
    {
     "layout": "doc",
     "note": "Report. A table: requirement, status, code location, test location, flaws found, fix.",
     "docLabel": "report"
    }
   ],
   "outcome": null,
   "idea": "",
   "why": "",
   "protocol": [
    {
     "title": "Read the requirements",
     "text": "Take the requirements as written, numbered. If a requirement is vague, record it as vague rather than guessing its meaning."
    },
    {
     "title": "Map to code",
     "text": "For each requirement, find the code and the tests that meet it. Record `file:line` for each."
    },
    {
     "title": "Mark each requirement",
     "text": "Met (code and test), partly met (code but no test, or a gap), or not met (no code)."
    },
    {
     "title": "Find code flaws",
     "text": "While mapping, note flaws in the code that the requirement depends on: missing validation, unhandled errors, unclear behaviour and missing edge cases."
    },
    {
     "title": "Check the edge cases",
     "text": "For each met requirement, list the edge cases it implies (empty input, limits, failure of a dependency) and whether each one is handled."
    },
    {
     "title": "Report",
     "text": "A table: requirement, status, code location, test location, flaws found, fix. Mark what you did not check and any requirement you had to read loosely."
    }
   ],
   "path": ".github/skills/rlm-requirements-check",
   "files": [],
   "helperScripts": 0,
   "notChecked": true,
   "group": "review",
   "grade": {
    "grade": "B+",
    "score": "3.75",
    "scores": [
     4,
     4,
     3,
     3,
     5
    ],
    "design": true,
    "rank": 144
   }
  },
  {
   "id": "rlm-retention-policy-check",
   "goal": "Retention policy check: data kept for the stated period and deleted when it expires.",
   "cat": "Installed",
   "on": false,
   "use": "Retention policy check: data kept for the stated period and deleted when it expires. Use when data is stored, archived or backed up.",
   "prompt": "Use the rlm-retention-policy-check skill.",
   "input": "",
   "output": "",
   "pros": [],
   "cons": [],
   "items": [
    "input-1",
    "input-2",
    "input-3",
    "input-4",
    "input-5",
    "input-6"
   ],
   "steps": [
    {
     "layout": "row",
     "note": "List the data stores and their retention rules."
    },
    {
     "layout": "chunks",
     "note": "Check the periods. Each store has a stated retention period.",
     "groups": [
      0,
      0,
      1,
      1,
      2,
      2
     ]
    },
    {
     "layout": "parallel",
     "note": "Check deletion. Flag stores with no delete path.",
     "groups": [
      0,
      0,
      1,
      1,
      2,
      2
     ],
     "state": [
      "ok",
      "ok",
      "ok",
      "ok",
      "ok",
      "ok"
     ]
    },
    {
     "layout": "funnel",
     "note": "Check backups. Note how long backups keep deleted data."
    },
    {
     "layout": "gate",
     "note": "Report. Each store with its period, its delete path and the gap.",
     "pass": [
      true,
      true,
      true,
      true,
      true,
      false
     ]
    }
   ],
   "outcome": null,
   "idea": "",
   "why": "",
   "protocol": [
    {
     "title": "List the data stores and their retention rules",
     "text": ""
    },
    {
     "title": "Check the periods",
     "text": "Each store has a stated retention period."
    },
    {
     "title": "Check deletion",
     "text": "Flag stores with no delete path."
    },
    {
     "title": "Check backups",
     "text": "Note how long backups keep deleted data."
    },
    {
     "title": "Report",
     "text": "Each store with its period, its delete path and the gap."
    }
   ],
   "path": ".github/skills/rlm-retention-policy-check",
   "files": [],
   "helperScripts": 0,
   "notChecked": true,
   "group": "compliance",
   "grade": {
    "grade": "B+",
    "score": "3.85",
    "scores": [
     4,
     4,
     4,
     3,
     4
    ],
    "design": true,
    "rank": 95
   }
  },
  {
   "id": "rlm-risk-acceptance-review",
   "goal": "Risk acceptance review: formal acceptance of a finding with the reason, the owner and the review date.",
   "cat": "Installed",
   "on": false,
   "use": "Risk acceptance review: formal acceptance of a finding with the reason, the owner and the review date. Use when a finding will not be fixed in the agreed time.",
   "prompt": "Use the rlm-risk-acceptance-review skill.",
   "input": "",
   "output": "",
   "pros": [],
   "cons": [],
   "items": [
    "input-1",
    "input-2",
    "input-3",
    "input-4",
    "input-5",
    "input-6"
   ],
   "steps": [
    {
     "layout": "row",
     "note": "List the accepted risks with their findings."
    },
    {
     "layout": "chunks",
     "note": "Check the reason. Each acceptance states why fixing is not possible now.",
     "groups": [
      0,
      0,
      1,
      1,
      2,
      2
     ]
    },
    {
     "layout": "parallel",
     "note": "Check the approver. The approver has the authority for the risk level.",
     "groups": [
      0,
      0,
      1,
      1,
      2,
      2
     ],
     "state": [
      "ok",
      "ok",
      "ok",
      "ok",
      "ok",
      "ok"
     ]
    },
    {
     "layout": "funnel",
     "note": "Check the review date. Each acceptance has a date to revisit it."
    },
    {
     "layout": "gate",
     "note": "Report. The accepted risks, their approvers and those due for review.",
     "pass": [
      true,
      true,
      true,
      true,
      true,
      false
     ]
    }
   ],
   "outcome": null,
   "idea": "",
   "why": "",
   "protocol": [
    {
     "title": "List the accepted risks with their findings",
     "text": ""
    },
    {
     "title": "Check the reason",
     "text": "Each acceptance states why fixing is not possible now."
    },
    {
     "title": "Check the approver",
     "text": "The approver has the authority for the risk level."
    },
    {
     "title": "Check the review date",
     "text": "Each acceptance has a date to revisit it."
    },
    {
     "title": "Report",
     "text": "The accepted risks, their approvers and those due for review."
    }
   ],
   "path": ".github/skills/rlm-risk-acceptance-review",
   "files": [],
   "helperScripts": 0,
   "notChecked": true,
   "group": "vulnerability",
   "grade": {
    "grade": "B+",
    "score": "3.85",
    "scores": [
     4,
     4,
     4,
     3,
     4
    ],
    "design": true,
    "rank": 96
   }
  },
  {
   "id": "rlm-ruby-review",
   "goal": "Review Ruby and Rails-style code for injection, mass assignment, dynamic code, callbacks and tests.",
   "cat": "Installed",
   "on": false,
   "use": "Review Ruby and Rails-style code for injection, mass assignment, dynamic code, callbacks and tests. Use when asked to review or harden a Ruby project or module.",
   "prompt": "Use the rlm-ruby-review skill.",
   "input": "",
   "output": "",
   "pros": [],
   "cons": [],
   "items": [
    "input-1",
    "input-2",
    "input-3",
    "input-4",
    "input-5",
    "input-6"
   ],
   "steps": [
    {
     "layout": "row",
     "note": "Read the project setup. Open the Gemfile, the lock file, the Ruby version and any Rails configuration."
    },
    {
     "layout": "chunks",
     "note": "Check injection. Flag SQL built with string interpolation, and user input passed to system, backticks or eval.",
     "groups": [
      0,
      0,
      1,
      1,
      2,
      2
     ]
    },
    {
     "layout": "parallel",
     "note": "Check mass assignment. Flag models that accept every parameter.",
     "groups": [
      0,
      0,
      1,
      1,
      2,
      2
     ],
     "state": [
      "ok",
      "ok",
      "ok",
      "ok",
      "ok",
      "ok"
     ]
    },
    {
     "layout": "funnel",
     "note": "Check dynamic code. Flag send, instance_eval and constantize on user input."
    },
    {
     "layout": "gate",
     "note": "Check callbacks. Flag callbacks that call external services, which make saves slow and hard to test.",
     "pass": [
      true,
      true,
      true,
      true,
      true,
      false
     ]
    },
    {
     "layout": "doc",
     "note": "Report. List each finding with its file and line, severity and the fix.",
     "docLabel": "report"
    }
   ],
   "outcome": null,
   "idea": "",
   "why": "",
   "protocol": [
    {
     "title": "Read the project setup",
     "text": "Open the Gemfile, the lock file, the Ruby version and any Rails configuration."
    },
    {
     "title": "Check injection",
     "text": "Flag SQL built with string interpolation, and user input passed to system, backticks or eval."
    },
    {
     "title": "Check mass assignment",
     "text": "Flag models that accept every parameter. Permitted attributes must be listed."
    },
    {
     "title": "Check dynamic code",
     "text": "Flag send, instance_eval and constantize on user input."
    },
    {
     "title": "Check callbacks",
     "text": "Flag callbacks that call external services, which make saves slow and hard to test."
    },
    {
     "title": "Report",
     "text": "List each finding with its file and line, severity and the fix. Mark what you did not run."
    }
   ],
   "path": ".github/skills/rlm-ruby-review",
   "files": [],
   "helperScripts": 0,
   "notChecked": true,
   "group": "languages",
   "grade": {
    "grade": "B",
    "score": "3.45",
    "scores": [
     4,
     3,
     3,
     3,
     4
    ],
    "design": true,
    "rank": 199
   }
  },
  {
   "id": "rlm-runtime-vulnerability-review",
   "goal": "Runtime vulnerability review: vulnerable components found in running systems, not only in code.",
   "cat": "Installed",
   "on": false,
   "use": "Runtime vulnerability review: vulnerable components found in running systems, not only in code. Use when a scan of running systems reports findings.",
   "prompt": "Use the rlm-runtime-vulnerability-review skill.",
   "input": "",
   "output": "",
   "pros": [],
   "cons": [],
   "items": [
    "input-1",
    "input-2",
    "input-3",
    "input-4",
    "input-5",
    "input-6"
   ],
   "steps": [
    {
     "layout": "row",
     "note": "List the running systems and the components in them."
    },
    {
     "layout": "chunks",
     "note": "Match components to advisories. Note the version actually running.",
     "groups": [
      0,
      0,
      1,
      1,
      2,
      2
     ]
    },
    {
     "layout": "parallel",
     "note": "Check reachability. Note whether the vulnerable code runs in this system.",
     "groups": [
      0,
      0,
      1,
      1,
      2,
      2
     ],
     "state": [
      "ok",
      "ok",
      "ok",
      "ok",
      "ok",
      "ok"
     ]
    },
    {
     "layout": "funnel",
     "note": "Check the drift. Flag running versions that differ from the code."
    },
    {
     "layout": "gate",
     "note": "Report. Each running component, its advisory, reachability and the fix.",
     "pass": [
      true,
      true,
      true,
      true,
      true,
      false
     ]
    }
   ],
   "outcome": null,
   "idea": "",
   "why": "",
   "protocol": [
    {
     "title": "List the running systems and the components in them",
     "text": ""
    },
    {
     "title": "Match components to advisories",
     "text": "Note the version actually running."
    },
    {
     "title": "Check reachability",
     "text": "Note whether the vulnerable code runs in this system."
    },
    {
     "title": "Check the drift",
     "text": "Flag running versions that differ from the code."
    },
    {
     "title": "Report",
     "text": "Each running component, its advisory, reachability and the fix."
    }
   ],
   "path": ".github/skills/rlm-runtime-vulnerability-review",
   "files": [],
   "helperScripts": 0,
   "notChecked": true,
   "group": "vulnerability",
   "grade": {
    "grade": "B+",
    "score": "3.75",
    "scores": [
     4,
     4,
     4,
     3,
     3
    ],
    "design": true,
    "rank": 145
   }
  },
  {
   "id": "rlm-rust-review",
   "goal": "Review Rust code for unsafe blocks, error handling, panics, concurrency and dependency features.",
   "cat": "Installed",
   "on": false,
   "use": "Review Rust code for unsafe blocks, error handling, panics, concurrency and dependency features. Use when asked to review or harden a Rust crate or service.",
   "prompt": "Use the rlm-rust-review skill.",
   "input": "",
   "output": "",
   "pros": [],
   "cons": [],
   "items": [
    "input-1",
    "input-2",
    "input-3",
    "input-4",
    "input-5",
    "input-6"
   ],
   "steps": [
    {
     "layout": "row",
     "note": "Read the crate setup. Open Cargo.toml, the lock file, the edition and any feature flags."
    },
    {
     "layout": "chunks",
     "note": "Check unsafe blocks. Every unsafe block needs a comment that states the invariant it relies on.",
     "groups": [
      0,
      0,
      1,
      1,
      2,
      2
     ]
    },
    {
     "layout": "parallel",
     "note": "Check error handling. Flag unwrap and expect on values from outside the program, and errors turned into panics.",
     "groups": [
      0,
      0,
      1,
      1,
      2,
      2
     ],
     "state": [
      "ok",
      "ok",
      "ok",
      "ok",
      "ok",
      "ok"
     ]
    },
    {
     "layout": "funnel",
     "note": "Check panics. Panics in library code or request handlers take the service down."
    },
    {
     "layout": "gate",
     "note": "Check concurrency. Flag shared state without the right wrapper, and blocking calls inside async code.",
     "pass": [
      true,
      true,
      true,
      true,
      true,
      false
     ]
    },
    {
     "layout": "doc",
     "note": "Report. List each finding with its file and line, severity and the fix.",
     "docLabel": "report"
    }
   ],
   "outcome": null,
   "idea": "",
   "why": "",
   "protocol": [
    {
     "title": "Read the crate setup",
     "text": "Open Cargo.toml, the lock file, the edition and any feature flags."
    },
    {
     "title": "Check unsafe blocks",
     "text": "Every unsafe block needs a comment that states the invariant it relies on. Flag blocks with no invariant."
    },
    {
     "title": "Check error handling",
     "text": "Flag unwrap and expect on values from outside the program, and errors turned into panics."
    },
    {
     "title": "Check panics",
     "text": "Panics in library code or request handlers take the service down. Flag them."
    },
    {
     "title": "Check concurrency",
     "text": "Flag shared state without the right wrapper, and blocking calls inside async code."
    },
    {
     "title": "Report",
     "text": "List each finding with its file and line, severity and the fix. Mark what you did not run."
    }
   ],
   "path": ".github/skills/rlm-rust-review",
   "files": [],
   "helperScripts": 0,
   "notChecked": true,
   "group": "languages",
   "grade": {
    "grade": "B+",
    "score": "3.95",
    "scores": [
     4,
     4,
     5,
     3,
     3
    ],
    "design": true,
    "rank": 42
   }
  },
  {
   "id": "rlm-sbom-review",
   "goal": "Review a software bill of materials (SBOM): whether it is complete, current and usable for vulnerability and…",
   "cat": "Installed",
   "on": false,
   "use": "Review a software bill of materials (SBOM): whether it is complete, current and usable for vulnerability and licence checks. Use when an SBOM is produced or asked for by a customer or audit.",
   "prompt": "Use the rlm-sbom-review skill.",
   "input": "",
   "output": "",
   "pros": [],
   "cons": [],
   "items": [
    "input-1",
    "input-2",
    "input-3",
    "input-4",
    "input-5",
    "input-6"
   ],
   "steps": [
    {
     "layout": "row",
     "note": "Read the SBOM. Open the SBOM file, its format (SPDX or CycloneDX) and the tool that made it."
    },
    {
     "layout": "chunks",
     "note": "Check completeness. Compare the SBOM with the lock files.",
     "groups": [
      0,
      0,
      1,
      1,
      2,
      2
     ]
    },
    {
     "layout": "parallel",
     "note": "Check the identifiers. Each component needs a name, version and a package identifier (purl or CPE) so it can be matched to advisories.",
     "groups": [
      0,
      0,
      1,
      1,
      2,
      2
     ],
     "state": [
      "ok",
      "ok",
      "ok",
      "ok",
      "ok",
      "ok"
     ]
    },
    {
     "layout": "funnel",
     "note": "Check currency. An SBOM must be produced for each release."
    },
    {
     "layout": "gate",
     "note": "Check the licences. Note components with no licence recorded, for the licence check.",
     "pass": [
      true,
      true,
      true,
      true,
      true,
      false
     ]
    },
    {
     "layout": "doc",
     "note": "Report. List the gaps, with the component, the problem and the fix.",
     "docLabel": "report"
    }
   ],
   "outcome": null,
   "idea": "",
   "why": "",
   "protocol": [
    {
     "title": "Read the SBOM",
     "text": "Open the SBOM file, its format (SPDX or CycloneDX) and the tool that made it."
    },
    {
     "title": "Check completeness",
     "text": "Compare the SBOM with the lock files. Flag packages missing from it, including transitive ones."
    },
    {
     "title": "Check the identifiers",
     "text": "Each component needs a name, version and a package identifier (purl or CPE) so it can be matched to advisories."
    },
    {
     "title": "Check currency",
     "text": "An SBOM must be produced for each release. Flag an SBOM older than the code it describes."
    },
    {
     "title": "Check the licences",
     "text": "Note components with no licence recorded, for the licence check."
    },
    {
     "title": "Report",
     "text": "List the gaps, with the component, the problem and the fix. State whether the SBOM can be used for vulnerability matching."
    }
   ],
   "path": ".github/skills/rlm-sbom-review",
   "files": [],
   "helperScripts": 0,
   "notChecked": true,
   "group": "vulnerability",
   "grade": {
    "grade": "B+",
    "score": "3.70",
    "scores": [
     4,
     3,
     4,
     4,
     3
    ],
    "design": true,
    "rank": 158
   }
  },
  {
   "id": "rlm-scala-review",
   "goal": "Scala review: implicit scope, blocking in futures, pattern match gaps and serialisation.",
   "cat": "Installed",
   "on": false,
   "use": "Scala review: implicit scope, blocking in futures, pattern match gaps and serialisation. Use when asked to review a Scala project or module.",
   "prompt": "Use the rlm-scala-review skill.",
   "input": "",
   "output": "",
   "pros": [],
   "cons": [],
   "items": [
    "input-1",
    "input-2",
    "input-3",
    "input-4",
    "input-5",
    "input-6"
   ],
   "steps": [
    {
     "layout": "row",
     "note": "Read the project setup. The build tool, Scala version and compiler flags."
    },
    {
     "layout": "chunks",
     "note": "Check implicits. Flag implicits that change behaviour silently.",
     "groups": [
      0,
      0,
      1,
      1,
      2,
      2
     ]
    },
    {
     "layout": "parallel",
     "note": "Check futures. Flag blocking calls inside futures.",
     "groups": [
      0,
      0,
      1,
      1,
      2,
      2
     ],
     "state": [
      "ok",
      "ok",
      "ok",
      "ok",
      "ok",
      "ok"
     ]
    },
    {
     "layout": "funnel",
     "note": "Check matches. Flag non-exhaustive pattern matches on sealed types."
    },
    {
     "layout": "gate",
     "note": "Report. Each finding with file and line, severity and the fix.",
     "pass": [
      true,
      true,
      true,
      true,
      true,
      false
     ]
    }
   ],
   "outcome": null,
   "idea": "",
   "why": "",
   "protocol": [
    {
     "title": "Read the project setup",
     "text": "The build tool, Scala version and compiler flags."
    },
    {
     "title": "Check implicits",
     "text": "Flag implicits that change behaviour silently."
    },
    {
     "title": "Check futures",
     "text": "Flag blocking calls inside futures."
    },
    {
     "title": "Check matches",
     "text": "Flag non-exhaustive pattern matches on sealed types."
    },
    {
     "title": "Report",
     "text": "Each finding with file and line, severity and the fix."
    }
   ],
   "path": ".github/skills/rlm-scala-review",
   "files": [],
   "helperScripts": 0,
   "notChecked": true,
   "group": "languages",
   "grade": {
    "grade": "B",
    "score": "3.65",
    "scores": [
     4,
     4,
     3,
     3,
     4
    ],
    "design": true,
    "rank": 175
   }
  },
  {
   "id": "rlm-scanner-tuning",
   "goal": "Scanner tuning review: rules that are noisy, rules that are missing and exclusions that have expired.",
   "cat": "Installed",
   "on": false,
   "use": "Scanner tuning review: rules that are noisy, rules that are missing and exclusions that have expired. Use when a scanner produces too many false positives or misses a known issue.",
   "prompt": "Use the rlm-scanner-tuning skill.",
   "input": "",
   "output": "",
   "pros": [],
   "cons": [],
   "items": [
    "input-1",
    "input-2",
    "input-3",
    "input-4",
    "input-5",
    "input-6"
   ],
   "steps": [
    {
     "layout": "row",
     "note": "List the rules enabled and disabled, with the reason for each."
    },
    {
     "layout": "chunks",
     "note": "Check noise. Rules that flag the same accepted pattern repeatedly.",
     "groups": [
      0,
      0,
      1,
      1,
      2,
      2
     ]
    },
    {
     "layout": "parallel",
     "note": "Check gaps. Known issues the scanner should have flagged.",
     "groups": [
      0,
      0,
      1,
      1,
      2,
      2
     ],
     "state": [
      "ok",
      "ok",
      "ok",
      "ok",
      "ok",
      "ok"
     ]
    },
    {
     "layout": "funnel",
     "note": "Check exclusions. Each exclusion needs a reason and an expiry."
    },
    {
     "layout": "gate",
     "note": "Report. The rules to enable, disable or tune, with the reason for each.",
     "pass": [
      true,
      true,
      true,
      true,
      true,
      false
     ]
    }
   ],
   "outcome": null,
   "idea": "",
   "why": "",
   "protocol": [
    {
     "title": "List the rules enabled and disabled, with the reason for each",
     "text": ""
    },
    {
     "title": "Check noise",
     "text": "Rules that flag the same accepted pattern repeatedly."
    },
    {
     "title": "Check gaps",
     "text": "Known issues the scanner should have flagged."
    },
    {
     "title": "Check exclusions",
     "text": "Each exclusion needs a reason and an expiry."
    },
    {
     "title": "Report",
     "text": "The rules to enable, disable or tune, with the reason for each."
    }
   ],
   "path": ".github/skills/rlm-scanner-tuning",
   "files": [],
   "helperScripts": 0,
   "notChecked": true,
   "group": "vulnerability",
   "grade": {
    "grade": "B+",
    "score": "3.75",
    "scores": [
     4,
     4,
     4,
     3,
     3
    ],
    "design": true,
    "rank": 146
   }
  },
  {
   "id": "rlm-schema-review",
   "goal": "Data schema review: column types, nullability, keys and changes that break readers.",
   "cat": "Installed",
   "on": false,
   "use": "Data schema review: column types, nullability, keys and changes that break readers. Use when a table or message schema is created or changed.",
   "prompt": "Use the rlm-schema-review skill.",
   "input": "",
   "output": "",
   "pros": [],
   "cons": [],
   "items": [
    "input-1",
    "input-2",
    "input-3",
    "input-4",
    "input-5",
    "input-6"
   ],
   "steps": [
    {
     "layout": "row",
     "note": "List the schema. Each field with its type, nullability and key."
    },
    {
     "layout": "chunks",
     "note": "Check the types. Flag money stored as floating point and dates stored as text.",
     "groups": [
      0,
      0,
      1,
      1,
      2,
      2
     ]
    },
    {
     "layout": "parallel",
     "note": "Check the keys. Flag tables with no key or a key that is not unique.",
     "groups": [
      0,
      0,
      1,
      1,
      2,
      2
     ],
     "state": [
      "ok",
      "ok",
      "ok",
      "ok",
      "ok",
      "ok"
     ]
    },
    {
     "layout": "funnel",
     "note": "Check changes. Flag renamed, removed or retyped fields that break existing readers."
    },
    {
     "layout": "gate",
     "note": "Report. Each finding with its field, the problem and the safe change.",
     "pass": [
      true,
      true,
      true,
      true,
      true,
      false
     ]
    }
   ],
   "outcome": null,
   "idea": "",
   "why": "",
   "protocol": [
    {
     "title": "List the schema",
     "text": "Each field with its type, nullability and key."
    },
    {
     "title": "Check the types",
     "text": "Flag money stored as floating point and dates stored as text."
    },
    {
     "title": "Check the keys",
     "text": "Flag tables with no key or a key that is not unique."
    },
    {
     "title": "Check changes",
     "text": "Flag renamed, removed or retyped fields that break existing readers."
    },
    {
     "title": "Report",
     "text": "Each finding with its field, the problem and the safe change."
    }
   ],
   "path": ".github/skills/rlm-schema-review",
   "files": [],
   "helperScripts": 0,
   "notChecked": true,
   "group": "engineering",
   "grade": {
    "grade": "B+",
    "score": "3.85",
    "scores": [
     4,
     4,
     4,
     3,
     4
    ],
    "design": true,
    "rank": 97
   }
  },
  {
   "id": "rlm-secrets-review",
   "goal": "Review how secrets are stored, rotated, passed to code and kept out of logs and source.",
   "cat": "Installed",
   "on": false,
   "use": "Review how secrets are stored, rotated, passed to code and kept out of logs and source. Use when keys, tokens or passwords are added or moved.",
   "prompt": "Use the rlm-secrets-review skill.",
   "input": "",
   "output": "",
   "pros": [],
   "cons": [],
   "items": [
    "input-1",
    "input-2",
    "input-3",
    "input-4",
    "input-5",
    "input-6"
   ],
   "steps": [
    {
     "layout": "row",
     "note": "Find the secrets. List API keys, tokens, passwords and certificates the code uses, and where each one is read."
    },
    {
     "layout": "chunks",
     "note": "Check the source. Flag secrets in source files, configuration, examples and test fixtures.",
     "groups": [
      0,
      0,
      1,
      1,
      2,
      2
     ]
    },
    {
     "layout": "parallel",
     "note": "Check storage. Secrets belong in a secret store or the environment, not in files that are committed.",
     "groups": [
      0,
      0,
      1,
      1,
      2,
      2
     ],
     "state": [
      "ok",
      "ok",
      "ok",
      "ok",
      "ok",
      "ok"
     ]
    },
    {
     "layout": "funnel",
     "note": "Check logs and errors. Flag secrets written to logs, error messages, URLs or analytics."
    },
    {
     "layout": "gate",
     "note": "Check rotation. Each secret needs a way to rotate without a code change.",
     "pass": [
      true,
      true,
      true,
      true,
      true,
      false
     ]
    },
    {
     "layout": "doc",
     "note": "Report. List each finding with its location, severity and the fix.",
     "docLabel": "report"
    }
   ],
   "outcome": null,
   "idea": "",
   "why": "",
   "protocol": [
    {
     "title": "Find the secrets",
     "text": "List API keys, tokens, passwords and certificates the code uses, and where each one is read."
    },
    {
     "title": "Check the source",
     "text": "Flag secrets in source files, configuration, examples and test fixtures."
    },
    {
     "title": "Check storage",
     "text": "Secrets belong in a secret store or the environment, not in files that are committed."
    },
    {
     "title": "Check logs and errors",
     "text": "Flag secrets written to logs, error messages, URLs or analytics."
    },
    {
     "title": "Check rotation",
     "text": "Each secret needs a way to rotate without a code change. Flag secrets that can never change."
    },
    {
     "title": "Report",
     "text": "List each finding with its location, severity and the fix. Treat any secret found in source as exposed, and say so."
    }
   ],
   "path": ".github/skills/rlm-secrets-review",
   "files": [],
   "helperScripts": 0,
   "notChecked": true,
   "group": "security",
   "grade": {
    "grade": "A-",
    "score": "4.05",
    "scores": [
     5,
     4,
     4,
     2,
     4
    ],
    "design": true,
    "rank": 31
   }
  },
  {
   "id": "rlm-security-audit",
   "goal": "Security audit of a large repository or folder using Recursive Language Model (RLM) decomposition.",
   "cat": "Installed",
   "on": false,
   "use": "Security audit of a large repository or folder using Recursive Language Model (RLM) decomposition. Use when asked to audit code for vulnerabilities, leaked secrets, injection, unsafe deserialization or insecure configuration, especially when the code is too large to read in one pass.",
   "prompt": "Use the rlm-security-audit skill.",
   "input": "",
   "output": "",
   "pros": [],
   "cons": [],
   "items": [
    "input-1",
    "input-2",
    "input-3",
    "input-4",
    "input-5",
    "input-6"
   ],
   "steps": [
    {
     "layout": "row",
     "note": "Inspect. Run `python3 <skill>/scripts/rlm_corpus.py scan <repo>`."
    },
    {
     "layout": "chunks",
     "note": "Partition. Run `WORK=$(mktemp -d)`, then `python3 <skill>/scripts/rlm_corpus.py chunk <repo> \"$WORK/chunks\"`.",
     "groups": [
      0,
      0,
      1,
      1,
      2,
      2
     ]
    },
    {
     "layout": "parallel",
     "note": "Map. For each chunk, run a fresh sub-task (a subagent if you can start one) that sees only that chunk file and the \"Chunk task\" below.",
     "groups": [
      0,
      0,
      1,
      1,
      2,
      2
     ],
     "state": [
      "ok",
      "ok",
      "ok",
      "ok",
      "ok",
      "ok"
     ]
    },
    {
     "layout": "funnel",
     "note": "Reduce. Run `python3 <skill>/scripts/rlm_corpus.py merge \"$WORK/out\" --out \"$WORK/merged.json\"`."
    },
    {
     "layout": "gate",
     "note": "Verify. For every high-severity item, open the file at the cited line and confirm the issue is real and reachable.",
     "pass": [
      true,
      true,
      true,
      true,
      true,
      false
     ]
    },
    {
     "layout": "doc",
     "note": "Report. Write the report in the format below.",
     "docLabel": "report"
    }
   ],
   "outcome": null,
   "idea": "",
   "why": "",
   "protocol": [
    {
     "title": "Inspect",
     "text": "Run `python3 <skill>/scripts/rlm_corpus.py scan <repo>`. Note the file count, line count and top-level folders. If the corpus is very large, agree the scope with the user, then narrow it with `--include 'src/*'` (repeatable) on every command. Files over 20 MB are skipped; `--max-bytes N` changes the limit. Report what `scan` lists as skipped."
    },
    {
     "title": "Partition",
     "text": "Run `WORK=$(mktemp -d)`, then `python3 <skill>/scripts/rlm_corpus.py chunk <repo> \"$WORK/chunks\"`. Chunks are limited to 800 lines and 100,000 characters each, and are cut between definitions where possible. Each `chunk_NNN.md` holds the data notice and labelled file sections. `manifest.json` lists the chunks."
    },
    {
     "title": "Map",
     "text": "For each chunk, run a fresh sub-task (a subagent if you can start one) that sees only that chunk file and the \"Chunk task\" below. It writes `\"$WORK/out/<chunk>.out.md\"`. If you cannot start sub-tasks, run `python3 <skill>/scripts/rlm_corpus.py pending \"$WORK/chunks\" \"$WORK/out\"`. It lists the chunks that still have no output. Process the first one: read it, write its output, then run `pending` again. Repeat until nothing is pending. Never hold all chunks in context at once."
    },
    {
     "title": "Reduce",
     "text": "Run `python3 <skill>/scripts/rlm_corpus.py merge \"$WORK/out\" --out \"$WORK/merged.json\"`. If it lists `failed_outputs`, re-run those chunks. A missing or invalid output is not \"no findings\". If the merged list is still too large to read, repeat steps 2 to 4 on the findings."
    },
    {
     "title": "Verify",
     "text": "For every high-severity item, open the file at the cited line and confirm the issue is real and reachable. Drop false positives and say so in the report."
    },
    {
     "title": "Report",
     "text": "Write the report in the format below."
    },
    {
     "title": "Clean up",
     "text": "Delete `$WORK` after the report is delivered."
    }
   ],
   "path": ".github/skills/rlm-security-audit",
   "files": [
    "scripts/rlm_corpus.py"
   ],
   "helperScripts": 1,
   "notChecked": true,
   "group": "security",
   "grade": {
    "grade": "A+",
    "score": "4.70",
    "scores": [
     5,
     5,
     5,
     3,
     5
    ],
    "design": true,
    "rank": 2
   }
  },
  {
   "id": "rlm-security-gate",
   "goal": "Set and apply security gate rules: what must pass before a change can merge or ship, with the pass and fail t…",
   "cat": "Installed",
   "on": false,
   "use": "Set and apply security gate rules: what must pass before a change can merge or ship, with the pass and fail thresholds written out. Use when a team needs a merge or release gate.",
   "prompt": "Use the rlm-security-gate skill.",
   "input": "",
   "output": "",
   "pros": [],
   "cons": [],
   "items": [
    "input-1",
    "input-2",
    "input-3",
    "input-4",
    "input-5",
    "input-6"
   ],
   "steps": [
    {
     "layout": "row",
     "note": "Read the pipeline. Open the CI configuration and note which security checks already run: static analysis, dependency checks, secret scanning and tests."
    },
    {
     "layout": "chunks",
     "note": "Define the gates. For each check, write the rule: block on any new high or critical finding, block on a secret, block on a dependency with a known exploit, and warn on medium findings.",
     "groups": [
      0,
      0,
      1,
      1,
      2,
      2
     ]
    },
    {
     "layout": "parallel",
     "note": "Separate new from old. A gate should block on findings introduced by the change, not on every old finding.",
     "groups": [
      0,
      0,
      1,
      1,
      2,
      2
     ],
     "state": [
      "ok",
      "ok",
      "ok",
      "ok",
      "ok",
      "ok"
     ]
    },
    {
     "layout": "funnel",
     "note": "Check the bypass path. Flag any way to skip a gate: skipped steps, allowed-to-fail flags, or an approval that is not recorded."
    },
    {
     "layout": "gate",
     "note": "Check evidence. Each gate run should leave a result that can be looked up later: the commit, the tool version, the findings and the decision.",
     "pass": [
      true,
      true,
      true,
      true,
      true,
      false
     ]
    },
    {
     "layout": "doc",
     "note": "Report. List the gates as a table: check, rule, action (block or warn), owner.",
     "docLabel": "report"
    }
   ],
   "outcome": null,
   "idea": "",
   "why": "",
   "protocol": [
    {
     "title": "Read the pipeline",
     "text": "Open the CI configuration and note which security checks already run: static analysis, dependency checks, secret scanning and tests."
    },
    {
     "title": "Define the gates",
     "text": "For each check, write the rule: block on any new high or critical finding, block on a secret, block on a dependency with a known exploit, and warn on medium findings. Record the threshold."
    },
    {
     "title": "Separate new from old",
     "text": "A gate should block on findings introduced by the change, not on every old finding. Record the baseline, and how it is updated."
    },
    {
     "title": "Check the bypass path",
     "text": "Flag any way to skip a gate: skipped steps, allowed-to-fail flags, or an approval that is not recorded. Each bypass needs a named owner and an expiry."
    },
    {
     "title": "Check evidence",
     "text": "Each gate run should leave a result that can be looked up later: the commit, the tool version, the findings and the decision."
    },
    {
     "title": "Report",
     "text": "List the gates as a table: check, rule, action (block or warn), owner. Then list the gaps where a gate is missing. Mark what you did not run."
    }
   ],
   "path": ".github/skills/rlm-security-gate",
   "files": [],
   "helperScripts": 0,
   "notChecked": true,
   "group": "gates",
   "grade": {
    "grade": "B+",
    "score": "3.95",
    "scores": [
     5,
     4,
     4,
     2,
     3
    ],
    "design": true,
    "rank": 43
   }
  },
  {
   "id": "rlm-segregation-of-duties",
   "goal": "Segregation of duties check: the author, reviewer and deployer of a change are different people.",
   "cat": "Installed",
   "on": false,
   "use": "Segregation of duties check: the author, reviewer and deployer of a change are different people. Use when a team sets roles for code, review and release.",
   "prompt": "Use the rlm-segregation-of-duties skill.",
   "input": "",
   "output": "",
   "pros": [],
   "cons": [],
   "items": [
    "input-1",
    "input-2",
    "input-3",
    "input-4",
    "input-5",
    "input-6"
   ],
   "steps": [
    {
     "layout": "row",
     "note": "List the roles. Author, reviewer, approver and deployer."
    },
    {
     "layout": "chunks",
     "note": "Check conflicts. Flag people who hold conflicting roles on the same change.",
     "groups": [
      0,
      0,
      1,
      1,
      2,
      2
     ]
    },
    {
     "layout": "parallel",
     "note": "Check the pipeline. Flag accounts that can merge and deploy with no review.",
     "groups": [
      0,
      0,
      1,
      1,
      2,
      2
     ],
     "state": [
      "ok",
      "ok",
      "ok",
      "ok",
      "ok",
      "ok"
     ]
    },
    {
     "layout": "funnel",
     "note": "Check exceptions. Each exception needs an approval and an expiry."
    },
    {
     "layout": "gate",
     "note": "Report. The conflicts, the affected changes and the fix.",
     "pass": [
      true,
      true,
      true,
      true,
      true,
      false
     ]
    }
   ],
   "outcome": null,
   "idea": "",
   "why": "",
   "protocol": [
    {
     "title": "List the roles",
     "text": "Author, reviewer, approver and deployer."
    },
    {
     "title": "Check conflicts",
     "text": "Flag people who hold conflicting roles on the same change."
    },
    {
     "title": "Check the pipeline",
     "text": "Flag accounts that can merge and deploy with no review."
    },
    {
     "title": "Check exceptions",
     "text": "Each exception needs an approval and an expiry."
    },
    {
     "title": "Report",
     "text": "The conflicts, the affected changes and the fix."
    }
   ],
   "path": ".github/skills/rlm-segregation-of-duties",
   "files": [],
   "helperScripts": 0,
   "notChecked": true,
   "group": "compliance",
   "grade": {
    "grade": "B+",
    "score": "3.85",
    "scores": [
     4,
     4,
     4,
     3,
     4
    ],
    "design": true,
    "rank": 98
   }
  },
  {
   "id": "rlm-service-worker-review",
   "goal": "Service worker review: cached responses, update flow and scope.",
   "cat": "Installed",
   "on": false,
   "use": "Service worker review: cached responses, update flow and scope. Use when a service worker is added or changed.",
   "prompt": "Use the rlm-service-worker-review skill.",
   "input": "",
   "output": "",
   "pros": [],
   "cons": [],
   "items": [
    "input-1",
    "input-2",
    "input-3",
    "input-4",
    "input-5",
    "input-6"
   ],
   "steps": [
    {
     "layout": "row",
     "note": "Read the registration. Check the scope and the script location."
    },
    {
     "layout": "chunks",
     "note": "Check caching. Flag caching of private or authenticated responses.",
     "groups": [
      0,
      0,
      1,
      1,
      2,
      2
     ]
    },
    {
     "layout": "parallel",
     "note": "Check updates. Confirm a new version takes over without leaving users on stale code.",
     "groups": [
      0,
      0,
      1,
      1,
      2,
      2
     ],
     "state": [
      "ok",
      "ok",
      "ok",
      "ok",
      "ok",
      "ok"
     ]
    },
    {
     "layout": "funnel",
     "note": "Check failure. The offline fallback must not hide errors."
    },
    {
     "layout": "gate",
     "note": "Report. Each finding with file and line, severity and the fix.",
     "pass": [
      true,
      true,
      true,
      true,
      true,
      false
     ]
    }
   ],
   "outcome": null,
   "idea": "",
   "why": "",
   "protocol": [
    {
     "title": "Read the registration",
     "text": "Check the scope and the script location."
    },
    {
     "title": "Check caching",
     "text": "Flag caching of private or authenticated responses."
    },
    {
     "title": "Check updates",
     "text": "Confirm a new version takes over without leaving users on stale code."
    },
    {
     "title": "Check failure",
     "text": "The offline fallback must not hide errors."
    },
    {
     "title": "Report",
     "text": "Each finding with file and line, severity and the fix."
    }
   ],
   "path": ".github/skills/rlm-service-worker-review",
   "files": [],
   "helperScripts": 0,
   "notChecked": true,
   "group": "web",
   "grade": {
    "grade": "B",
    "score": "3.55",
    "scores": [
     4,
     3,
     4,
     3,
     3
    ],
    "design": true,
    "rank": 191
   }
  },
  {
   "id": "rlm-session-management-review",
   "goal": "Session management review: session IDs, expiry, rotation on sign-in and revocation.",
   "cat": "Installed",
   "on": false,
   "use": "Session management review: session IDs, expiry, rotation on sign-in and revocation. Use when code creates, stores or ends sessions.",
   "prompt": "Use the rlm-session-management-review skill.",
   "input": "",
   "output": "",
   "pros": [],
   "cons": [],
   "items": [
    "input-1",
    "input-2",
    "input-3",
    "input-4",
    "input-5",
    "input-6"
   ],
   "steps": [
    {
     "layout": "row",
     "note": "Check creation. Sessions need random IDs of enough length."
    },
    {
     "layout": "chunks",
     "note": "Check rotation. The ID must change after sign-in.",
     "groups": [
      0,
      0,
      1,
      1,
      2,
      2
     ]
    },
    {
     "layout": "parallel",
     "note": "Check expiry. Flag sessions with no idle or absolute timeout.",
     "groups": [
      0,
      0,
      1,
      1,
      2,
      2
     ],
     "state": [
      "ok",
      "ok",
      "ok",
      "ok",
      "ok",
      "ok"
     ]
    },
    {
     "layout": "funnel",
     "note": "Check revocation. Sign-out and password change must end the session."
    },
    {
     "layout": "gate",
     "note": "Report. Each finding with file and line, severity and the fix.",
     "pass": [
      true,
      true,
      true,
      true,
      true,
      false
     ]
    }
   ],
   "outcome": null,
   "idea": "",
   "why": "",
   "protocol": [
    {
     "title": "Check creation",
     "text": "Sessions need random IDs of enough length."
    },
    {
     "title": "Check rotation",
     "text": "The ID must change after sign-in."
    },
    {
     "title": "Check expiry",
     "text": "Flag sessions with no idle or absolute timeout."
    },
    {
     "title": "Check revocation",
     "text": "Sign-out and password change must end the session."
    },
    {
     "title": "Report",
     "text": "Each finding with file and line, severity and the fix."
    }
   ],
   "path": ".github/skills/rlm-session-management-review",
   "files": [],
   "helperScripts": 0,
   "notChecked": true,
   "group": "security",
   "grade": {
    "grade": "B+",
    "score": "3.85",
    "scores": [
     4,
     4,
     4,
     3,
     4
    ],
    "design": true,
    "rank": 99
   }
  },
  {
   "id": "rlm-shell-script-review",
   "goal": "Shell script review: quoting, error handling, temporary files and command injection.",
   "cat": "Installed",
   "on": false,
   "use": "Shell script review: quoting, error handling, temporary files and command injection. Use when asked to review a shell script or pipeline step.",
   "prompt": "Use the rlm-shell-script-review skill.",
   "input": "",
   "output": "",
   "pros": [],
   "cons": [],
   "items": [
    "input-1",
    "input-2",
    "input-3",
    "input-4",
    "input-5",
    "input-6"
   ],
   "steps": [
    {
     "layout": "row",
     "note": "Read the script. Its shell, its arguments and the commands it calls."
    },
    {
     "layout": "chunks",
     "note": "Check quoting. Flag unquoted variables that can split or expand.",
     "groups": [
      0,
      0,
      1,
      1,
      2,
      2
     ]
    },
    {
     "layout": "parallel",
     "note": "Check errors. Flag scripts without strict mode or error checks.",
     "groups": [
      0,
      0,
      1,
      1,
      2,
      2
     ],
     "state": [
      "ok",
      "ok",
      "ok",
      "ok",
      "ok",
      "ok"
     ]
    },
    {
     "layout": "funnel",
     "note": "Check temporary files. Flag predictable temporary names."
    },
    {
     "layout": "gate",
     "note": "Report. Each finding with line, severity and the fix.",
     "pass": [
      true,
      true,
      true,
      true,
      true,
      false
     ]
    }
   ],
   "outcome": null,
   "idea": "",
   "why": "",
   "protocol": [
    {
     "title": "Read the script",
     "text": "Its shell, its arguments and the commands it calls."
    },
    {
     "title": "Check quoting",
     "text": "Flag unquoted variables that can split or expand."
    },
    {
     "title": "Check errors",
     "text": "Flag scripts without strict mode or error checks."
    },
    {
     "title": "Check temporary files",
     "text": "Flag predictable temporary names."
    },
    {
     "title": "Report",
     "text": "Each finding with line, severity and the fix."
    }
   ],
   "path": ".github/skills/rlm-shell-script-review",
   "files": [],
   "helperScripts": 0,
   "notChecked": true,
   "group": "languages",
   "grade": {
    "grade": "B+",
    "score": "3.85",
    "scores": [
     4,
     4,
     4,
     3,
     4
    ],
    "design": true,
    "rank": 100
   }
  },
  {
   "id": "rlm-signalr-review",
   "goal": "SignalR review: hub authorisation, group membership and message validation.",
   "cat": "Installed",
   "on": false,
   "use": "SignalR review: hub authorisation, group membership and message validation. Use when a real-time hub is added or changed.",
   "prompt": "Use the rlm-signalr-review skill.",
   "input": "",
   "output": "",
   "pros": [],
   "cons": [],
   "items": [
    "input-1",
    "input-2",
    "input-3",
    "input-4",
    "input-5",
    "input-6"
   ],
   "steps": [
    {
     "layout": "row",
     "note": "List the hubs and the methods clients can call."
    },
    {
     "layout": "chunks",
     "note": "Check authorisation. Each hub method checks the caller's rights.",
     "groups": [
      0,
      0,
      1,
      1,
      2,
      2
     ]
    },
    {
     "layout": "parallel",
     "note": "Check groups. Membership must be checked before a client joins a group.",
     "groups": [
      0,
      0,
      1,
      1,
      2,
      2
     ],
     "state": [
      "ok",
      "ok",
      "ok",
      "ok",
      "ok",
      "ok"
     ]
    },
    {
     "layout": "funnel",
     "note": "Check messages. Incoming data must be validated like any request."
    },
    {
     "layout": "gate",
     "note": "Report. Each hub method with file and line, severity and the fix.",
     "pass": [
      true,
      true,
      true,
      true,
      true,
      false
     ]
    }
   ],
   "outcome": null,
   "idea": "",
   "why": "",
   "protocol": [
    {
     "title": "List the hubs and the methods clients can call",
     "text": ""
    },
    {
     "title": "Check authorisation",
     "text": "Each hub method checks the caller's rights."
    },
    {
     "title": "Check groups",
     "text": "Membership must be checked before a client joins a group."
    },
    {
     "title": "Check messages",
     "text": "Incoming data must be validated like any request."
    },
    {
     "title": "Report",
     "text": "Each hub method with file and line, severity and the fix."
    }
   ],
   "path": ".github/skills/rlm-signalr-review",
   "files": [],
   "helperScripts": 0,
   "notChecked": true,
   "group": "dotnet",
   "grade": {
    "grade": "B+",
    "score": "3.75",
    "scores": [
     4,
     4,
     4,
     3,
     3
    ],
    "design": true,
    "rank": 147
   }
  },
  {
   "id": "rlm-soc2-evidence",
   "goal": "Map the code and pipeline to SOC 2 control areas and list the evidence each control needs, and what is missin…",
   "cat": "Installed",
   "on": false,
   "use": "Map the code and pipeline to SOC 2 control areas and list the evidence each control needs, and what is missing. Use when preparing for a SOC 2 review. This is a technical aid, not an attestation.",
   "prompt": "Use the rlm-soc2-evidence skill.",
   "input": "",
   "output": "",
   "pros": [],
   "cons": [],
   "items": [
    "input-1",
    "input-2",
    "input-3",
    "input-4",
    "input-5",
    "input-6"
   ],
   "steps": [
    {
     "layout": "row",
     "note": "Read the scope. Identify the trust services criteria in scope, as the user states them."
    },
    {
     "layout": "chunks",
     "note": "Map the controls. For each control area, list the code, configuration and pipeline evidence that supports it.",
     "groups": [
      0,
      0,
      1,
      1,
      2,
      2
     ]
    },
    {
     "layout": "parallel",
     "note": "Check access evidence. Logins, role changes and access reviews should leave records.",
     "groups": [
      0,
      0,
      1,
      1,
      2,
      2
     ],
     "state": [
      "ok",
      "ok",
      "ok",
      "ok",
      "ok",
      "ok"
     ]
    },
    {
     "layout": "funnel",
     "note": "Check change evidence. Each change should have a review and a passing check, linked to a ticket."
    },
    {
     "layout": "gate",
     "note": "Check monitoring evidence. Alerts and incident records should exist for security events.",
     "pass": [
      true,
      true,
      true,
      true,
      true,
      false
     ]
    },
    {
     "layout": "doc",
     "note": "Report. For each control: evidence present, partly present, or missing, and what must be collected from outside the repository.",
     "docLabel": "report"
    }
   ],
   "outcome": null,
   "idea": "",
   "why": "",
   "protocol": [
    {
     "title": "Read the scope",
     "text": "Identify the trust services criteria in scope, as the user states them. Do not assume a scope."
    },
    {
     "title": "Map the controls",
     "text": "For each control area, list the code, configuration and pipeline evidence that supports it."
    },
    {
     "title": "Check access evidence",
     "text": "Logins, role changes and access reviews should leave records."
    },
    {
     "title": "Check change evidence",
     "text": "Each change should have a review and a passing check, linked to a ticket."
    },
    {
     "title": "Check monitoring evidence",
     "text": "Alerts and incident records should exist for security events."
    },
    {
     "title": "Report",
     "text": "For each control: evidence present, partly present, or missing, and what must be collected from outside the repository."
    }
   ],
   "path": ".github/skills/rlm-soc2-evidence",
   "files": [],
   "helperScripts": 0,
   "notChecked": true,
   "group": "compliance",
   "grade": {
    "grade": "B+",
    "score": "3.70",
    "scores": [
     4,
     4,
     4,
     2,
     4
    ],
    "design": true,
    "rank": 159
   }
  },
  {
   "id": "rlm-spa-performance-review",
   "goal": "Review a single page application for bundle size, render cost, data fetching and caching.",
   "cat": "Installed",
   "on": false,
   "use": "Review a single page application for bundle size, render cost, data fetching and caching. Use when a front end feels slow or a release grows the bundle.",
   "prompt": "Use the rlm-spa-performance-review skill.",
   "input": "",
   "output": "",
   "pros": [],
   "cons": [],
   "items": [
    "input-1",
    "input-2",
    "input-3",
    "input-4",
    "input-5",
    "input-6"
   ],
   "steps": [
    {
     "layout": "row",
     "note": "Read the build output. Open the bundle report, the entry points and the largest chunks."
    },
    {
     "layout": "chunks",
     "note": "Check bundle size. Flag large dependencies imported for one helper, and code not split by route.",
     "groups": [
      0,
      0,
      1,
      1,
      2,
      2
     ]
    },
    {
     "layout": "parallel",
     "note": "Check render cost. Flag components that re-render the whole tree on each change, and heavy work done during render.",
     "groups": [
      0,
      0,
      1,
      1,
      2,
      2
     ],
     "state": [
      "ok",
      "ok",
      "ok",
      "ok",
      "ok",
      "ok"
     ]
    },
    {
     "layout": "funnel",
     "note": "Check data fetching. Flag requests made in sequence that could run together, and data fetched again with no cache."
    },
    {
     "layout": "gate",
     "note": "Check images and fonts. Flag unoptimised images and fonts loaded before they are needed.",
     "pass": [
      true,
      true,
      true,
      true,
      true,
      false
     ]
    },
    {
     "layout": "doc",
     "note": "Report. List each finding with its file, the cost and the fix.",
     "docLabel": "report"
    }
   ],
   "outcome": null,
   "idea": "",
   "why": "",
   "protocol": [
    {
     "title": "Read the build output",
     "text": "Open the bundle report, the entry points and the largest chunks."
    },
    {
     "title": "Check bundle size",
     "text": "Flag large dependencies imported for one helper, and code not split by route."
    },
    {
     "title": "Check render cost",
     "text": "Flag components that re-render the whole tree on each change, and heavy work done during render."
    },
    {
     "title": "Check data fetching",
     "text": "Flag requests made in sequence that could run together, and data fetched again with no cache."
    },
    {
     "title": "Check images and fonts",
     "text": "Flag unoptimised images and fonts loaded before they are needed."
    },
    {
     "title": "Report",
     "text": "List each finding with its file, the cost and the fix. Mark what needs a profile to confirm."
    }
   ],
   "path": ".github/skills/rlm-spa-performance-review",
   "files": [],
   "helperScripts": 0,
   "notChecked": true,
   "group": "web",
   "grade": {
    "grade": "B",
    "score": "3.65",
    "scores": [
     4,
     3,
     4,
     3,
     4
    ],
    "design": true,
    "rank": 176
   }
  },
  {
   "id": "rlm-sql-review",
   "goal": "SQL review: injection in dynamic SQL, missing indexes, locking and destructive statements.",
   "cat": "Installed",
   "on": false,
   "use": "SQL review: injection in dynamic SQL, missing indexes, locking and destructive statements. Use when asked to review SQL scripts, queries or migrations.",
   "prompt": "Use the rlm-sql-review skill.",
   "input": "",
   "output": "",
   "pros": [],
   "cons": [],
   "items": [
    "input-1",
    "input-2",
    "input-3",
    "input-4",
    "input-5",
    "input-6"
   ],
   "steps": [
    {
     "layout": "row",
     "note": "List the statements. Queries, updates, deletes and migrations."
    },
    {
     "layout": "chunks",
     "note": "Check dynamic SQL. Flag statements built with string concatenation.",
     "groups": [
      0,
      0,
      1,
      1,
      2,
      2
     ]
    },
    {
     "layout": "parallel",
     "note": "Check indexes. Flag filters and joins on unindexed columns.",
     "groups": [
      0,
      0,
      1,
      1,
      2,
      2
     ],
     "state": [
      "ok",
      "ok",
      "ok",
      "ok",
      "ok",
      "ok"
     ]
    },
    {
     "layout": "funnel",
     "note": "Check locks. Flag long transactions and updates without batching."
    },
    {
     "layout": "gate",
     "note": "Check destructive statements. Flag deletes or drops with no where clause or backup.",
     "pass": [
      true,
      true,
      true,
      true,
      true,
      false
     ]
    }
   ],
   "outcome": null,
   "idea": "",
   "why": "",
   "protocol": [
    {
     "title": "List the statements",
     "text": "Queries, updates, deletes and migrations."
    },
    {
     "title": "Check dynamic SQL",
     "text": "Flag statements built with string concatenation."
    },
    {
     "title": "Check indexes",
     "text": "Flag filters and joins on unindexed columns."
    },
    {
     "title": "Check locks",
     "text": "Flag long transactions and updates without batching."
    },
    {
     "title": "Check destructive statements",
     "text": "Flag deletes or drops with no where clause or backup."
    }
   ],
   "path": ".github/skills/rlm-sql-review",
   "files": [],
   "helperScripts": 0,
   "notChecked": true,
   "group": "languages",
   "grade": {
    "grade": "B+",
    "score": "3.85",
    "scores": [
     4,
     4,
     4,
     3,
     4
    ],
    "design": true,
    "rank": 101
   }
  },
  {
   "id": "rlm-ssrf-review",
   "goal": "SSRF review: server-side requests to URLs that users can influence.",
   "cat": "Installed",
   "on": false,
   "use": "SSRF review: server-side requests to URLs that users can influence. Use when code fetches a URL, host or address that comes from a request.",
   "prompt": "Use the rlm-ssrf-review skill.",
   "input": "",
   "output": "",
   "pros": [],
   "cons": [],
   "items": [
    "input-1",
    "input-2",
    "input-3",
    "input-4",
    "input-5",
    "input-6"
   ],
   "steps": [
    {
     "layout": "row",
     "note": "Find the fetches. List each outbound request whose target can be influenced."
    },
    {
     "layout": "chunks",
     "note": "Check the allow-list. Flag requests to any host the caller names.",
     "groups": [
      0,
      0,
      1,
      1,
      2,
      2
     ]
    },
    {
     "layout": "parallel",
     "note": "Check internal addresses. Flag requests that can reach private or metadata addresses.",
     "groups": [
      0,
      0,
      1,
      1,
      2,
      2
     ],
     "state": [
      "ok",
      "ok",
      "ok",
      "ok",
      "ok",
      "ok"
     ]
    },
    {
     "layout": "funnel",
     "note": "Check redirects. Flag clients that follow redirects into internal hosts."
    },
    {
     "layout": "gate",
     "note": "Report. Each request with file and line, severity and the fix.",
     "pass": [
      true,
      true,
      true,
      true,
      true,
      false
     ]
    }
   ],
   "outcome": null,
   "idea": "",
   "why": "",
   "protocol": [
    {
     "title": "Find the fetches",
     "text": "List each outbound request whose target can be influenced."
    },
    {
     "title": "Check the allow-list",
     "text": "Flag requests to any host the caller names."
    },
    {
     "title": "Check internal addresses",
     "text": "Flag requests that can reach private or metadata addresses."
    },
    {
     "title": "Check redirects",
     "text": "Flag clients that follow redirects into internal hosts."
    },
    {
     "title": "Report",
     "text": "Each request with file and line, severity and the fix."
    }
   ],
   "path": ".github/skills/rlm-ssrf-review",
   "files": [],
   "helperScripts": 0,
   "notChecked": true,
   "group": "security",
   "grade": {
    "grade": "A-",
    "score": "4.10",
    "scores": [
     5,
     4,
     4,
     3,
     3
    ],
    "design": true,
    "rank": 26
   }
  },
  {
   "id": "rlm-stack-auditor",
   "goal": "Audit configuration files, Dockerfiles, Compose files, Kubernetes manifests and environment-variable schemas…",
   "cat": "Installed",
   "on": false,
   "use": "Audit configuration files, Dockerfiles, Compose files, Kubernetes manifests and environment-variable schemas for syntax errors, leaked secrets, port conflicts, unsafe defaults and service-boundary violations. Use when configuration or container files change, or before a deployment.",
   "prompt": "Use the rlm-stack-auditor skill.",
   "input": "",
   "output": "",
   "pros": [],
   "cons": [],
   "items": [
    "input-1",
    "input-2",
    "input-3",
    "input-4",
    "input-5",
    "input-6"
   ],
   "steps": [
    {
     "layout": "row",
     "note": "Inspect. Run `python3 <skill>/scripts/rlm_corpus.py scan <corpus>`."
    },
    {
     "layout": "chunks",
     "note": "Partition. Run `WORK=$(mktemp -d)`, then `python3 <skill>/scripts/rlm_corpus.py chunk <corpus> \"$WORK/chunks\"`.",
     "groups": [
      0,
      0,
      1,
      1,
      2,
      2
     ]
    },
    {
     "layout": "parallel",
     "note": "Map. For each chunk, run a fresh sub-task (a subagent if you can start one) that sees only that chunk file and the \"Chunk task\" below.",
     "groups": [
      0,
      0,
      1,
      1,
      2,
      2
     ],
     "state": [
      "ok",
      "ok",
      "ok",
      "ok",
      "ok",
      "ok"
     ]
    },
    {
     "layout": "funnel",
     "note": "Reduce. Run `python3 <skill>/scripts/rlm_corpus.py merge \"$WORK/out\" --out \"$WORK/merged.json\"`."
    },
    {
     "layout": "gate",
     "note": "Verify. Re-read each cited line.",
     "pass": [
      true,
      true,
      true,
      true,
      true,
      false
     ]
    },
    {
     "layout": "doc",
     "note": "Report. Write the report in the format below.",
     "docLabel": "report"
    }
   ],
   "outcome": null,
   "idea": "",
   "why": "",
   "protocol": [
    {
     "title": "Inspect",
     "text": "Run `python3 <skill>/scripts/rlm_corpus.py scan <corpus>`. Note the file count, line count and top-level folders. If the corpus is very large, agree the scope with the user, then narrow it with `--include 'deploy/*'` (repeatable) on every command. Files over 20 MB are skipped; `--max-bytes N` changes the limit. Report what `scan` lists as skipped."
    },
    {
     "title": "Partition",
     "text": "Run `WORK=$(mktemp -d)`, then `python3 <skill>/scripts/rlm_corpus.py chunk <corpus> \"$WORK/chunks\"`. Chunks are limited to 800 lines and 100,000 characters each, and are cut between definitions where possible. Each `chunk_NNN.md` holds the data notice and labelled file sections. `manifest.json` lists the chunks."
    },
    {
     "title": "Map",
     "text": "For each chunk, run a fresh sub-task (a subagent if you can start one) that sees only that chunk file and the \"Chunk task\" below. It writes `\"$WORK/out/<chunk>.out.md\"`. If you cannot start sub-tasks, run `python3 <skill>/scripts/rlm_corpus.py pending \"$WORK/chunks\" \"$WORK/out\"`. It lists the chunks that still have no output. Process the first one: read it, write its output, then run `pending` again. Repeat until nothing is pending. Never hold all chunks in context at once."
    },
    {
     "title": "Reduce",
     "text": "Run `python3 <skill>/scripts/rlm_corpus.py merge \"$WORK/out\" --out \"$WORK/merged.json\"`. If it lists `failed_outputs`, re-run those chunks. A missing or invalid output is not \"no findings\". Checks that span files (a duplicate across manifests, a route missing from a contract, a pattern repeated across chunks) are done on the merged list in this step. If the merged list is still too large to read, repeat steps 2 to 4 on the findings."
    },
    {
     "title": "Verify",
     "text": "Re-read each cited line. Run the validators that exist on the machine (docker compose config, kubectl apply --dry-run=client, terraform validate, yamllint, hadolint) once on the whole set in the reduce step, and record which ran. Do not install tools without asking."
    },
    {
     "title": "Report",
     "text": "Write the report in the format below."
    },
    {
     "title": "Clean up",
     "text": "Delete `$WORK` after the report is delivered."
    }
   ],
   "path": ".github/skills/rlm-stack-auditor",
   "files": [
    "scripts/rlm_corpus.py"
   ],
   "helperScripts": 1,
   "notChecked": true,
   "group": "engineering",
   "grade": {
    "grade": "B",
    "score": "3.65",
    "scores": [
     4,
     3,
     4,
     3,
     4
    ],
    "design": true,
    "rank": 177
   }
  },
  {
   "id": "rlm-swift-review",
   "goal": "Swift review: optionals, memory cycles, concurrency and secure storage.",
   "cat": "Installed",
   "on": false,
   "use": "Swift review: optionals, memory cycles, concurrency and secure storage. Use when asked to review a Swift project or module.",
   "prompt": "Use the rlm-swift-review skill.",
   "input": "",
   "output": "",
   "pros": [],
   "cons": [],
   "items": [
    "input-1",
    "input-2",
    "input-3",
    "input-4",
    "input-5",
    "input-6"
   ],
   "steps": [
    {
     "layout": "row",
     "note": "Read the project setup. The package file, the Swift version and the lint configuration."
    },
    {
     "layout": "chunks",
     "note": "Check optionals. Flag force unwraps on external data.",
     "groups": [
      0,
      0,
      1,
      1,
      2,
      2
     ]
    },
    {
     "layout": "parallel",
     "note": "Check memory. Flag closures that capture self strongly and create cycles.",
     "groups": [
      0,
      0,
      1,
      1,
      2,
      2
     ],
     "state": [
      "ok",
      "ok",
      "ok",
      "ok",
      "ok",
      "ok"
     ]
    },
    {
     "layout": "funnel",
     "note": "Check concurrency. Flag shared state accessed off the main actor without care."
    },
    {
     "layout": "gate",
     "note": "Report. Each finding with file and line, severity and the fix.",
     "pass": [
      true,
      true,
      true,
      true,
      true,
      false
     ]
    }
   ],
   "outcome": null,
   "idea": "",
   "why": "",
   "protocol": [
    {
     "title": "Read the project setup",
     "text": "The package file, the Swift version and the lint configuration."
    },
    {
     "title": "Check optionals",
     "text": "Flag force unwraps on external data."
    },
    {
     "title": "Check memory",
     "text": "Flag closures that capture self strongly and create cycles."
    },
    {
     "title": "Check concurrency",
     "text": "Flag shared state accessed off the main actor without care."
    },
    {
     "title": "Report",
     "text": "Each finding with file and line, severity and the fix."
    }
   ],
   "path": ".github/skills/rlm-swift-review",
   "files": [],
   "helperScripts": 0,
   "notChecked": true,
   "group": "languages",
   "grade": {
    "grade": "B+",
    "score": "3.85",
    "scores": [
     4,
     4,
     4,
     3,
     4
    ],
    "design": true,
    "rank": 102
   }
  },
  {
   "id": "rlm-technical-seo-review",
   "goal": "Technical SEO review: titles, canonical links, structured data, status codes and crawl rules.",
   "cat": "Installed",
   "on": false,
   "use": "Technical SEO review: titles, canonical links, structured data, status codes and crawl rules. Use when a public page is added or its routes change.",
   "prompt": "Use the rlm-technical-seo-review skill.",
   "input": "",
   "output": "",
   "pros": [],
   "cons": [],
   "items": [
    "input-1",
    "input-2",
    "input-3",
    "input-4",
    "input-5",
    "input-6"
   ],
   "steps": [
    {
     "layout": "row",
     "note": "List the public pages and their titles and descriptions."
    },
    {
     "layout": "chunks",
     "note": "Check canonicals. Each page should name one address.",
     "groups": [
      0,
      0,
      1,
      1,
      2,
      2
     ]
    },
    {
     "layout": "parallel",
     "note": "Check status codes. Removed pages should return a proper code, not a soft error.",
     "groups": [
      0,
      0,
      1,
      1,
      2,
      2
     ],
     "state": [
      "ok",
      "ok",
      "ok",
      "ok",
      "ok",
      "ok"
     ]
    },
    {
     "layout": "funnel",
     "note": "Check crawl rules. The robots file must not block pages that should be found."
    },
    {
     "layout": "gate",
     "note": "Report. Each page with its problem and the fix.",
     "pass": [
      true,
      true,
      true,
      true,
      true,
      false
     ]
    }
   ],
   "outcome": null,
   "idea": "",
   "why": "",
   "protocol": [
    {
     "title": "List the public pages and their titles and descriptions",
     "text": ""
    },
    {
     "title": "Check canonicals",
     "text": "Each page should name one address."
    },
    {
     "title": "Check status codes",
     "text": "Removed pages should return a proper code, not a soft error."
    },
    {
     "title": "Check crawl rules",
     "text": "The robots file must not block pages that should be found."
    },
    {
     "title": "Report",
     "text": "Each page with its problem and the fix."
    }
   ],
   "path": ".github/skills/rlm-technical-seo-review",
   "files": [],
   "helperScripts": 0,
   "notChecked": true,
   "group": "web",
   "grade": {
    "grade": "B",
    "score": "3.45",
    "scores": [
     3,
     4,
     3,
     4,
     4
    ],
    "design": true,
    "rank": 200
   }
  },
  {
   "id": "rlm-terraform-review",
   "goal": "Review Terraform code for state handling, provider versions, secrets, drift and blast radius.",
   "cat": "Installed",
   "on": false,
   "use": "Review Terraform code for state handling, provider versions, secrets, drift and blast radius. Use when infrastructure code is added or changed.",
   "prompt": "Use the rlm-terraform-review skill.",
   "input": "",
   "output": "",
   "pros": [],
   "cons": [],
   "items": [
    "input-1",
    "input-2",
    "input-3",
    "input-4",
    "input-5",
    "input-6"
   ],
   "steps": [
    {
     "layout": "row",
     "note": "Read the configuration. Open the root modules, variables, backend configuration and lock file."
    },
    {
     "layout": "chunks",
     "note": "Check state. State must live in a remote backend with locking and encryption.",
     "groups": [
      0,
      0,
      1,
      1,
      2,
      2
     ]
    },
    {
     "layout": "parallel",
     "note": "Check versions. Providers and modules should be pinned.",
     "groups": [
      0,
      0,
      1,
      1,
      2,
      2
     ],
     "state": [
      "ok",
      "ok",
      "ok",
      "ok",
      "ok",
      "ok"
     ]
    },
    {
     "layout": "funnel",
     "note": "Check secrets. Flag secrets in variables with defaults, in outputs, or written to state in plain text without need."
    },
    {
     "layout": "gate",
     "note": "Check the blast radius. Large single state files affect many resources at once.",
     "pass": [
      true,
      true,
      true,
      true,
      true,
      false
     ]
    },
    {
     "layout": "doc",
     "note": "Report. List each finding with file and resource, severity and the fix.",
     "docLabel": "report"
    }
   ],
   "outcome": null,
   "idea": "",
   "why": "",
   "protocol": [
    {
     "title": "Read the configuration",
     "text": "Open the root modules, variables, backend configuration and lock file."
    },
    {
     "title": "Check state",
     "text": "State must live in a remote backend with locking and encryption. Flag local state."
    },
    {
     "title": "Check versions",
     "text": "Providers and modules should be pinned. Flag unpinned or floating versions."
    },
    {
     "title": "Check secrets",
     "text": "Flag secrets in variables with defaults, in outputs, or written to state in plain text without need."
    },
    {
     "title": "Check the blast radius",
     "text": "Large single state files affect many resources at once. Note what one plan can change."
    },
    {
     "title": "Report",
     "text": "List each finding with file and resource, severity and the fix. Mark what a plan would need to confirm."
    }
   ],
   "path": ".github/skills/rlm-terraform-review",
   "files": [],
   "helperScripts": 0,
   "notChecked": true,
   "group": "ops",
   "grade": {
    "grade": "B+",
    "score": "3.75",
    "scores": [
     4,
     4,
     4,
     3,
     3
    ],
    "design": true,
    "rank": 148
   }
  },
  {
   "id": "rlm-test-gap-analysis",
   "goal": "Find untested behaviour, weak assertions and risky code paths across a large codebase using Recursive Languag…",
   "cat": "Installed",
   "on": false,
   "use": "Find untested behaviour, weak assertions and risky code paths across a large codebase using Recursive Language Model (RLM) decomposition, with ranked gaps and concrete test cases to add. Use when asked about test coverage, test quality or where tests are missing, on code too large to read in one pass.",
   "prompt": "Use the rlm-test-gap-analysis skill.",
   "input": "",
   "output": "",
   "pros": [],
   "cons": [],
   "items": [
    "input-1",
    "input-2",
    "input-3",
    "input-4",
    "input-5",
    "input-6"
   ],
   "steps": [
    {
     "layout": "row",
     "note": "Coverage first. If the project has a coverage tool configured (for example `pytest --cov`, `jest --coverage`, `go test -cover`), run it and keep the report."
    },
    {
     "layout": "chunks",
     "note": "Inspect. Run `python3 <skill>/scripts/rlm_corpus.py scan <repo> --include 'src/*'` (adjust the glob to the source folder).",
     "groups": [
      0,
      0,
      1,
      1,
      2,
      2
     ]
    },
    {
     "layout": "parallel",
     "note": "Partition. Run `WORK=$(mktemp -d)`, then `python3 <skill>/scripts/rlm_corpus.py chunk <repo> \"$WORK/chunks\" --include 'src/*'`.",
     "groups": [
      0,
      0,
      1,
      1,
      2,
      2
     ],
     "state": [
      "ok",
      "ok",
      "ok",
      "ok",
      "ok",
      "ok"
     ]
    },
    {
     "layout": "funnel",
     "note": "Map. For each source chunk, run a fresh sub-task (a subagent if you can start one) that sees the chunk and the \"Chunk task\" below."
    },
    {
     "layout": "gate",
     "note": "Reduce. Run `python3 <skill>/scripts/rlm_corpus.py merge \"$WORK/out\" --out \"$WORK/merged.json\"`.",
     "pass": [
      true,
      true,
      true,
      true,
      true,
      false
     ]
    },
    {
     "layout": "doc",
     "note": "Verify. For each high-risk gap, search the test folder for the function name (`grep -rn \"name\" <repo>/tests`) to confirm no test exercises it.",
     "docLabel": "report"
    }
   ],
   "outcome": null,
   "idea": "",
   "why": "",
   "protocol": [
    {
     "title": "Coverage first",
     "text": "If the project has a coverage tool configured (for example `pytest --cov`, `jest --coverage`, `go test -cover`), run it and keep the report. Use it to confirm each gap before you report it. Do not install tools without asking."
    },
    {
     "title": "Inspect",
     "text": "Run `python3 <skill>/scripts/rlm_corpus.py scan <repo> --include 'src/*'` (adjust the glob to the source folder). Note the layout. Agree the scope with the user if the code base is very large."
    },
    {
     "title": "Partition",
     "text": "Run `WORK=$(mktemp -d)`, then `python3 <skill>/scripts/rlm_corpus.py chunk <repo> \"$WORK/chunks\" --include 'src/*'`. Chunks are limited to 800 lines and 100,000 characters each. The test folder is not chunked: the sub-tasks see only source code, so tests are checked by searching them in step 6."
    },
    {
     "title": "Map",
     "text": "For each source chunk, run a fresh sub-task (a subagent if you can start one) that sees the chunk and the \"Chunk task\" below. If you cannot start sub-tasks, run `python3 <skill>/scripts/rlm_corpus.py pending \"$WORK/chunks\" \"$WORK/out\"` and process the first listed chunk, then run `pending` again until nothing is pending."
    },
    {
     "title": "Reduce",
     "text": "Run `python3 <skill>/scripts/rlm_corpus.py merge \"$WORK/out\" --out \"$WORK/merged.json\"`. Re-run any `failed_outputs`. A missing output is an unanalysed chunk, not \"fully tested\"."
    },
    {
     "title": "Verify",
     "text": "For each high-risk gap, search the test folder for the function name (`grep -rn \"name\" <repo>/tests`) to confirm no test exercises it."
    },
    {
     "title": "Report",
     "text": "Write the report in the format below."
    },
    {
     "title": "Clean up",
     "text": "Delete `$WORK` after the report is delivered."
    }
   ],
   "path": ".github/skills/rlm-test-gap-analysis",
   "files": [
    "scripts/rlm_corpus.py"
   ],
   "helperScripts": 1,
   "notChecked": true,
   "group": "engineering",
   "grade": {
    "grade": "A",
    "score": "4.45",
    "scores": [
     5,
     4,
     4,
     4,
     5
    ],
    "design": true,
    "rank": 5
   }
  },
  {
   "id": "rlm-test-plan-review",
   "goal": "Review a test plan or test suite for coverage of requirements, edge cases and failure paths.",
   "cat": "Installed",
   "on": false,
   "use": "Review a test plan or test suite for coverage of requirements, edge cases and failure paths. Use when a feature is about to ship and its tests need checking.",
   "prompt": "Use the rlm-test-plan-review skill.",
   "input": "",
   "output": "",
   "pros": [],
   "cons": [],
   "items": [
    "input-1",
    "input-2",
    "input-3",
    "input-4",
    "input-5",
    "input-6"
   ],
   "steps": [
    {
     "layout": "row",
     "note": "Read the requirements. List the requirements the tests should cover, numbered."
    },
    {
     "layout": "chunks",
     "note": "Map tests to requirements. For each requirement, find the test that checks it.",
     "groups": [
      0,
      0,
      1,
      1,
      2,
      2
     ]
    },
    {
     "layout": "parallel",
     "note": "Check edge cases. Empty input, limits, duplicates and invalid data should each have a test where they apply.",
     "groups": [
      0,
      0,
      1,
      1,
      2,
      2
     ],
     "state": [
      "ok",
      "ok",
      "ok",
      "ok",
      "ok",
      "ok"
     ]
    },
    {
     "layout": "funnel",
     "note": "Check failure paths. Tests should cover a dependency that fails, times out or returns bad data."
    },
    {
     "layout": "gate",
     "note": "Check test quality. Flag assertions that cannot fail, tests that depend on order or the clock, and tests that only check no exception was thrown.",
     "pass": [
      true,
      true,
      true,
      true,
      true,
      false
     ]
    },
    {
     "layout": "doc",
     "note": "Report. A table: requirement, test, gaps found, and the test to add.",
     "docLabel": "report"
    }
   ],
   "outcome": null,
   "idea": "",
   "why": "",
   "protocol": [
    {
     "title": "Read the requirements",
     "text": "List the requirements the tests should cover, numbered."
    },
    {
     "title": "Map tests to requirements",
     "text": "For each requirement, find the test that checks it. Record requirements with no test."
    },
    {
     "title": "Check edge cases",
     "text": "Empty input, limits, duplicates and invalid data should each have a test where they apply."
    },
    {
     "title": "Check failure paths",
     "text": "Tests should cover a dependency that fails, times out or returns bad data."
    },
    {
     "title": "Check test quality",
     "text": "Flag assertions that cannot fail, tests that depend on order or the clock, and tests that only check no exception was thrown."
    },
    {
     "title": "Report",
     "text": "A table: requirement, test, gaps found, and the test to add. Mark what you could not check."
    }
   ],
   "path": ".github/skills/rlm-test-plan-review",
   "files": [],
   "helperScripts": 0,
   "notChecked": true,
   "group": "review",
   "grade": {
    "grade": "B",
    "score": "3.65",
    "scores": [
     4,
     4,
     3,
     3,
     4
    ],
    "design": true,
    "rank": 178
   }
  },
  {
   "id": "rlm-third-party-vulnerability-review",
   "goal": "Third-party vulnerability review: findings in vendors and services the team depends on.",
   "cat": "Installed",
   "on": false,
   "use": "Third-party vulnerability review: findings in vendors and services the team depends on. Use when a vendor or outside service is used in the product.",
   "prompt": "Use the rlm-third-party-vulnerability-review skill.",
   "input": "",
   "output": "",
   "pros": [],
   "cons": [],
   "items": [
    "input-1",
    "input-2",
    "input-3",
    "input-4",
    "input-5",
    "input-6"
   ],
   "steps": [
    {
     "layout": "row",
     "note": "List the third-party components and services in use."
    },
    {
     "layout": "chunks",
     "note": "Check their advisories. Note any published vulnerability for each.",
     "groups": [
      0,
      0,
      1,
      1,
      2,
      2
     ]
    },
    {
     "layout": "parallel",
     "note": "Check the vendor's response. Note the vendor's patch or advisory status.",
     "groups": [
      0,
      0,
      1,
      1,
      2,
      2
     ],
     "state": [
      "ok",
      "ok",
      "ok",
      "ok",
      "ok",
      "ok"
     ]
    },
    {
     "layout": "funnel",
     "note": "Check the exposure. Note what data and access the vendor holds."
    },
    {
     "layout": "gate",
     "note": "Report. Each dependency with its advisory, the vendor response and the action.",
     "pass": [
      true,
      true,
      true,
      true,
      true,
      false
     ]
    }
   ],
   "outcome": null,
   "idea": "",
   "why": "",
   "protocol": [
    {
     "title": "List the third-party components and services in use",
     "text": ""
    },
    {
     "title": "Check their advisories",
     "text": "Note any published vulnerability for each."
    },
    {
     "title": "Check the vendor's response",
     "text": "Note the vendor's patch or advisory status."
    },
    {
     "title": "Check the exposure",
     "text": "Note what data and access the vendor holds."
    },
    {
     "title": "Report",
     "text": "Each dependency with its advisory, the vendor response and the action."
    }
   ],
   "path": ".github/skills/rlm-third-party-vulnerability-review",
   "files": [],
   "helperScripts": 0,
   "notChecked": true,
   "group": "vulnerability",
   "grade": {
    "grade": "B+",
    "score": "3.75",
    "scores": [
     4,
     4,
     4,
     3,
     3
    ],
    "design": true,
    "rank": 149
   }
  },
  {
   "id": "rlm-threat-model",
   "goal": "Build a threat model for a system or a change using STRIDE: assets, data-flow diagram, trust boundaries, thre…",
   "cat": "Installed",
   "on": false,
   "use": "Build a threat model for a system or a change using STRIDE: assets, data-flow diagram, trust boundaries, threats per element, existing controls with evidence, and gaps with mitigations. Use when designing a system, adding an external interface, or preparing a security review that needs architectural context.",
   "prompt": "Use the rlm-threat-model skill.",
   "input": "",
   "output": "",
   "pros": [],
   "cons": [],
   "items": [
    "input-1",
    "input-2",
    "input-3",
    "input-4",
    "input-5",
    "input-6"
   ],
   "steps": [
    {
     "layout": "row",
     "note": "Inspect. Run `python3 <skill>/scripts/rlm_corpus.py scan <corpus>`."
    },
    {
     "layout": "chunks",
     "note": "Partition. Run `WORK=$(mktemp -d)`, then `python3 <skill>/scripts/rlm_corpus.py chunk <corpus> \"$WORK/chunks\"`.",
     "groups": [
      0,
      0,
      1,
      1,
      2,
      2
     ]
    },
    {
     "layout": "parallel",
     "note": "Map. For each chunk, run a fresh sub-task (a subagent if you can start one) that sees only that chunk file and the \"Chunk task\" below.",
     "groups": [
      0,
      0,
      1,
      1,
      2,
      2
     ],
     "state": [
      "ok",
      "ok",
      "ok",
      "ok",
      "ok",
      "ok"
     ]
    },
    {
     "layout": "funnel",
     "note": "Reduce. Run `python3 <skill>/scripts/rlm_corpus.py merge \"$WORK/out\" --out \"$WORK/merged.json\"`."
    },
    {
     "layout": "gate",
     "note": "Verify. A control counts only if you found it in code or configuration.",
     "pass": [
      true,
      true,
      true,
      true,
      true,
      false
     ]
    },
    {
     "layout": "doc",
     "note": "Report. Write the report in the format below.",
     "docLabel": "report"
    }
   ],
   "outcome": null,
   "idea": "",
   "why": "",
   "protocol": [
    {
     "title": "Inspect",
     "text": "Run `python3 <skill>/scripts/rlm_corpus.py scan <corpus>`. Note the file count, line count and top-level folders. If the corpus is very large, agree the scope with the user, then narrow it with `--include '<folder>'` (repeatable) on every command. Files over 20 MB are skipped; `--max-bytes N` changes the limit. Report what `scan` lists as skipped."
    },
    {
     "title": "Partition",
     "text": "Run `WORK=$(mktemp -d)`, then `python3 <skill>/scripts/rlm_corpus.py chunk <corpus> \"$WORK/chunks\"`. Chunks are limited to 800 lines and 100,000 characters each, and are cut between definitions where possible. Each `chunk_NNN.md` holds the data notice and labelled file sections. `manifest.json` lists the chunks."
    },
    {
     "title": "Map",
     "text": "For each chunk, run a fresh sub-task (a subagent if you can start one) that sees only that chunk file and the \"Chunk task\" below. It writes `\"$WORK/out/<chunk>.out.md\"`. If you cannot start sub-tasks, run `python3 <skill>/scripts/rlm_corpus.py pending \"$WORK/chunks\" \"$WORK/out\"`. It lists the chunks that still have no output. Process the first one: read it, write its output, then run `pending` again. Repeat until nothing is pending. Never hold all chunks in context at once."
    },
    {
     "title": "Reduce",
     "text": "Run `python3 <skill>/scripts/rlm_corpus.py merge \"$WORK/out\" --out \"$WORK/merged.json\"`. If it lists `failed_outputs`, re-run those chunks. A missing or invalid output is not \"no findings\". Checks that span files (a duplicate across manifests, a route missing from a contract, a pattern repeated across chunks) are done on the merged list in this step. If the merged list is still too large to read, repeat steps 2 to 4 on the findings."
    },
    {
     "title": "Verify",
     "text": "A control counts only if you found it in code or configuration. Name the evidence and re-read it. Do not invent components or flows; if the architecture is unclear, list the question. The Mermaid diagram and the threat register are built from the merged output in the reduce step."
    },
    {
     "title": "Report",
     "text": "Write the report in the format below."
    },
    {
     "title": "Clean up",
     "text": "Delete `$WORK` after the report is delivered."
    }
   ],
   "path": ".github/skills/rlm-threat-model",
   "files": [
    "scripts/rlm_corpus.py"
   ],
   "helperScripts": 1,
   "notChecked": true,
   "group": "engineering",
   "grade": {
    "grade": "A-",
    "score": "4.25",
    "scores": [
     4,
     5,
     5,
     3,
     4
    ],
    "design": true,
    "rank": 12
   }
  },
  {
   "id": "rlm-token-context-review",
   "goal": "Context size review: what is sent to the model on each call, and what could be left out.",
   "cat": "Installed",
   "on": false,
   "use": "Context size review: what is sent to the model on each call, and what could be left out. Use when an agent or model call builds its own context.",
   "prompt": "Use the rlm-token-context-review skill.",
   "input": "",
   "output": "",
   "pros": [],
   "cons": [],
   "items": [
    "input-1",
    "input-2",
    "input-3",
    "input-4",
    "input-5",
    "input-6"
   ],
   "steps": [
    {
     "layout": "row",
     "note": "List the inputs. Each part of the prompt, its source and its typical size."
    },
    {
     "layout": "chunks",
     "note": "Find the waste. Flag repeated text, full files where a section is enough, and logs pasted whole.",
     "groups": [
      0,
      0,
      1,
      1,
      2,
      2
     ]
    },
    {
     "layout": "parallel",
     "note": "Check the order. Keep stable content first so it can be cached.",
     "groups": [
      0,
      0,
      1,
      1,
      2,
      2
     ],
     "state": [
      "ok",
      "ok",
      "ok",
      "ok",
      "ok",
      "ok"
     ]
    },
    {
     "layout": "funnel",
     "note": "Check the limit. Note what happens when the input is over the model's limit."
    },
    {
     "layout": "gate",
     "note": "Report. Each input with its size, the waste found and the change that saves most.",
     "pass": [
      true,
      true,
      true,
      true,
      true,
      false
     ]
    }
   ],
   "outcome": null,
   "idea": "",
   "why": "",
   "protocol": [
    {
     "title": "List the inputs",
     "text": "Each part of the prompt, its source and its typical size."
    },
    {
     "title": "Find the waste",
     "text": "Flag repeated text, full files where a section is enough, and logs pasted whole."
    },
    {
     "title": "Check the order",
     "text": "Keep stable content first so it can be cached."
    },
    {
     "title": "Check the limit",
     "text": "Note what happens when the input is over the model's limit."
    },
    {
     "title": "Report",
     "text": "Each input with its size, the waste found and the change that saves most."
    }
   ],
   "path": ".github/skills/rlm-token-context-review",
   "files": [],
   "helperScripts": 0,
   "notChecked": true,
   "group": "engineering",
   "grade": {
    "grade": "B+",
    "score": "3.75",
    "scores": [
     4,
     4,
     4,
     3,
     3
    ],
    "design": true,
    "rank": 150
   }
  },
  {
   "id": "rlm-token-cost-review",
   "goal": "Token cost review: which calls cost the most, how often they run, and where the budget goes.",
   "cat": "Installed",
   "on": false,
   "use": "Token cost review: which calls cost the most, how often they run, and where the budget goes. Use when a feature uses a model in production.",
   "prompt": "Use the rlm-token-cost-review skill.",
   "input": "",
   "output": "",
   "pros": [],
   "cons": [],
   "items": [
    "input-1",
    "input-2",
    "input-3",
    "input-4",
    "input-5",
    "input-6"
   ],
   "steps": [
    {
     "layout": "row",
     "note": "List the calls. Each feature, model and how often it runs."
    },
    {
     "layout": "chunks",
     "note": "Estimate the cost. Input and output tokens per call, times the frequency.",
     "groups": [
      0,
      0,
      1,
      1,
      2,
      2
     ]
    },
    {
     "layout": "parallel",
     "note": "Find the largest. Rank calls by total cost.",
     "groups": [
      0,
      0,
      1,
      1,
      2,
      2
     ],
     "state": [
      "ok",
      "ok",
      "ok",
      "ok",
      "ok",
      "ok"
     ]
    },
    {
     "layout": "funnel",
     "note": "Check for retries. Flag loops and retries that multiply the cost."
    },
    {
     "layout": "gate",
     "note": "Report. A ranked table with cost per call, the causes and the cheapest fix.",
     "pass": [
      true,
      true,
      true,
      true,
      true,
      false
     ]
    }
   ],
   "outcome": null,
   "idea": "",
   "why": "",
   "protocol": [
    {
     "title": "List the calls",
     "text": "Each feature, model and how often it runs."
    },
    {
     "title": "Estimate the cost",
     "text": "Input and output tokens per call, times the frequency."
    },
    {
     "title": "Find the largest",
     "text": "Rank calls by total cost."
    },
    {
     "title": "Check for retries",
     "text": "Flag loops and retries that multiply the cost."
    },
    {
     "title": "Report",
     "text": "A ranked table with cost per call, the causes and the cheapest fix."
    }
   ],
   "path": ".github/skills/rlm-token-cost-review",
   "files": [],
   "helperScripts": 0,
   "notChecked": true,
   "group": "engineering",
   "grade": {
    "grade": "B+",
    "score": "3.85",
    "scores": [
     4,
     4,
     4,
     3,
     4
    ],
    "design": true,
    "rank": 103
   }
  },
  {
   "id": "rlm-traceability-review",
   "goal": "Traceability review: each requirement links to its code, its tests and its approval.",
   "cat": "Installed",
   "on": false,
   "use": "Traceability review: each requirement links to its code, its tests and its approval. Use when requirements must be shown to be built and tested.",
   "prompt": "Use the rlm-traceability-review skill.",
   "input": "",
   "output": "",
   "pros": [],
   "cons": [],
   "items": [
    "input-1",
    "input-2",
    "input-3",
    "input-4",
    "input-5",
    "input-6"
   ],
   "steps": [
    {
     "layout": "row",
     "note": "List requirements. Collect the numbered requirements."
    },
    {
     "layout": "chunks",
     "note": "Link code. Find the code that implements each requirement.",
     "groups": [
      0,
      0,
      1,
      1,
      2,
      2
     ]
    },
    {
     "layout": "parallel",
     "note": "Link tests. Find the test that checks each requirement.",
     "groups": [
      0,
      0,
      1,
      1,
      2,
      2
     ],
     "state": [
      "ok",
      "ok",
      "ok",
      "ok",
      "ok",
      "ok"
     ]
    },
    {
     "layout": "funnel",
     "note": "Find orphans. Flag code or tests that map to no requirement."
    },
    {
     "layout": "gate",
     "note": "Report. A matrix of requirement, code, test and gaps.",
     "pass": [
      true,
      true,
      true,
      true,
      true,
      false
     ]
    }
   ],
   "outcome": null,
   "idea": "",
   "why": "",
   "protocol": [
    {
     "title": "List requirements",
     "text": "Collect the numbered requirements."
    },
    {
     "title": "Link code",
     "text": "Find the code that implements each requirement."
    },
    {
     "title": "Link tests",
     "text": "Find the test that checks each requirement."
    },
    {
     "title": "Find orphans",
     "text": "Flag code or tests that map to no requirement."
    },
    {
     "title": "Report",
     "text": "A matrix of requirement, code, test and gaps."
    }
   ],
   "path": ".github/skills/rlm-traceability-review",
   "files": [],
   "helperScripts": 0,
   "notChecked": true,
   "group": "review",
   "grade": {
    "grade": "B+",
    "score": "3.85",
    "scores": [
     4,
     4,
     4,
     3,
     4
    ],
    "design": true,
    "rank": 104
   }
  },
  {
   "id": "rlm-trust-layer-validator",
   "goal": "Review changes to decentralized identity, verifiable credentials, JSON-LD contexts, credential schemas, agent…",
   "cat": "Installed",
   "on": false,
   "use": "Review changes to decentralized identity, verifiable credentials, JSON-LD contexts, credential schemas, agent-to-agent message formats and protocol handlers for spec compliance, key handling and insecure transport. Use when those files change, or before enabling a new credential issuer or verifier.",
   "prompt": "Use the rlm-trust-layer-validator skill.",
   "input": "",
   "output": "",
   "pros": [],
   "cons": [],
   "items": [
    "input-1",
    "input-2",
    "input-3",
    "input-4",
    "input-5",
    "input-6"
   ],
   "steps": [
    {
     "layout": "row",
     "note": "Inspect. Run `python3 <skill>/scripts/rlm_corpus.py scan <corpus>`."
    },
    {
     "layout": "chunks",
     "note": "Partition. Run `WORK=$(mktemp -d)`, then `python3 <skill>/scripts/rlm_corpus.py chunk <corpus> \"$WORK/chunks\"`.",
     "groups": [
      0,
      0,
      1,
      1,
      2,
      2
     ]
    },
    {
     "layout": "parallel",
     "note": "Map. For each chunk, run a fresh sub-task (a subagent if you can start one) that sees only that chunk file and the \"Chunk task\" below.",
     "groups": [
      0,
      0,
      1,
      1,
      2,
      2
     ],
     "state": [
      "ok",
      "ok",
      "ok",
      "ok",
      "ok",
      "ok"
     ]
    },
    {
     "layout": "funnel",
     "note": "Reduce. Run `python3 <skill>/scripts/rlm_corpus.py merge \"$WORK/out\" --out \"$WORK/merged.json\"`."
    },
    {
     "layout": "gate",
     "note": "Verify. Confirm each finding by reading the code it depends on, and state the concrete input or sequence that breaks it.",
     "pass": [
      true,
      true,
      true,
      true,
      true,
      false
     ]
    },
    {
     "layout": "doc",
     "note": "Report. Write the report in the format below.",
     "docLabel": "report"
    }
   ],
   "outcome": null,
   "idea": "",
   "why": "",
   "protocol": [
    {
     "title": "Inspect",
     "text": "Run `python3 <skill>/scripts/rlm_corpus.py scan <corpus>`. Note the file count, line count and top-level folders. If the corpus is very large, agree the scope with the user, then narrow it with `--include '<folder>'` (repeatable) on every command. Files over 20 MB are skipped; `--max-bytes N` changes the limit. Report what `scan` lists as skipped."
    },
    {
     "title": "Partition",
     "text": "Run `WORK=$(mktemp -d)`, then `python3 <skill>/scripts/rlm_corpus.py chunk <corpus> \"$WORK/chunks\"`. Chunks are limited to 800 lines and 100,000 characters each, and are cut between definitions where possible. Each `chunk_NNN.md` holds the data notice and labelled file sections. `manifest.json` lists the chunks."
    },
    {
     "title": "Map",
     "text": "For each chunk, run a fresh sub-task (a subagent if you can start one) that sees only that chunk file and the \"Chunk task\" below. It writes `\"$WORK/out/<chunk>.out.md\"`. If you cannot start sub-tasks, run `python3 <skill>/scripts/rlm_corpus.py pending \"$WORK/chunks\" \"$WORK/out\"`. It lists the chunks that still have no output. Process the first one: read it, write its output, then run `pending` again. Repeat until nothing is pending. Never hold all chunks in context at once."
    },
    {
     "title": "Reduce",
     "text": "Run `python3 <skill>/scripts/rlm_corpus.py merge \"$WORK/out\" --out \"$WORK/merged.json\"`. If it lists `failed_outputs`, re-run those chunks. A missing or invalid output is not \"no findings\". Checks that span files (a duplicate across manifests, a route missing from a contract, a pattern repeated across chunks) are done on the merged list in this step. If the merged list is still too large to read, repeat steps 2 to 4 on the findings."
    },
    {
     "title": "Verify",
     "text": "Confirm each finding by reading the code it depends on, and state the concrete input or sequence that breaks it. Run JSON-LD or JSON Schema validators if installed, once, in the reduce step."
    },
    {
     "title": "Report",
     "text": "Write the report in the format below."
    },
    {
     "title": "Clean up",
     "text": "Delete `$WORK` after the report is delivered."
    }
   ],
   "path": ".github/skills/rlm-trust-layer-validator",
   "files": [
    "scripts/rlm_corpus.py"
   ],
   "helperScripts": 1,
   "notChecked": true,
   "group": "engineering",
   "grade": {
    "grade": "B",
    "score": "3.45",
    "scores": [
     4,
     4,
     5,
     1,
     1
    ],
    "design": true,
    "rank": 201
   }
  },
  {
   "id": "rlm-typescript-review",
   "goal": "Review TypeScript and JavaScript code for type safety, async errors, input handling and tests.",
   "cat": "Installed",
   "on": false,
   "use": "Review TypeScript and JavaScript code for type safety, async errors, input handling and tests. Use when asked to review or harden a TypeScript or Node.js project or module.",
   "prompt": "Use the rlm-typescript-review skill.",
   "input": "",
   "output": "",
   "pros": [],
   "cons": [],
   "items": [
    "input-1",
    "input-2",
    "input-3",
    "input-4",
    "input-5",
    "input-6"
   ],
   "steps": [
    {
     "layout": "row",
     "note": "Read the project setup. Open package.json, tsconfig.json, the lint configuration and the lock file."
    },
    {
     "layout": "chunks",
     "note": "Check types. Flag `any` and non-null assertions (`!`) that hide a real case, casts that bypass checks, and union values not narrowed before use.",
     "groups": [
      0,
      0,
      1,
      1,
      2,
      2
     ]
    },
    {
     "layout": "parallel",
     "note": "Check async code. Look for promises that are not awaited or caught, `async` functions that can throw into an event handler, and sequential awaits in loops that could run together.",
     "groups": [
      0,
      0,
      1,
      1,
      2,
      2
     ],
     "state": [
      "ok",
      "ok",
      "ok",
      "ok",
      "ok",
      "ok"
     ]
    },
    {
     "layout": "funnel",
     "note": "Check input and output. Flag untrusted data used in `eval`, `new Function`, HTML or `innerHTML`, shell commands, file paths and redirects without validation."
    },
    {
     "layout": "gate",
     "note": "Check dependencies and the runtime. Flag packages with known issues in the lock file, and Node APIs that need a flag or are not available on the targeted runtime.",
     "pass": [
      true,
      true,
      true,
      true,
      true,
      false
     ]
    },
    {
     "layout": "doc",
     "note": "Check tests. Find exported functions and branches with no test, and assertions that cannot fail.",
     "docLabel": "report"
    }
   ],
   "outcome": null,
   "idea": "",
   "why": "",
   "protocol": [
    {
     "title": "Read the project setup",
     "text": "Open package.json, tsconfig.json, the lint configuration and the lock file. Note the Node.js version and whether strict mode is on."
    },
    {
     "title": "Check types",
     "text": "Flag `any` and non-null assertions (`!`) that hide a real case, casts that bypass checks, and union values not narrowed before use."
    },
    {
     "title": "Check async code",
     "text": "Look for promises that are not awaited or caught, `async` functions that can throw into an event handler, and sequential awaits in loops that could run together."
    },
    {
     "title": "Check input and output",
     "text": "Flag untrusted data used in `eval`, `new Function`, HTML or `innerHTML`, shell commands, file paths and redirects without validation."
    },
    {
     "title": "Check dependencies and the runtime",
     "text": "Flag packages with known issues in the lock file, and Node APIs that need a flag or are not available on the targeted runtime."
    },
    {
     "title": "Check tests",
     "text": "Find exported functions and branches with no test, and assertions that cannot fail."
    },
    {
     "title": "Report",
     "text": "List each finding as `file:line`, with severity (high, medium or low), the problem and the fix. Mark what you did not run."
    }
   ],
   "path": ".github/skills/rlm-typescript-review",
   "files": [],
   "helperScripts": 0,
   "notChecked": true,
   "group": "languages",
   "grade": {
    "grade": "B+",
    "score": "3.90",
    "scores": [
     4,
     4,
     4,
     4,
     3
    ],
    "design": true,
    "rank": 47
   }
  },
  {
   "id": "rlm-user-story-review",
   "goal": "User story review: stories with a user, a need, a benefit and clear boundaries.",
   "cat": "Installed",
   "on": false,
   "use": "User story review: stories with a user, a need, a benefit and clear boundaries. Use when a story is written or refined for a sprint.",
   "prompt": "Use the rlm-user-story-review skill.",
   "input": "",
   "output": "",
   "pros": [],
   "cons": [],
   "items": [
    "input-1",
    "input-2",
    "input-3",
    "input-4",
    "input-5",
    "input-6"
   ],
   "steps": [
    {
     "layout": "row",
     "note": "Check the form. Each story names a user, a need and a benefit."
    },
    {
     "layout": "chunks",
     "note": "Check size. Flag stories too big to finish in one iteration.",
     "groups": [
      0,
      0,
      1,
      1,
      2,
      2
     ]
    },
    {
     "layout": "parallel",
     "note": "Check boundaries. Flag stories with no stated exclusions.",
     "groups": [
      0,
      0,
      1,
      1,
      2,
      2
     ],
     "state": [
      "ok",
      "ok",
      "ok",
      "ok",
      "ok",
      "ok"
     ]
    },
    {
     "layout": "funnel",
     "note": "Check dependencies. Flag stories blocked by work not yet done."
    },
    {
     "layout": "gate",
     "note": "Report. Each story with its gaps and the rewrite.",
     "pass": [
      true,
      true,
      true,
      true,
      true,
      false
     ]
    }
   ],
   "outcome": null,
   "idea": "",
   "why": "",
   "protocol": [
    {
     "title": "Check the form",
     "text": "Each story names a user, a need and a benefit."
    },
    {
     "title": "Check size",
     "text": "Flag stories too big to finish in one iteration."
    },
    {
     "title": "Check boundaries",
     "text": "Flag stories with no stated exclusions."
    },
    {
     "title": "Check dependencies",
     "text": "Flag stories blocked by work not yet done."
    },
    {
     "title": "Report",
     "text": "Each story with its gaps and the rewrite."
    }
   ],
   "path": ".github/skills/rlm-user-story-review",
   "files": [],
   "helperScripts": 0,
   "notChecked": true,
   "group": "review",
   "grade": {
    "grade": "B",
    "score": "3.45",
    "scores": [
     3,
     4,
     3,
     4,
     4
    ],
    "design": true,
    "rank": 202
   }
  },
  {
   "id": "rlm-vulnerability-check",
   "goal": "Check code and its dependencies for vulnerabilities, ranked by severity, with the fix for each.",
   "cat": "Installed",
   "on": false,
   "use": "Check code and its dependencies for vulnerabilities, ranked by severity, with the fix for each. Use when asked for a vulnerability check before a release.",
   "prompt": "Use the rlm-vulnerability-check skill.",
   "input": "",
   "output": "",
   "pros": [],
   "cons": [],
   "items": [
    "input-1",
    "input-2",
    "input-3",
    "input-4",
    "input-5",
    "input-6"
   ],
   "steps": [
    {
     "layout": "row",
     "note": "Read the scope. Identify the code, the manifests and lock files, and any scanner output the team already has."
    },
    {
     "layout": "chunks",
     "note": "Check injection and input. Flag untrusted data reaching SQL, shell commands, file paths, templates, LDAP or deserialisers.",
     "groups": [
      0,
      0,
      1,
      1,
      2,
      2
     ]
    },
    {
     "layout": "parallel",
     "note": "Check authentication and secrets. Flag hard-coded credentials, weak password storage, tokens without expiry, and keys committed to the repository.",
     "groups": [
      0,
      0,
      1,
      1,
      2,
      2
     ],
     "state": [
      "ok",
      "ok",
      "ok",
      "ok",
      "ok",
      "ok"
     ]
    },
    {
     "layout": "funnel",
     "note": "Check dependencies. List packages with known vulnerabilities at the version in use, and the first fixed version."
    },
    {
     "layout": "gate",
     "note": "Check configuration. Flag debug modes, permissive CORS, missing TLS, and default credentials.",
     "pass": [
      true,
      true,
      true,
      true,
      true,
      false
     ]
    },
    {
     "layout": "doc",
     "note": "Rank findings. Rank by severity and by whether the code is reachable from outside.",
     "docLabel": "report"
    }
   ],
   "outcome": null,
   "idea": "",
   "why": "",
   "protocol": [
    {
     "title": "Read the scope",
     "text": "Identify the code, the manifests and lock files, and any scanner output the team already has."
    },
    {
     "title": "Check injection and input",
     "text": "Flag untrusted data reaching SQL, shell commands, file paths, templates, LDAP or deserialisers."
    },
    {
     "title": "Check authentication and secrets",
     "text": "Flag hard-coded credentials, weak password storage, tokens without expiry, and keys committed to the repository."
    },
    {
     "title": "Check dependencies",
     "text": "List packages with known vulnerabilities at the version in use, and the first fixed version."
    },
    {
     "title": "Check configuration",
     "text": "Flag debug modes, permissive CORS, missing TLS, and default credentials."
    },
    {
     "title": "Rank findings",
     "text": "Rank by severity and by whether the code is reachable from outside. A reachable high finding comes first."
    },
    {
     "title": "Report",
     "text": "For each finding give `file:line` or the package and version, the severity, whether it is reachable, and the fix. Mark what you did not run, and say that a scanner's output needs a person to confirm it."
    }
   ],
   "path": ".github/skills/rlm-vulnerability-check",
   "files": [],
   "helperScripts": 0,
   "notChecked": true,
   "group": "vulnerability",
   "grade": {
    "grade": "A-",
    "score": "4.20",
    "scores": [
     5,
     4,
     4,
     3,
     4
    ],
    "design": true,
    "rank": 21
   }
  },
  {
   "id": "rlm-vulnerability-disclosure",
   "goal": "Vulnerability disclosure process: how outside reporters reach the team and how reports are handled.",
   "cat": "Installed",
   "on": false,
   "use": "Vulnerability disclosure process: how outside reporters reach the team and how reports are handled. Use when a reporter finds a flaw in the product.",
   "prompt": "Use the rlm-vulnerability-disclosure skill.",
   "input": "",
   "output": "",
   "pros": [],
   "cons": [],
   "items": [
    "input-1",
    "input-2",
    "input-3",
    "input-4",
    "input-5",
    "input-6"
   ],
   "steps": [
    {
     "layout": "row",
     "note": "Check the channel. A published address or form for reports exists."
    },
    {
     "layout": "chunks",
     "note": "Check the response. The process names who acknowledges, triages and fixes.",
     "groups": [
      0,
      0,
      1,
      1,
      2,
      2
     ]
    },
    {
     "layout": "parallel",
     "note": "Check the timeline. The team commits to acknowledge and update the reporter.",
     "groups": [
      0,
      0,
      1,
      1,
      2,
      2
     ],
     "state": [
      "ok",
      "ok",
      "ok",
      "ok",
      "ok",
      "ok"
     ]
    },
    {
     "layout": "funnel",
     "note": "Check the record. Each report is logged with its outcome."
    },
    {
     "layout": "gate",
     "note": "Report. The gaps in the channel, the response and the record.",
     "pass": [
      true,
      true,
      true,
      true,
      true,
      false
     ]
    }
   ],
   "outcome": null,
   "idea": "",
   "why": "",
   "protocol": [
    {
     "title": "Check the channel",
     "text": "A published address or form for reports exists."
    },
    {
     "title": "Check the response",
     "text": "The process names who acknowledges, triages and fixes."
    },
    {
     "title": "Check the timeline",
     "text": "The team commits to acknowledge and update the reporter."
    },
    {
     "title": "Check the record",
     "text": "Each report is logged with its outcome."
    },
    {
     "title": "Report",
     "text": "The gaps in the channel, the response and the record."
    }
   ],
   "path": ".github/skills/rlm-vulnerability-disclosure",
   "files": [],
   "helperScripts": 0,
   "notChecked": true,
   "group": "vulnerability",
   "grade": {
    "grade": "B",
    "score": "3.65",
    "scores": [
     4,
     4,
     3,
     3,
     4
    ],
    "design": true,
    "rank": 179
   }
  },
  {
   "id": "rlm-vulnerability-metrics",
   "goal": "Vulnerability metrics report: open findings, age, fix rate and SLA breaches by team.",
   "cat": "Installed",
   "on": false,
   "use": "Vulnerability metrics report: open findings, age, fix rate and SLA breaches by team. Use when a team or leadership needs a vulnerability summary.",
   "prompt": "Use the rlm-vulnerability-metrics skill.",
   "input": "",
   "output": "",
   "pros": [],
   "cons": [],
   "items": [
    "input-1",
    "input-2",
    "input-3",
    "input-4",
    "input-5",
    "input-6"
   ],
   "steps": [
    {
     "layout": "row",
     "note": "Count the open findings by severity and by team."
    },
    {
     "layout": "chunks",
     "note": "Measure the age of each open finding.",
     "groups": [
      0,
      0,
      1,
      1,
      2,
      2
     ]
    },
    {
     "layout": "parallel",
     "note": "Measure the fix rate over the period.",
     "groups": [
      0,
      0,
      1,
      1,
      2,
      2
     ],
     "state": [
      "ok",
      "ok",
      "ok",
      "ok",
      "ok",
      "ok"
     ]
    },
    {
     "layout": "funnel",
     "note": "List the SLA breaches with their owners."
    },
    {
     "layout": "gate",
     "note": "Report. The figures, the trend and the top three risks for action.",
     "pass": [
      true,
      true,
      true,
      true,
      true,
      false
     ]
    }
   ],
   "outcome": null,
   "idea": "",
   "why": "",
   "protocol": [
    {
     "title": "Count the open findings by severity and by team",
     "text": ""
    },
    {
     "title": "Measure the age of each open finding",
     "text": ""
    },
    {
     "title": "Measure the fix rate over the period",
     "text": ""
    },
    {
     "title": "List the SLA breaches with their owners",
     "text": ""
    },
    {
     "title": "Report",
     "text": "The figures, the trend and the top three risks for action."
    }
   ],
   "path": ".github/skills/rlm-vulnerability-metrics",
   "files": [],
   "helperScripts": 0,
   "notChecked": true,
   "group": "vulnerability",
   "grade": {
    "grade": "B",
    "score": "3.45",
    "scores": [
     3,
     4,
     3,
     4,
     4
    ],
    "design": true,
    "rank": 203
   }
  },
  {
   "id": "rlm-vulnerability-sla",
   "goal": "Vulnerability remediation SLA: time limits for fixing findings by severity and exposure.",
   "cat": "Installed",
   "on": false,
   "use": "Vulnerability remediation SLA: time limits for fixing findings by severity and exposure. Use when a team needs a fixing timetable for vulnerabilities.",
   "prompt": "Use the rlm-vulnerability-sla skill.",
   "input": "",
   "output": "",
   "pros": [],
   "cons": [],
   "items": [
    "input-1",
    "input-2",
    "input-3",
    "input-4",
    "input-5",
    "input-6"
   ],
   "steps": [
    {
     "layout": "row",
     "note": "List the severities and exposure levels."
    },
    {
     "layout": "chunks",
     "note": "Set the time limits. Each level gets a remediation deadline.",
     "groups": [
      0,
      0,
      1,
      1,
      2,
      2
     ]
    },
    {
     "layout": "parallel",
     "note": "Check the clock. Note the date each finding was found.",
     "groups": [
      0,
      0,
      1,
      1,
      2,
      2
     ],
     "state": [
      "ok",
      "ok",
      "ok",
      "ok",
      "ok",
      "ok"
     ]
    },
    {
     "layout": "funnel",
     "note": "Check the breaches. List findings past their deadline and their owners."
    },
    {
     "layout": "gate",
     "note": "Report. The timetable, the breaches and the owners' next steps.",
     "pass": [
      true,
      true,
      true,
      true,
      true,
      false
     ]
    }
   ],
   "outcome": null,
   "idea": "",
   "why": "",
   "protocol": [
    {
     "title": "List the severities and exposure levels",
     "text": ""
    },
    {
     "title": "Set the time limits",
     "text": "Each level gets a remediation deadline."
    },
    {
     "title": "Check the clock",
     "text": "Note the date each finding was found."
    },
    {
     "title": "Check the breaches",
     "text": "List findings past their deadline and their owners."
    },
    {
     "title": "Report",
     "text": "The timetable, the breaches and the owners' next steps."
    }
   ],
   "path": ".github/skills/rlm-vulnerability-sla",
   "files": [],
   "helperScripts": 0,
   "notChecked": true,
   "group": "vulnerability",
   "grade": {
    "grade": "B+",
    "score": "3.85",
    "scores": [
     4,
     4,
     4,
     3,
     4
    ],
    "design": true,
    "rank": 105
   }
  },
  {
   "id": "rlm-web-app-platform",
   "goal": "Review and build installable, offline-capable web apps and correct time and locale handling: web app manifest…",
   "cat": "Installed",
   "on": false,
   "use": "Review and build installable, offline-capable web apps and correct time and locale handling: web app manifest and install flow, service worker caching and updates, origin migration, Intl formatting, calendars, time zones and precise timestamps. Use when making a site installable or offline-capable, moving it to a new origin, or fixing date, time or locale bugs.",
   "prompt": "Use the rlm-web-app-platform skill on the records for this review.",
   "input": "The records for this review, as text or CSV",
   "output": "A draft report: findings with location, fix and a not-checked list",
   "pros": [
    "Checks a manifest missing name, short_name, id, start_url, scope, display, theme_color, background_color, or 192 and 512 pixel icons including a maskable one; an install button that relies on beforeinstallpr."
   ],
   "cons": [
    "Not checked: Behaviour on each platform's install flow unless tested, server-side date handling outside the scope, and time zone database updates on the server."
   ],
   "items": [
    "manifest.json",
    "sw.js",
    "index.html",
    "app-shell.js",
    "icons/192.png",
    "locale.ts"
   ],
   "steps": [
    {
     "layout": "row",
     "note": "Inspect. The records in scope are listed, and any skipped file is reported."
    },
    {
     "layout": "chunks",
     "groups": [
      0,
      0,
      1,
      1,
      2,
      2
     ],
     "note": "Partition. The records are cut into chunks, each read on its own."
    },
    {
     "layout": "parallel",
     "groups": [
      0,
      0,
      1,
      1,
      2,
      2
     ],
     "state": [
      "bad",
      "warn",
      "ok",
      "ok",
      "ok",
      "ok"
     ],
     "note": "Map. Each chunk is checked against this skill's rules, one chunk at a time."
    },
    {
     "layout": "bins",
     "bins": [
      "installable",
      "offline gap",
      "locale issue"
     ],
     "binOf": [
      0,
      1,
      0,
      0,
      0,
      2
     ],
     "note": "Rank. Each file is placed by its effect on install, offline use and locale handling."
    },
    {
     "layout": "gate",
     "pass": [
      false,
      true,
      true,
      true,
      true,
      true
     ],
     "note": "Verify. Each cited line is re-read, and a finding that does not hold is dropped."
    },
    {
     "layout": "doc",
     "docLabel": "draft report",
     "note": "Report. Status: draft for the owner to review. It is not a decision."
    }
   ],
   "outcome": {
    "verdict": "1 manifest is not installable",
    "tone": "bad",
    "bars": [
     [
      "high",
      1,
      "high"
     ],
     [
      "medium",
      1,
      "medium"
     ],
     [
      "low",
      1,
      "low"
     ]
    ],
    "findings": [
     {
      "sev": "high",
      "where": "manifest.json:12",
      "title": "Manifest missing the 512 pixel icon",
      "fix": "Add the 512 pixel icon with its purpose"
     },
     {
      "sev": "medium",
      "where": "sw.js:19",
      "title": "Cache holds a stale page",
      "fix": "Version the cache and remove the old entry"
     },
     {
      "sev": "low",
      "where": "locale.ts:26",
      "title": "Date shown in the server time zone",
      "fix": "Format the date in the user's time zone"
     }
    ],
    "notChecked": "Behaviour on each platform's install flow unless tested, server-side date handling outside the scope, and time zone database updates on the server."
   },
   "idea": "",
   "why": "",
   "protocol": [
    {
     "title": "Inspect",
     "text": "Run `python3 <skill>/scripts/rlm_corpus.py scan <corpus>`. Note the file count, line count and top-level folders. If the corpus is very large, agree the scope with the user, then narrow it with `--include 'src/*'` (repeatable) on every command. Files over 20 MB are skipped; `--max-bytes N` changes the limit. Report what `scan` lists as skipped."
    },
    {
     "title": "Partition",
     "text": "Run `WORK=$(mktemp -d)`, then `python3 <skill>/scripts/rlm_corpus.py chunk <corpus> \"$WORK/chunks\"`. Chunks are limited to 800 lines and 100,000 characters each, and are cut between definitions where possible. Each `chunk_NNN.md` holds the data notice and labelled file sections. `manifest.json` lists the chunks."
    },
    {
     "title": "Map",
     "text": "For each chunk, run a fresh sub-task (a subagent if you can start one) that sees only that chunk file and the \"Chunk task\" below. It writes `\"$WORK/out/<chunk>.out.md\"`. If you cannot start sub-tasks, run `python3 <skill>/scripts/rlm_corpus.py pending \"$WORK/chunks\" \"$WORK/out\"`. It lists the chunks that still have no output. Process the first one: read it, write its output, then run `pending` again. Repeat until nothing is pending. Never hold all chunks in context at once."
    },
    {
     "title": "Reduce",
     "text": "Run `python3 <skill>/scripts/rlm_corpus.py merge \"$WORK/out\" --out \"$WORK/merged.json\"`. If it lists `failed_outputs`, re-run those chunks. A missing or invalid output is not \"no findings\". Checks that span files (a duplicate across manifests, a route missing from a contract, a pattern repeated across chunks) are done on the merged list in this step. If the merged list is still too large to read, repeat steps 2 to 4 on the findings."
    },
    {
     "title": "Verify",
     "text": "For each date finding, give a concrete input that produces the wrong result, such as a daylight-saving change date, a viewer in another zone, or a non-Gregorian calendar. Check browser support against the targets, not from memory."
    },
    {
     "title": "Report",
     "text": "Write the report in the format below."
    },
    {
     "title": "Clean up",
     "text": "Delete `$WORK` after the report is delivered."
    }
   ],
   "path": ".github/skills/rlm-web-app-platform",
   "files": [
    "scripts/rlm_corpus.py"
   ],
   "helperScripts": 1,
   "notChecked": true,
   "group": "web",
   "grade": {
    "grade": "B",
    "score": "3.40",
    "scores": [
     4,
     3,
     4,
     2,
     3
    ],
    "design": true,
    "rank": 204
   },
   "example": "Illustrative example: the items and results are made up, not real output.\nSummary: 3 findings (1 high, 1 medium, 1 low).\n[high] manifest.json:12  Manifest missing the 512 pixel icon.\n       Fix: Add the 512 pixel icon with its purpose.\n[medium] sw.js:19  Cache holds a stale page.\n       Fix: Version the cache and remove the old entry.\n[low] locale.ts:26  Date shown in the server time zone.\n       Fix: Format the date in the user's time zone.\nNot checked: Behaviour on each platform's install flow unless tested, server-side date handling outside the scope, and time zone database updates on the server."
  },
  {
   "id": "rlm-web-app-review",
   "goal": "Review a web application for routes, sessions, security headers, input and output encoding, and dependencies.",
   "cat": "Installed",
   "on": false,
   "use": "Review a web application for routes, sessions, security headers, input and output encoding, and dependencies. Use when asked to review a web app before release.",
   "prompt": "Use the rlm-web-app-review skill.",
   "input": "",
   "output": "",
   "pros": [],
   "cons": [],
   "items": [
    "input-1",
    "input-2",
    "input-3",
    "input-4",
    "input-5",
    "input-6"
   ],
   "steps": [
    {
     "layout": "row",
     "note": "Read the app setup. Open the entry points, the router or route table, the session and cookie configuration, and the build and dependency files."
    },
    {
     "layout": "chunks",
     "note": "Check routes. List every route and its method.",
     "groups": [
      0,
      0,
      1,
      1,
      2,
      2
     ]
    },
    {
     "layout": "parallel",
     "note": "Check sessions and cookies. Cookies need `Secure`, `HttpOnly` and a `SameSite` value.",
     "groups": [
      0,
      0,
      1,
      1,
      2,
      2
     ],
     "state": [
      "ok",
      "ok",
      "ok",
      "ok",
      "ok",
      "ok"
     ]
    },
    {
     "layout": "funnel",
     "note": "Check input and output. Flag untrusted data written into HTML, JavaScript, URLs or SQL without encoding or parameters."
    },
    {
     "layout": "gate",
     "note": "Check headers. Look for Content-Security-Policy, HSTS, X-Content-Type-Options and a Referrer-Policy.",
     "pass": [
      true,
      true,
      true,
      true,
      true,
      false
     ]
    },
    {
     "layout": "doc",
     "note": "Check dependencies. Note packages with known advisories and scripts that run at install time.",
     "docLabel": "report"
    }
   ],
   "outcome": null,
   "idea": "",
   "why": "",
   "protocol": [
    {
     "title": "Read the app setup",
     "text": "Open the entry points, the router or route table, the session and cookie configuration, and the build and dependency files."
    },
    {
     "title": "Check routes",
     "text": "List every route and its method. Flag routes that change state with GET, and admin routes that are reachable without a check."
    },
    {
     "title": "Check sessions and cookies",
     "text": "Cookies need `Secure`, `HttpOnly` and a `SameSite` value. Flag session IDs in URLs, and sessions that never expire."
    },
    {
     "title": "Check input and output",
     "text": "Flag untrusted data written into HTML, JavaScript, URLs or SQL without encoding or parameters."
    },
    {
     "title": "Check headers",
     "text": "Look for Content-Security-Policy, HSTS, X-Content-Type-Options and a Referrer-Policy. Flag missing headers and `unsafe-inline` scripts."
    },
    {
     "title": "Check dependencies",
     "text": "Note packages with known advisories and scripts that run at install time."
    },
    {
     "title": "Check errors and logs",
     "text": "Flag stack traces shown to users, and secrets or personal data written to logs."
    },
    {
     "title": "Report",
     "text": "List each finding as `file:line`, with severity (high, medium or low), the problem and the fix. Mark what you did not run."
    }
   ],
   "path": ".github/skills/rlm-web-app-review",
   "files": [],
   "helperScripts": 0,
   "notChecked": true,
   "group": "web",
   "grade": {
    "grade": "B+",
    "score": "3.80",
    "scores": [
     4,
     4,
     3,
     4,
     4
    ],
    "design": true,
    "rank": 125
   }
  },
  {
   "id": "rlm-web-built-in-ai",
   "goal": "Review and build features that use on-device browser AI (prompt, summarize, translate, detect language) and p…",
   "cat": "Installed",
   "on": false,
   "use": "Review and build features that use on-device browser AI (prompt, summarize, translate, detect language) and pages that expose tools to browser agents, with availability checks, download handling, fallbacks and safe handling of model output. Use when adding a browser AI feature, or making a site usable by AI agents.",
   "prompt": "Use the rlm-web-built-in-ai skill on the records for this review.",
   "input": "The records for this review, as text or CSV",
   "output": "A draft report: findings with location, fix and a not-checked list",
   "pros": [
    "Checks each AI API feature-detected before use, with its availability result handled for every state (unavailable, downloadable, downloading, available) and a fallback instead of an error; a model download s."
   ],
   "cons": [
    "Not checked: Model behaviour and output quality, availability on specific devices, and draft specifications that changed after the date checked."
   ],
   "items": [
    "ai-summary.ts",
    "ai-translate.ts",
    "agent-tools.ts",
    "ai-detect.ts",
    "ui-prompt.tsx",
    "fallback.ts"
   ],
   "steps": [
    {
     "layout": "row",
     "note": "Inspect. The records in scope are listed, and any skipped file is reported."
    },
    {
     "layout": "chunks",
     "groups": [
      0,
      0,
      1,
      1,
      2,
      2
     ],
     "note": "Partition. The records are cut into chunks, each read on its own."
    },
    {
     "layout": "parallel",
     "groups": [
      0,
      0,
      1,
      1,
      2,
      2
     ],
     "state": [
      "bad",
      "ok",
      "warn",
      "ok",
      "ok",
      "ok"
     ],
     "note": "Map. Each chunk is checked against this skill's rules, one chunk at a time."
    },
    {
     "layout": "bins",
     "bins": [
      "detected before use",
      "not detected",
      "fallback present"
     ],
     "binOf": [
      1,
      0,
      1,
      0,
      1,
      2
     ],
     "note": "Rank. Each use of an on-device AI API is placed by whether it is detected and has a fallback."
    },
    {
     "layout": "gate",
     "pass": [
      false,
      true,
      true,
      true,
      true,
      true
     ],
     "note": "Verify. Each cited line is re-read, and a finding that does not hold is dropped."
    },
    {
     "layout": "doc",
     "docLabel": "draft report",
     "note": "Report. Status: draft for the owner to review. It is not a decision."
    }
   ],
   "outcome": {
    "verdict": "1 API used without feature detection",
    "tone": "bad",
    "bars": [
     [
      "high",
      1,
      "high"
     ],
     [
      "medium",
      1,
      "medium"
     ],
     [
      "low",
      1,
      "low"
     ]
    ],
    "findings": [
     {
      "sev": "high",
      "where": "ai-summary.ts:12",
      "title": "AI API used without feature detection",
      "fix": "Check the API exists before calling it"
     },
     {
      "sev": "medium",
      "where": "agent-tools.ts:19",
      "title": "Agent action with no confirmation step",
      "fix": "Ask the user before the action"
     },
     {
      "sev": "low",
      "where": "ui-prompt.tsx:26",
      "title": "Unavailable state not handled",
      "fix": "Show a message for the unavailable state"
     }
    ],
    "notChecked": "Model behaviour and output quality, availability on specific devices, and draft specifications that changed after the date checked."
   },
   "idea": "",
   "why": "",
   "protocol": [
    {
     "title": "Inspect",
     "text": "Run `python3 <skill>/scripts/rlm_corpus.py scan <corpus>`. Note the file count, line count and top-level folders. If the corpus is very large, agree the scope with the user, then narrow it with `--include 'src/*'` (repeatable) on every command. Files over 20 MB are skipped; `--max-bytes N` changes the limit. Report what `scan` lists as skipped."
    },
    {
     "title": "Partition",
     "text": "Run `WORK=$(mktemp -d)`, then `python3 <skill>/scripts/rlm_corpus.py chunk <corpus> \"$WORK/chunks\"`. Chunks are limited to 800 lines and 100,000 characters each, and are cut between definitions where possible. Each `chunk_NNN.md` holds the data notice and labelled file sections. `manifest.json` lists the chunks."
    },
    {
     "title": "Map",
     "text": "For each chunk, run a fresh sub-task (a subagent if you can start one) that sees only that chunk file and the \"Chunk task\" below. It writes `\"$WORK/out/<chunk>.out.md\"`. If you cannot start sub-tasks, run `python3 <skill>/scripts/rlm_corpus.py pending \"$WORK/chunks\" \"$WORK/out\"`. It lists the chunks that still have no output. Process the first one: read it, write its output, then run `pending` again. Repeat until nothing is pending. Never hold all chunks in context at once."
    },
    {
     "title": "Reduce",
     "text": "Run `python3 <skill>/scripts/rlm_corpus.py merge \"$WORK/out\" --out \"$WORK/merged.json\"`. If it lists `failed_outputs`, re-run those chunks. A missing or invalid output is not \"no findings\". Checks that span files (a duplicate across manifests, a route missing from a contract, a pattern repeated across chunks) are done on the merged list in this step. If the merged list is still too large to read, repeat steps 2 to 4 on the findings."
    },
    {
     "title": "Verify",
     "text": "For each untrusted-input finding, trace the path from the source to the prompt, and from the output to its use. A prompt instruction is not a security control; name the deterministic control or report the gap. Check API names and availability against the current documentation, because these APIs change."
    },
    {
     "title": "Report",
     "text": "Write the report in the format below."
    },
    {
     "title": "Clean up",
     "text": "Delete `$WORK` after the report is delivered."
    }
   ],
   "path": ".github/skills/rlm-web-built-in-ai",
   "files": [
    "scripts/rlm_corpus.py"
   ],
   "helperScripts": 1,
   "notChecked": true,
   "group": "web",
   "grade": {
    "grade": "C",
    "score": "2.65",
    "scores": [
     4,
     2,
     3,
     1,
     1
    ],
    "design": true,
    "rank": 217
   },
   "example": "Illustrative example: the items and results are made up, not real output.\nSummary: 3 findings (1 high, 1 medium, 1 low).\n[high] ai-summary.ts:12  AI API used without feature detection.\n       Fix: Check the API exists before calling it.\n[medium] agent-tools.ts:19  Agent action with no confirmation step.\n       Fix: Ask the user before the action.\n[low] ui-prompt.tsx:26  Unavailable state not handled.\n       Fix: Show a message for the unavailable state.\nNot checked: Model behaviour and output quality, availability on specific devices, and draft specifications that changed after the date checked."
  },
  {
   "id": "rlm-web-client-security",
   "goal": "Review and build browser-side security: passkeys with WebAuthn, content security policy, Trusted Types and HT…",
   "cat": "Installed",
   "on": false,
   "use": "Review and build browser-side security: passkeys with WebAuthn, content security policy, Trusted Types and HTML sanitizing, subresource integrity, cross-origin messaging, outbound-connection limits, browser cryptography, and client-side privacy. Use when adding sign-in or passkeys, rendering untrusted HTML, embedding third-party scripts, or reviewing front-end security.",
   "prompt": "Use the rlm-web-client-security skill on the records for this review.",
   "input": "The records for this review, as text or CSV",
   "output": "A draft report: findings with location, fix and a not-checked list",
   "pros": [
    "Checks passkey code (registration with a fresh single-use challenge, a correct rp.id, an opaque random user.id with no personal data, residentKey required, excludeCredentials; sign-in offering passkeys throu."
   ],
   "cons": [
    "Not checked: Server-side verification code outside the scope, headers added by infrastructure not in the repository, third-party script contents, and browser support for newer features."
   ],
   "items": [
    "signin.ts",
    "csp-header.conf",
    "sanitize.ts",
    "comments.tsx",
    "passkey.ts",
    "postmessage.ts"
   ],
   "steps": [
    {
     "layout": "row",
     "note": "Inspect. The records in scope are listed, and any skipped file is reported."
    },
    {
     "layout": "chunks",
     "groups": [
      0,
      0,
      1,
      1,
      2,
      2
     ],
     "note": "Partition. The records are cut into chunks, each read on its own."
    },
    {
     "layout": "parallel",
     "groups": [
      0,
      0,
      1,
      1,
      2,
      2
     ],
     "state": [
      "ok",
      "bad",
      "ok",
      "bad",
      "ok",
      "warn"
     ],
     "note": "Map. Each chunk is checked against this skill's rules, one chunk at a time."
    },
    {
     "layout": "gate",
     "pass": [
      true,
      false,
      true,
      false,
      true,
      true
     ],
     "note": "Gate. Each control is checked: passkeys, the CSP, sanitizing and cross-origin messages."
    },
    {
     "layout": "gate",
     "pass": [
      true,
      false,
      true,
      false,
      true,
      true
     ],
     "note": "Verify. Each cited line is re-read, and a finding that does not hold is dropped."
    },
    {
     "layout": "doc",
     "docLabel": "draft report",
     "note": "Report. Status: draft for the owner to review. It is not a decision."
    }
   ],
   "outcome": {
    "verdict": "2 injection or CSP issues",
    "tone": "bad",
    "bars": [
     [
      "high",
      2,
      "high"
     ],
     [
      "medium",
      1,
      "medium"
     ]
    ],
    "findings": [
     {
      "sev": "high",
      "where": "comments.tsx:12",
      "title": "User HTML rendered without sanitizing",
      "fix": "Sanitize the HTML before rendering"
     },
     {
      "sev": "high",
      "where": "csp-header.conf:19",
      "title": "CSP allows unsafe-inline scripts",
      "fix": "Remove unsafe-inline and use nonces"
     },
     {
      "sev": "medium",
      "where": "postmessage.ts:26",
      "title": "Message origin is not checked",
      "fix": "Check event.origin against an allow-list"
     }
    ],
    "notChecked": "Server-side verification code outside the scope, headers added by infrastructure not in the repository, third-party script contents, and browser support for newer features."
   },
   "idea": "",
   "why": "",
   "protocol": [
    {
     "title": "Inspect",
     "text": "Run `python3 <skill>/scripts/rlm_corpus.py scan <corpus>`. Note the file count, line count and top-level folders. If the corpus is very large, agree the scope with the user, then narrow it with `--include 'src/*'` (repeatable) on every command. Files over 20 MB are skipped; `--max-bytes N` changes the limit. Report what `scan` lists as skipped."
    },
    {
     "title": "Partition",
     "text": "Run `WORK=$(mktemp -d)`, then `python3 <skill>/scripts/rlm_corpus.py chunk <corpus> \"$WORK/chunks\"`. Chunks are limited to 800 lines and 100,000 characters each, and are cut between definitions where possible. Each `chunk_NNN.md` holds the data notice and labelled file sections. `manifest.json` lists the chunks."
    },
    {
     "title": "Map",
     "text": "For each chunk, run a fresh sub-task (a subagent if you can start one) that sees only that chunk file and the \"Chunk task\" below. It writes `\"$WORK/out/<chunk>.out.md\"`. If you cannot start sub-tasks, run `python3 <skill>/scripts/rlm_corpus.py pending \"$WORK/chunks\" \"$WORK/out\"`. It lists the chunks that still have no output. Process the first one: read it, write its output, then run `pending` again. Repeat until nothing is pending. Never hold all chunks in context at once."
    },
    {
     "title": "Reduce",
     "text": "Run `python3 <skill>/scripts/rlm_corpus.py merge \"$WORK/out\" --out \"$WORK/merged.json\"`. If it lists `failed_outputs`, re-run those chunks. A missing or invalid output is not \"no findings\". Checks that span files (a duplicate across manifests, a route missing from a contract, a pattern repeated across chunks) are done on the merged list in this step. If the merged list is still too large to read, repeat steps 2 to 4 on the findings."
    },
    {
     "title": "Verify",
     "text": "For each injection finding, trace the data from its source to the sink and confirm no sanitiser or escaping sits between them. Recommend a maintained library for WebAuthn verification and for sanitising; never recommend rolling your own."
    },
    {
     "title": "Report",
     "text": "Write the report in the format below."
    },
    {
     "title": "Clean up",
     "text": "Delete `$WORK` after the report is delivered."
    }
   ],
   "path": ".github/skills/rlm-web-client-security",
   "files": [
    "scripts/rlm_corpus.py"
   ],
   "helperScripts": 1,
   "notChecked": true,
   "group": "web",
   "grade": {
    "grade": "A+",
    "score": "4.60",
    "scores": [
     5,
     5,
     5,
     3,
     4
    ],
    "design": true,
    "rank": 3
   },
   "example": "Illustrative example: the items and results are made up, not real output.\nSummary: 3 findings (2 high, 1 medium).\n[high] comments.tsx:12  User HTML rendered without sanitizing.\n       Fix: Sanitize the HTML before rendering.\n[high] csp-header.conf:19  CSP allows unsafe-inline scripts.\n       Fix: Remove unsafe-inline and use nonces.\n[medium] postmessage.ts:26  Message origin is not checked.\n       Fix: Check event.origin against an allow-list.\nNot checked: Server-side verification code outside the scope, headers added by infrastructure not in the repository, third-party script contents, and browser support for newer features."
  },
  {
   "id": "rlm-web-css-layout",
   "goal": "Review and write modern CSS: container queries, :has(), cascade layers, intrinsic and fluid sizing, logical p…",
   "cat": "Installed",
   "on": false,
   "use": "Review and write modern CSS: container queries, :has(), cascade layers, intrinsic and fluid sizing, logical properties, typography, colour, dark mode and scrollbars, with feature detection for the project's browser targets. Use when writing or reviewing stylesheets, fixing layout bugs, or replacing JavaScript layout code with CSS.",
   "prompt": "Use the rlm-web-css-layout skill on the records for this review.",
   "input": "The records for this review, as text or CSV",
   "output": "A draft report: findings with location, fix and a not-checked list",
   "pros": [
    "Checks layout (container queries, not viewport queries or resize listeners, for components that adapt to their container; grid for two-dimensional layout and subgrid where supported; intrinsic sizing and cla."
   ],
   "cons": [
    "Not checked: Rendering in real browsers and devices, styles generated at run time, third-party widget styles, and visual design quality beyond these checks."
   ],
   "items": [
    "layout.css",
    "cards.css",
    "nav.css",
    "forms.css",
    "theme.css",
    "print.css"
   ],
   "steps": [
    {
     "layout": "row",
     "note": "Inspect. The records in scope are listed, and any skipped file is reported."
    },
    {
     "layout": "chunks",
     "groups": [
      0,
      0,
      1,
      1,
      2,
      2
     ],
     "note": "Partition. The records are cut into chunks, each read on its own."
    },
    {
     "layout": "parallel",
     "groups": [
      0,
      0,
      1,
      1,
      2,
      2
     ],
     "state": [
      "ok",
      "warn",
      "ok",
      "ok",
      "ok",
      "ok"
     ],
     "note": "Map. Each chunk is checked against this skill's rules, one chunk at a time."
    },
    {
     "layout": "match",
     "targets": [
      "container query",
      "viewport query"
     ],
     "pairs": [
      0,
      1,
      0,
      0,
      0,
      0
     ],
     "targetState": [
      "ok",
      "warn"
     ],
     "note": "Compare. Each rule is matched to the layout approach it uses: container or viewport."
    },
    {
     "layout": "gate",
     "pass": [
      true,
      true,
      true,
      true,
      true,
      true
     ],
     "note": "Verify. Each cited line is re-read, and a finding that does not hold is dropped."
    },
    {
     "layout": "doc",
     "docLabel": "draft report",
     "note": "Report. Status: draft for the owner to review. It is not a decision."
    }
   ],
   "outcome": {
    "verdict": "1 component uses a viewport query",
    "tone": "warn",
    "bars": [
     [
      "medium",
      1,
      "medium"
     ],
     [
      "low",
      2,
      "low"
     ]
    ],
    "findings": [
     {
      "sev": "medium",
      "where": "cards.css:12",
      "title": "Viewport query on a component that adapts to its container",
      "fix": "Use a container query"
     },
     {
      "sev": "low",
      "where": "theme.css:19",
      "title": "Dark-mode colours hardcoded",
      "fix": "Use colour tokens"
     },
     {
      "sev": "low",
      "where": "nav.css:26",
      "title": "Fixed pixel width breaks at narrow widths",
      "fix": "Use a fluid width"
     }
    ],
    "notChecked": "Rendering in real browsers and devices, styles generated at run time, third-party widget styles, and visual design quality beyond these checks."
   },
   "idea": "",
   "why": "",
   "protocol": [
    {
     "title": "Inspect",
     "text": "Run `python3 <skill>/scripts/rlm_corpus.py scan <corpus>`. Note the file count, line count and top-level folders. If the corpus is very large, agree the scope with the user, then narrow it with `--include 'src/*'` (repeatable) on every command. Files over 20 MB are skipped; `--max-bytes N` changes the limit. Report what `scan` lists as skipped."
    },
    {
     "title": "Partition",
     "text": "Run `WORK=$(mktemp -d)`, then `python3 <skill>/scripts/rlm_corpus.py chunk <corpus> \"$WORK/chunks\"`. Chunks are limited to 800 lines and 100,000 characters each, and are cut between definitions where possible. Each `chunk_NNN.md` holds the data notice and labelled file sections. `manifest.json` lists the chunks."
    },
    {
     "title": "Map",
     "text": "For each chunk, run a fresh sub-task (a subagent if you can start one) that sees only that chunk file and the \"Chunk task\" below. It writes `\"$WORK/out/<chunk>.out.md\"`. If you cannot start sub-tasks, run `python3 <skill>/scripts/rlm_corpus.py pending \"$WORK/chunks\" \"$WORK/out\"`. It lists the chunks that still have no output. Process the first one: read it, write its output, then run `pending` again. Repeat until nothing is pending. Never hold all chunks in context at once."
    },
    {
     "title": "Reduce",
     "text": "Run `python3 <skill>/scripts/rlm_corpus.py merge \"$WORK/out\" --out \"$WORK/merged.json\"`. If it lists `failed_outputs`, re-run those chunks. A missing or invalid output is not \"no findings\". Checks that span files (a duplicate across manifests, a route missing from a contract, a pattern repeated across chunks) are done on the merged list in this step. If the merged list is still too large to read, repeat steps 2 to 4 on the findings."
    },
    {
     "title": "Verify",
     "text": "Re-read each cited line. Where you recommend replacing JavaScript with CSS, confirm the behaviour is the same at the narrowest and widest supported widths and at 200 percent text size. Never claim browser support from memory as fact; say what to check."
    },
    {
     "title": "Report",
     "text": "Write the report in the format below."
    },
    {
     "title": "Clean up",
     "text": "Delete `$WORK` after the report is delivered."
    }
   ],
   "path": ".github/skills/rlm-web-css-layout",
   "files": [
    "scripts/rlm_corpus.py"
   ],
   "helperScripts": 1,
   "notChecked": true,
   "group": "web",
   "grade": {
    "grade": "B",
    "score": "3.60",
    "scores": [
     4,
     3,
     3,
     4,
     4
    ],
    "design": true,
    "rank": 188
   },
   "example": "Illustrative example: the items and results are made up, not real output.\nSummary: 3 findings (1 medium, 2 low).\n[medium] cards.css:12  Viewport query on a component that adapts to its container.\n       Fix: Use a container query.\n[low] theme.css:19  Dark-mode colours hardcoded.\n       Fix: Use colour tokens.\n[low] nav.css:26  Fixed pixel width breaks at narrow widths.\n       Fix: Use a fluid width.\nNot checked: Rendering in real browsers and devices, styles generated at run time, third-party widget styles, and visual design quality beyond these checks."
  },
  {
   "id": "rlm-web-forms-autofill",
   "goal": "Review and build web forms that browsers and password managers can fill: autocomplete tokens, input types, la…",
   "cat": "Installed",
   "on": false,
   "use": "Review and build web forms that browsers and password managers can fill: autocomplete tokens, input types, labels, validation and error feedback, one-time codes, IME-safe submit, and customizable form controls. Use when building or reviewing sign-in, sign-up, checkout, address or any data-entry form.",
   "prompt": "Use the rlm-web-forms-autofill skill on the records for this review.",
   "input": "The records for this review, as text or CSV",
   "output": "A draft report: findings with location, fix and a not-checked list",
   "pros": [],
   "cons": [
    "Not checked: Behaviour in specific password managers and browsers, server-side validation outside the scope, and SMS delivery for one-time codes."
   ],
   "items": [
    "signup.html",
    "checkout.html",
    "login.html",
    "address.html",
    "otp.html",
    "payment.html"
   ],
   "steps": [
    {
     "layout": "row",
     "note": "Inspect. The records in scope are listed, and any skipped file is reported."
    },
    {
     "layout": "chunks",
     "groups": [
      0,
      0,
      1,
      1,
      2,
      2
     ],
     "note": "Partition. The records are cut into chunks, each read on its own."
    },
    {
     "layout": "parallel",
     "groups": [
      0,
      0,
      1,
      1,
      2,
      2
     ],
     "state": [
      "ok",
      "bad",
      "warn",
      "ok",
      "warn",
      "ok"
     ],
     "note": "Map. Each chunk is checked against this skill's rules, one chunk at a time."
    },
    {
     "layout": "bins",
     "bins": [
      "autocomplete set",
      "autocomplete missing",
      "one-time code"
     ],
     "binOf": [
      0,
      1,
      0,
      1,
      2,
      0
     ],
     "note": "Rank. Each form is placed by whether its fields carry autocomplete tokens."
    },
    {
     "layout": "gate",
     "pass": [
      true,
      false,
      true,
      true,
      true,
      true
     ],
     "note": "Verify. Each cited line is re-read, and a finding that does not hold is dropped."
    },
    {
     "layout": "doc",
     "docLabel": "draft report",
     "note": "Report. Status: draft for the owner to review. It is not a decision."
    }
   ],
   "outcome": {
    "verdict": "1 checkout form cannot be autofilled",
    "tone": "bad",
    "bars": [
     [
      "high",
      1,
      "high"
     ],
     [
      "medium",
      2,
      "medium"
     ]
    ],
    "findings": [
     {
      "sev": "high",
      "where": "checkout.html:12",
      "title": "Payment fields with no autocomplete token",
      "fix": "Add the autocomplete tokens for card fields"
     },
     {
      "sev": "medium",
      "where": "login.html:19",
      "title": "Password field with no autocomplete",
      "fix": "Add autocomplete set to current-password"
     },
     {
      "sev": "medium",
      "where": "otp.html:26",
      "title": "One-time code not marked",
      "fix": "Add autocomplete one-time-code"
     }
    ],
    "notChecked": "Behaviour in specific password managers and browsers, server-side validation outside the scope, and SMS delivery for one-time codes."
   },
   "idea": "",
   "why": "",
   "protocol": [
    {
     "title": "Inspect",
     "text": "Run `python3 <skill>/scripts/rlm_corpus.py scan <corpus>`. Note the file count, line count and top-level folders. If the corpus is very large, agree the scope with the user, then narrow it with `--include 'src/*'` (repeatable) on every command. Files over 20 MB are skipped; `--max-bytes N` changes the limit. Report what `scan` lists as skipped."
    },
    {
     "title": "Partition",
     "text": "Run `WORK=$(mktemp -d)`, then `python3 <skill>/scripts/rlm_corpus.py chunk <corpus> \"$WORK/chunks\"`. Chunks are limited to 800 lines and 100,000 characters each, and are cut between definitions where possible. Each `chunk_NNN.md` holds the data notice and labelled file sections. `manifest.json` lists the chunks."
    },
    {
     "title": "Map",
     "text": "For each chunk, run a fresh sub-task (a subagent if you can start one) that sees only that chunk file and the \"Chunk task\" below. It writes `\"$WORK/out/<chunk>.out.md\"`. If you cannot start sub-tasks, run `python3 <skill>/scripts/rlm_corpus.py pending \"$WORK/chunks\" \"$WORK/out\"`. It lists the chunks that still have no output. Process the first one: read it, write its output, then run `pending` again. Repeat until nothing is pending. Never hold all chunks in context at once."
    },
    {
     "title": "Reduce",
     "text": "Run `python3 <skill>/scripts/rlm_corpus.py merge \"$WORK/out\" --out \"$WORK/merged.json\"`. If it lists `failed_outputs`, re-run those chunks. A missing or invalid output is not \"no findings\". Checks that span files (a duplicate across manifests, a route missing from a contract, a pattern repeated across chunks) are done on the merged list in this step. If the merged list is still too large to read, repeat steps 2 to 4 on the findings."
    },
    {
     "title": "Verify",
     "text": "Re-read each cited line. Where a framework renders the form, check the attributes in the component code. For any missing validation or sanitising finding, trace the data to the sink."
    },
    {
     "title": "Report",
     "text": "Write the report in the format below."
    },
    {
     "title": "Clean up",
     "text": "Delete `$WORK` after the report is delivered."
    }
   ],
   "path": ".github/skills/rlm-web-forms-autofill",
   "files": [
    "scripts/rlm_corpus.py"
   ],
   "helperScripts": 1,
   "notChecked": true,
   "group": "web",
   "grade": {
    "grade": "A",
    "score": "4.35",
    "scores": [
     5,
     4,
     4,
     4,
     4
    ],
    "design": true,
    "rank": 9
   },
   "example": "Illustrative example: the items and results are made up, not real output.\nSummary: 3 findings (1 high, 2 medium).\n[high] checkout.html:12  Payment fields with no autocomplete token.\n       Fix: Add the autocomplete tokens for card fields.\n[medium] login.html:19  Password field with no autocomplete.\n       Fix: Add autocomplete set to current-password.\n[medium] otp.html:26  One-time code not marked.\n       Fix: Add autocomplete one-time-code.\nNot checked: Behaviour in specific password managers and browsers, server-side validation outside the scope, and SMS delivery for one-time codes."
  },
  {
   "id": "rlm-web-performance",
   "goal": "Review and improve front-end loading and responsiveness against Core Web Vitals (LCP, INP, CLS): resource pri…",
   "cat": "Installed",
   "on": false,
   "use": "Review and improve front-end loading and responsiveness against Core Web Vitals (LCP, INP, CLS): resource priority, images and fonts, script loading, long tasks and scheduling, rendering work, navigation speed and analytics beacons. Use when a page is slow to load or respond, when Core Web Vitals fail, or before shipping a heavy front-end change.",
   "prompt": "Use the rlm-web-performance skill on the records for this review.",
   "input": "The records for this review, as text or CSV",
   "output": "A draft report: findings with location, fix and a not-checked list",
   "pros": [
    "Checks an LCP resource that is not in the initial HTML, is lazy-loaded, or lacks fetchpriority high; scripts loaded without defer, async or type module where they could be; large render-blocking CSS; third-p."
   ],
   "cons": [
    "Not checked: Real-user data if none was given, server response time and CDN configuration, low-end devices and slow networks unless tested, and features whose support was not confirmed for the targets."
   ],
   "items": [
    "home.html",
    "product.html",
    "app.js",
    "hero.jpg",
    "font.woff2",
    "analytics.js"
   ],
   "steps": [
    {
     "layout": "row",
     "note": "Inspect. The records in scope are listed, and any skipped file is reported."
    },
    {
     "layout": "chunks",
     "groups": [
      0,
      0,
      1,
      1,
      2,
      2
     ],
     "note": "Partition. The records are cut into chunks, each read on its own."
    },
    {
     "layout": "parallel",
     "groups": [
      0,
      0,
      1,
      1,
      2,
      2
     ],
     "state": [
      "ok",
      "ok",
      "ok",
      "bad",
      "ok",
      "warn"
     ],
     "note": "Map. Each chunk is checked against this skill's rules, one chunk at a time."
    },
    {
     "layout": "bins",
     "bins": [
      "fast",
      "slow to load",
      "third-party cost"
     ],
     "binOf": [
      0,
      0,
      0,
      1,
      0,
      2
     ],
     "note": "Rank. Each file is placed by its effect on loading and on the third-party cost."
    },
    {
     "layout": "gate",
     "pass": [
      true,
      true,
      true,
      false,
      true,
      true
     ],
     "note": "Verify. Each cited line is re-read, and a finding that does not hold is dropped."
    },
    {
     "layout": "doc",
     "docLabel": "draft report",
     "note": "Report. Status: draft for the owner to review. It is not a decision."
    }
   ],
   "outcome": {
    "verdict": "the LCP image is lazy-loaded",
    "tone": "bad",
    "bars": [
     [
      "high",
      1,
      "high"
     ],
     [
      "medium",
      1,
      "medium"
     ],
     [
      "low",
      1,
      "low"
     ]
    ],
    "findings": [
     {
      "sev": "high",
      "where": "hero.jpg:12",
      "title": "LCP image is lazy-loaded",
      "fix": "Load the hero image eagerly with high priority"
     },
     {
      "sev": "medium",
      "where": "analytics.js:19",
      "title": "Third-party script blocks rendering",
      "fix": "Load it with defer or async"
     },
     {
      "sev": "low",
      "where": "app.js:26",
      "title": "Script loaded without defer",
      "fix": "Add defer"
     }
    ],
    "notChecked": "Real-user data if none was given, server response time and CDN configuration, low-end devices and slow networks unless tested, and features whose support was not confirmed for the targets."
   },
   "idea": "",
   "why": "",
   "protocol": [
    {
     "title": "Inspect",
     "text": "Run `python3 <skill>/scripts/rlm_corpus.py scan <corpus>`. Note the file count, line count and top-level folders. If the corpus is very large, agree the scope with the user, then narrow it with `--include 'src/*'` (repeatable) on every command. Files over 20 MB are skipped; `--max-bytes N` changes the limit. Report what `scan` lists as skipped."
    },
    {
     "title": "Partition",
     "text": "Run `WORK=$(mktemp -d)`, then `python3 <skill>/scripts/rlm_corpus.py chunk <corpus> \"$WORK/chunks\"`. Chunks are limited to 800 lines and 100,000 characters each, and are cut between definitions where possible. Each `chunk_NNN.md` holds the data notice and labelled file sections. `manifest.json` lists the chunks."
    },
    {
     "title": "Map",
     "text": "For each chunk, run a fresh sub-task (a subagent if you can start one) that sees only that chunk file and the \"Chunk task\" below. It writes `\"$WORK/out/<chunk>.out.md\"`. If you cannot start sub-tasks, run `python3 <skill>/scripts/rlm_corpus.py pending \"$WORK/chunks\" \"$WORK/out\"`. It lists the chunks that still have no output. Process the first one: read it, write its output, then run `pending` again. Repeat until nothing is pending. Never hold all chunks in context at once."
    },
    {
     "title": "Reduce",
     "text": "Run `python3 <skill>/scripts/rlm_corpus.py merge \"$WORK/out\" --out \"$WORK/merged.json\"`. If it lists `failed_outputs`, re-run those chunks. A missing or invalid output is not \"no findings\". Checks that span files (a duplicate across manifests, a route missing from a contract, a pattern repeated across chunks) are done on the merged list in this step. If the merged list is still too large to read, repeat steps 2 to 4 on the findings."
    },
    {
     "title": "Verify",
     "text": "For each high-severity finding, state the metric it affects and why, and how to confirm the improvement (a field metric, or a lab trace before and after). Do not claim a speed-up you have not measured. Use field data if it was given; otherwise say the ranking is an estimate. Check newer APIs (scheduler.yield, speculation rules, fetch priority, content-visibility) against the targets."
    },
    {
     "title": "Report",
     "text": "Write the report in the format below."
    },
    {
     "title": "Clean up",
     "text": "Delete `$WORK` after the report is delivered."
    }
   ],
   "path": ".github/skills/rlm-web-performance",
   "files": [
    "scripts/rlm_corpus.py"
   ],
   "helperScripts": 1,
   "notChecked": true,
   "group": "web",
   "grade": {
    "grade": "B",
    "score": "3.65",
    "scores": [
     4,
     4,
     3,
     3,
     4
    ],
    "design": true,
    "rank": 180
   },
   "example": "Illustrative example: the items and results are made up, not real output.\nSummary: 3 findings (1 high, 1 medium, 1 low).\n[high] hero.jpg:12  LCP image is lazy-loaded.\n       Fix: Load the hero image eagerly with high priority.\n[medium] analytics.js:19  Third-party script blocks rendering.\n       Fix: Load it with defer or async.\n[low] app.js:26  Script loaded without defer.\n       Fix: Add defer.\nNot checked: Real-user data if none was given, server response time and CDN configuration, low-end devices and slow networks unless tested, and features whose support was not confirmed for the targets."
  },
  {
   "id": "rlm-web-ui-components",
   "goal": "Review and build interactive UI with platform features before custom JavaScript: dialogs, popovers, menus, ta…",
   "cat": "Installed",
   "on": false,
   "use": "Review and build interactive UI with platform features before custom JavaScript: dialogs, popovers, menus, tabs, accordions, tooltips, toasts, carousels, anchor positioning, view transitions, scroll-driven effects and drag, each keyboard- and screen-reader-ready and respectful of reduced motion. Use when building or reviewing UI components, animations or scroll effects.",
   "prompt": "Use the rlm-web-ui-components skill on the records for this review.",
   "input": "The records for this review, as text or CSV",
   "output": "A draft report: findings with location, fix and a not-checked list",
   "pros": [],
   "cons": [
    "Not checked: Behaviour in real assistive technology and browsers, third-party component internals, and visual design quality."
   ],
   "items": [
    "dialog-confirm.tsx",
    "menu-nav.tsx",
    "tabs-settings.tsx",
    "tooltip-help.tsx",
    "toast-save.tsx",
    "carousel-hero.tsx"
   ],
   "steps": [
    {
     "layout": "row",
     "note": "Inspect. The records in scope are listed, and any skipped file is reported."
    },
    {
     "layout": "chunks",
     "groups": [
      0,
      0,
      1,
      1,
      2,
      2
     ],
     "note": "Partition. The records are cut into chunks, each read on its own."
    },
    {
     "layout": "parallel",
     "groups": [
      0,
      0,
      1,
      1,
      2,
      2
     ],
     "state": [
      "bad",
      "ok",
      "warn",
      "ok",
      "ok",
      "ok"
     ],
     "note": "Map. Each chunk is checked against this skill's rules, one chunk at a time."
    },
    {
     "layout": "bins",
     "bins": [
      "platform feature",
      "custom code to replace",
      "focus broken"
     ],
     "binOf": [
      2,
      0,
      1,
      0,
      1,
      1
     ],
     "note": "Rank. Each component is placed by whether it uses platform features and whether focus works."
    },
    {
     "layout": "gate",
     "pass": [
      false,
      true,
      true,
      true,
      true,
      true
     ],
     "note": "Verify. Each cited line is re-read, and a finding that does not hold is dropped."
    },
    {
     "layout": "doc",
     "docLabel": "draft report",
     "note": "Report. Status: draft for the owner to review. It is not a decision."
    }
   ],
   "outcome": {
    "verdict": "1 dialog loses focus on close",
    "tone": "bad",
    "bars": [
     [
      "high",
      1,
      "high"
     ],
     [
      "medium",
      1,
      "medium"
     ],
     [
      "low",
      1,
      "low"
     ]
    ],
    "findings": [
     {
      "sev": "high",
      "where": "dialog-confirm.tsx:12",
      "title": "Focus not returned to the opener on close",
      "fix": "Return focus to the button that opened it"
     },
     {
      "sev": "medium",
      "where": "tabs-settings.tsx:19",
      "title": "Arrow keys not supported in the tabs",
      "fix": "Add arrow-key navigation"
     },
     {
      "sev": "low",
      "where": "toast-save.tsx:26",
      "title": "Toast rebuilt in custom code",
      "fix": "Use the platform's popover"
     }
    ],
    "notChecked": "Behaviour in real assistive technology and browsers, third-party component internals, and visual design quality."
   },
   "idea": "",
   "why": "",
   "protocol": [
    {
     "title": "Inspect",
     "text": "Run `python3 <skill>/scripts/rlm_corpus.py scan <corpus>`. Note the file count, line count and top-level folders. If the corpus is very large, agree the scope with the user, then narrow it with `--include 'src/*'` (repeatable) on every command. Files over 20 MB are skipped; `--max-bytes N` changes the limit. Report what `scan` lists as skipped."
    },
    {
     "title": "Partition",
     "text": "Run `WORK=$(mktemp -d)`, then `python3 <skill>/scripts/rlm_corpus.py chunk <corpus> \"$WORK/chunks\"`. Chunks are limited to 800 lines and 100,000 characters each, and are cut between definitions where possible. Each `chunk_NNN.md` holds the data notice and labelled file sections. `manifest.json` lists the chunks."
    },
    {
     "title": "Map",
     "text": "For each chunk, run a fresh sub-task (a subagent if you can start one) that sees only that chunk file and the \"Chunk task\" below. It writes `\"$WORK/out/<chunk>.out.md\"`. If you cannot start sub-tasks, run `python3 <skill>/scripts/rlm_corpus.py pending \"$WORK/chunks\" \"$WORK/out\"`. It lists the chunks that still have no output. Process the first one: read it, write its output, then run `pending` again. Repeat until nothing is pending. Never hold all chunks in context at once."
    },
    {
     "title": "Reduce",
     "text": "Run `python3 <skill>/scripts/rlm_corpus.py merge \"$WORK/out\" --out \"$WORK/merged.json\"`. If it lists `failed_outputs`, re-run those chunks. A missing or invalid output is not \"no findings\". Checks that span files (a duplicate across manifests, a route missing from a contract, a pattern repeated across chunks) are done on the merged list in this step. If the merged list is still too large to read, repeat steps 2 to 4 on the findings."
    },
    {
     "title": "Verify",
     "text": "Re-read each cited line. For each component, walk the keyboard path in the code: how focus enters, moves and leaves. Never claim browser support from memory as fact."
    },
    {
     "title": "Report",
     "text": "Write the report in the format below."
    },
    {
     "title": "Clean up",
     "text": "Delete `$WORK` after the report is delivered."
    }
   ],
   "path": ".github/skills/rlm-web-ui-components",
   "files": [
    "scripts/rlm_corpus.py"
   ],
   "helperScripts": 1,
   "notChecked": true,
   "group": "web",
   "grade": {
    "grade": "B",
    "score": "3.60",
    "scores": [
     4,
     3,
     3,
     4,
     4
    ],
    "design": true,
    "rank": 189
   },
   "example": "Illustrative example: the items and results are made up, not real output.\nSummary: 3 findings (1 high, 1 medium, 1 low).\n[high] dialog-confirm.tsx:12  Focus not returned to the opener on close.\n       Fix: Return focus to the button that opened it.\n[medium] tabs-settings.tsx:19  Arrow keys not supported in the tabs.\n       Fix: Add arrow-key navigation.\n[low] toast-save.tsx:26  Toast rebuilt in custom code.\n       Fix: Use the platform's popover.\nNot checked: Behaviour in real assistive technology and browsers, third-party component internals, and visual design quality."
  },
  {
   "id": "rlm-websocket-review",
   "goal": "Review WebSocket code for origin checks, authentication, message size limits, reconnection and cleanup.",
   "cat": "Installed",
   "on": false,
   "use": "Review WebSocket code for origin checks, authentication, message size limits, reconnection and cleanup. Use when realtime features are added or changed.",
   "prompt": "Use the rlm-websocket-review skill.",
   "input": "",
   "output": "",
   "pros": [],
   "cons": [],
   "items": [
    "input-1",
    "input-2",
    "input-3",
    "input-4",
    "input-5",
    "input-6"
   ],
   "steps": [
    {
     "layout": "row",
     "note": "Read the connection code. Open the handshake, the message handler and the close handler."
    },
    {
     "layout": "chunks",
     "note": "Check the origin. The server must check the Origin header.",
     "groups": [
      0,
      0,
      1,
      1,
      2,
      2
     ]
    },
    {
     "layout": "parallel",
     "note": "Check authentication. Authenticate at the handshake and again for sensitive messages.",
     "groups": [
      0,
      0,
      1,
      1,
      2,
      2
     ],
     "state": [
      "ok",
      "ok",
      "ok",
      "ok",
      "ok",
      "ok"
     ]
    },
    {
     "layout": "funnel",
     "note": "Check limits. Flag missing limits on message size and message rate."
    },
    {
     "layout": "gate",
     "note": "Check reconnection and cleanup. Clients should reconnect with a back-off, and the server should release state for closed connections.",
     "pass": [
      true,
      true,
      true,
      true,
      true,
      false
     ]
    },
    {
     "layout": "doc",
     "note": "Report. List each finding with its file and line, severity and the fix.",
     "docLabel": "report"
    }
   ],
   "outcome": null,
   "idea": "",
   "why": "",
   "protocol": [
    {
     "title": "Read the connection code",
     "text": "Open the handshake, the message handler and the close handler."
    },
    {
     "title": "Check the origin",
     "text": "The server must check the Origin header. Flag servers that accept any origin."
    },
    {
     "title": "Check authentication",
     "text": "Authenticate at the handshake and again for sensitive messages. Flag connections that trust the client's identity claims."
    },
    {
     "title": "Check limits",
     "text": "Flag missing limits on message size and message rate."
    },
    {
     "title": "Check reconnection and cleanup",
     "text": "Clients should reconnect with a back-off, and the server should release state for closed connections."
    },
    {
     "title": "Report",
     "text": "List each finding with its file and line, severity and the fix."
    }
   ],
   "path": ".github/skills/rlm-websocket-review",
   "files": [],
   "helperScripts": 0,
   "notChecked": true,
   "group": "web",
   "grade": {
    "grade": "B",
    "score": "3.55",
    "scores": [
     4,
     3,
     4,
     3,
     3
    ],
    "design": true,
    "rank": 192
   }
  },
  {
   "id": "rlm-xunit-review",
   "goal": "xUnit review: fact and theory use, shared fixtures and assertions that can fail.",
   "cat": "Installed",
   "on": false,
   "use": "xUnit review: fact and theory use, shared fixtures and assertions that can fail. Use when xUnit tests are added or changed.",
   "prompt": "Use the rlm-xunit-review skill.",
   "input": "",
   "output": "",
   "pros": [],
   "cons": [],
   "items": [
    "input-1",
    "input-2",
    "input-3",
    "input-4",
    "input-5",
    "input-6"
   ],
   "steps": [
    {
     "layout": "row",
     "note": "List the test classes and their fixtures."
    },
    {
     "layout": "chunks",
     "note": "Check theories. Flag theories with one data row or duplicated facts.",
     "groups": [
      0,
      0,
      1,
      1,
      2,
      2
     ]
    },
    {
     "layout": "parallel",
     "note": "Check fixtures. Flag shared mutable fixtures that couple tests.",
     "groups": [
      0,
      0,
      1,
      1,
      2,
      2
     ],
     "state": [
      "ok",
      "ok",
      "ok",
      "ok",
      "ok",
      "ok"
     ]
    },
    {
     "layout": "funnel",
     "note": "Check assertions. Flag tests that assert nothing or only that no exception occurred."
    },
    {
     "layout": "gate",
     "note": "Report. Each finding with file and line, the problem and the fix.",
     "pass": [
      true,
      true,
      true,
      true,
      true,
      false
     ]
    }
   ],
   "outcome": null,
   "idea": "",
   "why": "",
   "protocol": [
    {
     "title": "List the test classes and their fixtures",
     "text": ""
    },
    {
     "title": "Check theories",
     "text": "Flag theories with one data row or duplicated facts."
    },
    {
     "title": "Check fixtures",
     "text": "Flag shared mutable fixtures that couple tests."
    },
    {
     "title": "Check assertions",
     "text": "Flag tests that assert nothing or only that no exception occurred."
    },
    {
     "title": "Report",
     "text": "Each finding with file and line, the problem and the fix."
    }
   ],
   "path": ".github/skills/rlm-xunit-review",
   "files": [],
   "helperScripts": 0,
   "notChecked": true,
   "group": "dotnet",
   "grade": {
    "grade": "B+",
    "score": "3.80",
    "scores": [
     4,
     4,
     3,
     4,
     4
    ],
    "design": true,
    "rank": 126
   }
  },
  {
   "id": "rlm-zero-day-response",
   "goal": "Zero-day response: a plan for an unpatched vulnerability being actively exploited.",
   "cat": "Installed",
   "on": false,
   "use": "Zero-day response: a plan for an unpatched vulnerability being actively exploited. Use when a vulnerability is reported with no fix available.",
   "prompt": "Use the rlm-zero-day-response skill.",
   "input": "",
   "output": "",
   "pros": [],
   "cons": [],
   "items": [
    "input-1",
    "input-2",
    "input-3",
    "input-4",
    "input-5",
    "input-6"
   ],
   "steps": [
    {
     "layout": "row",
     "note": "Confirm the exposure. Which systems run the affected component."
    },
    {
     "layout": "chunks",
     "note": "Apply mitigations. List configuration or network steps that reduce exposure now.",
     "groups": [
      0,
      0,
      1,
      1,
      2,
      2
     ]
    },
    {
     "layout": "parallel",
     "note": "Set the watch. Alerts for exploitation attempts on affected systems.",
     "groups": [
      0,
      0,
      1,
      1,
      2,
      2
     ],
     "state": [
      "ok",
      "ok",
      "ok",
      "ok",
      "ok",
      "ok"
     ]
    },
    {
     "layout": "funnel",
     "note": "Plan the fix. Note the release that will patch it and the rollback."
    },
    {
     "layout": "gate",
     "note": "Report. The exposure, the mitigations in place, the watch and the owner.",
     "pass": [
      true,
      true,
      true,
      true,
      true,
      false
     ]
    }
   ],
   "outcome": null,
   "idea": "",
   "why": "",
   "protocol": [
    {
     "title": "Confirm the exposure",
     "text": "Which systems run the affected component."
    },
    {
     "title": "Apply mitigations",
     "text": "List configuration or network steps that reduce exposure now."
    },
    {
     "title": "Set the watch",
     "text": "Alerts for exploitation attempts on affected systems."
    },
    {
     "title": "Plan the fix",
     "text": "Note the release that will patch it and the rollback."
    },
    {
     "title": "Report",
     "text": "The exposure, the mitigations in place, the watch and the owner."
    }
   ],
   "path": ".github/skills/rlm-zero-day-response",
   "files": [],
   "helperScripts": 0,
   "notChecked": true,
   "group": "vulnerability",
   "grade": {
    "grade": "A-",
    "score": "4.10",
    "scores": [
     5,
     4,
     4,
     3,
     3
    ],
    "design": true,
    "rank": 27
   }
  }
 ]
};
