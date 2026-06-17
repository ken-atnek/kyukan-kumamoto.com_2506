import { rm } from 'node:fs/promises';
import path from 'node:path';

const exportRoot = path.join(process.cwd(), 'out');
const targets = ['data', 'backend'];

await Promise.all(
  targets.map((target) =>
    rm(path.join(exportRoot, target), {
      recursive: true,
      force: true,
    })
  )
);
