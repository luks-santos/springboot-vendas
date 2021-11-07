import { Seller } from "./seller"

export type Sale = {
    id: number;
    visited: number;
    deals: number;
    amount: number;
    date: string;
    seller: Seller;
}

export type SalePage = {
    content?: Sale[];
    last: boolean;
    totalPages: number;
    totalElements: number;
    first: boolean;
    size?: number;
    number: number;
    numberOfElements?: number;
    empty?: boolean;
}

export type Salesum = {
    sallerName: string;
    sum: number;
}

export type SaleSuccess = {
    sallerName: string;
    visited: number;
    deals: number;
}