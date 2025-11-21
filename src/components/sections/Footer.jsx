import { faInstagram, faWhatsapp, faXTwitter } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const Footer = () => {
  return (
    <footer className="bg-spoon-charcoal text-white py-16 border-t border-gray-800">
      <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-12 text-center md:text-left">
        <div>
          <h4 className="font-serif text-xl text-spoon-gold mb-4">
            The Golden Spoon
          </h4>
          <p className="text-gray-400 text-sm leading-relaxed">
            123 Independence Avenue
            <br />
            Osu, Accra, Ghana
          </p>

          <div className="mt-8 max-w-76 h-64">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3970.978622850921!2d-0.19129240000000003!3d5.570178!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xfdf9a7c84b7e7f3%3A0xb6700949c1de987f!2s123%20Independence%20Ave%2C%20Accra!5e0!3m2!1sen!2sgh!4v1763749512282!5m2!1sen!2sgh"
              width="100%"
              height="100%"
              style={{ border: "0" }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
        <div>
          <h4 className="font-serif text-xl text-spoon-gold mb-4">Contact</h4>
          <div className="text-gray-400 text-sm leading-relaxed">
            <a href="tel:+233241234567">+233 24 123 4567</a>
            <br />
            <a href="mailto:info@thegoldenspoon.gh">info@thegoldenspoon.gh</a> 
            <br />
            <div className="text-lg space-x-4">
              <a href="https://wa.me/+233541758730?text=hello" target="_blank">
                <FontAwesomeIcon icon={faWhatsapp} />
              </a>
              <a href="https://instagram.com/bombolizard" target="_blank">
                <FontAwesomeIcon icon={faInstagram} />
              </a>
              <a href="https://x.com/bombolizard" target="_blank">
                <FontAwesomeIcon icon={faXTwitter} />
              </a>
            </div>
          </div>
        </div>
        <div>
          <h4 className="font-serif text-xl text-spoon-gold mb-4">Hours</h4>
          <p className="text-gray-400 text-sm leading-relaxed">
            Mon-Sun: 11:00 AM - 10:00 PM
            <br />
            Happy Hour: 4:00 PM - 7:00 PM
          </p>
        </div>
      </div>
      <div className="text-center text-gray-400 text-xs mt-12 pt-8 border-t border-gray-800">
        &copy; {new Date().getUTCFullYear()} The Golden Spoon. All rights
        reserved.
      </div>
    </footer>
  );
};

export default Footer;
