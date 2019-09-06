import store from '../store/index';

const API_URL = process.env.REACT_APP_API_BASE_URL;
export const APPLICATION_JSON = 'application/json';
export const APPLICATION_X_WWW_URL_FORM_ENCODED = 'application/x-www-form-urlencoded';

function url(uri) {
  const fullUrl = `${API_URL}${uri}`;
  return fullUrl;
}

async function handleResponse(response) {
  if (response.status === 404) {
    throw await response.json();
  }

  return response.json();
}

/**
 * Creates a bearer authentication string based on the token.
 *
 * @returns a string in the format of `Bearer ${token}`
 */
export function createBearerAuthenticationString(token) {
  return `Bearer ${token}`;
}

/**
 * Creates a basic authentication string. This should probably on be used when there
 * is a need to access an api call with a client id and client secret.
 *
 * @returns a string in the format of username:password as is Base64Encoded.
 */
export function createBasicAuthenticationString(username, password) {
  return `Basic ${Buffer.from(`${username}:${password}`).toString('base64')}`;
}

/**
 * Does an HTTP GET request
 *
 * @param uri the uri to make the request to
 *
 * @returns the data from the api request
 */
export async function get(uri) {
  try {
    const response = await fetch(url(uri), {
      'Content-Type': APPLICATION_JSON,
      method: 'GET',
      credentials: 'include',
      headers: {
        Authorization: createBearerAuthenticationString(store.getState().accessToken.access_token),
      },
      mode: 'cors',
    });
    const json = await handleResponse(response);
    return json;
  } catch (error) {
    throw error;
  }
}

/**
 * Does an HTTP POST request
 *
 * @param uri the uri to make the request
 * @Body body the body of the request
 *
 * @returns the data from the api request
 */
export async function post(uri, body) {
  try {
    const response = await fetch(`${API_URL}${uri}`, {
      method: 'POST',
      credentials: 'include',
      headers: {
        'Content-Type': APPLICATION_JSON,
        Authorization: createBearerAuthenticationString(store.getState().accessToken.access_token),
      },
      body: JSON.stringify(body),
    });

    const json = handleResponse(response);
    return json;
  } catch (error) {
    throw error;
  }
}

export async function postFormURLEncoded(uri, data) {
  try {
    const response = await fetch(`${API_URL}${uri}`, {
      method: 'POST',
      'Content-Type': APPLICATION_X_WWW_URL_FORM_ENCODED,
      mode: 'cors',
      body: data,
    });

    const json = await response.json();
    return json;
  } catch (error) {
    throw error;
  }
}
