import React from 'react'
import ReactDOM from 'react-dom'
import { SpeechProvider } from '@speechly/react-client'

import { Provider } from './context/context'
import App from './App'
import './index.css'

ReactDOM.render(
    <SpeechProvider appId="22a3d23c-ea74-4b86-b6f7-8cafd1e80573 " language="en-US">
        <Provider>
            <App/>
        </Provider>
    </SpeechProvider>,
    
    document.getElementById('root')
)