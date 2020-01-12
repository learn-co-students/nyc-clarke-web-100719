import React, {useState, useEffect} from 'react'
import {caesarsCipher, backwardsCipher} from './ciphers'
import './App.css'

function App() {

  const [fancyNewState, setFancyNewState] = useState('New York')
  const [cipherState, setCipherState] = useState('none')
  const [message, setMessage] = useState('')
  const [showParrot, setShowParrot] = useState(false)
  const [submitted, setSubmitted] = useState(false)

  const handleSelectorChange = e => {
    setCipherState(e.target.value)
  }

  const effArr = [cipherState]

  const myUseEff = useEffect(() => {
    console.log("First")
  },
  // Dependency
  effArr
  )

  useEffect(() => {
    if (message) {
      setTimeout(() => {
        setShowParrot(true)
        setMessage('')
        setTimeout(() => setShowParrot(false), 5000)
      },5000)
    }
  }, [submitted])

  const handleInputChange = e => {
    setMessage(e.target.value)
  }

  const handleSubmit = e => {
    e.preventDefault()
    setMessage(caesarsCipher(message))
    setSubmitted(true)
  }

  return (
    <div className="App">

      <h1>Top Secret: For Your Eyes Only</h1>

      {/*------ Select Cipher ------*/}

      <select
      onChange={handleSelectorChange}
      value={cipherState}>

        <option value='none'>---</option>
        <option value='caesarsCipher'>Caesar's Cipher</option>
        <option value='backwardsCipher'>Backwards Cipher</option>

      </select>

      <p>{cipherState}</p>

      {/*------ Message Input ------*/}

      <p>Super Secret Message:</p>

      <form onSubmit={handleSubmit}>

        <input type='text'
        onChange={handleInputChange}
        value={message}
        placeholder='Secrets go here' />

        <input type='submit' value='Encode Message' />

      </form>

      {showParrot
        ? <img src="https://media.giphy.com/media/ceHKRKMR6Ojao/giphy.gif" alt="boom" />
        : null}

    </div>
  );
}

export default App;
