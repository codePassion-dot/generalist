import { Session } from 'express-session';

declare global {
  // eslint-disable-next-line @typescript-eslint/no-namespace
  namespace Express {
    interface User {
      id: string;
      email: string;
      name: string;
    }
  }
}

declare module 'express-serve-static-core' {
  interface Request {
    session: Session;
  }
}

declare module 'express-session' {
  interface Session {
    passport: {
      user: Express.User;
    };
  }
}
