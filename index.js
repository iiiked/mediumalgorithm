'use strict';

function rnaTranscriber(sequence) {
  if (sequence === undefined || !sequence.length) return sequence;
  if (!/^[ACGT]+$/.test(sequence)) throw new TypeError('Invalid input');
  const dict = {
    G: 'C',
    C: 'G',
    T: 'A',
    A: 'U'
  };
  return sequence.replace(/\w/g, c => dict[c]);
}

module.exports = rnaTranscriber;
