import { readFile } from "fs/promises";
import { addNote, printNotes } from "./notes.controller.mjs";
import yargs from "yargs";
import { hideBin } from "yargs/helpers";
import path from "path";
import { fileURLToPath } from "url";

// Получаем __dirname
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Читаем package.json вручную
const pkgRaw = await readFile(path.join(__dirname, "package.json"), "utf-8");
const pkg = JSON.parse(pkgRaw);

yargs(hideBin(process.argv))
  .version(pkg.version)
  .command({
    command: "add",
    describe: "Add new note to list",
    builder: {
      title: {
        type: "string",
        describe: "Note title",
        demandOption: true,
      },
    },
    handler({ title }) {
      addNote(title);
    },
  })
  .command({
    command: "list",
    describe: "Print all notes",
    async handler() {
      printNotes();
    },
  })
  .parse();
