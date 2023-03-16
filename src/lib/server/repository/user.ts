import type { IUserRepository, User, UserId } from '../domain/user';

export class UserRepository implements IUserRepository {
	pb: App.Locals['pb'];

	constructor(pb: App.Locals['pb']) {
		this.pb = pb;
	}

	async getUser(id: UserId): Promise<User> {
		return { id: id, username: '' };
	}
}
