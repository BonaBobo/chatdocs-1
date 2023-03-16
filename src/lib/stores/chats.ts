import { writable } from 'svelte/store';

export type ChatId = string;
export type Chat = { type: 'user' | 'bot'; content: string };
export type Chats = Array<Chat>;
export type MapChats = Map<ChatId, Chats>;

const chatMaps: MapChats = new Map();
chatMaps.set('helloworldid', [
	{
		type: 'user',
		content: 'Hello, world'
	},
	{
		type: 'bot',
		content: 'Hello, world'
	},
	{
		type: 'user',
		content: 'Hello, world'
	},
	{
		type: 'bot',
		content: 'Hello, world'
	},
	{
		type: 'user',
		content: 'Hello, world'
	},
	{
		type: 'bot',
		content: 'Hello, world'
	},
	{
		type: 'user',
		content: 'Hello, world'
	},
	{
		type: 'bot',
		content: 'Hello, world'
	},
	{
		type: 'user',
		content: 'Hello, world'
	},
	{
		type: 'bot',
		content: 'Hello, world'
	},
	{
		type: 'user',
		content: 'Hello, world'
	},
	{
		type: 'bot',
		content: 'Hello, world'
	},
	{
		type: 'user',
		content: 'Hello, world'
	},
	{
		type: 'bot',
		content: 'Hello, world'
	},
	{
		type: 'user',
		content: 'Hello, world'
	}
]);

export const chats = writable<MapChats>(chatMaps);
