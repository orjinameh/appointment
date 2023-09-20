import { useState } from 'react';
import { useAcceptJs } from 'react-acceptjs';
import './index.css'

const authData = {
  apiLoginID: '28ybEw8Xy9',
  // clientKey: 'SIMON',
  clientKey: '695rQCK6p2kq67ef',
};

const AuthNet = () => {
  const { dispatchData, loading, error } = useAcceptJs({ authData });
  const [cardData, setCardData] = useState({
    cardNumber: '',
    month: '',
    year: '',
    cardCode: '',
  });

  const handleSubmit = async (event) => {
    event.preventDefault();
    // Dispatch CC data to Authorize.net and receive payment nonce for use on your server
    const response = await dispatchData({ cardData });
    console.log('Received response:', response);
  };

  return (
    <div className='pay-form'>
    <form onSubmit={handleSubmit}>
      <h1>Checkout</h1>
      <input
        type="text"
        name="cardNumber"
        value={cardData.cardNumber}
        onChange={(event) =>
          setCardData({ ...cardData, cardNumber: event.target.value })
        }
      />
      <input
      type="text"
        name="month"
        value={cardData.month}
        onChange={(event) =>
          setCardData({ ...cardData, month: event.target.value })
        }
        />
      <input
      type="text"
        name="year"
        value={cardData.year}
        onChange={(event) =>
          setCardData({ ...cardData, year: event.target.value })
        }
      />
      <input
        type="text"
        name="cardCode"
        value={cardData.cardCode}
        onChange={(event) =>
          setCardData({ ...cardData, cardCode: event.target.value })
        }
        />
      <button type="submit" disabled={loading || error}>
        Pay
      </button>
    </form>
    </div>
  );
};

export default AuthNet;