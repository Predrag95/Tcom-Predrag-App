import { useState } from "react"

const Modal = (props) => {
  const [nameInput, setNameInput] = useState(props.editingCompany.name)
  const [emailInput, setEmailInput] = useState(props.editingCompany.email)

  const saveCompany = (e) => {
    e.preventDefault()
    props.saveCompany(nameInput, emailInput)
  }

  return (
    <div className="modal-wrapper">
      <form className="modal" onSubmit={saveCompany}>
        <h1>Edit</h1>
        <input
          placeholder='Ime preduzeca'
          value={nameInput} onChange={e => setNameInput(e.target.value)} />
        <input
          placeholder='Email preduzeca'
          value={emailInput} onChange={e => setEmailInput(e.target.value)}
          type="email" />
        <button className="modal-btn" type="submit">Save</button>
        <p onClick={props.closeModal} className="close">x</p>
      </form>
    </div>
  )
}

export default Modal