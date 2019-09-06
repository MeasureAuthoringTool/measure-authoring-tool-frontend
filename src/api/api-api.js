
import { get } from './api-util';

// eslint-disable-next-line
export async function getAPIInformation() {
  const json = await get('/api');
  return json;
}
