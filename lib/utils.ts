type ClassValue =
  | string
  | number
  | null
  | false
  | undefined
  | { [key: string]: boolean | undefined }
  | ClassValue[]

// ✅ Eliot-approved, type-safe, non-recursive flattening
export function cn(...inputs: ClassValue[]): string {
  const result: string[] = []
  const stack = [...inputs]

  while (stack.length) {
    const val = stack.pop()

    if (!val) continue

    if (typeof val === 'string' || typeof val === 'number') {
      result.push(val.toString())
    } else if (Array.isArray(val)) {
      stack.push(...val)
    } else if (typeof val === 'object') {
      for (const [key, enabled] of Object.entries(val)) {
        if (enabled) result.push(key)
      }
    }
  }

  return result.reverse().join(' ')
}