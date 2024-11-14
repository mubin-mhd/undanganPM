import { createClient } from "https://cdn.jsdelivr.net/npm/@supabase/supabase-js/+esm";

export const configureSupabase = () => {
  const SUPABASE_URL = 'https://euyowjmblqfpqhztmfin.supabase.co';
  const SUPABASE_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImV1eW93am1ibHFmcHFoenRtZmluIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzE1NTExMzEsImV4cCI6MjA0NzEyNzEzMX0.08JaFVuJPU22tMLFe5nH6wiKnKfyyz97ZwZbMh4jf00';

  const supabase = createClient(SUPABASE_URL, SUPABASE_KEY);

  return supabase;
};
