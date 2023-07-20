import { EnvType } from '../shared/config/env.config';

declare global {
  namespace NodeJS {
    // eslint-disable-next-line @typescript-eslint/no-empty-interface
    interface ProcessEnv extends EnvType {}
  }
}