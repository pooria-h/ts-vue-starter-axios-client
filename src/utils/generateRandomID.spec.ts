import { test, expect, describe } from 'vitest';
import { generateRandomID } from '@/utils/generateRandomID';

describe('generateRandomID', () => {
  test('generates a unique ID each time it is called', () => {
    const id1 = generateRandomID();
    const id2 = generateRandomID();
    const id3 = generateRandomID();

    expect(id1).not.toEqual(id2);
    expect(id1).not.toEqual(id3);
    expect(id2).not.toEqual(id3);
  });

  test('generates an ID that starts with "id-"', () => {
    const id = generateRandomID();
    expect(id.startsWith('id-')).toBe(true);
  });

  test('generates an ID that contains two "-" characters', () => {
    const id = generateRandomID();
    const parts = id.split('-');
    expect(parts.length).toBe(3);
  });
});
