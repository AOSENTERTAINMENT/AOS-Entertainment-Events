/**
 * Sanitize a string for safe use in email headers and body.
 * Prevents header injection (CR/LF), script injection, and removes control characters.
 */
export function sanitizeForEmail(input: string): string {
  if (typeof input !== 'string') return '';
  return input
    .replace(/[\r\n]+/g, ' ') // Prevent header injection
    .replace(/[\x00-\x08\x0B\x0C\x0E-\x1F\x7F]/g, '') // Remove control characters
    .trim();
}

/**
 * Sanitize a string for general display/storage (stricter).
 * Keeps only safe printable characters for plain-text email body.
 */
export function sanitizeString(input: string, maxLength: number): string {
  if (typeof input !== 'string') return '';
  return sanitizeForEmail(input).slice(0, maxLength);
}
