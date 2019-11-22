import React from 'react';
import FooterNav from './FooterNav/FooterNav';
import FooterPayment from '../FooterPayment/FooterPayment';
import FooterContacts from './FooterContacts/FooterContacts'

class Footer extends React.Component {

  render() {
    return (
      <div className="footer">
        <FooterNav />
        <FooterPayment />
        <FooterContacts />
      </div>
    )
  }
}

export default Footer