import type { DeepReadonly, UnwrapNestedRefs } from "vue";

type StoreMethods = {
  [key: string]: Function;
};

type StoreAPI<Data, Methods extends StoreMethods> = {
  state: DeepReadonly<UnwrapNestedRefs<UnwrapNestedRefs<Data>>>;
} & Methods;

/**
 * Lightweight state management helper utility that separates reading and
 * writing to reactive objects.
 *
 * @param data
 * @param methods
 * @returns Readonly proxy + state mutation methods.
 *
 * @example
 * ```ts
 * const { state: countStore, ...countMethods } = store({ count: 0 }, (data) => ({
 *   set: (value: number) => void (data.count = value),
 *   increment() {
 *     data.count++;
 *   },
 *   decrement() {
 *     data.count--;
 *   },
 *   reset() {
 *     this.set(0);
 *   },
 * }));
 * ```
 */
export const store = <Data extends object, Methods extends StoreMethods>(
  data: Data,
  methods: (data: Data) => Methods,
): StoreAPI<Data, Methods> => {
  const store = reactive(data);
  const proxy = readonly(store);

  return {
    state: proxy,
    ...methods(data),
  };
};
