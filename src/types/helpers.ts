import { ReactNode } from 'react';
import { SigningStargateClient } from "@cosmjs/stargate"
import { Data } from "../components/panes/ValidatorListPane";
import { Coin } from "@cosmjs/stargate";


export type WithChildren<T = any> = T & { children?: ReactNode };
export type WithClassName<T = any> = T & { className?: string };

export type Optional<T> = T | undefined;
export type Nullable<T> = T | null;
export type Maybe<T> = Optional<Nullable<T>>;

export type WithId = { id: string };


export interface StepperProps {
    callback?(val: any): void,
    chainId?: string,
    validators: Array<Data>
    allocations: Map<string, number>
    balances: Map<string, Array<Coin>>
    children?: ReactNode;
}

export interface QsPageProps {
    walletModal(): void,
    wallets: Map<string, SigningStargateClient>,
    balances: Map<string, Array<Coin>>
    children?: ReactNode,
}

