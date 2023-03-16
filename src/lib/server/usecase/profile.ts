import type { IProfileUsecase, IUserRepository, User, UserId } from '../domain/user';

export class ProfileUsecase implements IProfileUsecase {
	userRepo: IUserRepository;

	constructor(userRepo: IUserRepository) {
		this.userRepo = userRepo;
	}

	async getUser(id: UserId): Promise<User> {
		return this.userRepo.getUser(id);
	}
}
