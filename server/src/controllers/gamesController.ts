import { Request, Response } from "express";
import pool from "../database";

class GamesController {
  public async list(req: Request, res: Response) {
    const games = await pool.query('SELECT * FROM games');
    // res.json({ games });
    console.log(res);
  }

  public getOne(req: Request, res: Response) {
    res.json({ message: `This is game ${req.params.id}` });
  }

  public async create(req: Request, res: Response): Promise<void> {
    console.log(req.body);

    await pool.query('INSERT INTO games set ?', [req.body]);

    res.json({ message: "Game saved" });
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
