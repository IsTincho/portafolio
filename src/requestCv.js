import { scrollBehavior } from './scrollBehavior.js'

// The CV is not published as a file: it carries a legal name and a personal
// address, and this repo is public under a handle. Asking for it goes through
// the contact form instead, pre-set to the job-opening option.

function preset(jobLabel) {
  const kind = document.querySelector('.cform select[name="kind"]')
  if (!kind) return false
  if (jobLabel) kind.value = jobLabel
  document.querySelector('.cform textarea[name="message"]')?.focus({ preventScroll: true })
  return true
}

export function requestCv(jobLabel) {
  // The form is already mounted, so set it before scrolling. The timeout only
  // covers the case where the section is not on the page yet; rAF is avoided
  // because it never fires while the tab is in the background.
  if (!preset(jobLabel)) setTimeout(() => preset(jobLabel), 120)
  document.getElementById('contact')?.scrollIntoView({ behavior: scrollBehavior() })
}
