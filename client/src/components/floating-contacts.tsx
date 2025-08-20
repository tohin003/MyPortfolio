import { motion } from "framer-motion";

const contacts = [
  {
    icon: "fas fa-envelope",
    href: "mailto:tohin1400@gmail.com",
    color: "text-blue-400",
  },
  {
    icon: "fab fa-github",
    href: "https://github.com/tohin003",
    color: "text-blue-400",
  },
  {
    icon: "fas fa-phone",
    href: "tel:+918837271223",
    color: "text-blue-400",
  },
];

export default function FloatingContacts() {
  return (
    <div className="fixed right-8 top-1/2 transform -translate-y-1/2 z-30 hidden lg:flex flex-col space-y-4">
      {contacts.map((contact, index) => (
        <motion.a
          key={contact.href}
          href={contact.href}
          target={contact.href.startsWith('http') ? '_blank' : undefined}
          rel={contact.href.startsWith('http') ? 'noopener noreferrer' : undefined}
          className="glass p-3 rounded-full hover:scale-110 transition-transform duration-300"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: index * 0.1 + 1 }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
        >
          <i className={`${contact.icon} ${contact.color}`}></i>
        </motion.a>
      ))}
    </div>
  );
}
