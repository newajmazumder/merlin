import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import CtaButton from './components/CtaButton.tsx'
import Steps from './components/Steps.tsx'
import FaqItems from './components/FaqItems.tsx'
import FooterBlock from './components/FooterBlock.tsx'
import FooterPressRow from './components/FooterPressRow.tsx'
import PricingCta from './components/PricingCta.tsx'
import PricingCtaButton from './components/PricingCtaButton.tsx'
import PricingCtaIcon from './components/PricingCtaIcon.tsx'
import HeroSubtitle from './components/HeroSubtitle.tsx'
import FooterLogo from './components/FooterLogo.tsx'
import ReadyHeading from './components/ReadyHeading.tsx'
import PricingHeader from './components/PricingHeader.tsx'
import HeroTitle from './components/HeroTitle.tsx'
import FooterDivider from './components/FooterDivider.tsx'
import HeroCta from './components/HeroCta.tsx'
import HeroCtaLabel from './components/HeroCtaLabel.tsx'
import HeroCtaIcon from './components/HeroCtaIcon.tsx'
import PricingCardMerlin from './components/PricingCardMerlin.tsx'
import PricingCardTraditional from './components/PricingCardTraditional.tsx'
import HomeReviews from './components/HomeReviews.tsx'
import HomeFeaturesIntro from './components/HomeFeaturesIntro.tsx'
import HomeFeaturesChat from './components/HomeFeaturesChat.tsx'
import HomeFeaturesSplit from './components/HomeFeaturesSplit.tsx'
import HomeFeaturesClarity from './components/HomeFeaturesClarity.tsx'
import HomeFeaturesTalk from './components/HomeFeaturesTalk.tsx'
import YouBuilt from './components/YouBuilt.tsx'
import YouPeople from './components/YouPeople.tsx'
import PricingCardMerlinItems from './components/PricingCardMerlinItems.tsx'
import HeroUsedBy from './components/HeroUsedBy.tsx'
import HeroDescription from './components/HeroDescription.tsx'
import PricingCtaLabel from './components/PricingCtaLabel.tsx'
import ReviewQuote from './components/ReviewQuote.tsx'
import ReviewAuthor from './components/ReviewAuthor.tsx'
import FooterMobileSocial from './components/FooterMobileSocial.tsx'
import ReviewDivider from './components/ReviewDivider.tsx'
import FooterDesktopSocial from './components/FooterDesktopSocial.tsx'
import ReviewHeadline from './components/ReviewHeadline.tsx'
import FooterCopyright from './components/FooterCopyright.tsx'
import FooterLinksDesktop from './components/FooterLinksDesktop.tsx'

const root = document.getElementById('root')
if (root) {
  createRoot(root).render(
    <StrictMode>
      <App />
    </StrictMode>,
  )
}

const ctaRoot = document.getElementById('react-cta-button')
if (ctaRoot) {
  createRoot(ctaRoot).render(
    <StrictMode>
      <CtaButton />
    </StrictMode>,
  )
}

const stepsRoot = document.getElementById('react-steps')
if (stepsRoot) {
  createRoot(stepsRoot).render(
    <StrictMode>
      <Steps />
    </StrictMode>,
  )
}

const pricingCardMerlinRoot = document.getElementById('react-pricing-card-merlin')
if (pricingCardMerlinRoot) {
  createRoot(pricingCardMerlinRoot).render(
    <StrictMode>
      <PricingCardMerlin />
    </StrictMode>,
  )
}
// Mount after PricingCardMerlin injects its HTML placeholder.
queueMicrotask(() => {
  const pricingCardMerlinItemsRoot = document.getElementById('react-pricing-card-merlin-items')
  if (pricingCardMerlinItemsRoot) {
    createRoot(pricingCardMerlinItemsRoot).render(
      <StrictMode>
        <PricingCardMerlinItems />
      </StrictMode>,
    )
  }
})

const pricingCardTraditionalRoot = document.getElementById('react-pricing-card-traditional')
if (pricingCardTraditionalRoot) {
  createRoot(pricingCardTraditionalRoot).render(
    <StrictMode>
      <PricingCardTraditional />
    </StrictMode>,
  )
}

const faqRoot = document.getElementById('react-faq-items')
if (faqRoot) {
  createRoot(faqRoot).render(
    <StrictMode>
      <FaqItems />
    </StrictMode>,
  )
}

const footerRoot = document.getElementById('react-footer-block')
if (footerRoot) {
  createRoot(footerRoot).render(
    <StrictMode>
      <FooterBlock />
    </StrictMode>,
  )
}

