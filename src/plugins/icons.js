import Vue from "vue";
import SvgIcon from "@/components/SvgIcon";

export function setupSvgIcon() {
  Vue.component("SvgIcon", SvgIcon);
  const req = require.context("../assets/icons", false, /\.svg$/);
  const requireAll = (requireContext) =>
    requireContext.keys().map(requireContext);
  requireAll(req);
}
