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
  for (const bullet of bullets) {
    const normalized = bullet.trim().toLowerCase();
    const words = normalized.replace(/^- /, '').split(/\s+/).filter(Boolean);
    if (words.length < 2 || /^(hidden|silent|accidental|undocumented|unbounded)\b/.test(words[0])) {
      errors.push(`${file}: non-responsibility bullet should be an action prohibition, not a fragment: ${bullet.trim()}`);
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
}

function validateTemplate(file) {
  const text = requireHeadings(file, templateHeadings);
  if (text.includes('Required content: describe')) errors.push(`${file}: contains repeated placeholder phrase "Required content: describe"`);
  const generatedDates = text.match(/\b20\d{2}-\d{2}-\d{2}\b/g) || [];
  for (const found of generatedDates) {
    if (found !== 'YYYY-MM-DD') errors.push(`${file}: contains hard-coded generated date ${found}`);
  }
}

for (const file of [
  'AGENTS.md',
  '.codex/AGENTS.md',
  '.codex/framework/SOURCE_OF_TRUTH.md',
  '.codex/framework/SKILL_ROUTING.md',
  'CHANGELOG.md',
  'docs/ADOPTION.md',
  '.github/workflows/validate.yml',
  'scripts/update-agentframe-skills.py',
]) read(file);

const packageJson = JSON.parse(read('package.json'));
if (!packageJson.scripts || packageJson.scripts['update-skills'] !== 'python3 scripts/update-agentframe-skills.py') {
  errors.push('package.json: missing update-skills script for AgentFrame skill updates');
}
for (const file of ['README.md', 'docs/ADOPTION.md']) {
  const text = read(file);
  if (!text.includes('scripts/update-agentframe-skills.py')) {
    errors.push(`${file}: missing AgentFrame update script documentation`);
  }
}

for (const file of ['FRAMEWORK.md','FRAMEWORK_VERSION.md','GOVERNANCE.md','EXTENSION_POLICY.md','COMPATIBILITY_POLICY.md','MEMORY_POLICY.md','VERSIONING_POLICY.md','SKILL_AUTHORING_GUIDE.md','WORKFLOW.md','SOURCE_OF_TRUTH.md','SKILL_ROUTING.md']) {
  requireHeadings(path.join('.codex/framework', file), frameworkHeadings);
}

for (const [localName, installableName] of Object.entries(skillMap)) {
  const frameworkSkill = path.join('.codex/framework/skills', localName, 'SKILL.md');
  const frameworkChecklist = path.join('.codex/framework/skills', localName, 'CHECKLIST.md');
  const installableSkill = path.join('skills', installableName, 'SKILL.md');
  const agentFile = path.join('skills', installableName, 'agents', 'openai.yaml');

  const frameworkText = requireHeadings(frameworkSkill, skillHeadings);
  requireHeadings(frameworkChecklist, checklistHeadings);
  const installableText = requireHeadings(installableSkill, skillHeadings);

  const frontmatter = installableText.match(/^---\n([\s\S]*?)\n---/);
  if (!frontmatter) errors.push(`${installableSkill}: missing YAML frontmatter`);
  else {
    if (!frontmatter[1].includes(`name: ${installableName}`)) errors.push(`${installableSkill}: frontmatter name must match directory`);
    const desc = frontmatter[1].match(/^description:\s*(.+)$/m);
    if (!desc || desc[1].trim().length < 80) errors.push(`${installableSkill}: needs trigger-rich description`);
  }

  validateExplicitNonResponsibilities(installableSkill, installableText);
  validateExplicitNonResponsibilities(frameworkSkill, frameworkText);
  validateHandoff(installableSkill, installableText, installableName);
  validateHandoff(frameworkSkill, frameworkText, localName);
  validateOpenAiYaml(agentFile, installableName);

  const normalizedInstallable = normalizeSkillText(installableText);
  const normalizedFramework = normalizeSkillText(frameworkText);
  if (normalizedInstallable !== normalizedFramework) {
    errors.push(`${installableSkill} <-> ${frameworkSkill}: substantive drift detected after normalizing installable metadata and skill names`);
  }
}

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
