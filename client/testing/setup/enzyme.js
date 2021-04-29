import { configure } from 'enzyme'
// import Adapter from 'enzyme-adapter-react-16'
import Adapter from '@wojtekmaj/enzyme-adapter-react-17'

configure({ adapter: new Adapter() })

// https://dev.to/letsbsocial1/requestanimationframe--polyfill-in-react-16-2ce
global.requestAnimationFrme = callback => {
  setTimeout(callback, 0)
}
