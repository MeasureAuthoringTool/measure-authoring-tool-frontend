import { get } from './api-util';

// eslint-disable-next-line
export async function getUserInformation() {
  const userInformation = await get('/api/user');
  return userInformation;
}
