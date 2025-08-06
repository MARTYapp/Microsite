type ClassValue =
  | string
  | number
  | null
  | false
  | undefined
  | { [key: string]: boolean | undefined }
  | ClassValue[]

/**
 * Concatenates class names from various input types into a single string.
 * Supports strings, numbers, arrays, and objects with boolean values.
 * Ignores null, false, and undefined values.
 *
 * @param inputs - An array of class values to be concatenated.
 * @returns A space-separated string of class names.
 *
 * @category Utilities
 * @example
 * cn('foo', { bar: true, baz: false }) // 'foo bar'
 */
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