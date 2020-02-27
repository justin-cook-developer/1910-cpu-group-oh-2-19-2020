class JoiError extends Error {
  constructor(errorObject) {
    super();
    this.errorObject = errorObject;
  }
}

// "errorObject": {
//   "message": "\"firstName\" is not allowed to be empty",
//   "path": [
//       "firstName"
//   ],
//   "type": "string.empty",
//   "context": {
//       "label": "firstName",
//       "value": "",
//       "key": "firstName"
//   }
// }

const joiErrorParser = (error) => {
  const key = error.context.key;

  // ["keyName", " error message"]
  const splitMessage = error.message
    .split('"')
    .filter((string) => string.length >= 1);

  splitMessage[0] = splitMessage[0]
    .split("")
    .map((character) => {
      // if character is uppercase letter, and previous character is letter, do something
      // else; return character
      const charCode = character.charCodeAt(0);

      if (charCode >= 65 && charCode <= 90) {
        return " " + character.toLowerCase();
      } else {
        return character;
      }
    })
    .join("");

  return {
    validationError: {
      key,
      message: splitMessage.join(""),
    },
  };
};

module.exports = {
  JoiError,
  joiErrorParser,
};
