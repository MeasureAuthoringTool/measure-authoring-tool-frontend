export function getMeasureExportRoute(measureId) {
  return `/app/measures/${measureId}/export`;
}

export function getMeasureRoute(measureId) {
  return `/app/measures/${measureId}`;
}

export function getCreateMeasureVersionRoute(measureId) {
  return `/app/measures/${measureId}/version`;
}

export function getCreateMeasureDraftRoute(measureId) {
  return `/app/measures/${measureId}/draft`;
}

export function getMeasureHistoryRoute(measureId) {
  return `/app/measures/${measureId}/history`;
}

export function getMeasureShareRoute(measureId) {
  return `/app/measures/${measureId}/share`;
}

export function getMeasureCloneRoute(measureId) {
  return `/app/measures/${measureId}/clone`;
}
