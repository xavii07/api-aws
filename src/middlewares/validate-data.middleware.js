const { validationResult } = require("express-validator");
const httpHandleErrors = require("../helpers/httpHandleErrors");

const validateData = (req, res, next) => {
  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    const errorMsgs = errors.array().map((error) => error.msg);
    const errorMsg = `Hubo un error con los siguientes campos: ${errorMsgs.join(
      ", "
    )}`;
    return httpHandleErrors(res, 404, errorMsg, errorMsgs);
  }

  next();
};

module.exports = validateData;
