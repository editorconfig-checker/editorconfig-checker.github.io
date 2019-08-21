import React from 'react';
import logo from './logo.png';
import './App.css';

const Link = ({url, text}) => (
  <a href={url} target="_blank" rel="noopener noreferrer">
    {text}
  </a>
);

const twitterSvg = (
  <svg viewBox="0 0 430 430" class="jsx-924075221">
    <path
      d="M381.384,198.639c24.157,-1.993 40.543,-12.975 46.849,-27.876c-8.714,5.353 -35.764,11.189 -50.703,5.631c-0.732,-3.51 -1.55,-6.844 -2.353,-9.854c-11.383,-41.798 -50.357,-75.472 -91.194,-71.404c3.304,-1.334 6.655,-2.576 9.996,-3.691c4.495,-1.61 30.868,-5.901 26.715,-15.21c-3.5,-8.188 -35.722,6.188 -41.789,8.067c8.009,-3.012 21.254,-8.193 22.673,-17.396c-12.27,1.683 -24.315,7.484 -33.622,15.919c3.36,-3.617 5.909,-8.025 6.45,-12.769c-32.726,20.907 -51.843,63.057 -67.314,103.944c-12.148,-11.773 -22.915,-21.044 -32.574,-26.192c-27.097,-14.531 -59.496,-29.692 -110.355,-48.572c-1.561,16.827 8.322,39.201 36.8,54.08c-6.17,-0.826 -17.453,1.017 -26.477,3.178c3.675,19.277 15.677,35.159 48.169,42.839c-14.849,0.98 -22.523,4.359 -29.478,11.642c6.763,13.407 23.266,29.186 52.953,25.947c-33.006,14.226 -13.458,40.571 13.399,36.642c-45.816,47.323 -118.05,43.845 -159.529,4.264c108.299,147.572 343.716,87.274 378.799,-54.866c26.285,0.224 41.737,-9.105 51.318,-19.39c-15.144,2.57 -37.094,-0.086 -48.733,-4.933Z"
      class="jsx-924075221"
    />
  </svg>
);

const githubSvg = (
  <svg viewBox="0 0 1024 1024" class="jsx-924075221">
    <path
      d="M512 0C229.25 0 0 229.25 0 512c0 226.25 146.688 418.125 350.156 485.812 25.594 4.688 34.938-11.125 34.938-24.625 0-12.188-0.469-52.562-0.719-95.312C242 908.812 211.906 817.5 211.906 817.5c-23.312-59.125-56.844-74.875-56.844-74.875-46.531-31.75 3.53-31.125 3.53-31.125 51.406 3.562 78.47 52.75 78.47 52.75 45.688 78.25 119.875 55.625 149 42.5 4.654-33 17.904-55.625 32.5-68.375C304.906 725.438 185.344 681.5 185.344 485.312c0-55.938 19.969-101.562 52.656-137.406-5.219-13-22.844-65.094 5.062-135.562 0 0 42.938-13.75 140.812 52.5 40.812-11.406 84.594-17.031 128.125-17.219 43.5 0.188 87.312 5.875 128.188 17.281 97.688-66.312 140.688-52.5 140.688-52.5 28 70.531 10.375 122.562 5.125 135.5 32.812 35.844 52.625 81.469 52.625 137.406 0 196.688-119.75 240-233.812 252.688 18.438 15.875 34.75 47 34.75 94.75 0 68.438-0.688 123.625-0.688 140.5 0 13.625 9.312 29.562 35.25 24.562C877.438 930 1024 738.125 1024 512 1024 229.25 794.75 0 512 0z"
      class="jsx-924075221"
    />
  </svg>
);

const xingSvg = (
  <svg viewBox="0 0 2048 2048" class="jsx-924075221">
    <path
      d="M917 795q-10 18-257 456-27 46-65 46h-239q-21 0-31-17t0-36l253-448q1 0 0-1l-161-279q-12-22-1-37 9-15 32-15h239q40 0 66 45zm806-642q11 16 0 37l-528 934v1l336 615q11 20 1 37-10 15-32 15h-239q-42 0-66-45l-339-622q18-32 531-942 25-45 64-45h241q22 0 31 15z"
      class="jsx-924075221"
    />
  </svg>
);

