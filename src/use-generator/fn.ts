export type GeneratorCallback<Param = undefined> = Param extends undefined
  ? (signal: AbortSignal) => Generator | AsyncGenerator
  : (signal: AbortSignal, param: Param) => Generator | AsyncGenerator;
export type GeneratorReturnFn<Param = undefined> = Param extends undefined ? () => void : (params: Param) => void;

function useGeneratorFn(cb: GeneratorCallback): GeneratorReturnFn;
function useGeneratorFn<Param>(cb: GeneratorCallback<Param>): GeneratorReturnFn<Param>;

function useGeneratorFn<Param>(cb: GeneratorCallback<Param>): GeneratorReturnFn<Param> {
  return function () {} as any;
}

export { useGeneratorFn };

const fn = useGeneratorFn(function* (signal) {});
const fn1 = useGeneratorFn(function* (signal, a: { a: "" }) {});
const fn2 = useGeneratorFn(async function* (signal) {});
const fn3 = useGeneratorFn(async function* (signal, a: { a: "" }) {});
