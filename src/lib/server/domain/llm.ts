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

export type Prompt = {
	id: string;
	prompt: string;
	chat_id: ChatId;
	user_id: UserId;
	created_at: Date;
	updated_at: Date;
};

export interface IChatRepository {
	getChat(id: ChatId): Promise<Chat>;
	getChats(userId: UserId): Promise<Chat[]>;
	addPrompt(): Promise<boolean>;
	deleteChat(id: ChatId): Promise<boolean>;
}

export interface IChatUsecase {
	getChat(id: ChatId): Promise<Chat>;
	getChats(userId: UserId): Promise<Chat[]>;
	addPrompt(): Promise<boolean>;
	deleteChat(id: ChatId): Promise<boolean>;
}
