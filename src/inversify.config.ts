import { Container } from 'inversify';

import { nbrDependencies } from './nbr/nbr.module';

const container = new Container();

container.load(
  nbrDependencies,
);

export { container };
