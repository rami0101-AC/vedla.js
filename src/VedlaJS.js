import config from "./vedla.conf.js";
import VedlaLogger from "./utils/VedlaLogger.js";

class VedlaJS {
  constructor() {
    this.config = config;
    this.modules = config.modules;

    if (this.modules.logger.enabled) {
      this.logger = new VedlaLogger();
    }
  }

  dump($var, $type = "log", $die = false) {
    if (this.modules.logger.enabled) {
      this.logger.dumper($var, $type, false);
    } else {
      throw new Error("VedlaJS: Logger module is not enabled.");
    }
  }

  dd($var, $type = "log", $die = false) {
    if (this.modules.logger.enabled) {
      this.logger.dumper($var, $type, true);
    } else {
      throw new Error("VedlaJS: Logger module is not enabled.");
    }
  }
}

export default VedlaJS;
