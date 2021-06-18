import React, { Component } from 'react';
import './student.css';

class Student extends Component{
    constructor(){
        super();
        this.state={
            score: 0,
            success : false,
            unsuccess: false
        }
    }

    componentDidMount(){
        this.setState({
            score:this.props.score,
        });
    }
    addScore()
    {
        this.setState(
            {
                score: this.state.score + 1,
            },
            ()=>{
                if(this.state.score>=350)
                {
                    this.setState({
                        success:true,
                    })
                }
                else if(this.state.score>340 && this.state.score<350)
                {
                    this.setState({
                        unsuccess:false,
                        success:false
                    })
                }
            }
        )
    }

    subScore()
    {
        this.setState(
            {
                score: this.state.score - 1,
            },
            ()=>{
                if(this.state.score<=340)
                {
                    this.setState({
                        unsuccess:true,
                        success:false
                    })
                }
                else if(this.state.score>340 && this.state.score<350)
                {
                    this.setState({
                        unsuccess:false,
                        success:false
                    })
                }
            }
        )
    }

    render(){

        const succ = this.state.success;
        const unsucc = this.state.unsuccess;

        let msg;
        if(succ)
        {
            msg =<span>Success</span>
        }
        else if(unsucc)
        {
            msg =<span>Fail</span>
        }
        else
        {
            msg=""
        }
        return(
            <div className="student">
                <div className="left">
                    <h2 className="stdname">
                        {this.props.name}
                        <div className="btn">
                            <button onClick = {()=> this.addScore()}>+</button>
                            <button onClick = {()=> this.subScore()}>-</button>
                        </div>
                    </h2>
                    <p className="uni">{this.props.university} {msg}</p>
                </div>
                <div className="right">
                    <div className="score">{this.state.score}</div>
                </div>
            </div>
        );
    }
}

export default Student;