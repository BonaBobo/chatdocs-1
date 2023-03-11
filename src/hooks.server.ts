import { BACKEND_URL } from '$env/static/private';
import { UserRepository } from '$lib/server/repository/user';
import { ProfileUsecase } from '$lib/server/usecase/profile';
import type { Handle } from '@sveltejs/kit';
import PocketBase from 'pocketbase';
import { ChatRepository } from './lib/server/repository/llm';
import { ChatUsecase } from './lib/server/usecase/chat';

export const handle: Handle = async ({ event, resolve }) => {
	event.locals.pb = new PocketBase(BACKEND_URL || 'http://localhost:8090');
	event.locals.pb.authStore.loadFromCookie(event.request.headers.get('cookie') || '');

	const chatRepository = new ChatRepository(event.locals.pb);
	const chatUsecase = new ChatUsecase(chatRepository);

	const userRepository = new UserRepository(event.locals.pb);
	const profileUsecase = new ProfileUsecase(userRepository);

	event.locals.chatUsecase = chatUsecase;
	event.locals.profileUsecase = profileUsecase;

	if (event.locals.pb.authStore.isValid) {
		event.locals.session = event.locals.pb.authStore.model;
	} else {
		event.locals.session = null;
		event.locals.pb.authStore.clear();
	}

	const response = await resolve(event);
	response.headers.set(
		'set-cookie',
		event.locals.pb.authStore.exportToCookie({
			secure: process.env.NODE_ENV === 'production'
		})
	);
	return response;
};
