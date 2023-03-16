import React from 'react';
import DaumPostcode from 'react-daum-postcode';

const Postcode = (props) => {
  const postCodeStyle = {
    display: 'block',
    position: 'absolute',
    top: '20%',
    width: '400px',
    height: '400px',
    padding: '7px',
    zIndex: 100,
  };

  return (
    <>
      <DaumPostcode
        style={postCodeStyle}
        autoClose
        onComplete={props.onCompletePost}
      />
    </>
  );
};

export default Postcode;
