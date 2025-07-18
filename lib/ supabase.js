import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://lsmvrymnpqzofebwbkeq.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImxzbXZyeW1ucHF6b2ZlYndia2VxIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTE5MTQwNTAsImV4cCI6MjA2NzQ5MDA1MH0.5IQSCW5Cbnlu8J1JMtVli3E662Vv6wdwOk-jbSpwAH4'
export const supabase = createClient(supabaseUrl, supabaseKey);