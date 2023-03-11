// See https://kit.svelte.dev/docs/types#app

import type { IProfileUsecase } from '$lib/server/domain/user';
import type { IChatUsecase } from './lib/server/domain/llm';

// for information about these interfaces
declare global {
	namespace App {
		// interface Error {}
		interface Locals {
			pb: import('pocketbase').default;
			session: import('pocketbase').BaseModel | import('pocketbase').Admin | null;
			profileUsecase: IProfileUsecase;
			chatUsecase: IChatUsecase;
		}
		// interface PageData {}
		// interface Platform {}
	}
}

export {};
