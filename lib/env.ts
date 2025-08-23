export function reqEnv(name: string): string {
  const v = process.env[name];
  if (!v) throw new Error(`Missing required env: ${name}`);
  return v;
}
export function optEnv(name: string, fallback?: string): string | undefined {
  const v = process.env[name];
  return v ?? fallback;
}
