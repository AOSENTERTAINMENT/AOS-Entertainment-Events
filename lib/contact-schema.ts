import { z } from 'zod';

const validEventTypes = ['wedding', 'birthday', 'corporate', 'club'] as const;

export const contactFormSchema = z.object({
  name: z
    .string()
    .trim()
    .min(2, 'Name must be at least 2 characters')
    .max(100, 'Name must be at most 100 characters'),
  email: z
    .string()
    .trim()
    .max(255, 'Email must be at most 255 characters')
    .email('Please enter a valid email address'),
  eventType: z
    .string()
    .trim()
    .min(1, 'Please select an event type')
    .max(100)
    .refine((val) => validEventTypes.includes(val as (typeof validEventTypes)[number]), {
      message: 'Invalid event type',
    }),
  eventDate: z
    .string()
    .trim()
    .min(1, 'Please select an event date')
    .refine((val) => !Number.isNaN(Date.parse(val)) && val.length <= 50, {
      message: 'Please enter a valid date',
    }),
  message: z
    .string()
    .trim()
    .min(10, 'Message must be at least 10 characters')
    .max(2000, 'Message must be at most 2000 characters'),
});

export type ContactFormData = z.infer<typeof contactFormSchema>;

export function parseContactBody(body: unknown): { success: true; data: ContactFormData } | { success: false; error: string } {
  const parsed = contactFormSchema.safeParse(body);
  if (parsed.success) {
    return { success: true, data: parsed.data };
  }
  const first = parsed.error.flatten().fieldErrors;
  const message = first.name?.[0] ?? first.email?.[0] ?? first.eventType?.[0] ?? first.eventDate?.[0] ?? first.message?.[0] ?? 'Invalid form data';
  return { success: false, error: message };
}
