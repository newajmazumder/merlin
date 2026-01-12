import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export function initHomeAnimations() {
  let attempts = 0
  let heroAnimation: gsap.core.Timeline | null = null
  let chromaTimeout: number | undefined
  let reviewAnimation: gsap.core.Tween | null = null
  let reviewAuthorAnimation: gsap.core.Tween | null = null
  let youAnimation: gsap.core.Timeline | null = null
  let cursorMoveHandler: ((event: MouseEvent) => void) | null = null

  const start = () => {
    const heroChars = gsap.utils.toArray<HTMLElement>('.hero-char')
    const logo = document.querySelector<HTMLElement>('.home_hero_logo__6f4Js')
    const chromaText = document.getElementById('chromaText')
    const reviewChars = gsap.utils.toArray<HTMLElement>('.review-char')
    const reviewAuthor = document.querySelector<HTMLElement>('.review-author')
    const youContent = document.querySelector<HTMLElement>('.you_you__content__Em0jJ')
    const youPeople = document.querySelector<HTMLElement>('.you_people__f202E')
    const cursor = document.querySelector<HTMLElement>('.cursor_cursor__VAfFJ')

    if (!heroChars.length && attempts < 60) {
      attempts += 1
      requestAnimationFrame(start)
      return
    }

    if (heroChars.length) {
      const beforeLogo = logo
        ? heroChars.filter((char) => {
            const position = logo.compareDocumentPosition(char)
            return position & Node.DOCUMENT_POSITION_FOLLOWING
          })
        : heroChars
      const afterLogo = logo ? heroChars.filter((char) => !beforeLogo.includes(char)) : []

      gsap.set(heroChars, { opacity: 0, filter: 'blur(8px)', y: -30 })
      if (logo) {
        gsap.set(logo, { opacity: 0 })
      }

      heroAnimation = gsap.timeline()
      if (beforeLogo.length) {
        heroAnimation.fromTo(
          beforeLogo,
          { opacity: 0, filter: 'blur(8px)', y: -30 },
          {
            opacity: 1,
            filter: 'blur(0px)',
            y: 0,
            duration: 0.1,
            stagger: { each: 0.015 },
            ease: 'power2.out',
            delay: 0.2,
          },
        )
      }
      if (afterLogo.length) {
        heroAnimation.fromTo(
          afterLogo,
          { opacity: 0, filter: 'blur(8px)', y: -30 },
          {
            opacity: 1,
            filter: 'blur(0px)',
            y: 0,
            duration: 0.1,
            stagger: { each: 0.015 },
            ease: 'power2.out',
          },
          '>',
        )
      }
      if (logo) {
        heroAnimation.to(
          logo,
          {
            opacity: 1,
            duration: 0.2,
            ease: 'power2.out',
          },
          '>',
        )
      }
    }

    if (chromaText instanceof HTMLElement) {
      chromaText.style.backgroundPosition = '0% 0'
      chromaTimeout = window.setTimeout(() => {
        chromaText.style.backgroundImage = 'none'
        chromaText.style.backgroundClip = 'initial'
        chromaText.style.webkitBackgroundClip = 'initial'
        chromaText.style.webkitTextFillColor = '#000'
        chromaText.style.color = '#000'
      }, 1600)
    }

    if (reviewChars.length) {
      gsap.set(reviewChars, { opacity: 0, filter: 'blur(8px)' })
      reviewAnimation = gsap.to(reviewChars, {
        opacity: 1,
        filter: 'blur(0px)',
        duration: 0.1,
        stagger: { each: 0.015 },
        ease: 'power2.out',
        scrollTrigger: {
          trigger: '.home_reviews__bPdPD',
          start: 'center center',
          end: 'center center-=20%',
          scrub: 0.1,
          toggleActions: 'play none none reverse',
          pin: true,
        },
      })
    }

    if (reviewAuthor) {
      gsap.set(reviewAuthor, { opacity: 0 })
      reviewAuthorAnimation = gsap.to(reviewAuthor, {
        opacity: 1,
        duration: 0.2,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: '.home_reviews__bPdPD',
          start: 'center center',
          toggleActions: 'play none none reverse',
        },
      })
    }

    if (youContent && youPeople) {
      gsap.set(youPeople, { opacity: 0, visibility: 'hidden' })
      youAnimation = gsap.timeline({
        scrollTrigger: {
          trigger: '.you_youLayout__t0Oco',
          start: 'top top',
          end: '+=100%',
          scrub: true,
        },
      })

      youAnimation
        .to(
          youContent,
          {
            opacity: 0,
            scale: 0.9,
            ease: 'none',
          },
          0,
        )
        .to(
          youPeople,
          {
            opacity: 1,
            visibility: 'visible',
            ease: 'none',
          },
          0,
        )
    }

    if (cursor) {
      const moveX = gsap.quickTo(cursor, 'left', { duration: 0.2, ease: 'power2.out' })
      const moveY = gsap.quickTo(cursor, 'top', { duration: 0.2, ease: 'power2.out' })

      cursorMoveHandler = (event: MouseEvent) => {
        moveX(event.clientX)
        moveY(event.clientY)
      }

      window.addEventListener('mousemove', cursorMoveHandler, { passive: true })
    }
  }

  start()

  return () => {
    heroAnimation?.kill()
    reviewAnimation?.kill()
    reviewAuthorAnimation?.kill()
    youAnimation?.kill()
    if (chromaTimeout !== undefined) {
      window.clearTimeout(chromaTimeout)
    }
    if (cursorMoveHandler) {
      window.removeEventListener('mousemove', cursorMoveHandler)
    }
    ScrollTrigger.getAll().forEach((trigger) => trigger.kill())
  }
}
