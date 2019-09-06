import * as envUtil from '../utils/env-util';
import * as apiUtil from './api-util';

const API_URL = process.env.REACT_APP_API_BASE_URL;

/**
 * Makes an api call to GET /oauth/token
 *
 * @returns the access token information that was exchanged for by a code.
 */
export async function getAccessTokenForCode(code) {
  const clientId = envUtil.getClientId();
  const clientSecret = envUtil.getClientSecret();
  try {
    const url = `${API_URL}/oauth/token?grant_type=authorization_code&code=${code}&client_id=${clientId}`;
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        Authorization: apiUtil.createBasicAuthenticationString(clientId, clientSecret),
        'Content-Type': apiUtil.APPLICATION_X_WWW_URL_FORM_ENCODED,
      },
    });

    const json = await response.json();
    return json;
  } catch (error) {
    throw error;
  }
}

export async function checkAccessToken(token) {
  try {
    const uri = `/oauth/check_token?token=${token}`;
    const data = await apiUtil.get(uri);
    return data;
  } catch (error) {
    throw error;
  }
}
