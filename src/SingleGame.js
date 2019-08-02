import React,{Component} from 'react'

class SingleGame extends Component{
    
        
    onDeleteClick(id,e){
        const {deleteBurger}=this.props
        deleteBurger();
        
    }

    render(){
        const {id,name,gameType,Rating}=this.props
        return (
            <tr>
              <th scope="col">{id}</th>
              <th scope="col">{name}</th>
              <th scope="col">{gameType}</th>
              <th scope="col">{Rating}</th>
              <th scope="col"><button onClick={() => this.onDeleteClick()}>Delete</button>
              </th>
            </tr>
           
        )
    }

}
export default SingleGame;