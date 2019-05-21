let common_response = (success, status, message, data) => {
  return {
    "success": success,
    "status": status,
    "message": message,
    "data": data
  };
};

let error_response = (message, data) => {
  return common_response(false, 400, message, data);
};

let success_response = (message, data) => {
  return common_response(true, 200, message, data);
};

module.exports = {
  "common": common_response,
  "error": error_response,
  "success": success_response
};

