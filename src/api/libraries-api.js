import { post } from './api-util';
import * as mockData from '../mock-data';

export async function createNewLibrary(newLibraryInformation) {
  const newLibrary = await post('/api/libraries', newLibraryInformation);
  return newLibrary;
}

export async function getRecentLibraries() {
  const recentLibraries = [
    {
      name: 'Library 1',
      version: '0.0.001',
      isDraft: true,
      ownerName: 'Nicole Hunter',
      id: '123-abc-456',
    },
    {
      name: 'Library 2',
      version: '1.0.000',
      isDraft: false,
      ownerName: 'Nicole Hunter',
      id: '456-abc-789',
    },
    {
      name: 'Library 2',
      version: '1.0.002',
      isDraft: true,
      ownerName: 'Nicole Hunter',
      id: '789-abc-123',
    },
    {
      name: 'Library 4',
      version: '4.0.000',
      isDraft: false,
      ownerName: 'Jack Meyer',
      id: '123-def-123',
    },
    {
      name: 'Library 5',
      version: '1.0.001',
      isDraft: true,
      ownerName: 'Jack Meyer',
      id: '123-def-456',
    },
    {
      name: 'Library 6',
      version: '1.0.001',
      isDraft: true,
      ownerName: 'Jack Meyer',
      id: '123-def-789',
    },
    {
      name: 'Library 7',
      version: '1.0.001',
      isDraft: true,
      ownerName: 'Eric Durbin',
      id: '789-def-123',
    },
    {
      name: 'Library 7',
      version: '1.0.000',
      isDraft: false,
      ownerName: 'Eric Durbin',
      id: '789-def-456',
    },
    {
      name: 'Library 9',
      version: '1.0.050',
      isDraft: true,
      ownerName: 'Eric Durbin',
      id: '789-hij-456',
    },
    {
      name: 'Library 10',
      version: '1.1.000',
      isDraft: false,
      ownerName: 'Eric Durbin',
      id: '789-hij-123',
    },
  ];
  return recentLibraries;
}

export function getLibraryById(id) {
  const result = mockData.libraries.filter(library => library.id === id);
  return result[0];
}
