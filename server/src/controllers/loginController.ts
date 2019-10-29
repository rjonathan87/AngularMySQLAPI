import { Request, Response } from "express";

const jwt = require('jsonwebtoken');

class LoginController {

  public index(req: Request, res: Response) {
    // res.send("Hello from Controller Login");
    const user = { id: 3 };
    const token = jwt.sign({ user }, 'my_secret_key');
    return res.json({
      token
    });
  }

  public protected(req: Request, res: Response) {
    return res.json(
      {
        message: 'Json Web Token'
      }
    )
  }


}

const loginController = new LoginController();
export default loginController;
