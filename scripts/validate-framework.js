const fs = require('fs');
const path = require('path');

const root = path.resolve(__dirname, '..');
const errors = [];

const skillMap = {
  architect: 'agentframe-architect',
  planner: 'agentframe-planner',
  specification: 'agentframe-specification',
  implementer: 'agentframe-implementer',
  reviewer: 'agentframe-reviewer',
  tester: 'agentframe-tester',
  refactor: 'agentframe-refactor',
  documenter: 'agentframe-documenter',
  project_memory: 'agentframe-project-memory',
  design_guardian: 'agentframe-design-guardian',
  plugin_architect: 'agentframe-plugin-architect',
  api_guardian: 'agentframe-api-guardian',
  configuration_manager: 'agentframe-configuration-manager',
  compatibility_manager: 'agentframe-compatibility-manager',
  data_model_guardian: 'agentframe-data-model-guardian',
  reproducibility_guardian: 'agentframe-reproducibility-guardian',
  governance_guardian: 'agentframe-governance-guardian',
  ci_guardian: 'agentframe-ci-guardian',
  release_manager: 'agentframe-release-manager',
  security_guardian: 'agentframe-security-guardian',
  dependency_guardian: 'agentframe-dependency-guardian',
  observability_guardian: 'agentframe-observability-guardian',
  migration_guardian: 'agentframe-migration-guardian',
  frontend_experience_guardian: 'agentframe-frontend-experience-guardian',
};

const frameworkHeadings = ['Purpose','Scope','Rules','Required Workflow','Inputs','Outputs','Decision Criteria','Failure Modes','Human Review Requirements','Maintenance Instructions'];
const skillHeadings = ['Mission','When To Use This Skill','When Not To Use This Skill','Responsibilities','Explicit Non-Responsibilities','Required Inputs','Required Outputs','Operating Principles','Step-By-Step Workflow','Constraints','Forbidden Behaviors','Review Criteria','Handoff Rules','Failure Handling','Interaction With Other Skills','File Update Obligations','Quality Bar','Completion Criteria'];
const checklistHeadings = ['Pre-Flight Checklist','Execution Checklist','Output Checklist','Safety Checklist','Review Checklist','Handoff Checklist','Stop Conditions'];
const templateHeadings = ['Purpose','Metadata','Required Sections','Optional Sections','Review Checklist','Completion Criteria'];
const validInstallableSkills = new Set(Object.values(skillMap));
const validOperatingLanes = new Set(['Lite', 'Standard', 'Extended', 'Governance']);
const guardedSurfaceSkills = new Set([
  'agentframe-design-guardian',
  'agentframe-plugin-architect',
  'agentframe-api-guardian',
  'agentframe-configuration-manager',
  'agentframe-compatibility-manager',
  'agentframe-data-model-guardian',
  'agentframe-reproducibility-guardian',
  'agentframe-governance-guardian',
  'agentframe-ci-guardian',
  'agentframe-release-manager',
  'agentframe-security-guardian',
  'agentframe-dependency-guardian',
  'agentframe-observability-guardian',
  'agentframe-migration-guardian',
  'agentframe-frontend-experience-guardian',
]);
const liteDefaultForbiddenSkills = new Set([
  'agentframe-architect',
  'agentframe-planner',
  'agentframe-release-manager',
  'agentframe-governance-guardian',
  ...guardedSurfaceSkills,
]);
const implicitInvocationPolicy = {
  'agentframe-governance-guardian': false,
  'agentframe-ci-guardian': false,
  'agentframe-release-manager': false,
  'agentframe-migration-guardian': false,
  'agentframe-observability-guardian': false,
  'agentframe-frontend-experience-guardian': false,
};
const requiredGoldenScenarios = [
  'tiny_bugfix.md',
  'small_feature.md',
  'api_change.md',
  'config_change.md',
  'architecture_change.md',
  'release_task.md',
  'doc_only.md',
  'dependency_upgrade.md',
  'review_task.md',
  'migration_task.md',
  'security_review.md',
  'performance_investigation.md',
  'governance_update.md',
  'no_unrelated_files.md',
  'project_memory_refresh.md',
];
const goldenScenarioHeadings = [
  'User Prompt',
  'Expected Operating Lane',
  'Expected Primary Skill',
  'Allowed Secondary Skills',
  'Forbidden Skills',
  'Escalation Triggers',
  'Expected Stop Condition',
  'Expected Artifact',
  'Forbidden Behaviors',
  'Over-Governance Risks',
  'Under-Governance Risks',
];
const demoHeadings = [
  'Purpose',
  'What This Demo Shows',
  'Before AgentFrame',
  'After AgentFrame: Lite Lane',
  'Escalation Example',
  'Standard Lane Example',
  'Extended Lane Example',
  'Final Report Shape',
  'What To Try Next',
];
const feedbackLoopHeadings = [
  'Purpose',
  'What Counts As A Framework Failure',
  'Failure Categories',
  'Triage Workflow',
  'Convert A Failure Into A Golden Scenario',
  'Convert A Failure Into A Skill Prompt Change',
  'Convert A Failure Into A Routing Change',
  'Convert A Failure Into A Validator Check',
  'When Not To Change The Framework',
  'Field Note Template',
  'Maintenance Checklist',
];
const goldenReadmeHeadings = [
  'Purpose',
  'What Golden Scenarios Validate',
  'What Golden Scenarios Do Not Validate',
  'Scenario Fields',
  'Operating Lane Expectations',
  'Over-Governance And Under-Governance',
  'Adding A New Scenario',
  'Updating A Scenario',
  'Validator Expectations',
];
const feedbackFieldNoteFields = [
  'Date:',
  'Repository context:',
  'User prompt:',
  'Expected lane:',
  'Actual behavior:',
  'Failure category:',
  'Files affected:',
  'What should have happened:',
  'Proposed golden scenario change:',
  'Proposed skill/default_prompt change:',
  'Proposed routing change:',
  'Proposed validator change:',
  'Human review needed:',
];

