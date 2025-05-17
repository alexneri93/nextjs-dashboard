import { Inter, Lusitana } from 'next/font/google';

// PERFORMANCE: Only export the font with the subset of latin characters
export const inter = Inter({ subsets: ['latin'] });
export const lusitana = Lusitana({ subsets: ['latin'], weight: ['400', '700']});