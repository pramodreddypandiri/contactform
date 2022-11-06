import React from "react";

class AddContact extends React.Component{
     state = {
        name: "",
        email: ""
     }
     add = (e) => {
        e.preventDefault();
        if(this.state.name === "" && this.state.email === ""){
            alert("All fields are mandatory")
            return
        }
        this.props.AddContactHandler(this.state)
        this.setState({name:'',email:""});

        console.log(this.state);
     }
    render() { 
        return (
            <div className="flex w-[300px] flex-col ">
                <h2 className="text-xl  font-semibold">Add Contact</h2>
                <form className="flex flex-col" onSubmit={this.add}>
                    <div className="flex flex-col my-2">
                        <label className="text-left text-semibold ">Name</label>
                        <input className="border-2 rounded-lg" type="text" name="name" placeholder='Name'
                        value={this.state.name}
                        onChange={ (e) => this.setState({name: e.target.value})}/>

                    </div>
                    <div className="flex flex-col my-2">
                        <label className="text-left text-semibold">Email</label>
                        <input className="border-2 rounded-lg" type="text" name="email" placeholder='Email'
                        value={this.state.email}
                        onChange={ (e) => this.setState({email: e.target.value})}
                        />

                    </div>
                    <button type="submit" className="py-1 my-2 rounded-lg font-medium flex justify-center bg-blue-500 text-center text-white ">Add</button>
                </form>
            </div>
        )
     }
}
export default AddContact