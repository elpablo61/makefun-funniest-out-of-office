import { mkdirSync, writeFileSync } from "node:fs";

const LINE =
  "I'm currently out of the office and have delegated all decisions to a houseplant named Gary, who is doing great.";

// Gate: the bounty only judges entries of 1-140 characters, single line.
if (LINE.length < 1 || LINE.length > 140 || LINE.includes("\n")) {
  throw new Error(`Entry line is ${LINE.length} chars; must be 1-140, one line.`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE + "\n", "utf8");
console.log(`Wrote ${LINE.length} characters to /output/entry.txt`);
