import "./index.scss";

import Typed from 'typed.js';

function updateCodeScroll() {
    let term = document.querySelector<HTMLElement>('.body .terminal')!;
    let code = document.querySelector<HTMLElement>('.body .terminal code#maincode')!;
    term.scrollTop = code.offsetHeight;
}

new Typed('.body code', {
    strings: [`
^500|> <span class="sx kw">use</span> <span class="sx id">global</span>::<span class="sx id">world</span>::<span class="sx st">PEOPLE</span>;
^500|> <span class="sx kw">let</span> <span class="sx lv">an_tran</span> = <span class="sx st">PEOPLE</span>[<span class="sx str">"An Tran"</span>];

^500|> <span class="sx kw">let</span> <span class="sx lv">resume</span> = <span class="sx lv">an_tran</span>.<span class="sx fc">resume</span>();
\`<| <span class="sx id">Resume</span> { 
  <span class="sx fd">link</span>: <a href="./assets/resume.pdf">./assets/resume.pdf</a>,
  <span class="sx fd">version</span>: <span class="sx nb">4.0</span>
  ... 
}\`

^500|> <span class="sx lv">resume</span>.<span class="sx fc">education</span>();
\`<| <span class="sx id">Education</span> {
  <span class="sx fd">major</span>: <span class="sx str">"Computer Science"</span>,
  <span class="sx fd">college</span>: <span class="sx str">"Caltech"</span>,
  <span class="sx fd">graduation_year</span>: <span class="sx nb">2023</span>,
  <span class="sx fd">gpa</span>: <span class="sx nb">4.15</span>,
  ...
}\`

^500|> <span class="sx lv">an_tran</span>.<span class="sx fc">info</span>().<span class="sx fc">interests</span>();
\`<| [
  <span class="sx str">"Systems"</span>,
  <span class="sx str">"Compilers"</span>,
  <span class="sx str">"Machine Learning"</span>,
  <span class="sx str">"Full-Stack Software"</span>,
]\`

|> `],
    typeSpeed: 20,
    cursorChar: '_',
    loop: false,
    onTypingPaused: updateCodeScroll,
});