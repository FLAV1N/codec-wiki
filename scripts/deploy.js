#!/usr/bin/env node

const { spawnSync } = require("node:child_process");
const path = require("node:path");

process.env.USE_SSH = process.env.USE_SSH ?? "true";

const docusaurusBin = require.resolve("@docusaurus/core/bin/docusaurus.mjs");
const result = spawnSync(process.execPath, [
  docusaurusBin,
  "deploy",
  ...process.argv.slice(2),
], {
  cwd: path.resolve(__dirname, ".."),
  env: process.env,
  stdio: "inherit",
});

process.exit(result.status ?? 1);
