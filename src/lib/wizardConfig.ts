// Split into src/lib/wizard/* — order preserved. Re-exports keep old import paths working.
export * from './wizard/wizardTypes';
import { WizardConfig } from './wizard/wizardTypes';
import { WIZARD_PART1 } from './wizard/part1';
import { WIZARD_PART2 } from './wizard/part2';
import { WIZARD_PART3 } from './wizard/part3';
import { WIZARD_PART4 } from './wizard/part4';

export const WIZARD_CONFIGS: WizardConfig[] = [
  ...WIZARD_PART1,
  ...WIZARD_PART2,
  ...WIZARD_PART3,
  ...WIZARD_PART4,
];
