import { Router, Request, Response, NextFunction } from 'express';

import TeamController from '../controllers/teams';

const teamRouter = Router();

teamRouter.get(
  '/',
  (req: Request, res: Response, next: NextFunction) => TeamController.getTeams(req, res, next),
);

export default teamRouter;
