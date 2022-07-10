import { PoolPage, StakePage } from 'features/stake';
import { VaultPage } from 'features/vault';
import { App, HomePage } from '../features/home';
import { FAQPage } from '../features/FAQ';

const routes = [
  {
    path: '/:chain',
    component: App,
    childRoutes: [
      { path: '/:chain', component: HomePage, isIndex: true },
      { path: '/:chain/stake', component: StakePage },
      { path: '/:chain/stake/pool/:id', component: PoolPage },
      { path: '/:chain/vault/:vaultId', component: VaultPage },
      { path: '/:chain/FAQ', component: FAQPage },
    ],
  },
];

export default routes;
