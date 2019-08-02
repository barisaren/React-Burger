import React,{Component} from 'react'

class AddGame extends Component{
    constructor(props){
        super(props);

    }
    render(){
        return (
            <div className='adduser'>
                <h4 className='addheader'>Add new Game</h4>
                <div className='addbody'>
                    <form>
                    <label htmlFor="name">Game Name</label>
                    <input type="text"  name='name' placeholder='Enter Burger Name'/>
                    <br/>
                 

                    <label htmlFor="gametype">Game Type</label>
                    <input type="text"  name='burgertype' placeholder='Enter Burger Type'/>
                    <br/>

                    <label htmlFor="gamerating">Game Rating</label>
                    <input type="text" name='burgerrating' placeholder=' Enter Burger Rating'/>
                    <br/>
                    <button type="submit">Add Burger</button>
                    </form>
                    
                </div>
                
            </div>
        )
    }
}
export default AddGame;