import React from 'react';
import { RiTelegramLine, RiWhatsappLine } from "react-icons/ri";
import { SlSocialVkontakte } from "react-icons/sl";
import { MdOutlineLanguage } from "react-icons/md";
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <h1 className="footer-logo">QPICK</h1>
				<div className="footer-different">
					<div className="footer-info">
						<p>Избранное</p>
						<p>корзина</p>
						<p>Контакты</p>
					</div>
					<div className="footer-diff">
						<p className="footer-text">Условия сервиса</p>
						<div className="footer-icon">
							<MdOutlineLanguage />
							<p>Рус</p>
							<p>Eng</p>
						</div>
					</div>
				</div>
				<div className="social-media">
					<RiTelegramLine />
					<RiWhatsappLine />
					<SlSocialVkontakte />
				</div>
      </div>
    </footer>
  );
};

export default Footer;