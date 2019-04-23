import React from 'react'

import Weather from './Weather'

import { Button } from 'semantic-ui-react'

let today = new Date()
let dd = String(today.getDate()).padStart(2, '0')
let mm = String(today.getMonth() + 1).padStart(2, '0') // January is 0!
let yyyy = today.getFullYear()
let date = dd + '/' + mm + '/' + yyyy

export default class App extends React.Component {
  state = {
    buyItems:['egg','milk','banana'],
    message:''

  }

  addItem(e){
    e.preventDefault()
    const {buyItems} = this.state
    const newItem =this.newItem.value
    const isOnTheList = buyItems.includes(newItem)

    if(isOnTheList){
      this.setState({
        message:`${newItem} alreay in the trolley!`
      })
    }else{
    newItem !=='' &&  this.setState({
      buyItems:[...this.state.buyItems,newItem],
      message: ' '
    })
   }
    this.addForm.reset()
  }

  removeItem(item){
    // console.log('remove' +item)
    const newBuyItems =this.state.buyItems.filter(buyItem =>
      buyItem !== item
    )
    this.setState({
      buyItems:[...newBuyItems]
    })
    if(newBuyItems.length === 0){
      this.setState({
        message:'Trolley is Empty!'
      })
    }
  }

  clearAll(){
    this.setState({
      buyItems:[],
      message:'Trolley is Empty!'
    })
  }


  render() {

    const {buyItems,message} = this.state

    return (
    <React.Fragment>
      <h1 className="heading">Luk - Nan- Weekly shopping Bag!!</h1>
      <div className="container">
      <hr />
        {date}
        <Weather/>
      <hr />
      <header>
      <img src='https://cdn0.iconfinder.com/data/icons/shopping-76/100/Artboard_18-512.png' className='spin'/> 
        <h1>Shopping List!</h1>
        <form ref={input=>this.addForm=input} className='form-inline' onSubmit={(e)=>{this.addItem(e)}}> 
          <div className ='form-group'>
          <label className='sr-only' htmlFor ='newItemInput'><h4>Need to buy:</h4></label>
          <br/>
          <input ref={input=>this.newItem=input} type ='text' placeholder ='Start add...' className='form-control' id='newItemInput'/>
          </div>
          <button type ='submit' className='btn btn-primary btn-sm'><img src ='https://hotemoji.com/images/emoji/r/1j2kh57f6987r.png' height="25" width="25"/> add to trolley</button>
        </form>
        </header>
        <div className="content">

        {(message !== '' || buyItems.length === 0) && <p className='message test-danger'> {message}</p>}

        
        {buyItems.length > 0 &&
        <table className="table">
      <thead>
        <tr >
          <th>Qty</th>
          <th>Item</th>
          <th>&nbsp;</th>
        </tr>
      </thead>
      
      <tbody>  
         {buyItems.map(item =>{
          return (
          <tr key ={item}>
          <td scope="row"><input type="number" min={1} max={100}/></td>
          <td>{item}</td>
          <td className ='test-right'>
            <Button size='mini' onClick={(e)=>this.removeItem(item)} type='button' className='btn btn-default btn-sm' id ='rubbish' ><img src ='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQHFkKHkMohe-Qv_rFVigIXABUvqzg_5CVfPc2Yevtzl4KLGDQDQQ'height="15" width="15"/></Button></td>
        </tr>
          )
        
  
        })} 
      </tbody>
      <tfoot>
        <tr>
          <td colSpan ='2'>&nbsp;</td>
          <td className='text-right'><button onClick={()=>this.clearAll()} className='btn btn-default btn-sm' type='button'>Empty Trolley
            </button></td>
        </tr>
      </tfoot>
      </table>}

         </div>
      </div>
      </React.Fragment>
    )
}
}
