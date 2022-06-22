import React, { useEffect, useState } from 'react'

import Company from './Company'
import Modal from './Modal'

const View = (props) => {
  const [companies, setCompanies] = useState([])
  const [editModal, setEditModal] = useState(false)
  const [editingCompany, setEditingCompany] = useState({})

  useEffect(() => {
    setCompanies(props.companies)
  }, [props.companies])

  const removeCompany = (removedCompany) => {
    const filteredCompanies = companies.filter(company => company.id !== removedCompany.id)
    setCompanies(filteredCompanies)
  }

  const editCompany = (company) => {
    setEditModal(true)
    setEditingCompany(company)
  }

  const saveCompany = (name, email) => {
    const updated = props.activeUserName
    const editedCompanis = companies.map(company => company.id === editingCompany.id ? {
      ...company,
      name: name ? name : company.name,
      email: email ? email : company.email,
      date: new Date().toLocaleDateString('en-US',
        {  
          day: "numeric", year: "numeric", month: "short",  
          hour: "2-digit", minute: "2-digit"  
        }),
      updated
    } : company)
    setCompanies(editedCompanis)
    setEditingCompany(null)
    setEditModal(false)
  }

  return (
    <div className='companies-table-wrapper'>
      <h2>Lista Preduzeca</h2>
      <div className='table-top'>
        <div className='search'>
          <p>Pretraga</p>
          <img src="assets/icons/Search.png" alt="" />
        </div>
        <div className='date'>
          <span>Filtriraj po datumu</span>
          <p>Jan 10, 2022</p>
          <img src="assets/icons/Group.png" alt="" />
        </div>
        <div className='show'>
        <span>Prikazi</span>
          <p>Sve</p>
          <img src="assets/icons/arrow.png" alt="" />
        </div>
      </div>
      <hr />
      <table className='companies-table'>
        <thead>
          <tr className='tr-thead'>
            <th className='table-head'>Preduzece</th>
            <th className='table-head'>Email</th>
            <th className='table-head'>Kreirao</th>
            <th className='table-head'>Azurirao</th>
            <th className='table-head'>Datum</th>
          </tr>
        </thead>
        <tbody>
          {companies.map(company => (
            <Company
              company={company}
              key={company.id}
              removeCompany={() => removeCompany(company)}
              editCompany={() => editCompany(company)} />
          ))}
        </tbody>
      </table>
      { companies.length === 0 && <div className='no-companies'>No companies</div>}
      <div className='table-bottom'>
        <div className='table-left-seven'>
          <div className='table-result'>
          <p>Show result:</p>
          </div>
            <div className='number-seven'>
              <p>7</p>
              <img src="assets/icons/Vector-grey.png" alt="" />
            </div>
        </div>
        <div className='table-right-pagination'>
            <p><img src="assets/icons/left-arrow.png" alt="" /></p>
            <p className='pagination-share'>1</p>
            <p className='number-two'>2</p>
            <p className='pagination-share'>3</p>
            <p className='pagination-share'>4</p>
            <p className='pagination-share'>...</p>
            <p className='pagination-share'>50</p>
            <p><img src="assets/icons/right-arrow.png" alt="" /></p>
        </div>  
      </div>
      { editModal && <Modal 
        saveCompany={saveCompany} 
        editingCompany={editingCompany} 
        closeModal={() => setEditModal(false)}
      />}
    </div>
  )
}

export default View