/* eslint-disable global-require */
import './scss/main.scss'
import './js/main'

if (process.env.NODE_ENV === 'development') {
  require('./template.html')
}
