import type { Actions } from "@sveltejs/kit";

export const actions: Actions = {
	async newChat({ locals, request }) {
		const data = await request.formData();
		const url = data.get('url');

		const newPrompt = await locals.chatUsecase.addPrompt();
		console.log(newPrompt, url);

		return { success: true };
	}
};
