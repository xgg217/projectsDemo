export const Props = {
  date: {
    type: Date,
    default: (): Date => new Date(),
    required: true,
  },
} as const;

export const Emits = {
  // 'change-date': (date: CalendarEmitInterface): CalendarEmitInterface => date,
  // 'change-switch': (date: CalendarEmitInterface): CalendarEmitInterface => date
} as const;
