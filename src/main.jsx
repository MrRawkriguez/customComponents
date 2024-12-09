import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import logo from './assets/react.svg'

const root = createRoot(document.getElementById('root'))


function Page() {
  return (
    <>
      <header>
        <img src={logo} className='react-logo' alt='logo' width={"60px"}></img>
      </header>
      <main>
        <h1>Reasons I'm excited to learn React</h1>
        <ol>
          <li>React is a popular library, so I will be able to fit in with all the coolest devs
            out there!
          </li><li>I am more likely to get a job as a front end developer if I know React</li>
        </ol>
      </main>
      <footer>
        <small>© 2024 Rawkriguez development. All rights reserved.</small>
      </footer>
    </>
  )
}

root.render(
    <Page />
)
