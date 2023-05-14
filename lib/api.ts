// lib/api.ts

import axios from 'axios';
import { API_URL } from '../src/config';

export interface Quote {
  content: string;
  author: string;
}

export async function getQuote(): Promise<Quote> {
  const response = await axios.get(API_URL);
  return response.data;
}
