function generateSVGIcons() {
  const mainBox = document.getElementById('mainBox');

  // List of SVG
  const svgIcons = [
    '<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-circle-letter-a" width="100" height="100" viewBox="0 0 24 24" stroke-width="1.5" stroke="#fdcb6e" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0" /><path d="M10 16v-6a2 2 0 1 1 4 0v6" /><path d="M10 13h4" /></svg>',
    '<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-circle-letter-b" width="100" height="100" viewBox="0 0 24 24" stroke-width="1.5" stroke="#38ada9" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0" /><path d="M10 16h2a2 2 0 1 0 0 -4h-2h2a2 2 0 1 0 0 -4h-2v8z" /></svg>',
    '<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-circle-letter-c" width="100" height="100" viewBox="0 0 24 24" stroke-width="1.5" stroke="#6c5ce7" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0" /><path d="M14 10a2 2 0 1 0 -4 0v4a2 2 0 1 0 4 0" /></svg>',
    '<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-circle-letter-d" width="100" height="100" viewBox="0 0 24 24" stroke-width="1.5" stroke="#e55039" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0" /><path d="M10 8v8h2a2 2 0 0 0 2 -2v-4a2 2 0 0 0 -2 -2h-2z" /></svg>',
    '<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-circle-letter-e" width="100" height="100" viewBox="0 0 24 24" stroke-width="1.5" stroke="#f6b93b" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0" /><path d="M14 8h-4v8h4" /><path d="M10 12h2.5" /></svg>',
    '<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-circle-letter-f" width="100" height="100" viewBox="0 0 24 24" stroke-width="1.5" stroke="#4a69bd" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0" /><path d="M10 12h3" /><path d="M14 8h-4v8" /></svg>',
    '<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-circle-letter-g" width="100" height="100" viewBox="0 0 24 24" stroke-width="1.5" stroke="#778ca3" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0" /><path d="M14 8h-2a2 2 0 0 0 -2 2v4a2 2 0 0 0 2 2h2v-4h-1" /></svg>',
    '<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-circle-letter-h" width="100" height="100" viewBox="0 0 24 24" stroke-width="1.5" stroke="#26de81" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0" /><path d="M10 16v-8m4 0v8" /><path d="M10 12h4" /></svg>',
    '<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-circle-letter-i" width="100" height="100" viewBox="0 0 24 24" stroke-width="1.5" stroke="#fd9644" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0" /><path d="M12 8v8" /></svg>',
    '<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-circle-letter-j" width="100" height="100" viewBox="0 0 24 24" stroke-width="1.5" stroke="#6c5ce7" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0" /><path d="M10 8h4v6a2 2 0 1 1 -4 0" /></svg>',
    '<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-circle-letter-k" width="100" height="100" viewBox="0 0 24 24" stroke-width="1.5" stroke="#45aaf2" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0" /><path d="M10 8v8" /><path d="M14 8l-2.5 4l2.5 4" /><path d="M10 12h1.5" /></svg>',
    '<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-circle-letter-l" width="100" height="100" viewBox="0 0 24 24" stroke-width="1.5" stroke="#f7b731" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0" /><path d="M10 8v8h4" /></svg>',
    '<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-circle-letter-m" width="100" height="100" viewBox="0 0 24 24" stroke-width="1.5" stroke="#eb3b5a" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0" /><path d="M9 16v-8l3 5l3 -5v8" /></svg>',
    '<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-circle-letter-n" width="100" height="100" viewBox="0 0 24 24" stroke-width="1.5" stroke="#8854d0" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0" /><path d="M10 16v-8l4 8v-8" /></svg>',
    '<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-circle-letter-o" width="100" height="100" viewBox="0 0 24 24" stroke-width="1.5" stroke="#ff5e57" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0" /><path d="M12 8a2 2 0 0 1 2 2v4a2 2 0 1 1 -4 0v-4a2 2 0 0 1 2 -2z" /></svg>',
    '<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-circle-letter-p" width="100" height="100" viewBox="0 0 24 24" stroke-width="1.5" stroke="#0fbcf9" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0" /><path d="M10 12h2a2 2 0 1 0 0 -4h-2v8" /></svg>',
    '<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-circle-letter-q" width="100" height="100" viewBox="0 0 24 24" stroke-width="1.5" stroke="#2d3436" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0" /><path d="M12 8a2 2 0 0 1 2 2v4a2 2 0 1 1 -4 0v-4a2 2 0 0 1 2 -2z" /><path d="M13 15l1 1" /></svg>',
    '<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-circle-letter-r" width="100" height="100" viewBox="0 0 24 24" stroke-width="1.5" stroke="#6c5ce7" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0" /><path d="M10 12h2a2 2 0 1 0 0 -4h-2v8m4 0l-3 -4" /></svg>',
    '<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-circle-letter-s" width="100" height="100" viewBox="0 0 24 24" stroke-width="1.5" stroke="#05c46b" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0" /><path d="M10 15a1 1 0 0 0 1 1h2a1 1 0 0 0 1 -1v-2a1 1 0 0 0 -1 -1h-2a1 1 0 0 1 -1 -1v-2a1 1 0 0 1 1 -1h2a1 1 0 0 1 1 1" /></svg>',
    '<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-circle-letter-t" width="100" height="100" viewBox="0 0 24 24" stroke-width="1.5" stroke="#f53b57" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0" /><path d="M10 8h4" /> <path d="M12 8v8" /></svg>',
    '<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-circle-letter-u" width="100" height="100" viewBox="0 0 24 24" stroke-width="1.5" stroke="#ffa801" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0" /><path d="M10 8v6a2 2 0 1 0 4 0v-6" /></svg>',
    '<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-circle-letter-v" width="100" height="100" viewBox="0 0 24 24" stroke-width="1.5" stroke="#485460" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0" /><path d="M10 8l2 8l2 -8" /></svg>',
    '<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-circle-letter-w" width="100" height="100" viewBox="0 0 24 24" stroke-width="1.5" stroke="#ff3f34" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0" /><path d="M9 8l1 8l2 -5l2 5l1 -8" /></svg>',
    '<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-circle-letter-x" width="100" height="100" viewBox="0 0 24 24" stroke-width="1.5" stroke="#474787" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0" /><path d="M10 8l4 8" /><path d="M10 16l4 -8" /></svg>',
    '<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-circle-letter-y" width="100" height="100" viewBox="0 0 24 24" stroke-width="1.5" stroke="#33d9b2" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0" /><path d="M10 8l2 5l2 -5" /><path d="M12 16v-3" /></svg>',
    '<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-circle-letter-z" width="100" height="100" viewBox="0 0 24 24" stroke-width="1.5" stroke="#636e72" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0" /><path d="M10 8h4l-4 8h4" /></svg>',
  ];

  svgIcons.forEach((svgString, index) => {
    const keyCode = 65 + index; // ASCII code
    const svgBox = document.createElement('div');
    svgBox.setAttribute('class', 'svg_box');
    const svgElement = new DOMParser()
      .parseFromString(svgString, 'image/svg+xml')
      .querySelector('svg');

    // Set key-code attribute
    svgElement.setAttribute('key-code', keyCode);
    svgBox.appendChild(svgElement);
    mainBox.appendChild(svgBox);

    // Create audio tags Element
    const audio = document.createElement('audio');
    mainBox.appendChild(audio);
    audio.setAttribute('key-code', keyCode);
    audio.src = `sounds/${String.fromCharCode(keyCode)}.wav`;
  });
}
