import type { UserId } from './user';

export type ChatId = string;

export type Chat = {
	id: ChatId;
	user_id: UserId;
	query: string;
	prompts: Prompt[];
	created_at: Date;
	updated_at: Date;
};

export type CreateChat = Omit<Omit<Chat, 'created_at'>, 'updated_at'>;

export type Prompt = {
	id: string;
	prompt: string;
	chat_id: ChatId;
	user_id: UserId;
	created_at: Date;
	updated_at: Date;
};

export type CreatePrompt = Omit<Omit<Omit<Prompt, 'id'>, 'created_at'>, 'updated_at'>;

export interface IChatRepository {
	createChat(dto: CreateChat): Promise<Chat>;
	getChat(id: ChatId): Promise<Chat>;
	getChats(userId: UserId): Promise<Chat[]>;
	addPrompt(dto: CreatePrompt): Promise<Prompt>;
	deleteChat(id: ChatId): Promise<boolean>;
}

export interface IChatUsecase {
	createChat(dto: CreateChat): Promise<Chat>;
	getChat(id: ChatId): Promise<Chat>;
	getChats(userId: UserId): Promise<Chat[]>;
	addPrompt(dto: CreatePrompt): Promise<Prompt>;
	deleteChat(id: ChatId): Promise<boolean>;
}
