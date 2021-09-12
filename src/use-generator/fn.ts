export type GeneratorCallback<Param extends Array<unknown> = unknown[]> = Param extends undefined
  ? (signal: AbortSignal) => Generator | AsyncGenerator
  : (signal: AbortSignal, ...param: Param) => Generator | AsyncGenerator;
export type GeneratorReturnFn<Param extends Array<unknown>> = Param extends undefined
  ? () => void
  : (...params: Param) => void;

function useGeneratorFn(cb: GeneratorCallback): GeneratorReturnFn<[]>;
function useGeneratorFn<Param extends Array<unknown>>(cb: GeneratorCallback<Param>): GeneratorReturnFn<Param>;

function useGeneratorFn<Param extends Array<unknown>>(cb: GeneratorCallback<Param>): GeneratorReturnFn<Param> {
  return function () {} as any;
}

export { useGeneratorFn };

const fn = useGeneratorFn(function* (signal) {});
const fn1 = useGeneratorFn(function* (signal, a: { a: "" }) {});
const fn2 = useGeneratorFn(async function* (signal) {});
const fn3 = useGeneratorFn(async function* (signal, a: { a: "" }) {});
