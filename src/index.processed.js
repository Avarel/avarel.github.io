function updateCodeScroll() {
  var term = document.querySelector('.terminal');
  var code = document.querySelector('.terminal code');
  term.scrollTop = code.offsetHeight;
}
var typed = new Typed('.terminal code', {
  strings: ["\n> ^1000let an_tran = people[\"An Tran\"]\n`Fetched data from server.`\n\n> ^1000let resume = an_tran.resume()\n\n`Resume { \n  link: <a href=\"/\">./assets/resume.pdf</a>,\n  version: 3.0\n  ... \n}`\n\n> ^1000resume.education()\n\n`Education {\n  major: \"Computer Science\",\n  college: \"Caltech\",\n  graduation_year: 2023,\n  ...\n}`\n\n> ^1000an_tran.info().interests()\n\n`[\n  \"Systems\",\n  \"Compilers\",\n  \"Machine Learning\",\n  \"Full-Stack Software\"\n]`\n\n> ^1000<a href=\"#\" onclick=\"typed.reset(true)\">Replay?</a>\n"],
  typeSpeed: 50,
  cursorChar: '_',
  loop: false,
  onTypingPaused: updateCodeScroll
});