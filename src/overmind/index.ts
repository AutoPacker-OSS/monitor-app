import {
  createHook,
  createActionsHook,
  createStateHook,
  createEffectsHook,
} from "overmind-react";
import { config } from "./config";
import { IConfig, IOnInitialize, IAction, IOperator, IState } from "overmind";
export interface Config extends IConfig<typeof config> {}
export interface OnInitialize extends IOnInitialize<Config> {}
export interface Action<Input = void, Output = void>
  extends IAction<Config, Input, Output> {}
export interface AsyncAction<Input = void, Output = void>
  extends IAction<Config, Input, Promise<Output>> {}
export interface Operator<Input = void, Output = Input>
  extends IOperator<Config, Input, Output> {}
export type RootState = typeof config.state;
export const useOvermind = createHook<typeof config>();
export const useAppState = createStateHook<typeof config>();
export const useEffects = createEffectsHook<typeof config>();
export const useActions = createActionsHook<typeof config>();
