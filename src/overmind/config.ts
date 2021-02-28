import { merge, namespaced } from "overmind/config";
import { state } from "./state";
import * as actions from "./actions";
import * as effects from "./effects";
import onInitialize from "./onInitialize";

// Namespace
import * as auth from "./auth";
import * as logs from "./logs";

export const config = merge(
  {
    onInitialize,
    state,
    actions,
    effects,
  },
  namespaced({
    auth,
    logs
  })
);
