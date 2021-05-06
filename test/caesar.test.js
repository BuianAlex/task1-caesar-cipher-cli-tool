const expect = require('chai').expect;

const caesar = require('./../utils/caesar');

describe('Test encrypt string', function () {
  it('encrypt - qwerty to vbjwd with shift 5', function () {
    const result = caesar('qwerty', 5);
    expect(result).to.equal('vbjwyd');
  });

  it('encrypt - qwerty to rxfsuz with shift 27', function () {
    const result = caesar('qwerty', 27);
    expect(result).to.equal('rxfsuz');
  });

  it('encrypt - qwe-rty to vbjwd with shift 27', function () {
    const result = caesar('qwe-rty', 27);
    expect(result).to.equal('rxf-suz');
  });

  it('encrypt - qWe-rTy to rXf-sUz with shift 27', function () {
    const result = caesar('qWe-rTy', 27);
    expect(result).to.equal('rXf-sUz');
  });

  it('encrypt - qWe-rTy to qWe-rTy with shift 26', function () {
    const result = caesar('qWe-rTy', 26);
    expect(result).to.equal('qWe-rTy');
  });

  it('encrypt - aqwe-rty to zrxf-suz with shift -2', function () {
    const result = caesar('aqwe-rty', -2);
    expect(result).to.equal('youc-prw');
  });

  it('encrypt - AqWz-rty to zrxf-suz with shift -2', function () {
    const result = caesar('AqWz-rty', -2);
    expect(result).to.equal('YoUx-prw');
  });

  it('encrypt - AqWz-rty to zrxf-suz with shift -26', function () {
    const result = caesar('AqWz-rty', -26);
    expect(result).to.equal('AqWz-rty');
  });
});

describe('Test encrypt-decrypt string', function () {
  it('encrypt and after decrypt string with shift 26', function () {
    const sourceString = `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.`;
    const encryptedString = caesar(sourceString, 26);
    const decryptedString = caesar(encryptedString, -26);
    expect(decryptedString).to.equal(sourceString);
  });

  it('encrypt and after decrypt string with shift 28', function () {
    const sourceString = `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.`;
    const encryptedString = caesar(sourceString, 28);
    const decryptedString = caesar(encryptedString, -28);
    expect(decryptedString).to.equal(sourceString);
  });
});
