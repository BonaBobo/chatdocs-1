import type { CreatePrompt } from "$lib/server/domain/llm";
import type { Actions } from "@sveltejs/kit";

export const actions: Actions = {
	async newPrompt({ locals, request }) {
		const data = await request.formData();
		const prompt = data.get('prompt');

		if (!prompt) {
			return { emptyPrompt: true, message: 'Empty prompt' };
		}

		const newPrompt: CreatePrompt = {
			user_id: 'testuserid',
			chat_id: 'testchatid',
			prompt: prompt.toString()
		};

		try {
			const res = await locals.chatUsecase.addPrompt(newPrompt);
			console.log(res);
			return { success: true, message: 'AI Answer here...' };
		} catch (e) {
			return { errorOccured: true, message: 'Something went wrong.' }
		}
	}
}
