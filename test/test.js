'use strict';

require('chai').should();
const expect = require('chai').expect;

const rnaTranscriber = require('../index');
const mocks = require('./mocks');

describe('rnaTranscriber', () => {

  it('Should return an empty string if sequence is empty', () => {
    rnaTranscriber(mocks.empty).should.equal('');
  });

  it('Should transcribe \'cytosine\'  to \'guanine\'', () => {
    rnaTranscriber(mocks.c).should.equal('G');
  });

  it('Should transcribe \'guanine\'  to \'cytosine\'', () => {
    rnaTranscriber(mocks.g).should.equal('C');
  });

  it('Should transcribe \'adenine\'  to \'uracil\'', () => {
    rnaTranscriber(mocks.a).should.equal('U');
  });

  it('Should transcribe \'thymine\'  to \'adenine\'', () => {
    rnaTranscriber(mocks.t).should.equal('A');
  });

  it('Should transcribe all dna nucleotides to their rna complements', () => {
    rnaTranscriber(mocks.sequence).should.equal('UGCACCAGAAUU');
  });

  it('Should correctly throw error  \'Invalid input\' for invalid input', (done) => {
    try{
      rnaTranscriber('U')
      done("function didn't throw any error");
    }catch(e) {
      expect(e.message).to.equal('Invalid input');
      done();
    }
  });

  it('Should correctly handle partially invalid input', (done) => {
    try{
      rnaTranscriber(mocks.corrStrwithWrongStr)
      done('function didn\'t throw any error');
    } catch(e) {
      expect(e.message).to.equal('Invalid input')
      expect(e).to.be.an.instanceof(TypeError)
      done();
    }
  });

});