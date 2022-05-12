const db = require('./../db');

module.exports.findAll = () => {
  return db.queryAsync(`SELECT * FROM words`);
};

module.exports.addWord = ({ word, synonym, partOfSpeech }) => {
  return db.queryAsync(`
  INSERT INTO words (word, synonym, partOfSpeech)
  VALUES ("${word}", "${synonym}", "${partOfSpeech}");
  `);
};

module.exports.deleteWord = ({ word }) => {
  console.log(word);
  return db.queryAsync(`DELETE FROM words WHERE word="${word}"`);
};

module.exports.updateWord = ({ word, synonym }) => {
  return db.queryAsync(`
    UPDATE words
    SET synonym="${synonym}"
    WHERE word="${word}"
  `);
};
