import { setupSvgIcon } from "./icons";
import { setupElement } from "./element";
import { setupGlobal } from "./global";
import { setupComponent } from "./component";
import { setupMeta } from "./meta";
import { setupRouterGuard } from "./guard";

export function setupPlugins() {
  setupSvgIcon();
  setupMeta();
  setupElement();
  setupGlobal();
  setupComponent();
  setupRouterGuard();
}
