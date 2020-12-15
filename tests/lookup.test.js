/* global expect test */

const { macLookup } = require('cloud-garden')

test('', () => {
  const input = 'aa:bb:cc:dd:ee:ff'
  const result = macLookup(input)
  expect(result).toBe('AA:BB:CC:DD:EE:FF')
})

test('', () => {
  const result = macLookup('aa:bb:cc:dd:ee')
  expect(result).toBe('AA:BB:CC:DD:EE')
})

test('', () => {
  const result = macLookup('f5:c4:aa:bb:cc')
  expect(result).toBe('FC:F5:C4:AA:BB:CC')
})

test('', () => {
  const result = macLookup('F5:c4:AA:bb:Cc')
  expect(result).toBe('FC:F5:C4:AA:BB:CC')
})

test('', () => {
  const result = macLookup('ff:DD')
  expect(result).toBe('FF:DD')
})

test('', () => {
  const result = macLookup('ff:DD:dd:ee:ff:gg:hh')
  expect(result).toBe('FF:DD:DD:EE:FF:GG:HH')
})