export type UserId = string;

export type User = {
	id: UserId;
	username: string;
};

export interface IUserRepository {
	getUser(id: UserId): Promise<User>;
}

export interface IProfileUsecase {
	getUser(id: UserId): Promise<User>;
}
