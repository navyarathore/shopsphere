import { useState } from 'react'
import { Link } from 'react-router-dom'

interface FaqItem {
  question: string
  answer: string
}

const FAQ_ITEMS: FaqItem[] = [
  {
    question: 'Where is my order / what is the status of my shipment?',
    answer:
      'You can track your order any time from the Order History page. Once your order ships, a tracking link will be emailed to you and will also appear on the order detail page. Most orders are delivered within 3–5 business days. If your estimated delivery date has passed and your order has not arrived, please contact our support team.',
  },
  {
    question: 'How do I return or exchange an item?',
    answer:
      "We accept returns within 30 days of delivery for most items in their original condition. To start a return, go to Order History, select the order, and click 'Return or replace items'. Once your return is received and inspected, we will process your refund or send a replacement. Items marked as non-returnable (e.g. perishables, digital downloads) cannot be returned.",
  },
  {
    question: 'When will I receive my refund?',
    answer:
      "Refunds are issued to your original payment method within 3–5 business days after we receive and inspect your returned item. You'll get a confirmation email when the refund is processed. Please allow an additional 2–3 business days for the amount to appear in your account depending on your bank.",
  },
  {
    question: 'My item arrived damaged or incorrect — what do I do?',
    answer:
      'We are sorry about this! Go to Order History, find the affected order, and select "Report a problem". You can choose between a free replacement or a full refund. Please include a photo of the damaged or incorrect item when submitting your report to speed up the resolution.',
  },
  {
    question: 'How do I cancel or modify my order?',
    answer:
      "Orders can be cancelled or modified within 1 hour of placement, before they enter the packing stage. Go to Order History, open the order, and click 'Cancel order' or 'Change items'. Once the order is packed and dispatched, it can no longer be modified — you'll need to wait for delivery and then initiate a return.",
  },
  {
    question: 'Why was my payment declined?',
    answer:
      'A declined payment is usually caused by insufficient funds, an expired card, an incorrect billing address, or a security block from your bank. Double-check your card details and billing address, then try again. If the problem persists, try a different payment method or contact your bank. ShopSphere never stores full card numbers — all payments are processed securely by our payment provider.',
  },
  {
    question: 'How do I apply a promo code or discount?',
    answer:
      'On the Cart page, enter your promo code in the "Apply coupon" field and click Apply before proceeding to checkout. Only one code can be used per order. If your code is not working, check that it has not expired, that your cart meets any minimum order value, and that the items in your cart are eligible for the promotion.',
  },
  {
    question: 'How do I contact support or escalate my issue?',
    answer:
      'You can reach our customer support team via the Help link in the footer or by emailing support@shopsphere.example.com. Our team is available Monday–Friday 9 AM–6 PM. For urgent matters, use the live chat widget on any page. If your issue has not been resolved after contacting support, ask the agent to escalate your case to a senior representative.',
  },
]

function FaqAccordion({ items }: { items: FaqItem[] }) {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  return (
    <div className="divide-y divide-gray-200 border border-gray-200 rounded-2xl overflow-hidden">
      {items.map((item, i) => {
        const isOpen = openIndex === i
        return (
          <div key={i}>
            <button
              onClick={() => setOpenIndex(isOpen ? null : i)}
              className="w-full flex items-center justify-between gap-4 px-6 py-4 text-left bg-white hover:bg-amber-50 transition-colors"
              aria-expanded={isOpen}
            >
              <span className="text-sm font-semibold text-gray-800">{item.question}</span>
              <span
                className={`flex-shrink-0 text-amber-500 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`}
              >
                ▾
              </span>
            </button>
            {isOpen && (
              <div className="px-6 py-4 bg-amber-50/40 border-t border-amber-100">
                <p className="text-sm text-gray-600 leading-relaxed">{item.answer}</p>
              </div>
            )}
          </div>
        )
      })}
    </div>
  )
}

export default function CustomerServicePage() {
  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 py-10">
      {/* Header */}
      <div className="mb-8 text-center">
        <span className="text-5xl">🎧</span>
        <h1 className="mt-3 text-2xl sm:text-3xl font-extrabold text-gray-900">Customer Service</h1>
        <p className="mt-2 text-sm text-gray-500 max-w-xl mx-auto">
          Find quick answers to the most common questions. Can't find what you're looking for?{' '}
          <a href="mailto:support@shopsphere.example.com" className="text-[#007185] hover:underline">
            Contact our team
          </a>
          .
        </p>
      </div>

      {/* FAQ accordion */}
      <section>
        <h2 className="text-xs font-bold text-amber-600 uppercase tracking-widest mb-3">
          Frequently Asked Questions
        </h2>
        <FaqAccordion items={FAQ_ITEMS} />
      </section>

      {/* Quick links */}
      <section className="mt-10 grid grid-cols-1 sm:grid-cols-3 gap-4">
        {[
          { icon: '📦', label: 'Track Your Order', to: '/orders', desc: 'View status & tracking info' },
          { icon: '↩️', label: 'Returns Centre', to: '#', desc: 'Start a return or exchange' },
          { icon: '💬', label: 'Live Chat', to: '#', desc: 'Chat with a support agent' },
        ].map(({ icon, label, to, desc }) => (
          <Link
            key={label}
            to={to}
            className="flex flex-col items-center text-center gap-2 bg-white border border-gray-200 rounded-2xl px-4 py-5 shadow-sm hover:shadow-md hover:border-amber-300 hover:-translate-y-0.5 transition-all"
          >
            <span className="text-3xl">{icon}</span>
            <span className="text-sm font-bold text-gray-800">{label}</span>
            <span className="text-xs text-gray-500">{desc}</span>
          </Link>
        ))}
      </section>
    </div>
  )
}
