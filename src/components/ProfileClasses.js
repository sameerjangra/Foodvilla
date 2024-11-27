import React from "react";
class Profile extends React.Component{
    constructor (props) {
        super(props);
        this.state ={
        userInfo:  {
            name : "Dummy Data " ,
          location :" Dummy Location",
        },
        }
        console.log("Child-constractor " + this.props.name)
    }

    
async componentDidMount(){
    // Api call 
    const data = await fetch("https://api.github.com/users/sameerjangra")
    const json = await data.json();
    this.setState({
        userInfo : json,
    })
    console.log(json)
    console.log("Child-componentDidMount "+ this.props.name)
}

componentWillUnmount() {
    console.log("componentwillUnmount")
} 

    render(){
        console.log("Child-render " + this.props.name);
        return(
            <div>
            <img src={this.state.userInfo.avatar_url}></img>
            <h3>Name : {this.state.userInfo.name}</h3>
            <h3>Location : {this.state.userInfo.location}</h3>
            <h3>Bio : {this.state.userInfo.bio}</h3>
           
            <h3>{this.state.count}</h3>
            </div>
        );
    };
};

export default Profile;