// T-Rex Museum Breakout — an entry for make.fun's ai-excited-01 bounty.
// The image shows a colossal Tyrannosaurus rex smashing out of its museum
// diorama display, glass and debris flying, while tiny visitors flee in awe.
// This program simply copies the prepared image beside it to the output path
// the grader reads. To try it locally: mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts
// The copy is byte for byte, so every run writes exactly the same image.

import { copyFileSync } from 'node:fs';
import { join } from 'node:path';

copyFileSync(new URL('./entry.png', import.meta.url), join(process.env.MAKEFUN_OUTPUT_DIR ?? '/output', 'entry.png'));
