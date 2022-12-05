import styles from "./Login.module.css";

const Login = () => {
  return (
    <div className={styles.container}>
      <div className={styles.left}></div>
      <img src="images/login.svg" width={300} height={600} />
      <div className={styles.content}>
        <div className={styles.right}>
          <img src="images/logo-dark.svg" alt="error" />
          <h1>MOTION DETECTOR</h1>
          <form action="">
            <input type="text" placeholder="     Username" /> <br />
        
            <input type="password" id={styles.myInput} placeholder="     Password" /> <br />
         
            <button type="submit" className={styles.sub}>SUBMIT</button>

            <div className={styles.btns}>
                <a href="http://localhost:3000/Changepassword">CHANGE PASSWORD</a>  <br />
            </div>
        
          </form>

    
        </div>
      </div>
    </div>
  );
};

export default Login;
