import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Nav from "../nav.js";
import Footer from "../footer";
import '../../App.css';
import Button from '@material-ui/core/Button';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom'
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import axios from "axios";
import zIndex from '@material-ui/core/styles/zIndex';

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
        //paddingBottom: "10%",
        //paddingTop: "15%",
    },
    div1: {
        width: "95%",
        height:"100px",
        fontSize: "26px",
        backgroundColor: "#F2F2F2",
        margin: "20px",
        marginLeft:"20px"
    },

    a: {
        padding: "3px",
        marginTop: "5px",
        textDecoration: "underline",
        display:"inline"
    },

    p1: {
        textAlign: "left",
        marginLeft:"10px"
    },
    p2: {
        textAlign: "left",
        marginLeft: "10px",
        color:"#6CAFED"
    }

}));

function getQueryVariable(variable) {
    const query = window.location.search.substring(1);
    const vars = query.split("&");
    for (var i = 0; i < vars.length; i++) {
        const pair = vars[i].split("=");
        if (pair[0] == variable) { return pair[1]; }
    }
    return (false);
}

function FindDetails() {
    const classes = useStyles();
    const { t, i18n } = useTranslation();

    const find = (decodeURI(getQueryVariable("find")));
    const page = Number(getQueryVariable("page")) || 1;
    console.log(page);
    var pageNext = page + 1;
    var pagePre = page - 1;
    const h1 = "http://localhost:3000/findDetails?find=" + find + "&page=" + pageNext;
    const h2 = "http://localhost:3000/findDetails?find=" + find + "&page=" + pagePre;
    const request = {
        find: find,
        page: page
    }

    axios.post('http://localhost:3001/wakayamaPhrase/findpage2', request).then((response) => {
        const list = response.data.length;
        const totalpage = Math.ceil(list / 4);
        const span = document.getElementById('span');
        const a1 = document.getElementById('a1');
        const a2 = document.getElementById('a2');
        const phrase = document.getElementById('phrase');
        if (page == 1) {
            a1.style = "color: #B4C0CB; text-decoration: none;pointer-events: none; padding-right: 20px";
        } if (page >= totalpage) {
            a2.style = "color: #B4C0CB; text-decoration: none;pointer-events: none; padding-left: 20px";
        } 
        span.innerText = page + "ページ/" + totalpage + "ページ";
    }).catch((error) => {
        console.log(error);
    });


    axios.post('http://localhost:3001/wakayamaPhrase/findphrase', request).then((response) => {
        //console.log(response.data);
        const list = response.data.length;
        const data = response.data;
        const phrase = document.getElementById('phrase');
        var code = ' <div class="makeStyles-content-2">';
        if (list > 0) {
            for (var i = 0; i < list; i++) {
                code += '<div class="makeStyles-div1-3">' +
                    '<p class="makeStyles-p1-5" >' + data[i].phraseOri + '</p >' +
                    '<p class="makeStyles-p2-6" >' + data[i].phraseAft + '</p>' +
                    '</div >';
            }
        } else {
            code += '<div class="makeStyles-div1-3">' +          
                '<p>Sorry, we can\'t find the result</p>' +
                '</div >';
        }
        phrase.innerHTML = code + '<div>';
    }).catch((error) => {
        console.log(error);
    });

        return (
            <div className="container">
                <Nav />
                <div>
                    <AppBar position="static" style={{ backgroundColor: "#F9B1B1", }}>
                        <Toolbar>
                            <Typography className={classes.title} variant="h6" noWrap style={{ paddingLeft: "10px", color: "white", fontSize: "30px", fontWeight: "bold" }}>
                             The results of "{find}" are :
                         </Typography>
                        </Toolbar>
                    </AppBar>
                </div>
                <div className={classes.content} id="phrase">
                    
                </div>
                <div>
                    <a id="a1" href={h2} title="前のページ" style={{ paddingRight: "20px" }}>前のページ</a>
                    <span id="span">0ページ/0ページ</span>  
                    <a id="a2" href={h1} title="次のページ" style={{ paddingLeft: "20px" }}> 次のページ</a>
                </div>
                <Link to="/basicSentences"><Button className={classes.button} variant="contained" color="primary" disableElevation style={{ float: "left", backgroundColor: "#B4C0CB", marginRight: "20px" }} > {t('戻る')}</Button></Link>
                <Footer />

            </div>
        );
   }

export default FindDetails;
