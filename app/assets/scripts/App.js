import '../styles/styles.css'
import HeaderSlideShow from './modules/HeaderSlideShow'
import Calendar from './modules/Calendar'
require('webpack-jquery-ui/datepicker')

var $ = [
  require("jquery"),
  require("jquery-ui")
]

new HeaderSlideShow() 
new Calendar()

if(module.hot) {
  module.hot.accept()
}