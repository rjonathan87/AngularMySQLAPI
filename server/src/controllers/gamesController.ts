import { Request, Response } from "express";
import pool from "../database";

class GamesController {
  public index(req: Request, res: Response) {
    pool.query("DESCRIBE games");
    res.json("games");
  }

  public create(req: Request, res: Response) {
    res.json({ message: "creating" });
  }
}
const gamesController = new GamesController();
export default gamesController;
