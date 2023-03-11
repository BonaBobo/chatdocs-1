import type { Chat, ChatId, IChatRepository, IChatUsecase } from '../domain/llm';
import type { UserId } from '../domain/user';

export class ChatUsecase implements IChatUsecase {
	chatRepo: IChatRepository;

	constructor(chatRepo: IChatRepository) {
		this.chatRepo = chatRepo;
	}

	async getChat(id: ChatId): Promise<Chat> {
		return this.chatRepo.getChat(id);
	}

	async getChats(userId: UserId): Promise<Chat[]> {
		return this.chatRepo.getChats(userId);
	}

	async addPrompt(): Promise<boolean> {
		return this.addPrompt();
	}

	async deleteChat(id: ChatId): Promise<boolean> {
		return this.deleteChat(id);
	}
}
