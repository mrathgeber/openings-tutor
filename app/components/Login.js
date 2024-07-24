'use client';
import Image from 'next/image';

import chessImage from './../images/chess.jpg'
import chesscomLogo from './../images/chesscom-logo.png'
import lichessLogo from './../images/lichess-logo.png'

import styles from "./Login.module.css"

const LoginBox = () => {
   return (
      <div className={styles.loginBox}>
         <div className={styles.titleContainer}>
            <h1 className={styles.title}>Openings<b>Tutor</b></h1>
            <p className={styles.slogan}>Move <b>by</b> Move</p>
         </div>
         <div className={styles.buttonContainer}>
            <button className={`btn btn-primary ${styles.button} ${styles.chesscomBtn}`}>
               <Image className={styles.logo} src={chesscomLogo} alt='Chess.com Logo' />
               Continue with Chess.com
            </button>
            <button className={`btn btn-primary ${styles.button} ${styles.lichessBtn}`}>
               <Image className={styles.logo} src={lichessLogo} alt='Lichess Logo' />
               Continue with Lichess
            </button>
         </div>
      </div>
   );
}

const Login = () => {
   return (
     <div className={styles.container}>
      <Image className={styles.image} src={chessImage} alt='Chess Board' />
      <LoginBox />
     </div>
   );
 };

export default Login;