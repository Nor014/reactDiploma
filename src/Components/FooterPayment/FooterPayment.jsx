import React from 'react';

class FooterPayment extends React.Component {

  render() {
    return (
      <div className="footer-payment">
        <h3 className="footer-payment__title">Принимаем к оплате</h3>

        <div className="footer-payment__items">
          <div class="footer-payment__item footer-payment__item_paypal"></div>
          <div class="footer-payment__item footer-payment__item_master-card"></div>
          <div class="footer-payment__item footer-payment__item_visa"></div>
          <div class="footer-payment__item footer-payment__item_yandex"></div>
          <div class="footer-payment__item footer-payment__item_webmoney"></div>
          <div class="footer-payment__item footer-payment__item_qiwi"></div>
        </div>

        <div className="footer-copyright">
          <p className="footer-copyright__text">2009-2019 © BosaNoga.ru — модный интернет-магазин обуви и аксессуаров. Все права защищены.
          <br />Доставка по всей России!</p>
        </div>
      </div>
    )
  }
}

export default FooterPayment