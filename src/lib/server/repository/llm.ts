import type { Chat, ChatId, IChatRepository } from '../domain/llm';
import type { UserId } from '../domain/user';

export class ChatRepository implements IChatRepository {
	pb: App.Locals['pb'];

	constructor(pb: App.Locals['pb']) {
		this.pb = pb;
	}

	async getChat(id: ChatId): Promise<Chat> {
		return {
			id,
			user_id: '',
			query: '',
			prompts: [],
			created_at: new Date(),
			updated_at: new Date()
		};
	}

	async getChats(userId: UserId): Promise<Chat[]> {
		return [
			{
				id: '',
				user_id: userId,
				query: '',
				prompts: [],
				created_at: new Date(),
				updated_at: new Date()
			}
		];
	}

	async addPrompt(): Promise<boolean> {
		return true;
	}

	async deleteChat(_id: ChatId): Promise<boolean> {
		return true;
	}
}
