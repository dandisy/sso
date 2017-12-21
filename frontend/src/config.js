var baseurl = {
  'development': 'http://localhost/sso/backend/public',
  'production': '',
  'testing': ''
}
module.exports = {
  apiurl () {
    return baseurl[process.env.NODE_ENV]
  }
}
