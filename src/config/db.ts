import { createClient, SupabaseClient } from "@supabase/supabase-js";

// Load your environment variables (ensure you have these set in your environment or .env file)
const SUPABASE_URL = process.env.SUPABASE_URL as string;
const SUPABASE_KEY = process.env.SUPABASE_KEY as string;

if (!SUPABASE_URL || !SUPABASE_KEY) {
  throw new Error("SUPABASE_URL and SUPABASE_KEY must be set in environment variables");
}

export const supabase: SupabaseClient = createClient(SUPABASE_URL, SUPABASE_KEY);

// Example: test the connection by fetching the current timestamp from the database
export const testConnection = async () => {
  const { data, error } = await supabase.rpc('now');
  if (error) {
    console.error("Supabase connection failed:", error);
    return;
  }
  console.log("Supabase connected. Server time:", data);
};