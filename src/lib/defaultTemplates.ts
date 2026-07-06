import { Template } from '../types';
import { officeTemplates } from './templates/office';
import { extraTemplates } from './templates/extra';
import { gstTemplatesPart1 } from './templates/gstPart1';
import { customsTemplatesPart1 } from './templates/customsPart1';
import { gstTemplatesPart2 } from './templates/gstPart2';
import { customsTemplatesPart2 } from './templates/customsPart2';

// Order preserved exactly as the original single-file array.
export const defaultTemplates: Template[] = [
  ...officeTemplates,
  ...extraTemplates,
  ...gstTemplatesPart1,
  ...customsTemplatesPart1,
  ...gstTemplatesPart2,
  ...customsTemplatesPart2,
];
