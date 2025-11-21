import React from 'react'

const Footer = () => {
  return (
    <footer className="bg-spoon-charcoal text-white py-16 border-t border-gray-800">
        <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-12 text-center md:text-left">
            <div>
                <h4 className="font-serif text-xl text-spoon-gold mb-4">The Golden Spoon</h4>
                <p className="text-gray-400 text-sm leading-relaxed">
                    123 Independence Avenue<br />
                    Osu, Accra, Ghana
                </p>
            </div>
            <div>
                <h4 className="font-serif text-xl text-spoon-gold mb-4">Contact</h4>
                <p className="text-gray-400 text-sm leading-relaxed">
                    +233 24 123 4567<br />
                    reservations@goldenspoon.gh
                </p>
            </div>
            <div>
                <h4 className="font-serif text-xl text-spoon-gold mb-4">Hours</h4>
                <p className="text-gray-400 text-sm leading-relaxed">
                    Mon-Sun: 11:00 AM - 10:00 PM<br />
                    Happy Hour: 4:00 PM - 7:00 PM
                </p>
            </div>
        </div>
        <div className="text-center text-gray-400 text-xs mt-12 pt-8 border-t border-gray-800">
            &copy; {new Date().getUTCFullYear()} The Golden Spoon. All rights reserved.
        </div>
    </footer>
  )
}

export default Footer