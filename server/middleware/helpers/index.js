module.exports = {
  errorHandler: require("./dbErrorHandler").errorHandler,
  dbConnection: require("./dbConnection"),
  uploadAdminPhoto: require("./multer").uploadAdminPhoto,
  uploadUserPhoto: require("./multer").uploadUserPhoto,
  sendEmail: require("./mailer").sendEmail
}