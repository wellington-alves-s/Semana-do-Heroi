import { request, response, Router } from "express";
import { UsersController } from "../controllers/usersController";
class UsersRoutes {
	private router: Router;
	private usersController: UsersController;
	constructor() {
		this.router = Router();
		this.usersController = new UsersController();
	}
	getRoutes() {
		this.router.post("/", this.usersController.store.bind(this.usersController));

		return this.router;
	}
}

export { UsersRoutes };
