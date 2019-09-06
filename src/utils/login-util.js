import * as envUtil from './env-util';

// eslint-disable-next-line
export function redirectToLoginPage() {
  const baseUrl = envUtil.getBaseAPIUrl();
  const loginUrl = `${baseUrl}/oauth/authorize?client_id=${envUtil.getClientId()}&client_secret=${envUtil.getClientSecret()}&scope=write&response_type=code`;
  window.location.replace(loginUrl);
}
