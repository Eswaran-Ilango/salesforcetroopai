import Link from 'next/link';
import { Linkedin, Twitter, Youtube, Mail, Phone, Clock } from 'lucide-react';
import { COMPANY_CONFIG } from '@/constants';

const Footer = () => {
  return (
    <footer className="bg-navy text-white pt-20 pb-10">
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-16">
          {/* Brand & Newsletter */}
          <div className="lg:col-span-2 space-y-8">
            <Link href="/" className="flex items-center gap-2">
              <div className="w-8 h-8 bg-salesforce rounded flex items-center justify-center">
                <span className="text-white font-black text-lg italic">{COMPANY_CONFIG.logoText}</span>
              </div>
              <span className="text-2xl font-bold tracking-tight">{COMPANY_CONFIG.name.split('Ai')[0]}<span className="text-salesforce">Ai</span></span>
            </Link>
            <p className="text-gray-400 max-w-sm">
              {COMPANY_CONFIG.description}
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-6">
            <h4 className="font-bold text-lg border-l-4 border-salesforce pl-3">Quick Links</h4>
            <ul className="space-y-3 text-gray-400 text-sm">
              <li><Link href="/" className="hover:text-salesforce transition-colors">Home</Link></li>
              <li><Link href="/services" className="hover:text-salesforce transition-colors">Services</Link></li>
              <li><Link href="/pricing" className="hover:text-salesforce transition-colors">Pricing</Link></li>
              <li><Link href="/about" className="hover:text-salesforce transition-colors">About Us</Link></li>
              <li><Link href="/blog" className="hover:text-salesforce transition-colors">Blog</Link></li>
              <li><Link href="/faq" className="hover:text-salesforce transition-colors">FAQ</Link></li>
            </ul>
          </div>

          {/* Services */}
          <div className="space-y-6">
            <h4 className="font-bold text-lg border-l-4 border-teal-accent pl-3">Our Expertise</h4>
            <ul className="space-y-3 text-gray-400 text-sm">
              <li><Link href="/services" className="hover:text-teal-accent transition-colors">Implementation</Link></li>
              <li><Link href="/services" className="hover:text-teal-accent transition-colors">Custom Development</Link></li>
              <li><Link href="/services" className="hover:text-teal-accent transition-colors">Integration</Link></li>
              <li><Link href="/services" className="hover:text-teal-accent transition-colors">Data Migration</Link></li>
              <li><Link href="/services" className="hover:text-teal-accent transition-colors">AI Solutions</Link></li>
              <li><Link href="/services" className="hover:text-teal-accent transition-colors">Managed Services</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-6">
            <h4 className="font-bold text-lg border-l-4 border-white pl-3">Contact</h4>
            <ul className="space-y-4 text-gray-400 text-sm">
              <li className="flex items-start gap-3">
                <Mail className="w-5 h-5 text-salesforce shrink-0" />
                <a href={`mailto:${COMPANY_CONFIG.contact.email}`} className="hover:text-white transition-colors">{COMPANY_CONFIG.contact.email}</a>
              </li>
              <li className="flex items-start gap-3">
                <Phone className="w-5 h-5 text-salesforce shrink-0" />
                <a href={`tel:${COMPANY_CONFIG.contact.phone.replace(/\s/g, '')}`} className="hover:text-white transition-colors">{COMPANY_CONFIG.contact.phone}</a>
              </li>
              <li className="flex items-start gap-3">
                <Clock className="w-5 h-5 text-salesforce shrink-0" />
                <span>{COMPANY_CONFIG.contact.businessHours}</span>
              </li>
            </ul>
            <div className="flex items-center gap-4 pt-4">
              {COMPANY_CONFIG.social.linkedin && (
                <a href={COMPANY_CONFIG.social.linkedin} target="_blank" rel="noopener noreferrer" className="p-2 bg-white/5 rounded-full hover:bg-salesforce transition-all"><Linkedin className="w-5 h-5" /></a>
              )}
              {COMPANY_CONFIG.social.twitter && (
                <a href={COMPANY_CONFIG.social.twitter} target="_blank" rel="noopener noreferrer" className="p-2 bg-white/5 rounded-full hover:bg-salesforce transition-all"><Twitter className="w-5 h-5" /></a>
              )}
              {COMPANY_CONFIG.social.youtube && (
                <a href={COMPANY_CONFIG.social.youtube} target="_blank" rel="noopener noreferrer" className="p-2 bg-white/5 rounded-full hover:bg-salesforce transition-all"><Youtube className="w-5 h-5" /></a>
              )}
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-400">
          <p>© {COMPANY_CONFIG.copyright.year} {COMPANY_CONFIG.copyright.companyName}. All rights reserved.</p>
          <div className="flex gap-6">
            <Link href="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-white transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
