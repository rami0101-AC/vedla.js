/* @namespace */
import vdumper from "vdumper";
import logSymbols from "log-symbols";
import dump_die from "dumper.js";

const log = console.log;
const error = console.error;
const warn = console.warn;
const info = console.info;

class VedlaLogger {
  constructor() {
    this.log = log;
    this.error = error;
    this.warn = warn;
    this.info = info;
  }

  static message($type, $message) {
    switch ($type) {
      case "log":
        return `\n${logSymbols.info} ${$message}`;
        break;
      case "error":
        return `\n${logSymbols.error} ${$message}`;
        break;
      case "warn":
        return `\n${logSymbols.warning} ${$message}`;
        break;
      case "info":
        return `\n${logSymbols.info} ${$message}`;
        break;
      default:
        return `\n${logSymbols.info} ${$message}`;
    }
  }

  dumper($var, $type = "log", $die = false) {
    const var_dump = vdumper.dump;
    const dd = dump_die.dd;

    console.group(`VedlaJS ${$type}:\n`);
    if ($die) {
      console.group(
        VedlaLogger.message($type, `VedlaJS dump and die ${$type}:\n`)
      );
      dd($var);
    } else {
      console.group(VedlaLogger.message($type, `VedlaJS dump ${$type}:\n`));
      var_dump($var);
    }
    console.groupEnd();
  }
}

export default VedlaLogger;
