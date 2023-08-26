import yargs from "yargs";
import { hideBin } from "yargs/helpers";

yargs(hideBin(process.argv))
  .command(
    "new <note>",
    "Create new Note",
    (yargs) => {
      yargs.positional("note", {
        type: "string",
        describe: "Content of note to create",
      });
    },
    (argv) => {
      console.log(argv.note);
    }
  )
  .demandCommand(1)
  .parse();
