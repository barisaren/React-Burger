import React,{Component} from 'react'
import SingleGame from './SingleGame'

class UGame extends Component{

    onDelete = (id) => {
      const {deleteBurger}=this.props
      console.log("onDelete", id)
      deleteBurger(id)
    }
    render(){
      const {burgers}=this.props
      
      
        return (
          
          <table class="table">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Game Name</th>
              <th scope="col">Game Type</th>
              <th scope="col">Game Rating</th>
              <th scope="col">Delete</th>
            </tr>
          </thead>
          <tbody>
            {burgers.map(burger=>{
              const {id,name,gameType,Rating}= burger;
              return <SingleGame
              key={id}
              id={id}
              name={name}
              gameType={gameType}
              rating={Rating}
              deleteBurger={()=>this.onDelete(id)}
              />

            })}

            
          </tbody>
      </table>
        )
    }
}
export default UGame;
