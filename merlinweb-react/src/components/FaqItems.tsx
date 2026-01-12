import type { CSSProperties } from 'react'

const accordionPanelStyle: CSSProperties = {
  boxSizing: 'border-box',
  opacity: 0,
  transition: 'opacity 200ms ease',
  display: 'none',
  height: 0,
  overflow: 'hidden',
}

const accordionTextStyle: CSSProperties = {
  paddingRight: 'calc(4rem * var(--mantine-scale))',
  color: '#808080',
  fontSize: 'calc(1.6rem * var(--mantine-scale))',
}

const accordionTitleStyle: CSSProperties = {
  paddingRight: 'calc(4rem * var(--mantine-scale))',
  fontSize: 'calc(1.6rem * var(--mantine-scale))',
  fontWeight: 600,
}

const stackGapLargeStyle: CSSProperties = {
  '--stack-gap': 'calc(2rem * var(--mantine-scale))',
  '--stack-align': 'stretch',
  '--stack-justify': 'flex-start',
} as CSSProperties

const stackGapMediumStyle: CSSProperties = {
  '--stack-gap': 'calc(1rem * var(--mantine-scale))',
  '--stack-align': 'stretch',
  '--stack-justify': 'flex-start',
} as CSSProperties

const stackGapSmallStyle: CSSProperties = {
  '--stack-gap': 'calc(0.5rem * var(--mantine-scale))',
  '--stack-align': 'stretch',
  '--stack-justify': 'flex-start',
} as CSSProperties

const listStyle: CSSProperties = {
  '--list-spacing': 'var(--mantine-spacing-sm)',
  paddingRight: 'calc(4rem * var(--mantine-scale))',
  color: '#808080',
  fontSize: 'calc(1.6rem * var(--mantine-scale))',
} as CSSProperties

const linkStyle: CSSProperties = {
  color: '#0070f3',
  textDecoration: 'underline',
}

