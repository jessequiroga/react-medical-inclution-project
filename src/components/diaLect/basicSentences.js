import React, { useState, useContext } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Nav from "../nav.js";
import Footer from "../footer";
import '../../App.css';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom'
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
//import { SentContext } from './basicSentContext';
import axios from "axios"

const useStyles = makeStyles((theme) => ({
    button: {
        margin: "8px",
        marginLeft: "25px",
        marginTop:"18px",
        color: "white",
        fontSize: "16px",
        backgroundColor: "#6CAFED",
        minHeight: "60px",
        minWidth: "160px !important", 
        borderRadius: "10px",
    },
    content: {
        paddingBottom: "10%",
        //paddingTop: "15%",
    },
    div1: {
        width: "40%",
        fontSize: "26px",
        float:"left"
    },

     div2: {
        width: "45%",
        fontSize: "26px",
        float: "right"
    },

    a: {
        padding: "3px",
        marginTop: "5px",
        textDecoration: "underline",
        display:"inline"
    },

}));


function find() {
    var findVal = document.getElementById("text1").value;
    //alert(findVal);
    window.location.href = "/findDetails?find=" + findVal;
}

function BasicSentences() {

    const classes = useStyles();
    const { t, i18n } = useTranslation();
    const [values, setValues] = useState({
    letter : '',
    count : '',
    remark : ''
});
     const [letter, setLetter] = useState('');

    axios.get('http://localhost:3001/dialectSentence').then((response) => {
        const list = response.data.length;
        //javascript:return false;
        //console.log(list);
        console.log(response.data);
        //console.log(response.data[0].letter);
        for (var i = 0; i< list; i++) {
            if (response.data[i].count == 0) {
                //document.getElementById(response.data[0].letter).href = "javascript:return false";
                document.getElementById(response.data[0].letter).style = "color: #B4C0CB; text-decoration: none;pointer-events: none;";
            }
        }
}) .catch((error) => {
        console.log(error);
    });

        return (
            <div className="container">
                <Nav />
                <div>
                    <AppBar position="static" style={{ backgroundColor: "#F9B1B1", }}>
                        <Toolbar>
                            <Typography className={classes.title} variant="h6" noWrap style={{ paddingLeft: "10px", color: "black" }}>
                                Basic sentences
                         </Typography>
                        </Toolbar>
                    </AppBar>
                </div>
                <div className={classes.content}>
                    <TextField className={classes.textFiled} id="text1" variant="outlined" label="Input your sentences" style={{ width: "82%", paddingTop: "20px", paddingLeft: "10px", borderRadius: "15px" }} />
                    <Button className={classes.button} variant="contained" color="primary" disableElevation onClick={find}> {t('search')}</Button>
                    <div style={{ border: "1px solid #6CAFED", width: "100%", height: "280px", margin: "10px" }}>
                        <AppBar position="static" style={{ backgroundColor: "#6CAFED", height: "50px", }}>
                            <Toolbar>
                                <Typography className={classes.title} variant="h6" noWrap style={{ marginTop: "-15px", color: "white" }}>
                                    Index of phrases
                            </Typography>
                            </Toolbar>
                        </AppBar>
                        <div style={{padding:"15px"}}>
                            <div className={classes.div1}>
                                <a id="あ" className={classes.a} href="/fontDetails?letter=あ">あ</a>&nbsp;
                                <a id="い" className={classes.a} href="/fontDetails?letter=い">い</a>&nbsp;
                                <a id="う" className={classes.a} href="/fontDetails?letter=う">う</a>&nbsp;
                                <a id="え" className={classes.a} href="/fontDetails?letter=え">え</a>&nbsp;
                                <a id="お" className={classes.a} href="/fontDetails?letter=お">お</a>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                <a id="か" className={classes.a} href="/fontDetails?letter=か">か</a>&nbsp;
                                <a id="き" className={classes.a} href="/fontDetails?letter=き">き</a>&nbsp;
                                <a id="く" className={classes.a} href="/fontDetails?letter=く">く</a>&nbsp;
                                <a id="け" className={classes.a} href="/fontDetails?letter=け">け</a>&nbsp;
                                <a id="こ" className={classes.a} href="/fontDetails?letter=こ">こ</a>&nbsp;<br></br>

                                <a id="さ" className={classes.a} href="/fontDetails?letter=さ">さ</a>&nbsp;
                                <a id="し" className={classes.a} href="/fontDetails?letter=し">し</a>&nbsp;
                                <a id="す" className={classes.a} href="/fontDetails?letter=す">す</a>&nbsp;
                                <a id="せ" className={classes.a} href="/fontDetails?letter=せ">せ</a>&nbsp;
                                <a id="そ" className={classes.a} href="/fontDetails?letter=そ">そ</a>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                <a id="た" className={classes.a} href="/fontDetails?letter=た">た</a>&nbsp;
                                <a id="ち" className={classes.a} href="/fontDetails?letter=ち">ち</a>&nbsp;
                                <a id="つ" className={classes.a} href="/fontDetails?letter=つ">つ</a>&nbsp;
                                <a id="て" className={classes.a} href="/fontDetails?letter=て">て</a>&nbsp;
                                <a id="と" className={classes.a} href="/fontDetails?letter=と">と</a>&nbsp;<br></br>

                                <a id="な" className={classes.a} href="/fontDetails?letter=な">な</a>&nbsp;
                                <a id="に" className={classes.a} href="/fontDetails?letter=に">に</a>&nbsp;
                                <a id="ぬ" className={classes.a} href="/fontDetails?letter=ぬ">ぬ</a>&nbsp;
                                <a id="ね" className={classes.a} href="/fontDetails?letter=ね">ね</a>&nbsp;
                                <a id="の" className={classes.a} href="/fontDetails?letter=の">の</a>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                <a id="は" className={classes.a} href="/fontDetails?letter=は">は</a>&nbsp;
                                <a id="ひ" className={classes.a} href="/fontDetails?letter=ひ">ひ</a>&nbsp;
                                <a id="ふ" className={classes.a} href="/fontDetails?letter=ふ">ふ</a>&nbsp;
                                <a id="へ" className={classes.a} href="/fontDetails?letter=へ">へ</a>&nbsp;
                                <a id="ほ" className={classes.a} href="/fontDetails?letter=ほ">ほ</a>&nbsp;<br></br>

                                <a id="ま" className={classes.a} style={{ marginLeft: "-70px" }} href="/fontDetails?letter=ま">ま</a>&nbsp;
                                <a id="み" className={classes.a} href="/fontDetails?letter=み">み</a>&nbsp;
                                <a id="む" className={classes.a} href="/fontDetails?letter=む">む</a>&nbsp;
                                <a id="め" className={classes.a} href="/fontDetails?letter=め">め</a>&nbsp;
                                <a id="も" className={classes.a} href="/fontDetails?letter=も">も</a>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                <a id="や" className={classes.a} href="/fontDetails?letter=や">や</a>&nbsp;
                                <a id="ゆ" className={classes.a} href="/fontDetails?letter=ゆ">ゆ</a>&nbsp;
                                <a id="よ" className={classes.a} href="/fontDetails?letter=よ">よ</a>&nbsp;<br></br>

                                <a id="ら" className={classes.a} style={{ marginLeft: "-70px" }} href="/fontDetails?letter=ら">ら</a>&nbsp;
                                <a id="り" className={classes.a} href="/fontDetails?letter=り">り</a>&nbsp;
                                <a id="る" className={classes.a} href="/fontDetails?letter=る">る</a>&nbsp;
                                <a id="れ" className={classes.a} href="/fontDetails?letter=れ">れ</a>&nbsp;
                                <a id="ろ" className={classes.a} href="/fontDetails?letter=ろ">ろ</a>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                <a id="わ" className={classes.a} href="/fontDetails?letter=わ">わ</a>&nbsp;
                                <a id="を" className={classes.a} href="/fontDetails?letter=を">を</a>&nbsp;
                                <a id="ん" className={classes.a} href="/fontDetails?letter=ん">ん</a>&nbsp;<br></br>
                        　　</div>
                        　　<div className={classes.div2}>
                                <a id="が" className={classes.a} href="/fontDetails?letter=が">が</a>&nbsp;
                                <a id="ぎ" className={classes.a} href="/fontDetails?letter=ぎ">ぎ</a>&nbsp;
                                <a id="ぐ" className={classes.a} href="/fontDetails?letter=ぐ">ぐ</a>&nbsp;
                                <a id="げ" className={classes.a} href="/fontDetails?letter=げ">げ</a>&nbsp;
                                <a id="ご" className={classes.a} href="/fontDetails?letter=ご">ご</a>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                <a id="ざ" className={classes.a} href="/fontDetails?letter=ざ">ざ</a>&nbsp;
                                <a id="じ" className={classes.a} href="/fontDetails?letter=じ">じ</a>&nbsp;
                                <a id="ず" className={classes.a} href="/fontDetails?letter=ず">ず</a>&nbsp;
                                <a id="ぜ" className={classes.a} href="/fontDetails?letter=ぜ">ぜ</a>&nbsp;
                                <a id="ぞ" className={classes.a} href="/fontDetails?letter=ぞ">ぞ</a>&nbsp;<br></br>

                                <a id="だ" className={classes.a} href="/fontDetails?letter=だ">だ</a>&nbsp;
                                <a id="ぢ" className={classes.a} href="/fontDetails?letter=ぢ">ぢ</a>&nbsp;
                                <a id="づ" className={classes.a} href="/fontDetails?letter=づ">づ</a>&nbsp;
                                <a id="で" className={classes.a} href="/fontDetails?letter=で">で</a>&nbsp;
                                <a id="ど" className={classes.a} href="/fontDetails?letter=ど">ど</a>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                <a id="ば" className={classes.a} href="/fontDetails?letter=ば">ば</a>&nbsp;
                                <a id="び" className={classes.a} href="/fontDetails?letter=び">び</a>&nbsp;
                                <a id="ぶ" className={classes.a} href="/fontDetails?letter=ぶ">ぶ</a>&nbsp;
                                <a id="べ" className={classes.a} href="/fontDetails?letter=べ">べ</a>&nbsp;
                                <a id="ぼ" className={classes.a} href="/fontDetails?letter=ぼ">ぼ</a>&nbsp;<br></br>

                                <a id="ぱ" className={classes.a} style={{ marginLeft: "-175px" }} href="/fontDetails?letter=ぱ">ぱ</a>&nbsp;
                                <a id="ぴ" className={classes.a} href="/fontDetails?letter=ぴ">ぴ</a>&nbsp;
                                <a id="ぷ" className={classes.a} href="/fontDetails?letter=ぷ">ぷ</a>&nbsp;
                                <a id="ぺ" className={classes.a} href="/fontDetails?letter=ぺ">ぺ</a>&nbsp;
                                <a id="ぽ" className={classes.a} href="/fontDetails?letter=ぽ">ぽ</a>&nbsp;&nbsp;
                        　　</div>
                       　</div>
                    </div>
                    <Link to="/wakayama"><Button className={classes.button} variant="contained" color="primary" disableElevation style={{ float: "right", backgroundColor: "#B4C0CB", marginRight: "20px" }} > {t('back')}</Button></Link>
                </div>
                <Footer />

            </div>
        );
   }

export default BasicSentences;
