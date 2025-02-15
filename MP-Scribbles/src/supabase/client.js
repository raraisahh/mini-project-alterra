import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://ilhjnpnmirnqdrlufccs.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImlsaGpucG5taXJucWRybHVmY2NzIiwicm9sZSI6ImFub24iLCJpYXQiOjE3Mzk2MTc5OTIsImV4cCI6MjA1NTE5Mzk5Mn0.CTZ19l0oWylqW7Vn1txOELL_0RuHRmxAlCUtDGSCDV0";

export const supabase = createClient(supabaseUrl, supabaseKey);