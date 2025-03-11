import React, { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import emailjs from "@emailjs/browser";
import {
  FiMail,
  FiGithub,
  FiLinkedin,
  FiTwitter,
  FiSend,
} from "react-icons/fi";

const Contact = () => {
  const formRef = useRef();
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      await emailjs.sendForm(
        "YOUR_SERVICE_ID",
        "YOUR_TEMPLATE_ID",
        formRef.current,
        "YOUR_PUBLIC_KEY"
      );
      setSuccess(true);
      setForm({ name: "", email: "", message: "" });
    } catch (error) {
      console.error("Error sending email:", error);
    } finally {
      setLoading(false);
    }
  };

  const socialLinks = [
    {
      name: "GitHub",
      icon: <FiGithub size={24} />,
      url: "https://github.com/yourusername",
    },
    {
      name: "LinkedIn",
      icon: <FiLinkedin size={24} />,
      url: "https://linkedin.com/in/yourusername",
    },
    {
      name: "Twitter",
      icon: <FiTwitter size={24} />,
      url: "https://twitter.com/yourusername",
    },
    {
      name: "Email",
      icon: <FiMail size={24} />,
      url: "mailto:your.email@example.com",
    },
  ];

  return (
    <section
      id="contact"
      className="relative min-h-screen py-20 bg-gradient-to-b from-[#004D40] to-[#001F2D]"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 w-full h-full">
        <div className="absolute w-full h-full bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAxOGMzLjMxNCAwIDYtMi42ODYgNi02cy0yLjY4Ni02LTYtNi02IDIuNjg2LTYgNiAyLjY4NiA2IDYgNnptMCAwIiBzdHJva2U9IiMwMEJGQTYiIG9wYWNpdHk9Ii4yIi8+PC9nPjwvc3ZnPg==')] opacity-5" />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="font-playfair text-4xl sm:text-5xl font-bold text-white mb-4">
            Get in Touch
          </h2>
          <div className="w-20 h-1 bg-[#00BFA6] mx-auto" />
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            <div className="relative p-8 rounded-2xl bg-gradient-to-br from-[rgba(0,15,23,0.9)] to-[rgba(0,15,23,0.95)] backdrop-blur-xl border border-[#00BFA6]/20 shadow-[0_0_30px_rgba(0,191,166,0.15)]">
              <h3 className="text-2xl font-playfair font-bold text-white mb-6">
                Let's Create Something Amazing Together
              </h3>
              <p className="text-gray-300 leading-relaxed mb-8">
                I'm always open to discussing new projects, creative ideas, or
                opportunities to be part of your visions. Feel free to reach out
                through the form or connect with me on social media.
              </p>

              {/* Social Links */}
              <div className="flex flex-wrap gap-4">
                {socialLinks.map((link, index) => (
                  <motion.a
                    key={index}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 rounded-full bg-[rgba(0,191,166,0.1)] text-[#00BFA6] hover:bg-[#00BFA6] hover:text-white transition-colors duration-300"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    {link.icon}
                  </motion.a>
                ))}
              </div>

              {/* Decorative Elements */}
              <div className="absolute -top-4 -left-4 w-20 h-20 border-t-2 border-l-2 border-[#00BFA6]/20 rounded-tl-2xl" />
              <div className="absolute -bottom-4 -right-4 w-20 h-20 border-b-2 border-r-2 border-[#00BFA6]/20 rounded-br-2xl" />
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <form
              ref={formRef}
              onSubmit={handleSubmit}
              className="relative p-8 rounded-2xl bg-gradient-to-br from-[rgba(0,15,23,0.9)] to-[rgba(0,15,23,0.95)] backdrop-blur-xl border border-[#00BFA6]/20 shadow-[0_0_30px_rgba(0,191,166,0.15)]"
            >
              <div className="space-y-6">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-gray-300 mb-2"
                  >
                    Your Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    placeholder="John Doe"
                    className="w-full px-4 py-3 rounded-lg bg-[rgba(0,15,23,0.8)] border border-[#00BFA6]/20 text-white placeholder-gray-400 focus:outline-none focus:border-[#00BFA6] transition-colors duration-300"
                    required
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-300 mb-2"
                  >
                    Your Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    placeholder="john@example.com"
                    className="w-full px-4 py-3 rounded-lg bg-[rgba(0,15,23,0.8)] border border-[#00BFA6]/20 text-white placeholder-gray-400 focus:outline-none focus:border-[#00BFA6] transition-colors duration-300"
                    required
                  />
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-gray-300 mb-2"
                  >
                    Your Message
                  </label>
                  <textarea
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    placeholder="Tell me about your project..."
                    rows={4}
                    className="w-full px-4 py-3 rounded-lg bg-[rgba(0,15,23,0.8)] border border-[#00BFA6]/20 text-white placeholder-gray-400 focus:outline-none focus:border-[#00BFA6] transition-colors duration-300 resize-none"
                    required
                  />
                </div>

                <motion.button
                  type="submit"
                  disabled={loading}
                  className="w-full px-8 py-4 rounded-lg bg-[#00BFA6] text-white font-medium flex items-center justify-center gap-2 hover:bg-[#00A896] transition-colors duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  {loading ? (
                    <div className="w-6 h-6 border-2 border-white border-t-transparent rounded-full animate-spin" />
                  ) : (
                    <>
                      Send Message
                      <FiSend className="text-lg" />
                    </>
                  )}
                </motion.button>
              </div>

              {/* Success Message */}
              <AnimatePresence>
                {success && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="absolute inset-0 flex items-center justify-center bg-[rgba(0,15,23,0.95)] backdrop-blur-sm rounded-2xl"
                  >
                    <div className="text-center p-8">
                      <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-[#00BFA6]/20 flex items-center justify-center">
                        <FiSend className="text-[#00BFA6] text-2xl" />
                      </div>
                      <h4 className="text-xl font-bold text-white mb-2">
                        Message Sent Successfully!
                      </h4>
                      <p className="text-gray-300">
                        Thank you for reaching out. I'll get back to you soon.
                      </p>
                      <motion.button
                        onClick={() => setSuccess(false)}
                        className="mt-6 px-6 py-2 rounded-lg border border-[#00BFA6] text-[#00BFA6] hover:bg-[#00BFA6] hover:text-white transition-colors duration-300"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        Send Another Message
                      </motion.button>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Decorative Elements */}
              <div className="absolute -top-4 -left-4 w-20 h-20 border-t-2 border-l-2 border-[#00BFA6]/20 rounded-tl-2xl" />
              <div className="absolute -bottom-4 -right-4 w-20 h-20 border-b-2 border-r-2 border-[#00BFA6]/20 rounded-br-2xl" />
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
