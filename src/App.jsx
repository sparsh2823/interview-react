/*
React Address Book
We have provided some simple React template code below. Your goal is to make it work. It is a simple form that allows the user to enter in a first name, last name, and address. Once the submit button is pressed, the information should be displayed in a list below along with all the previous information that was entered. This way the application can function as a simple address book.

*/

import React, { useState } from 'react';
import ReactDOM from 'react-dom';

const style = {
  table: {
    borderCollapse: 'collapse'
  },
  tableCell: {
    border: '1px solid gray',
    margin: 0,
    padding: '5px 10px',
    width: 'max-content',
    minWidth: '150px'
  },
  form: {
    container: {
      padding: '20px',
      border: '1px solid #F0F8FF',
      borderRadius: '15px',
      width: 'max-content',
      marginBottom: '40px'
    },
    inputs: {
      marginBottom: '5px'
    },
    submitBtn: {
      marginTop: '10px',
      padding: '10px 15px',
      border:'none',
      backgroundColor: 'lightseagreen',
      fontSize: '14px',
      borderRadius: '5px'
    }
  }
}

function AddressBookForm({firstName,setFirstName,lastName,setLastName,address,setAddress,userInfo,setUserInfo}) {

 
 
  const onClickHandler=()=>{
    
     let info= {
       firstName:firstName,
       lastName:lastName,
       address:address
     }
    
    setUserInfo([...userInfo,info])
    setAddress("")
    setFirstName("")
    setLastName("")
    
  }     
  return (
    <form onSubmit={e => { e.preventDefault() }} style={style.form.container}>
      <label>First name:</label>
      <br />
      <input 
        style={style.form.inputs}
        className='userFirstname'
        name='userFirstname' 
        type='text'
        value={firstName}
        onChange={(e)=>setFirstName(e.target.value)}
      />
      <br/>
      <label>Last name:</label>
      <br />
      <input 
        style={style.form.inputs}
        className='userLastname'
        name='userLastname' 
        type='text'
        value={lastName}
        onChange={(e)=>setLastName(e.target.value)}
      />
      <br />
      <label>Address:</label>
      <br />
      <input
        style={style.form.inputs}
        className='userAddress' 
        name='userAddress' 
        type='text'
        value={address}
        onChange={(e)=>setAddress(e.target.value)}
      />
      <br/>
      <input 
        style={style.form.submitBtn} 
        className='submitButton'
        type='submit' 
        value='Add User'
        onClick={onClickHandler}
       
      />
   
      
    </form>
  )
}

function InformationTable({userInfo}) {
  return (
    <table style={style.table} className='informationTable'>
      <thead> 
        <tr>
          <th style={style.tableCell}>First name</th>
          <th style={style.tableCell}>Last name</th>
          <th style={style.tableCell}>Address</th>
        </tr>
      </thead>
      {userInfo?.length > 0 && <tbody>
        {userInfo.map((info,id)=>{
          return(
          <tr key={id}>
          <td>{info.firstName}</td>
          <td>{info.lastName}</td>
          <td>{info.address}</td>
       </tr>
          )
        })}
      </tbody>}
    </table>
  );
}

function Application() {

  const [firstName,setFirstName]=useState("")
  const [lastName,setLastName]=useState("")
  const [address,setAddress]=useState("")
  const [userInfo,setUserInfo]=useState([ ])
  return (
    <section>
      <AddressBookForm
        firstName={firstName}
        setFirstName={setFirstName}
        lastName={lastName}
        setLastName={setLastName}
        address={address}
        setAddress={setAddress}
        userInfo={userInfo}
        setUserInfo={setUserInfo}/>
        
      <InformationTable
 
        userInfo={userInfo}
       
        
        />
    </section>
  );
}

export default Application
