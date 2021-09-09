import { UseGeneratorOptWithoutParam, GeneratorThrottleType } from "./types";

/** 默认选项 */
export const DEFAULT_OPT: UseGeneratorOptWithoutParam<unknown> = {
  auto: { loading: true },
  throttle: GeneratorThrottleType.LEAST,
};
