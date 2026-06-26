const fs = require('fs');
const path = require('path');
const root = path.resolve(__dirname, '..');
const errors = [];
function read(file) {
  const full = path.join(root, file);
  if (!fs.existsSync(full)) { errors.push(`Missing required file: ${file}`); return ''; }
  const text = fs.readFileSync(full, 'utf8');
  if (!text.trim()) errors.push(`Empty file: ${file}`);
  if (text.includes('[TODO:') || text.includes('TODO placeholder')) errors.push(`Placeholder text remains: ${file}`);
  const nonHeading = text.split(/\r?\n/).filter(line => line.trim() && !line.trim().startsWith('#'));
  if (nonHeading.length < 3) errors.push(`Placeholder-only file: ${file}`);
  return text;
}
function requireHeadings(file, headings) {
  const text = read(file);
  for (const heading of headings) if (!text.includes(`## ${heading}`)) errors.push(`${file} missing heading: ## ${heading}`);
}
function listFiles(dir) {
  const full = path.join(root, dir);
  if (!fs.existsSync(full)) return [];
  const out = [];
  for (const entry of fs.readdirSync(full, { withFileTypes: true })) {
    const rel = path.join(dir, entry.name);
    if (entry.isDirectory()) out.push(...listFiles(rel)); else out.push(rel);
  }
  return out;
}
const frameworkHeadings = ['Purpose','Scope','Rules','Required Workflow','Inputs','Outputs','Decision Criteria','Failure Modes','Human Review Requirements','Maintenance Instructions'];
for (const file of ['FRAMEWORK.md','FRAMEWORK_VERSION.md','GOVERNANCE.md','EXTENSION_POLICY.md','COMPATIBILITY_POLICY.md','MEMORY_POLICY.md','VERSIONING_POLICY.md','SKILL_AUTHORING_GUIDE.md','WORKFLOW.md']) requireHeadings(path.join('.codex/framework', file), frameworkHeadings);
const skillHeadings = ['Mission','When To Use This Skill','When Not To Use This Skill','Responsibilities','Explicit Non-Responsibilities','Required Inputs','Required Outputs','Operating Principles','Step-By-Step Workflow','Constraints','Forbidden Behaviors','Review Criteria','Handoff Rules','Failure Handling','Interaction With Other Skills','File Update Obligations','Quality Bar','Completion Criteria'];
const checklistHeadings = ['Pre-Flight Checklist','Execution Checklist','Output Checklist','Safety Checklist','Review Checklist','Handoff Checklist','Stop Conditions'];
const skillRoot = path.join(root, '.codex/framework/skills');
const skillDirs = fs.readdirSync(skillRoot, { withFileTypes: true }).filter(x => x.isDirectory()).map(x => x.name);
for (const dir of skillDirs) { requireHeadings(path.join('.codex/framework/skills', dir, 'SKILL.md'), skillHeadings); requireHeadings(path.join('.codex/framework/skills', dir, 'CHECKLIST.md'), checklistHeadings); }
const installableSkillRoot = path.join(root, 'skills');
const installableSkillDirs = fs.existsSync(installableSkillRoot)
  ? fs.readdirSync(installableSkillRoot, { withFileTypes: true }).filter(x => x.isDirectory()).map(x => x.name)
  : [];
for (const dir of installableSkillDirs) {
  const rel = path.join('skills', dir, 'SKILL.md');
  const text = read(rel);
  const frontmatter = text.match(/^---\n([\s\S]*?)\n---/);
  if (!frontmatter) {
    errors.push(`${rel} missing YAML frontmatter`);
    continue;
  }
  if (!frontmatter[1].includes(`name: ${dir}`)) errors.push(`${rel} frontmatter name must match directory`);
  const desc = frontmatter[1].match(/^description:\s*(.+)$/m);
  if (!desc || desc[1].trim().length < 80) errors.push(`${rel} needs a trigger-rich description`);
  requireHeadings(rel, [
    'Mission',
    'When To Use This Skill',
    'When Not To Use This Skill',
    'Responsibilities',
    'Explicit Non-Responsibilities',
    'Required Inputs',
    'Required Outputs',
    'Operating Principles',
    'Step-By-Step Workflow',
    'Constraints',
    'Forbidden Behaviors',
    'Review Criteria',
    'Handoff Rules',
    'Failure Handling',
    'Interaction With Other Skills',
    'File Update Obligations',
    'Quality Bar',
    'Completion Criteria',
  ]);
  const agentFile = path.join('skills', dir, 'agents', 'openai.yaml');
  const agentText = read(agentFile);
  for (const key of ['display_name:', 'short_description:', 'default_prompt:']) {
    if (!agentText.includes(key)) errors.push(`${agentFile} missing ${key}`);
  }
}
const templateHeadings = ['Purpose','Metadata','Required Sections','Optional Sections','Review Checklist','Completion Criteria'];
for (const file of listFiles('.codex/framework/templates').filter(x => x.endsWith('.md'))) requireHeadings(file, templateHeadings);
for (const file of listFiles('.')) {
  if (file.includes('node_modules')) continue;
  if (!file.endsWith('.md') && !['LICENSE', 'package.json'].includes(file)) continue;
  read(file);
}
if (errors.length) { console.error(errors.join('\n')); process.exit(1); }
console.log(`AgentFrame validation passed: ${skillDirs.length} framework skills, ${installableSkillDirs.length} installable skills, ${listFiles('.codex/framework/templates').filter(x => x.endsWith('.md')).length} templates.`);