const linkedinSvg = (
  <svg viewBox="0 0 54 54" class="jsx-924075221">
    <path
      d="M48.1,12.9v26.8c0,2.2-0.8,4.1-2.4,5.7c-1.6,1.6-3.5,2.4-5.7,2.4H13.3c-2.2,0-4.1-0.8-5.7-2.4c-1.6-1.6-2.4-3.5-2.4-5.7   V12.9c0-2.2,0.8-4.1,2.4-5.7c1.6-1.6,3.5-2.4,5.7-2.4H40c2.2,0,4.1,0.8,5.7,2.4C47.3,8.8,48.1,10.7,48.1,12.9z M18.7,15.4   c0-1-0.4-1.8-1-2.4C17,12.3,16.2,12,15.1,12c-1.1,0-2,0.3-2.6,0.9c-0.7,0.6-1,1.4-1,2.4c0,0.9,0.3,1.7,1,2.4c0.7,0.6,1.5,1,2.6,1h0   c1.1,0,2-0.3,2.7-1C18.4,17.1,18.7,16.3,18.7,15.4z M11.8,40.7h6.4V21.3h-6.4V40.7z M35,40.7h6.4V29.6c0-2.9-0.7-5-2-6.5   c-1.4-1.5-3.2-2.2-5.4-2.2c-2.5,0-4.5,1.1-5.8,3.3h0.1v-2.8h-6.4c0.1,1.2,0.1,7.7,0,19.4h6.4V29.9c0-0.7,0.1-1.2,0.2-1.6   c0.3-0.7,0.7-1.2,1.3-1.7c0.6-0.5,1.2-0.7,2.1-0.7c2.2,0,3.2,1.5,3.2,4.4V40.7z"
      class="jsx-924075221"
    />
  </svg>
);

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <a
          href="https://github.com/editorconfig-checker"
          target="_blank"
          rel="noopener">
          <img className="logo" src={logo} alt="logo" />
        </a>
      </header>
      <main className="Main">
        <h1>Editorconfig-Checker</h1>
        <h2>What is this about?</h2>
        <p>
          An editorconfig is a defintion how your files should be formatted.
          Compared to other linting tools this tool is language agnostic and
          works for every language and every major editor out there has a plugin
          to read the editorconfig. However, there are no good linting tools out
          there, so I decided to write my own and this is the result. If you
          want to know more about editorconfig have a look here:{' '}
          <Link
            url="https://editorconfig.org/"
            text="https://editorconfig.org"
          />
        </p>

        <h2>For whom is this useful?</h2>
        <p>
          This is especially useful if you have more than one filetype in your
          codebase. Often there are linting tools for every language, but
          nothing that compares every file with a certain defintion. You may
          also have files which don't have a linting tool like configuration
          files, plain text files with no associated programming language, bash
          scripts, xml, or something else. In order to maintain a certain
          formatting and enforce this via linting this is for you.
        </p>

        <h2>How to use this?</h2>

        <h3>Plain</h3>
        <small>
          <Link
            url="https://github.com/editorconfig-checker/editorconfig-checker/releases"
            text="releases"
          />
        </small>
        <p>
          Head over to the{' '}
          <Link
            url="https://github.com/editorconfig-checker/editorconfig-checker/releases"
            text="release page"
          />
          , grab the binary which fits your operating system and architecture,
          extract it and simply run the binary found in the <code>bin</code>{' '}
          directory.
        </p>

        <h3>JavaScript</h3>
        <small>
          <Link
            url="https://www.npmjs.com/package/editorconfig-checker"
            text="npm"
          />{' '}
          |
          <Link
            url="https://github.com/editorconfig-checker/editorconfig-checker.javascript"
            text="github"
          />
        </small>
        <code>npm install --save-dev editorconfig-checker</code>
        <p>
          This provides two binaries called <code>ec</code> and{' '}
          <code>editorconfig-checker</code> which you can call via{' '}
          <code>./node_modules/.bin/ec</code>,{' '}
          <code>./node_modules/.bin/editorconfig-checker</code> or inside your{' '}
          <code>package.json</code> via <code>ec</code> or{' '}
          <code>editorconfig-checker</code>.
        </p>

        <h3>PHP</h3>
        <small>
          <Link
            url="https://github.com/editorconfig-checker/editorconfig-checker.php"
            text="packagist"
          />{' '}
          |
          <Link
            url="https://github.com/editorconfig-checker/editorconfig-checker.php"
            text="github"
          />
        </small>
        <code>composer require --dev editorconfig-checker</code>
        <p>
          This provides two binaries called <code>ec</code> and{' '}
          <code>editorconfig-checker</code> which you can call via{' '}
          <code>./vendor/bin/ec</code>,{' '}
          <code>./vendor/bin/editorconfig-checker</code> or inside your{' '}
          <code>composer.json</code> via <code>ec</code> or{' '}
          <code>editorconfig-checker</code>.
        </p>

        <h3>Docker</h3>
        <small>
          <Link
            url="https://hub.docker.com/r/mstruebing/editorconfig-checker"
            text="dockerhub"
          />
        </small>
        <code>
          docker run --rm --volume=$PWD:/check mstruebing/editorconfig-checker
        </code>

        <h3>Arch Linux</h3>
        <small>
          <Link
            url="https://aur.archlinux.org/packages/editorconfig-checker-git/"
            text="AUR"
          />
        </small>
        <p>
          Just use your favourite AUR-helper to install the package{' '}
          <code>editorconfig-checker-git</code>
        </p>
        <code>trizen -S editorconfig-checker-git</code>

        <p>Or build it yourself</p>
        <code>
          git clone https://aur.archlinux.org/editorconfig-checker-git.git && cd
          editorconfig-checker-git && makepkg -si
        </code>

        <h2>Configuration</h2>
        <p>
          There are a bunch of command line flags you can use, but there is also
          a configuration file which you can use in your current working
          directory called <code>.ecrc</code>. If you want to use a different
          config you can pass the <code>-config &lt;path&gt;</code>-flag to the
          binary. You can generate a configuration with the <code>init</code>
          -flag. A sample configuration file can look like this:
        </p>
        <pre>
          {`{
  "Verbose": false,
  "Debug": false,
  "IgnoreDefaults": false,
  "SpacesAftertabs": false,
  "NoColor": false,
  "Exclude": [],
  "AllowedContentTypes": [],
  "PassedFiles": [],
  "Disable": {
    "EndOfLine": false,
    "Indentation": false,
    "InsertFinalNewline": false,
    "TrimTrailingWhitespace": false
  }
}`}
        </pre>

        <h2>Support</h2>

        <h3> Github Issues</h3>
        <p>
          In order to get help with problems, feature requests or anything else
          you can use Github issues. Please try to use the correct repository,
          the main repository where most development is done is this one:{' '}
          <Link
            url="https://github.com/editorconfig-checker/editorconfig-checker"
            text="editorconfig-cheker/editorconfig-checker"
          />
          . If you have issues for a specific language client, which are in fact
          only wrappers of the main binary, you can of course open an issue
          there - and don't worry, if you use the wrong repository it is not a
          big problem. :)
        </p>

        <h3>IRC</h3>
        <p>
          Believe it or not, I'm still an active user of IRC. If you want you
          can reach me there on freenode in <code>#editorconfig-checker</code>.
          If you don't have an IRC-client set up you can use this web-client{' '}
          <Link
            url="https://webchat.freenode.net/?channels=editorconfig-checker"
            text="freenode webchat"
          />
          .
        </p>
      </main>
      <footer>
        <ul>
          <li>
            <Link url="https://twitter.com/mxstrbng" text={twitterSvg} />
          </li>
          <li>
            <Link url="https://github.com/mstruebing" text={githubSvg} />
          </li>
          <li>
            <Link
              url="https://www.xing.com/profile/Max_Struebing2?sc_o=mxb_p"
              text={xingSvg}
            />
          </li>
          <li>
            <Link
              url="https://www.linkedin.com/in/max-str%C3%BCbing-131165131/"
              text={linkedinSvg}
            />
          </li>
        </ul>
      </footer>
    </div>
  );
}

export default App;
