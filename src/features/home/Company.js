import { useState } from "react"

const Company = ({ company, removeCompany, editCompany }) => {

  const [menuVisibility, setMenuVisibility] = useState(false)

  const toogleMenuVisibility = () => {
    setMenuVisibility(!menuVisibility)
  }

  const startEditingCompany = () => {
    editCompany();
    setMenuVisibility(false)
  }

  return (
    <>
      <tr>
        <td className="company-name">
          <div className="td-align">
            <img src="assets/images/guyHawkins.png" alt="" />
            { company.name }
          </div>
        </td>
        <td className="company-text">{ company.email }</td>
        <td className="company-text">
          <div className="td-align">
            <img src="assets/images/guyHawkins.png" alt="" />
            { company.created }
          </div>
        </td>
        <td className="company-text">
          <div className="td-align">
            <img src="assets/images/guyHawkins.png" alt="" />
            { company.updated }
          </div>
        </td>
        <td className="company-text">{ company.date }</td>
        <td>
          <div className="menu-wrapper">
            <button className="menu-btn" onClick={toogleMenuVisibility}><p>...</p></button>
            {menuVisibility && (
              <div className="menu">
                <div className="menu-img">
                  <img className="menu-icon" src="assets/icons/menu1.png" alt="" />
                  <p className="menu-p"><button className="edit-p" onClick={startEditingCompany}>Едитуј</button></p>
                </div>
                <div className="menu-img">
                  <img className="menu-icon" src="assets/icons/menu2.png" alt="" />
                  <p className="menu-p">Штампај</p>
                </div>
                <div className="menu-img">
                  <img className="menu-icon" src="assets/icons/menu3.png" alt="" />
                  <p className="menu-p">Скини ПДФ</p>
                </div>
                <div className="menu-img">
                  <img className="menu-icon" src="assets/icons/menu4.png" alt="" />
                  <p><button className="delete-btn" onClick={removeCompany}>Brisanje</button></p>
                </div>
              </div>
            )}
          </div>
        </td>
      </tr>
    </>
  )
}

export default Company