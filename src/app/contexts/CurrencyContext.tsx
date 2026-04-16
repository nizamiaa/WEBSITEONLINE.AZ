import { createContext, useContext, useState, ReactNode } from 'react';

export type Currency = 'AZN' | 'USD' | 'IRR' | 'INR';

interface CurrencyContextType {
  currency: Currency;
  setCurrency: (curr: Currency) => void;
  convertPrice: (azn: number) => string;
}

const exchangeRates: Record<Currency, number> = {
  AZN: 1,
  USD: 0.59,
  IRR: 25000,
  INR: 50,
};

const CurrencyContext = createContext<CurrencyContextType | undefined>(undefined);

export function CurrencyProvider({ children }: { children: ReactNode }) {
  const [currency, setCurrency] = useState<Currency>('AZN');

  const convertPrice = (azn: number): string => {
    const converted = azn * exchangeRates[currency];
    return `${converted.toFixed(0)} ${currency}`;
  };

  return (
    <CurrencyContext.Provider value={{ currency, setCurrency, convertPrice }}>
      {children}
    </CurrencyContext.Provider>
  );
}

export function useCurrency() {
  const context = useContext(CurrencyContext);
  if (!context) {
    throw new Error('useCurrency must be used within CurrencyProvider');
  }
  return context;
}
