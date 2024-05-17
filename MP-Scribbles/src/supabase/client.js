import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://dgxvuttcvsghpkhtezom.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImRneHZ1dHRjdnNnaHBraHRlem9tIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTUwOTM0NjIsImV4cCI6MjAzMDY2OTQ2Mn0.U5bRSIlraJA-tza12MQoCY0w_Sjt_J9JvKc3xPjw0Nk";

export const supabase = createClient(supabaseUrl, supabaseKey);