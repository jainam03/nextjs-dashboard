import { Inter, Poppins, Roboto } from 'next/font/google';
import { Lusitana } from 'next/font/google'

export const inter = Inter({
    subsets: ['latin'],
});

export const lusitana = Lusitana({
    weight: ['400', '700'],
    subsets: ['latin'],
});

export const poppins = Poppins({
    weight: ['500', '700'],
    subsets: ['latin']
});

export const roboto = Roboto({
    weight: ['400', '700'],
    subsets: ['latin']
});