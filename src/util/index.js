const requestResponse = {
  success: {
    code: 200,
    status: true,
    message: "Success.",
  },
  incomplete_body: {
    code: 400,
    status: false,
    message: "Bad request. Please check your request data.",
  },
  unauthorized: {
    code: 401,
    status: false,
    message:
      "E-mail or password does not match, or you are not authorized to accessing this page.",
  },
  not_found: {
    code: 404,
    status: false,
    message: "Resource not found",
  },
  unprocessable_entity: {
    code: 422,
    status: false,
    message: "The request you sent is unable to process",
  },
  server_error: {
    code: 500,
    status: false,
    message: "Internal server error. Please contact the administrator.",
  },
  failed: {
    code: 404,
    status: false,
    message: "Request Failed",
  },
  email_register: {
    code: 404,
    status: false,
    message: "Email Already Registered !",
  },
  contact_register: {
    code: 404,
    status: false,
    message: "Number Phone Already Registered !",
  },
  invalid_email: {
    code: 404,
    status: false,
    message: "Email is not registered !",
  },
  info_account: {
    code: 401,
    status: false,
    message: "Account Not Active !!",
  },
  invalid_emailotp: {
    code: 404,
    status: false,
    message: "Wrong Email or OTP code !",
  },
  success_response: {
    code: 200,
    status: true,
  },
  error_response: {
    code: 404,
    status: false,
  },
  not_token: {
    code: 403,
    status: false,
    message: "No token provided !",
  },
  token_invalid: {
    code: 500,
    status: false,
    message: "Failed to authenticate token !",
  },
  invalid_login: {
    code: 404,
    status: false,
    message: "Wrong Email or Password !",
  },
};

function getRndInteger() {
  return Math.floor(Math.random() * 1000000);
}

module.exports = {
  requestResponse,
  getRndInteger,
};
