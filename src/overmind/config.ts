import { merge, namespaced } from "overmind/config";
import { state } from "./state";
import * as actions from "./actions";
import * as effects from "./effects";
import onInitialize from "./onInitialize";
// import * as auth from './auth';
// import * as navigation from './navigation';
// import { createModals } from "./createModals"
// import * as modals from "./modals/config"
export const config = merge(
  {
    onInitialize,
    state,
    actions,
    effects,
  },
  namespaced({})
);
