const getToken = headers => {
  const { authorization } = headers;
  if (!authorization) {
    return null;
  }
  const token = authorization.replace("Bearer ", "");
  return token.trim();
};

const ErrorTypes = {
  FORBIDDEN: "403",
  BAD_REQUEST: "400",
  NOT_AUTHORIZED: "401",
  NOT_FOUND: "404",
  CONFLICT: "409",
  INTERNAL_ERROR: "500"
};

const apiError = (code, message) => {
  return {
    code,
    message
  };
};

const apiResponse = (data, error) => {
  return {
    success: !error,
    data,
    error
  };
};

export default {
  getToken,
  ErrorTypes,
  apiResponse,
  apiError
};
