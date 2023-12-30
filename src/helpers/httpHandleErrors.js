const httpHandleErrors = (res, code, message, errorRow = "") => {
  console.log(errorRow);
  res.status(code).json({ statusCode: code, message });
};

module.exports = httpHandleErrors;
