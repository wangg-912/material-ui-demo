import React, { Component } from 'react';
import Baseline from "./baseline/Baseline";
import Button from "./button/Button";
import SimpleAppBar from "./appBar/simpleAppBar";
import ButtonAppBar from "./appBar/ButtonAppBar";

export default class Main extends Component{
    render(){
        return(
            <div>
                <Baseline />
                <Button />
                <SimpleAppBar />
                <hr/>
                <ButtonAppBar />
            </div>
        )
    }
}