// import { useState } from 'react';
// import { useAcceptJs } from 'react-acceptjs';
// import './index.css'

// const authData = {
//   apiLoginID: '28ybEw8Xy9',
//   // clientKey: 'SIMON',
//   clientKey: '695rQCK6p2kq67ef',
// };

// const AuthNet = () => {
//   const { dispatchData, loading, error } = useAcceptJs({ authData });
//   const [cardData, setCardData] = useState({
//     cardNumber: '',
//     month: '',
//     year: '',
//     cardCode: '',
//   });

//   const handleSubmit = async (event) => {
//     event.preventDefault();
//     // Dispatch CC data to Authorize.net and receive payment nonce for use on your server
//     const response = await dispatchData({ cardData });
//     console.log('Received response:', response);
//   };

//   return (
//     <div className='pay-form'>
//     <form onSubmit={handleSubmit}>
//       <h1>Checkout</h1>
//       <h3>card number</h3>
//       <input
//         type="text"
//         name="cardNumber"
//         value={cardData.cardNumber}
//         onChange={(event) =>
//           setCardData({ ...cardData, cardNumber: event.target.value })
//         }
//       />
//       <h3>expiry date(month)</h3>
//       <input
//       type="text"
//         name="month"
//         value={cardData.month}
//         onChange={(event) =>
//           setCardData({ ...cardData, month: event.target.value })
//         }
//         />
//       <h3>expiry date(year)</h3>
//       <input
//       type="text"
//         name="year"
//         value={cardData.year}
//         onChange={(event) =>
//           setCardData({ ...cardData, year: event.target.value })
//         }
//       />
//       <h3>cvv</h3>
//       <input
//         type="text"
//         name="cardCode"
//         value={cardData.cardCode}
//         onChange={(event) =>
//           setCardData({ ...cardData, cardCode: event.target.value })
//         }
//         />
//       <button type="submit" disabled={loading || error}>
//         Pay
//       </button>
//     </form>
//     </div>
//   );
// };

// export default AuthNet;
import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
//will be using useNavigate later 😛
// import API from '../API';
// import './Home.css';

const Login = () => {
const navigate = useNavigate();

useEffect(() => {
const loadGoogleSignInScript = () => {
const script = document.createElement('script');
script.src = 'https://accounts.google.com/gsi/client';
script.async = true;
script.defer = true;
script.onload = () => initializeGoogleSignIn();
document.body.appendChild(script);
};

const initializeGoogleSignIn = () => {
if (!window.google) {
console.error('Google Sign-In library not loaded');
return;
}

window.onSignInSuccess = (response) => {
console.log('Signed in successfully:', response);

 
const idToken = response.getAuthResponse().id_token;

 
'https://www.googleapis.com/calendar/v3/calendars/primary/events'.defaults.headers.common['Authorization'] = `Bearer ${idToken}`;



};

window.onSignInFailure = (error) => {
console.error('Error signing in:', error);
};

window.google.accounts.id.initialize({
client_id: '255604881091-dchkppousng3n83f9b626pmirjdavs9h.apps.googleusercontent.com',
callback: {
on_success: window.onSignInSuccess,
on_failure: window.onSignInFailure,
},
});

window.google.accounts.id.renderButton(
document.getElementById("signInDiv"),
{ theme: "outline", size: "large" }
);
};

loadGoogleSignInScript();
}, []);



return (
<div className="login-container">
{/* <img id="sdn" src={`${process.env.PUBLIC_URL}/SDNAIRGROUP.png`} alt="SDN Air Group" /> */}
<div id="signInDiv"></div>
</div>
);
};

export default Login;
