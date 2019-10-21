import { Request, Response } from "express";
import pool from "../database";
import { json } from "body-parser";

class GamesController {
  public async list(req: Request, res: Response): Promise<any> {
    try {
      await pool.query('SELECT * FROM games', (err, result, fields) => {
        if (err) throw err;

        if (result.length > 0)
          return res.json(result);
        else
          return res.json({ message: 'No hay juegos que mostrar' });
      });

    } catch (error) {
      console.log(error);
    }
  }

  public async getOne(req: Request, res: Response): Promise<void> {
    //destructuracion 
    const { id } = req.params;
    // const games = await pool.query('SELECT * FROM games WHERE id = ?', [id]);
    await pool.query('SELECT * FROM games WHERE id = ?', [id], (err, result, fields) => {
      if (err) throw err;

      if (result.length > 0) {
        return res.json(result[0]);
      }
      return res.status(404).json({ message: 'El juego no existe' });
    })
  }

  public async create(req: Request, res: Response): Promise<void> {
    console.log(req.body);

    await pool.query('INSERT INTO games set ?', [req.body]);

    res.json({ message: "Game saved" });
  }

  public async put(req: Request, res: Response) {
    // res.json({ message: `Updating a game ${req.params.id}` });
    const { id } = req.params;
    await pool.query('UPDATE games SET ? WHERE id = ?', [req.body, id], (err, result, fields) => {
      if (err) throw err;

      return res.json({ message: 'Juego actualizado' });
    })
  }

  public async delete(req: Request, res: Response): Promise<void> {
    // res.json({ message: `Deleting a game ${req.params.id}` });
    const { id } = req.params;
    await pool.query('DELETE FROM games WHERE id = ?', [id], (err, result, fields) => {
      if (err) throw err;

      return res.json({ message: 'Juego eliminado' });
    });
  }
}
const gamesController = new GamesController();
export default gamesController;
