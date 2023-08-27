import yargs from "yargs";
import { hideBin } from "yargs/helpers";
import {
  findNotes,
  getAllNotes,
  newNote,
  removeAllNotes,
  removeNote,
} from "./notes.js";

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
      const tags = argv.tags ? argv.tags.split(",") : [];
      const note = await newNote(argv.note, tags);
      console.log("New Note Added", note);
    }
  )
  .command(
    "all",
    "get all notes",
    () => {},
    async (argv) => {
      console.log(await getAllNotes());
    }
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
    async (argv) => {
      const filteredNotes = await findNotes(argv.filter);
      console.log(filteredNotes);
    }
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
    async (argv) => {
      console.log(await removeNote(argv.id));
    }
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
    async (argv) => {
      removeAllNotes();
    }
  )
  .options("tags", {
    alias: "t",
    type: "string",
    describe: "Tags to add to note",
  })
  .demandCommand(1)
  .parse();
