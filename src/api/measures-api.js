import { get, post } from './api-util';
import * as mockData from '../mock-data';

export async function getMeasureById(id) {
  const measure = await get(`/api/measures/${id}`);
  return measure;
}

export async function createNewMeasure(newMeasureInformation) {
  const newMeasure = await post('/api/measures', newMeasureInformation);
  return newMeasure;
}

export async function getRecentMeasures() {
  const recentMeasures = [
    {
      name: 'Measure 1',
      version: '0.0.001',
      isDraft: true,
      ownerName: 'Nicole Hunter',
      id: '8a0282e468c520d80168c98ea0700000',
    },
    {
      name: 'Measure 2',
      version: '1.0.000',
      isDraft: false,
      ownerName: 'Nicole Hunter',
      id: '456-abc-789',
    },
    {
      name: 'Measure 2',
      version: '1.0.002',
      isDraft: true,
      ownerName: 'Nicole Hunter',
      id: '789-abc-123',
    },
    {
      name: 'Measure 4',
      version: '4.0.000',
      isDraft: false,
      ownerName: 'Jack Meyer',
      id: '123-def-123',
    },
    {
      name: 'Measure 5',
      version: '1.0.001',
      isDraft: true,
      ownerName: 'Jack Meyer',
      id: '123-def-456',
    },
    {
      name: 'Measure 6',
      version: '1.0.001',
      isDraft: true,
      ownerName: 'Jack Meyer',
      id: '123-def-789',
    },
    {
      name: 'Measure 7',
      version: '1.0.001',
      isDraft: true,
      ownerName: 'Eric Durbin',
      id: '789-def-123',
    },
    {
      name: 'Measure 7',
      version: '1.0.000',
      isDraft: false,
      ownerName: 'Eric Durbin',
      id: '789-def-456',
    },
    {
      name: 'Measure 9',
      version: '1.0.050',
      isDraft: true,
      ownerName: 'Eric Durbin',
      id: '789-hij-456',
    },
    {
      name: 'Measure 10',
      version: '1.1.000',
      isDraft: false,
      ownerName: 'Eric Durbin',
      id: '789-hij-123',
    },
  ];
  return recentMeasures;
}

export function getMeasureSearch(searchText, myMeasures, currentUserName) {
  let result = mockData.measures;
  if (myMeasures) {
    result = result.filter(measure => measure.ownerName === currentUserName);
  }
  if (searchText !== '') {
    result = result.filter(measure => measure.name.includes(searchText));
  }
  return result;
}
