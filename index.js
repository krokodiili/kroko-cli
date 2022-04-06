#! /usr/bin/env node
import { program } from "commander";
import path from "path";
import fs from "fs";
import { getRFCTemplate } from "./RFC.js";

const createRFC = (name, { path }) => {
  fs.writeFileSync(`${path}/${name}.tsx`, getRFCTemplate({ name }));
};

program
  .command("rfc <name>")
  .description("Creates base for component with given name")
  .option("-p, --path <path>", "Save to path instead of current dir")
  .option("-l, --localization <name>", "Adds i18n hook")
  .action(createRFC);

program.parse();
