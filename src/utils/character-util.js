
export function isNumber(character) {
  return (/^[0-9]/.test(character));
}

export function isCharacter(character) {
  return (/^[a-zA-Z]/.test(character));
}

export function isWhiteSpace(character) {
  return /\s/.test(character);
}
