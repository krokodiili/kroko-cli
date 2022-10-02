#! /usr/bin/env node
import { program } from "commander";
import fs from "fs";
import { getRFCTemplate } from "./RFC.js";
import { exec } from "child_process";

const createRFC = (name, { path, localization }) => {
  fs.writeFileSync(
    path ? `${path}/${name}.tsx` : `${name}.tsx`,
    getRFCTemplate({ name, localization })
  );
};

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
  .option("-l, --localization <name>", "Adds i18n hook")
  .action(createRFC);

program
  .command("twe")
  .description("Extract tailwind classNames to separate classes setup")
  .option("-p, --path <path>", "Path to file to do the refactor")
  .action(extractTailwindClasses);

program.parse();
