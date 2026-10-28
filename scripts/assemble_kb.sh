#!/bin/bash
# Assemble kb-content.json from parts + build consolidated master KB + validate
set -e
KB=/home/z/my-project/download/postpartum-kb
SCR=/home/z/my-project/scripts

# 1. Assemble kb-content.json (part1 ends mid-array after phase-3 object; part2 continues)
cat "$SCR/kb-part1.json" "$SCR/kb-part2.json" > "$KB/kb-content.json"

# 2. Validate JSON syntax
python3 -m json.tool "$KB/kb-content.json" > /dev/null && echo "PASS: kb-content.json is valid JSON"

# 3. Optional: validate against the JSON Schema (draft-07) if jsonschema module exists
python3 - <<'PYEOF'
import json, sys
try:
    import jsonschema
    kb = json.load(open('/home/z/my-project/download/postpartum-kb/kb-content.json'))
    # Extract schema from the markdown file between the ```json fences
    md = open('/home/z/my-project/download/postpartum-kb/06-json-schema-app-integration.md').read()
    start = md.index('```json') + len('```json')
    end = md.index('```', start)
    schema = json.loads(md[start:end])
    jsonschema.validate(kb, schema)
    print("PASS: kb-content.json validates against postpartum-kb JSON Schema")
except ImportError:
    print("SKIP: jsonschema module not installed (JSON syntax already validated)")
except Exception as e:
    print("SCHEMA VALIDATION ISSUE:", e)
    sys.exit(1)
PYEOF

# 4. Build the consolidated master KB for Custom GPT upload (header + parts 1-3 + Q&A + references)
cat "$SCR/kb-master-header.md" \
    "$KB/01-nutritional-framework.md" \
    "$KB/02-timeline-diet-plan.md" \
    "$KB/03-myths-vs-facts.md" \
    "$KB/04-qa-pairs.md" \
    "$KB/07-evidence-references.md" \
    > "$KB/postpartum-csection-kb-master.md"

# 5. Report
echo "--- File sizes (lines / words / bytes) ---"
wc -lw "$KB"/*.md "$KB"/*.json
