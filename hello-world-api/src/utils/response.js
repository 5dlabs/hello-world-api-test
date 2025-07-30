module.exports = {
  success: (message, data = null) => ({
    status: 'success',
    message,
    data,
    timestamp: new Date().toISOString()
  }),
  error: (message, status = 400, data = null) => {
    const error = new Error(message);
    error.status = status;
    error.data = data;
    return error;
  }
};