export default function FaqItems() {
  return (
    <>
      <div className="m-9f59b069 m-9bd7b098 mantine-Accordion-item faq_accordionItem__b0v_B">
        <button
          aria-controls="mantine-«R3bivdb»-panel-1"
          aria-expanded="false"
          className="mantine-focus-auto m-4ba585b8 mantine-Accordion-control faq_accordionControl__6kdBu m-87cf2631 mantine-UnstyledButton-root"
          data-accordion-control="true"
          data-chevron-position="right"
          id="mantine-«R3bivdb»-control-1"
          type="button"
        >
          <span className="faq_accordionChevron__ND18o m-3f35ae96 mantine-Accordion-chevron" data-position="right" />
          <span className="faq_accordionLabel__tXGf0 m-df3ffa0f mantine-Accordion-label">
            What exactly does Merlin do?
          </span>
          <span className="m-9bd771fe mantine-Accordion-icon" data-chevron-position="right">
            <svg
              aria-hidden="true"
              fill="currentColor"
              height="18"
              stroke="currentColor"
              strokeWidth="0"
              viewBox="0 0 20 20"
              width="18"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                clipRule="evenodd"
                d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z"
                fillRule="evenodd"
              />
            </svg>
          </span>
        </button>
        <div
          aria-hidden="true"
          aria-labelledby="mantine-«R3bivdb»-control-1"
          className="m-df78851f mantine-Accordion-panel faq_accordionPanel__iObRo"
          id="mantine-«R3bivdb»-panel-1"
          role="region"
          style={accordionPanelStyle}
        >
          <div className="m-4ba554d4 mantine-Accordion-content">
            <p className="mantine-focus-auto m-b6d8b162 mantine-Text-root" style={accordionTextStyle}>
              Merlin plugs into Gmail, Google Calendar, and Slack, watches the river of messages flow by, and quietly
              bubbles up the handful that actually move the needle. Then, with one tap, it drafts the reply, schedules
              the meeting, or files the task for you. It's the digital chief-of-staff that kills the noise so you can
              race through the signal.
            </p>
          </div>
        </div>
      </div>
      <div className="m-9f59b069 m-9bd7b098 mantine-Accordion-item faq_accordionItem__b0v_B">
        <button
          aria-controls="mantine-«R3bivdb»-panel-2"
          aria-expanded="false"
          className="mantine-focus-auto m-4ba585b8 mantine-Accordion-control faq_accordionControl__6kdBu m-87cf2631 mantine-UnstyledButton-root"
          data-accordion-control="true"
          data-chevron-position="right"
          id="mantine-«R3bivdb»-control-2"
          type="button"
        >
          <span className="faq_accordionChevron__ND18o m-3f35ae96 mantine-Accordion-chevron" data-position="right" />
          <span className="faq_accordionLabel__tXGf0 m-df3ffa0f mantine-Accordion-label">
            How is Merlin different from Superhuman, Notion Calendar, Clay, or ChatGPT?
          </span>
          <span className="m-9bd771fe mantine-Accordion-icon" data-chevron-position="right">
            <svg
              aria-hidden="true"
              fill="currentColor"
              height="18"
              stroke="currentColor"
              strokeWidth="0"
              viewBox="0 0 20 20"
              width="18"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                clipRule="evenodd"
                d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z"
                fillRule="evenodd"
              />
            </svg>
          </span>
        </button>
        <div
          aria-hidden="true"
          aria-labelledby="mantine-«R3bivdb»-control-2"
          className="m-df78851f mantine-Accordion-panel faq_accordionPanel__iObRo"
          id="mantine-«R3bivdb»-panel-2"
          role="region"
          style={accordionPanelStyle}
        >
          <div className="m-4ba554d4 mantine-Accordion-content">
            <div className="m-6d731127 mantine-Stack-root" style={stackGapLargeStyle}>
              <div className="m-6d731127 mantine-Stack-root" style={stackGapSmallStyle}>
                <p className="mantine-focus-auto m-b6d8b162 mantine-Text-root" style={accordionTitleStyle}>
                  One brain, all channels
                </p>
                <p className="mantine-focus-auto m-b6d8b162 mantine-Text-root" style={accordionTextStyle}>
                  Superhuman speeds up email, Notion Calendar polishes scheduling, Clay enriches contacts, ChatGPT
                  answers questions. Merlin does all of that together, in one view.
                </p>
              </div>
              <div className="m-6d731127 mantine-Stack-root" style={stackGapSmallStyle}>
                <p className="mantine-focus-auto m-b6d8b162 mantine-Text-root" style={accordionTitleStyle}>
                  Prioritization over presentation
                </p>
                <p className="mantine-focus-auto m-b6d8b162 mantine-Text-root" style={accordionTextStyle}>
                  Instead of showing you a prettier inbox or calendar, Merlin ranks what's inside them by impact and
                  urgency, so you start with what matters.
                </p>
              </div>
              <div className="m-6d731127 mantine-Stack-root" style={stackGapSmallStyle}>
                <p className="mantine-focus-auto m-b6d8b162 mantine-Text-root" style={accordionTitleStyle}>
                  Action, not advice
                </p>
                <p className="mantine-focus-auto m-b6d8b162 mantine-Text-root" style={accordionTextStyle}>
                  Merlin can press "send," "schedule," or "assign"—not just suggest. Think of it as a teammate with the
                  keys, not a consultant on the sidelines.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="m-9f59b069 m-9bd7b098 mantine-Accordion-item faq_accordionItem__b0v_B">
        <button
          aria-controls="mantine-«R3bivdb»-panel-3"
          aria-expanded="false"
          className="mantine-focus-auto m-4ba585b8 mantine-Accordion-control faq_accordionControl__6kdBu m-87cf2631 mantine-UnstyledButton-root"
          data-accordion-control="true"
          data-chevron-position="right"
          id="mantine-«R3bivdb»-control-3"
          type="button"
        >
          <span className="faq_accordionChevron__ND18o m-3f35ae96 mantine-Accordion-chevron" data-position="right" />
          <span className="faq_accordionLabel__tXGf0 m-df3ffa0f mantine-Accordion-label">
            How much time can I actually save with Merlin?
          </span>
          <span className="m-9bd771fe mantine-Accordion-icon" data-chevron-position="right">
            <svg
              aria-hidden="true"
              fill="currentColor"
              height="18"
              stroke="currentColor"
              strokeWidth="0"
              viewBox="0 0 20 20"
              width="18"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                clipRule="evenodd"
                d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z"
                fillRule="evenodd"
              />
            </svg>
          </span>
        </button>
        <div
          aria-hidden="true"
          aria-labelledby="mantine-«R3bivdb»-control-3"
          className="m-df78851f mantine-Accordion-panel faq_accordionPanel__iObRo"
          id="mantine-«R3bivdb»-panel-3"
          role="region"
          style={accordionPanelStyle}
        >
          <div className="m-4ba554d4 mantine-Accordion-content">
            <p className="mantine-focus-auto m-b6d8b162 mantine-Text-root" style={accordionTextStyle}>
              Beta users reclaim 1–2 hours every workday—about a full work-month per year. That's the meetings you never
              had to schedule, the follow-ups you didn't type, and the context-switches that never happened.
            </p>
          </div>
        </div>
      </div>
      <div className="m-9f59b069 m-9bd7b098 mantine-Accordion-item faq_accordionItem__b0v_B">
        <button
          aria-controls="mantine-«R3bivdb»-panel-5"
          aria-expanded="false"
          className="mantine-focus-auto m-4ba585b8 mantine-Accordion-control faq_accordionControl__6kdBu m-87cf2631 mantine-UnstyledButton-root"
          data-accordion-control="true"
          data-chevron-position="right"
          id="mantine-«R3bivdb»-control-5"
          type="button"
        >
          <span className="faq_accordionChevron__ND18o m-3f35ae96 mantine-Accordion-chevron" data-position="right" />
          <span className="faq_accordionLabel__tXGf0 m-df3ffa0f mantine-Accordion-label">
            Who is Merlin built for?
          </span>
          <span className="m-9bd771fe mantine-Accordion-icon" data-chevron-position="right">
            <svg
              aria-hidden="true"
              fill="currentColor"
              height="18"
              stroke="currentColor"
              strokeWidth="0"
              viewBox="0 0 20 20"
              width="18"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                clipRule="evenodd"
                d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z"
                fillRule="evenodd"
              />
            </svg>
          </span>
        </button>
        <div
          aria-hidden="true"
          aria-labelledby="mantine-«R3bivdb»-control-5"
          className="m-df78851f mantine-Accordion-panel faq_accordionPanel__iObRo"
          id="mantine-«R3bivdb»-panel-5"
          role="region"
          style={accordionPanelStyle}
        >
          <div className="m-4ba554d4 mantine-Accordion-content">
            <p className="mantine-focus-auto m-b6d8b162 mantine-Text-root" style={accordionTextStyle}>
              Busy founders, operators, and knowledge workers who juggle more inputs than hours in the day. If you live
              in Gmail and Calendar, manage a team, and measure productivity in minutes saved, Merlin was designed for
              you.
            </p>
          </div>
        </div>
      </div>
      <div className="m-9f59b069 m-9bd7b098 mantine-Accordion-item faq_accordionItem__b0v_B">
        <button
          aria-controls="mantine-«R3bivdb»-panel-6"
          aria-expanded="false"
          className="mantine-focus-auto m-4ba585b8 mantine-Accordion-control faq_accordionControl__6kdBu m-87cf2631 mantine-UnstyledButton-root"
          data-accordion-control="true"
          data-chevron-position="right"
          id="mantine-«R3bivdb»-control-6"
          type="button"
        >
          <span className="faq_accordionChevron__ND18o m-3f35ae96 mantine-Accordion-chevron" data-position="right" />
          <span className="faq_accordionLabel__tXGf0 m-df3ffa0f mantine-Accordion-label">
            What are the core principles of Merlin's security program?
          </span>
          <span className="m-9bd771fe mantine-Accordion-icon" data-chevron-position="right">
            <svg
              aria-hidden="true"
              fill="currentColor"
              height="18"
              stroke="currentColor"
              strokeWidth="0"
              viewBox="0 0 20 20"
              width="18"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                clipRule="evenodd"
                d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z"
                fillRule="evenodd"
              />
            </svg>
          </span>
        </button>
        <div
          aria-hidden="true"
          aria-labelledby="mantine-«R3bivdb»-control-6"
          className="m-df78851f mantine-Accordion-panel faq_accordionPanel__iObRo"
          id="mantine-«R3bivdb»-panel-6"
          role="region"
          style={accordionPanelStyle}
        >
          <div className="m-4ba554d4 mantine-Accordion-content">
            <div className="m-6d731127 mantine-Stack-root" style={stackGapMediumStyle}>
              <p className="mantine-focus-auto m-b6d8b162 mantine-Text-root" style={accordionTextStyle}>
                Merlin follows industry-standard best practices to ensure your data is safe:
              </p>
              <ul className="m-abbac491 mantine-List-root" style={listStyle}>
                <li className="m-abb6bec2 mantine-List-item">
                  <div className="m-75cd9f71 mantine-List-itemWrapper">
                    <span className="mantine-List-itemLabel">
                      Least Privilege Access: Team members only access what they need to do their job.
                    </span>
                  </div>
                </li>
                <li className="m-abb6bec2 mantine-List-item">
                  <div className="m-75cd9f71 mantine-List-itemWrapper">
                    <span className="mantine-List-itemLabel">
                      Encryption Everywhere: All data is encrypted at rest (AES-256) and in transit (TLS 1.2).
                    </span>
                  </div>
                </li>
                <li className="m-abb6bec2 mantine-List-item">
                  <div className="m-75cd9f71 mantine-List-itemWrapper">
                    <span className="mantine-List-itemLabel">
                      Automatic Updates: Devices, servers, and containers are kept up to date with the latest security
                      patches.
                    </span>
                  </div>
                </li>
                <li className="m-abb6bec2 mantine-List-item">
                  <div className="m-75cd9f71 mantine-List-itemWrapper">
                    <span className="mantine-List-itemLabel">
                      Strict Environment Separation: Development, staging, and production environments are isolated.
                    </span>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="m-9f59b069 m-9bd7b098 mantine-Accordion-item faq_accordionItem__b0v_B">
        <button
          aria-controls="mantine-«R3bivdb»-panel-7"
          aria-expanded="false"
          className="mantine-focus-auto m-4ba585b8 mantine-Accordion-control faq_accordionControl__6kdBu m-87cf2631 mantine-UnstyledButton-root"
          data-accordion-control="true"
          data-chevron-position="right"
          id="mantine-«R3bivdb»-control-7"
          type="button"
        >
          <span className="faq_accordionChevron__ND18o m-3f35ae96 mantine-Accordion-chevron" data-position="right" />
          <span className="faq_accordionLabel__tXGf0 m-df3ffa0f mantine-Accordion-label">
            How does Merlin use my data for AI features?
          </span>
          <span className="m-9bd771fe mantine-Accordion-icon" data-chevron-position="right">
            <svg
              aria-hidden="true"
              fill="currentColor"
              height="18"
              stroke="currentColor"
              strokeWidth="0"
              viewBox="0 0 20 20"
              width="18"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                clipRule="evenodd"
                d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z"
                fillRule="evenodd"
              />
            </svg>
          </span>
        </button>
        <div
          aria-hidden="true"
          aria-labelledby="mantine-«R3bivdb»-control-7"
          className="m-df78851f mantine-Accordion-panel faq_accordionPanel__iObRo"
          id="mantine-«R3bivdb»-panel-7"
          role="region"
          style={accordionPanelStyle}
        >
          <div className="m-4ba554d4 mantine-Accordion-content">
            <p className="mantine-focus-auto m-b6d8b162 mantine-Text-root" style={accordionTextStyle}>
              To power Merlin's AI functionality, we use the OpenAI API. When you engage with these features, relevant
              content (like your email text) is shared with OpenAI only to generate your requested result. Your data is
              never used to train OpenAI's models. You can learn more in OpenAI's{' '}
              <a href="https://openai.com/policies/privacy-policy" rel="noopener noreferrer" style={linkStyle} target="_blank">
                Privacy Policy
              </a>{' '}
              and{' '}
              <a href="https://openai.com/policies/terms-of-use" rel="noopener noreferrer" style={linkStyle} target="_blank">
                Terms of Service
              </a>
              .
            </p>
          </div>
        </div>
      </div>
      <div className="m-9f59b069 m-9bd7b098 mantine-Accordion-item faq_accordionItem__b0v_B">
        <button
          aria-controls="mantine-«R3bivdb»-panel-8"
          aria-expanded="false"
          className="mantine-focus-auto m-4ba585b8 mantine-Accordion-control faq_accordionControl__6kdBu m-87cf2631 mantine-UnstyledButton-root"
          data-accordion-control="true"
          data-chevron-position="right"
          id="mantine-«R3bivdb»-control-8"
          type="button"
        >
          <span className="faq_accordionChevron__ND18o m-3f35ae96 mantine-Accordion-chevron" data-position="right" />
          <span className="faq_accordionLabel__tXGf0 m-df3ffa0f mantine-Accordion-label">
            How is data ownership handled?
          </span>
          <span className="m-9bd771fe mantine-Accordion-icon" data-chevron-position="right">
            <svg
              aria-hidden="true"
              fill="currentColor"
              height="18"
              stroke="currentColor"
              strokeWidth="0"
              viewBox="0 0 20 20"
              width="18"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                clipRule="evenodd"
                d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z"
                fillRule="evenodd"
              />
            </svg>
          </span>
        </button>
        <div
          aria-hidden="true"
          aria-labelledby="mantine-«R3bivdb»-control-8"
          className="m-df78851f mantine-Accordion-panel faq_accordionPanel__iObRo"
          id="mantine-«R3bivdb»-panel-8"
          role="region"
          style={accordionPanelStyle}
        >
          <div className="m-4ba554d4 mantine-Accordion-content">
            <p className="mantine-focus-auto m-b6d8b162 mantine-Text-root" style={accordionTextStyle}>
              You retain full ownership of your data. While Merlin accesses your email or calendar data to provide its
              features, all data can be deleted or purged upon request.
            </p>
          </div>
        </div>
      </div>
      <div className="m-9f59b069 m-9bd7b098 mantine-Accordion-item faq_accordionItem__b0v_B">
        <button
          aria-controls="mantine-«R3bivdb»-panel-9"
          aria-expanded="false"
          className="mantine-focus-auto m-4ba585b8 mantine-Accordion-control faq_accordionControl__6kdBu m-87cf2631 mantine-UnstyledButton-root"
          data-accordion-control="true"
          data-chevron-position="right"
          id="mantine-«R3bivdb»-control-9"
          type="button"
        >
          <span className="faq_accordionChevron__ND18o m-3f35ae96 mantine-Accordion-chevron" data-position="right" />
          <span className="faq_accordionLabel__tXGf0 m-df3ffa0f mantine-Accordion-label">
            What security certifications and evaluations does Merlin meet?
          </span>
          <span className="m-9bd771fe mantine-Accordion-icon" data-chevron-position="right">
            <svg
              aria-hidden="true"
              fill="currentColor"
              height="18"
              stroke="currentColor"
              strokeWidth="0"
              viewBox="0 0 20 20"
              width="18"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                clipRule="evenodd"
                d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z"
                fillRule="evenodd"
              />
            </svg>
          </span>
        </button>
        <div
          aria-hidden="true"
          aria-labelledby="mantine-«R3bivdb»-control-9"
          className="m-df78851f mantine-Accordion-panel faq_accordionPanel__iObRo"
          id="mantine-«R3bivdb»-panel-9"
          role="region"
          style={accordionPanelStyle}
        >
          <div className="m-4ba554d4 mantine-Accordion-content">
            <ul className="m-abbac491 mantine-List-root" style={listStyle}>
              <li className="m-abb6bec2 mantine-List-item">
                <div className="m-75cd9f71 mantine-List-itemWrapper">
                  <span className="mantine-List-itemLabel">ISO 27001:2022 Certified</span>
                </div>
              </li>
              <li className="m-abb6bec2 mantine-List-item">
                <div className="m-75cd9f71 mantine-List-itemWrapper">
                  <span className="mantine-List-itemLabel">SOC 2 Type II Compliant</span>
                </div>
              </li>
              <li className="m-abb6bec2 mantine-List-item">
                <div className="m-75cd9f71 mantine-List-itemWrapper">
                  <span className="mantine-List-itemLabel">HIPAA Compliant</span>
                </div>
              </li>
              <li className="m-abb6bec2 mantine-List-item">
                <div className="m-75cd9f71 mantine-List-itemWrapper">
                  <span className="mantine-List-itemLabel">Annual Third-Party Security Audits</span>
                </div>
              </li>
              <li className="m-abb6bec2 mantine-List-item">
                <div className="m-75cd9f71 mantine-List-itemWrapper">
                  <span className="mantine-List-itemLabel">Quarterly Disaster Recovery &amp; Incident Simulations</span>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  )
}