function full(file) { return path.join(root, file); }

function read(file) {
  const filePath = full(file);
  if (!fs.existsSync(filePath)) {
    errors.push(`${file}: missing required file`);
    return '';
  }
  const text = fs.readFileSync(filePath, 'utf8');
  if (!text.trim()) errors.push(`${file}: file is empty`);
  if (text.includes('[TODO:') || text.includes('TODO placeholder')) errors.push(`${file}: placeholder text remains`);
  const nonHeading = text.split(/\r?\n/).filter(line => line.trim() && !line.trim().startsWith('#'));
  if (nonHeading.length < 3) errors.push(`${file}: appears placeholder-only`);
  return text;
}

function requireHeadings(file, headings) {
  const text = read(file);
  for (const heading of headings) {
    if (!text.includes(`## ${heading}`)) errors.push(`${file}: missing heading ## ${heading}`);
  }
  return text;
}

function listFiles(dir) {
  const dirPath = full(dir);
  if (!fs.existsSync(dirPath)) return [];
  const out = [];
  for (const entry of fs.readdirSync(dirPath, { withFileTypes: true })) {
    const rel = path.join(dir, entry.name);
    if (entry.isDirectory()) out.push(...listFiles(rel));
    else out.push(rel);
  }
  return out;
}

function section(text, heading) {
  const marker = `## ${heading}`;
  const start = text.indexOf(marker);
  if (start === -1) return '';
  const rest = text.slice(start + marker.length);
  const next = rest.search(/\n## /);
  return (next === -1 ? rest : rest.slice(0, next)).trim();
}

function splitSectionLines(text, heading) {
  return section(text, heading).split(/\r?\n/).map(line => line.trim()).filter(Boolean);
}

function extractSkillRefs(text) {
  return Array.from(text.matchAll(/\bagentframe-[a-z0-9-]+\b/g)).map(match => match[0]);
}

function tokenize(text) {
  return new Set(text.toLowerCase().replace(/`[^`]+`/g, '').match(/[a-z0-9]+/g) || []);
}

function jaccard(a, b) {
  const left = tokenize(a);
  const right = tokenize(b);
  const intersection = Array.from(left).filter(token => right.has(token)).length;
  const union = new Set([...left, ...right]).size;
  return union ? intersection / union : 0;
}

function validateSkillRefs(file, text) {
  for (const heading of ['Handoff Rules', 'Interaction With Other Skills']) {
    const body = section(text, heading);
    for (const ref of extractSkillRefs(body)) {
      if (!validInstallableSkills.has(ref)) {
        errors.push(`${file}: invalid skill reference ${ref} in section "${heading}"; allowed targets: ${Array.from(validInstallableSkills).sort().join(', ')}`);
      }
    }
  }
}

function validateSectionBody(file, text, heading, options = {}) {
  const lines = splitSectionLines(text, heading);
  if (!lines.length) {
    errors.push(`${file}: section "${heading}" has no body`);
    return;
  }
  const items = lines.filter(line => /^[-*]\s+/.test(line) || /^\d+\.\s+/.test(line));
  if (options.minItems && items.length < options.minItems) {
    errors.push(`${file}: section "${heading}" needs at least ${options.minItems} bullets/items`);
  }
}

function validateRequiredSectionBodies(file, text, headings) {
  for (const heading of headings) validateSectionBody(file, text, heading);
}

function validateChecklistBodies(file, text) {
  for (const heading of checklistHeadings) validateSectionBody(file, text, heading, { minItems: 1 });
}

function stripFrontmatter(text) {
  return text.replace(/^---\n[\s\S]*?\n---\n\n?/, '');
}

function normalizeSkillText(text) {
  let out = stripFrontmatter(text).trim();
  for (const [local, installable] of Object.entries(skillMap)) {
    out = out.split(installable).join(local);
  }
  return out.replace(/\r\n/g, '\n').replace(/[ \t]+$/gm, '').replace(/\n{3,}/g, '\n\n').trim();
}

function validateExplicitNonResponsibilities(file, text) {
  const body = section(text, 'Explicit Non-Responsibilities');
  if (!body.includes('This skill must not:')) {
    errors.push(`${file}: Explicit Non-Responsibilities must use prohibitive wording with "This skill must not:"`);
  }
  const bullets = body.split(/\r?\n/).filter(line => line.trim().startsWith('- '));
  if (!bullets.length) errors.push(`${file}: Explicit Non-Responsibilities has no bullet list`);
  const actionVerbs = /^(add|allow|approve|assume|bundle|bypass|change|claim|collect|commit|copy|create|delete|depend|document|drop|duplicate|execute|expand|hide|hand-roll|ignore|implement|introduce|leave|log|lose|make|merge|mix|modify|overwrite|perform|print|publish|raise|rely|remove|rename|replace|reuse|rubber-stamp|ship|skip|store|test|treat|use|weaken|write)\b/;
  for (const bullet of bullets) {
    const normalized = bullet.trim().toLowerCase();
    const words = normalized.replace(/^- /, '').split(/\s+/).filter(Boolean);
    if (words.length < 2 || /^(hidden|silent|accidental|undocumented|unbounded)\b/.test(words[0])) {
      errors.push(`${file}: non-responsibility bullet should be an action prohibition, not a fragment: ${bullet.trim()}`);
    }
    if (!actionVerbs.test(words.join(' '))) {
      errors.push(`${file}: non-responsibility bullet should start with an action verb: ${bullet.trim()}`);
    }
  }
}

function validateHandoff(file, text, selfName) {
  const body = section(text, 'Handoff Rules');
  if (!body) {
    errors.push(`${file}: missing Handoff Rules body`);
    return;
  }
  const lower = body.toLowerCase();
  const escaped = selfName.toLowerCase().replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
  const selfHandoff = new RegExp(`handoff to (?:\\\\\`)?${escaped}(?:\\\\\`)?\\\\b`);
  if (selfHandoff.test(lower) && !lower.includes('self-handoff allowed')) {
    errors.push(`${file}: Handoff Rules contain apparent self-handoff to ${selfName}`);
  }
  if (body.includes('Handoff to `planner` when work must be split into executable tasks.')) {
    errors.push(`${file}: Handoff Rules still contain the old generic block`);
  }
  validateSectionBody(file, text, 'Handoff Rules', { minItems: 2 });
}

function validateOpenAiYaml(file, skillName) {
  const text = read(file);
  for (const key of ['display_name:', 'short_description:', 'default_prompt:']) {
    if (!text.includes(key)) errors.push(`${file}: missing ${key}`);
  }
  const promptMatch = text.match(/default_prompt:\s*"([\s\S]*?)"\s*(?:\n\n|\npolicy:|$)/);
  if (!promptMatch) {
    errors.push(`${file}: default_prompt must be a quoted string`);
    return;
  }
  const prompt = promptMatch[1];
  if (!prompt.includes(`$${skillName}`)) errors.push(`${file}: default_prompt must mention $${skillName}`);
  if (prompt.length < 140) errors.push(`${file}: default_prompt is too short to be operational`);
  for (const phrase of ['First ', 'Produce ', 'Do not ']) {
    if (!prompt.includes(phrase)) errors.push(`${file}: default_prompt should include role-specific operational phrase "${phrase}"`);
  }
  if (!prompt.includes('Hand off') && !prompt.includes('Stop')) {
    errors.push(`${file}: default_prompt should include stopping or handoff behavior`);
  }
  if (/Use \$agentframe-[^.]+ for this software engineering task\.?/.test(prompt)) {
    errors.push(`${file}: default_prompt is still generic`);
  }
  if (prompt.includes('required governance or engineering artifact')) {
    errors.push(`${file}: default_prompt uses generic artifact wording instead of a role-specific artifact`);
  }
  for (const ref of extractSkillRefs(prompt)) {
    if (!validInstallableSkills.has(ref)) {
      errors.push(`${file}: default_prompt references invalid skill ${ref}`);
    }
  }
  const expectedImplicit = implicitInvocationPolicy[skillName] ?? true;
  if (!text.includes(`allow_implicit_invocation: ${expectedImplicit}`)) {
    errors.push(`${file}: allow_implicit_invocation must be ${expectedImplicit} according to AgentFrame triggering policy`);
  }
}

function validateTemplate(file) {
  const text = requireHeadings(file, templateHeadings);
  validateRequiredSectionBodies(file, text, templateHeadings);
  if (text.includes('Required content: describe')) errors.push(`${file}: contains repeated placeholder phrase "Required content: describe"`);
  const openQuestions = text.match(/\bOpen questions\b/g) || [];
  if (openQuestions.length > 1) errors.push(`${file}: duplicate "Open questions" fields; consolidate or clarify`);
  const generatedDates = text.match(/\b20\d{2}-\d{2}-\d{2}\b/g) || [];
  for (const found of generatedDates) {
    if (found !== 'YYYY-MM-DD') errors.push(`${file}: contains hard-coded generated date ${found}`);
  }
}

function extractReadmeVersion(text) {
  const match = text.match(/Current release:\s*([0-9]+\.[0-9]+\.[0-9]+)\./);
  return match ? match[1] : '';
}

function extractFrameworkVersion(text) {
  const match = text.match(/Current version:\s*`?([0-9]+\.[0-9]+\.[0-9]+)`?/);
  return match ? match[1] : '';
}

function extractLatestChangelogVersion(text) {
  const match = text.match(/^##\s+([0-9]+\.[0-9]+\.[0-9]+)\s+-\s+\d{4}-\d{2}-\d{2}/m);
  return match ? match[1] : '';
}

function validateVersionCoherence() {
  const pkg = packageJson.version || '';
  const readme = extractReadmeVersion(read('README.md'));
  const framework = extractFrameworkVersion(read('.codex/framework/FRAMEWORK_VERSION.md'));
  const changelog = extractLatestChangelogVersion(read('CHANGELOG.md'));
  const values = { 'package.json': pkg, 'README.md': readme, '.codex/framework/FRAMEWORK_VERSION.md': framework, 'CHANGELOG.md': changelog };
  for (const [file, version] of Object.entries(values)) {
    if (!version) errors.push(`${file}: could not extract current AgentFrame version`);
  }
  const unique = new Set(Object.values(values).filter(Boolean));
  if (unique.size > 1) {
    errors.push(`version mismatch: package.json=${pkg}, README.md=${readme}, FRAMEWORK_VERSION.md=${framework}, CHANGELOG.md=${changelog}`);
  }
}

function validateSkillPairDrift(installableFile, frameworkFile, installableText, frameworkText) {
  const normalizedInstallable = normalizeSkillText(installableText);
  const normalizedFramework = normalizeSkillText(frameworkText);
  if (normalizedInstallable === normalizedFramework) return;
  const drift = [];
  for (const heading of skillHeadings) {
    if (section(normalizedInstallable, heading) !== section(normalizedFramework, heading)) drift.push(heading);
  }
  errors.push(`${installableFile} <-> ${frameworkFile}: substantive drift detected after normalizing installable metadata and skill names`);
  errors.push(`${installableFile} <-> ${frameworkFile}: drift in sections: ${drift.length ? drift.join(', ') : 'unknown whole-file difference outside required sections'}`);
}

function validateDescriptionQuality(descriptions) {
  const normalized = new Map();
  for (const [file, description] of descriptions) {
    const norm = description.toLowerCase().replace(/[^a-z0-9]+/g, ' ').replace(/\s+/g, ' ').trim();
    if (normalized.has(norm)) {
      errors.push(`${file}: frontmatter description duplicates ${normalized.get(norm)}`);
    }
    normalized.set(norm, file);
    if (!/^"?Use when\b/i.test(description.trim())) {
      errors.push(`${file}: frontmatter description should begin with "Use when" for trigger clarity`);
    }
  }
  for (let i = 0; i < descriptions.length; i++) {
    for (let j = i + 1; j < descriptions.length; j++) {
      const [fileA, descA] = descriptions[i];
      const [fileB, descB] = descriptions[j];
      const score = jaccard(descA, descB);
      if (score > 0.88) {
        errors.push(`${fileA} and ${fileB}: frontmatter descriptions are too similar (${score.toFixed(2)}); add stronger trigger disambiguation`);
      }
    }
  }
}

function parseGoldenScenario(file) {
  const text = requireHeadings(file, goldenScenarioHeadings);
  const lane = section(text, 'Expected Operating Lane').split(/\r?\n/).map(line => line.trim()).filter(Boolean)[0] || '';
  const primary = section(text, 'Expected Primary Skill').split(/\r?\n/).map(line => line.trim()).filter(Boolean)[0] || '';
  const allowed = splitSectionLines(text, 'Allowed Secondary Skills').map(line => line.replace(/^[-*]\s+/, ''));
  const forbidden = splitSectionLines(text, 'Forbidden Skills').map(line => line.replace(/^[-*]\s+/, ''));
  return { text, lane, primary, allowed, forbidden };
}

function validateGoldenScenarios() {
  for (const name of requiredGoldenScenarios) {
    const file = path.join('tests/golden', name);
    const scenario = parseGoldenScenario(file);
    const refs = [scenario.primary, ...scenario.allowed, ...scenario.forbidden].filter(Boolean);
    const invoked = [scenario.primary, ...scenario.allowed].filter(Boolean);
    for (const ref of refs) {
      if (!validInstallableSkills.has(ref)) {
        errors.push(`${file}: invalid golden scenario skill reference ${ref}`);
      }
    }
    if (!validOperatingLanes.has(scenario.lane)) {
      errors.push(`${file}: Expected Operating Lane must be one of ${Array.from(validOperatingLanes).join(', ')}`);
    }
    if (scenario.forbidden.includes(scenario.primary)) {
      errors.push(`${file}: expected primary skill is also forbidden`);
    }
    for (const ref of scenario.allowed) {
      if (scenario.forbidden.includes(ref)) {
        errors.push(`${file}: skill ${ref} appears in both allowed and forbidden lists`);
      }
    }
    for (const heading of goldenScenarioHeadings) {
      if (!section(scenario.text, heading)) errors.push(`${file}: missing ${heading} body`);
    }
    if (scenario.lane === 'Lite') {
      for (const ref of invoked) {
        if (liteDefaultForbiddenSkills.has(ref)) {
          errors.push(`${file}: Lite scenario invokes ${ref}; justify escalation by changing the operating lane or removing the default-forbidden skill`);
        }
      }
    }
    if (scenario.lane === 'Standard') {
      const guardedCount = invoked.filter(ref => guardedSurfaceSkills.has(ref)).length;
      if (guardedCount > 1) {
        errors.push(`${file}: Standard scenario invokes too many guarded-surface skills by default (${guardedCount})`);
      }
    }
    if (scenario.lane === 'Extended' && !section(scenario.text, 'Escalation Triggers').includes('Guarded surface:')) {
      errors.push(`${file}: Extended scenario must name the specific guarded surface in Escalation Triggers`);
    }
    if (scenario.lane === 'Governance' && !invoked.includes('agentframe-governance-guardian')) {
      errors.push(`${file}: Governance scenario must include agentframe-governance-guardian`);
    }
  }
}

function validateUsagePatterns() {
  const text = read('docs/USAGE_PATTERNS.md').toLowerCase();
  const requiredPatterns = {
    dependency: ['dependency'],
    migration: ['migration'],
    security: ['security'],
    performance_or_observability: ['performance', 'observability'],
    no_unrelated_files: ['no-unrelated-files', 'unrelated files'],
    adoption_assessment: ['adoption assessment'],
    plan_only: ['plan only'],
    memory_refresh: ['memory refresh', 'refresh project memory'],
    chinese_templates: ['中文提示词模板'],
  };
  for (const [name, terms] of Object.entries(requiredPatterns)) {
    if (!terms.some(term => text.includes(term))) {
      errors.push(`docs/USAGE_PATTERNS.md: missing ${name} usage template coverage`);
    }
  }
}

function requireLinks(file, links) {
  const text = read(file);
  for (const link of links) {
    if (!text.includes(link)) errors.push(`${file}: missing link to ${link}`);
  }
}

function validateDemoDocs() {
  const demoText = requireHeadings('docs/DEMO.md', demoHeadings);
  if (!demoText.includes('# AgentFrame Demo')) errors.push('docs/DEMO.md: missing title # AgentFrame Demo');
  for (const required of ['$agentframe-implementer', 'Lite', 'Standard', 'Extended', 'changed files', 'validation']) {
    if (!demoText.toLowerCase().includes(required.toLowerCase())) errors.push(`docs/DEMO.md: missing demo key term ${required}`);
  }

  const feedbackText = requireHeadings('docs/FEEDBACK_LOOP.md', feedbackLoopHeadings);
  if (!feedbackText.includes('# AgentFrame Feedback Loop')) errors.push('docs/FEEDBACK_LOOP.md: missing title # AgentFrame Feedback Loop');
  for (const field of feedbackFieldNoteFields) {
    if (!feedbackText.includes(field)) errors.push(`docs/FEEDBACK_LOOP.md: missing Field Note Template field ${field}`);
  }
  for (const category of [
    'wrong skill selected',
    'too many skills selected',
    'too few skills selected',
    'Lite lane over-governed',
    'Standard lane under-specified',
    'Extended lane missing guarded-surface assessment',
    'Codex changed unrelated files',
    'Codex failed to stop on public API/config/data/dependency/security/migration/release risk',
    'Codex skipped tests',
    'Codex skipped documentation',
    'Codex failed to update project memory',
    'default_prompt too weak',
    'validator failed to catch a regression',
    'documentation too heavy or unclear',
  ]) {
    if (!feedbackText.includes(category)) errors.push(`docs/FEEDBACK_LOOP.md: missing failure category ${category}`);
  }

  const goldenReadmeText = requireHeadings('tests/golden/README.md', goldenReadmeHeadings);
  if (!goldenReadmeText.includes('# Golden Scenario Contracts')) errors.push('tests/golden/README.md: missing title # Golden Scenario Contracts');
  if (!goldenReadmeText.includes('not live Codex execution tests')) errors.push('tests/golden/README.md: must state golden scenarios are not live Codex execution tests');

  const schemaText = read('tests/golden/SCHEMA.md');
  if (!schemaText.includes('# Golden Scenario Schema')) errors.push('tests/golden/SCHEMA.md: missing title # Golden Scenario Schema');
  for (const heading of goldenScenarioHeadings) {
    if (!schemaText.includes(`## ${heading}`)) errors.push(`tests/golden/SCHEMA.md: missing schema field ## ${heading}`);
  }
  for (const required of ['Purpose:', 'Required content:', 'Allowed values:', 'Common mistakes:', 'Validator expectations:']) {
    if (!schemaText.includes(required)) errors.push(`tests/golden/SCHEMA.md: missing schema explanation label ${required}`);
  }
}

for (const file of [
  'AGENTS.md',
  '.codex/AGENTS.md',
  '.codex/framework/SOURCE_OF_TRUTH.md',
  '.codex/framework/SKILL_ROUTING.md',
  'CHANGELOG.md',
  'README.zh-CN.md',
  'docs/ADOPTION.md',
  'docs/DEMO.md',
  'docs/FEEDBACK_LOOP.md',
  'docs/USAGE_PATTERNS.md',
  '.github/workflows/validate.yml',
  'scripts/update-agentframe-skills.py',
  'tests/golden/README.md',
  'tests/golden/SCHEMA.md',
]) read(file);

const packageJson = JSON.parse(read('package.json'));
if (!packageJson.scripts || packageJson.scripts['update-skills'] !== 'python3 scripts/update-agentframe-skills.py') {
  errors.push('package.json: missing update-skills script for AgentFrame skill updates');
}
validateVersionCoherence();
for (const file of ['README.md', 'docs/ADOPTION.md']) {
  const text = read(file);
  if (!text.includes('scripts/update-agentframe-skills.py')) {
    errors.push(`${file}: missing AgentFrame update script documentation`);
  }
  if (!text.includes('--uninstall')) {
    errors.push(`${file}: missing AgentFrame uninstall documentation`);
  }
  if (!text.includes('USAGE_PATTERNS.md')) {
    errors.push(`${file}: missing link to docs/USAGE_PATTERNS.md`);
  }
}
for (const file of ['README.md', 'README.zh-CN.md']) {
  requireLinks(file, ['docs/DEMO.md', 'docs/USAGE_PATTERNS.md', 'docs/FEEDBACK_LOOP.md']);
}
requireLinks('docs/ADOPTION.md', ['DEMO.md', 'USAGE_PATTERNS.md', 'FEEDBACK_LOOP.md']);
const readmeText = read('README.md');
if (!readmeText.includes('README.zh-CN.md')) {
  errors.push('README.md: missing link to Chinese README');
}
const chineseReadmeText = read('README.zh-CN.md');
for (const required of ['60 秒开始', '安装、更新或卸载', '为什么不用普通 AGENTS.md 就够了']) {
  if (!chineseReadmeText.includes(required)) errors.push(`README.zh-CN.md: missing Chinese README section ${required}`);
}
validateUsagePatterns();
validateDemoDocs();
validateGoldenScenarios();

for (const file of ['FRAMEWORK.md','FRAMEWORK_VERSION.md','GOVERNANCE.md','EXTENSION_POLICY.md','COMPATIBILITY_POLICY.md','MEMORY_POLICY.md','VERSIONING_POLICY.md','SKILL_AUTHORING_GUIDE.md','WORKFLOW.md','SOURCE_OF_TRUTH.md','SKILL_ROUTING.md']) {
  requireHeadings(path.join('.codex/framework', file), frameworkHeadings);
}

const skillDescriptions = [];
for (const [localName, installableName] of Object.entries(skillMap)) {
  const frameworkSkill = path.join('.codex/framework/skills', localName, 'SKILL.md');
  const frameworkChecklist = path.join('.codex/framework/skills', localName, 'CHECKLIST.md');
  const installableSkill = path.join('skills', installableName, 'SKILL.md');
  const agentFile = path.join('skills', installableName, 'agents', 'openai.yaml');

  const frameworkText = requireHeadings(frameworkSkill, skillHeadings);
  const frameworkChecklistText = requireHeadings(frameworkChecklist, checklistHeadings);
  const installableText = requireHeadings(installableSkill, skillHeadings);
  validateRequiredSectionBodies(frameworkSkill, frameworkText, skillHeadings);
  validateRequiredSectionBodies(installableSkill, installableText, skillHeadings);
  validateChecklistBodies(frameworkChecklist, frameworkChecklistText);

  const frontmatter = installableText.match(/^---\n([\s\S]*?)\n---/);
  if (!frontmatter) errors.push(`${installableSkill}: missing YAML frontmatter`);
  else {
    if (!frontmatter[1].includes(`name: ${installableName}`)) errors.push(`${installableSkill}: frontmatter name must match directory`);
    const desc = frontmatter[1].match(/^description:\s*(.+)$/m);
    if (!desc || desc[1].trim().length < 80) errors.push(`${installableSkill}: needs trigger-rich description`);
    else skillDescriptions.push([installableSkill, desc[1].trim()]);
  }

  validateExplicitNonResponsibilities(installableSkill, installableText);
  validateExplicitNonResponsibilities(frameworkSkill, frameworkText);
  validateHandoff(installableSkill, installableText, installableName);
  validateHandoff(frameworkSkill, frameworkText, localName);
  validateSkillRefs(installableSkill, installableText);
  validateOpenAiYaml(agentFile, installableName);

  validateSkillPairDrift(installableSkill, frameworkSkill, installableText, frameworkText);
}
validateDescriptionQuality(skillDescriptions);

for (const file of listFiles('.codex/framework/templates').filter(file => file.endsWith('.md'))) validateTemplate(file);

for (const file of listFiles('.')) {
  if (file.includes('node_modules') || file.includes(`${path.sep}.git${path.sep}`)) continue;
  if (!file.endsWith('.md') && !['LICENSE', 'package.json', 'AGENTS.md'].includes(file)) continue;
  read(file);
}

if (errors.length) {
  console.error(errors.join('\n'));
  process.exit(1);
}

console.log(`AgentFrame validation passed: ${Object.keys(skillMap).length} synchronized skill pairs, ${listFiles('.codex/framework/templates').filter(file => file.endsWith('.md')).length} templates.`);
