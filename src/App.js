// import React, { Component } from "react";
// class App extends Component {
//     constructor(props)
//     {
       
//         super(props);
//         console.log("loading..1");
//         this.state= {
//             latitude: "null",
//             error:""
//         };


//             window.navigator.geolocation.getCurrentPosition(
//                 position=>{
//                 console.log(position);
//             this.setState({latitude: position.coords.latitude})
//             },  
             
//             err => {
//                 console.log(err);
//                 this.setState({error: err.message});
//             }
            
//             );
//         };
    
        
        
//     componentDidMount()
//     {
//         console.log("Let me load");
//     }


// render()
// {
//     console.log("Loading3");

//     if(this.state.latitude && !this.state.error)
//     {


//         return(
//             <div className="container">
//     <h2>Lat:{this.state.latitude}</h2>
//                </div>
    
//         );

//     }

//     if (!this.state.latitude && this.state.error) {
//         return (<div className="container">
//             <div className="row">
//                 <div className="col-md-12">
//                     <h2>ERROR: {this.state.error}</h2>
//                 </div>
//             </div>
//         </div>);
//     }
//     else{
//         return <div className="container">LOADING....</div>

//     };


//     };
// };




 

// export default App;


// import React,{Component} from "react";

// class App extends Component{
//     constructor(props){
//         super(props)
//             console.log("Loading1");
//             this.state = {
//                 latitude: "",
//                 error:""
//             };

//             window.navigator.geolocation.getCurrentPosition(position =>{
//                 console.log(position);
//                 this.setState({latitude: position.coords.latitude})

//             },
//             err=>{console.log(err);
//                 this.setState({error:err.message})
//             }

                
//                 )
        
//     }




//     render()
//     {
//         if(this.state.latitude && !this.state.error)
//         {
//             return(
//                 <div>
                    
//                     <h2>LAT: {this.state.latitude}</h2>

                    
//                 </div>
//             )
//         }

//         if(this.state.latitude && !this.state.error)
//         {
//             return(
//                 <div>
                    
//                     <h2>error: {this.state.error}</h2>

                
//                 </div>
//             )
//         }

//         else
//         {
//             return <h2>Loading</h2>
//         }



//     }
// }








// export default App;
import React,{Component} from "react";
import Whether from "./Whether";

class App extends Component {
    constructor(props) {
        super(props);
        console.log("LOADING1....");
        this.state = {
            latitude: "",
            error:""
        };
        window.navigator.geolocation.getCurrentPosition(position => {
            console.log(position);
            this.setState({ latitude: position.coords.latitude })

        },
            err => {
                console.log(err);
                this.setState({ error: err.message });
            }
        );
    };
    componentDidMount() {
        console.log("let me load");
  }

    render() {
        console.log("loading 3")
        if (this.state.latitude && !this.state.error) {
            return (
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            {/* <h2>LAT: {this.state.latitude}</h2> */}
                            <Whether lat ={this.state.latitude}/>
                        </div>
                    </div>
                </div>
        
            )
        };
        if (!this.state.latitude && this.state.error) {
            return (<div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <h2>ERROR: {this.state.error}</h2>
                    </div>
                </div>
            </div>);
        }
        else {
            return <div className="container">LOADING....</div>
      }
    };
};
 export default App;