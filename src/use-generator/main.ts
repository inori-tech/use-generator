import {
  GeneratorFn,
  GeneratorFnWithoutParam,
  UseGeneratorOpt,
  UseGeneratorOptWithoutParam,
  UseGeneratorReturn,
} from "./types";

import { DEFAULT_OPT } from "./utils";

/**
 * 能方便处理组件卸载时异步操作没停止的问题的异步hook
 *
 * @override
 * fn第三个入参param没有定义或定义是null、undefined
 */
function useGenerator<State, Param = never>(
  fn: GeneratorFnWithoutParam<State>,
  opt?: UseGeneratorOptWithoutParam<State>,
): UseGeneratorReturn<State, never>;
/**
 * 能方便处理组件卸载时异步操作没停止的问题的异步hook
 *
 * @override
 * fn第三个入参param定义不为null或者undefined, 此时又没有定义defaultParam
 */
function useGenerator<State, Param>(
  fn: GeneratorFn<State, Param>,
  opt?: UseGeneratorOptWithoutParam<State>,
): UseGeneratorReturn<State, Param | undefined>;
/**
 * 能方便处理组件卸载时异步操作没停止的问题的异步hook
 *
 * @override
 * fn第三个入参param定义不为null或者undefined, 且定义了defaultParam
 */
function useGenerator<State, Param>(
  fn: GeneratorFn<State, Param>,
  opt?: UseGeneratorOpt<State, Param>,
): UseGeneratorReturn<State, Param>;

function useGenerator<State, Param>(
  fn: GeneratorFn<State, Param>,
  opt: UseGeneratorOptWithoutParam<State> & {
    defaultParam?: Param;
  } = DEFAULT_OPT,
): UseGeneratorReturn<State, Param> {
  return {} as any;
}

export { useGenerator };
export * from "./types";
export * from "./utils";
