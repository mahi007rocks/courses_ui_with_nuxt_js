// plugins/local-storage.js

import createPersistedState from 'vuex-persistedstate'
import * as Cookies from 'js-cookie'
import cookie from 'cookie'

export default ({ store, req, isDev }) => {
  createPersistedState({
    key: 'authentication-cookie', // choose any name for your cookie
    paths: [
      'auth.access_token',
      'auth.refresh_token',
    ],
    storage: {
      getItem: key => process.client ? Cookies.key : cookie.parse(req.headers.cookie || '')[key],
      setItem: (key, value) => Cookies.set(key, value, { expires: 14, secure: !isDev }),
      removeItem: key => Cookies.remove(key)
    }
  })(store)
}
