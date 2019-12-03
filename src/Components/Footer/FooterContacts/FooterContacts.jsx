import React from 'react';

class FooterContacts extends React.Component {

  render() {
    return (
      <div className="footer-contacts">
        <h3 className="footer-contacts__title">Контаткты:</h3>

        <a className="footer-contacts__phone footer-contacts_display_block" href="tel:+7-495-790-35-03">+7 495 79 03 5 03</a>
        <span className="footer-contacts__working-hours footer-contacts_display_block">Ежедневно: с 09-00 до 21-00</span>
        <a className="footer-contacts__email footer-contacts_display_block" href="mailto:office@bosanoga.ru">office@bosanoga.ru</a>

        <div className="footer-contacts__links">
          <div className="footer-contacts__link footer-contacts__link-twitter"></div>
          <div className="footer-contacts__link footer-contacts__link-vk"></div>
        </div>
      </div>
    )
  }
}

export default FooterContacts