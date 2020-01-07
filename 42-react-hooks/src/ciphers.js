export function caesarsCipher(message) {
  return message.split('').map(character => {
    return String.fromCharCode(character.charCodeAt(0) + 3)
  }).join('')
}
// This cipher shifts every character three characters over in unicode
// Supposedly caesar used something similar for his secret messages, although he probably used roman letters instead of unicode

export function backwardsCipher(message) {
  return message.split('').reverse().join('')
}
// This incredibly powerful cipher reverses its entire message! Wowzers!
