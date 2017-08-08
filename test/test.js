var assert = require('assert');
var arabic_nlp = require('../index.js');

describe('#remove_tashkeel()', function() {
  it('should remove all tashkeel from text.', function() {
    const text = `أَنا الَّذي نَظَرَ الأَعمى إِلى أَدَبي ... وَأَسمَعَت كَلِماتي مَن بِهِ صَمَمُ
أَنامُ مِلءَ جُفوني عَن شَوارِدِها ... وَيَسهَرُ الخَلقُ جَرّاها وَيَختَصِمُ
وَجاهِلٍ مَدَّهُ في جَهلِهِ ضَحِكي ... حَتّى أَتَتهُ يَدٌ فَرّاسَةٌ وَفَمُ`

    const actual = arabic_nlp.remove_tashkeel(text);

    const expected = `أنا الذي نظر الأعمى إلى أدبي ... وأسمعت كلماتي من به صمم
أنام ملء جفوني عن شواردها ... ويسهر الخلق جراها ويختصم
وجاهل مده في جهله ضحكي ... حتى أتته يد فراسة وفم`

    assert.equal(expected, actual);
  });
});

describe('#remove_tatweel()', function() {
  it('should remove all tatweel from text.', function() {
    const text = "جميــــل"

    const actual = arabic_nlp.remove_tatweel(text);

    const expected = "جميل"

    assert.equal(expected, actual);
  });
});
