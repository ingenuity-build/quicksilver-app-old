import { ReactNode } from 'react';

export type WithChildren<T = any> = T & { children?: ReactNode };
export type WithClassName<T = any> = T & { className?: string };

export type Optional<T> = T | undefined;
export type Nullable<T> = T | null;
export type Maybe<T> = Optional<Nullable<T>>;

export type WithId = { id: string };
