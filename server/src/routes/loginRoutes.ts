import { Router, Request, Response, NextFunction } from "express";

import loginController from "../controllers/loginController";

class LoginRoutes {
  public router: Router = Router();

  constructor() {
    this.config();
  }
  config(): void {
    this.router.get("/", function (req, res, next) {
      console.log(req.params);
      next();
    },
      function () {
        ensureToken('', '', '');
      }

    );
    this.router.get("/protected", loginController.protected);
  }

}
function ensureToken(req: any, res: any, next: any) {
  const bearerHeader = req.headers['auhorization'];
  console.log(bearerHeader);
  console.log('ooo');

}

const gamesRoutes = new LoginRoutes();
export default gamesRoutes.router;
