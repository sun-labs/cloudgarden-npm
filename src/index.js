const lookupTable = (secound, third) => {
  switch (true) {
    case (secound === 'F5' && third === 'C4'): return 'FC'
    case (secound === 'CF' && third === 'A2'): return 'F4'
    case (secound === '08' && third === 'D1'): return 'F0'
    case (secound === 'FA' && third === 'BC'): return 'EC'
    case (secound === '98' && third === '06'): return 'E0'
    case (secound === '4F' && third === '22'): return 'DC'
    case (secound === 'F1' && third === '5B'): return 'D8'
    case (secound === 'BF' && third === 'C0'): return 'D8'
    case (secound === 'A0' && third === '1D'): return 'D8'
    case (secound === '50' && third === 'E3'): return 'CC'
    case (secound === '2B' && third === '96'): return 'C8'
    case (secound === '4F' && third === '33'): return 'C4'
    case (secound === 'DD' && third === 'C2'): return 'BC'
    case (secound === 'F0' && third === '09'): return 'B8'
    case (secound === 'E6' && third === '2D'): return 'B4'
    case (secound === 'D0' && third === '74'): return 'AC'
    case (secound === '67' && third === 'B2'): return 'AC'
    case (secound === 'CF' && third === '12'): return 'A4'
    case (secound === '7B' && third === '9D'): return 'A4'
    case (secound === '20' && third === 'A6'): return 'A0'
    case (secound === 'F4' && third === 'AB'): return '98'
    case (secound === '97' && third === 'D5'): return '90'
    case (secound === 'AA' && third === 'B5'): return '8C'
    case (secound === 'F3' && third === 'EB'): return '84'
    case (secound === 'CC' && third === 'A8'): return '84'
    case (secound === '0D' && third === '8E'): return '84'
    case (secound === '7D' && third === '3A'): return '80'
    case (secound === 'DF' && third === 'A1'): return '7C'
    case (secound === '9E' && third === 'BD'): return '7C'
    case (secound === '03' && third === '9F'): return '70'
    case (secound === 'C6' && third === '3A'): return '68'
    case (secound === '01' && third === '94'): return '60'
    case (secound === 'CF' && third === '7F'): return '5C'
    case (secound === '5A' && third === 'A6'): return '54'
    case (secound === '02' && third === '91'): return '50'
    case (secound === '11' && third === 'AE'): return '4C'
    case (secound === '3F' && third === 'DA'): return '48'
    case (secound === 'F5' && third === '20'): return '40'
    case (secound === '71' && third === 'BF'): return '3C'
    case (secound === 'AE' && third === 'A4'): return '30'
    case (secound === 'F4' && third === '32'): return '2C'
    case (secound === '3A' && third === 'E8'): return '2C'
    case (secound === 'B2' && third === 'DE'): return '24'
    case (secound === '6F' && third === '28'): return '24'
    case (secound === '62' && third === 'AB'): return '24'
    case (secound === '0A' && third === 'C4'): return '24'
    case (secound === 'FE' && third === '34'): return '18'
    case (secound === '52' && third === '1C'): return '10'
    default: return 'XX'
  }
}

function macLookup (macAddress = '', splitSymbol = ':') {
  const macAddressParsed = macAddress.toUpperCase()
  const lenght = macAddressParsed.split(splitSymbol).length - 1
  if (lenght === 5) {
    return macAddressParsed
  } else if (lenght < 5) {
    const mac = macAddressParsed.split(':')
    const firstValue = lookupTable(mac[0], mac[1])
    return firstValue + ':' + macAddressParsed
  } else {
    return macAddressParsed
  }
}

/**
 * Get mac and name of sensors qr code string as object
 * @param {String} stringFromQr
 * @returns { mac, name }
 */
const parseQRData = (stringFromQr) => {
  if (!stringFromQr || !stringFromQr.split) return null
  const [qrMac, qrName] = stringFromQr.split('-')
  const formattedMac = macLookup(qrMac)
  return {
    mac: formattedMac,
    name: qrName
  }
}

module.exports = {
  macLookup,
  parseQRData
}

module.exports.macLookup = macLookup
