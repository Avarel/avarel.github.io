function updateCodeScroll() {
  let term = document.querySelector('.terminal');
  let code = document.querySelector('.terminal code');
  term.scrollTop = code.offsetHeight;
}

let typed = new Typed('.terminal code', {
  strings: [`
> ^1000let an_tran = people["An Tran"]
\`Fetched data from server.\`

> ^1000let resume = an_tran.resume()

\`Resume { 
  link: <a href="./assets/resume.pdf">./assets/resume.pdf</a>,
  version: 3.0
  ... 
}\`

> ^1000resume.education()

\`Education {
  major: "Computer Science",
  college: "Caltech",
  graduation_year: 2023,
  ...
}\`

> ^1000an_tran.info().interests()

\`[
  "Systems",
  "Compilers",
  "Machine Learning",
  "Full-Stack Software"
]\`

> ^1000<a href="#" onclick="typed.reset(true)">Replay?</a>
`],
  typeSpeed: 50,
  cursorChar: '_',
  loop: false,
  onTypingPaused: updateCodeScroll,
});