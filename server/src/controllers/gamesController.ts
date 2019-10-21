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

  public put(req: Request, res: Response) {
    res.json({ message: `Updating a game ${req.params.id}` });
  }

  public delete(req: Request, res: Response) {
    res.json({ message: `Deleting a game ${req.params.id}` });
  }
}
const gamesController = new GamesController();
export default gamesController;
