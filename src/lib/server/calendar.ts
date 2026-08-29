import ICAL from 'ical.js';
import { env } from '$env/dynamic/private';

export interface CalendarEvent {
	id: string;
	name: string;
	description: string;
	location: string;
	start: Date;
	end: Date;
}

function icsPath(): string {
	const calendarId = env.GOOGLE_CALENDAR_ID;
	if (!calendarId) throw new Error('GOOGLE_CALENDAR_ID not set');
	return `calendar.google.com/calendar/ical/${encodeURIComponent(calendarId)}/public/basic.ics`;
}

export function subscribeUrl(): string {
	return `webcal://${icsPath()}`;
}

export async function fetchCalendarEvents(): Promise<CalendarEvent[]> {
	const res = await fetch(`https://${icsPath()}`);
	if (!res.ok) throw new Error(`Failed to fetch calendar: ${res.status}`);

	const ics = await res.text();
	const jcal = ICAL.parse(ics);
	const comp = new ICAL.Component(jcal);
	const vevents = comp.getAllSubcomponents('vevent');

	return vevents
		.map((vevent) => {
			const event = new ICAL.Event(vevent);
			return {
				id: event.uid,
				name: event.summary ?? 'Untitled event',
				description: event.description ?? '',
				location: event.location ?? '',
				start: event.startDate.toJSDate(),
				end: event.endDate.toJSDate()
			};
		})
		.sort((a, b) => a.start.getTime() - b.start.getTime());
}
