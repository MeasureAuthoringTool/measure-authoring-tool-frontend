
export function getBaseAPIUrl() {
  return process.env.REACT_APP_API_BASE_URL;
}

export function getClientId() {
  return process.env.REACT_APP_CLIENT_SECRET;
}

export function getClientSecret() {
  return process.env.REACT_APP_CLIENT_ID;
}

export function isUseDashboard() {
  return process.env.REACT_APP_USE_DASHBOARD;
}
