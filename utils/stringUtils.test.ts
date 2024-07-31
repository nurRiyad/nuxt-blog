import { describe, expect, it } from 'vitest'
import { createFolderName } from './stringUtils'

describe('createFolderName', () => {
  it('should create a folder name with the correct format', () => {
    const date = '2024-06-10'
    const title = 'Mon Article de Test'
    const expected = '2024-06-10-mon-article-de-test'
    expect(createFolderName(date, title)).toBe(expected)
  })

  it('should handle titles with special characters', () => {
    const date = '2024-06-10'
    const title = 'Article @ Test #1!'
    const expected = '2024-06-10-article-test-1'
    expect(createFolderName(date, title)).toBe(expected)
  })

  it('should handle empty title', () => {
    const date = '2024-06-10'
    const title = ''
    const expected = '2024-06-10-'
    expect(createFolderName(date, title)).toBe(expected)
  })

  it('should throw an error for invalid date', () => {
    const date = 'invalid-date'
    const title = 'Test'
    expect(() => createFolderName(date, title)).toThrow('Date invalide fournie')
  })
})
