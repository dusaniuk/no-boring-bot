import { credential, initializeApp } from 'firebase-admin';

import { createDbConnection } from './firestore.connection';
import { CONFIG } from '../config/index';

jest.mock('firebase-admin', () => ({
  initializeApp: jest.fn().mockReturnValue({ firestore: jest.fn() }),
  credential: {
    cert: jest.fn().mockImplementation((props) => props),
  },
}));

describe('firestore.connection', () => {
  describe('createDatabase', () => {
    it('should initialize app with props from env', () => {
      createDbConnection();

      expect(initializeApp).toHaveBeenCalledWith({
        credential: credential.cert({
          privateKey: CONFIG.bot.database.privateKey,
          clientEmail: CONFIG.bot.database.clientEmail,
          projectId: CONFIG.bot.database.projectId,
        }),
        databaseURL: CONFIG.bot.database.databaseURL,
      }, expect.any(String));
    });
  });
});
