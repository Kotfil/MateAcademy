import React, {Component} from 'react';
import s from './Styles.module.css';
import Input from './Input';
import Res from "./Res";
import Button from "./Button";
import Num from "./Num";

export default class Counter extends Component {



    render = () => {

        return (
            <div className={s.wrapperCount} >

              Counter

            </div>
        );
    }
}
