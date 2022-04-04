#! /usr/bin/env node
import { program } from "commander";
import path from "path";
import fs from "fs";
import { getRFCTemplate } from "./RFC.js";

const createRFC = (name) => {
  fs.writeFileSync(`${name}.tsx`, getRFCTemplate({ name }));
  console.log("haha");
};

program
  .command("rfc <name>")
  .description("Creates base for component with given name")
  .option("-l, --localization <name>", "Adds i18n hook")
  .action(createRFC);

program.parse();
