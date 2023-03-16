import type { Chat, ChatId, CreateChat, CreatePrompt, IChatRepository, Prompt } from '../domain/llm';
import type { UserId } from '../domain/user';

export class ChatRepository implements IChatRepository {
	pb: App.Locals['pb'];

	constructor(pb: App.Locals['pb']) {
		this.pb = pb;
	}

	async createChat(dto: CreateChat): Promise<Chat> {
		return {
			...dto,
			created_at: new Date(),
			updated_at: new Date()
		};
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

	async addPrompt(dto: CreatePrompt): Promise<Prompt> {
		return {
			...dto,
			id: 'hshshs',
			created_at: new Date(),
			updated_at: new Date()
		};
	}

	async deleteChat(_id: ChatId): Promise<boolean> {
		return true;
	}
}
