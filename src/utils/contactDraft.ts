/** Prepare an email in the visitor's own email app; this does not deliver it. */
export function openContactDraft(recipient: string, subject: string, body: string) {
  window.location.href = 'mailto:' + encodeURIComponent(recipient) +
    '?subject=' + encodeURIComponent(subject) + '&body=' + encodeURIComponent(body);
}