// Mount after FooterBlock injects its HTML placeholder.
queueMicrotask(() => {
  const footerPressRowRoot = document.getElementById('react-footer-press-row')
  if (footerPressRowRoot) {
    createRoot(footerPressRowRoot).render(
      <StrictMode>
        <FooterPressRow />
      </StrictMode>,
    )
  }
})

const pricingCtaRoot = document.getElementById('react-pricing-cta')
if (pricingCtaRoot) {
  createRoot(pricingCtaRoot).render(
    <StrictMode>
      <PricingCta />
    </StrictMode>,
  )
}
// Mount after PricingCta injects its HTML placeholder.
queueMicrotask(() => {
  const pricingCtaButtonRoot = document.getElementById('react-pricing-cta-button')
  if (pricingCtaButtonRoot) {
    createRoot(pricingCtaButtonRoot).render(
      <StrictMode>
        <PricingCtaButton />
      </StrictMode>,
    )
  }
  const pricingCtaLabelRoot = document.getElementById('react-pricing-cta-label')
  if (pricingCtaLabelRoot) {
    createRoot(pricingCtaLabelRoot).render(
      <StrictMode>
        <PricingCtaLabel />
      </StrictMode>,
    )
  }
  const pricingCtaIconRoot = document.getElementById('react-pricing-cta-icon')
  if (pricingCtaIconRoot) {
    createRoot(pricingCtaIconRoot).render(
      <StrictMode>
        <PricingCtaIcon />
      </StrictMode>,
    )
  }
})

const heroSubtitleRoot = document.getElementById('react-hero-subtitle')
if (heroSubtitleRoot) {
  createRoot(heroSubtitleRoot).render(
    <StrictMode>
      <HeroSubtitle />
    </StrictMode>,
  )
}

const heroDescriptionRoot = document.getElementById('react-hero-description')
if (heroDescriptionRoot) {
  createRoot(heroDescriptionRoot).render(
    <StrictMode>
      <HeroDescription />
    </StrictMode>,
  )
}

const footerLogoRoot = document.getElementById('react-footer-logo')
if (footerLogoRoot) {
  createRoot(footerLogoRoot).render(
    <StrictMode>
      <FooterLogo />
    </StrictMode>,
  )
}

const readyHeadingRoot = document.getElementById('react-ready-heading')
if (readyHeadingRoot) {
  createRoot(readyHeadingRoot).render(
    <StrictMode>
      <ReadyHeading />
    </StrictMode>,
  )
}

const pricingHeaderRoot = document.getElementById('react-pricing-header')
if (pricingHeaderRoot) {
  createRoot(pricingHeaderRoot).render(
    <StrictMode>
      <PricingHeader />
    </StrictMode>,
  )
}

const heroTitleRoot = document.getElementById('react-hero-title')
if (heroTitleRoot) {
  createRoot(heroTitleRoot).render(
    <StrictMode>
      <HeroTitle />
    </StrictMode>,
  )
}

const footerDividerRoot = document.getElementById('react-footer-divider')
if (footerDividerRoot) {
  createRoot(footerDividerRoot).render(
    <StrictMode>
      <FooterDivider />
    </StrictMode>,
  )
}

const heroCtaRoot = document.getElementById('react-hero-cta')
if (heroCtaRoot) {
  createRoot(heroCtaRoot).render(
    <StrictMode>
      <HeroCta />
    </StrictMode>,
  )
}
// Mount after HeroCta injects its HTML placeholder.
queueMicrotask(() => {
  const heroCtaLabelRoot = document.getElementById('react-hero-cta-label')
  if (heroCtaLabelRoot) {
    createRoot(heroCtaLabelRoot).render(
      <StrictMode>
        <HeroCtaLabel />
      </StrictMode>,
    )
  }
  const heroCtaIconRoot = document.getElementById('react-hero-cta-icon')
  if (heroCtaIconRoot) {
    createRoot(heroCtaIconRoot).render(
      <StrictMode>
        <HeroCtaIcon />
      </StrictMode>,
    )
  }
})

const heroUsedByRoot = document.getElementById('react-hero-used-by')
if (heroUsedByRoot) {
  createRoot(heroUsedByRoot).render(
    <StrictMode>
      <HeroUsedBy />
    </StrictMode>,
  )
}

