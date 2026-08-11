import { fetchCalendarEvents, subscribeUrl } from '$lib/server/calendar';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async () => {
	const events = await fetchCalendarEvents();
	const now = Date.now();

	return {
		upcoming: events.filter((e) => e.end.getTime() >= now),
		past: events.filter((e) => e.end.getTime() < now).reverse(),
		subscribeUrl: subscribeUrl()
	};
};
