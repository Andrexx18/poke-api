// src/supabase.js
import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://hbswalhfzbjonffmvaew.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imhic3dhbGhmemJqb25mZm12YWV3Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDc2ODAxOTMsImV4cCI6MjA2MzI1NjE5M30.bm8UIpJC2ZvyZZ2OZUpNO2pyWThzuketJFK1xXfbpd0';
export const supabase = createClient(supabaseUrl, supabaseKey);