const { choices, decisions } = require('../tokens');
const _ = require('lodash');
const fs = require('fs');

//TODO Find a way to refactor this
const transformTokensToKebabCase = (objects) => {
  const customPropertiesTransformed = [];

  for (const object in objects) {
    if (typeof objects[object] === 'object') {
      for (const o in objects[object]) {
        if (typeof objects[object][o] !== 'object') {
          customPropertiesTransformed.push(`\t--${object}--${o}: ${objects[object][o]}`);
          continue;
        } else if (Array.isArray(objects[object][o])) {
          customPropertiesTransformed.push(`\t--${object}--${o}: ${objects[object][o]}`);
          continue;
        }
        for (const z in objects[object][o]) {
          customPropertiesTransformed.push(`\t--${object}--${o}--${z}: ${objects[object][o][z]}`);
        }
      }
    }
  }

  const customPropertiesJoined = customPropertiesTransformed.join(';\n');
  return customPropertiesJoined;
};

const buildTokens = () => {
  const transformedChoices = transformTokensToKebabCase(choices);
  const transformedDecisions = transformTokensToKebabCase(decisions);

  const customProperties = `${transformedChoices};\n\n ${transformedDecisions}`;
  const data = `:root {\n${customProperties};\n}`;

  fs.writeFile('./src/styles/tokens.css', data, 'utf8', (err) => {
    if (err) return console.error(err);
    console.log(['Succes']);
  });
};

buildTokens();
