import { Router } from "express";
import { CheckingAccountController } from "./controllers/CheckingAccountController";
import { StatmentController } from "./controllers/StatementController";

const routes = Router();

const checkingAccountController = new CheckingAccountController();

const statementController = new StatmentController();

const path = "/checkingaccounts";

routes.get(path, checkingAccountController.findAll);

routes.get(`${path}/:id`, checkingAccountController.findById);

routes.post(path, checkingAccountController.create);

routes.put(`${path}/:id`, checkingAccountController.verifyExists, checkingAccountController.update);

routes.delete(`${path}/:id`, checkingAccountController.verifyExists, checkingAccountController.delete);

routes.post(`${path}/id/deposit`, checkingAccountController.verifyExists, statementController.deposit)

routes.get(`${path}/:id/statement`, checkingAccountController.verifyExists, statementController.getStatement);

routes.post(`${path}/:id/withdraw`, checkingAccountController.verifyExists, statementController.withdraw);

export { routes }