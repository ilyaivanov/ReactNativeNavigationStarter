export interface Stock {
  id: string;
  title: string;
  short: string;
  value: number;
}

export const initialStocks: Stock[] = [
  {title: 'Wix.Com Ltd', short: 'WIX', value: 145.05},
  {title: 'Alphabet Inc Class A', short: 'GOOGL', value: 1479.11},
  {title: 'Facebook, Inc. Common Stock', short: 'FB', value: 212.33},
  {title: 'Ford Motor Company', short: 'F', value: 8.1},
  {title: 'Microsoft Corporation', short: 'MSFT', value: 183.89},
  {title: 'Apple Inc.', short: 'AAPL', value: 320.03},
].map((s, i) => ({...s, id: '' + i}));
