import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export type TransactionType = 'income' | 'expense' | 'borrow' | 'lend';
export type TransactionStatus = 'pending' | 'paid';
export type PaymentMethod = 'upi' | 'cash' | 'none';

export interface Transaction {
  id: number;
  type: TransactionType;
  amount: number;
  date: string;
  category: string;
  person_name?: string;
  notes?: string;
  status: TransactionStatus;
  payment_method: PaymentMethod;
  created_at: string;
}

export interface Stats {
  total_income: number;
  total_expense: number;
  total_borrowed: number;
  total_lent: number;
  upi_balance: number;
  cash_balance: number;
  previous_savings: number;
}

export const CATEGORIES = {
  income: ['Salary', 'Freelance', 'Investment', 'Gift', 'Other'],
  expense: ['Food', 'Transport', 'Rent', 'Shopping', 'Health', 'Entertainment', 'Bills', 'Other'],
  borrow: ['Friend', 'Family', 'Bank', 'Other'],
  lend: ['Friend', 'Family', 'Other'],
};

export const CURRENCIES = [
  { code: 'USD', symbol: '$' },
  { code: 'EUR', symbol: '€' },
  { code: 'GBP', symbol: '£' },
  { code: 'INR', symbol: '₹' },
  { code: 'JPY', symbol: '¥' },
];
