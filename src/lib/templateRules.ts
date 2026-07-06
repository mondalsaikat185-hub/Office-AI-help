// Split into src/lib/rules/* — order preserved. Re-exports keep old import paths working.
export * from './rules/baseRules';
import { TemplateRuleSet, SPECIFIC_RULES, generatedRules } from './rules/baseRules';
import { RULES_PART1 } from './rules/part1';
import { RULES_PART2 } from './rules/part2';
import { RULES_PART3 } from './rules/part3';
import { RULES_PART4 } from './rules/part4';
import { RULES_PART5 } from './rules/part5';

export const TEMPLATE_RULES: TemplateRuleSet[] = [
  ...SPECIFIC_RULES,
  ...generatedRules,
  ...RULES_PART1,
  ...RULES_PART2,
  ...RULES_PART3,
  ...RULES_PART4,
  ...RULES_PART5,
];
