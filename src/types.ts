export type SetFunction<TElement, TResult> = (a: Set<TElement>, b: Set<TElement>) => TResult;
export type SetOperation<TElement> = SetFunction<TElement, Set<TElement>>;
export type SetPredicate<TElement> = SetFunction<TElement, boolean>;
export type SetSimilarity<TElement> = SetFunction<TElement, number>;
