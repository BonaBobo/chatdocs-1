import type { Chat, ChatId, CreateChat, CreatePrompt, IChatRepository, IChatUsecase, Prompt } from '../domain/llm';
import type { UserId } from '../domain/user';

export class ChatUsecase implements IChatUsecase {
	chatRepo: IChatRepository;

	constructor(chatRepo: IChatRepository) {
		this.chatRepo = chatRepo;
	}

	async createChat(dto: CreateChat): Promise<Chat> {
		return this.chatRepo.createChat(dto);
	}

	async getChat(id: ChatId): Promise<Chat> {
		return this.chatRepo.getChat(id);
	}

	async getChats(userId: UserId): Promise<Chat[]> {
		return this.chatRepo.getChats(userId);
	}

	async addPrompt(dto: CreatePrompt): Promise<Prompt> {
		return this.chatRepo.addPrompt(dto);
	}

	async deleteChat(id: ChatId): Promise<boolean> {
		return this.chatRepo.deleteChat(id);
	}
}
