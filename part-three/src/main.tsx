import ReactDom from 'react-dom/client'
import { Provider } from 'react-redux'
import store from './reduxStore'

import App from './App'
import './index.css'

ReactDom
    .createRoot(document.getElementById('root')!)
    .render(
        <Provider store={store}>
            <App />
        </Provider>
    )
