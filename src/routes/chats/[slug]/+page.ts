import type { PageLoad } from './$types';

export const load = (({ params }) => {
	return {
		chatId: params.slug
	};
}) satisfies PageLoad;
