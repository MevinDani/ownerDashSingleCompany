import React, { useState, useEffect } from 'react';
import './Login.css'
import { useNavigate } from 'react-router-dom';
import { RotatingLines } from 'react-loader-spinner'


const LoginPage = () => {

    const [data, setData] = useState(null);

    const [userData, setUserData] = useState({
        username: "",
        password: ""
    })

    const [loginError, setLoginError] = useState(null)

    const [loginClick, setLoginClick] = useState(false)

    const navigate = useNavigate()

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setUserData({
            ...userData,
            [name]: value
        });
    }

    // console.log(data)

    // const handleLogin = (e) => {
    //     e.preventDefault()
    //     if (userData.username && userData.password) {
    //         setLoginClick(true)
    //         setUserData({
    //             username: "",
    //             password: ""
    //         });

    //         const url = `https://cubixweberp.com:199/api/Login/UserLogin?cmpcode=PENDULUM&guid=E42B163B-C03A-43D6-AFE1-31FBCEEAEB81&user=${userData.username}&pass=${userData.password}`;
    //         console.log(url)
    //         fetch(url)
    //             .then(response => response.json())
    //             .then((data) => {
    //                 setData(data)
    //                 console.log(data)
    //                 const userInfo = JSON.parse(data[0].UserInfo);
    //                 console.log(userInfo); // Check the parsed JSON
    //                 if (data[0].UserInfo !== null) {
    //                     console.log(data[0].UserInfo);
    //                     try {
    //                         const userInfoString = JSON.parse(data[0].UserInfo);
    //                         const userInfo = JSON.parse(userInfoString);
    //                         console.log(userInfo);

    //                         if (userInfo.UserList.length > 0) {
    //                             navigate('/admin/home');
    //                         } else {
    //                             setLoginError('Invalid UserName or Password');
    //                             setLoginClick(false);
    //                         }
    //                     } catch (error) {
    //                         console.error('Error parsing UserInfo:', error);
    //                         setLoginError('Invalid response format');
    //                         setLoginClick(false);
    //                     }
    //                 } else {
    //                     setLoginError('Invalid UserName or Password');
    //                     setLoginClick(false);
    //                 }
    //                 // if (data[0].UserInfo !== null) {
    //                 //     navigate('/admin/home')
    //                 // } else {
    //                 //     setLoginError('Invalid UserName or Password')
    //                 //     setLoginClick(false)
    //                 // }
    //             })
    //             .catch(error => console.error('Error:', error));
    //     }
    // }

    const handleLogin = (e) => {
        e.preventDefault();

        if (userData.username && userData.password) {
            setLoginClick(true);
            setUserData({
                username: "",
                password: ""
            });

            const url = `https://cubixweberp.com:199/api/Login/UserLogin?cmpcode=PENDULUM&guid=E42B163B-C03A-43D6-AFE1-31FBCEEAEB81&user=${userData.username}&pass=${userData.password}`;

            console.log(url);

            // fetch(url)
            //     .then(response => response.text()) // Get the raw response as text
            //     .then(data => {
            //         console.log('Raw Response:', data);

            //         // Try parsing the JSON
            //         try {
            //             const jsonData = JSON.parse(data);
            //             console.log('Parsed JSON:', jsonData);
            //         } catch (error) {
            //             console.error('Error parsing JSON:', error);
            //         }
            //     })
            //     .catch(error => {
            //         console.error('Error:', error);
            //     });
            fetch(url)
                .then(response => response.text())
                .then(data => {
                    console.log('Raw Response:', data);

                    const userInfo = data[0].UserInfo;

                    if (userInfo !== null) {
                        navigate('/admin/dashboard');
                    } else {
                        setLoginError('Invalid UserName or Password');
                        setLoginClick(false);
                    }
                })
                .catch(error => {
                    console.error('Error:', error);
                    setLoginError('Error during login. Please try again.');
                    setLoginClick(false);
                });

            // fetch(url)
            //     .then(data => {
            //         if (!data.ok) {
            //             throw new Error(`HTTP error! Status: ${data.status}`);
            //         }
            //         return data.json();
            //     })
            //     .then((data) => {
            //         setData(data);
            //         console.log(data);

            //         const userInfoString = data[0].UserInfo;

            //         if (userInfoString === null) {
            //             setLoginError('Invalid UserName or Password');
            //             setLoginClick(false);
            //         } else {
            //             console.log('UserInfo (String):', userInfoString);

            //             try {
            //                 const userInfo = JSON.parse(userInfoString);

            //                 if (userInfo && userInfo.UserList && userInfo.UserList.length > 0) {
            //                     navigate('/admin/home');
            //                 } else {
            //                     setLoginError('Invalid UserName or Password');
            //                     setLoginClick(false);
            //                 }
            //             } catch (error) {
            //                 console.error('Error parsing UserInfo:', error);
            //                 setLoginError('Invalid response format');
            //                 setLoginClick(false);
            //             }
            //         }
            //     })
            //     .catch(error => {
            //         console.error('Error:', error);
            //         setLoginError('Error during login. Please try again.');
            //         setLoginClick(false);
            //     });
        }
    };


    console.log(data)
    console.log(userData.username, userData.password)

    return (
        <div class="login-page">
            <div class="form">

                {/* <div>text</div> */}

                {/*  */}
                <form class="register-form">
                    <input type="text" placeholder="name" />
                    <input type="password" placeholder="password" />
                    <input type="text" placeholder="email address" />
                    <button>create</button>
                    <p class="message">Already registered? <a href="#">Sign In</a></p>
                </form>
                {/*  */}

                <form class="login-form">
                    {
                        loginError && (
                            <div className='errorMsg'>
                                {loginError}
                            </div>
                        )
                    }
                    <input type="text" placeholder="username" required name="username"
                        value={userData.username}
                        onChange={handleInputChange} />
                    <input type="password" placeholder="password" required name="password"
                        value={userData.password}
                        onChange={handleInputChange} />

                    {
                        !loginClick ? <button onClick={(e) => handleLogin(e)}>login</button> : <RotatingLines
                            strokeColor="green"
                            strokeWidth="5"
                            animationDuration="0.75"
                            width="40"
                            visible={true}
                        />
                    }
                    {/* <RotatingLines
                        strokeColor="green"
                        strokeWidth="5"
                        animationDuration="0.75"
                        width="96"
                        visible={true}
                    />
                    <button onClick={(e) => handleLogin(e)}>login</button> */}
                    <p class="message">Not registered? <a href="#">Create an account</a></p>
                </form>
            </div>
        </div>
    )
}

export default LoginPage