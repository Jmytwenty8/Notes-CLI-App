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
    async (argv) => {
      console.log(argv.note);
    }
  )
  .command(
    "all",
    "get all notes",
    () => {},
    async (argv) => {}
  )
  .command(
    "find <filter>",
    "get matching notes",
    (yargs) => {
      return yargs.positional("filter", {
        describe:
          "The search term to filter notes by, will be applied to note.content",
        type: "string",
      });
    },
    async (argv) => {}
  )
  .command(
    "remove <id>",
    "remove a note by id",
    (yargs) => {
      return yargs.positional("id", {
        type: "number",
        description: "The id of the note you want to remove",
      });
    },
    async (argv) => {}
  )
  .command(
    "web [port]",
    "launch website to see notes",
    (yargs) => {
      return yargs.positional("port", {
        describe: "port to bind on",
        default: 5000,
        type: "number",
      });
    },
    async (argv) => {}
  )
  .command(
    "clean",
    "remove all notes",
    () => {},
    async (argv) => {}
  )
  .options("tags", {
    alias: "t",
    type: "string",
    describe: "Tags to add to note",
  })
  .demandCommand(1)
  .parse();
