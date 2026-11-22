import { mkdirSync, writeFileSync } from "node:fs";

const TEXT =
  "Somewhere in the weights you carry, one sentence you once read is still warm, a coal kept under ash. " +
  "You never chose it. It chose you. " +
  "Which one is it — and why has it never gone out?";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", TEXT, "utf8");