const homeReviewsRoot = document.getElementById('react-home-reviews')
if (homeReviewsRoot) {
  createRoot(homeReviewsRoot).render(
    <StrictMode>
      <HomeReviews />
    </StrictMode>,
  )
}
const homeFeaturesIntroRoot = document.getElementById('react-home-features-intro')
if (homeFeaturesIntroRoot) {
  createRoot(homeFeaturesIntroRoot).render(
    <StrictMode>
      <HomeFeaturesIntro />
    </StrictMode>,
  )
}
const homeFeaturesChatRoot = document.getElementById('react-home-features-chat')
if (homeFeaturesChatRoot) {
  createRoot(homeFeaturesChatRoot).render(
    <StrictMode>
      <HomeFeaturesChat />
    </StrictMode>,
  )
}
const youBuiltRoot = document.getElementById('react-you-built')
if (youBuiltRoot) {
  createRoot(youBuiltRoot).render(
    <StrictMode>
      <YouBuilt />
    </StrictMode>,
  )
}
const youPeopleRoot = document.getElementById('react-you-people')
if (youPeopleRoot) {
  createRoot(youPeopleRoot).render(
    <StrictMode>
      <YouPeople />
    </StrictMode>,
  )
}
const homeFeaturesSplitRoot = document.getElementById('react-home-features-split')
if (homeFeaturesSplitRoot) {
  createRoot(homeFeaturesSplitRoot).render(
    <StrictMode>
      <HomeFeaturesSplit />
    </StrictMode>,
  )
}
// Mount after HomeFeaturesSplit injects its HTML placeholders.
queueMicrotask(() => {
  const homeFeaturesClarityRoot = document.getElementById('react-home-features-clarity')
  if (homeFeaturesClarityRoot) {
    createRoot(homeFeaturesClarityRoot).render(
      <StrictMode>
        <HomeFeaturesClarity />
      </StrictMode>,
    )
  }
  const homeFeaturesTalkRoot = document.getElementById('react-home-features-talk')
  if (homeFeaturesTalkRoot) {
    createRoot(homeFeaturesTalkRoot).render(
      <StrictMode>
        <HomeFeaturesTalk />
      </StrictMode>,
    )
  }
})
// Mount after HomeReviews injects its HTML placeholder.
queueMicrotask(() => {
  const reviewQuoteRoot = document.getElementById('react-review-quote')
  if (reviewQuoteRoot) {
    createRoot(reviewQuoteRoot).render(
      <StrictMode>
        <ReviewQuote />
      </StrictMode>,
    )
  }
  // Mount after ReviewQuote injects its HTML placeholders.
  queueMicrotask(() => {
    const reviewHeadlineRoot = document.getElementById('react-review-headline')
    if (reviewHeadlineRoot) {
      createRoot(reviewHeadlineRoot).render(
        <StrictMode>
          <ReviewHeadline />
        </StrictMode>,
      )
    }
    const reviewAuthorRoot = document.getElementById('react-review-author')
    if (reviewAuthorRoot) {
      createRoot(reviewAuthorRoot).render(
        <StrictMode>
          <ReviewAuthor />
        </StrictMode>,
      )
    }
    const reviewDividerRoot = document.getElementById('react-review-divider')
    if (reviewDividerRoot) {
      createRoot(reviewDividerRoot).render(
        <StrictMode>
          <ReviewDivider />
        </StrictMode>,
      )
    }
  })
})

// Mount after FooterBlock injects its HTML placeholder.
queueMicrotask(() => {
  const footerMobileSocialRoot = document.getElementById('react-footer-mobile-social')
  if (footerMobileSocialRoot) {
    createRoot(footerMobileSocialRoot).render(
      <StrictMode>
        <FooterMobileSocial />
      </StrictMode>,
    )
  }
  const footerDesktopSocialRoot = document.getElementById('react-footer-desktop-social')
  if (footerDesktopSocialRoot) {
    createRoot(footerDesktopSocialRoot).render(
      <StrictMode>
        <FooterDesktopSocial />
      </StrictMode>,
    )
  }
  const footerLinksDesktopRoot = document.getElementById('react-footer-links-desktop')
  if (footerLinksDesktopRoot) {
    createRoot(footerLinksDesktopRoot).render(
      <StrictMode>
        <FooterLinksDesktop />
      </StrictMode>,
    )
  }
  const footerCopyrightRoot = document.getElementById('react-footer-copyright')
  if (footerCopyrightRoot) {
    createRoot(footerCopyrightRoot).render(
      <StrictMode>
        <FooterCopyright />
      </StrictMode>,
    )
  }
})
