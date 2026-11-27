export function registeredCelClip(action: string): { durationMs: number } | null;
export function registeredCelFrame(action: string, elapsedMs: number): { asset: string; cell: number } | null;
