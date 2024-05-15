import supabase from "./supabase";
export default async function getSupa() {
  const { data } = await supabase.from("test").select(`*`);
  return data;
}
