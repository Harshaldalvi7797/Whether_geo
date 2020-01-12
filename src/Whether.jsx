import React,{Component} from "react";
import "./style.css";


class Whether extends Component
{

    // constructor(props)
    // {
    //     super(props);
    //     this.state=
    //     {
    //         timer: ""
    //     }
    // }

    wconfig = {
        Winter:{
            title:"Its very cold"
        },

        Summer:
        {
            title:"Its very cold"

        },
        Mansoon:
        {

            title:"Its very cold"

        }
    };

   
    constructor(props)
    {
        super(props);
        console.log(this.props);  
        this.state=
        {
            timer: ""
        }     

    }



    WReport(lat,month)

    {
        if(month > 2 && month < 9)
        {
            return lat < 1 ? "Summer" : "Mansoon"

        }
        else
        {
            return lat > 1 ? "Winter" : "summer"
        }

    };

    render()
    {
        // setInterval(()=>
        // {
        //     this.setState({timer : new Date().toLocaleString() });},1000);
        // }

        setInterval( ()=>
        {
            this.setState({timer : new Date().toLocaleString()})        }
,1000
        );
      
    const season = this.WReport(this.props.lat, new Date().getMonth());

        const {title}= this.wconfig[season];
    console.log(title);


    // const a = this.wconfig[season];
    // console.log(a);
        if(season=== "Winter")
        {
            return(

                <div>

                <div className="container">
                        <div className="row">
                    <div className="col-md-12">
                        {/* {this.props.lat} */}
    
                        {/* {season}
                        <h2>Very cold outside</h2> */}
        <h1>{this.state.timer}</h1>
                             <h1>{title}</h1>
                       
                    </div>
                </div>
                </div>

                <div className= {`container ${season}`}>
             
    
            </div>
            </div>
               
            );
           

        }


        if(season === "Summer")
        {
            return(

                <div>

                <div className="container">
                        <div className="row">
                    <div className="col-md-12">
                     
                             <h1>{title}</h1>
                       
                    </div>
                </div>
                </div>

                <div className= {`container ${season}`}>
            
    
            </div>
            </div>
               
            )

        }


        if(season === "Mansoon")
        {
            return(
                <div>

                <div className="container">
                        <div className="row">
                    <div className="col-md-12">
                     
                             <h1>{title}</h1>
                       
                    </div>
                </div>
                </div>

                <div className= {`container ${season}`}>
            
    
            </div>
            </div>
               
            )
        }
      
    }
}
 export default Whether;

