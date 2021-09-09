import { Dispatch, SetStateAction } from "react";

export type SetState<State> = Dispatch<SetStateAction<State>>;

export interface Store<State> {
  loading: boolean;
  error?: null | unknown;
  value: null | State;
}

export interface GeneratorFnWithoutParam<State> {
  (
    setState: SetState<Store<State>>,
    signal: AbortSignal,
    param?: null | undefined | never,
  ): Generator;
  (
    setState: SetState<Store<State>>,
    signal: AbortSignal,
    param?: null | undefined | never,
  ): AsyncGenerator;
}
export interface GeneratorFn<State, Param> {
  (
    setState: SetState<Store<State>>,
    signal: AbortSignal,
    param: Param,
  ): Generator;
  (
    setState: SetState<Store<State>>,
    signal: AbortSignal,
    param: Param,
  ): AsyncGenerator;
}

export enum GeneratorThrottleType {
  /** 加锁，当前异步操作结束之前，任何调用都会忽略 */
  LOCK = "LOCK",
  /**
   * 只保留最新一个调用的实例
   *
   * 还在运行的实例会：
   * 1. 传入的signal.aborted变为true
   * 2. 当前yield等待结束后函数会被throw，onError会被触发
   */
  LEAST = "LEAST",
}

export interface UseGeneratorOptWithoutParam<State> {
  /** 自动状态流转相关选项；default值查看具体key说明 */
  auto?: {
    /** 自动在函数开始、结束时设置loading @default true */
    loading?: boolean;
  };
  /**
   * 节流控制方式
   * @default GeneratorParallelType.LEAST
   *
   * @description
   * 不节流的话就要考虑多实例共用一个state的问题，目前没什么好方法；
   * 等有场景需要、也想好怎么实现了，就在枚举里新增个NONE的选项（或者兼容一个false的类型）代表不节流
   */
  throttle?: GeneratorThrottleType;
}
export interface UseGeneratorOpt<State, Param>
  extends UseGeneratorOptWithoutParam<State> {
  /** 第一次调用函数且没有传参时会默认使用这个参数 */
  defaultParam: Param;
}

export interface UseGeneratorReturnActions<State, Param = never> {
  /** 触发一次新的异步 */
  request: Param extends never
    ? () => Promise<State>
    : (param: Param) => Promise<State>;
  /** 用上次异步的参数（如有）重新触发一次操作 */
  refresh: () => Promise<State>;
  /** 取消当前异步实例 */
  cancel: () => void;
}

export type UseGeneratorReturnWithoutParan<State> = [
  Store<State>,
  SetState<Store<State>>,
  UseGeneratorReturnActions<State>,
];
export type UseGeneratorReturn<State, Param> = [
  Store<State>,
  SetState<Store<State>>,
  UseGeneratorReturnActions<State, Param>,
];
