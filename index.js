#! /usr/bin/env node
import { program } from "commander";
import fs from "fs";
import { getRFCTemplate } from "./RFC.js";
import { exec } from "child_process";
import { getTFTTemplate } from "./TFT.js";

const createRFC = (name, { path, localization }) => {
  fs.writeFileSync(
    path ? `${path}/${name}.tsx` : `${name}.tsx`,
    getRFCTemplate({ name, localization })
  );
};

const testForThis = (name, { functionName }) => {
  const [_, parsedName, fileType] = name.match(/(.*)\.(.*)/);
  fs.writeFileSync(
    `${parsedName}.spec.${fileType}`,
    getTFTTemplate({ name: parsedName, fileType, functionName })
  );
};

const extractTailwindClasses = ({ path }) => {
  exec(`cat ${path}`, (_, code, __) => {
    //TODO: className: "..."
    //TODO: classNames()
    const regex = /(?<=className=)".*?"/g;
    const classNames = code.match(regex);
    console.log(classNames);
  });
};

program
  .command("rfc <name>")
  .description("Creates base for component with given name")
  .option("-p, --path <path>", "Save to path instead of current dir")
  .option("-l, --localization", "Adds i18n hook")
  .action(createRFC);

program
  .command("tft <name>")
  .description("Creates test base for given file")
  .option(
    "-fn --functionName <functionName>",
    "Name for the function to init tests"
  )
  .action(testForThis);

program
  .command("twe")
  .description("Extract tailwind classNames to separate classes setup")
  .option("-p, --path <path>", "Path to file to do the refactor")
  .action(extractTailwindClasses);

program.parse();
