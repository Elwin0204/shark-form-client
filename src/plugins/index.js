import { setupSvgIcon } from "./icons";
import { setupElement } from "./element";
import { setupGlobal } from "./global";
import { setupComponent } from "./component";
import { setupMeta } from "./meta";

export function setupPlugins() {
  setupSvgIcon();
  setupMeta();
  setupElement();
  setupGlobal();
  setupComponent();
}
