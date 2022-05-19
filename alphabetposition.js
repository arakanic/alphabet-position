// This function is given a string and replaces every letter with its position in the alphabet, while ignoring other characters!
function alphabetPosition(text) {
  const letters = text.toUpperCase().replace(/[^A-Z]/g, '').split('')
  return letters.map(c => c.charCodeAt() - 64).join(' ');
}
